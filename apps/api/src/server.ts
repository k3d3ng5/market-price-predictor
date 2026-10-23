/**
 * ProducePrice API — first Express slice (SP-07).
 * One rule above all: numbers come from packages/domain functions fed by the DB;
 * an endpoint NEVER invents, imputes or averages a price away from its evidence.
 */
import { PrismaClient } from "@produceprice/db/prisma/generated/client/index.js";
import {
  BEGINNER_GUIDE_STEPS,
  buildPriceCard,
  checkForecastEligibility,
  compareObservations,
  convertToPerKg,
  freshness,
  gatedForecast,
  marketDisplay,
  rollingOriginBacktest,
  type SeriesPoint,
  type Unit,
} from "@produceprice/domain/src/index.js";
import cors from "cors";
import express, { type Request, type Response } from "express";

const db = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

const FRESH_LIMIT_DAYS = 7;

/** DB rows → domain Unit (aliases are comma-joined for SQLite). */
function toDomainUnit(row: {
  id: string; commodityId: string; name: string; aliases: string;
  kgEquivalent: number | null; kgBasisNote: string | null; status: string;
}): Unit {
  return {
    id: row.id,
    commodityId: row.commodityId,
    name: row.name,
    aliases: row.aliases ? row.aliases.split(",").filter(Boolean) : [],
    kgEquivalent: row.kgEquivalent,
    kgBasisNote: row.kgBasisNote,
    status: row.status === "validated" ? "validated" : "unvalidated",
  };
}

/** Any response built from a "demonstration"-status source carries the notice. */
const DEMO_NOTICE =
  "⚠️ DATA NOTICE: current observations come from a labelled DEMONSTRATION dataset (synthetic) — NOT real market data (PRD §7.6).";

async function sourceNotice(sourceId: string): Promise<string | undefined> {
  const src = await db.source.findUnique({ where: { id: sourceId } });
  return src?.validationStatus === "demonstration" ? DEMO_NOTICE : undefined;
}

async function noticeForPair(commodityId: string, marketId: string): Promise<string | undefined> {
  const row = await db.observation.findFirst({
    where: { commodityId, marketId, isCurrent: true },
    orderBy: { observedAt: "desc" },
    select: { sourceId: true },
  });
  return row ? sourceNotice(row.sourceId) : undefined;
}

/* ------------------------------- health ------------------------------- */
app.get("/v1/health", (_req: Request, res: Response) => {
  res.json({ ok: true, service: "produceprice-api", version: "0.1.0" });
});

/* ------------------------------- sources ------------------------------ */
app.get("/v1/sources", async (_req: Request, res: Response) => {
  const [rows, obs] = await Promise.all([
    db.source.findMany({
      select: { id: true, name: true, owner: true, url: true, licence: true, frequency: true, validationStatus: true, attributionText: true },
      orderBy: { name: "asc" },
    }),
    // Real per-source coverage straight from the append-only observation table.
    db.observation.findMany({
      select: { sourceId: true, marketId: true, commodityId: true, observedAt: true, ingestedAt: true },
    }),
  ]);

  const bySource = new Map<string, {
    observations: number;
    markets: Set<string>;
    commodities: Set<string>;
    firstObservedAt: Date | null;
    lastObservedAt: Date | null;
    lastWrittenAt: Date | null;
  }>();
  for (const o of obs) {
    const agg = bySource.get(o.sourceId) ?? {
      observations: 0,
      markets: new Set<string>(),
      commodities: new Set<string>(),
      firstObservedAt: null,
      lastObservedAt: null,
      lastWrittenAt: null,
    };
    agg.observations += 1;
    agg.markets.add(o.marketId);
    agg.commodities.add(o.commodityId);
    if (!agg.firstObservedAt || o.observedAt < agg.firstObservedAt) agg.firstObservedAt = o.observedAt;
    if (!agg.lastObservedAt || o.observedAt > agg.lastObservedAt) agg.lastObservedAt = o.observedAt;
    if (!agg.lastWrittenAt || o.ingestedAt > agg.lastWrittenAt) agg.lastWrittenAt = o.ingestedAt;
    bySource.set(o.sourceId, agg);
  }

  const sources = rows.map((s) => {
    const agg = bySource.get(s.id);
    return {
      ...s,
      isDemonstration: s.validationStatus === "demonstration",
      observations: agg?.observations ?? 0,
      marketsCovered: agg?.markets.size ?? 0,
      commoditiesCovered: agg?.commodities.size ?? 0,
      firstObservedAt: agg?.firstObservedAt?.toISOString().slice(0, 10) ?? null,
      lastObservedAt: agg?.lastObservedAt?.toISOString().slice(0, 10) ?? null,
      lastWrittenAt: agg?.lastWrittenAt?.toISOString() ?? null,
    };
  });
  res.json({
    sources,
    demoSourceIds: sources.filter((s) => s.isDemonstration).map((s) => s.id),
    freshLimitDays: FRESH_LIMIT_DAYS,
  });
});

/* --------------------------- beginner guide --------------------------- */
// One copy source: the guide text lives in packages/domain, served here so the
// PWA (and the future Telegram bot) never fork the wording.
app.get("/v1/guide", (_req: Request, res: Response) => {
  res.json({ steps: BEGINNER_GUIDE_STEPS });
});

/* ------------------------------- catalog ------------------------------ */
// Real coverage per commodity × market, used by pickers. No invented counts.
app.get("/v1/catalog", async (_req: Request, res: Response) => {
  const [markets, commodities, obs] = await Promise.all([
    db.market.findMany({ orderBy: [{ state: "asc" }, { name: "asc" }] }),
    db.commodity.findMany({ orderBy: { name: "asc" } }),
    db.observation.findMany({
      where: { isCurrent: true },
      select: { commodityId: true, marketId: true, observedAt: true, sourceId: true },
    }),
  ]);

  const coverage = new Map<string, Map<string, { n: number; latest: Date; sources: Set<string> }>>();
  for (const o of obs) {
    let perMarket = coverage.get(o.marketId);
    if (!perMarket) {
      perMarket = new Map();
      coverage.set(o.marketId, perMarket);
    }
    const slot = perMarket.get(o.commodityId) ?? { n: 0, latest: o.observedAt, sources: new Set<string>() };
    slot.n += 1;
    if (o.observedAt > slot.latest) slot.latest = o.observedAt;
    slot.sources.add(o.sourceId);
    perMarket.set(o.commodityId, slot);
  }

  const sourceRows = await db.source.findMany({ select: { id: true, name: true, validationStatus: true } });
  const sourceNames = new Map(sourceRows.map((s) => [s.id, s.name]));
  const sourceDemo = new Map(sourceRows.map((s) => [s.id, s.validationStatus === "demonstration"]));

  res.json({
    commodities: commodities.map((c) => ({
      id: c.id,
      name: c.name,
      marketsWithData: markets.filter((m) => coverage.get(m.id)?.has(c.id)).length,
    })),
    markets: markets.map((m) => {
      const perMarket = coverage.get(m.id);
      const entries = commodities
        .map((c) => {
          const slot = perMarket?.get(c.id);
          if (!slot) return null;
          const sourceIds = [...slot.sources];
          const demoCount = sourceIds.filter((id) => sourceDemo.get(id)).length;
          return {
            commodityId: c.id,
            observations: slot.n,
            latestObservedAt: slot.latest.toISOString().slice(0, 10),
            sourceIds,
            sourceNames: sourceIds.map((id) => sourceNames.get(id) ?? id),
            // UI defaults never land on synthetic demo rows while real data exists.
            dataKind: demoCount === 0 ? "real" : demoCount === sourceIds.length ? "demo" : "mixed",
          };
        })
        .filter((x): x is NonNullable<typeof x> => x !== null);
      return {
        id: m.id,
        name: m.name,
        state: m.state,
        display: marketDisplay(m.name, m.state),
        coverage: entries,
      };
    }),
  });
});

/* --------------------------- latest price ----------------------------- */
app.get("/v1/prices/latest", async (req: Request, res: Response) => {
  const commodityId = String(req.query.commodity ?? "");
  const marketId = String(req.query.market ?? "");
  if (!commodityId || !marketId) {
    res.status(400).json({ error: "missing_params", detail: "commodity and market are required" });
    return;
  }
  const obs = await db.observation.findFirst({
    where: { commodityId, marketId, isCurrent: true },
    orderBy: { observedAt: "desc" },
    include: { unit: true, source: true, commodity: true, market: true },
  });
  if (!obs) {
    // Missing is NEVER shown as zero or as a live price (FR-P1).
    res.status(404).json({
      error: "no_observation",
      detail: "No observation recorded for this pair yet.",
      commodity: commodityId,
      market: marketId,
    });
    return;
  }
  const now = new Date();
  const unit = toDomainUnit(obs.unit);
  const perKg = convertToPerKg(obs.priceMinor, unit);
  const card = buildPriceCard({
    priceMinor: obs.priceMinor,
    currencyCode: obs.currencyCode,
    unitName: unit.name,
    observedAt: obs.observedAt,
    trustLabel: obs.trustLabel as any,
    now,
  });
  res.json({
    commodity: { id: obs.commodity.id, name: obs.commodity.name },
    market: {
      id: obs.market.id,
      name: obs.market.name,
      state: obs.market.state,
      display: marketDisplay(obs.market.name, obs.market.state),
    },
    priceMinor: obs.priceMinor,
    currencyCode: obs.currencyCode,
    unit: unit.name,
    unitStatus: unit.status,
    observedAt: obs.observedAt.toISOString().slice(0, 10),
    trustLabel: obs.trustLabel,
    price: card,
    pricePerKgMinor: perKg.ok ? perKg.pricePerKgMinor : null,
    perKgBlockedReason: perKg.ok ? null : perKg.reason,
    freshness: freshness(obs.observedAt, now, FRESH_LIMIT_DAYS),
    source: { id: obs.source.id, name: obs.source.name, validationStatus: obs.source.validationStatus },
    notice: await sourceNotice(obs.sourceId),
  });
});

/* ------------------------------- history ------------------------------ */
app.get("/v1/prices/history", async (req: Request, res: Response) => {
  const commodityId = String(req.query.commodity ?? "");
  const marketId = String(req.query.market ?? "");
  const limit = Math.min(Number(req.query.limit ?? 260), 520);
  if (!commodityId || !marketId) {
    res.status(400).json({ error: "missing_params", detail: "commodity and market are required" });
    return;
  }
  const rows = await db.observation.findMany({
    where: { commodityId, marketId, isCurrent: true },
    orderBy: { observedAt: "desc" },
    take: limit,
    include: { unit: true, source: { select: { id: true, name: true, validationStatus: true } } },
  });
  rows.reverse(); // ascending by date
  const series = rows.map((r) => {
    const unit = toDomainUnit(r.unit);
    const perKg = convertToPerKg(r.priceMinor, unit);
    return {
      observedAt: r.observedAt.toISOString().slice(0, 10),
      priceMinor: r.priceMinor,
      currencyCode: r.currencyCode,
      unit: unit.name,
      trustLabel: r.trustLabel,
      pricePerKgMinor: perKg.ok ? perKg.pricePerKgMinor : null,
      perKgBlockedReason: perKg.ok ? null : perKg.reason,
      sourceId: r.source.id,
      sourceName: r.source.name,
    };
  });
  const hasDemo = rows.some((r) => r.source.validationStatus === "demonstration");
  res.json({
    commodity: commodityId,
    market: marketId,
    n: series.length,
    series,
    notice: hasDemo ? DEMO_NOTICE : undefined,
  });
});

/* ------------------------------- compare ------------------------------ */
app.get("/v1/prices/compare", async (req: Request, res: Response) => {
  const commodityId = String(req.query.commodity ?? "");
  const marketA = String(req.query.market_a ?? "");
  const marketB = String(req.query.market_b ?? "");
  if (!commodityId || !marketA || !marketB) {
    res.status(400).json({ error: "missing_params", detail: "commodity, market_a and market_b are required" });
    return;
  }
  const [obsA, obsB] = await Promise.all([
    db.observation.findFirst({
      where: { commodityId, marketId: marketA, isCurrent: true },
      orderBy: { observedAt: "desc" },
      include: { unit: true, market: true, source: { select: { id: true, name: true, validationStatus: true } }, commodity: true },
    }),
    db.observation.findFirst({
      where: { commodityId, marketId: marketB, isCurrent: true },
      orderBy: { observedAt: "desc" },
      include: { unit: true, market: true, source: { select: { id: true, name: true, validationStatus: true } }, commodity: true },
    }),
  ]);
  if (!obsA || !obsB) {
    res.status(404).json({ error: "no_observation", detail: "Both markets need at least one observation." });
    return;
  }
  const now = new Date();
  const unitA = toDomainUnit(obsA.unit);
  const unitB = toDomainUnit(obsB.unit);
  const perKgA = convertToPerKg(obsA.priceMinor, unitA);
  const perKgB = convertToPerKg(obsB.priceMinor, unitB);
  const comparison = compareObservations({
    unitA,
    unitB,
    priceMinorA: obsA.priceMinor,
    priceMinorB: obsB.priceMinor,
  });
  const side = (obs: typeof obsA, marketLabel: string, unit: Unit, perKg: ReturnType<typeof convertToPerKg>) => ({
    marketId: obs.market.id,
    market: marketLabel,
    state: obs.market.state,
    observedAt: obs.observedAt.toISOString().slice(0, 10),
    priceMinor: obs.priceMinor,
    currencyCode: obs.currencyCode,
    unit: unit.name,
    unitStatus: unit.status,
    pricePerKgMinor: perKg.ok ? perKg.pricePerKgMinor : null,
    perKgBlockedReason: perKg.ok ? null : perKg.reason,
    trustLabel: obs.trustLabel,
    freshness: freshness(obs.observedAt, now, FRESH_LIMIT_DAYS),
    source: { id: obs.source.id, name: obs.source.name, validationStatus: obs.source.validationStatus },
    notice: obs.source.validationStatus === "demonstration" ? DEMO_NOTICE : undefined,
  });
  res.json({
    commodity: commodityId,
    commodityName: obsA.commodity.name,
    market_a: marketDisplay(obsA.market.name, obsA.market.state),
    market_b: marketDisplay(obsB.market.name, obsB.market.state),
    side_a: side(obsA, marketDisplay(obsA.market.name, obsA.market.state), unitA, perKgA),
    side_b: side(obsB, marketDisplay(obsB.market.name, obsB.market.state), unitB, perKgB),
    comparable: comparison.comparable,
    reason: comparison.comparable ? null : comparison.reason,
    percentDifference: comparison.comparable ? comparison.percentDifference : null,
    // FR-P3: incompatible units BLOCK the comparison with the reason.
    blockExplanation: comparison.comparable
      ? null
      : "Comparison blocked: a validated unit conversion is required before prices can be compared (ADR-018).",
    notice: [obsA, obsB].some((o) => o.source.validationStatus === "demonstration") ? DEMO_NOTICE : undefined,
  });
});

/* --------------------------- forecast: gate + engine ------------------ */

type CachedBacktest = { key: string; result: unknown };
let backtestCache: CachedBacktest | null = null;

async function perKgSeries(commodityId: string, marketId: string): Promise<SeriesPoint[]> {
  const rows = await db.observation.findMany({
    where: { commodityId, marketId, isCurrent: true },
    orderBy: { observedAt: "asc" },
    include: { unit: true },
  });
  const points: SeriesPoint[] = [];
  for (const r of rows) {
    const perKg = convertToPerKg(r.priceMinor, toDomainUnit(r.unit));
    if (perKg.ok) {
      points.push({
        observedAt: r.observedAt.toISOString().slice(0, 10),
        pricePerKgMinor: perKg.pricePerKgMinor!,
      });
    }
  }
  return points;
}

app.get("/v1/forecast/eligibility", async (req: Request, res: Response) => {
  const commodityId = String(req.query.commodity ?? "");
  const marketId = String(req.query.market ?? "");
  if (!commodityId || !marketId) {
    res.status(400).json({ error: "missing_params", detail: "commodity and market are required" });
    return;
  }
  const latest = await db.observation.findFirst({
    where: { commodityId, marketId, isCurrent: true },
    orderBy: { observedAt: "desc" },
  });
  const n = await db.observation.count({ where: { commodityId, marketId, isCurrent: true } });
  const daysSinceLast = latest ? Math.floor((Date.now() - latest.observedAt.getTime()) / 86_400_000) : null;
  const eligibility = checkForecastEligibility({ historicalPoints: n, daysSinceLastObservation: daysSinceLast });
  res.json({
    commodity: commodityId,
    market: marketId,
    ...eligibility,
    dataNotice: await noticeForPair(commodityId, marketId),
  });
});

app.get("/v1/forecast/backtest", async (req: Request, res: Response) => {
  const commodityId = String(req.query.commodity ?? "tomato");
  const marketId = String(req.query.market ?? "wuse");
  const horizon = Math.min(Math.max(Number(req.query.horizon ?? 4), 1), 12);
  const series = await perKgSeries(commodityId, marketId);
  const dataNotice = await noticeForPair(commodityId, marketId);
  const marketRow = await db.market.findUnique({ where: { id: marketId } });
  const marketName = marketRow ? marketDisplay(marketRow.name, marketRow.state) : marketId;
  const commodityRow = await db.commodity.findUnique({ where: { id: commodityId } });
  const commodityName = commodityRow?.name ?? commodityId;
  if (series.length < 30) {
    res.status(409).json({
      error: "insufficient_history",
      detail: `Need ≥ 30 per-kg points for a meaningful backtest; have ${series.length}.`,
      forecastDisplay: "Not available yet — insufficient history.",
      displayLine: "Not available yet — insufficient history.",
      dataNotice,
    });
    return;
  }
  const cacheKey = `wfpbt:${commodityId}:${marketId}:${horizon}:${series.length}:${series[series.length - 1]?.observedAt}`;
  if (backtestCache?.key === cacheKey) {
    res.json(backtestCache.result);
    return;
  }
  const backtest = rollingOriginBacktest(series, { horizon, period: 52 });
  const gate = gatedForecast(series, backtest);
  const result = {
    commodity: commodityId,
    commodityName,
    market: marketId,
    marketName,
    horizonSteps: horizon,
    seriesLength: series.length,
    firstObservedAt: series[0]?.observedAt ?? null,
    lastObservedAt: series[series.length - 1]?.observedAt ?? null,
    backtest,
    predictiveGate: gate,
    // FR-F5: display copy — range + reliability, never a promise.
    displayLine: gate.publishable
      ? `Expected next price in ${marketName}: ₦${(gate.centralPerKgMinor! / 100).toLocaleString("en-NG")} per kg of ${commodityName.toLowerCase()} (range ₦${(gate.lowPerKgMinor! / 100).toLocaleString("en-NG")}–₦${(gate.highPerKgMinor! / 100).toLocaleString("en-NG")}). ${gate.reliability}`
      : `Not available yet — ${gate.reasonCode === "does_not_beat_baseline" ? "no model beats the naive baseline on held-out data for this pair" : "insufficient backtest evidence"}.`,
    dataNotice,
  };
  backtestCache = { key: cacheKey, result };
  res.json(result);
});

// NOTE: ports 3000/3001 stay free for other local apps; ProducePrice defaults to 4000.
const PORT = Number(process.env.PORT ?? 4000);
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`produceprice-api listening on http://localhost:${PORT}`));
}

export { app };
