# Changelog

All notable product changes are recorded here. This changelog describes **what the product
does**, not how the engine is implemented.

---

## [0.1.0] — 2026-10-23

**Status:** closed for this development cycle.

### Added

- **Prices** — latest recorded tomato or onion price with original unit, per-kilogram value,
  source, observation date, trust label, freshness badge, change from the previous observation
  and recent history.
- **Compare** — two-market comparison on a per-kilogram basis, with date-gap warnings and an
  explicit block when a validated conversion is unavailable.
- **Forecast** — eligibility check, backtest evidence, a range only when the challenger beats
  the benchmark, or an explicit **not published** state with the reason.
- **Sources** — dataset, licence, coverage counts, observation date range, freshness window and
  trust-label legend.
- **Beginner guide** — four-step in-app guide with a single controlled copy source.
- **Install / offline** — installable web app, offline fallback, cached pages and API responses.
- **Product identity** — Tomionce brand, header, navigation, icons and installable manifest.

### Data

- Ingested the WFP Nigeria Food Prices series from HDX under its CC BY-IGO licence.
- **4,182 real observations across 51 markets**, covering tomato and onion separately.
- **312 demonstration observations across two pilot markets**, clearly labelled as synthetic.
- Latest real observation: **15 October 2026**.
- Latest demonstration observation: **19 October 2026**.
- Freshness window: **7 days**.
- Forecast eligibility window: **14 days**.

### Trust and honesty

- Missing prices remain `null`; they are never shown as `₦0` or as “live”.
- Every price carries its unit, source, observation date and trust label.
- Per-kilogram values exist only when a validated conversion applies.
- Demonstration data is labelled on the price card, market picker, comparison and sources page.
- Forecast publication is gated against simple do-nothing benchmarks on held-out history.
- Stale data is labelled with its date; the product does not claim live freshness.

### Verified

- Type checking passes.
- Production build passes.
- Prices, Compare, Forecast and Sources screens verified in a browser against the production
  build.
- Per-route titles, manifest, icons, service-worker registration and caches verified.
- No console errors observed during the verification pass.

### Known limitations

- The real source is periodic and may lag by days or weeks; the current latest real record is
  stale under the 7-day rule.
- Many commodity × market pairs fail the forecast gate. This is expected behaviour.
- The seasonal assumption in the current model needs re-evaluation against the monthly source
  before any seasonal-skill claim is made.
- No admin, authentication or human review console in the shipped UI.
- Local demonstration deployment only; production hosting and monitoring are future work.
- Forecast gate decisions are computed per request and are not yet persisted.
- No automated CI pipeline yet.

### Documentation

- Public README, user guide, founder demo guide, formal handover, roadmap and notice.
- Internal engineering, operations and model notes are held privately.

---

## Version policy

- **Patch** — corrections, copy fixes, documentation updates.
- **Minor** — new user-facing capability or coverage expansion.
- **Major** — architectural or product-model change that alters what Tomionce promises.

The next version begins only after the Founder opens a new cycle.
