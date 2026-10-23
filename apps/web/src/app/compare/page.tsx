"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CommodityTabs } from "@/components/commodity-tabs";
import { MarketPicker } from "@/components/market-picker";
import { FreshnessChip, TrustChip } from "@/components/chips";
import {
  EmptyPanel,
  ErrorPanel,
  InlineNotice,
  PageHeader,
  Skeleton,
} from "@/components/ui";
import type { CompareResponse, CompareSide } from "@/lib/api";
import { commodityCopy, naira, perKg, shortDate } from "@/lib/format";
import { useApi } from "@/lib/use-api";
import {
  coverageFor,
  useMarketChoice,
  usePersistentState,
} from "@/lib/use-market";

function daysApart(a: string, b: string): number | null {
  const first = Date.parse(`${a}T00:00:00Z`);
  const second = Date.parse(`${b}T00:00:00Z`);
  if (Number.isNaN(first) || Number.isNaN(second)) return null;
  return Math.abs(Math.round((first - second) / 86_400_000));
}

export default function ComparePage() {
  const [commodity, setCommodity] = usePersistentState<string>(
    "tomionce:commodity",
    "tomato",
  );
  const {
    catalog,
    options,
    marketId: marketA,
    setMarketId: setMarketA,
  } = useMarketChoice(commodity);
  const [marketB, setMarketB] = usePersistentState<string>(
    "tomionce:market-b",
    "",
  );

  useEffect(() => {
    if (options.length < 2) return;
    const validB =
      marketB !== "" && marketB !== marketA && options.some((m) => m.id === marketB);
    if (validB) return;

    // Pick a fair default: real data first, then the most recent observation,
    // then the deeper series. Never compare against a year-old three-row market
    // when a fresher one exists.
    const fallback = [...options]
      .filter((market) => market.id !== marketA)
      .sort((a, b) => {
        const ca = coverageFor(a, commodity);
        const cb = coverageFor(b, commodity);
        const realA = ca?.dataKind === "real" ? 1 : 0;
        const realB = cb?.dataKind === "real" ? 1 : 0;
        if (realA !== realB) return realB - realA;
        const latest = (cb?.latestObservedAt ?? "").localeCompare(
          ca?.latestObservedAt ?? "",
        );
        if (latest !== 0) return latest;
        return (cb?.observations ?? 0) - (ca?.observations ?? 0);
      })[0];
    if (fallback) setMarketB(fallback.id);
  }, [options, commodity, marketA, marketB, setMarketB]);

  const activeA = options.some((market) => market.id === marketA) ? marketA : "";
  const activeB =
    marketB !== activeA && options.some((market) => market.id === marketB)
      ? marketB
      : "";

  const query =
    activeA && activeB
      ? `?commodity=${encodeURIComponent(commodity)}&market_a=${encodeURIComponent(activeA)}&market_b=${encodeURIComponent(activeB)}`
      : null;

  const comparison = useApi<CompareResponse>(
    query ? `/prices/compare${query}` : null,
  );

  const copy = commodityCopy(commodity);
  const sameMarket = Boolean(marketA && marketB && marketA === marketB);

  return (
    <div className="flex flex-col gap-space-md">
      <PageHeader
        eyebrow="Two markets, one unit"
        title="Where is it cheaper per kilogram?"
        description="The same commodity in two markets, each at its own latest recorded observation, normalised per kilogram with validated conversions only."
      />

      <CommodityTabs value={commodity} onChange={setCommodity} />

      {catalog.error ? (
        <ErrorPanel error={catalog.error} onRetry={catalog.retry} />
      ) : catalog.loading || !catalog.data ? (
        <div className="flex flex-col gap-2">
          <Skeleton className="h-16 w-full rounded-xl" />
          <Skeleton className="h-16 w-full rounded-xl" />
        </div>
      ) : options.length < 2 ? (
        <EmptyPanel icon="balance" title="Need two markets to compare">
          <p>
            Only {options.length} market{options.length === 1 ? " has" : "s have"} a
            recorded {copy.singular} price. Comparison needs two.
          </p>
        </EmptyPanel>
      ) : (
        <>
          <div className="flex flex-col gap-space-sm">
            <MarketPicker
              markets={options}
              commodityId={commodity}
              value={marketA}
              onChange={setMarketA}
              label="First market"
            />
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => {
                  if (!marketA || !marketB) return;
                  const a = marketA;
                  setMarketA(marketB);
                  setMarketB(a);
                }}
                aria-label="Swap the two markets"
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-surface-container-high px-space-md font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">swap_vert</span>
                Swap
              </button>
            </div>
            <MarketPicker
              markets={options}
              commodityId={commodity}
              value={marketB}
              onChange={setMarketB}
              label="Second market"
            />
          </div>

          {sameMarket ? (
            <InlineNotice tone="warning" title="Pick two different markets">
              The two selections are the same market, so there is nothing to
              compare.
            </InlineNotice>
          ) : null}
        </>
      )}

      {comparison.loading ? (
        <CompareSkeleton />
      ) : comparison.error ? (
        comparison.error.status === 404 ? (
          <EmptyPanel icon="inventory_2" title="Both markets need a price record">
            <p>
              At least one of these markets has no observation for{" "}
              {copy.label.toLowerCase()}. Nothing was estimated to fill the gap.
            </p>
          </EmptyPanel>
        ) : (
          <ErrorPanel error={comparison.error} onRetry={comparison.retry} />
        )
      ) : comparison.data ? (
        <CompareResult data={comparison.data} />
      ) : null}

      <div className="rounded-xl bg-surface-container-low p-space-md">
        <p className="font-label-ui text-label-ui text-on-surface">
          What this comparison is not
        </p>
        <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
          This is a recorded price gap, not an arbitrage estimate. Transport,
          market levies, spoilage, bargaining and the day you actually sell are
          not in these numbers. We do not calculate a profit for you.
        </p>
        <Link
          href="/sources"
          className="mt-space-xs inline-flex items-center gap-1 font-label-ui text-label-ui text-primary underline underline-offset-2"
        >
          How units are validated
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

function CompareSkeleton() {
  return (
    <div className="flex flex-col gap-space-sm" aria-busy="true" aria-label="Comparing markets">
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="mt-space-md h-8 w-40" />
        <Skeleton className="mt-space-sm h-4 w-56" />
        <div className="mt-space-md grid grid-cols-2 gap-space-sm">
          <Skeleton className="h-24 rounded-lg" />
          <Skeleton className="h-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

function SideCard({ side, heading }: { side: CompareSide; heading: string }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg bg-surface-container-low p-space-sm">
      <p className="font-label-ui text-label-ui uppercase tracking-wider text-on-surface-variant">
        {heading}
      </p>
      <p className="truncate font-body-md text-body-md font-semibold text-on-surface">
        {side.market}
      </p>
      <p className="font-label-numeric-md text-label-numeric-md font-semibold text-on-surface">
        {side.pricePerKgMinor !== null
          ? perKg(side.pricePerKgMinor)
          : "per-kg unavailable"}
      </p>
      <p className="font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
        {naira(side.priceMinor)} per {side.unit}
      </p>
      <div className="mt-0.5 flex flex-wrap gap-1">
        <TrustChip label={side.trustLabel} />
        <FreshnessChip state={side.freshness} observedAt={side.observedAt} />
      </div>
      <p className="truncate font-body-sm text-body-sm text-outline">
        {side.source.name}
      </p>
    </div>
  );
}

function CompareResult({ data }: { data: CompareResponse }) {
  const a = data.side_a;
  const b = data.side_b;
  const gap = daysApart(a.observedAt, b.observedAt);

  if (!data.comparable) {
    return (
      <section
        aria-label="Comparison blocked"
        className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_8px_rgba(19,27,46,0.05)]"
      >
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[20px] text-secondary">
            block
          </span>
          <span className="font-label-ui text-label-ui uppercase tracking-wider text-secondary">
            Comparison blocked
          </span>
        </div>
        <h2 className="font-headline-sm text-headline-sm text-on-surface">
          These two prices cannot be compared yet
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {data.blockExplanation ?? "A validated unit conversion is required."}
        </p>
        <div className="grid grid-cols-2 gap-space-sm">
          <SideCard side={a} heading="First market" />
          <SideCard side={b} heading="Second market" />
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Unit status: {a.unit} is {a.unitStatus}; {b.unit} is {b.unitStatus}.
        </p>
      </section>
    );
  }

  const percent = data.percentDifference ?? 0;
  const percentLabel = Math.round(Math.abs(percent) * 10) / 10;
  const direction = percent > 0 ? "more expensive" : percent < 0 ? "cheaper" : "the same price";
  const differenceMinor =
    a.pricePerKgMinor !== null && b.pricePerKgMinor !== null
      ? b.pricePerKgMinor - a.pricePerKgMinor
      : null;

  return (
    <section
      aria-label="Comparison result"
      className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_8px_rgba(19,27,46,0.05)]"
    >
      <div>
        <p className="font-label-ui text-label-ui uppercase tracking-wider text-primary">
          Per-kilogram comparison
        </p>
        <p className="mt-space-xs font-headline-sm text-headline-sm leading-snug text-on-surface">
          {percent === 0 ? (
            <>
              {data.side_b.market} and {data.side_a.market} have the same
              recorded per-kg price.
            </>
          ) : (
            <>
              {data.side_b.market} is{" "}
              <span className="font-label-numeric-md text-label-numeric-md font-bold">
                {percentLabel}%
              </span>{" "}
              {direction} than {data.side_a.market}
              {differenceMinor !== null
                ? ` (${naira(Math.abs(differenceMinor))}/kg ${differenceMinor >= 0 ? "more" : "less"})`
                : ""}
              .
            </>
          )}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-space-sm">
        <SideCard side={a} heading="First market" />
        <SideCard side={b} heading="Second market" />
      </div>

      {gap !== null && gap > 7 ? (
        <InlineNotice tone="warning" title={`Observations are ${gap} days apart`}>
          Part of this gap may be time, not location. The first market was
          observed on {shortDate(a.observedAt)}; the second on{" "}
          {shortDate(b.observedAt)}.
        </InlineNotice>
      ) : (
        <p className="font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
          Observed {shortDate(a.observedAt)} and {shortDate(b.observedAt)} · both
          values converted to per kg with validated units.
        </p>
      )}

      {data.notice ? (
        <InlineNotice tone="warning">
          One or both sides come from the labelled demonstration dataset. The
          arithmetic is real; the prices are synthetic.
        </InlineNotice>
      ) : null}

      <div className="rounded-lg border border-dashed border-outline-variant/70 p-space-sm">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          The percent is calculated as (second − first) ÷ first, on per-kg
          values. It is not annualised and not adjusted for transport.
        </p>
      </div>
    </section>
  );
}
