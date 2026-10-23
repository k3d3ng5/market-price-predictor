/**
 * Typed client for the Tomionce price API.
 * All calls are same-origin (`/api/*` → API on port 4000 via next.config), so
 * the service worker can cache them and the app works on a phone over LAN.
 */

export type TrustLabel =
  | "verified_report"
  | "official_statistic"
  | "estimated"
  | "forecast"
  | "unverified";

export type Freshness = "fresh" | "stale" | "missing";

export interface LatestResponse {
  commodity: { id: string; name: string };
  market: { id: string; name: string; state: string; display: string };
  priceMinor: number;
  currencyCode: string;
  unit: string;
  unitStatus: string;
  observedAt: string;
  trustLabel: TrustLabel;
  price: {
    ok: boolean;
    reason?: string;
    display?: string;
    freshness?: Freshness;
    trustLabel?: TrustLabel;
  };
  pricePerKgMinor: number | null;
  perKgBlockedReason: string | null;
  freshness: Freshness;
  source: { id: string; name: string; validationStatus: string };
  notice?: string;
}

export interface HistoryPoint {
  observedAt: string;
  priceMinor: number;
  currencyCode: string;
  unit: string;
  trustLabel: TrustLabel;
  pricePerKgMinor: number | null;
  perKgBlockedReason: string | null;
  sourceId: string;
  sourceName: string;
}

export interface HistoryResponse {
  commodity: string;
  market: string;
  n: number;
  series: HistoryPoint[];
  notice?: string;
}

export interface CoverageEntry {
  commodityId: string;
  observations: number;
  latestObservedAt: string;
  sourceIds: string[];
  sourceNames: string[];
  dataKind: "real" | "demo" | "mixed";
}

export interface CatalogMarket {
  id: string;
  name: string;
  state: string;
  display: string;
  coverage: CoverageEntry[];
}

export interface CatalogResponse {
  commodities: { id: string; name: string; marketsWithData: number }[];
  markets: CatalogMarket[];
}

export interface SourceRow {
  id: string;
  name: string;
  owner: string;
  url: string;
  licence: string;
  frequency: string;
  validationStatus: string;
  attributionText: string;
  isDemonstration: boolean;
  observations: number;
  marketsCovered: number;
  commoditiesCovered: number;
  firstObservedAt: string | null;
  lastObservedAt: string | null;
  lastWrittenAt: string | null;
}

export interface SourcesResponse {
  sources: SourceRow[];
  demoSourceIds: string[];
  freshLimitDays: number;
}

export interface GuideStep {
  title: string;
  body: string;
  key: string;
}

export interface GuideResponse {
  steps: GuideStep[];
}

export interface EligibilityResponse {
  commodity: string;
  market: string;
  eligible: boolean;
  reasonCode?: string;
  detail: string;
  dataNotice?: string;
}

export interface BacktestModel {
  model: string;
  mapePercent: number;
  maeKobo: number;
  n: number;
  residualStdKobo: number;
}

export interface BacktestResult {
  seriesLength: number;
  horizon: number;
  origins: number;
  byModel: BacktestModel[];
  bestBaseline: string;
  bestModel?: string;
  beatsBaseline: boolean;
}

export interface PredictiveGate {
  publishable: boolean;
  reasonCode?: "does_not_beat_baseline" | "insufficient_backtest";
  model?: string;
  centralPerKgMinor?: number;
  lowPerKgMinor?: number;
  highPerKgMinor?: number;
  reliability?: string;
}

export interface BacktestResponse {
  commodity: string;
  commodityName: string;
  market: string;
  marketName: string;
  horizonSteps: number;
  seriesLength: number;
  firstObservedAt: string | null;
  lastObservedAt: string | null;
  backtest: BacktestResult;
  predictiveGate: PredictiveGate;
  displayLine: string;
  dataNotice?: string;
}

export interface CompareSide {
  marketId: string;
  market: string;
  state: string;
  observedAt: string;
  priceMinor: number;
  currencyCode: string;
  unit: string;
  unitStatus: string;
  pricePerKgMinor: number | null;
  perKgBlockedReason: string | null;
  trustLabel: TrustLabel;
  freshness: Freshness;
  source: { id: string; name: string; validationStatus: string };
  notice?: string;
}

export interface CompareResponse {
  commodity: string;
  commodityName: string;
  market_a: string;
  market_b: string;
  side_a: CompareSide;
  side_b: CompareSide;
  comparable: boolean;
  reason: string | null;
  percentDifference: number | null;
  blockExplanation: string | null;
  notice?: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly body: unknown;

  constructor(status: number, code: string, body: unknown) {
    super(code);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.body = body;
  }
}

const LAST_SYNC_KEY = "tomionce:last-sync";

export function rememberSync(): void {
  try {
    window.localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
  } catch {
    // storage disabled — not fatal
  }
}

export function lastSyncAt(): string | null {
  try {
    return window.localStorage.getItem(LAST_SYNC_KEY);
  } catch {
    return null;
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`/api${path}`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  let body: unknown = null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }

  if (!res.ok) {
    const code =
      body && typeof body === "object" && "error" in body
        ? String((body as { error: unknown }).error)
        : `http_${res.status}`;
    throw new ApiError(res.status, code, body);
  }

  rememberSync();
  return body as T;
}
