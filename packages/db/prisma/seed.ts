/**
 * Seed: reference data + a CLEARLY LABELLED demonstration dataset (PRD §7.6).
 * Demo observations follow a deterministic seasonal pattern so the forecast
 * engine's backtest demo is exercisable before real historical data is
 * ingested (task SP-06b swaps this for WFP/HDX history).
 */
import {
  PrismaClient,
} from "./generated/client/index.js";

const db = new PrismaClient();

const NG = "ng", NGN = "NGN";
// integer minor units (kobo); 100 kobo = ₦1
const N = (naira: number) => Math.round(naira * 100);

async function main() {
  console.log("Seeding ProducePrice (demo data, labelled)…");

  const country = await db.country.upsert({
    where: { id: NG },
    update: {},
    create: {
      id: NG, code: "ng", name: "Nigeria",
      currencyCode: NGN, timezone: "Africa/Lagos",
      privacyRegime: "NDPA 2023",
    },
  });

  const tomato = await db.commodity.upsert({
    where: { id: "tomato" }, update: {},
    create: { id: "tomato", slug: "tomato", name: "Tomatoes" },
  });
  const onion = await db.commodity.upsert({
    where: { id: "onion" }, update: {},
    create: { id: "onion", slug: "onion", name: "Onions" },
  });

  // Units — kg validated for both; basket validated for tomato ONLY with note
  const unitKgTomato = await db.unit.upsert({
    where: { id: "tomato_kg" }, update: {},
    create: {
      id: "tomato_kg", commodityId: "tomato", name: "kg",
      aliases: "kilo,kilogram", kgEquivalent: 1,
      kgBasisNote: "scalar basis", status: "validated",
    },
  });
  const unitBasketTomato = await db.unit.upsert({
    where: { id: "tomato_basket" }, update: {},
    create: {
      id: "tomato_basket", commodityId: "tomato", name: "basket",
      aliases: "painter basket,basket olla", kgEquivalent: 25,
      kgBasisNote: "12 Abuja market baskets weighed mean 25.0 kg (2026-10-15, demo basis)",
      status: "validated",
    },
  });
  // An UNVALIDATED unit on purpose — the comparison blocker demo:
  await db.unit.upsert({
    where: { id: "tomato_painter" }, update: {},
    create: {
      id: "tomato_painter", commodityId: "tomato", name: "painter",
      aliases: "paint", kgEquivalent: null, kgBasisNote: null,
      status: "unvalidated",
    },
  });
  const unitKgOnion = await db.unit.upsert({
    where: { id: "onion_kg" }, update: {},
    create: {
      id: "onion_kg", commodityId: "onion", name: "kg",
      aliases: "kilo,kilogram", kgEquivalent: 1,
      kgBasisNote: "scalar basis", status: "validated",
    },
  });
  const unitBagOnion = await db.unit.upsert({
    where: { id: "onion_bag" }, update: {},
    create: {
      id: "onion_bag", commodityId: "onion", name: "50kg bag",
      aliases: "bag", kgEquivalent: 50,
      kgBasisNote: "industry-standard 50 kg mesh bag (demo basis)",
      status: "validated",
    },
  });

  const demo = await db.source.upsert({
    where: { id: "demo_dataset" }, update: {},
    create: {
      id: "demo_dataset",
      name: "DEMONSTRATION DATASET — synthetic seasonal pattern (NOT real market data)",
      owner: "ProducePrice",
      url: null,
      licence: "internal demo only",
      frequency: "weekly",
      validationStatus: "demonstration",
      attributionText:
        "Synthetically generated for demonstration. Must be labelled as demo in all UIs (PRD §7.6).",
    },
  });

  const markets: Array<{ id: string; name: string; state: string }> = [
    { id: "wuse", name: "Wuse Market", state: "FCT" },
    { id: "garki", name: "Garki Model Market", state: "FCT" },
    { id: "kubwa", name: "Kubwa Market", state: "FCT" },
  ];
  for (const m of markets) {
    await db.market.upsert({
      where: { id: m.id }, update: {},
      create: { ...m, countryId: NG, isPilot: m.id === "wuse" },
    });
  }

  // 104 weeks of weekly observations (ends "this week") — deterministic LCG.
  const now = new Date();
  const week = 7 * 86_400_000;
  const endMonday = new Date(now.getTime() - ((now.getUTCDay() + 6) % 7) * 86_400_000);
  let seed = 2026;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2_147_483_648;
    return seed / 2_147_483_648;
  };

  // config: [commodity, marketId, baseNaira, seasonAmplitudePct, tempNoisePct, unitRef]
  const configs = [
    { commodity: tomato, market: markets[0]!, base: 2000, amp: 0.25, noise: 0.03, unit: unitKgTomato },
    { commodity: tomato, market: markets[1]!, base: 2100, amp: 0.25, noise: 0.03, unit: unitKgTomato },
    { commodity: onion, market: markets[0]!, base: 2500, amp: 0.12, noise: 0.05, unit: unitKgOnion },
  ];

  let created = 0;
  for (const c of configs) {
    for (let w = 103; w >= 0; w--) {
      const observedAt = new Date(endMonday.getTime() - w * week);
      const seasonal = 1 + c.amp * Math.sin((2 * Math.PI * (104 - w)) / 52);
      const wiggle = 1 + (rand() - 0.5) * 2 * c.noise;
      const priceMinor = Math.round(N(c.base) * seasonal * wiggle);
      await db.observation.upsert({
        where: { id: `demo_${c.commodity.id}_${c.market.id}_${observedAt.toISOString().slice(0, 10)}` },
        update: {},
        create: {
          id: `demo_${c.commodity.id}_${c.market.id}_${observedAt.toISOString().slice(0, 10)}`,
          commodityId: c.commodity.id,
          marketId: c.market.id,
          sourceId: demo.id,
          priceMinor,
          currencyCode: NGN,
          unitId: c.unit.id,
          priceType: "wholesale",
          observedAt,
          trustLabel: "estimated", // synthetic → never "verified_report"
          pricePerKgMinor: Math.round(priceMinor / (c.unit.kgEquivalent ?? 1)),
          normalisationMethod: `validated_unit_conversion:${c.unit.id}`,
        },
      });
      created++;
    }
  }

  console.log(`Seeded: ${created} labelled demo observations across 3 market × commodity pairs`);
  console.log("Remember: this is DEMONSTRATION data (PRD §7.6). Replace with SP-06b ingestion.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
