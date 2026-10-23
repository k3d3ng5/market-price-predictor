/**
 * ProducePrice API — first Express slice (SP-07).
 * One rule above all: numbers come from packages/domain functions fed by the DB;
 * an endpoint NEVER invents, imputes or averages a price away from its evidence.
 */
import { PrismaClient } from "@produceprice/db/prisma/generated/client/index.js";
import {
  buildPriceCard,
  checkForecastEligibility,
  compareObservations,
  convertToPerKg,
  freshness,
  gatedForecast,
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

/* ------------------------------- health ------------------------------- */
app.get("/v1/health", (_req: Request, res: Response) => {
  res.json({ ok: true, service: "produceprice-api", version: "0.1.0" });
});

/* ------------------------------- sources ------------------------------ */
app.get("/v1/sources", async (_req: Request, res: Response) => {
  const rows = await db.source.findMany({
    select: { id: true, name: true, owner: true, url: true, licence: true, frequency: true, validationStatus: true, attributionText: true },
    orderBy: { name: "asc" },
  });
  res.json({ sources: rows, notice: DEMO_NOTICE });
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
    market: { id: obs.market.id, name: obs.market.name },
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
    include: { unit: true },
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
      // Derived, nullable: gaps and unvalidated units stay NULL — never fabricated.
      pricePerKgMinor: perKg.ok ? perKg.pricePerKgMinor : null,
      perKgBlockedReason: perKg.ok ? null : perKg.reason,
    };
  });
  res.json({
    commodity: commodityId,
    market: marketId,
    n: series.length,
    series,
    notice: DEMO_NOTICE,
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
    db.observation.findFirst({ where: { commodityId, marketId: marketA, isCurrent: true }, orderBy: { observedAt: "desc" }, include: { unit: true, market: true } }),
    db.observation.findFirst({ where: { commodityId, marketId: marketB, isCurrent: true }, orderBy: { observedAt: "desc" }, include: { unit: true, market: true } }),
  ]);
  if (!obsA || !obsB) {
    res.status(404).json({ error: "no_observation", detail: "Both markets need at least one observation." });
    return;
  }
  const unitA = toDomainUnit(obsA.unit);
  const unitB = toDomainUnit(obsB.unit);
  const comparison = compareObservations({
    unitA,
    unitB,
    priceMinorA: obsA.priceMinor,
    priceMinorB: obsB.priceMinor,
  });
  res.json({
    commodity: commodityId,
    market_a: obsA.market.name,
    market_b: obsB.market.name,
    comparable: comparison.comparable,
    reason: comparison.comparable ? null : comparison.reason,
    percentDifference: comparison.comparable ? comparison.percentDifference : null,
    // FR-P3: incompatible units BLOCK the comparison with the reason.
    blockExplanation: comparison.comparable
      ? null
      : "Comparison blocked: a validated unit conversion is required before prices can be compared (ADR-018).",
    notice: DEMO_NOTICE,
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
    dataNotice: DEMO_NOTICE,
  });
});

app.get("/v1/forecast/backtest", async (req: Request, res: Response) => {
  const commodityId = String(req.query.commodity ?? "tomato");
  const marketId = String(req.query.market ?? "wuse");
  const horizon = Math.min(Math.max(Number(req.query.horizon ?? 4), 1), 12);
  const series = await perKgSeries(commodityId, marketId);
  const marketRow = await db.market.findUnique({ where: { id: marketId } });
  const marketName = marketRow?.name ?? marketId;
  const commodityRow = await db.commodity.findUnique({ where: { id: commodityId } });
  const commodityName = commodityRow?.name ?? commodityId;
  if (series.length < 30) {
    res.status(409).json({
      error: "insufficient_history",
      detail: `Need ≥ 30 per-kg points for a meaningful backtest; have ${series.length}.`,
      forecastDisplay: "Not available yet — insufficient history.",
      dataNotice: DEMO_NOTICE,
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
    backtest,
    predictiveGate: gate,
    // FR-F5: display copy — range + reliability, never a promise.
    displayLine: gate.publishable
      ? `Expected next price in ${marketName}: ₦${(gate.centralPerKgMinor! / 100).toLocaleString("en-NG")} per kg of ${commodityName.toLowerCase()} (range ₦${(gate.lowPerKgMinor! / 100).toLocaleString("en-NG")}–₦${(gate.highPerKgMinor! / 100).toLocaleString("en-NG")}). ${gate.reliability}`
      : `Not available yet — ${gate.reasonCode === "does_not_beat_baseline" ? "no model beats the naive baseline on held-out data for this pair" : "insufficient backtest evidence"}.`,
    dataNotice: DEMO_NOTICE,
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
