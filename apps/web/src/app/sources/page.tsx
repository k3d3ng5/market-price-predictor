"use client";

import { TrustChip } from "@/components/chips";
import {
  ErrorPanel,
  InlineNotice,
  PageHeader,
  SectionTitle,
  Skeleton,
  cn,
} from "@/components/ui";
import type { CatalogResponse, SourcesResponse } from "@/lib/api";
import { shortDate, shortDateTime, trustCopy } from "@/lib/format";
import type { TrustLabel } from "@/lib/api";
import { useApi } from "@/lib/use-api";

const TRUST_ORDER: TrustLabel[] = [
  "verified_report",
  "official_statistic",
  "estimated",
  "forecast",
  "unverified",
];

export default function SourcesPage() {
  const sources = useApi<SourcesResponse>("/sources");
  const catalog = useApi<CatalogResponse>("/catalog");

  const totalObservations =
    sources.data?.sources.reduce((sum, source) => sum + source.observations, 0) ?? 0;
  const realMarkets =
    catalog.data?.markets.filter((market) =>
      market.coverage.some((coverage) => coverage.dataKind === "real"),
    ).length ?? 0;
  const demoOnlyMarkets =
    catalog.data?.markets.filter(
      (market) =>
        market.coverage.length > 0 &&
        market.coverage.every((coverage) => coverage.dataKind === "demo"),
    ).length ?? 0;
  const realStates = [
    ...new Set(
      (catalog.data?.markets ?? [])
        .filter((market) =>
          market.coverage.some((coverage) => coverage.dataKind === "real"),
        )
        .map((market) => market.state),
    ),
  ].sort();

  return (
    <div className="flex flex-col gap-space-md">
      <PageHeader
        eyebrow="Receipts, not vibes"
        title="Where every number comes from"
        description="Tomionce records its sources, licences and coverage. If a price is synthetic, stale or converted, you should be able to see that without asking us."
      />

      {sources.error ? (
        <ErrorPanel error={sources.error} onRetry={sources.retry} />
      ) : sources.loading || !sources.data ? (
        <div className="flex flex-col gap-space-sm">
          <Skeleton className="h-28 w-full rounded-xl" />
          <Skeleton className="h-40 w-full rounded-xl" />
        </div>
      ) : (
        <>
          <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
            <SectionTitle title="Coverage right now" hint="Counts are read from the database, not marketing copy" />
            <dl className="mt-space-md grid grid-cols-3 gap-space-sm">
              <Stat label="Observations" value={totalObservations.toLocaleString("en-NG")} />
              <Stat label="Markets with real data" value={String(realMarkets)} />
              <Stat label="Sources" value={String(sources.data.sources.length)} />
            </dl>
            <dl className="mt-space-md flex flex-col gap-2 border-t border-outline-variant/40 pt-space-sm">
              <div className="flex items-start justify-between gap-2">
                <dt className="font-body-sm text-body-sm text-on-surface-variant">
                  Real dataset states
                </dt>
                <dd className="text-right font-body-sm text-body-sm font-medium text-on-surface">
                  {realStates.length > 0 ? realStates.join(", ") : "None yet"}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-2">
                <dt className="font-body-sm text-body-sm text-on-surface-variant">
                  Demonstration-only markets
                </dt>
                <dd className="text-right font-body-sm text-body-sm font-medium text-on-surface">
                  {demoOnlyMarkets}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-2">
                <dt className="font-body-sm text-body-sm text-on-surface-variant">
                  Freshness window
                </dt>
                <dd className="text-right font-body-sm text-body-sm font-medium text-on-surface">
                  {sources.data.freshLimitDays} days
                </dd>
              </div>
            </dl>
          </section>

          <div className="flex flex-col gap-space-sm">
            <SectionTitle
              title="Data sources"
              hint="Each licence and its real record counts"
            />
            {sources.data.sources.map((source) => (
              <article
                key={source.id}
                className={cn(
                  "flex flex-col gap-space-sm rounded-xl p-space-md shadow-[0_1px_8px_rgba(19,27,46,0.04)]",
                  source.isDemonstration
                    ? "bg-secondary-fixed/35"
                    : "bg-surface-container-lowest",
                )}
              >
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="min-w-0">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {source.name}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {source.owner}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-2 py-0.5 font-label-numeric-sm text-label-numeric-sm",
                      source.isDemonstration
                        ? "bg-secondary text-on-secondary"
                        : "bg-primary-fixed text-on-primary-fixed",
                    )}
                  >
                    {source.isDemonstration ? "DEMONSTRATION" : "PUBLISHED"}
                  </span>
                </div>

                {source.isDemonstration ? (
                  <InlineNotice tone="warning">
                    Synthetic rows, generated for demonstration. They are never
                    presented as real market reports.
                  </InlineNotice>
                ) : null}

                <dl className="grid grid-cols-3 gap-space-sm">
                  <Stat
                    label="Observations"
                    value={source.observations.toLocaleString("en-NG")}
                    compact
                  />
                  <Stat label="Markets" value={String(source.marketsCovered)} compact />
                  <Stat
                    label="Commodities"
                    value={String(source.commoditiesCovered)}
                    compact
                  />
                </dl>

                <div className="flex flex-col gap-1 border-t border-outline-variant/40 pt-space-sm font-body-sm text-body-sm text-on-surface-variant">
                  <p>
                    <span className="font-medium text-on-surface">Coverage:</span>{" "}
                    {source.firstObservedAt
                      ? `${shortDate(source.firstObservedAt)} → ${shortDate(source.lastObservedAt)}`
                      : "no rows yet"}
                  </p>
                  <p>
                    <span className="font-medium text-on-surface">Last written:</span>{" "}
                    {shortDateTime(source.lastWrittenAt)}
                  </p>
                  <p>
                    <span className="font-medium text-on-surface">Licence:</span>{" "}
                    {source.licence || "not stated"} · {source.frequency}
                  </p>
                  <p className="leading-snug">{source.attributionText}</p>
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex w-fit items-center gap-1 font-label-ui text-label-ui text-primary underline underline-offset-2"
                    >
                      Open the original dataset
                      <span className="material-symbols-outlined text-[16px]">
                        open_in_new
                      </span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <section className="flex flex-col gap-space-sm">
            <SectionTitle
              title="Trust labels in plain words"
              hint="The same wording in the field guide and on every price"
            />
            <ul className="flex flex-col gap-2">
              {TRUST_ORDER.map((label) => (
                <li
                  key={label}
                  className="flex items-start gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_8px_rgba(19,27,46,0.04)]"
                >
                  <TrustChip label={label} className="shrink-0" />
                  <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                    {trustCopy(label).description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl bg-surface-container-low p-space-md">
            <p className="font-label-ui text-label-ui text-on-surface">
              Rules we hold ourselves to
            </p>
            <ul className="mt-space-xs flex list-disc flex-col gap-1.5 pl-4 font-body-sm text-body-sm text-on-surface-variant">
              <li>No price without a unit, a source and a date.</li>
              <li>No per-kg value without a validated conversion.</li>
              <li>
                No forecast unless the backtest beat the naive baseline on
                held-out data.
              </li>
              <li>
                No hidden staleness: older than the freshness window is labelled
                with its date.
              </li>
              <li>
                No silent synthetic rows: demonstration data says so on the
                price, the source and the picker.
              </li>
            </ul>
          </section>

          <p className="px-1 font-body-sm text-body-sm text-on-surface-variant">
            Every trust chip has a longer explanation on the price screen and in
            the field guide. If a number here disagrees with the source dataset,
            the source wins — tell us and we will fix the record.
          </p>
        </>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  compact = false,
}: {
  label: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <div>
      <dt className="font-label-ui text-label-ui text-on-surface-variant">{label}</dt>
      <dd
        className={cn(
          "font-label-numeric-lg text-label-numeric-lg font-semibold text-on-surface",
          compact ? "text-[16px]" : "text-[20px]",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
