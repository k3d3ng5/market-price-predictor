# Operations Runbook — Tomionce v0.1.0

**CONFIDENTIAL — internal operations record. Do not publish.**

This runbook assumes the repository root is:

```
C:\Users\YAHAYA\Desktop\Market Price Predictor
```

Adjust paths if the project is moved. Commands are written for Windows PowerShell unless noted.

---

## 1. Prerequisites

- Node.js **20+**
- pnpm **9.15.0** (declared in `package.json`)
- Windows PowerShell or Command Prompt
- Internet access for the first dependency install and the WFP data download

Check:

```powershell
node --version
pnpm --version
```

> **Shim caveat:** on this machine the `pnpm`/`npm` `.cmd` shims can hang inside the OpenCode
> shell. In a normal terminal they usually work. If they hang, use the direct Node entry points
> shown in section 4.

---

## 2. Environment files

### Application secrets

Copy the root template if you need future integrations:

```powershell
Copy-Item .env.example .env
```

v0.1.0 does not require any of the optional secrets. Never commit `.env`.

### Database URL

Prisma expects `packages/db/.env`:

```env
DATABASE_URL="file:./dev.db"
APP_ENV=dev
```

The relative path resolves from `packages/db/prisma/schema.prisma`, giving:

```
packages/db/prisma/dev.db
```

If the file is missing, create it from `packages/db/.env.example`.

---

## 3. Install

```powershell
pnpm install
```

The web package was originally installed with npm because of the shim issue:

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install --no-audit --no-fund
```

Run that from `apps/web` if the web dependencies are missing. `apps/web/package-lock.json` is
git-ignored; the workspace manager remains pnpm.

---

## 4. Database

From the repo root:

```powershell
# generate the Prisma client after schema changes
pnpm --filter @produceprice/db generate

# apply migrations in development
pnpm --filter @produceprice/db migrate

# seed the two labelled demonstration markets
pnpm --filter @produceprice/db seed
```

If the pnpm shim hangs, use the direct paths:

```powershell
node "node_modules\.pnpm\tsx@4.23.15\node_modules\tsx\dist\cli.mjs" packages\db\prisma\seed.ts
```

The Prisma CLI can also be invoked directly:

```powershell
node "node_modules\.pnpm\prisma@6.4.0\node_modules\prisma\build\index.js" migrate dev --schema packages\db\prisma\schema.prisma
```

Adjust the version folder if it differs.

### WFP ingestion

1. Download the WFP Nigeria Food Prices CSVs from HDX.
2. Place them at:
   - `data/raw/wfp_food_prices_nga.csv`
   - `data/raw/wfp_markets_nga.csv`
3. Run:

```powershell
pnpm --filter @produceprice/db exec tsx prisma/ingest-wfp.ts
```

Direct fallback:

```powershell
node "node_modules\.pnpm\tsx@4.23.15\node_modules\tsx\dist\cli.mjs" packages\db\prisma\ingest-wfp.ts
```

The ingest is idempotent. It upserts deterministic observation IDs and does not delete existing
rows. Corrections should supersede, not overwrite.

### Data inspection

```powershell
pnpm --filter @produceprice/db exec prisma studio
```

Or use a small Node script against the generated Prisma client. Avoid complex nested quotes in
PowerShell; write a temporary `.mjs` file and run it with `node`.

---

## 5. Start the services

### Development

Terminal 1 — API:

```powershell
pnpm --filter @produceprice/api dev
```

Terminal 2 — web:

```powershell
cd apps\web
pnpm dev
```

Open **http://localhost:5100**.

### Production-style demo (used at handover)

Terminal 1 — API:

```powershell
node "C:\Users\YAHAYA\Desktop\Market Price Predictor\node_modules\.pnpm\tsx@4.23.15\node_modules\tsx\dist\cli.mjs" apps/api/src/server.ts
```

Terminal 2 — web:

```powershell
cd apps\web
node node_modules/next/dist/bin/next start -p 5100
```

The service worker registers only in production (`next start`), not in `next dev`.

### Ports

| Service | Port |
| --- | --- |
| Web client | **5100** |
| API | **4000** |
| Reserved (other project) | 3000, 3001 |

The browser should use **5100**. `/api/*` is proxied to the API.

---

## 6. Build, typecheck and test

### Web typecheck

```powershell
cd apps\web
node node_modules/typescript/bin/tsc --noEmit
```

### Web production build

```powershell
cd apps\web
node node_modules/next/dist/bin/next build
```

The build takes roughly 3–5 minutes on this machine. Restart `next start` after a new build.

### Domain tests

```powershell
pnpm --filter @produceprice/domain test
```

The 25 domain tests live in `packages/domain/test/`.

### API tests

The API package has a Vitest script but no dedicated API test files in v0.1.0. Use the API
typecheck and the browser verification instead:

```powershell
pnpm --filter @produceprice/api typecheck
```

### Verification URLs

```powershell
curl http://localhost:4000/v1/health
curl http://localhost:5100/api/health
```

Both should return JSON with `ok: true`.

---

## 7. Stop and restart

Find the process holding a port:

```powershell
netstat -ano | findstr :4000
netstat -ano | findstr :5100
```

Kill the process tree:

```powershell
taskkill /PID <pid> /T /F
```

The background shells in the AI workspace can leave orphan child processes. Always check both
ports after a restart.

---

## 8. Backup and restore

### Backup

Stop the API first (or accept a cold-copy risk), then:

```powershell
New-Item -ItemType Directory -Force backups | Out-Null
Copy-Item packages\db\prisma\dev.db "backups\dev-$(Get-Date -Format yyyyMMdd-HHmm).db"
```

### Restore

Stop the API, then:

```powershell
Copy-Item "backups\dev-YYYYMMDD-HHMM.db" packages\db\prisma\dev.db -Force
```

Start the API and verify `/v1/health` and a price endpoint.

### Full reset (destructive)

Back up first. Then:

```powershell
Remove-Item packages\db\prisma\dev.db
pnpm --filter @produceprice/db migrate
pnpm --filter @produceprice/db seed
# re-run the WFP ingest
```

Never run a reset against a database you have not backed up.

---

## 9. Service worker and cache operations

- Cache names: `tomionce-shell-tomionce-v1`, `tomionce-runtime-tomionce-v1`.
- To invalidate after a release, bump `VERSION` in `apps/web/public/sw.js`.
- `next start` serves `public/sw.js` from disk; editing it usually does not require a rebuild, but
  a service-worker update requires a reload and activation.
- In Chrome DevTools: Application → Service Workers → **Update** / **Unregister**, and
  Application → Storage → **Clear site data** for a clean test.
- Cached API responses are keyed by the full request URL, including query string.

If the UI shows stale data:

1. Confirm the API is returning fresh JSON.
2. Confirm the web server is serving the latest build.
3. Clear the service worker and caches.
4. Reload.

---

## 10. Troubleshooting

### `EADDRINUSE: address already in use :::5100` or `:4000`

An orphan process is still listening. Find and kill it with the commands in section 7.

### The pnpm/npm shim hangs

Use direct Node entry points:

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
node "node_modules\next\dist\bin\next" build
node "node_modules\typescript\bin\tsc" --noEmit
```

### Prisma client not initialized

```powershell
pnpm --filter @produceprice/db generate
```

Check `packages/db/.env` and the `DATABASE_URL` path.

### API returns 404 or 500 through the web app

- Check the API directly: `curl http://localhost:4000/v1/health`.
- Confirm the proxy target in `apps/web/next.config.mjs`.
- Restart both services after editing the config.
- Check the API terminal output.

### The web app shows an old build

- Rebuild: `node node_modules/next/dist/bin/next build`.
- Stop and restart `next start`.
- Clear the service worker/caches.

### The service worker does not register

- It only registers in production (`next start`), not `next dev`.
- It requires a secure context; `localhost` is treated as secure.
- Check the browser console for registration errors.

### Offline data is missing

- The cache is populated only after a page or API URL has been visited online.
- Different query strings are different cache entries.
- Check Application → Cache Storage.

### Complex quotes break in PowerShell

Write a small `.mjs` file under a temp folder and run it with `node`. Avoid nested quotes in
one-liners.

### Database path confusion

The live database is `packages/db/prisma/dev.db`. The `packages/db/.env` file sets
`DATABASE_URL="file:./dev.db"`, resolved from the schema directory.

---

## 11. Deployment notes (future)

v0.1.0 runs locally. Before a public deployment:

1. Move the database to managed PostgreSQL and update the Prisma provider/migration path.
2. Build the web client and run it behind HTTPS on a stable domain.
3. Set `API_ORIGIN` if the API is not on `127.0.0.1:4000`.
4. Keep the browser and API same-origin through a reverse proxy so the service worker can cache
   responses.
5. Restrict CORS; do not expose the API directly to the internet without auth/rate limits.
6. Add authentication and role-based admin access before any write endpoints are public.
7. Add monitoring, structured logs, uptime checks and database backups.
8. Schedule the WFP refresh and record ingestion runs.
9. Keep WFP/HDX attribution and the CC BY-IGO notice visible.
10. Re-test the service worker, offline fallback and cache invalidation after deployment.

---

## 12. Release checklist

- [ ] Typecheck passes.
- [ ] Production build passes.
- [ ] Domain/API tests pass.
- [ ] API health and web proxy return `ok`.
- [ ] Prices, Forecast, Compare and Sources verified in a browser.
- [ ] No console errors.
- [ ] Service worker registered and caches populated.
- [ ] Manifest and icons load.
- [ ] Data counts and latest observation dates checked.
- [ ] Public docs contain no stack, model or operational details.
- [ ] Internal docs are confidential and excluded from public material.
- [ ] Version/changelog updated.
- [ ] Handover or release note signed.
