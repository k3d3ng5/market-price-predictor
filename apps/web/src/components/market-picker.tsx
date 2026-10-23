"use client";

import { useEffect, useMemo, useState } from "react";
import type { CatalogMarket } from "@/lib/api";
import { shortDate } from "@/lib/format";
import { coverageFor } from "@/lib/use-market";
import { cn } from "./ui";

export function MarketPicker({
  markets,
  commodityId,
  value,
  onChange,
  label = "Market",
}: {
  markets: CatalogMarket[];
  commodityId: string;
  value: string;
  onChange: (id: string) => void;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const selected = markets.find((m) => m.id === value) ?? null;
  const selectedCoverage = selected ? coverageFor(selected, commodityId) : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return markets;
    return markets.filter((m) => {
      const state = m.state.toLowerCase();
      return (
        m.name.toLowerCase().includes(needle) ||
        m.display.toLowerCase().includes(needle) ||
        state.includes(needle)
      );
    });
  }, [markets, query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-sm text-left shadow-[0_1px_8px_rgba(19,27,46,0.04)] transition-colors hover:bg-surface"
        aria-haspopup="dialog"
      >
        <span className="flex min-w-0 items-center gap-space-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary">
            <span className="material-symbols-outlined text-[18px]">storefront</span>
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-body-sm text-body-sm leading-none text-on-surface-variant">
              {label}
            </span>
            <span className="mt-0.5 flex items-center gap-1">
              <span className="truncate font-headline-sm text-headline-sm text-on-surface">
                {selected ? selected.display : "Choose a market"}
              </span>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                expand_more
              </span>
            </span>
            {selected && selectedCoverage ? (
              <span className="mt-0.5 truncate font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
                {selectedCoverage.observations} observations · latest{" "}
                {shortDate(selectedCoverage.latestObservedAt)}
                {selectedCoverage.dataKind === "demo" ? " · demonstration" : ""}
              </span>
            ) : null}
          </span>
        </span>
        <span className="shrink-0 rounded-lg bg-surface-container px-space-md py-1.5 font-label-ui text-label-ui text-primary">
          Change
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-inverse-surface/40 backdrop-blur-sm sm:items-center sm:p-space-lg"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Choose a ${label.toLowerCase()}`}
            className="sheet-enter flex max-h-[85dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-surface-container-lowest shadow-[0_16px_48px_rgba(19,27,46,0.24)] sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-space-sm border-b border-outline-variant/40 p-space-md">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Choose a {label.toLowerCase()}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {markets.length} markets with a recorded{" "}
                  {commodityId === "onion" ? "onion" : "tomato"} price
                </p>
              </div>
              <button
                type="button"
                aria-label="Close market picker"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-space-md pb-space-sm">
              <label className="flex items-center gap-space-sm rounded-lg bg-surface-container-low px-space-sm">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  search
                </span>
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search market or state"
                  className="h-11 w-full bg-transparent font-body-md text-body-md text-on-surface outline-none placeholder:text-on-surface-variant/70"
                />
              </label>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-space-sm pb-space-md">
              {filtered.length === 0 ? (
                <p className="p-space-md text-center font-body-sm text-body-sm text-on-surface-variant">
                  No market matches “{query}”.
                </p>
              ) : (
                <ul className="flex flex-col">
                  {filtered.map((market) => {
                    const coverage = coverageFor(market, commodityId);
                    const active = market.id === value;
                    return (
                      <li key={market.id}>
                        <button
                          type="button"
                          onClick={() => {
                            onChange(market.id);
                            setOpen(false);
                            setQuery("");
                          }}
                          className={cn(
                            "flex w-full items-center justify-between gap-space-sm rounded-lg p-space-sm text-left transition-colors",
                            active
                              ? "bg-primary-fixed/40"
                              : "hover:bg-surface-container-low",
                          )}
                        >
                          <div className="flex min-w-0 items-center gap-space-sm">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-container font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
                              {market.display.match(/\(([A-Z]{2})\)$/)?.[1] ??
                                market.state.slice(0, 2).toUpperCase()}
                            </span>
                            <span className="flex min-w-0 flex-col">
                              <span className="truncate font-body-md text-body-md font-semibold text-on-surface">
                                {market.display}
                              </span>
                              <span className="truncate font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
                                {market.state} · {coverage?.observations ?? 0} obs · latest{" "}
                                {shortDate(coverage?.latestObservedAt)}
                              </span>
                            </span>
                          </div>
                          <span className="flex shrink-0 items-center gap-1">
                            {coverage?.dataKind === "demo" ? (
                              <span className="rounded-full bg-secondary-fixed px-1.5 py-0.5 font-label-numeric-sm text-[10px] text-on-secondary-fixed">
                                DEMO
                              </span>
                            ) : null}
                            {active ? (
                              <span className="material-symbols-outlined text-[20px] text-primary">
                                check_circle
                              </span>
                            ) : null}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="border-t border-outline-variant/40 bg-surface-container-low px-space-md py-space-sm">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Only markets with a recorded price are listed. We don’t invent
                markets to fill the gap.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
