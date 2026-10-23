/**
 * SP-06b — Ingest WFP Nigeria Food Prices (real historical data) from HDX.
 *
 * Source: WFP Food Prices for Nigeria, CC BY-IGO, via data.humdata.org
 * (dataset 42db041f, resource 12b51155). Data: 2002→present, monthly-ish.
 *
 * Honest ingestion rules (ADR-012/018, PRD §7.2):
 * - Original price AND unit stored verbatim; price_per_kg is derived+nullable.
 * - Unit conversion only from the unit string itself (e.g., "0.5 KG"), marked
 *   validated with the basis note quoting that string.
 * - Idempotent: deterministic observation ids + upsert (re-run adds nothing).
 * - WFP rows are trust-labelled official_statistic (institutional collection).
 */
import { PrismaClient } from "./generated/client/index.js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const db = new PrismaClient();
const here = dirname(fileURLToPath(import.meta.url));
const PRICES_CSV = join(here, "../../../data/raw/wfp_food_prices_nga.csv");
const MARKETS_CSV = join(here, "../../../data/raw/wfp_markets_nga.csv");

const NG = "ng";
const NGN = "NGN";
const WFP_SOURCE_ID = "wfp_food_prices_nga";

/** commodity name (WFP) → our commodity id; only tracked commodities ingest. */
const COMMODITY_MAP: Record<string, string> = {
  Tomatoes: "tomato",
  Onions: "onion",
};

/** Parse a WFP unit string ("KG", "0.5 KG", "3.9 KG") → kg equivalent, or null. */
export function parseUnitKg(raw: string): number | null {
  const s = raw.trim();
  if (/^(1\s*)?KG$/i.test(s)) return 1;
  const m = s.match(/^(\d+(?:\.\d+)?)\s*KG$/i);
  if (m) {
    const kg = Number(m[1]);
    return kg > 0 ? kg : null;
  }
  return null; // unparseable units are skipped, never guessed
}

interface Row {
  date: string; admin1: string; admin2: string; market: string; market_id: string;
  latitude: string; longitude: string; category: string; commodity: string;
  commodity_id: string; unit: string; priceflag: string; pricetype: string;
  currency: string; price: string; usdprice: string;
}

function splitCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]!;
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; }
        else inQuotes = false;
      } else cur += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ",") { out.push(cur); cur = ""; }
    else cur += ch;
  }
  out.push(cur);
  return out;
}

function parseCsv(text: string): Row[] {
  const lines = text.split(/\r?\n/);
  while (lines.length > 0 && lines[lines.length - 1]!.trim() === "") lines.pop();
  const header = splitCsvLine(lines[0]!).map((h) => h.trim());
  const out: Row[] = [];
  for (const line of lines.slice(1)) {
    if (line.trim() === "") continue;
    const cells = splitCsvLine(line);
    const row = {} as Record<string, string>;
    header.forEach((h, i) => (row[h] = (cells[i] ?? "").trim()));
    if (!row.date || !row.market || !row.commodity) continue; // malformed
    out.push(row as unknown as Row);
  }
  return out;
}

async function main() {
  console.log("Ingesting WFP Nigeria Food Prices…");
  const prices = parseCsv(readFileSync(PRICES_CSV, "utf8"));
  const marketsMeta = parseCsv(readFileSync(MARKETS_CSV, "utf8"));

  await db.source.upsert({
    where: { id: WFP_SOURCE_ID },
    update: {},
    create: {
      id: WFP_SOURCE_ID,
      name: "WFP Nigeria Food Prices (HDX)",
      owner: "World Food Programme / FEWS NET via FAO GIEWS",
      url: "https://data.humdata.org/dataset/wfp-food-prices-for-nigeria",
      licence: "CC BY-IGO",
      frequency: "monthly",
      validationStatus: "validated",
      attributionText:
        "World Food Programme Price Database for Nigeria, distributed via the Humanitarian Data Exchange (CC BY-IGO).",
    },
  });

  // Markets CSV keyed by market_id (admin1 state from prices file when missing)
  const marketByState = new Map(
    marketsMeta.filter((m) => m.market_id).map((m) => [String(m.market_id), m]),
  );

  const commodityIds = new Set(Object.values(COMMODITY_MAP));
  // Ensure tracked commodities exist
  for (const id of commodityIds) {
    await db.commodity.upsert({
      where: { id },
      update: {},
      create: { id, slug: id, name: id === "tomato" ? "Tomatoes" : "Onions" },
    });
  }

  // Pre-scan only rows we ingest
  const rows = prices.filter(
    (r) => COMMODITY_MAP[r.commodity] !== undefined && r.market_id,
  );
  console.log(`WFP rows for tracked commodities: ${rows.length}`);

  // 1) markets referenced
  const rowByMarketId = new Map<string, Row>();
  for (const r of rows) {
    if (r.market_id && !rowByMarketId.has(r.market_id)) rowByMarketId.set(r.market_id, r);
  }
  for (const [mid, fromRow] of rowByMarketId) {
    const meta = marketByState.get(mid);
    const name = meta?.market ?? fromRow.market;
    const state = meta?.admin1 ?? fromRow.admin1;
    if (!name) continue;
    await db.market.upsert({
      where: { id: `wfp_${mid}` },
      update: {},
      create: { id: `wfp_${mid}`, name, state: state || null, countryId: NG, isPilot: false },
    });
  }

  // 2) units by (commodity, unit-string)
  const unitKey = (commoditySlug: string, raw: string) =>
    `wfp_${commoditySlug}_${raw.toLowerCase().replace(/\s+/g, "")}`;
  const unitsSeen = new Set(
    rows.map((r) => `${COMMODITY_MAP[r.commodity]}|${r.unit}`),
  );
  const kgByUnitKey = new Map<string, number | null>();
  for (const entry of unitsSeen) {
    const [commoditySlug, rawUnit] = entry.split("|") as [string, string];
    const kg = parseUnitKg(rawUnit);
    kgByUnitKey.set(`${commoditySlug}|${rawUnit}`, kg);
    await db.unit.upsert({
      where: { id: unitKey(commoditySlug, rawUnit) },
      update: { kgEquivalent: kg },
      create: {
        id: unitKey(commoditySlug, rawUnit),
        commodityId: commoditySlug,
        name: rawUnit,
        aliases: rawUnit.toLowerCase(),
        kgEquivalent: kg,
        kgBasisNote: kg
          ? `Unit pulse parsed from WFP record: "${rawUnit}" = ${kg} kg (mechanical, per-source)`
          : null,
        status: kg ? "validated" : "unvalidated",
      },
    });
  }

  // 3) observations — idempotent: preload existing ids, bulk-insert the deltas
  let skipped = 0, unconvertible = 0;
  const toInsert: Array<{
    id: string; commodityId: string; marketId: string; sourceId: string;
    priceMinor: number; currencyCode: string; unitId: string; priceType: string;
    observedAt: Date; trustLabel: string; pricePerKgMinor: number; normalisationMethod: string;
  }> = [];
  for (const r of rows) {
    const commoditySlug = COMMODITY_MAP[r.commodity]!;
    const price = Number(r.price);
    if (!Number.isFinite(price) || price <= 0 || r.currency !== "NGN") {
      skipped++;
      continue;
    }
    const kg = kgByUnitKey.get(`${commoditySlug}|${r.unit}`);
    if (kg === null || kg === undefined) {
      unconvertible++;
      continue;
    }
    const unitId = unitKey(commoditySlug, r.unit);
    const obsId = `wfp_${r.market_id}_${r.commodity_id}_${r.date}_${r.pricetype.toLowerCase()}_${unitId}`;
    const priceMinor = Math.round(price * 100); // naira → kobo
    const observedAt = new Date(`${r.date}T12:00:00Z`);
    toInsert.push({
      id: obsId,
      commodityId: commoditySlug,
      marketId: `wfp_${r.market_id}`,
      sourceId: WFP_SOURCE_ID,
      priceMinor,
      currencyCode: NGN,
      unitId,
      priceType: r.pricetype.toLowerCase() || "unknown",
      observedAt,
      trustLabel: "official_statistic",
      pricePerKgMinor: Math.round(priceMinor / kg),
      normalisationMethod: `validated_unit_conversion:${unitId}`,
    });
  }
  // Deltas only (append-only; existing ids untouched → re-run adds nothing)
  const existingIds = new Set<string>(
    (await db.observation.findMany({
      where: { id: { startsWith: "wfp_" } },
      select: { id: true },
    })).map((o) => o.id),
  );
  const fresh = toInsert.filter((o) => !existingIds.has(o.id));
  const CHUNK = 500;
  let created = 0;
  for (let i = 0; i < fresh.length; i += CHUNK) {
    await db.observation.createMany({ data: fresh.slice(i, i + CHUNK) });
    created += Math.min(CHUNK, fresh.length - i);
  }

  const grouped = await db.observation.groupBy({
    by: ["commodityId", "marketId"],
    where: { sourceId: WFP_SOURCE_ID },
    _count: { id: true },
    _min: { observedAt: true },
    _max: { observedAt: true },
    orderBy: { _count: { commodityId: "desc" } },
  });

  console.log(`Ingested: ${created} · skipped (bad parse): ${skipped} · unconvertible: ${unconvertible}`);
  console.log("Per pair (>50 points are backtest candidates):");
  for (const g of grouped.filter((g) => g._count.id >= 50)) {
    console.log(
      `  ${g.commodityId} × ${g.marketId}: ${g._count.id} pts, ${g._min!.observedAt?.toISOString().slice(0, 10)} → ${g._max!.observedAt?.toISOString().slice(0, 10)}`,
    );
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
