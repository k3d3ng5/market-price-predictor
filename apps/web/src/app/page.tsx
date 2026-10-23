"use client";

import Link from "next/link";
import { useState } from "react";
import { CommodityTabs } from "@/components/commodity-tabs";
import { MarketPicker } from "@/components/market-picker";
import { ObservationList } from "@/components/observation-list";
import { PriceHero } from "@/components/price-hero";
import { Sparkline } from "@/components/sparkline";
import {
  EmptyPanel,
  ErrorPanel,
  InlineNotice,
  PageHeader,
  PriceSkeleton,
  SectionTitle,
  Skeleton,
} from "@/components/ui";
import type { HistoryResponse, LatestResponse } from "@/lib/api";
import { commodityCopy } from "@/lib/format";
import { useApi } from "@/lib/use-api";
import {
  useMarketChoice,
  usePersistentState,
} from "@/lib/use-market";

export default function PricesPage() {
  const [commodity, setCommodity] = usePersistentState<string>(
    "tomionce:commodity",
    "tomato",
  );
  const { catalog, options, marketId, setMarketId, selected } =
    useMarketChoice(commodity);
  const [noticeDismissed, setNoticeDismissed] = useState(false);
  const activeMarketId = options.some((market) => market.id === marketId)
    ? marketId
    : "";

  const query =
    activeMarketId !== ""
      ? `?commodity=${encodeURIComponent(commodity)}&market=${encodeURIComponent(activeMarketId)}`
      : null;

  const latest = useApi<LatestResponse>(
    query ? `/prices/latest${query}` : null,
  );
  const history = useApi<HistoryResponse>(
    query ? `/prices/history${query}&limit=260` : null,
  );

  const copy = commodityCopy(commodity);
  const series = history.data?.series ?? [];
  const trendPoints = series
    .filter((point) => point.pricePerKgMinor !== null)
    .slice(-36)
    .map((point) => ({ date: point.observedAt, value: point.pricePerKgMinor! }));

  return (
    <div className="flex flex-col gap-space-md">
      <PageHeader
        eyebrow="Recorded market prices"
        title="What does it cost in the market?"
        description="Pick a commodity and a market. Every figure shows the unit it was reported in, its source, and the date it was observed."
      />

      <CommodityTabs value={commodity} onChange={setCommodity} />

      {catalog.error ? (
        <ErrorPanel error={catalog.error} onRetry={catalog.retry} />
      ) : catalog.loading || !catalog.data ? (
        <div className="flex flex-col gap-2 rounded-xl bg-surface-container-lowest p-space-sm shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-3 w-40" />
        </div>
      ) : options.length === 0 ? (
        <EmptyPanel
          icon="storefront"
          title={`No ${copy.label.toLowerCase()} prices recorded yet`}
          >
          <p>
            No market in the current dataset has a {copy.singular} observation.
            We won’t invent one to fill the screen.
          </p>
        </EmptyPanel>
      ) : (
        <MarketPicker
          markets={options}
          commodityId={commodity}
          value={marketId}
          onChange={setMarketId}
          label="Market"
        />
      )}

      {latest.data?.notice && !noticeDismissed ? (
        <div className="relative">
          <InlineNotice tone="warning" title="Demonstration data on this market">
            These observations come from a labelled synthetic dataset, not a real
            market report. Some details may look plausible — the label is the
            point. Real WFP-backed markets are marked in the picker.{" "}
            <Link href="/sources" className="underline underline-offset-2">
              See sources
            </Link>
            .
          </InlineNotice>
          <button
            type="button"
            aria-label="Dismiss demonstration notice"
            onClick={() => setNoticeDismissed(true)}
            className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full text-on-secondary-fixed/80 hover:bg-secondary-fixed"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      ) : null}

      {!activeMarketId || latest.loading ? (
        <PriceSkeleton />
      ) : latest.error ? (
        latest.error.status === 404 ? (
          <EmptyPanel icon="inventory_2" title="No price recorded for this market">
            <p>
              This pair has no observation yet. Try another market — Tomionce
              never shows a gap as ₦0 or as a live price.
            </p>
          </EmptyPanel>
        ) : (
          <ErrorPanel error={latest.error} onRetry={latest.retry} />
        )
      ) : latest.data ? (
        <>
          <PriceHero
            data={latest.data}
            previous={series.length >= 2 ? series[series.length - 2]! : null}
          />

          <section
            className="flex flex-col gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_8px_rgba(19,27,46,0.04)]"
            aria-label="Price trend"
          >
            <SectionTitle
              title="Price trend"
              hint={
                trendPoints.length > 0
                  ? `${trendPoints.length} recent observations, normalised per kg`
                  : "Per-kg trend"
              }
            />
            {history.loading ? (
              <Skeleton className="h-20 w-full" />
            ) : history.error ? (
              <p className="rounded-lg bg-surface-container-low p-space-sm font-body-sm text-body-sm text-on-surface-variant">
                The trend could not be loaded. The latest price above is still
                the last recorded observation.
              </p>
            ) : (
              <>
                <Sparkline
                  points={trendPoints}
                  label={`${copy.singular} price per kg in ${selected?.display ?? "this market"}`}
                />
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Each dot is a recorded observation joined by a line. Missing
                  months are not filled in, and only validated unit conversions
                  are plotted.
                </p>
              </>
            )}
          </section>

          <ObservationList series={series} />

          <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-low p-space-md">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">
                school
              </span>
              <p className="font-label-ui text-label-ui text-on-surface">
                First time here?
              </p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              The four-step field guide explains the trust chips, the dates and
              why some forecasts are withheld.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("tomionce:open-guide"))}
              className="inline-flex min-h-[44px] w-fit items-center gap-1.5 rounded-lg bg-primary px-space-lg font-label-ui text-label-ui text-on-primary"
            >
              Read the field guide
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
