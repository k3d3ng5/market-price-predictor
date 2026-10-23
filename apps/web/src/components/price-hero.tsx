import Link from "next/link";
import type { HistoryPoint, LatestResponse } from "@/lib/api";
import { commodityCopy, naira, perKg, shortDate } from "@/lib/format";
import { FreshnessChip, TrustChip } from "./chips";
import { cn } from "./ui";

function blockedReason(reason: string | null): string {
  switch (reason) {
    case "unit_unvalidated":
      return "this unit has no validated kilogram conversion";
    case "missing_kg_equivalent":
      return "no verified weight for this unit";
    case "invalid_price":
      return "the recorded price could not be normalised";
    default:
      return "no validated unit conversion";
  }
}

function changeVersusPrevious(
  current: LatestResponse,
  previous: HistoryPoint | null,
) {
  if (!previous) return null;

  if (current.pricePerKgMinor !== null && previous.pricePerKgMinor !== null) {
    const base = previous.pricePerKgMinor;
    if (base === 0) return null;
    return {
      basis: "per kg",
      percent: ((current.pricePerKgMinor - base) / base) * 100,
      absoluteMinor: current.pricePerKgMinor - base,
      fromDate: previous.observedAt,
    };
  }

  if (previous.unit === current.unit) {
    if (previous.priceMinor === 0) return null;
    return {
      basis: `per ${current.unit}`,
      percent: ((current.priceMinor - previous.priceMinor) / previous.priceMinor) * 100,
      absoluteMinor: current.priceMinor - previous.priceMinor,
      fromDate: previous.observedAt,
    };
  }

  return null;
}

export function PriceHero({
  data,
  previous,
}: {
  data: LatestResponse;
  previous: HistoryPoint | null;
}) {
  const copy = commodityCopy(data.commodity.id);
  const change = changeVersusPrevious(data, previous);
  const up = (change?.percent ?? 0) > 0;
  const flat = change ? Math.abs(change.percent) < 0.05 : false;

  return (
    <section
      aria-label={`Latest ${copy.singular} price in ${data.market.display}`}
      className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_8px_rgba(19,27,46,0.05)]"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 font-body-sm text-body-sm font-medium text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]" data-filled="true">
              {copy.icon}
            </span>
            <span className="truncate">
              {copy.label} · {data.market.display}
            </span>
          </p>
          <p className="mt-0.5 font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
            {data.market.state}
          </p>
        </div>
        <Link
          href="/sources"
          aria-label="How this price is verified"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-[19px]">policy</span>
        </Link>
      </div>

      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-label-numeric-lg text-[36px] font-bold leading-none tracking-tight text-on-surface">
          {naira(data.priceMinor)}
        </span>
        <span className="font-body-md text-body-md text-on-surface-variant">
          per {data.unit}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <TrustChip label={data.trustLabel} />
        <FreshnessChip state={data.freshness} observedAt={data.observedAt} />
      </div>

      <div className="flex items-center justify-between gap-space-sm rounded-lg bg-surface-container-low px-space-sm py-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
            scale
          </span>
          {data.pricePerKgMinor !== null ? (
            <p className="truncate font-label-numeric-sm text-label-numeric-sm text-on-surface">
              {perKg(data.pricePerKgMinor)}
              <span className="text-on-surface-variant"> normalised</span>
            </p>
          ) : (
            <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
              Per-kg value unavailable — {blockedReason(data.perKgBlockedReason)}
            </p>
          )}
        </div>
        <span className="shrink-0 font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
          {data.unit}
        </span>
      </div>

      <div className="flex items-start justify-between gap-space-sm rounded-lg border border-dashed border-outline-variant/70 p-space-sm">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="material-symbols-outlined shrink-0 text-[16px] text-outline">
            database
          </span>
          <p className="min-w-0 font-body-sm text-body-sm leading-snug text-on-surface-variant">
            Source: <span className="text-on-surface">{data.source.name}</span>
          </p>
        </div>
        <span className="shrink-0 font-label-numeric-sm text-label-numeric-sm text-outline">
          {data.source.validationStatus === "demonstration" ? "SYNTHETIC" : "PUBLISHED"}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 border-t border-outline-variant/40 pt-space-sm">
        {change ? (
          <>
            <div
              className={cn(
                "flex items-center gap-1.5",
                flat ? "text-on-surface-variant" : up ? "text-secondary" : "text-primary",
              )}
            >
              <span className="material-symbols-outlined text-[18px]">
                {flat ? "remove" : up ? "arrow_upward" : "arrow_downward"}
              </span>
              <span className="font-label-numeric-md text-label-numeric-md font-semibold">
                {flat
                  ? "No material change"
                  : `${up ? "+" : ""}${Math.round(change.percent * 10) / 10}%`}
              </span>
              <span className="font-label-ui text-label-ui text-on-surface-variant">
                vs previous observation ({change.basis})
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Previous observation: {shortDate(change.fromDate)}
              {flat
                ? " · the recorded value is effectively unchanged."
                : ` · ${naira(Math.abs(change.absoluteMinor))} ${
                    change.absoluteMinor >= 0 ? "higher" : "lower"
                  } than that record.`}
            </p>
          </>
        ) : (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {previous
              ? "The previous observation uses a unit we cannot convert, so no change is shown."
              : "First observation recorded for this pair — there is nothing to compare yet."}
          </p>
        )}
        <p className="font-body-sm text-body-sm italic text-on-surface-variant/80">
          We never fill a missing history with a made-up percentage.
        </p>
      </div>
    </section>
  );
}
