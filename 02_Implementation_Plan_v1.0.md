# IMPLEMENTATION PLAN
## ProducePrice Intelligence

| | |
|---|---|
| **Version** | 1.0 |
| **Date** | 22 October 2026 |
| **Derives from** | `01_PRD_ProducePrice_v3.0.md` · decisions in `03_ADR_Log.md` |
| **Structure** | **Part A** reality check · **Part B** 24-hour Capstone Sprint · **Part C** post-capstone phases · **Part D** engineering reference · **Part E** tests · **Part F** submission pack |

> **How this plan is kept updated.** Every task has an ID and a status (`Todo / Doing / Done / Verified / Cut`). When you finish or cut something, change the status here, and if the cut changes scope, add an ADR (see PRD §0). "Verified" means a test or demo in Part E proves it.

---

## Part A — Reality Check

### A.1 What the stack adds up to
TypeScript monorepo · Express API · Prisma · Better Auth (email OTP via Gmail chain) · Expo app (Android + iOS) · Next.js console · grammY bot · Groq assistant · Paystack · Cloudflare Tunnel · SQLite dev.

That is **eight to ten moving parts**. Each is reasonable on its own. Together they are a multi-week build for one person. In the time you have, the plan below protects a **thin, honest, working slice** and documents the rest as roadmap.

### A.2 The cut line (Tier S vs. everything else)

| Build in the sprint (Tier S) | Document as roadmap (Tier P/G) |
|---|---|
| Monorepo, Express API, Prisma + SQLite | PostgreSQL production deployment |
| Seed/import pipeline + source register + unit registry | Live reporter network |
| Price check, history, comparison with trust labels | Alerts, digests |
| **One client** (Next.js **or** Expo; the brief decides) | The second client |
| grammY bot: `/start /price /compare /help` (long polling) | Reporting wizard, account linking |
| Better Auth email OTP via Gmail (with console fallback) — *or guest mode if it eats time* | Telegram ↔ account link, roles beyond Guest/Admin |
| Groq assistant with tool-calling + numeric verifier — *stretch* | Assistant feedback loop, multi-language |
| Forecast engine: ingest historical series (WFP/HDX) + baselines + rolling-origin backtest with metrics — **backtested prototype** (ADR-021) | Live gated publication, auto-suspend monitoring |
| Forecast eligibility check → "Not available yet — reason" | Real reporter-fed forecast pairs |
| Paystack: **design only** (documented in PRD/ADR) | Paystack test-mode checkout, payouts |
| Privacy notice page + data inventory + consent text | DSR tooling, retention automation |

### A.3 Stop-loss order (what you cut first if time runs out)
1. Paystack (already design-only).
2. Assistant (Groq) — if not working by the feature freeze, ship without it and say so.
3. Email OTP — fall back to guest mode plus an admin passcode for the one admin page.
4. Second client (already out).
5. **Never cut:** seed/import + source register + historical series ingestion, price card with trust labels, comparison, forecast engine backtest demo (ADR-021), one client, bot lookups, README, tests evidence, video.

---

## Part B — 24-Hour Capstone Sprint

> Times are relative (H+hours). Replace with clock times once you know the deadline. **Submit at least 2 hours before the deadline.** Sleep before recording the video.

### B.1 Hour-by-hour

| Block | Tasks | Done when |
|---|---|---|
| **H+0 → H+1** Gate and set-up | SP-01 Confirm brief/track (PRD §13). SP-02 Choose the single client (ADR-019). SP-03 Create repo, `pnpm` workspace, TypeScript config, `.env.example`. SP-04 Decide real vs. labelled demo data. | Brief mapped; client chosen; repo runs "hello" |
| **H+1 → H+4** Data, forecast and API | SP-05 Prisma schema + SQLite migration (Part D.3). SP-06 Seed: markets, commodities, units, sources, observations (CSV import script). SP-06b Ingest **historical price series** for backtesting (WFP market price data via HDX; normalise to price per kg — ADR-021). SP-07 Express endpoints: `GET /v1/prices/latest`, `/v1/prices/history`, `/v1/prices/compare`, `/v1/prices/backtest`, `/v1/forecast/backtest`, `/v1/sources`, `/v1/forecast/eligibility`. SP-08 Trust-label, freshness, unit-compatibility logic with unit tests. SP-31 Forecast engine: naive + seasonal-naive baselines, one seasonal model, **rolling-origin backtest** with stored metrics. | Endpoints return correct JSON; unit tests pass; backtest beats naive baseline on at least one pilot pair |
| **H+4 → H+8** Client | SP-09 Price card component (unit, date, trust badge, freshness). SP-10 History chart with gaps. SP-11 Compare screen with "not comparable — reason". SP-12 Forecast tab showing "Not available yet — {reason}". SP-13 Data Source Index page. SP-14 Privacy notice page and consent checkbox text. | Demo flow works end to end on the chosen client |
| **H+8 → H+10** Bot | SP-15 grammY bot, long polling. SP-16 `/start /price /compare /help` using the same domain functions as the API. SP-17 Short `/privacy` response. | Bot answers correctly on your phone |
| **H+10 → H+12** Auth and assistant (stretch) | SP-18 Better Auth + Prisma adapter + `emailOTP` plugin; provider chain `gmail → console`. SP-19 Groq assistant: tools (`get_latest_price`, `get_price_history`, `compare_markets`, `get_forecast`, `get_unit_info`), numeric verifier, redaction layer, fallback cards. SP-20 Golden set (≥ 20 questions for the sprint, ≥ 50 later). | Assistant answers 20/20 golden checks, or is cut |
| **H+12 → H+13** Feature freeze | SP-21 Freeze. No new features after this point. Only bug fixes and docs. | Freeze declared |
| **H+13 → H+15** Docs and evidence | SP-22 README (PRD §13.1/§13.2 of v1.1 list preserved in Part F). SP-23 Run the test checklist (Part E) and capture screenshots. SP-24 Add PRD, plan, ADRs to `/docs`. SP-25 AI-assistance disclosure paragraph. | README complete; evidence saved |
| **Sleep** | At least 5–6 hours. | — |
| **Morning** Video and submit | SP-26 Dry-run the demo twice. SP-27 Record the 2–3 minute video (script in Part F.3). SP-28 Run the five validity checks. SP-29 Submit ≥ 2 h early. | Submission confirmation received |

### B.2 Sprint backlog status table (update as you go)

| ID | Task | Status | Evidence |
|---|---|---|---|
| SP-01 | Confirm brief and track | Todo | |
| SP-02 | Choose single client (ADR-019) | Todo | |
| SP-03 | Repo and workspace set-up | Todo | |
| SP-04 | Real vs. labelled demo data decision | Todo | |
| SP-05 | Prisma schema + migration | Todo | |
| SP-06 | Seed/import with source register | Todo | |
| SP-07 | API endpoints | Todo | |
| SP-08 | Domain logic + unit tests | Todo | |
| SP-06b / SP-31 | Historical series ingestion + forecast engine backtest (ADR-021) | Todo | |
| SP-09 → SP-14 | Client screens (incl. backtest demo panel — FR-F8) | Todo | |
| SP-15 → SP-17 | Telegram bot | Todo | |
| SP-18 | Better Auth email OTP | Todo | |
| SP-19 | Groq assistant + verifier | Todo | |
| SP-20 | Golden set | Todo | |
| SP-21 | Feature freeze | Todo | |
| SP-22 → SP-25 | Docs and disclosures | Todo | |
| SP-26 → SP-29 | Video and submission | Todo | |

### B.3 Definition of Done for the sprint
- Every price shown has unit, date, source and trust label.
- Comparison blocks incompatible units with a reason.
- Forecast area shows "Not available yet — {reason}" **and** a real backtest panel on historical data (model vs. baseline metrics, predicted-vs-actual chart — FR-F8).
- Bot and client return identical numbers for the same query.
- Assistant (if shipped) never states an untooled number; fallback works with the key removed.
- README states what is built, what is not, how to run it, what data is real vs. demo, and discloses AI assistance.
- Test evidence captured. Video recorded by you, explaining your own work.

---

## Part C — Post-Capstone Phases

> Durations assume **one full-stack builder plus part-time operations/analytics support**. Adjust to team size once co-founders join. Every phase has an exit gate; privacy and AI-governance gates are not optional.
>
> **Forecast-first note (ADR-021):** the forecast engine ships in the sprint as a backtested prototype on historical open data. Phase 6 therefore extends an existing engine to live, gated publication — it does not start from zero.

### Phase 1 — Pilot foundations (≈ 2 weeks)
- Move staging and production to **PostgreSQL** (ADR-003): switch Prisma provider, regenerate migrations, run the test suite on both engines.
- Replace Gmail SMTP with a transactional email provider behind the same adapter; keep Gmail only as dev fallback (ADR-005).
- Host API and bot on a managed always-on service; switch the bot to **webhook mode** with secret-token verification; stop relying on Cloudflare Tunnel for anything public (ADR-011).
- Named privacy lead; controller entity decided; processor register started; DPIA scoped **[COUNSEL]**.
- **Exit gate:** CI passes on SQLite and Postgres; production secrets managed; privacy notice reviewed by counsel; backups tested.

### Phase 2 — Discovery and data validation (≈ 2–3 weeks, partly parallel)
- 8–12 interviews (P1–P4); validate personas and unit conversions with traders.
- Inspect NBS, World Bank and HDX datasets; produce Data Source Index v1.0 with licence notes.
- Pick 3–5 pilot markets; define reporter incentive and payout approach.
- **Exit gate:** validated personas; unit registry v1; pilot markets and reporter plan decided.

### Phase 3 — Reporting engine and verification (≈ 3–4 weeks)
- Telegram reporting wizard; Expo reporting form with offline queue and idempotency keys.
- Verification engine (range, duplicate, outlier); review queue in the console; reporter dashboard.
- Reporter score is **advisory only** (AIG-11); contest route for reporters.
- Telegram ↔ account linking.
- **Exit gate:** ≥ 3 reporters submit weekly; ≥ 70% of reports resolved within 24 h; link flow < 60 s.

### Phase 4 — Second client and console completion (≈ 3–4 weeks)
- Ship whichever client was deferred in the sprint (Expo or Next.js), sharing types and API clients from the monorepo package.
- Console: review queue, reporter management, forecast gate, privacy operations, audit log.
- Expo: secure token storage, push notifications, EAS builds; iOS distribution decision **[VERIFY Apple programme cost]**.
- **Exit gate:** both clients pass the same workflow tests; console actions audited.

### Phase 5 — Alerts, assistant hardening, payments (≈ 3–4 weeks)
- Alerts and weekly digest with dedupe, quiet hours and separate marketing consent.
- Assistant: expand golden set to ≥ 50, red-team injection, language checks, feedback loop, quality sampling.
- **Paystack in test mode**: checkout, webhook signature verification, idempotent entitlement grants, reconciliation job (AUT-14); live mode only after counsel and Paystack requirements are satisfied **[VERIFY]**.
- **Exit gate:** zero numeric hallucinations on golden set; replayed webhooks cause no double entitlement; consent flags respected in tests.

### Phase 6 — Forecast publication and hardening (≈ 2–3 weeks)
- Extend the sprint backtest engine (ADR-021): richer candidates on the enriched historical + reporter data; evaluation store; admin gate; auto-suspend; surprise/out-of-range detection.
- Security review, load test, privacy review, DSR dry-run, breach drill.
- **Exit gate:** each published forecast has a gate record; DSR completed inside the SLA in the drill; breach runbook exercised.

### Phase 7 — Pilot learning and global readiness (6–8 weeks first cycle)
- Pilot metrics review (PRD §11); reporter network tuning.
- **Benchmark methodology v1** (rung 2 of the vision ladder) drafted and reviewed.
- Country-onboarding playbook: add Country/Currency/Locale rows, unit validation, local legal review, language review.
- Evaluate extra channels (WhatsApp cost vs. reach; SMS/USSD).
- **Exit gate:** go/no-go on expansion, written down with evidence.

### C.1 Phase summary

| Phase | Focus | ≈ Weeks | Key gate |
|---|---|---|---|
| Sprint | Capstone slice | ~1 day | Five validity checks |
| 1 | Pilot foundations | 2 | Postgres + counsel review |
| 2 | Discovery and validation | 2–3 | Units and pilot markets |
| 3 | Reporting + verification | 3–4 | Reporters active |
| 4 | Second client + console | 3–4 | Parity tests |
| 5 | Alerts, assistant, Paystack | 3–4 | Zero hallucinations; webhook safety |
| 6 | Forecast publication + hardening | 2–3 | Gate records; drills; engine beats baselines |
| 7 | Pilot learning + global readiness | 6–8 | Expansion go/no-go |

**Critical path:** units validated → reporters live → history accumulates → forecasts. Forecast quality is limited by calendar time, not coding speed.

---

## Part D — Engineering Reference

### D.1 Repository structure (pnpm workspaces)

```
produceprice/
├─ apps/
│  ├─ api/            # Express + Better Auth + Prisma + assistant + bot (sprint: bot lives here)
│  ├─ console/        # Next.js (console + public web)
│  └─ mobile/         # Expo (Android + iOS)
├─ packages/
│  ├─ domain/         # pure functions: units, trust labels, freshness, comparison, eligibility
│  ├─ db/             # Prisma schema, migrations, seed
│  ├─ providers/      # adapters: email, llm, payments, push, channel
│  └─ shared/         # zod schemas, API types, constants
├─ docs/              # PRD, plan, ADRs, privacy notice, data inventory
├─ .env.example
└─ README.md
```
Rule: **bot, API and assistant call `packages/domain`**, so numbers cannot differ between surfaces.

### D.2 Environment variables (names only — never commit values)

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | `file:./dev.db` locally; Postgres URL later |
| `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` | Auth |
| `EMAIL_PROVIDER_CHAIN` | e.g., `gmail,console` |
| `GMAIL_USER`, `GMAIL_APP_PASSWORD` | Gmail SMTP (app password, 2-step verification required) |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_MODE`, `TELEGRAM_WEBHOOK_SECRET`, `PUBLIC_BASE_URL` | Bot (`polling` locally, `webhook` via tunnel/prod) |
| `GROQ_API_KEY`, `GROQ_MODEL`, `ASSISTANT_ENABLED` | Assistant (model pinned in config, ADR-009) |
| `PAYSTACK_SECRET_KEY`, `PAYSTACK_PUBLIC_KEY` | Payments (test keys first) |
| `APP_ENV` | `dev` / `staging` / `prod` |

### D.3 Prisma schema sketch (SQLite-compatible by design — ADR-003)

Rules: no scalar lists, no provider-specific types, money as integer minor units, enums as validated strings.

```prisma
model Country   { id String @id  code String @unique  name String  currencyCode String  timezone String }
model Market    { id String @id  name String  state String?  countryId String  isPilot Boolean @default(false) }
model Commodity { id String @id  slug String @unique  name String }
model Unit      { id String @id  commodityId String  name String  aliases String  // comma-separated for SQLite
                  kgEquivalent Float?  kgBasisNote String?  status String // unvalidated|validated
                  countryId String? }
model Source    { id String @id  name String  owner String?  url String?  licence String?
                  frequency String?  validationStatus String  attributionText String? }

model Observation {
  id String @id  commodityId String  marketId String  sourceId String
  priceMinor Int           // e.g., kobo
  currencyCode String
  unitId String
  priceType String         // wholesale|retail|unknown
  observedAt DateTime  ingestedAt DateTime @default(now())
  trustLabel String        // verified_report|official_statistic|estimated|unverified
  pricePerKgMinor Int?     // derived, nullable
  normalisationMethod String?
  supersedesId String?  isCurrent Boolean @default(true)
  @@index([commodityId, marketId, observedAt])
}

model Report    { id String @id  reporterId String  idempotencyKey String @unique  /* fields as Observation */
                  status String  statusReason String?  channel String  submittedAt DateTime @default(now()) }
model ConsentRecord { id String @id  userId String  scope String  version String  granted Boolean  at DateTime @default(now()) }
model AuditLog  { id String @id  actorId String?  action String  entity String  entityId String?  at DateTime @default(now()) }
model AssistantMessage { id String @id  conversationId String  role String  content String
                         toolCalls String?  verifierOutcome String?  feedback String?  createdAt DateTime @default(now()) }
model ForecastGate { id String @id  commodityId String  marketId String  horizonDays Int
                     status String  reason String?  decidedBy String?  decidedAt DateTime? }
// Better Auth tables: generate with its CLI/adapter flow [VERIFY]
```

### D.4 Key implementation notes

| Topic | Note |
|---|---|
| **Better Auth + Express** | Mount the auth handler on its route **before** `express.json()`; use the Prisma adapter with the correct provider; add the `emailOTP` plugin with a `sendVerificationOTP` function that calls the **provider chain** **[VERIFY against current docs]** |
| **Gmail chain** | Order: `gmail` → `console` (dev) → later a transactional provider. One account, app password, rate limiting on OTP requests. Log delivery outcome, never the OTP, in production |
| **grammY** | Dev: `bot.start()` long polling. Cloudflare Tunnel/prod: `webhookCallback` + `secretToken`; call `setWebhook` after each tunnel restart |
| **Cloudflare Tunnel** | `cloudflared tunnel --url http://localhost:<port>` gives a temporary public HTTPS URL for demos and webhook tests; the URL changes each run. Dev/demo only |
| **Groq** | Use the official SDK; `GROQ_MODEL` from config; tool schemas fixed and read-only; verifier extracts numbers/dates/units from the draft and checks each against that turn's tool output; one regenerate, then template fallback |
| **Redaction** | Before any prompt: strip emails, phone-like strings, Telegram IDs, names from user text; never include user identifiers in tool context sent to the model |
| **Expo** | Expo Router; secure token storage; `expo-sqlite` (or AsyncStorage) for last-seen data and offline queue; push via Expo notifications; Expo Go for development; EAS Build for installable builds **[VERIFY free-tier limits]** |
| **Next.js console** | Better Auth client; admin role gate server-side; server components for read-heavy tables; no secrets in client bundles |
| **Paystack** | Initialise transaction server-side; verify webhook `x-paystack-signature` (HMAC of raw body with secret key); verify transaction by reference before granting access; idempotent by reference; no card data on our servers **[VERIFY current API]** |
| **Jobs** | Dev: in-process scheduler with a `JobRun` table; prod: durable queue chosen in Phase 1 (ADR-017) |

### D.5 SQLite → PostgreSQL migration checklist
1. Change Prisma `provider` and `DATABASE_URL`.
2. Replace comma-separated alias strings with a join table if needed.
3. Re-generate migrations from scratch for Postgres; seed again.
4. Run the full test suite against both engines in CI.
5. Verify date/time handling in UTC; verify integer money columns.
6. Load test the serving queries; add indexes/materialised views.

---

## Part E — Test Plan and Evidence

| ID | Test | Pass criterion | Evidence |
|---|---|---|---|
| T-01 | Unit conversion logic | Validated units convert; unvalidated block | Test output |
| T-02 | Trust label and freshness rules | Fresh/stale/missing states correct | Test output |
| T-03 | Comparison compatibility | Incompatible pair returns reason, not a number | Screenshot + test |
| T-04 | Import idempotency | Re-import adds zero duplicate rows | Log |
| T-05 | API parity with bot | Same query → same figures | Side-by-side screenshot |
| T-06 | Forecast eligibility | Ineligible pair shows reason code | Screenshot |
| T-07 | Auth OTP flow | OTP delivered (Gmail or console), expires, rate-limited | Log + screenshot |
| T-08 | Assistant golden set | 0 numeric hallucinations; adversarial buy/sell refused | Results file |
| T-09 | Assistant fallback | Key removed → data cards shown | Screenshot |
| T-10 | Redaction | No email/ID in captured prompt | Prompt log excerpt |
| T-11 | Privacy page and consent | Visible before optional processing | Screenshot |
| T-12 | Webhook secret (bot) | Request without secret rejected | Test output |
| T-13 | Clean-clone run | A second person follows the README and reaches the demo | Their notes |
| T-14 *(post-sprint)* | Paystack replay | Duplicate webhook grants once | Test output |
| T-15 *(post-sprint)* | DSR drill | Export and delete completed within SLA | Log |
| T-16 | Backtest reproducibility (ADR-021) | Rerun produces identical metrics; beats naive baseline on a pilot pair | Metrics file + test output |

---

## Part F — Submission Pack

### F.1 README must contain
Project name and problem · intended users and Nigerian context · **features implemented / not implemented (roadmap)** · stack and architecture · repo structure · setup and run steps · environment variable names (no secrets) · data sources, licences, and **which data is real vs. demonstration** · cleaning and transformation notes · forecasting status (gate, "Not available yet" explanation) · tests and results · known limitations · screenshots · credits · **AI-assistance disclosure** · privacy notice summary.

### F.2 Five-point validity checklist (YES/NO with evidence)
1. Registered Fellow, one submission.
2. Assigned brief and track confirmed; deliverable matches.
3. Working deliverable with proof.
4. 2–3 minute video, you explain your own work.
5. Original work; datasets, libraries and AI assistance disclosed.

### F.3 Video script (target 2:45)

| Time | Content |
|---|---|
| 0:00–0:20 | The problem: scattered, untrusted produce prices in Nigerian markets |
| 0:20–0:40 | The product and who it serves; what is real vs. demo data |
| 0:40–1:40 | Live demo: price card → history → comparison (including a blocked comparison) → **forecast panel: real backtest result vs. baselines on historical data + "Not available yet" for live release** → Telegram bot → assistant refusing to invent or advise |
| 1:40–2:15 | How it works: shared domain logic, trust labels, provider adapters, privacy and AI-governance rules |
| 2:15–2:45 | What is tested, what is not built yet, and the roadmap to pilot |

### F.4 Investor/co-founder add-on (after submission)
One-page thesis, live demo link, evidence screenshots, vision ladder with gates, honest limitations, roles needed (data/ops lead, forecasting/data scientist, partnerships/growth, mobile engineer). **No market-size or revenue claims without sources.**
