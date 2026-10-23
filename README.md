# Tomionce

Market **price intelligence and predictor** for tomatoes and onions in Nigeria: verified,
unit-normalised price records, market comparison, and **backtested forecasts** published only
when they beat naive baselines on held-out data.

*Architecture stays internal as "ProducePrice"; "Tomionce" is the public brand (TOMato + ONion,
one trusted engine). Tomato and onion are predicted **separately** — one model per commodity ×
market pair — by the same execution engine. They are never traded/modelled as one "pair asset".*

> Status: early build. Requirements live in [`docs/01_PRD_ProducePrice_v3.0.md`](docs/01_PRD_ProducePrice_v3.0.md),
> schedule in [`docs/02_Implementation_Plan_v1.0.md`](docs/02_Implementation_Plan_v1.0.md),
> decisions in [`docs/03_ADR_Log.md`](docs/03_ADR_Log.md).

## Stack

TypeScript monorepo (pnpm workspaces) · Express API · Prisma (SQLite dev → PostgreSQL prod) ·
Better Auth (email OTP) · Expo mobile app · Next.js console/web · grammY Telegram bot ·
Groq-powered grounded assistant · rolling-origin backtested forecast engine (ADR-021).

## Repo structure

```
produceprice/
├─ apps/
│  ├─ api/            # Express + Better Auth + Prisma + assistant + bot
│  ├─ console/        # Next.js (console + lightweight public web)
│  └─ mobile/         # Expo (Android + iOS)
├─ packages/
│  ├─ domain/         # pure functions: units, trust labels, freshness, comparison, eligibility, forecasts
│  ├─ db/             # Prisma schema, migrations, seed, historical-series ingestion
│  ├─ providers/      # adapters: email, llm, payments, push, channel
│  └─ shared/         # zod schemas, API types, constants
└─ docs/              # PRD, implementation plan, ADR log
```

## Core rules (see ADRs 012/018/021)

- Observations are append-only; corrections supersede, never overwrite.
- Original price **and** unit always stored; `price_per_kg` is derived and nullable.
- Money as integer minor units (kobo) — no floating-point money.
- Cross-unit comparison requires a validated conversion, otherwise "not comparable — reason".
- Every forecast is displayed with its backtest evidence vs. naive baselines; live publication is gated.

## Setup (once code lands)

```bash
pnpm install
cp .env.example .env   # fill in names — never commit values
pnpm dev               # API + console
pnpm test              # domain + engine unit tests
```

## AI assistance disclosure

Parts of this codebase were built with AI assistance (pair-programming), as required for
capstone disclosure. Architecture decisions, product requirements and final review are human.
