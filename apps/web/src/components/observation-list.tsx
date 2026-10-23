import type { HistoryPoint } from "@/lib/api";
import { naira, perKg, shortDate } from "@/lib/format";
import { TrustChip } from "./chips";
import { SectionTitle } from "./ui";

export function ObservationList({ series }: { series: HistoryPoint[] }) {
  if (series.length === 0) return null;

  const recent = [...series].reverse().slice(0, 5);

  return (
    <section className="flex flex-col gap-space-sm" aria-label="Recent observations">
      <SectionTitle
        title="Recent observations"
        hint={`Latest ${recent.length} of ${series.length} records for this pair`}
      />
      <ul className="flex flex-col gap-2">
        {recent.map((point, index) => (
          <li
            key={`${point.observedAt}-${index}`}
            className="flex items-center justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_8px_rgba(19,27,46,0.04)]"
          >
            <div className="flex min-w-0 items-center gap-space-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary">
                <span className="material-symbols-outlined text-[19px]">
                  receipt_long
                </span>
              </span>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-label-numeric-md text-label-numeric-md font-semibold text-on-surface">
                  {shortDate(point.observedAt)}
                </span>
                <span className="truncate font-body-sm text-body-sm text-on-surface-variant">
                  {point.sourceName}
                </span>
                <TrustChip label={point.trustLabel} className="mt-0.5 w-fit" />
              </div>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-label-numeric-md text-label-numeric-md font-semibold text-on-surface">
                {naira(point.priceMinor)}
              </div>
              <div className="font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
                per {point.unit}
              </div>
              <div className="font-label-numeric-sm text-label-numeric-sm text-outline">
                {point.pricePerKgMinor !== null
                  ? perKg(point.pricePerKgMinor)
                  : "per-kg unavailable"}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
