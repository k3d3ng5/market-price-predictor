/**
 * ProducePrice forecast engine (ADR-021) — the historical brain.
 *
 * Design rules:
 * - Baselines first (naive, seasonal-naive, moving average): a candidate model is only
 *   promoted if it beats these on rolling-origin held-out data (FR-F2/F3, ADR-013).
 * - Backtests are deterministic and reproducible (T-16: rerun → identical metrics).
 * - Works on INTEGER minor units per kg (kobo) — no float money (ADR-018).
 * - Forecasts are ranges, never promises (FR-F5); accuracy is reported, never hidden.
 */

export interface SeriesPoint {
  /** ISO date (UTC) of the observation period. */
  observedAt: string;
  /** Integer kobo per kg — pre-normalised at ingestion (§7.1 modelling rule). */
  pricePerKgMinor: number;
}

export interface ModelSpec {
  name: string;
  predict: (history: SeriesPoint[], horizon: number) => number[];
}

export interface BacktestModelResult {
  model: string;
  /** Lower is better. Skips zero-price points (corrupt data). */
  mapePercent: number;
  /** Mean absolute error, kobo per kg. */
  maeKobo: number;
  /** Number of (origin, step) predictions evaluated. */
  n: number;
  /** Std-dev of residuals across all backtest predictions — seeds the range. */
  residualStdKobo: number;
}

export interface BacktestResult {
  seriesLength: number;
  horizon: number;
  origins: number;
  byModel: BacktestModelResult[];
  bestBaseline: string;
  bestModel?: string;
  beatsBaseline: boolean;
}

/* --------------------------------- models --------------------------------- */

/** Next steps = last seen value. The benchmark everything must beat. */
export function naiveForecast(history: SeriesPoint[], horizon: number): number[] {
  const last = history[history.length - 1]!.pricePerKgMinor;
  return Array.from({ length: horizon }, () => last);
}

/** Next steps = the value `period` steps back (weekly seasonality: period = 52). */
export function seasonalNaiveForecast(
  history: SeriesPoint[],
  horizon: number,
  period: number,
): number[] {
  const n = history.length;
  const out: number[] = [];
  for (let h = 1; h <= horizon; h++) {
    const idx = n - period + (h - 1) % period;
    out.push(idx >= 0 ? history[idx]!.pricePerKgMinor : history[n - 1]!.pricePerKgMinor);
  }
  return out;
}

/** Next steps = mean of the trailing `window` observations. */
export function movingAverageForecast(
  history: SeriesPoint[],
  horizon: number,
  window: number,
): number[] {
  const w = Math.min(window, history.length);
  const tail = history.slice(-w);
  const mean =
    tail.reduce((s, p) => s + p.pricePerKgMinor, 0) / (tail.length || 1);
  const rounded = Math.round(mean);
  return Array.from({ length: horizon }, () => rounded);
}

/** Registry so backtest winners can be re-fit by name (no hidden state). */
export function baselineModels(period: number = 52): ModelSpec[] {
  return [
    { name: "naive", predict: (h, hz) => naiveForecast(h, hz) },
    {
      name: `seasonal_naive_${period}`,
      predict: (h, hz) => seasonalNaiveForecast(h, hz, period),
    },
    {
      name: "moving_average_8",
      predict: (h, hz) => movingAverageForecast(h, hz, 8),
    },
  ];
}

/**
 * Candidate model: Fourier seasonal regression + linear trend (2 harmonics).
 * Fits price ~ [1, t, cos/sin(2πt/P), cos/sin(4πt/P)] by least squares and
 * extrapolates. A classical, explainable, deterministic seasonal model —
 * strong on tomato/onion-style yearly seasonality. Falls back to naive if the
 * normal equations are singular (e.g., collinear features on short series).
 */
export function fourierTrendForecast(
  history: SeriesPoint[],
  horizon: number,
  period: number = 52,
): number[] {
  const n = history.length;
  const features = (w: number): number[] => [
    1,
    w,
    Math.cos((2 * Math.PI * w) / period),
    Math.sin((2 * Math.PI * w) / period),
    Math.cos((4 * Math.PI * w) / period),
    Math.sin((4 * Math.PI * w) / period),
  ];
  const k = 6;
  const xtX: number[][] = Array.from({ length: k }, () => Array(k).fill(0));
  const xty: number[] = Array(k).fill(0);
  for (let t = 0; t < n; t++) {
    const x = features(t);
    const y = history[t]!.pricePerKgMinor;
    for (let i = 0; i < k; i++) {
      xty[i]! += x[i]! * y;
      for (let j = 0; j < k; j++) xtX[i]![j] += x[i]! * x[j]!;
    }
  }
  const beta = solveLinearSystem(xtX, xty);
  if (!beta) return naiveForecast(history, horizon); // honest fallback
  const out: number[] = [];
  for (let h = 1; h <= horizon; h++) {
    const x = features(n + h - 1);
    const value = x.reduce((s, xi, i) => s + xi * beta[i]!, 0);
    out.push(Math.max(0, Math.round(value)));
  }
  return out;
}

/** Gaussian elimination with partial pivoting; null when singular. */
function solveLinearSystem(a: number[][], b: number[]): number[] | null {
  const n = b.length;
  const m = a.map((row, i) => [...row, b[i]!]);
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(m[r]![col]) > Math.abs(m[pivot]![col])) pivot = r;
    }
    if (Math.abs(m[pivot]![col]) < 1e-9) return null;
    [m[col], m[pivot]] = [m[pivot]!, m[col]!];
    for (let r = col + 1; r < n; r++) {
      const f = m[r]![col] / m[col]![col];
      for (let c = col; c <= n; c++) m[r]![c] -= f * m[col]![c];
    }
  }
  const x = Array(n).fill(0) as number[];
  for (let r = n - 1; r >= 0; r--) {
    let s = m[r]![n];
    for (let c = r + 1; c < n; c++) s -= m[r]![c] * x[c]!;
    x[r] = s / m[r]![r];
  }
  return x;
}

/** Default candidate set evaluated against baselines in every backtest. */
export function candidateModels(period: number = 52): ModelSpec[] {
  return [
    {
      name: `fourier_trend_2h_${period}`,
      predict: (h, hz) => fourierTrendForecast(h, hz, period),
    },
  ];
}

export function modelByName(models: ModelSpec[], name: string): ModelSpec | undefined {
  return models.find((m) => m.name === name);
}

/* -------------------------------- backtest -------------------------------- */

function mape(actual: number[], predicted: number[]): number {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === 0) continue;
    sum += Math.abs((actual[i]! - predicted[i]!) / actual[i]!);
    count++;
  }
  return count === 0 ? Number.POSITIVE_INFINITY : (sum / count) * 100;
}

function std(values: number[]): number {
  if (values.length <= 1) return 0;
  const mean = values.reduce((s, v) => s + v, 0) / values.length;
  const variance =
    values.reduce((s, v) => s + (v - mean) ** 2, 0) / (values.length - 1);
  return Math.round(Math.sqrt(variance));
}

/**
 * Rolling-origin evaluation: train on history[..origin], predict the next
 * `horizon` steps, score against actually-observed values, slide forward one step.
 * Deterministic by construction (T-16).
 */
export function rollingOriginBacktest(
  series: SeriesPoint[],
  opts: {
    horizon: number;
    minTrain?: number;
    period?: number;
    extraModels?: ModelSpec[];
  },
): BacktestResult {
  const period = opts.period ?? 52;
  const horizon = opts.horizon;
  const minTrain = opts.minTrain ?? Math.max(12, period);
  const models = [
    ...baselineModels(period),
    ...(opts.extraModels ?? candidateModels(period)),
  ];

  const metrics = new Map<string, { actual: number[]; predicted: number[] }>();
  for (const m of models) metrics.set(m.name, { actual: [], predicted: [] });

  let origins = 0;
  for (let origin = minTrain; origin + horizon <= series.length; origin++) {
    const train = series.slice(0, origin);
    const truth = series.slice(origin, origin + horizon).map((p) => p.pricePerKgMinor);
    origins++;
    for (const m of models) {
      const preds = m.predict(train, horizon);
      const slot = metrics.get(m.name)!;
      for (let i = 0; i < horizon; i++) {
        slot.actual.push(truth[i]!);
        slot.predicted.push(preds[i] ?? preds[preds.length - 1]!);
      }
    }
  }

  const byModel: BacktestModelResult[] = models.map((m) => {
    const slot = metrics.get(m.name)!;
    const residuals = slot.predicted.map((p, i) => slot.actual[i]! - p);
    return {
      model: m.name,
      mapePercent: Math.round(mape(slot.actual, slot.predicted) * 10) / 10,
      maeKobo:
        slot.actual.length === 0
          ? 0
          : Math.round(
              slot.actual.reduce((s, a, i) => s + Math.abs(a - slot.predicted[i]!), 0) /
                slot.actual.length,
            ),
      n: slot.actual.length,
      residualStdKobo: std(residuals),
    };
  });

  const baselineNames = new Set(baselineModels(period).map((m) => m.name));
  const baselines = byModel.filter((r) => baselineNames.has(r.model));
  const candidates = byModel.filter((r) => !baselineNames.has(r.model));

  const bestBaseline = baselines.reduce((best, r) =>
    r.mapePercent < best.mapePercent ? r : best,
  );
  const bestModel = candidates.length
    ? candidates.reduce((best, r) => (r.mapePercent < best.mapePercent ? r : best))
    : undefined;

  return {
    seriesLength: series.length,
    horizon,
    origins,
    byModel,
    bestBaseline: bestBaseline.model,
    bestModel: bestModel?.model,
    beatsBaseline:
      bestModel !== undefined && bestModel.mapePercent < bestBaseline.mapePercent,
  };
}

/* ---------------------------- gated forecast ------------------------------ */

export interface GatedForecast {
  publishable: boolean;
  reasonCode?: "does_not_beat_baseline" | "insufficient_backtest";
  model?: string;
  centralPerKgMinor?: number;
  lowPerKgMinor?: number;
  highPerKgMinor?: number;
  /** Copy for the reliability badge — accuracy is shown, never hidden. */
  reliability?: string;
}

/**
 * The winning model produces the live forecast ONLY IF the backtest proved it
 * beats the best baseline (ADR-013 gate applied at data level). Output is a
 * range: ±2 residual std-devs (at least 2% of the price) around the central value.
 */
export function gatedForecast(
  series: SeriesPoint[],
  backtest: BacktestResult,
): GatedForecast {
  if (backtest.origins < 5 || backtest.seriesLength < 30) {
    return { publishable: false, reasonCode: "insufficient_backtest" };
  }
  if (!backtest.beatsBaseline || backtest.bestModel === undefined) {
    return { publishable: false, reasonCode: "does_not_beat_baseline" };
  }
  const all = [...baselineModels(52), ...candidateModels(52), ...extraModelRegistry()];
  const spec = modelByName(all, backtest.bestModel);
  if (!spec) return { publishable: false, reasonCode: "insufficient_backtest" };

  const central = spec.predict(series, 1)[0]!;
  const result = backtest.byModel.find((r) => r.model === backtest.bestModel)!;
  const spread = Math.max(result.residualStdKobo * 2, Math.round(central * 0.02));
  return {
    publishable: true,
    model: spec.name,
    centralPerKgMinor: central,
    lowPerKgMinor: Math.max(0, central - spread),
    highPerKgMinor: central + spread,
    reliability: `Backtest MAPE ${result.mapePercent}% over ${backtest.origins} rolling origins — naive baseline ${backtest.byModel.find((r) => r.model === "naive")!.mapePercent}%`,
  };
}

/** Hook for future candidate models (SARIMA-class, ML) registered via adapter. */
let extraModelRegistry: () => ModelSpec[] = () => [];
export function registerCandidateModels(factory: () => ModelSpec[]): void {
  extraModelRegistry = factory;
}
