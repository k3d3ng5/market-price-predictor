/**
 * Nigeria states registry (ADR-020: location is data, not code).
 * Two-letter abbreviations are an internal Tomionce convention
 * (no official national standard exists) — documented here so the
 * UI, bots and CSVs all show the SAME initials.
 *
 * Also the home of the beginner-guide copy constants (AIG-03:
 * transparency — the guide teaches trust labels before first promise).
 */

export const NIGERIAN_STATES: Record<string, string> = {
  abia: "AB",
  adamawa: "AD",
  "akwa ibom": "AK",
  "anambra": "AN",
  bauchi: "BA",
  bayelsa: "BY",
  benue: "BE",
  borno: "BO",
  "cross river": "CR",
  delta: "DT",
  ebonyi: "EB",
  edo: "ED",
  ekiti: "EK",
  enugu: "EN",
  fct: "FC",
  gombe: "GM",
  imo: "IM",
  jigawa: "JG",
  kaduna: "KD",
  kano: "KN",
  katsina: "KT",
  kebbi: "KB",
  kogi: "KG",
  kwara: "KW",
  lagos: "LA",
  nasarawa: "NA",
  niger: "NG",
  ogun: "OG",
  ondo: "ON",
  osun: "OS",
  oyo: "OY",
  plateau: "PL",
  rivers: "RI",
  sokoto: "SO",
  taraba: "TB",
  yobe: "YO",
  zamfara: "ZA",
};

/** "Abuja" style synonyms → canonical state key. */
const SYNONYMS: Record<string, string> = {
  "federal capital territory": "fct",
};

export function stateInitials(stateName: string | null | undefined): string | null {
  if (!stateName) return null;
  const key = stateName.trim().toLowerCase();
  const canonical = SYNONYMS[key] ?? key;
  return NIGERIAN_STATES[canonical] ?? null;
}

/**
 * Market display name with state initials: "Abba Gamaram (BO)".
 * Falls back gracefully to bare name when state unknown — never invents initials.
 */
export function marketDisplay(marketName: string, stateName?: string | null): string {
  const initials = stateInitials(stateName);
  return initials ? `${marketName} (${initials})` : marketName;
}

/** Beginner-guide copy — one source of truth for PWA overlay + future surfaces. */
export const BEGINNER_GUIDE_STEPS = [
  {
    title: "Every price carries receipts",
    body: "Each price shows its unit, the market, the date observed and a trust chip. If we can't verify it, we say so — never a silent guess.",
    key: "receipts",
  },
  {
    title: "Trust chips in plain words",
    body: "Verified report = checked data · Official statistic = WFP/NBS · Estimated = model or converted · Unverified = waiting for review.",
    key: "chips",
  },
  {
    title: "Predictions must earn publication",
    body: "The forecast runs against history FIRST (a backtest). It only shows a range when the model beat a do-nothing baseline — otherwise you see 'Not available yet' and why.",
    key: "gate",
  },
  {
    title: "Stale is safe",
    body: "Prices older than 7 days are badged stale with their date. Stale and labelled beats fresh and fake. Offline, you see last-synced data.",
    key: "stale",
  },
] as const;
