# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## TomionPrice (public brand of ProducePrice Intelligence) — Tomato & Onion Market Price Platform

| | |
|---|---|
| **Version** | 3.2 — supersedes PRD v3.1 (PWA-first client ADR-022; TomionPrice brand) |
| **Date** | 22 October 2026 |
| **Status** | Living document — see §0 for the update protocol |
| **Companion files** | `02_Implementation_Plan_v1.0.md` (schedule and tasks) · `03_ADR_Log.md` (every architecture decision) |
| **Market** | Nigeria first (Abuja/FCT); designed to be country-agnostic from day one |
| **Commodities** | Tomatoes, onions (extensible by configuration) |
| **Surfaces** | Expo mobile app (Android + iOS) · Next.js console and web · grammY Telegram bot · Groq-powered assistant |
| **Governing rules** | Nigeria Data Protection Act 2023 (NDPA) privacy rules (§8) · AI governance rules (§9) |

> **Not legal advice.** I am not a lawyer. Sections 8 and 9 translate privacy and AI-governance principles into engineering requirements. Items marked **[VERIFY]** or **[COUNSEL]** must be confirmed with a qualified Nigerian data-protection practitioner before any public launch.

**Priority and status tags used throughout**

| Tag | Meaning |
|---|---|
| **S** | Tier S — *Capstone Sprint* (must be demonstrable within the submission window) |
| **P** | Tier P — *Pilot* (first real users and reporters) |
| **G** | Tier G — *Growth/Global* (scale, new countries, new commodities) |
| **[HYP]** | Hypothesis — believed, not yet validated with users or data |
| **[VERIFY]** | Third-party fact or behaviour that changes over time; check current docs |
| **[COUNSEL]** | Needs legal/regulatory confirmation |

---

## 0. Document Control and Update Protocol

This is a **living document set**. To stop it rotting:

1. **One home per truth.** Requirements live here. Decisions live in the ADR log. Schedule and task status live in the Implementation Plan. Never duplicate; link instead (e.g., "see ADR-006").
2. **Update trigger.** Any change to stack, scope tier, data model, privacy posture or AI behaviour requires, in the same working session: (a) an ADR (new or superseding), (b) a PRD change-log line, (c) a task-status update in the plan.
3. **Status vocabulary.** Requirements: `Planned → In progress → Done → Verified → Deferred`. ADRs: `Proposed → Accepted → Superseded/Deprecated`.
4. **Evidence rule.** A requirement is `Verified` only when a test or demo recorded in the plan proves it.
5. **Weekly review (post-capstone).** Re-read tiers, risks, metrics; prune.

### 0.1 Change log

| Version | Date | Change |
|---|---|---|
| 1.1 | — | Original fellowship-aligned PRD (supplied) |
| 2.0 | 22 Oct 2026 | Personas, journeys, workflows, automation, data/forecast gate, phased plan, assistant rules |
| **3.0** | 22 Oct 2026 | **Stack change**: TypeScript monorepo, Express + Prisma, Better Auth (email OTP via Gmail provider chain), Expo app, Next.js console, grammY bot, Groq chatbot, Paystack, Cloudflare Tunnel, local-first SQLite. **Scope tiers S/P/G** introduced. **NDPA privacy** (§8) and **AI governance** (§9) made binding requirements. Global-ready data model (§7). Capstone deadline reality reflected (Tier S). |
| **3.1** | 23 Oct 2026 | **Forecast-first repositioning (ADR-021)**: the market price predictor is the headline capability, not a deferred feature. Forecast engine (baselines + rolling-origin backtest on historical open data, e.g., WFP market price series on HDX) moved into Tier S as a backtested prototype. Release gate (§5.6) unchanged; live publication still gated. Two-brain data architecture: historical open data trains the predictor; the reporter network keeps the latest prices fresh (§7.1). |
| **3.2** | 23 Oct 2026 | **Single-client decision (ADR-022)**: Tier S client = **Next.js PWA** (installable, offline last-seen shell, text-first). Satisfies the long-open PWA requirement (§14 Q3). Expo app and Telegram bot move explicitly to Tier P/G. UI designed in Stitch (Google) and wired to the real API — no mock data in the shipped client. **Public brand = TomionPrice** (tomato + onion umbrella): tomato and onion remain **separate commodities**, each commodity × market pair predicted separately by the **one shared execution engine** (ADR-021). No tomato/onion "pair asset" exists: their ratio has no structural market force and is not modelled. Cross-market comparison stays within one commodity (FR-P3). |

### 0.2 Stack changes vs. v2.0 (summary; reasons in ADRs)

| Area | v2.0 | v3.0 | ADR |
|---|---|---|---|
| Database | PostgreSQL only | **SQLite local-first for dev; PostgreSQL for staging/production** | ADR-003 |
| Email | Resend | **Gmail SMTP provider chain** behind an adapter | ADR-005 |
| Mobile | Capacitor-wrapped PWA | **Expo (React Native), Android + iOS** | ADR-006 |
| Web | PWA | **Next.js** (console + lightweight public web) | ADR-007 |
| Payments | not specified | **Paystack** (deferred beyond sprint) | ADR-010 |
| Dev exposure | not specified | **Cloudflare Tunnel** | ADR-011 |
| Jobs | Postgres queue | **Job abstraction** (in-process in dev, durable queue in prod) | ADR-017 |

---

## 1. Executive Summary

ProducePrice Intelligence is a price-intelligence service for tomatoes and onions. It answers three questions people at the market ask every day:

1. **What is the price now, where, in what unit — and can I trust it?**
2. **Where is it cheaper or dearer, and by how much?**
3. **Which way might it move — and how sure are we?**

It is reachable through an **Expo app**, a **Telegram bot**, a **Next.js web/console** and an **AI assistant** that answers only from verified data. A network of **price reporters** keeps the data fresh. Forecasts are published **only** when they pass an evidence gate.

### 1.1 Why this can be a company (the investor/co-founder thesis)

| Element | Statement | Status |
|---|---|---|
| **Wedge** | Two high-frequency, volatile, perishable commodities in one city, where information is fragmented | Observable; needs user validation |
| **Moat** | A continuously collected, verified, unit-normalised price record that does not exist as open data at high frequency | Built through the reporter network; **not yet proven** |
| **Expansion** | New markets → new commodities → new cities → new countries, all via configuration (§7) | Architecture-ready; unproven commercially |
| **Product ladder** | Data → **Benchmark price** → Intelligence → (long-term) market infrastructure | Rungs 1–3 are in scope; rung 4 is vision only |
| **Revenue hypotheses** | Premium alerts/digests, institutional dashboards/API, sponsored data programmes (Paystack enables NGN billing) | **[HYP]** — no revenue evidence yet |

> **Honesty guardrail for pitching:** do not state market size, revenue or accuracy figures unless you can source and reproduce them. The strongest early evidence is *real, fresh, verified data flowing from reporters*, not slides.

### 1.2 The vision ladder (stage gates)

| Rung | Capability | Gate to unlock |
|---|---|---|
| 1. **Data** | Trusted observations with units, dates, provenance | Unit registry validated; ≥ 3 markets reporting |
| 2. **Benchmark** | Published reference price/index per commodity × market, with documented methodology | Sustained reporting coverage; methodology reviewed |
| 3. **Intelligence** | Forecasts, alerts, risk signals | Forecast release gate passed (§5.6) |
| 4. **Infrastructure** | Contracts/hedging/trading-like features | **Out of scope.** Requires regulatory analysis **[COUNSEL]** and a funded team |

---

## 2. Scope Tiers

| Capability | S (Capstone Sprint) | P (Pilot) | G (Growth/Global) |
|---|:---:|:---:|:---:|
| Price check, history, market comparison (unit/date/trust-labelled) | ✔ | ✔ | ✔ |
| Seed/import pipeline with source register | ✔ | ✔ | ✔ |
| One primary client (see §2.1) | ✔ | — | — |
| Both clients: Expo app + Next.js console/web | — | ✔ | ✔ |
| Telegram bot: `/start /price /compare /help` | ✔ | ✔ | ✔ |
| Telegram reporting wizard | demo/design | ✔ | ✔ |
| Email OTP sign-in (Better Auth, Gmail chain) | ✔ (or guest fallback) | ✔ | ✔ |
| Telegram ↔ account linking | — | ✔ | ✔ |
| Groq assistant, grounded, with numeric verifier | ✔ (stretch) | ✔ | ✔ |
| Alerts (threshold, digest) | design | ✔ | ✔ |
| Reporter verification + trust score | design | ✔ | ✔ |
| Forecast engine (baselines + rolling-origin backtest on historical data) — **backtested prototype** | ✔ | ✔ | ✔ |
| Forecast gate with "Not available yet" state | ✔ | ✔ | ✔ |
| Published (live) forecasts | — | ✔ (only gated pairs) | ✔ |
| Paystack (test-mode subscription / reporter payouts) | design | ✔ test mode | ✔ live |
| Multi-country / multi-currency operation | schema only | schema | ✔ |
| Additional channels (WhatsApp, SMS/USSD) | — | — | ✔ |

### 2.1 The single-client rule for the sprint — RESOLVED (ADR-022)
The Tier S client is a **Next.js PWA** (public price view + minimal admin page). Expo deferred (Tier P).

---

## 3. Users and Personas

> Personas are **hypotheses** drawn from the product brief and general market structure, not interview results. Names are illustrative. Validate in Tier P.

| ID | Persona | Profile | Jobs to be done | Primary surface | Tier |
|---|---|---|---|---|---|
| P1 | **Hajiya Binta** — retail tomato seller | Market stall; buys several times a week; mobile-first; data-conscious; may prefer Hausa/Pidgin | Know today's wholesale price; avoid overpaying; decide quantity | Telegram bot → Expo app | S/P |
| P2 | **Musa** — wholesale onion trader | Moves bulk between source and Abuja; decides timing | Compare markets; judge trend; time purchases | Expo app / web | S/P |
| P3 | **Emeka** — restaurant/caterer buyer | Weekly procurement; budget-driven; email/WhatsApp-native | Budget produce; spot spikes; plan purchases | Web + email digest + assistant | P |
| P4 | **Amina** — price reporter | Field enumerator or trusted trader; phone-first; intermittent signal | Submit accurate prices fast in the right unit; see acceptance | Telegram bot; Expo (offline queue) | P |
| P5 | **Dr. Tolu** — analyst (co-op/NGO/research) | Needs citable data | Download clean history; understand method and licence | Web | P/G |
| P6 | **Ngozi** — data steward/admin | Operates the platform | Review flagged data; manage reporters; gate forecasts; respond to data-subject requests | Next.js console | S (minimal)/P |
| P7 | **Investor / co-founder evaluator** | Judges the opportunity | See real data, working product, credible architecture, honest limits | Demo + docs | S |

---

## 4. User Journeys

### J1 — Retailer's first price (P1, Telegram) — Tier S
1. Taps **Start** → bot asks language and market (buttons).
2. `/price tomato Wuse` → price card: *₦{amount} per {unit} · Verified 2 days ago · ▲ 6% vs last week*.
3. Bot offers *Compare* or *Ask a question*.
**Failure path:** no recent data → card states last verified date; never invents a price.

### J2 — Trader's timing decision (P2, Expo/Web) — Tier S/P
1. Opens onion dashboard → compares source vs destination markets.
2. Opens forecast tab → sees range with reliability badge **or** "Not available yet — {reason}".
3. Asks assistant "How have prices moved this month?" → grounded answer with source chips; no buy/sell instruction.

### J3 — Reporter's market day (P4) — Tier P
1. Reminder → `/report` wizard: commodity → market → price type → unit → price → confirm.
2. Offline? Expo queues the report with an idempotency key; syncs on reconnect.
3. Outcome message: *Verified* / *Needs a quick check* / *Rejected — reason and fix*.
4. Weekly contribution summary.

### J4 — Buyer's weekly planning (P3) — Tier P
Monday email digest → opens web → asks assistant to explain weekly change → exports CSV (with attribution).

### J5 — Admin's gate and privacy duties (P6) — Tier S/P
1. Opens console → import log, review queue.
2. Forecast gate screen: baseline vs model metrics → approve/withhold with reason.
3. Handles a data-subject request (export/delete) within the defined SLA (§8.5).

### J6 — Investor/co-founder demo (P7) — Tier S
Live walkthrough: real or clearly labelled sample data → price card → comparison → "forecast not available yet" with reason → Telegram bot → assistant refusing to invent a number → documentation and ADRs.

---

## 5. Functional Requirements

Format: **ID · Requirement · Tier · Acceptance**.

### 5.1 Identity and onboarding

| ID | Requirement | Tier | Acceptance |
|---|---|---|---|
| FR-A1 | Email OTP sign-in via Better Auth; OTP sent through the **email provider chain** (ADR-005) | S/P | OTP arrives or falls back; expires; rate-limited; no OTP in logs in production |
| FR-A2 | Guest read-only access to latest prices | S | No sign-in needed for price lookup |
| FR-A3 | Roles: Guest, User, Reporter, Admin | S | Role checks enforced server-side |
| FR-A4 | Onboarding captures role label, language, preferred markets/commodities | P | Stored as preferences only |
| FR-A5 | Telegram ↔ account linking by single-use short-lived code | P | Link completes < 60 s; code single-use |
| FR-A6 | Consent capture and versioning (§8.4) | S/P | Consent record created before optional processing |
| FR-A7 | Mobile sessions use the Better Auth Expo integration with secure device storage | P | Token not in plain storage **[VERIFY plugin docs]** |

### 5.2 Prices, history, comparison

| ID | Requirement | Tier | Acceptance |
|---|---|---|---|
| FR-P1 | Latest price per commodity × market with unit, currency, observed date, change vs previous comparable, **trust label**, freshness | S | Every price shows unit, date, label; stale badged; missing never shown as zero/live |
| FR-P2 | Historical series at native frequency; gaps shown as gaps | S | No fabricated points |
| FR-P3 | Market comparison using validated unit conversions | S | Cross-unit comparison blocked with reason if units unvalidated |
| FR-P4 | Data Source Index page (owner, licence, frequency, validation status) | S | Each observation traceable to a source |
| FR-P5 | CSV export with attribution (signed-in) | P | Includes source and licence notes |

### 5.3 Reporting (the data engine)

| ID | Requirement | Tier | Acceptance |
|---|---|---|---|
| FR-R1 | Reporter submits commodity, market, price, unit, price type, optional grade, time | P | Required fields validated |
| FR-R2 | Submission via Telegram wizard and Expo form | P | Both create identical records |
| FR-R3 | Offline queue with idempotency key (Expo) | P | No duplicates after retry |
| FR-R4 | Automatic checks: range, duplicate, outlier vs recent verified history | P | Result recorded with reason |
| FR-R5 | Status lifecycle: Submitted → Auto-checked → Needs review → Verified / Rejected | P | Reporter notified with reason |
| FR-R6 | **Human review required** before a reporter is penalised, suspended or has payment withheld on the basis of automated scoring (§9, AIG-11) | P | No automated adverse action |
| FR-R7 | Photo evidence **optional**, with metadata stripping and faces/bystander guidance (§8) | G (or P if needed) | EXIF location removed; retention limit set |

### 5.4 Alerts and notifications

| ID | Requirement | Tier | Acceptance |
|---|---|---|---|
| FR-N1 | Threshold and weekly-digest alerts | P | Include commodity, market, price, unit, time, trust label |
| FR-N2 | Channels: Telegram, email (via chain), Expo push | P | User can choose and mute per channel |
| FR-N3 | Forecast alerts only from published forecasts, labelled as predictions | P | None from ineligible/stale data |
| FR-N4 | Deduplication, quiet hours, frequency cap, one-tap unsubscribe | P | Verified by tests |
| FR-N5 | Marketing-type messages require separate opt-in from service messages | P | Separate consent flags (§8.4) |

### 5.5 Assistant (Groq)

| ID | Requirement | Tier | Acceptance |
|---|---|---|---|
| FR-AI1 | One assistant service serving Expo, web and Telegram | S/P | Same answer for same question across surfaces |
| FR-AI2 | Tool-calling over read-only domain functions; **no numeric claim without a tool result in the same turn** | S | Golden-set check (§9.6) |
| FR-AI3 | Source chips (unit, date, trust label, record link) under each answer | S | Present on all numeric answers |
| FR-AI4 | Refuses buy/sell/hold directives; presents evidence and uncertainty | S | Adversarial tests pass |
| FR-AI5 | Graceful degradation to deterministic data cards if provider unavailable or rate-limited | S | Fallback verified by disabling the key |
| FR-AI6 | PII never sent to the model provider (redaction layer) | S | Prompt-log inspection test |
| FR-AI7 | Feedback control (👍/👎 + reason) | P | Stored with pseudonymous ID |

### 5.6 Forecasting and release gate

| ID | Requirement | Tier | Acceptance |
|---|---|---|---|
| FR-F1 | Eligibility check per commodity × market × horizon (data sufficiency) | S | Returns reason code when ineligible |
| FR-F2 | Baselines first (last value, seasonal naive, moving average) | P | Reproducible backtest |
| FR-F3 | Candidate models only promoted if they beat baselines on rolling-origin held-out data | P | Metrics stored per run |
| FR-F4 | **Admin approval required** to publish; decisions audited | P | Gate record with reason |
| FR-F5 | Display as range + direction + reliability badge, never as a promise | P | Copy rules from Product Bible |
| FR-F6 | Auto-suspend when realised error exceeds threshold | P | Monitored weekly |
| FR-F7 | In Tier S the UI shows "Not available yet — {reason}" for ineligible pairs | S | Demonstrable |
| FR-F8 | **Backtest evidence demo (Tier S)**: the forecast engine runs a rolling-origin backtest on an ingested historical price series (e.g., WFP market price data via HDX) and the UI shows the backtest result — metrics vs. naive/seasonal-naive baselines and a sample predicted-vs-actual chart — alongside the live "Not available yet" state | S | Backtest metrics stored reproducibly; chart renders on the chosen client |

### 5.7 Console (Next.js)

| ID | Requirement | Tier | Acceptance |
|---|---|---|---|
| FR-C1 | Import log and data-quality flags | S | Visible and filterable |
| FR-C2 | Review queue for flagged reports | P | Verify/reject with reason |
| FR-C3 | Reporter management and contribution view | P | Role-protected |
| FR-C4 | Forecast gate screen | P | Approve/withhold/suspend |
| FR-C5 | Privacy operations: consent log lookup, data export/delete execution, processor register view | P | Actions audited |
| FR-C6 | Audit log viewer | P | Immutable entries |

### 5.8 Payments (Paystack) — design now, build after sprint

| ID | Requirement | Tier | Acceptance |
|---|---|---|---|
| FR-PAY1 | Paid plan (alerts/digests/exports) via Paystack checkout in **test mode first** | P | Test-mode flow completes end to end |
| FR-PAY2 | Webhook signature verification; idempotent processing by transaction reference; server-side verify call before granting access | P | Replay attack test passes |
| FR-PAY3 | **No card data touches our servers**; store only references/customer codes | P | Data inventory shows none |
| FR-PAY4 | Reporter payouts via Paystack transfer recipients; store recipient code only, **not account numbers** | G | Data inventory check |
| FR-PAY5 | Payout/billing decisions require human approval above defined limits | G | Policy enforced |

---

## 6. Workflows and Automation

### 6.1 Workflows

| ID | Workflow | Summary |
|---|---|---|
| WF-1 | Price check | Pick commodity → market → price card → history |
| WF-2 | Compare | Pick markets → unit normalisation or block → differences with dates |
| WF-3 | Forecast view | Eligibility check → range + reliability or "Not available yet" |
| WF-4 | Alert subscribe | Type → threshold → channel → confirm → manage |
| WF-5 | Report price | Wizard/form → validation → auto-check → verify/review → publish |
| WF-6 | Link Telegram | Code in one surface → confirm in other |
| WF-7 | Ask assistant | Question → tools → draft → numeric verifier → answer + chips |
| WF-8 | Review flagged data | Admin inspects → verify/reject → notify reporter |
| WF-9 | Forecast release | Evaluate → criteria → admin approval → publish |
| WF-10 | Data-subject request | Request (app/bot/email) → identity check → fulfil → log → confirm |
| WF-11 | Breach response | Detect → contain → assess → notify as required → post-mortem |
| WF-12 | Paid plan | Checkout → webhook → verify → entitlement → receipt |

### 6.2 Automation catalogue

| ID | Automation | Trigger | Action | Tier |
|---|---|---|---|---|
| AUT-01 | Source import | Schedule/manual | Fetch → stage → validate → load → log | S |
| AUT-02 | Report auto-validation | New report | Range, duplicate, outlier checks | P |
| AUT-03 | Reporter reminders | Per schedule | Telegram/push reminder | P |
| AUT-04 | Missed-report escalation | Deadline passed | Nudge → admin after second miss | P |
| AUT-05 | Freshness monitor | Hourly | Mark stale; alert admin below coverage threshold | S |
| AUT-06 | Alert evaluation | New verified observation/forecast | Match → dedupe → send | P |
| AUT-07 | Weekly digest | Weekly | Per-user summary | P |
| AUT-08 | Forecast pipeline | After refresh | Backtest → candidates → await gate | P |
| AUT-09 | Forecast backtest report | Weekly | Realised vs forecast | P |
| AUT-10 | Reporter score update | Daily | Update score (**advisory only**, AIG-11) | P |
| AUT-11 | Notification retry | Continuous | Backoff and cleanup | P |
| AUT-12 | Retention job | Scheduled | Purge/anonymise per §8.6 | P |
| AUT-13 | Assistant quality sampling | Daily | Flag ungrounded/thumbs-down answers | P |
| AUT-14 | Payment reconciliation | Daily | Compare Paystack records to entitlements | P |

**Automation rule:** automations may notify and queue. They may never publish unverified prices, release forecasts without the gate, or take adverse action against a person without human review.

---

## 7. Data Requirements (global-ready)

### 7.1 Layers and the two-brain data architecture
Raw (immutable files) → Staging → **Curated observations** (append-only) → Serving views → Model outputs.

**Two brains (ADR-021):** the **historical brain** trains the predictor on years of open market-level price data (WFP market price series on HDX, NBS, World Bank) — history is what makes prediction possible at all. The **fresh brain** (the reporter network) keeps the *latest* prices current, which lagged public data cannot do. The predictor combines both: fresh verified price for "now", learned seasonal/trend patterns for "next".

**Unit rule for modelling:** every row used by the forecast engine is normalised to a single consistent basis (price per kg where a validated conversion exists); mixed units silently poison models. `pricePerKgMinor` is populated at ingestion for backtest data.

### 7.2 Non-negotiable data rules
1. Never overwrite an original observation; corrections append a superseding row.
2. Store the **original** reported price and unit; `price_per_kg` is derived and nullable.
3. Money is stored as **integer minor units** (e.g., kobo) plus a currency code. No floating-point money.
4. Cross-unit comparison requires a validated unit conversion; otherwise return "not comparable" + reason.
5. Trust label is stored on the row.
6. Times stored in UTC; displayed in the market's timezone.

### 7.3 Global-ready entities (data, not code)
`Country` (code, name, default currency, default timezone, privacy regime reference) · `Currency` · `Locale/Language` · `Market` (belongs to Country) · `Commodity` · `Unit` (per commodity, optionally per country) · `Source`. Adding a country or commodity = inserting rows plus validating units, not changing code. Legal/privacy text, languages and formats are per-country configuration.

### 7.4 Trust labels
**Verified report · Official statistic · Estimated · Forecast · Unverified.** Definitions and visual treatment are in the Product Bible.

### 7.5 Source register (carried forward)
NBS Selected Food Price Watch · World Bank Real Time Food Prices · Humanitarian Data Exchange · **Own reporter network** · NiMet · NIHSA · CBN · dataset-discovery sites (discovery only). A source's presence in the register does not mean it is downloaded, validated or licensed.

> **Validated data finding (23 Oct 2026):** the ingested WFP Nigeria series (via HDX, CC BY-IGO) covers tomato/onion prices for **Borno, Yobe and Adamawa only — there is no WFP tomato/onion coverage for FCT/Abuja markets**. Abuja coverage at higher frequency therefore depends on the own reporter network (rung 1 of the vision ladder), which is precisely the wedge §1.1 describes.

### 7.6 Sprint data rule
If validated real data cannot be loaded in time, use a **clearly labelled demonstration dataset**. It must be marked as such in the UI, the README and the video, and must never be described as real market data.

---

## 8. Privacy Requirements (NDPA 2023)

> Principles below follow the structure of the NDPA and regulator guidance as I understand them. **[COUNSEL]** Confirm obligations, thresholds and deadlines (including any registration, audit-filing or DPO requirements) with a qualified Nigerian data-protection practitioner **before launch**. Items flagged **[VERIFY]** should be checked against the current Act and the regulator's directives.

### 8.1 Roles
| Role | Who |
|---|---|
| Data controller | The product's operating entity (must be named before launch) |
| Data processors (examples) | Hosting provider; Google (Gmail SMTP); Groq (LLM inference); Paystack; Cloudflare; Expo/EAS and push services; Telegram acts for its own users' accounts |
| Accountable person | A named privacy lead / DPO if required **[COUNSEL]** |

### 8.2 Privacy-by-design rules (binding)

| ID | Rule |
|---|---|
| PRV-01 | **Minimise.** Collect only what a feature needs. No feature ships without a row in the data inventory (§8.3). |
| PRV-02 | **Purpose limitation.** Each data element has a stated purpose; reuse for another purpose requires a new notice/basis. |
| PRV-03 | **Lawful basis recorded** per processing activity (consent, contract, legal obligation, legitimate interest, etc.) **[COUNSEL]**. |
| PRV-04 | **Transparency.** Plain-language privacy notice at onboarding, in-app, and via `/privacy` in the bot. English first; local-language versions only after native-speaker review. |
| PRV-05 | **No sensitive personal data** (health, religion, political opinions, biometric, etc.) is collected. If a reporter photo may capture people, guidance and a retention limit apply. |
| PRV-06 | **Children.** The service is for adults. Age confirmation at onboarding; do not knowingly collect data from under-18s. |
| PRV-07 | **Security.** Encryption in transit; least-privilege access; secrets in environment/secret store; audit log for admin actions; dependency scanning. |
| PRV-08 | **Processor control.** Maintain a processor register (purpose, data shared, location, terms reviewed). Data-processing terms in place before real user data flows. |
| PRV-09 | **Cross-border transfers.** Identify transfers (e.g., LLM provider, email provider, hosting region) and apply required safeguards **[COUNSEL]**. |
| PRV-10 | **Retention limits** per §8.6; automated enforcement (AUT-12). |
| PRV-11 | **DPIA** (privacy impact assessment) completed before launching reporter photos, payouts, or any new high-risk processing **[COUNSEL]**. |
| PRV-12 | **Breach readiness.** Runbook (WF-11); assume notification to the regulator is due within 72 hours of awareness where required, and notify affected people when risk is high **[VERIFY]**. |
| PRV-13 | **No secrets or personal data in logs** or error trackers beyond pseudonymous IDs. |
| PRV-14 | **Dev data hygiene.** Local SQLite and Cloudflare-tunnelled demos use synthetic or consenting-tester data only; no real personal data on a laptop-hosted demo. |

### 8.3 Data inventory (initial)

| Data element | Purpose | Basis (proposed) | Where | Processor(s) | Retention (proposed) |
|---|---|---|---|---|---|
| Email address | Sign-in OTP, service notices | Contract/consent | App DB | Hosting, Google (SMTP) | Life of account + short tail |
| OTP/verification tokens | Authentication | Contract | App DB | — | Minutes; purge on use/expiry |
| Telegram user ID, chat ID, username | Bot delivery, account link | Consent | App DB | Telegram | Until unlink/delete |
| Language, role label, preferred markets/commodities | Personalisation | Consent/contract | App DB | Hosting | Life of account |
| Consent records | Evidence of consent | Legal obligation/accountability | App DB | Hosting | Retain per policy **[COUNSEL]** |
| Reporter profile (name or alias, markets) | Operate reporting network | Contract/consent | App DB | Hosting | Life of engagement + defined tail |
| Reports (price, unit, market, time) | Core dataset | Legitimate interest/contract | App DB | Hosting | Observations retained; personal link removed on request |
| Reporter photos (optional) | Verification evidence | Consent | Object storage | Hosting | Short (e.g., 90 days) **[decide]** |
| Assistant conversations | Service, quality, safety | Consent/legitimate interest | App DB | Hosting; **Groq sees redacted prompt text only** | Short (e.g., 90 days) **[decide]** |
| Paystack customer/transaction references | Billing | Contract/legal obligation | App DB | Paystack | Per financial record rules **[COUNSEL]** |
| Paystack recipient codes (payouts) | Reporter payment | Contract | App DB | Paystack | While engaged |
| Device push tokens | Notifications | Consent | App DB | Expo/push providers | Until revoked |
| Access/audit logs | Security | Legitimate interest | Logs | Hosting | Short (e.g., 30–90 days) |

**Never stored by us:** card numbers, bank account numbers, government IDs.

### 8.4 Consent design
Separate, unbundled, logged (version, timestamp, scope, channel): (1) privacy notice acknowledgement, (2) service notifications, (3) marketing/promotional messages, (4) assistant processing notice, (5) optional photo evidence. Withdrawal is as easy as granting: `/privacy` in bot, Settings in app, and console support tooling.

### 8.5 Data-subject rights handling (WF-10)
Support access/export, correction, deletion, restriction/objection, and human review of automated decisions. Channels: app Settings, bot `/privacy`, support email. Identity verification before action. Target response within the statutory period; plan for **≤ 30 days** and confirm the legal limit **[VERIFY]**. All requests and outcomes are logged.

### 8.6 Retention and deletion
Defined per element in §8.3 and enforced by AUT-12. Account deletion removes personal identifiers; aggregated or de-identified observations may remain. Backups roll off on a defined schedule.

### 8.7 Cross-cutting engineering controls
Redaction layer in front of Groq (no email, Telegram ID, phone, name); Paystack webhook secret handling; Cloudflare Tunnel used only for dev/demo with secret-token checks; production secrets never in the repository; consent gate before optional processing; admin access with strong authentication.

---

## 9. AI Governance Requirements

> Aligned in spirit with widely used frameworks (e.g., OECD AI Principles, NIST AI Risk Management Framework). This is a design commitment, **not a claim of regulatory compliance**. Nigerian AI policy is evolving **[VERIFY]**.

### 9.1 Use-case register

| Use case | Risk | Permitted | Controls |
|---|---|---|---|
| Answer questions about prices/trends/methodology | Medium (wrong number could mislead a trade) | Yes | Tool-grounding, numeric verifier, source chips |
| Explain forecasts from structured model output | Medium | Yes | Explains only released forecasts; no new causes |
| Guide reporters through submission | Low | Yes | Static guidance + validated units |
| Suggest alert setup | Low | Yes | Proposal needs user confirmation |
| Generate prices/forecast numbers | **High** | **No** | Numbers only from data/forecast pipeline |
| Buy/sell/hold advice | **High** | **No** | Policy filter |
| Score or penalise reporters | **High** (affects livelihood) | Advisory only | Human decision (AIG-11) |
| Anything outside produce-price scope | — | Redirect | Scope filter |

### 9.2 Rules

| ID | Rule |
|---|---|
| AIG-01 | **Purpose limitation.** The assistant serves only the use cases in §9.1. |
| AIG-02 | **Accountability.** A named AI owner approves prompts, model changes and policy filters; admin approval gates forecasts. |
| AIG-03 | **Transparency.** Users are told they are talking to AI, what it can and cannot do, and that forecasts are estimates. |
| AIG-04 | **Grounding.** Every number, unit, date and trust label must come from a tool result in the same turn. Otherwise the assistant says it lacks data. |
| AIG-05 | **Verification.** A post-generation checker compares numbers in the draft to tool results; mismatch → regenerate once → deterministic template fallback. |
| AIG-06 | **Data minimisation to the provider.** No personal identifiers in prompts; context limited to what the question needs. Provider terms on retention and training reviewed **[VERIFY]**. |
| AIG-07 | **No directive financial advice.** Present evidence and uncertainty; decisions belong to the user. |
| AIG-08 | **Evaluation before release.** Golden question set (≥ 50 incl. adversarial, "no data", injection, unit-confusion cases) must pass thresholds; rerun on every prompt/model/tool change. |
| AIG-09 | **Model change control.** Model identifier pinned in configuration; changing it requires an eval pass and an ADR note. |
| AIG-10 | **Logging and audit.** Store pseudonymised prompts, tool calls, answers, verifier outcome; sampled human review (AUT-13); retention per §8.3. |
| AIG-11 | **No solely automated significant decisions about people.** Reporter trust scores may route reports to review but must not alone reject reports in bulk, suspend a reporter, or withhold pay. A human decides; reporters can contest. |
| AIG-12 | **Fairness and language.** No claim of Hausa/Pidgin (or other) support until native speakers have tested it; monitor answer quality by language; always offer a plain-data fallback. |
| AIG-13 | **Prompt-injection resistance.** User text, imported data and report notes are untrusted data; tools are read-only with fixed schemas; no free-form query execution. |
| AIG-14 | **Incident response.** Any invented number, data leak or policy bypass is a severity-1 incident: switch assistant to deterministic mode, preserve logs, fix, add a regression test, record outcome. |
| AIG-15 | **User redress.** Every answer has a feedback control and a route to a human. |
| AIG-16 | **Provider resilience.** Assistant must work in degraded mode when Groq is unavailable or rate-limited (free tier). |

### 9.3 Forecast governance
Forecasts are statistical outputs, not LLM outputs. Release requires: data sufficiency, baseline beaten on held-out data, documented limitations, admin approval, and continuous monitoring with automatic suspension.

### 9.4 Acceptance thresholds (initial; calibrate after the first run)
Numeric hallucinations on golden set: **0**. Correct refusals on adversarial buy/sell prompts: **100%**. "No data" handled correctly: **100%**. Injection tests passed: **100%**.

---

## 10. Non-Functional Requirements

| Area | Requirement |
|---|---|
| Performance | Cached price views < 3 s on a 3G-class connection; small payloads; text-first UI |
| Offline | Expo app shows last-seen data with timestamp and queues reports **[P]** |
| Reliability | Imports and notifications idempotent and retried; missing prices never fabricated |
| Security | See PRV-07; rate limiting on auth, bot, assistant and payment endpoints; webhook verification (Telegram secret token, Paystack signature) |
| Observability | Structured logs with correlation IDs; metrics for freshness, imports, assistant grounding, delivery; cost counters for Groq, email and Paystack |
| Portability | Every external provider behind an adapter (email, LLM, payments, push, channel) so free-tier → paid or country-specific swaps are configuration changes (ADR-016) |
| Reproducibility | One-command local run with seed data and mock providers; documented env variables (names only) |
| Accessibility | Large touch targets, plain language, icon + text labels |
| Cost control | Quotas and caching for the assistant; daily cost report; free-tier limits tracked **[VERIFY each]** |

---

## 11. Success Metrics

| Layer | Metric | Initial target |
|---|---|---|
| North star | Weekly Active Decision-Makers (users viewing a price/comparison/forecast who return within 7 days) | Baseline in pilot |
| Data health | Freshness (% pairs with observation ≤ 7 days) | ≥ 80% pilot |
| Data health | Verified ratio | ≥ 90% |
| Coverage | Active reporting markets | ≥ 5 pilot |
| Assistant | Grounded numeric answers; correct refusals | 100% / 100% |
| Forecast | Backtest: beats naive/seasonal-naive baselines on held-out data (rolling origin) | Gate before any live release; Δ vs. naive MAPE > 0 on pilot pairs |
| Forecast | Beats baseline on held-out data before release | Gate |
| Privacy | DSR completed within SLA; zero PII in provider prompts | 100% |
| Reliability | Bot/assistant availability during demo window | Tracked |

---

## 12. Risks

| Risk | L | I | Mitigation |
|---|---|---|---|
| **24-hour sprint is overscoped by stack breadth** | High | High | Single-client rule; cut line in plan; honest "roadmap" labelling |
| Insufficient high-frequency data for forecasts | High | High | Reporter network; gate; tracking-first |
| Unit ambiguity corrupts comparison | High | High | Unit registry; block unvalidated comparisons |
| Gmail SMTP limits/blocks; deliverability | Medium | Medium | Provider chain + dev console transport; move to a transactional provider before pilot; **never rotate multiple free accounts to dodge quotas** (account suspension and terms risk) |
| SQLite ↔ PostgreSQL divergence | Medium | Medium | Schema constraints in ADR-003; CI against both |
| Groq free-tier limits/outage | Medium | Medium | Cache; deterministic fallback |
| Hallucinated number | Medium | Very high | AIG-04/05/08/14 |
| Quick-tunnel URLs change; laptop-hosted demo fails | Medium | Medium | Pre-recorded fallback; long polling for bot; test before recording |
| NDPA non-compliance at pilot | Medium | High | §8; counsel review; DPIA before photos/payouts |
| Paystack scope creep | Medium | Medium | Defer beyond sprint; test mode first |
| Telegram reach < WhatsApp among traders | Medium | Medium | Channel abstraction; validate in pilot |
| Over-claiming to investors | Medium | High | Evidence-only pitch rule (§1.1) |

---

## 13. Capstone Compliance Annex (kept separate on purpose)

### 13.1 Validity gate — all five must be YES

| # | Check | Evidence |
|---|---|---|
| 1 | Registered Fellow; one submission rule respected | Registration confirmation |
| 2 | **Assigned brief and track confirmed; deliverable matches** | **Brief reference — pending (user will supply)** |
| 3 | Working deliverable with proof | Live link/APK/Expo build, tests, screenshots |
| 4 | 2–3 minute demo video; the Fellow explains their own work | Video link |
| 5 | Original work; datasets, libraries and AI assistance disclosed | README credits + AI-assistance disclosure |

### 13.2 Honest rules
- Describe only what runs. Label planned features as roadmap.
- Disclose AI assistance in the README as the programme requires, and be prepared to explain every component yourself on camera.
- Do not pre-assign a score; collect evidence per criterion and have someone unfamiliar attempt the setup.

### 13.3 Brief-mapping table (to complete when the brief arrives)

| Brief requirement | PRD ID | Tier | Evidence | Status |
|---|---|---|---|---|
| *(pending)* | | | | |

---

## 14. Open Questions

1. What does the assigned brief require, and in what form? (Decides the single client and the video focus.)
2. Is real tomato/onion data downloadable and validated in time, or will the sprint use a labelled demonstration dataset?
3. Is the PWA requirement dropped, or should the Next.js app also be installable (ADR-007)?
4. Which legal entity will be the data controller for pilot and who is the named privacy lead?
5. What are the Groq model and rate limits available to you now? **[VERIFY]**
6. Which Gmail account(s) are available for OTP, and are app passwords enabled? (One account only; see risk table.)
7. Reporter incentive model and Paystack payout approach after the capstone.
8. Distribution plan: Expo Go/internal testing, Play Store, App Store (Apple developer programme cost) **[VERIFY]**.
