# Engineering Handover — Tomionce v0.1.0

**CONFIDENTIAL — internal engineering record. Do not publish.**

This document describes how Tomionce v0.1.0 is built and how to maintain it. It is deliberately
kept out of the public product documentation.

---

## 1. Product summary

Tomionce is a tomato and onion price intelligence service for Nigeria. It has four user-facing
surfaces:

- **Prices** — latest recorded observation, unit normalisation, source, date, trust label,
  freshness, change and recent history.
- **Forecast** — eligibility check, rolling-origin backtest, gated range or refusal.
- **Compare** — two-market comparison on a per-kilogram basis.
- **Sources** — dataset metadata, licences, coverage counts, date range and trust legend.

The product is a single web client with an API service and a shared domain package.

---

## 2. Repository map

```
Market Price Predictor/
├─ apps/
│  ├─ api/                    # Express API (port 4000)
│  └─ web/                    # Next.js client (port 5100)
├─ packages/
│  ├─ domain/                 # Pure rules: units, trust, freshness, eligibility, forecast
│  └─ db/                     # Prisma schema, migrations, seed, WFP ingestion
├─ designs/                   # 11 Stitch HTML exports (UI reference)
├─ data/                      # raw source CSVs (git-ignored)
├─ docs/internal/             # this folder; confidential
├─ USER_GUIDE.md              # public
├─ FOUNDER_DEMO_GUIDE.md      # public-safe demo script
├─ HANDOVER.md                # public handover
└─ README.md                  # public product overview
```

The public docs intentionally do not describe this structure.

---

## 3. Stack and versions

| Layer | Choice | Version / note |
| --- | --- | --- |
| Language | TypeScript | 5.9.x on web; 5.7+ in API/domain |
| Workspace | pnpm workspaces | pnpm 9.15.0 |
| Runtime | Node.js | >= 20 |
| API | Express | 5.0.1 |
| ORM | Prisma | 6.4.x |
| Database | SQLite (dev) | `packages/db/prisma/dev.db` |
| Web | Next.js App Router | 16.4.2 |
| UI | React | 19.3.1 |
| Styling | Tailwind CSS | 4.3.3 (`@theme` tokens) |
| Runner | tsx | 4.23.15 |
| Tests | Vitest | 3.x |
| PWA | Custom service worker | `apps/web/public/sw.js` |

The repo is a pnpm workspace; `apps/web` was installed with npm on this machine because the
`pnpm`/`npm` `.cmd` shims hang in the OpenCode shell. The package remains a normal workspace
member. `apps/web/package-lock.json` is git-ignored; the repo manager is pnpm.

---

## 4. Runtime topology

```
Browser
  │
  ├─ http://localhost:5100  (Next.js client)
  │      └─ /api/*  ── rewrite ──►  http://127.0.0.1:4000/v1/*
  │
  └─ service worker caches same-origin responses
```

- Web client: **5100**.
- API: **4000**.
- Ports **3000/3001** are reserved for another local project; do not use them.
- The browser should only talk to **5100**. The rewrite is in `apps/web/next.config.mjs`:
  `/api/:path*` → `${API_ORIGIN ?? "http://127.0.0.1:4000"}/v1/:path*`.
- `API_ORIGIN` can override the API target for LAN/another host.
- `sw.js` is served with `Cache-Control: no-store, must-revalidate` and
  `Service-Worker-Allowed: /`.

---

## 5. Data model

Schema: `packages/db/prisma/schema.prisma` (SQLite-compatible by design).

| Model | Purpose |
| --- | --- |
| `Country` | Country, currency, timezone, privacy regime |
| `Market` | Market name, state, country, pilot flag |
| `Commodity` | Tomato, onion |
| `Unit` | Unit name, aliases, kg equivalent, validation status |
| `Source` | Publisher, URL, licence, frequency, validation status |
| `Observation` | Append-only price record; original price and unit, derived per-kg, trust label, `isCurrent`, `supersedesId` |
| `Report` | Contributed report awaiting review (planned UI) |
| `ConsentRecord` | Consent scopes (planned) |
| `AuditLog` | Audit trail (planned) |
| `AssistantMessage` | Grounded assistant (planned) |
| `ForecastGate` | Persisted gate decision (schema exists; not yet written by the API) |
| `JobRun` | Scheduler abstraction (planned) |

Key rules:

- `Observation.priceMinor` and `unitId` keep the original report.
- `Observation.pricePerKgMinor` is derived and nullable; never overwrites the original.
- `isCurrent` marks the active record for a supersession chain.
- Corrections are append-only via `supersedesId`.
- Money is integer minor units (kobo); no floating-point money.
- `trustLabel` is one of `verified_report`, `official_statistic`, `estimated`, `forecast`,
  `unverified`.
- `priceType` is `retail`, `wholesale` or `unknown`.

---

## 6. Data sources and ingestion

### Real source

- **WFP Nigeria Food Prices**, HDX dataset `42db041f`, resource `12b51155`.
- Licence: CC BY-IGO.
- Trust label: `official_statistic`.
- Ingest script: `packages/db/prisma/ingest-wfp.ts`.
- Raw CSVs: `data/raw/wfp_food_prices_nga.csv` and `data/raw/wfp_markets_nga.csv`
  (git-ignored, reproducible from HDX).
- Ingest is idempotent: deterministic observation IDs and upserts.
- Only `Tomatoes` and `Onions` are mapped (`COMMODITY_MAP`).
- Unit parsing: `parseUnitKg()` accepts `KG` or `<number> KG`; unparseable units are skipped,
  never guessed.
- `priceType` is taken from the source (`pricetype`), lowercased.
- WFP rows are all `retail` in the current dataset; demo seed rows are `wholesale`.
- Latest real observation at handover: **2026-10-15**.
- Current real coverage: **4,182 observations across 51 markets**.

### Demonstration source

- `packages/db/prisma/seed.ts`.
- Two pilot markets: Wuse (`wuse`) and Garki (`garki`), FCT.
- Synthetic seasonal observations, trust label from the source, clearly labelled in the UI.
- Current demo coverage: **312 observations across 2 markets**; latest **2026-10-19**.
- `Source.validationStatus = "demonstration"` triggers the demo notice.

### Data refresh

Re-run the WFP ingest after downloading fresh CSVs. The script upserts by deterministic ID; it
does not delete old rows. Corrections should supersede, not overwrite.

---

## 7. Domain rules (`packages/domain`)

| File | Responsibility |
| --- | --- |
| `units.ts` | Unit registry, `convertToPerKg`, `compareObservations`; blocks unvalidated units |
| `trust.ts` | Trust labels, `freshness`, `buildPriceCard`; missing price is never zero/live |
| `eligibility.ts` | `checkForecastEligibility`; min 24 points, max 14 days staleness |
| `forecast.ts` | Baselines, candidate, rolling-origin backtest, gated forecast |
| `nigeria.ts` | State initials, `marketDisplay`, beginner guide copy |
| `index.ts` | Public exports |

Important constants:

- `FRESH_LIMIT_DAYS = 7` in `trust.ts`.
- `MIN_HISTORICAL_POINTS = 24` in `eligibility.ts`.
- `MAX_STALENESS_DAYS = 14` in `eligibility.ts`.
- API backtest requires `series.length >= 30`.
- Gate requires `origins >= 5`, `seriesLength >= 30`, and candidate MAPE < best baseline MAPE.
- Range: `± max(2 × residualStd, 2% of central)`.
- Backtest period parameter: **52** (known issue; see section 14).

See [`MODEL_AND_STRATEGY.md`](MODEL_AND_STRATEGY.md) for the sealed model details.

---

## 8. API surface

Base: `/v1` (the client calls `/api` and the rewrite maps it).

| Endpoint | Query | Purpose |
| --- | --- | --- |
| `GET /v1/health` | — | Liveness |
| `GET /v1/sources` | — | Source metadata, licence, counts, date range, `freshLimitDays` |
| `GET /v1/guide` | — | Beginner guide steps from `BEGINNER_GUIDE_STEPS` |
| `GET /v1/catalog` | — | Commodities, markets, per-commodity coverage, `dataKind` |
| `GET /v1/prices/latest` | `commodity`, `market` | Latest current observation, structured fields |
| `GET /v1/prices/history` | `commodity`, `market`, `limit` | Recorded series (ascending) |
| `GET /v1/prices/compare` | `commodity`, `market_a`, `market_b` | Two sides, per-kg, percent, block reason |
| `GET /v1/forecast/eligibility` | `commodity`, `market` | Eligibility result + data notice |
| `GET /v1/forecast/backtest` | `commodity`, `market`, `horizon` | Series, backtest, gate, display line |

Implementation: `apps/api/src/server.ts`.

Notes:

- CORS is open (`app.use(cors())`) for local development.
- The latest/history queries use `isCurrent: true`, ordered by `observedAt`.
- The forecast series is built from per-kg values; rows whose unit conversion fails are skipped.
- `horizon` is clamped to 1–12.
- A simple in-memory backtest cache keyed by commodity, market, horizon, length and last date
  avoids recomputation for identical requests.
- Error responses use `{ error, detail, ... }`; the client renders the detail.

---

## 9. Web client

Paths: `apps/web/src`.

### Pages

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `app/page.tsx` | Prices |
| `/forecast` | `app/forecast/page.tsx` | Forecast |
| `/compare` | `app/compare/page.tsx` | Compare |
| `/sources` | `app/sources/page.tsx` | Sources |
| `/offline` | `app/offline/page.tsx` | Offline fallback |

Route metadata layouts: `app/<route>/layout.tsx`.

### Key modules

| Module | Purpose |
| --- | --- |
| `lib/api.ts` | API types, `apiGet`, last-sync tracking |
| `lib/use-api.ts` | Fetch hook with loading/error/data |
| `lib/use-market.ts` | Persistent market choice, coverage lookup, defaults |
| `lib/format.ts` | Naira, dates, trust copy, commodity copy |
| `components/*` | Header, nav, commodity tabs, market picker, price hero, observation list, sparkline, chips, guide, install prompt, connectivity banner, service worker registration |

### Persistence keys

- `tomionce:commodity`
- `tomionce:market` (Prices/Compare default, freshest real)
- `tomionce:forecast-market` (Forecast default, deepest real)
- `tomionce:market-b` (Compare second market)
- `tomionce:guide-steps` (cached guide copy)
- `tomionce_guide_seen`
- `tomionce:install-dismissed`
- `tomionce:last-sync`

### Default market strategy

- **Prices / Compare:** prefer real data, then latest observation, then depth.
- **Forecast:** prefer real data, then depth (most observations), so the gate has enough history.
- **Compare second market:** real data first, then latest observation, then depth; never compare
  against a stale three-row market when a fresher one exists.

### Guide

- Copy source: `BEGINNER_GUIDE_STEPS` in `packages/domain/src/nigeria.ts`.
- Served by `GET /v1/guide`.
- Client caches in `localStorage` under `tomionce:guide-steps`.
- Auto-opens on first visit unless `tomionce_guide_seen` is set.
- Reopen via the header `?` button or the `tomionce:open-guide` event.

### Service worker

`apps/web/public/sw.js`:

- Cache names: `tomionce-shell-tomionce-v1`, `tomionce-runtime-tomionce-v1`.
- Install precaches `/`, `/forecast`, `/compare`, `/sources`, `/offline`, manifest and icons.
- Navigations: network first → cache → `/offline`.
- `/api/*`: network first → cache → JSON 503 (`offline_no_cache`, no guessed price).
- `/_next/static/*`, `/icon*`, manifest and Google Fonts: cache first.
- Registers **only in production** (`next start`), not in `next dev`.
- Cached prices keep their original observation dates; the offline strip says “last synced”.

Known issue: `networkFirstApi` and `cacheFirst` call `cache.put()` without `await`; the page
handler awaits it. This is a low-risk reliability gap for v0.2.

---

## 10. Forecast engine

The forecast engine is in `packages/domain/src/forecast.ts`. It exposes:

- `naiveForecast`
- `seasonalNaiveForecast`
- `movingAverageForecast`
- `baselineModels`
- `fourierTrendForecast`
- `candidateModels`
- `rollingOriginBacktest`
- `gatedForecast`
- `registerCandidateModels` (extension hook)

Do not publish these names, formulas or parameters. The public product only describes the
behaviour: benchmark-first, held-out testing, gated ranges, honest refusals.

Full details: [`MODEL_AND_STRATEGY.md`](MODEL_AND_STRATEGY.md).

---

## 11. Verification

Run from the repo root unless stated.

```bash
# domain tests
pnpm --filter @produceprice/domain test

# API typecheck (no dedicated API test files in v0.1.0)
pnpm --filter @produceprice/api typecheck

# web typecheck
cd apps/web
node node_modules/typescript/bin/tsc --noEmit

# web production build
node node_modules/next/dist/bin/next build
```

At handover:

- Domain tests: 25/25 passing.
- Web typecheck: pass.
- Web production build: pass.
- Browser verification: Prices, Forecast, Compare, Sources, guide, route titles, manifest, icons,
  service worker registration and caches.
- Browser console: no errors observed.

---

## 12. Security and secrets

- `.env` files are git-ignored. Never commit real values.
- `.env.example` is names-only.
- The SQLite database (`*.db`) and Prisma generated client are git-ignored.
- The public API has **no authentication** in v0.1.0. Do not expose port 4000 directly to the
  internet. The client proxy is intended for local/LAN demos.
- CORS is open for local development. Restrict it before any public deployment.
- The repo is currently private. If it is made public, remove `docs/internal/` and the raw data
  folder first, and review the commit history for earlier architecture notes.
- No production secrets, payment keys, Telegram tokens or assistant keys are required for v0.1.0.
  The corresponding `.env.example` entries are placeholders for later versions.

---

## 13. Known issues and technical debt

1. **Seasonal period mismatch.** `forecast.ts` uses `period = 52` (weekly assumption), while the
   WFP series is roughly monthly. The seasonal baseline and candidate are therefore not annual in
   the current data. The gate blocks the candidate where it loses, so public output remains
   honest, but the next model version must re-evaluate `period` (likely 12 for monthly data) and
   re-backtest before claiming seasonal skill.
2. **Gate decisions are not persisted.** `ForecastGate` exists in the schema but the API computes
   the gate per request and does not write a decision row. This is the AUT-08 backlog item.
3. **Price type is not surfaced in the UI.** Real WFP rows are `retail`; demo rows are
   `wholesale`. The UI labels demo data but does not show `priceType` as a field. Adding it is a
   v0.2 improvement.
4. **Service worker cache writes.** `networkFirstApi` and `cacheFirst` do not `await cache.put()`;
   the page handler does. Low risk, but should be made consistent.
5. **No automated CI.** Build and type checks are manual.
6. **Local deployment only.** No production hosting, monitoring, backups or managed database.
7. **No admin/auth.** No review queue, no user accounts, no role-based access.
8. **In-memory cache.** The backtest cache is a single last-result slot; it resets on restart.
9. **Server not in watch mode by default.** The production/demo commands use `tsx` and
   `next start`; restart after edits.
10. **Browser desktop tooling.** Screenshot/click automation timed out during verification; DOM
    evaluation and accessibility snapshots were used. This is a tooling issue, not a product bug.
11. **Data freshness.** The latest WFP record is 15 October 2026. Real prices display as stale
    under the 7-day rule. This is correct behaviour, not a fault.

---

## 14. Extension points

- **New data source:** add a `Source` row, a unit mapping, and an idempotent ingest script. Keep
  the original unit and price; derive per-kg only with validated conversions.
- **New commodity:** add `Commodity` and `Unit` rows, extend the catalog, and keep the forecast
  pair-specific.
- **New candidate model:** implement `ModelSpec`, register it via `registerCandidateModels` or
  add it to `candidateModels`, and let the backtest decide. Never bypass the gate.
- **New surface:** the Telegram bot should consume the same API and the same guide copy source;
  do not fork the rules.
- **Persisted gate:** write a `ForecastGate` row per decision with the backtest evidence and a
  human decision field. Keep the public display driven by the persisted decision.

---

## 15. Do-not-publish list

Never put these in the public README, user guide, demo guide, marketing, slides or a public repo:

- framework, database, hosting or package names;
- repository paths or architecture diagrams;
- model names, formulas, feature lists or parameter values;
- backtest implementation details and gate threshold values beyond user-facing copy;
- internal ranking/default-selection logic;
- operational commands, secrets, ports or deployment steps;
- source code excerpts.

The public story is: **what the product does, what the data is, what the evidence says, and what
it refuses to claim.**

---

## 16. Consultant notes

The engineering consultant remains available for maintenance, upgrades, model review,
documentation and training. Before changing the engine, re-read
[`MODEL_AND_STRATEGY.md`](MODEL_AND_STRATEGY.md) and the ADR log. Before changing public copy,
check the honesty rules in the README and the user guide.
