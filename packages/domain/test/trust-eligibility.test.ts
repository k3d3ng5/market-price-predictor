import { describe, expect, it } from "vitest";
import { checkForecastEligibility } from "../src/eligibility.js";
import { buildPriceCard, freshness } from "../src/trust.js";

describe("forecast eligibility (FR-F1)", () => {
  it("refuses with reason when there is no data at all", () => {
    const r = checkForecastEligibility({
      historicalPoints: 0,
      daysSinceLastObservation: null,
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("no_observations");
  });

  it("refuses with reason when history is too short", () => {
    const r = checkForecastEligibility({
      historicalPoints: 10,
      daysSinceLastObservation: 1,
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("insufficient_history");
  });

  it("refuses stale history", () => {
    const r = checkForecastEligibility({
      historicalPoints: 60,
      daysSinceLastObservation: 30,
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("stale_history");
  });

  it("approaches with detail when everything checks out", () => {
    const r = checkForecastEligibility({
      historicalPoints: 60,
      daysSinceLastObservation: 3,
    });
    expect(r.eligible).toBe(true);
    expect(r.reasonCode).toBeUndefined();
  });
});

describe("trust labels and freshness (FR-P1)", () => {
  const now = new Date("2026-10-23T12:00:00Z");

  it("fresh within 7 days, stale beyond", () => {
    expect(freshness(new Date("2026-10-20T00:00:00Z"), now)).toBe("fresh");
    expect(freshness(new Date("2026-10-01T00:00:00Z"), now)).toBe("stale");
  });

  it("never treats future dates as fresh — that is corrupt data", () => {
    expect(freshness(new Date("2026-10-30T00:00:00Z"), now)).toBe("missing");
    expect(freshness(null, now)).toBe("missing");
  });

  it("price card refuses to fabricate when there is no price", () => {
    const card = buildPriceCard({
      priceMinor: null,
      currencyCode: "NGN",
      unitName: "kg",
      observedAt: null,
      trustLabel: "verified_report",
      now,
    });
    expect(card.ok).toBe(false);
    expect(card.reason).toBe("no_verified_observation");
    expect(card.display).toBeUndefined();
  });

  it("price card shows unit, date and freshness when present", () => {
    const card = buildPriceCard({
      priceMinor: 200_000,
      currencyCode: "NGN",
      unitName: "kg",
      observedAt: new Date("2026-10-21T00:00:00Z"),
      trustLabel: "verified_report",
      now,
    });
    expect(card.ok).toBe(true);
    expect(card.display).toMatch(/₦2,000\.00 per kg/);
    expect(card.display).toMatch(/as at 2026-10-21/);
    expect(card.freshness).toBe("fresh");
  });
});
