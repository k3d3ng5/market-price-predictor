# Tomionce

Market **price intelligence and predictor** for tomatoes and onions in Nigeria: verified,
unit-normalised price records, market comparison, and **backtested forecasts** published only
when they beat naive baselines on held-out data.

*Architecture stays internal as "ProducePrice"; "Tomionce" is the public brand (TOMato + ONion,
one trusted engine). Tomato and onion are predicted **separately** — one model per commodity ×
market pair — by the same execution engine. They are never traded/modelled as one "pair asset".*

> Status: early build. Requirements live in [`01_PRD_ProducePrice_v3.0.md`](01_PRD_ProducePrice_v3.0.md),
> schedule in [`02_Implementation_Plan_v1.0.md`](02_Implementation_Plan_v1.0.md),
> decisions in [`03_ADR_Log.md`](03_ADR_Log.md).

## Stack

TypeScript monorepo (pnpm workspaces) · Express API · Prisma (SQLite dev → PostgreSQL prod) ·
Next.js PWA client (`apps/web`) · rolling-origin backtested forecast engine (ADR-021).
Planned from the ADRs: Better Auth email OTP, Telegram bot, grounded assistant.

## Repo structure

```
Market Price Predictor/
├─ apps/
│  ├─ api/            # Express API on :4000 (prices, catalog, sources, forecasts)
│  └─ web/            # Next.js PWA on :5100 (prices, forecast, compare, sources)
├─ packages/
│  ├─ domain/         # pure functions: units, trust labels, freshness, comparison, eligibility, forecasts
│  └─ db/             # Prisma schema, migrations, demo seed, WFP ingestion
├─ designs/           # 11 Stitch HTML exports used as UI reference
├─ data/              # raw source CSVs (git-ignored, reproducible from HDX)
├─ 01_PRD_ProducePrice_v3.0.md
├─ 02_Implementation_Plan_v1.0.md
└─ 03_ADR_Log.md
```

## Core rules (see ADRs 012/018/021)

- Observations are append-only; corrections supersede, never overwrite.
- Original price **and** unit always stored; `price_per_kg` is derived and nullable.
- Money as integer minor units (kobo) — no floating-point money.
- Cross-unit comparison requires a validated conversion, otherwise "not comparable — reason".
- Every forecast is displayed with its backtest evidence vs. naive baselines; live publication is gated.

## Setup

```bash
pnpm install
cp .env.example .env   # fill in names — never commit values

# API on http://localhost:4000
pnpm --filter @produceprice/api start

# PWA on http://localhost:5100
cd apps/web && pnpm dev
```

The web client proxies `/api/*` to the API on port 4000, so open
**http://localhost:5100** (not 4000) in the browser. See
[`apps/web/README.md`](apps/web/README.md) for the PWA/offline notes and the
npm shim workaround used on this machine.

```bash
pnpm test                                  # domain + engine unit tests
pnpm --filter @produceprice/db db:seed     # demo markets (synthetic, labelled)
pnpm --filter @produceprice/db ingest:wfp  # real WFP Nigeria series from HDX
```

## Data honesty rules (enforced in code, not copy)

- A missing price is `null`, never `0` and never “live”.
- Every price carries unit, source, observation date and trust label.
- Per-kg values exist only when a validated unit conversion applies.
- Forecast ranges publish only when the model beats a naive baseline on
  rolling-origin held-out data; otherwise the API says why.
- Demonstration rows are labelled on the price, the picker, the comparison and
  the sources page.

## AI assistance disclosure

Parts of this codebase were built with AI assistance (pair-programming), as required for
capstone disclosure. Architecture decisions, product requirements and final review are human.
