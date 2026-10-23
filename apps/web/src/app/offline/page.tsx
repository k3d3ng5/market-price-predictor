"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { lastSyncAt } from "@/lib/api";
import { shortDateTime } from "@/lib/format";

export default function OfflinePage() {
  const [lastSync, setLastSync] = useState<string | null>(null);

  useEffect(() => {
    setLastSync(lastSyncAt());
  }, []);

  return (
    <div className="flex flex-col items-center gap-space-md py-space-xl text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-fixed/60 text-secondary">
        <span className="material-symbols-outlined text-[32px]">cloud_off</span>
      </span>
      <div>
        <h1 className="font-headline-md text-headline-md text-on-surface">
          You’re offline
        </h1>
        <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
          Tomionce keeps the pages and price responses you have already opened.
          Anything you have not loaded before may be unavailable.
        </p>
      </div>

      <div className="w-full rounded-xl bg-surface-container-lowest p-space-md text-left shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <p className="font-label-ui text-label-ui text-on-surface">Last successful sync</p>
        <p className="mt-1 font-label-numeric-md text-label-numeric-md text-on-surface">
          {lastSync ? shortDateTime(lastSync) : "No sync recorded on this device yet"}
        </p>
        <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
          Cached prices keep their original observation dates and stale labels.
          We never repaint an old number as “live”.
        </p>
      </div>

      <div className="flex w-full flex-col gap-space-sm">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-primary px-space-lg font-label-ui text-label-ui text-on-primary"
        >
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-surface-container-lowest px-space-lg font-label-ui text-label-ui text-primary shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">payments</span>
          Back to prices
        </Link>
      </div>

      <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">
        If you are setting this up locally: start the API on port 4000 and the web
        app on port 5100, then reload.
      </p>
    </div>
  );
}
