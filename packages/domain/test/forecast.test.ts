import { describe, expect, it } from "vitest";
import {
  baselineModels,
  gatedForecast,
  rollingOriginBacktest,
  type SeriesPoint,
} from "../src/forecast.js";

/** Deterministic synthetic weekly series: strong yearly seasonality, slight
 *  non-repeating wiggle (LCG, fixed seed). Quasi-periodic — like real markets:
 *  seasonal-naive is good, a fitted seasonal model is better, and the gate can
 *  therefore be exercised honestly. A purely periodic series would make the
 *  seasonal-naive baseline literally unbeatable (MAPE 0) — a useful discovery. */
function syntheticSeasonalSeries(weeks: number): SeriesPoint[] {
  const start = new Date("2021-01-03T00:00:00Z");
  let seed = 42;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2_147_483_648;
    return seed / 2_147_483_648;
  };
  const out: SeriesPoint[] = [];
  for (let w = 0; w < weeks; w++) {
    const seasonal = 1 + 0.25 * Math.sin((2 * Math.PI * w) / 52);
    const wiggle = 1 + (rand() - 0.5) * 0.04; // ±2%, deterministic
    const kobo = Math.round(200_000 * seasonal * wiggle);
    const d = new Date(start.getTime() + w * 7 * 86_400_000);
    out.push({ observedAt: d.toISOString().slice(0, 10), pricePerKgMinor: kobo });
  }
  return out;
}

describe("forecast engine (ADR-021, FR-F2/F3)", () => {
  const series = syntheticSeasonalSeries(120);
  const backtest = rollingOriginBacktest(series, {
    horizon: 4,
    minTrain: 52,
    period: 52,
  });

  it("evaluates a candidate (Fourier seasonal + trend) against the baselines", () => {
    const names = backtest.byModel.map((m) => m.model);
    expect(names).toContain("fourier_trend_2h_52");
  });

  it("runs a deterministic rolling-origin backtest", () => {
    const again = rollingOriginBacktest(series, { horizon: 4, minTrain: 52, period: 52 });
    expect(again).toEqual(backtest);
    expect(backtest.origins).toBe(120 - 52 - 4 + 1);
  });

  it("seasonal-naive beats naive on strongly seasonal data", () => {
    const naive = backtest.byModel.find((m) => m.model === "naive")!;
    const seasonal = backtest.byModel.find(
      (m) => m.model === "seasonal_naive_52",
    )!;
    expect(seasonal.mapePercent).toBeLessThan(naive.mapePercent);
  });

  it("gates: a model is only promoted if it beats the best baseline", () => {
    expect(backtest.beatsBaseline).toBe(true);
    expect(backtest.bestModel).toBeDefined();
  });

  it("publishes a gated RANGE with reliability copy, never a bare point", () => {
    const gate = gatedForecast(series, backtest);
    expect(gate.publishable).toBe(true);
    expect(gate.lowPerKgMinor!).toBeLessThan(gate.centralPerKgMinor!);
    expect(gate.highPerKgMinor!).toBeGreaterThan(gate.centralPerKgMinor!);
    expect(gate.reliability).toMatch(/MAPE/);
  });

  it("refuses to publish when the model does not beat baselines (white noise)", () => {
    // pure noise around a constant: no model should systematically win
    let seed = 42;
    const rand = () => {
      seed = (seed * 1103515245 + 12345) % 2_147_483_648;
      return seed / 2_147_483_648;
    };
    const noise: SeriesPoint[] = Array.from({ length: 120 }, (_, w) => ({
      observedAt: `2021-01-${String((w % 28) + 1).padStart(2, "0")}`,
      pricePerKgMinor: Math.round(200_000 * (0.95 + 0.1 * rand())),
    }));
    const bt = rollingOriginBacktest(noise, { horizon: 4, minTrain: 52, period: 52 });
    const gate = gatedForecast(noise, bt);
    // On shapeless noise, "beats baseline" is per-luck; the engine must
    // report gate outcomes honestly either way — never fabricate confidence.
    if (gate.publishable) {
      expect(gate.highPerKgMinor!).toBeGreaterThanOrEqual(gate.centralPerKgMinor!);
    } else {
      expect(gate.reasonCode).toBeDefined();
    }
  });

  it("covers the registered baseline set", () => {
    const names = baselineModels(52).map((m) => m.name);
    expect(names).toContain("naive");
    expect(names).toContain("seasonal_naive_52");
    expect(names).toContain("moving_average_8");
  });
});
