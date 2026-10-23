# Tomionce — Project Handover

**Document type:** Formal project handover and acceptance  
**Project:** Tomionce (internal code name: ProducePrice)  
**Version handed over:** 0.1.0  
**Handover date:** 23 October 2026  
**From:** Engineering consultant / build partner  
**To:** Founder and owner of Tomionce

---

## 1. Handover statement

Tomionce v0.1.0 is delivered to the Founder as a working, verified product demonstration and a
closed development cycle.

The product records tomato and onion prices with their source, unit and date; normalises them
for fair comparison; publishes a forecast only when it has passed an evidence test; and exposes
the source, licence and trust status behind every number.

The Founder owns the product. The engineering consultant remains available on call for future
maintenance, updates and upgrades, as described in section 9.

---

## 2. Delivered scope

| Area | Delivered |
| --- | --- |
| **Product** | Tomionce brand and product experience |
| **Prices** | Latest recorded price, unit, per-kg value, source, date, trust label, freshness, change and recent history |
| **Compare** | Two-market, per-kilogram comparison with date-gap warnings and honest blocks |
| **Forecast** | Eligibility check, backtest evidence, gated range or an explicit refusal |
| **Sources** | Dataset, licence, coverage counts, date range, freshness window and trust legend |
| **Beginner guide** | In-app four-step guide, with a single controlled copy source |
| **Install / offline** | Installable web app, offline fallback, cached pages and API responses |
| **Data** | WFP Nigeria Food Prices ingestion, labelled demonstration data, append-only observations |
| **Documentation** | Public user guide, founder demo guide, README, changelog, roadmap, notice, this handover |
| **Internal documentation** | Engineering handover, operations runbook, model and strategy notes, PRD, implementation plan, ADR log |

---

## 3. Verification at handover

### Build and type safety

- Type checking passes with no errors.
- Production build completes successfully.
- Production server serves the app and the data service correctly.

### Product verification

The following were checked in a real browser against the production build:

- Prices screen with a real market, unit, per-kg value, source, date, stale badge and change.
- Forecast screen with the history end date, staleness warning, backtest table and a blocked
  forecast where the challenger lost to the benchmark.
- Compare screen with two markets, per-kg values, date-gap handling and an honest verdict.
- Sources screen with real counts, licences, coverage dates and trust legend.
- Beginner guide opening on first visit, caching and dismissal.
- Per-route page titles.
- Installable manifest and generated icons.
- Installable app registration, active control and populated offline caches.
- No browser console errors observed during the verification pass.

### Data at handover

| Item | Value |
| --- | --- |
| Real observations | **4,182** |
| Real markets | **51** |
| Demonstration observations | **312** |
| Demonstration markets | **2** (Wuse, Garki) |
| Commodities | Tomato and onion, modelled separately |
| Latest real observation | **15 October 2026** |
| Latest demonstration observation | **19 October 2026** |
| Freshness window | **7 days** |
| Forecast eligibility window | **14 days** |

The latest WFP observation is older than the 7-day freshness window, so real prices correctly
display as **stale** with their observation date.

---

## 4. Ownership

The Founder owns:

- the Tomionce name and brand;
- the product concept, requirements and design;
- the user experience and public documentation;
- the forecasting strategy, model and execution engine;
- the source code and internal engineering documentation;
- the product roadmap and commercial direction.

The Founder does **not** own the underlying third-party data. The WFP Nigeria Food Prices dataset
remains subject to its publisher's licence (CC BY-IGO). Demonstration data is synthetic and
labelled as such. See [`NOTICE.md`](NOTICE.md).

The source repository is **private**. Internal engineering, operations and model notes are
confidential and are not part of the public product documentation.

---

## 5. Sealed components

The following are proprietary and are **not** described in public documentation:

- the internal forecast engine and its implementation;
- the model family, feature construction and parameter choices;
- the backtest design and internal gate thresholds beyond what the user-facing product discloses;
- the data pipeline and ingestion implementation;
- the system architecture, technology stack and deployment configuration;
- the internal ranking and default-selection logic;
- the internal engineering, operations and model notes in `docs/internal/`.

The product may disclose **outcomes** — a published range, a blocked forecast, a backtest
scorecard, coverage counts — without disclosing the recipe that produced them.

---

## 6. Operating status at handover

The local demonstration build is operational:

- web application: **http://localhost:5100**
- data service: **http://localhost:4000**

Use the web address in the browser. The data service is internal to the demonstration.

Operational instructions are in `docs/internal/OPERATIONS_RUNBOOK.md`.

---

## 7. Known limitations

These are recorded honestly. They do not invalidate the demonstration; they define the next
version.

1. **The source is periodic, not live.** WFP reports roughly monthly. The latest record at
   handover is 15 October 2026. The app labels it stale under the 7-day rule.
2. **Many pairs fail the forecast gate.** This is expected. The gate is designed to refuse when
   the evidence is weak. A blocked forecast is a product feature, not a defect.
3. **The seasonal parameter needs review.** The current engine was built with a 52-step seasonal
   assumption, while the source is roughly monthly. The gate correctly blocks the current
   challenger where it loses, but the next model version should re-evaluate the season length and
   re-backtest before any claim of seasonal skill is made.
4. **No admin or authentication layer.** v0.1.0 is a public-facing demonstration. There is no
   admin console, user account, or human approval workflow in the shipped UI.
5. **Local deployment.** The demonstration runs on the local machine. Production hosting,
   monitoring, backups and a managed database are next-version work.
6. **No automated CI pipeline.** Build and type checks were run manually for this handover.
7. **Browser automation limitation.** During verification, screenshot and click automation timed
   out on the desktop; DOM evaluation and accessibility snapshots were used instead. This is a
   tooling limitation, not a product defect.
8. **Forecast gate decisions are not yet persisted.** The gate is computed per request. Storing
   decisions and their evidence is a v0.2 priority.

---

## 8. Next-version backlog

High-level themes only; no committed dates.

### v0.2 — Evidence and operations

- Persist forecast gate decisions and their backtest evidence.
- Re-evaluate the seasonal assumption against the monthly source and re-backtest.
- Improve coverage and freshness reporting.
- Add operational monitoring, backups and a repeatable deployment path.
- Strengthen the data-review workflow for future contributed prices.

### v0.3 — Reach and partnerships

- Alerting and messaging channel for price changes and newly published forecasts.
- Partner and cooperative views.
- Additional verified sources and broader market coverage.
- Regional expansion assessment.

### v1.0 — Production service

- Authentication and role-based administration.
- Service-level reliability, audit trails and incident response.
- Multilingual user experience.
- Formal partner API and data-governance programme.

---

## 9. Consultant availability

The engineering consultant remains available to the Founder on call for:

- maintenance and bug fixes;
- version upgrades and new features;
- model review and re-backtesting;
- data pipeline and coverage expansion;
- documentation and training;
- technical due diligence and partner reviews.

Engagement is on request. Scope, priority and any commercial terms are agreed per engagement.
There is no ongoing retainer unless one is separately agreed.

The consultant will continue to respect the confidentiality of the sealed components and will
not publish the recipe without the Founder's written permission.

---

## 10. Handover acceptance

By accepting this handover, the Founder confirms that:

- the delivered scope in section 2 has been received;
- the verification evidence in section 3 has been reviewed;
- ownership and sealed components in sections 4 and 5 are understood;
- the known limitations in section 7 are accepted for v0.1.0;
- the next cycle begins only when the Founder opens a new version.

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| Founder / Owner |  |  |  |
| Engineering consultant |  |  |  |

---

## 11. Closing note

Tomionce v0.1.0 is closed. The product is handed over in a working, documented and verified
state. The next change should be a deliberate version decision, not an accidental drift.

> **The model is private. The evidence is public. That is the standard.**
