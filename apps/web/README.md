# Tomionce web (PWA)

The public Tomionce client: a mobile-first Next.js PWA for tomato and onion
prices in Nigeria. It reads only from the Tomionce API — it never invents a
price, a percentage or a source.

## Routes

| Route       | What it answers                                      |
| ----------- | ---------------------------------------------------- |
| `/`         | Latest recorded price, trend and recent observations |
| `/forecast` | Backtest-gated forecast (or an honest refusal)       |
| `/compare`  | Two markets, normalised per kg                       |
| `/sources`  | Sources, licences, coverage and trust labels         |
| `/offline`  | Fallback page served by the service worker           |

Port **5100**. The API stays on **4000**; ports 3000/3001 belong to another
local project. The browser only talks to 5100 — `next.config.mjs` proxies
`/api/*` to `http://127.0.0.1:4000/v1/*` so the PWA also works over LAN and the
service worker can cache responses same-origin.

## Run

```bash
# terminal 1 — API (from the repo root)
pnpm --filter @produceprice/api start

# terminal 2 — web
cd apps/web
pnpm dev            # http://localhost:5100
```

> **Node/npm note for this machine:** the `pnpm`/`npm` `.cmd` shims hang in the
> OpenCode shell, so the web dependencies in this workspace were installed with
> `node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install` from
> `apps/web`. The package remains a normal pnpm workspace member; `pnpm install`
> at the repo root resolves it once the shim works.

## Production / PWA check

```bash
cd apps/web
pnpm build
pnpm start          # http://localhost:5100
```

The service worker registers **only in production**. It caches:

- app pages: network first → cache → `/offline`
- `/api/*`: network first → cache → a JSON 503 that says nothing was guessed
- `/_next/static`, icons, manifest and Google Fonts: cache first

Cached prices keep their original observation dates. The offline strip says
“last synced”; it never claims to be live. The WFP source series is monthly, so
“live” would be a lie even online.

## Data contract

All numbers come from the API, which reads the append-only SQLite observations:

- `GET /api/prices/latest` — price, unit, date, trust label, per-kg value
- `GET /api/prices/history` — recorded series for the sparkline and rows
- `GET /api/prices/compare` — two sides + percent difference (per kg)
- `GET /api/catalog` — commodities, markets, real/demo coverage counts
- `GET /api/sources` — source metadata, licences, real record counts
- `GET /api/guide` — the four-step beginner guide (copy lives in `packages/domain`)
- `GET /api/forecast/eligibility`, `GET /api/forecast/backtest`

Demo markets (`wuse`, `garki`) are labelled **Demonstration data** everywhere:
price card, market picker, comparison and sources. Real WFP rows show
`Official statistic`.

## Design references

The UI is ported from the 11 Stitch exports in `designs/`. Theme tokens
(colors, spacing, type scale) live in `src/app/globals.css` under `@theme`
(Tailwind v4) and match the Stitch config. Deliberate fixes against the mockups:

- brand leads with **Tomionce**;
- no fake “live”, “SHA-256 valid”, “14.2 MB” or “4 sources” claims;
- no invented transport/arbitrage profit;
- trust labels, dates and demo markers come from the API, not hard-coded copy
  (except the short explanatory sentences in `src/lib/format.ts`).
