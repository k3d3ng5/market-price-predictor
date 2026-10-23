# ARCHITECTURE DECISION RECORDS (ADR LOG)
## ProducePrice Intelligence

| | |
|---|---|
| **Version** | 1.0 — living log |
| **Date** | 22 October 2026 |
| **Related** | `01_PRD_ProducePrice_v3.0.md` · `02_Implementation_Plan_v1.0.md` |

## How this log is kept updated

1. **Any decision that changes stack, data model, privacy posture, AI behaviour or scope** gets an ADR in the same working session.
2. **Never edit history.** To change a decision, add a new ADR that **supersedes** the old one and mark the old one `Superseded by ADR-xxx`.
3. **Status values:** `Proposed` (my recommendation, awaiting your confirmation) · `Accepted` (you chose it, or it is binding) · `Superseded` · `Deprecated`.
4. **Who accepts?** Decisions you stated explicitly (the stack list) are marked `Accepted`. Decisions I derived are `Proposed` until you confirm.
5. Items marked **[VERIFY]** depend on third-party behaviour that changes over time; check current official documentation before implementing.

### ADR template
```
ADR-NNN — Title
Status · Date · Supersedes/Superseded by
Context      — the forces and constraints
Decision     — what we chose
Alternatives — what else we considered
Consequences — benefits, costs, follow-ups
Review when  — the trigger to revisit
```

---

## Index

| ADR | Title | Status |
|---|---|---|
| 001 | TypeScript monorepo (pnpm workspaces) | Accepted |
| 002 | Express API + Prisma as a modular monolith | Accepted |
| 003 | Local-first SQLite for dev; PostgreSQL for staging/production | Accepted (constraints Proposed) |
| 004 | Better Auth for identity; Expo/web session strategy | Accepted (details Proposed) |
| 005 | Email OTP through a Gmail-first provider chain | Accepted (guardrails Proposed) |
| 006 | Expo (React Native) for Android + iOS | Accepted · supersedes Capacitor choice in ARD v1.0 (ADR-04) |
| 007 | Next.js for console and lightweight public web | Accepted (PWA scope Proposed) |
| 008 | grammY Telegram bot; polling in dev, webhook in prod; channel abstraction | Accepted |
| 009 | Groq assistant: tool-calling, numeric verifier, deterministic fallback | Accepted |
| 010 | Paystack payments: scope, security, deferral | Accepted (scope Proposed) |
| 011 | Cloudflare Tunnel for dev/demo exposure only | Accepted |
| 012 | Append-only observations, trust labels, original units retained | Proposed |
| 013 | Forecast release gate with admin approval | Accepted — priority raised by ADR-021 |
| 014 | NDPA privacy-by-design baseline | Accepted (binding per brief) |
| 015 | AI governance baseline and human oversight | Accepted (binding per brief) |
| 016 | Provider adapter layer | Proposed |
| 017 | Job scheduling abstraction | Proposed |
| 018 | Money as integer minor units; unit registry | Proposed |
| 019 | Capstone sprint scope and single-client rule | Proposed |
| 020 | Global-ready data model (country, currency, locale as data) | Proposed |
| 021 | Forecast-first positioning; backtest-based sprint demo | Accepted |

---

## ADR-001 — TypeScript monorepo (pnpm workspaces)
**Status:** Accepted · 22 Oct 2026
**Context:** All requested components (Express, Prisma, Better Auth, Expo, Next.js, grammY) are TypeScript-native. Domain rules (units, trust labels, comparison) must be identical across API, bot, assistant and clients.
**Decision:** One monorepo with `apps/*` and shared `packages/*` (domain, db, providers, shared). Shared zod schemas and types.
**Alternatives:** Polyrepo; mixed Python/TypeScript.
**Consequences:** One language and one toolchain; shared logic prevents surface drift. Forecasting in Python remains possible later as an isolated worker (ADR-013), reading the same database.
**Review when:** Forecasting workload or team structure demands a separate service.

## ADR-002 — Express API + Prisma as a modular monolith
**Status:** Accepted · 22 Oct 2026
**Context:** Small team, tight time, many surfaces.
**Decision:** One Express application with modules (prices, reports, auth, assistant, bot, notifications, admin) over Prisma. The bot lives in the API process during the sprint.
**Alternatives:** Microservices; serverless functions.
**Consequences:** Fast to build and debug; single deployment. Module boundaries kept clean so the bot, assistant or jobs can be split out later.
**Review when:** Independent scaling is needed for the assistant or jobs.

## ADR-003 — Local-first SQLite for dev; PostgreSQL for staging/production
**Status:** Accepted (engine split) · constraints Proposed · 22 Oct 2026
**Supersedes:** PRD v2.0 "PostgreSQL only"
**Context:** You want zero-cost, zero-setup local development and later a production-grade database. Prisma uses one datasource provider per schema, and SQLite lacks some PostgreSQL features (scalar lists, rich native types; Prisma support for enums/JSON on SQLite depends on version **[VERIFY]**).
**Decision:** Develop on SQLite. Move staging/production to PostgreSQL. To keep the schema portable: no scalar-list fields; enums as validated strings; money as integers (ADR-018); JSON stored as text where needed; CI runs the test suite against **both** engines.
**Alternatives:** Postgres everywhere via Docker or a free hosted tier; SQLite in production.
**Consequences:** Faster onboarding and offline dev; one-time migration effort and a risk of engine divergence, mitigated by dual-engine CI and the checklist in the plan (D.5).
**Review when:** Hosted free Postgres becomes simpler than local SQLite for the team, or a feature requires Postgres-only capabilities (full-text, arrays, materialised views) earlier.

## ADR-004 — Better Auth for identity; Expo/web session strategy
**Status:** Accepted (library) · session details Proposed · 22 Oct 2026
**Context:** Need email OTP sign-in for web and mobile, role checks, and later Telegram linking.
**Decision:** Better Auth with the Prisma adapter and the `emailOTP` plugin. Web uses secure cookie sessions. Expo uses Better Auth's Expo integration with secure device storage. If WebView/cookie issues appear, use bearer-token flow. Roles: Guest, User, Reporter, Admin. Telegram linking by single-use short-lived code (Phase 3). **[VERIFY plugin availability, configuration and current Express integration order in official docs.]**
**Alternatives:** Auth.js, Clerk, custom JWT.
**Consequences:** Self-hosted identity data in our DB (good for NDPA control); we own security hardening (rate limits, secrets).
**Review when:** Mobile session issues persist, or phone-number sign-in is required.

## ADR-005 — Email OTP through a Gmail-first provider chain
**Status:** Accepted (approach) · guardrails Proposed · 22 Oct 2026
**Supersedes:** Resend as the email provider in PRD v2.0 / ARD v1.0
**Context:** Free-tier-first requirement. Gmail SMTP with an app password is free and fast to set up but has sending limits and deliverability risk **[VERIFY current limits and policy]**.
**Decision:** An `EmailProvider` interface with an ordered chain, configured by `EMAIL_PROVIDER_CHAIN` (e.g., `gmail,console`). `console` prints the OTP in dev only. Production replaces or precedes Gmail with a transactional provider before pilot launch. Guardrails: one Gmail account with 2-step verification and app password; OTP rate limiting; short OTP expiry; never log OTPs in production.
**Do not:** rotate multiple free Gmail accounts to evade quotas. That risks account suspension and breaches provider terms; it also harms deliverability and auditability.
**Alternatives:** Resend, Brevo, Amazon SES, Mailgun (free-tier terms to be checked).
**Consequences:** Zero-cost sprint; known migration step; email is a processor under NDPA (register it).
**Review when:** Pilot starts, OTP delivery failures appear, or volume exceeds free limits.

## ADR-006 — Expo (React Native) for Android + iOS
**Status:** Accepted · 22 Oct 2026
**Supersedes:** ARD v1.0 ADR-04 (Capacitor wrapper)
**Context:** You want a single codebase for both platforms with native push and offline storage.
**Decision:** Expo with Expo Router. Secure token storage; local storage (SQLite/AsyncStorage) for last-seen data and the offline report queue; push via Expo notifications; Expo Go for development; EAS Build for installable builds **[VERIFY free-tier limits and queue times]**. Shared types and API client from the monorepo.
**Alternatives:** Capacitor-wrapped PWA; native Kotlin/Swift; TWA.
**Consequences:** Better native feel and push reliability; separate UI codebase from the web. iOS distribution requires an Apple developer programme membership **[VERIFY cost/terms]**; Android APK via EAS or local build.
**Review when:** Two UI codebases (Expo + Next.js) become a maintenance burden; consider Expo web export.

## ADR-007 — Next.js for console and lightweight public web
**Status:** Accepted · PWA scope Proposed · 22 Oct 2026
**Context:** Admin tooling is needed (imports, review queue, gate, privacy operations). Earlier requirements also named a PWA.
**Decision:** Next.js hosts (a) the admin console and (b) a lightweight public price view that can be installable (PWA features) so the PWA requirement is not silently dropped. Mobile-first users are served primarily by Expo and Telegram.
**Alternatives:** Console-only Next.js; Expo web as the only web client.
**Consequences:** One web codebase for ops and public access; keep the public part small to avoid duplicating Expo features.
**Review when:** The brief states a different deliverable form; or Expo web export proves sufficient.

## ADR-008 — grammY Telegram bot; polling in dev, webhook in prod; channel abstraction
**Status:** Accepted · 22 Oct 2026
**Context:** Telegram is used because WhatsApp is paid; long-term ambition is to be on more channels.
**Decision:** grammY. Development and sprint demo use **long polling** (no public URL needed). Staging/production use **webhook mode** with a secret token. Slash-commands run deterministic handlers; free text goes to the assistant. Define an internal `Channel` interface (`send`, `format`, `deepLink`, `capabilities`) so WhatsApp or SMS/USSD adapters can be added without touching domain logic.
**Alternatives:** Telegraf; direct Bot API; WhatsApp Business API (paid).
**Consequences:** Free access; Telegram reach may be lower than WhatsApp among some traders — validate in pilot. A Telegram Mini App could later embed the web client **[VERIFY]**.
**Review when:** Pilot evidence shows the target users are not on Telegram.

## ADR-009 — Groq assistant: tool-calling, numeric verifier, deterministic fallback
**Status:** Accepted · 22 Oct 2026
**Context:** Users need plain-language access to data, but a single invented number damages trust. Groq free-tier limits and model availability change **[VERIFY]**.
**Decision:** Groq via official SDK; model pinned by `GROQ_MODEL`; read-only tools over `packages/domain`; a numeric-claim verifier compares the draft against that turn's tool results (regenerate once, then template fallback); a redaction layer removes personal identifiers before prompts; deterministic data cards when the provider is down or rate-limited; golden question set in CI (AIG-08).
**Alternatives:** Free-form retrieval over documents; no assistant.
**Consequences:** Safer answers at the cost of flexibility; engineering effort for verifier and golden set.
**Review when:** Model change, rate-limit change, or a golden-set regression.

## ADR-010 — Paystack payments: scope, security, deferral
**Status:** Accepted (provider) · scope Proposed · 22 Oct 2026
**Context:** Revenue hypotheses include paid alerts/digests/exports and later reporter payouts. Payments add security, compliance and reconciliation work.
**Decision:** Paystack is the payments provider. Sprint: **design only**. Pilot: **test mode** checkout for a paid plan. Controls: server-side transaction initialisation; webhook signature verification; server-side verification of the transaction reference before entitlement; idempotent processing by reference; **no card data on our servers**; for payouts store only recipient codes, not bank account numbers; human approval above defined payout limits. Go-live only after counsel and Paystack requirements are met **[VERIFY]**.
**Alternatives:** Flutterwave, bank transfer, manual invoicing.
**Consequences:** Delays revenue proof but avoids a compliance mess in the capstone window.
**Review when:** First paying pilot customer is identified.

## ADR-011 — Cloudflare Tunnel for dev/demo exposure only
**Status:** Accepted · 22 Oct 2026
**Context:** Webhook testing and device testing need a public HTTPS URL from a laptop.
**Decision:** Use `cloudflared` tunnels for development, demos and webhook tests. Quick tunnels give changing URLs; re-set the Telegram webhook after each restart. Protect endpoints with secret tokens. **Never** serve real user data from a laptop-hosted tunnel (PRV-14). Production uses managed hosting.
**Alternatives:** ngrok; deploying early.
**Consequences:** Free, fast; demo reliability depends on the laptop and network, so prepare a recorded fallback.
**Review when:** Pilot starts.

## ADR-012 — Append-only observations, trust labels, original units retained
**Status:** Proposed · 22 Oct 2026
**Context:** Auditability and trust are the product.
**Decision:** Observations are never overwritten; corrections append a superseding row. Original price and unit are always stored; `price_per_kg` is derived and nullable. Trust label stored on the row (`verified_report | official_statistic | estimated | unverified`; forecasts live in a separate table).
**Consequences:** Full audit trail; larger tables and `isCurrent` handling.

## ADR-013 — Forecast release gate with admin approval
**Status:** Accepted (via ADR-021) · 22 Oct 2026
> *Update 23 Oct 2026:* elevated to Accepted; its **gate is unchanged**, but the engine's priority is raised to a first-class sprint capability — see ADR-021.
**Context:** Public data is mostly monthly and cannot support credible 7-day forecasts alone.
**Decision:** Forecast worker (TypeScript baselines in sprint/pilot; optional Python worker later) writes candidates and evaluations only. Publishing requires data sufficiency, baseline beaten on held-out data, documented limitations and **admin approval**. Auto-suspend on degraded realised error. Ineligible pairs show "Not available yet — {reason}".
**Consequences:** Honest product; forecasts arrive later than the UI.

## ADR-014 — NDPA privacy-by-design baseline
**Status:** Accepted (binding per brief) · 22 Oct 2026
**Context:** The product processes personal data (email, Telegram IDs, reporter profiles, optional photos, payment references) in Nigeria. NDPA 2023 applies **[COUNSEL]**.
**Decision:** The PRD §8 rules (PRV-01 to PRV-14) are binding: data inventory per feature, lawful basis recorded, unbundled and logged consent, no sensitive data, adults only, processor register, cross-border transfer review, retention automation, DPIA before photos/payouts, breach runbook, DSR workflow, no PII in logs or LLM prompts, no real personal data on laptop-hosted demos.
**Consequences:** Some features (photos, payouts) move later; extra tooling in the console. Counsel review before public launch is mandatory.
**Review when:** Law/regulator guidance changes, new data types are added, or a new country is onboarded.

## ADR-015 — AI governance baseline and human oversight
**Status:** Accepted (binding per brief) · 22 Oct 2026
**Context:** An LLM assistant and automated reporter scoring can mislead or harm people.
**Decision:** PRD §9 rules (AIG-01 to AIG-16) are binding. Highlights: assistant never generates numbers; no buy/sell/hold advice; named AI owner; pinned models with eval-gated changes; logging with sampled review; incident procedure; **no solely automated significant decisions about people** — reporter trust scores are advisory and humans decide on rejection patterns, suspension or payment.
**Consequences:** Slower automation of reporter management; stronger accountability.
**Review when:** Regulation changes, a severity-1 incident occurs, or a new AI use case is proposed (needs register entry first).

## ADR-016 — Provider adapter layer
**Status:** Proposed · 22 Oct 2026
**Context:** Free-tier-first with global scaling means providers will change (email, LLM, payments, push, messaging channels, hosting regions).
**Decision:** `packages/providers` defines interfaces and mock implementations for email, LLM, payments, push and channel. Each real provider is one adapter selected by configuration. Local development and CI use mocks.
**Consequences:** Small up-front cost; upgrades and country-specific swaps become configuration; deterministic tests.

## ADR-017 — Job scheduling abstraction
**Status:** Proposed · 22 Oct 2026
**Context:** An earlier design used a Postgres-backed queue; SQLite dev cannot use it.
**Decision:** A `JobScheduler` interface. Dev/sprint: in-process scheduler with a `JobRun` table. Pilot: a durable queue chosen in Phase 1 (Postgres-backed or managed).
**Consequences:** Jobs written once; infrastructure choice deferred without rewriting logic.

## ADR-018 — Money as integer minor units; unit registry
**Status:** Proposed · 22 Oct 2026
**Decision:** Prices stored as integer minor units (kobo) with currency code; no floating-point money. Units live in a registry (name, aliases, kg-equivalent with validation status and basis). Cross-unit comparison only with validated conversions.
**Consequences:** Portable across SQLite/Postgres and currencies; requires careful display formatting.

## ADR-019 — Capstone sprint scope and single-client rule
**Status:** Proposed · 22 Oct 2026
**Context:** The deadline is tomorrow; the requested stack is much larger than a one-day build.
**Decision:** Tier S ships one client (Expo **or** Next.js, chosen by the assigned brief), the API, seed/import, price/compare/forecast-eligibility views, the Telegram bot lookups, and — as stretch — auth and the assistant. Everything else is documented roadmap. Stop-loss order and cut line are in the plan (Part A).
**Consequences:** A smaller but honest demo; clear roadmap for investors and co-founders.
**Review when:** The brief is confirmed or the deadline changes.

## ADR-020 — Global-ready data model
**Status:** Proposed · 22 Oct 2026
**Context:** The ambition is global expansion and a produce market that behaves like a financial market, starting with tomatoes and onions in Abuja.
**Decision:** Country, currency, locale, market, commodity, unit and source are data tables. Timezone, currency and privacy-regime references are per country. Adding a country or commodity means data entry plus unit validation and legal review, not code change. Benchmark pricing (vision rung 2) is designed as a methodology on top of verified observations, not as an exchange. Market-infrastructure features (rung 4) are out of scope pending regulatory analysis **[COUNSEL]**.
**Consequences:** Slightly more up-front schema work; avoids Nigeria-hardcoding that is costly to remove later.

## ADR-021 — Forecast-first product positioning
**Status:** Accepted · 23 Oct 2026
**Supersedes (priority only):** ADR-013 — the release **gate is unchanged**; what changes is *when the engine is built* and *how prominently it is shown*.
**Context:** The product's headline promise is to be a functioning market price predictor, not a price lookup with a forecast tab that always says "not available yet". A predictor is a data-volume problem: it needs years of history to learn seasonality and trends, which the reporter network alone could not supply for months. Open datasets — notably the WFP market price series for Nigeria on HDX, plus NBS and World Bank data — provide long, market-level tomato/onion history today.
**Decision:** Two-brain architecture. The **historical brain** trains and backtests the predictor on an ingested historical price series (normalised per kg); the **fresh brain** (reporters + imports) keeps latest prices current. The forecast engine (naive, seasonal-naive, moving-average baselines plus one seasonal model, validated by **rolling-origin backtests**) ships in Tier S as a backtested prototype (FR-F8, task SP-31): the UI shows real backtest metrics vs. baselines and a predicted-vs-actual chart, alongside the honest "Not available yet — {reason}" state for live publication. Live forecasts remain behind the ADR-013 gate. Start with 2–3 pilot pairs (e.g., tomato × Wuse, onion × Wuse) for depth over breadth.
**Alternatives:** Keep forecasts deferred to Phase 6 only; ship a hardcoded "pretend" forecast (rejected — violates AIG rules and the honesty guardrails); waiter-only approach relying on reporter-collected history.
**Consequences:** The sprint gains a working predictor demo with evidence that the model beats naive baselines; schema must populate `pricePerKgMinor` at ingestion for backtest data; Phase 6 shortens to publication hardening; risk of over-promising accuracy is mitigated by always displaying ranges, reliability badges and typical error bands.
**Review when:** Historical dataset proves too sparse for a pilot pair, or backtest metrics fail to beat baselines — in which case the "Not available yet" state remains the honest fallback for live release.

---

## Pending decisions that need you

| Topic | Needed to finalise |
|---|---|
| Assigned brief and track | ADR-019 (single client), PRD §13 mapping |
| Real vs. demonstration data | PRD §7.6, README wording |
| Controller entity and privacy lead | ADR-014 follow-up |
| PWA requirement | ADR-007 scope |
| Production email provider | ADR-005 follow-up |
| Reporter incentive/payout model | ADR-010 follow-up |
