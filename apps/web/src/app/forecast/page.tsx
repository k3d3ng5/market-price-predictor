"use client";

import Link from "next/link";
import { useState } from "react";
import { CommodityTabs } from "@/components/commodity-tabs";
import { MarketPicker } from "@/components/market-picker";
import {
  EmptyPanel,
  ErrorPanel,
  InlineNotice,
  PageHeader,
  SectionTitle,
  Skeleton,
  cn,
} from "@/components/ui";
import type {
  BacktestResponse,
  BacktestResult,
  EligibilityResponse,
} from "@/lib/api";
import { naira, perKg, modelLabel, shortDate, daysSince } from "@/lib/format";
import { useApi } from "@/lib/use-api";
import { useMarketChoice, usePersistentState } from "@/lib/use-market";

const HORIZONS = [1, 2, 4, 8];

export default function ForecastPage() {
  const [commodity, setCommodity] = usePersistentState<string>(
    "tomionce:commodity",
    "tomato",
  );
  const { catalog, options, marketId, setMarketId } = useMarketChoice(commodity, {
    storageKey: "tomionce:forecast-market",
    prefer: "depth",
  });
  const [horizon, setHorizon] = useState(4);
  const activeMarketId = options.some((market) => market.id === marketId)
    ? marketId
    : "";

  const query =
    activeMarketId !== ""
      ? `?commodity=${encodeURIComponent(commodity)}&market=${encodeURIComponent(activeMarketId)}`
      : null;

  const eligibility = useApi<EligibilityResponse>(
    query ? `/forecast/eligibility${query}` : null,
  );
  const backtest = useApi<BacktestResponse>(
    query ? `/forecast/backtest${query}&horizon=${horizon}` : null,
  );

  const notice = backtest.data?.dataNotice ?? eligibility.data?.dataNotice;

  return (
    <div className="flex flex-col gap-space-md">
      <PageHeader
        eyebrow="The historical brain"
        title="A forecast has to earn publication"
        description="Before any range is shown, the model is scored against history — and against a do-nothing baseline. If it loses, the screen says so."
      />

      <CommodityTabs value={commodity} onChange={setCommodity} />

      {catalog.error ? (
        <ErrorPanel error={catalog.error} onRetry={catalog.retry} />
      ) : catalog.loading || !catalog.data ? (
        <Skeleton className="h-16 w-full rounded-xl" />
      ) : options.length === 0 ? (
        <EmptyPanel icon="trending_down" title="No history to backtest">
          <p>No market has a recorded price for this commodity yet.</p>
        </EmptyPanel>
      ) : (
        <MarketPicker
          markets={options}
          commodityId={commodity}
          value={marketId}
          onChange={setMarketId}
          label="Forecast market"
        />
      )}

      <section className="rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <div className="flex items-center justify-between gap-space-sm">
          <div>
            <p className="font-label-ui text-label-ui text-on-surface">
              Backtest horizon
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Observations ahead, not days. WFP reports roughly monthly.
            </p>
          </div>
          <div
            role="group"
            aria-label="Backtest horizon"
            className="flex shrink-0 items-center gap-1 rounded-full bg-surface-container-high p-1"
          >
            {HORIZONS.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={horizon === value}
                onClick={() => setHorizon(value)}
                className={cn(
                  "min-h-[36px] min-w-[36px] rounded-full px-2 font-label-numeric-sm text-label-numeric-sm transition-colors",
                  horizon === value
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-on-surface",
                )}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </section>

      {notice ? (
        <InlineNotice tone="warning" title="Demonstration data on this market">
          This backtest runs on the labelled synthetic dataset, not on a real
          market series. The method is real; the prices are not.
        </InlineNotice>
      ) : null}

      {eligibility.data ? (
        eligibility.data.eligible ? (
          <div className="flex items-center gap-1.5 px-1 font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[15px] text-primary">
              check_circle
            </span>
            {eligibility.data.detail}
          </div>
        ) : (
          <InlineNotice tone="warning" title="This pair fails the freshness check">
            {eligibility.data.detail}. The backtest below runs on the recorded
            history — it cannot make that history newer. Check the end date
            before trusting a range.
          </InlineNotice>
        )
      ) : null}

      {!activeMarketId || backtest.loading ? (
        <ForecastSkeleton />
      ) : backtest.error ? (
        backtest.error.status === 409 ? (
          <EmptyPanel icon="hourglass_empty" title="Not available yet">
            <p>
              {typeof backtest.error.body === "object" && backtest.error.body
                ? ((backtest.error.body as { detail?: string }).detail ??
                  "This pair does not have enough history for a meaningful backtest.")
                : "This pair does not have enough history for a meaningful backtest."}
            </p>
            <p className="mt-2">
              We don’t remove the gate for a demo — a forecast without evidence
              is just a guess with a chart.
            </p>
          </EmptyPanel>
        ) : (
          <ErrorPanel error={backtest.error} onRetry={backtest.retry} />
        )
      ) : backtest.data ? (
        <>
          {backtest.data.predictiveGate.publishable ? (
            <PublishedForecast data={backtest.data} />
          ) : (
            <BlockedForecast data={backtest.data} />
          )}

          <BacktestTable backtest={backtest.data.backtest} />

          <section className="rounded-xl bg-surface-container-low p-space-md">
            <p className="font-label-ui text-label-ui text-on-surface">How to read this</p>
            <ul className="mt-space-xs flex list-disc flex-col gap-1 pl-4 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                MAPE is the average miss on held-out points: lower is better.
              </li>
              <li>
                The naive baseline simply repeats the last price. A model that
                cannot beat it is not published.
              </li>
              <li>
                The published range is the central forecast ± twice the
                backtest residual spread (at least 2% of the price).
              </li>
              <li>
                A range is not a promise. Prices also move for reasons this
                history cannot see — fuel, security, harvest timing.
              </li>
            </ul>
          </section>

          <div className="flex flex-wrap items-center gap-space-sm">
            <Link
              href="/sources"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-surface-container-lowest px-space-lg font-label-ui text-label-ui text-primary shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              See the data behind this
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("tomionce:open-guide"))}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-space-md font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-[18px]">help</span>
              Why forecasts are withheld
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

function ForecastSkeleton() {
  return (
    <div className="flex flex-col gap-space-md" aria-busy="true" aria-label="Running backtest">
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="mt-space-md h-8 w-56" />
        <Skeleton className="mt-space-sm h-4 w-40" />
        <Skeleton className="mt-space-md h-16 w-full rounded-lg" />
      </div>
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <Skeleton className="h-4 w-32" />
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="mt-2 h-9 w-full" />
        ))}
      </div>
      <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
        Running the rolling-origin backtest on recorded observations…
      </p>
    </div>
  );
}

function PublishedForecast({ data }: { data: BacktestResponse }) {
  const gate = data.predictiveGate;
  const age = daysSince(data.lastObservedAt);
  return (
    <section
      aria-label="Published forecast"
      className="flex flex-col gap-space-md overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_1px_8px_rgba(19,27,46,0.05)]"
    >
      <div className="flex items-center justify-between gap-space-sm bg-primary px-space-lg py-space-md text-on-primary">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[20px]">verified</span>
          <span className="font-label-ui text-label-ui uppercase tracking-wider">
            Gate passed
          </span>
        </div>
        <span className="font-label-numeric-sm text-label-numeric-sm text-primary-fixed-dim">
          {data.marketName}
        </span>
      </div>

      <div className="flex flex-col gap-space-sm px-space-lg pb-space-lg">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Expected next price, per kg of {data.commodityName.toLowerCase()}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="font-label-numeric-lg text-[34px] font-bold leading-none tracking-tight text-on-surface">
            {naira(gate.centralPerKgMinor)}
          </span>
          <span className="font-body-md text-body-md text-on-surface-variant">/kg</span>
        </div>

        <div className="rounded-lg bg-surface-container-low px-space-sm py-2 font-label-numeric-md text-label-numeric-md text-on-surface">
          Range: {perKg(gate.lowPerKgMinor)} – {perKg(gate.highPerKgMinor)}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-high px-2 py-0.5 font-label-ui text-label-ui text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px]">functions</span>
            {modelLabel(gate.model ?? "")}
          </span>
          <span className="font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
            Backtest horizon: {data.horizonSteps} observations
          </span>
        </div>

        {gate.reliability ? (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {gate.reliability}.
          </p>
        ) : null}

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          History ends {shortDate(data.lastObservedAt)}
          {age !== null ? ` (${age} day${age === 1 ? "" : "s"} old)` : ""}. This is
          the expected price at the next reporting period, not a quote for today.
        </p>

        <p className="rounded-lg border border-dashed border-outline-variant/70 p-space-sm font-body-sm text-body-sm text-on-surface-variant">
          This range is a statistical expectation from recorded history. It is
          not a guaranteed market price, and it is not advice to buy or sell.
        </p>
      </div>
    </section>
  );
}

function BlockedForecast({ data }: { data: BacktestResponse }) {
  const gate = data.predictiveGate;
  const baseline = data.backtest.byModel.find(
    (model) => model.model === data.backtest.bestBaseline,
  );
  const candidate = data.backtest.bestModel
    ? data.backtest.byModel.find((model) => model.model === data.backtest.bestModel)
    : null;

  return (
    <section
      aria-label="Forecast withheld"
      className="flex flex-col gap-space-md overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_1px_8px_rgba(19,27,46,0.05)]"
    >
      <div className="flex items-center justify-between gap-space-sm bg-secondary-fixed px-space-lg py-space-md text-on-secondary-fixed">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[20px]">block</span>
          <span className="font-label-ui text-label-ui uppercase tracking-wider">
            Not published
          </span>
        </div>
        <span className="font-label-numeric-sm text-label-numeric-sm">
          {data.marketName}
        </span>
      </div>

      <div className="flex flex-col gap-space-sm px-space-lg pb-space-lg">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">
          Not available yet —{" "}
          {gate.reasonCode === "does_not_beat_baseline"
            ? "the model did not beat the naive baseline"
            : "there is not enough backtest evidence"}
          .
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          We could still print a number. We choose not to. Showing a forecast
          that loses to “repeat the last price” would make the app look smarter
          while making your decision worse.
        </p>
        <p className="font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
          History ends {shortDate(data.lastObservedAt)} · {data.seriesLength}{" "}
          observations in the series
        </p>

        <dl className="grid grid-cols-2 gap-space-sm pt-space-xs">
          <div className="rounded-lg bg-surface-container-low p-space-sm">
            <dt className="font-label-ui text-label-ui text-on-surface-variant">
              Best baseline
            </dt>
            <dd className="mt-1 font-label-numeric-md text-label-numeric-md text-on-surface">
              {baseline ? `${baseline.mapePercent}% MAPE` : "—"}
            </dd>
            <dd className="font-body-sm text-body-sm text-on-surface-variant">
              {baseline ? modelLabel(baseline.model) : "—"}
            </dd>
          </div>
          <div className="rounded-lg bg-surface-container-low p-space-sm">
            <dt className="font-label-ui text-label-ui text-on-surface-variant">
              Best candidate
            </dt>
            <dd className="mt-1 font-label-numeric-md text-label-numeric-md text-on-surface">
              {candidate ? `${candidate.mapePercent}% MAPE` : "—"}
            </dd>
            <dd className="font-body-sm text-body-sm text-on-surface-variant">
              {candidate ? modelLabel(candidate.model) : "No candidate scored"}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function BacktestTable({ backtest }: { backtest: BacktestResult }) {
  return (
    <section className="flex flex-col gap-space-sm" aria-label="Backtest results">
      <SectionTitle
        title="Held-out scorecard"
        hint={`${backtest.origins} rolling origins · ${backtest.horizon}-observation horizon · ${backtest.seriesLength} points in the series`}
      />
      <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-surface-container-low font-label-ui text-label-ui text-on-surface-variant">
              <th scope="col" className="px-space-sm py-2 font-semibold">
                Model
              </th>
              <th scope="col" className="px-space-sm py-2 text-right font-semibold">
                MAPE
              </th>
              <th scope="col" className="px-space-sm py-2 text-right font-semibold">
                MAE/kg
              </th>
            </tr>
          </thead>
          <tbody>
            {backtest.byModel.map((model) => {
              const isBaseline = model.model === backtest.bestBaseline;
              const isCandidate = model.model === backtest.bestModel;
              const won =
                backtest.beatsBaseline && isCandidate && backtest.bestModel !== undefined;
              return (
                <tr
                  key={model.model}
                  className={cn(
                    "border-t border-outline-variant/30 align-top",
                    won ? "bg-primary-fixed/25" : "",
                  )}
                >
                  <td className="px-space-sm py-2">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">
                      {modelLabel(model.model)}
                    </span>
                    <div className="mt-0.5 flex flex-wrap gap-1">
                      {isBaseline ? (
                        <span className="rounded bg-surface-container-high px-1.5 py-0.5 font-label-numeric-sm text-[10px] text-on-surface-variant">
                          BEST BASELINE
                        </span>
                      ) : null}
                      {isCandidate ? (
                        <span className="rounded bg-surface-container-high px-1.5 py-0.5 font-label-numeric-sm text-[10px] text-on-surface-variant">
                          CANDIDATE
                        </span>
                      ) : null}
                      {won ? (
                        <span className="rounded bg-primary px-1.5 py-0.5 font-label-numeric-sm text-[10px] text-on-primary">
                          PUBLISHED
                        </span>
                      ) : null}
                    </div>
                  </td>
                  <td className="px-space-sm py-2 text-right font-label-numeric-md text-label-numeric-md text-on-surface">
                    {model.mapePercent}%
                  </td>
                  <td className="px-space-sm py-2 text-right font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
                    {naira(model.maeKobo)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="px-1 font-body-sm text-body-sm text-on-surface-variant">
        Lower is better. Scores are computed on points the model never trained
        on. A blank or withheld forecast is a result, not a failure.
      </p>
    </section>
  );
}
