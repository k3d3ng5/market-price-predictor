/**
 * Unit registry domain — the rule from ADR-018:
 * Cross-unit comparison / kg normalisation ONLY via validated conversions.
 * A unit without a validated kg equivalent blocks comparison with a reason.
 */

export type UnitStatus = "unvalidated" | "validated";

export interface Unit {
  id: string;
  /** Commodity-scoped: a "basket" of tomatoes ≠ a "basket" of onions. */
  commodityId: string;
  name: string;
  /** Comma-free matching handled upstream; aliases are exact lowercase strings. */
  aliases: string[];
  /** kg per single unit. Null = never weighs a column (e.g. per-item). */
  kgEquivalent: number | null;
  /** Required in the doc when status is "validated". */
  kgBasisNote: string | null;
  status: UnitStatus;
  countryId?: string;
}

export interface ConversionResult {
  ok: boolean;
  /** Price in minor units (kobo) per kg, rounded half-up. Present only when ok. */
  pricePerKgMinor?: number;
  /** Machine-interpretable failure reason. */
  reason?: string;
}

export function isValidated(unit: Unit): boolean {
  return (
    unit.status === "validated" &&
    unit.kgEquivalent !== null &&
    unit.kgEquivalent > 0
  );
}

/**
 * Convert a price in `unit` to price-per-kg (integer minor units).
 * Never invents a conversion: unvalidated units are refused, not guessed (FR-P3).
 */
export function convertToPerKg(
  priceMinor: number,
  unit: Unit,
): ConversionResult {
  if (!Number.isInteger(priceMinor) || priceMinor < 0) {
    return { ok: false, reason: "invalid_price" };
  }
  if (!isValidated(unit)) {
    return {
      ok: false,
      reason: unit.status === "validated" ? "missing_kg_equivalent" : "unit_unvalidated",
    };
  }
  const kg = unit.kgEquivalent as number;
  const perKg = Math.round(priceMinor / kg);
  return { ok: true, pricePerKgMinor: perKg };
}

/**
 * Compare two observations of the same commodity pair.
 * Comparability requires BOTH units validated; otherwise blocked with reason.
 */
export interface ComparisonInput {
  unitA: Unit;
  unitB: Unit;
  priceMinorA: number;
  priceMinorB: number;
}

export interface ComparisonResult {
  comparable: boolean;
  reason?: string;
  /** Percent difference of B vs A (B relative to A). Present when comparable. */
  percentDifference?: number;
}

export function compareObservations(input: ComparisonInput): ComparisonResult {
  if (input.unitA.commodityId !== input.unitB.commodityId) {
    return { comparable: false, reason: "different_commodities" };
  }
  const a = convertToPerKg(input.priceMinorA, input.unitA);
  const b = convertToPerKg(input.priceMinorB, input.unitB);
  if (!a.ok || !b.ok) {
    return { comparable: false, reason: !a.ok ? (a.reason as string) : (b.reason as string) };
  }
  const perKgA = a.pricePerKgMinor as number;
  const perKgB = b.pricePerKgMinor as number;
  if (perKgA === 0) return { comparable: false, reason: "zero_price" };
  const pct = ((perKgB - perKgA) / perKgA) * 100;
  return { comparable: true, percentDifference: Math.round(pct * 10) / 10 };
}
