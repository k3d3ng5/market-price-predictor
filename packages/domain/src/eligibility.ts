/**
 * Forecast gate eligibility (FR-F1) — deterministic, no models required.
 * A pair is eligible for candidate evaluation only when history is dense enough
 * and recent enough. Otherwise it returns a Reason code the UI renders verbatim FR-F7.
 */

export const MIN_HISTORICAL_POINTS = 24; // e.g., ~6 months of weekly data
export const MAX_STALENESS_DAYS = 14;

export interface EligibilityInput {
  /** Number of historical observations for commodity × market. */
  historicalPoints: number;
  /** Age in days of the most recent observation. */
  daysSinceLastObservation: number | null;
  minPoints?: number;
  maxStalenessDays?: number;
}

export type EligibilityReasonCode =
  | "insufficient_history"
  | "no_observations"
  | "stale_history"
  | "reporter_data_not_gated_yet";

export interface EligibilityResult {
  eligible: boolean;
  /** undefined when eligible */
  reasonCode?: EligibilityReasonCode;
  detail: string;
}

export function checkForecastEligibility(input: EligibilityInput): EligibilityResult {
  const minPoints = input.minPoints ?? MIN_HISTORICAL_POINTS;
  const maxStale = input.maxStalenessDays ?? MAX_STALENESS_DAYS;

  if (input.daysSinceLastObservation === null) {
    return {
      eligible: false,
      reasonCode: "no_observations",
      detail: `No observations recorded for this pair yet`,
    };
  }
  if (input.historicalPoints < minPoints) {
    return {
      eligible: false,
      reasonCode: "insufficient_history",
      detail:
        `Need ≥ ${minPoints} historical points, have ${input.historicalPoints}`,
    };
  }
  if (input.daysSinceLastObservation > maxStale) {
    return {
      eligible: false,
      reasonCode: "stale_history",
      detail: `Last observation is ${input.daysSinceLastObservation} days old (limit ${maxStale})`,
    };
  }
  return {
    eligible: true,
    detail: `OK — ${input.historicalPoints} points, last seen ${input.daysSinceLastObservation} days ago`,
  };
}
