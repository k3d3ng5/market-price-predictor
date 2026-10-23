/**
 * Trust labels (PRD §7.4) and freshness (AUT-05).
 * Missing/stale data is LABELLED, never hidden or fabricated (§7.2 rule 5, FR-P1).
 */

export type TrustLabel =
  | "verified_report"
  | "official_statistic"
  | "estimated"
  | "forecast"
  | "unverified";

export type FreshnessState = "fresh" | "stale" | "missing";

/** Default: observations ≤ 7 days are fresh (PRD §11 data-health target). */
export const FRESH_LIMIT_DAYS = 7;

export function freshness(
  observedAt: Date | null | undefined,
  now: Date,
  freshLimitDays: number = FRESH_LIMIT_DAYS,
): FreshnessState {
  if (!observedAt) return "missing";
  const ms = now.getTime() - observedAt.getTime();
  if (ms < 0) return "missing"; // future date is corrupt data, not "super fresh"
  return ms <= freshLimitDays * 24 * 60 * 60 * 1000 ? "fresh" : "stale";
}

export interface PriceCardInput {
  priceMinor: number | null;
  currencyCode: string;
  unitName: string;
  observedAt: Date | null;
  trustLabel: TrustLabel;
  now: Date;
}

export interface PriceCard {
  ok: boolean;
  reason?: string;
  /** Formatted like "₦2,400.00 per kg"; never fabricated. */
  display?: string;
  freshness?: FreshnessState;
  trustLabel?: TrustLabel;
}

/**
 * Builds the user-facing price card. Hard rule (FR-P1):
 * a missing price is NEVER shown as 0 or as a live price.
 */
export function buildPriceCard(input: PriceCardInput): PriceCard {
  const state = freshness(input.observedAt, input.now);
  if (input.priceMinor === null || state === "missing") {
    return {
      ok: false,
      reason: "no_verified_observation",
      freshness: "missing",
      trustLabel: input.trustLabel,
    };
  }
  const naira = input.priceMinor / 100;
  const display = `₦${naira.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} per ${input.unitName} · ${state} · as at ${input.observedAt!
    .toISOString()
    .slice(0, 10)}`;
  return { ok: true, display, freshness: state, trustLabel: input.trustLabel };
}
