"use client";

import { useEffect, useState } from "react";
import type { CatalogMarket, CatalogResponse } from "./api";
import { useApi } from "./use-api";

/** localStorage-backed state that survives navigation (Prices ↔ Forecast ↔ Compare). */
export function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw) as T);
    } catch {
      // ignore corrupt/blocked storage
    }
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore quota/blocked storage
    }
  }, [key, hydrated, value]);

  return [value, setValue, hydrated] as const;
}

export function coverageFor(market: CatalogMarket, commodityId: string) {
  return market.coverage.find((c) => c.commodityId === commodityId) ?? null;
}

/**
 * Catalog + remembered market choice for one commodity.
 * Default pick prefers markets backed by real (non-demonstration) data.
 * `prefer: "freshest"` favours the latest observation date (price screens);
 * `prefer: "depth"` favours a longer series (forecast backtests).
 */
export function useMarketChoice(
  commodityId: string,
  settings: {
    storageKey?: string;
    prefer?: "freshest" | "depth";
  } = {},
) {
  const storageKey = settings.storageKey ?? "tomionce:market";
  const prefer = settings.prefer ?? "freshest";
  const catalog = useApi<CatalogResponse>("/catalog");
  const [marketId, setMarketId] = usePersistentState<string>(storageKey, "");

  const options =
    catalog.data?.markets.filter((m) => coverageFor(m, commodityId) !== null) ??
    [];

  useEffect(() => {
    if (!catalog.data) return;
    const opts = catalog.data.markets.filter(
      (m) => coverageFor(m, commodityId) !== null,
    );
    if (opts.length === 0) return;
    if (opts.some((m) => m.id === marketId)) return;

    const best = [...opts].sort((a, b) => {
      const ca = coverageFor(a, commodityId);
      const cb = coverageFor(b, commodityId);
      const realA = ca?.dataKind === "real" ? 1 : 0;
      const realB = cb?.dataKind === "real" ? 1 : 0;
      if (realA !== realB) return realB - realA;
      if (prefer === "depth") {
        return (cb?.observations ?? 0) - (ca?.observations ?? 0);
      }
      const latestA = ca?.latestObservedAt ?? "";
      const latestB = cb?.latestObservedAt ?? "";
      if (latestA !== latestB) return latestB.localeCompare(latestA);
      return (cb?.observations ?? 0) - (ca?.observations ?? 0);
    })[0];

    if (best) setMarketId(best.id);
  }, [catalog.data, commodityId, marketId, prefer, setMarketId]);

  return {
    catalog,
    options,
    marketId,
    setMarketId,
    selected: options.find((m) => m.id === marketId) ?? null,
  };
}
