"use client";

import { useCallback, useEffect, useState } from "react";
import { ApiError, apiGet } from "./api";

export interface ApiState<T> {
  data: T | null;
  error: ApiError | null;
  loading: boolean;
}

/**
 * Small GET hook with an explicit retry. `path = null` means "nothing selected
 * yet" — it does not fire a request and never shows stale data from a previous
 * pair (a hard rule for price screens).
 */
export function useApi<T>(path: string | null) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    error: null,
    loading: path !== null,
  });
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (path === null) {
      setState({ data: null, error: null, loading: false });
      return;
    }

    let cancelled = false;
    setState({ data: null, error: null, loading: true });

    apiGet<T>(path)
      .then((data) => {
        if (!cancelled) setState({ data, error: null, loading: false });
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        const apiError =
          error instanceof ApiError
            ? error
            : new ApiError(0, "network_error", { detail: String(error) });
        setState({ data: null, error: apiError, loading: false });
      });

    return () => {
      cancelled = true;
    };
  }, [path, nonce]);

  const retry = useCallback(() => setNonce((n) => n + 1), []);
  return { ...state, retry };
}
