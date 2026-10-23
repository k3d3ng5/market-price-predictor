# Model and Strategy — Sealed Notes

**CONFIDENTIAL — this is the recipe. Do not publish, present or share.**

This document records the forecasting strategy and implementation for Tomionce v0.1.0. The public
product describes only the behaviour: benchmark-first testing, gated ranges and honest refusals.

---

## 1. Product hypothesis

Tomato and onion prices in Nigeria have recurring seasonal structure, but the data is noisy,
sparse and irregular. A useful forecast must therefore clear two bars:

1. **It must beat a do-nothing benchmark.** A complex model that cannot beat “next price = last
   price” is not adding value.
2. **It must be honest about uncertainty.** The output is a range with a reliability note, not a
   promise.

The strategy is deliberately baseline-first: simple benchmarks are the gatekeepers, and the
challenger must earn promotion on held-out history.

---

## 2. Series construction

`apps/api/src/server.ts` → `perKgSeries(commodityId, marketId)`:

- Reads `Observation` rows where `commodityId`, `marketId`, `isCurrent = true`.
- Orders ascending by `observedAt`.
- Converts each row to per-kg with `convertToPerKg`.
- Skips rows whose unit conversion is not validated. No imputation, no averaging away evidence.
- Produces `SeriesPoint[]` with:
  - `observedAt` — ISO date string (`YYYY-MM-DD`);
  - `pricePerKgMinor` — integer kobo per kg.

Tomato and onion series are constructed separately. A market pair is `(commodityId, marketId)`.

---

## 3. Benchmarks

`packages/domain/src/forecast.ts` → `baselineModels(period = 52)`:

| Model | Rule |
| --- | --- |
| `naive` | Every step equals the last observed value |
| `seasonal_naive_52` | Step `h` equals the value `period` steps back, with a fallback to the last value when the index is negative |
| `moving_average_8` | Every step equals the mean of the trailing 8 observations (or fewer near the start) |

The best baseline by MAPE is the benchmark the challenger must beat.

---

## 4. Candidate model

`candidateModels(period = 52)` → `fourier_trend_2h_52`:

- Linear trend plus a Fourier seasonal term with two harmonics.
- Feature vector at time `t`:
  ```
  [1, t, cos(2πt/P), sin(2πt/P), cos(4πt/P), sin(4πt/P)]
  ```
  where `P = period` (currently 52).
- Coefficients fitted by ordinary least squares using the normal equations.
- Solved with Gaussian elimination and partial pivoting.
- If the system is singular, fall back to the naive forecast (honest fallback, no crash).
- Forecast values are rounded and floored at zero.

There is an extension hook, `registerCandidateModels`, for future candidates (SARIMA-class,
gradient boosting, etc.). A registered model is still subject to the same backtest and gate.

---

## 5. Rolling-origin backtest

`rollingOriginBacktest(series, { horizon, period = 52, minTrain = max(12, period) })`:

For each origin from `minTrain` to `series.length - horizon`:

1. Train on `series[0..origin]`.
2. Predict the next `horizon` steps.
3. Score against the actual observations.
4. Slide forward one step.

Outputs per model:

- `mapePercent` — mean absolute percentage error, excluding actual values of zero, rounded to
  1 decimal.
- `maeKobo` — mean absolute error in kobo per kg.
- `n` — number of scored predictions.
- `residualStdKobo` — standard deviation of residuals (sample standard deviation, rounded).

The result also includes:

- `seriesLength`;
- `horizon`;
- `origins`;
- `byModel`;
- `bestBaseline`;
- `bestModel`;
- `beatsBaseline` (strictly lower MAPE than the best baseline).

The backtest is deterministic: the same series, horizon and parameters produce the same metrics.

---

## 6. The gate

### Eligibility (`packages/domain/src/eligibility.ts`)

A pair is eligible for candidate evaluation only when:

- at least **24** historical points exist;
- the latest observation is no more than **14 days** old;
- there are observations (`daysSinceLastObservation !== null`).

Otherwise the API returns a reason code and a human-readable detail.

### Publication gate (`gatedForecast`)

A range is publishable only when:

- `backtest.origins >= 5`;
- `backtest.seriesLength >= 30`;
- a candidate exists;
- the candidate's MAPE is strictly lower than the best baseline MAPE.

Otherwise:

- `insufficient_backtest` → “Not available yet — insufficient backtest evidence.”
- `does_not_beat_baseline` → “Not available yet — no model beats the naive baseline on held-out
  data for this pair.”

### Range construction

If publishable:

- `central = candidate.predict(series, 1)[0]`
- `spread = max(2 × residualStdKobo, round(central × 0.02))`
- `low = max(0, central - spread)`
- `high = central + spread`

The UI shows the range and a reliability line with the backtest MAPE and origin count.

### API guard

The `/v1/forecast/backtest` endpoint returns HTTP 409 with
`error: "insufficient_history"` when the per-kg series has fewer than **30** points. This is
separate from the 24-point eligibility check.

---

## 7. Why this design

- **Baseline-first** prevents a fancy model from being published on faith.
- **Rolling origins** test across many starting points instead of one lucky split.
- **Ranges** communicate uncertainty honestly.
- **Integer minor units** avoid floating-point money.
- **Deterministic backtests** make decisions reproducible.
- **Honest fallbacks** (naive when the linear system is singular, skip invalid units) avoid
  fabricated outputs.
- **Gate, not a warning** — an unproven forecast is not published at all.

---

## 8. Current evidence at handover

Example: **Bade (Gashua) (YO)**, tomato, horizon 4.

- Series length: 98 observations.
- Rolling origins: 43.
- Candidate MAPE: **29.1%**.
- Best baseline (naive) MAPE: **16.1%**.
- Result: **not published** (`does_not_beat_baseline`).

This is the gate working as designed. The blocked screen is a product feature, not a defect.

Other pairs may publish if the candidate wins on their history. The UI always shows the evidence.

---

## 9. Known model debt

### 9.1 Seasonal period mismatch (highest priority)

The engine uses `period = 52`. That is a weekly-seasonality assumption. The WFP Nigeria series is
**monthly-ish**, so:

- `seasonal_naive_52` is a 52-month lookback, not an annual seasonal repeat;
- the Fourier seasonal terms have a 52-month cycle, not a 12-month cycle;
- the candidate's seasonal structure is therefore mis-specified for the current data.

The gate blocks the candidate where it loses, so the public product remains honest. But the next
model version must:

1. Re-evaluate the period against the actual observation cadence (likely **12** for monthly data).
2. Re-run the rolling-origin backtest for both 12 and 52.
3. Keep the period only if it beats the benchmarks on held-out data.
4. Update the public copy only after the evidence changes.

Do not claim “annual seasonality” in public until this is resolved and re-backtested.

### 9.2 Irregular spacing

The series is treated as ordered steps, not calendar time. Missing months and irregular gaps are
ignored. A future version should model the actual time index (month) or use a state-space model
that handles missing periods.

### 9.3 Structural breaks

Nigerian food prices can move sharply on fuel, transport, security, FX and policy shocks. The
current model has no exogenous variables. It should not be presented as a causal model.

### 9.4 Price type

WFP rows are `retail`; demo rows are `wholesale`. The UI labels demo data, but `priceType` is not
shown as a separate field. If future sources mix retail and wholesale, the series must split or
filter by price type before modelling.

### 9.5 Short and stale series

Many pairs have 25–36 observations and a latest record older than 14 days. Eligibility and the
30-point backtest guard correctly stop them. This limits forecast coverage, but protects quality.

### 9.6 Overfitting risk

The candidate has 6 parameters and a modest history. The rolling-origin protocol reduces, but
does not eliminate, overfitting risk. Any new candidate must be judged on the same protocol.

### 9.7 No prediction intervals from a probabilistic model

The range is a residual-based approximation (`±2σ`, with a 2% floor), not a calibrated predictive
interval. It is honest but simple. A future version should calibrate coverage explicitly.

---

## 10. Upgrade path

1. **Fix the period and re-backtest** (12 vs 52), with a holdout that respects calendar months.
2. **Add time-aware features** — month, lagged prices, rolling volatility, fuel/transport proxies
   where a reliable source exists.
3. **Evaluate pooled/hierarchical models** across markets of the same commodity, with market-level
   effects, instead of independent small-series fits.
4. **Calibrate intervals** and report empirical coverage, not just MAPE.
5. **Persist gate decisions** (`ForecastGate`) with the evidence and a human decision field.
6. **Add monitoring** for data freshness, backtest drift and blocked-rate changes.
7. **Never bypass the gate.** A new model is promoted only by evidence.

---

## 11. Publication rules for the model

Public material may say:

- forecasts are tested against simple benchmarks on held-out history;
- a range is published only when the challenger wins;
- otherwise the product says “not published” and explains why;
- forecasts are ranges, not promises;
- the engine is proprietary.

Public material must not say:

- model names, formulas, feature lists or parameter values;
- the exact gate thresholds beyond user-facing copy;
- the backtest implementation;
- internal file names or code structure;
- that the model is “accurate” without the evidence attached.

---

## 12. Decision references

- ADR-013 — forecast gate
- ADR-018 — integer money and validated units
- ADR-021 — forecast-first positioning and two-brain architecture
- FR-F1..F7 — eligibility, backtest, publication gate, display copy
- AUT-08 — persist gate decisions (backlog)
