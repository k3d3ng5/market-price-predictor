import type { Freshness, TrustLabel } from "./api";

const nairaFormatter = new Intl.NumberFormat("en-NG", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** Integer kobo → "₦408.06". Never used for missing values (pass null instead). */
export function naira(minor: number | null | undefined): string {
  if (minor === null || minor === undefined) return "—";
  return `₦${nairaFormatter.format(minor / 100)}`;
}

export function perKg(minor: number | null | undefined): string {
  return minor === null || minor === undefined ? "—" : `${naira(minor)}/kg`;
}

/** ISO date → "15 Aug 2026" (UTC, matches how observations are stored). */
export function shortDate(iso: string | null | undefined): string {
  if (!iso) return "date unknown";
  const date = new Date(`${iso.slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return "date unknown";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function shortDateTime(iso: string | null | undefined): string {
  if (!iso) return "never";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "unknown";
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function percent(value: number | null | undefined, digits = 1): string {
  if (value === null || value === undefined || Number.isNaN(value)) return "—";
  const rounded = Math.round(value * 10 ** digits) / 10 ** digits;
  return `${rounded > 0 ? "+" : ""}${rounded}%`;
}

/** Age of an observation date in whole days, or null if the date is unusable. */
export function daysSince(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const then = Date.parse(`${iso.slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(then)) return null;
  return Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
}

export function signedNaira(minor: number | null | undefined): string {
  if (minor === null || minor === undefined) return "—";
  return `${minor > 0 ? "+" : ""}${naira(minor)}`;
}

export function titleCase(value: string): string {
  return value.replace(/\b\w/g, (c) => c.toUpperCase());
}

export const COMMODITY_COPY: Record<string, { label: string; singular: string; icon: string }> = {
  tomato: { label: "Tomatoes", singular: "tomato", icon: "nutrition" },
  onion: { label: "Onions", singular: "onion", icon: "eco" },
};

export function commodityCopy(id: string): { label: string; singular: string; icon: string } {
  return COMMODITY_COPY[id] ?? { label: titleCase(id), singular: id, icon: "shopping_basket" };
}

export const TRUST_COPY: Record<
  TrustLabel,
  { label: string; description: string; icon: string; className: string }
> = {
  verified_report: {
    label: "Verified report",
    description: "A person or organisation we can reach checked this price.",
    icon: "verified",
    className: "bg-primary-fixed/60 text-on-primary-fixed",
  },
  official_statistic: {
    label: "Official statistic",
    description: "Published by an institutional source such as WFP or NBS.",
    icon: "account_balance",
    className: "bg-primary-fixed/60 text-on-primary-fixed",
  },
  estimated: {
    label: "Estimated",
    description: "Derived by a documented calculation, not observed directly.",
    icon: "functions",
    className: "bg-secondary-fixed/70 text-on-secondary-fixed",
  },
  forecast: {
    label: "Forecast",
    description: "A model output, always shown as a range with its backtest score.",
    icon: "query_stats",
    className: "bg-surface-container-high text-on-surface-variant",
  },
  unverified: {
    label: "Unverified",
    description: "Recorded but not yet reviewed. Treat with caution.",
    icon: "help",
    className: "bg-error-container text-on-error-container",
  },
};

export function trustCopy(label: TrustLabel) {
  return TRUST_COPY[label] ?? TRUST_COPY.unverified;
}

export const FRESHNESS_COPY: Record<
  Freshness,
  { label: string; icon: string; className: string }
> = {
  fresh: {
    label: "fresh",
    icon: "schedule",
    className: "bg-primary-fixed/50 text-on-primary-fixed",
  },
  stale: {
    label: "stale",
    icon: "schedule",
    className: "bg-secondary-fixed/60 text-on-secondary-fixed-variant",
  },
  missing: {
    label: "no date",
    icon: "error",
    className: "bg-error-container text-on-error-container",
  },
};

export function freshnessCopy(state: Freshness) {
  return FRESHNESS_COPY[state] ?? FRESHNESS_COPY.missing;
}

export const MODEL_COPY: Record<string, string> = {
  naive: "Naive (repeat last price)",
  seasonal_naive_52: "Seasonal naive (52-observation cycle)",
  moving_average_8: "Moving average (last 8 observations)",
  fourier_trend_2h_52: "Fourier seasonality + trend",
};

export function modelLabel(model: string): string {
  return MODEL_COPY[model] ?? model.replaceAll("_", " ");
}
