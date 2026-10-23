"use client";

import { useEffect, useState } from "react";
import { lastSyncAt } from "@/lib/api";
import { shortDateTime } from "@/lib/format";

/**
 * Honest connectivity strip. It says "last synced", not "live", because
 * Tomionce has no live feed — the underlying WFP series is monthly.
 */
export function ConnectivityBanner() {
  const [online, setOnline] = useState(true);
  const [lastSync, setLastSync] = useState<string | null>(null);

  useEffect(() => {
    setOnline(navigator.onLine);
    setLastSync(lastSyncAt());

    const goOnline = () => {
      setOnline(true);
      setLastSync(lastSyncAt());
    };
    const goOffline = () => {
      setOnline(false);
      setLastSync(lastSyncAt());
    };

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (online) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-0 bottom-16 z-40 bg-inverse-surface text-inverse-on-surface shadow-md"
    >
      <div className="mx-auto flex h-10 max-w-2xl items-center justify-between gap-space-sm px-margin">
        <div className="flex min-w-0 items-center gap-2">
          <span className="material-symbols-outlined shrink-0 text-[18px] text-secondary-fixed">
            cloud_off
          </span>
          <span className="truncate font-body-sm text-body-sm">
            Offline — showing last synced data
          </span>
        </div>
        <span className="ml-2 shrink-0 font-label-numeric-sm text-label-numeric-sm text-secondary-fixed-dim">
          {lastSync ? shortDateTime(lastSync) : "no sync yet"}
        </span>
      </div>
    </div>
  );
}
