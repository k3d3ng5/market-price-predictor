"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { GuideResponse, GuideStep } from "@/lib/api";
import { apiGet } from "@/lib/api";
import { cn, Skeleton } from "./ui";

const SEEN_KEY = "tomionce_guide_seen";
const CACHE_KEY = "tomionce:guide-steps";

const STEP_ICONS: Record<string, string> = {
  receipts: "receipt_long",
  chips: "verified",
  gate: "science",
  stale: "schedule",
};

export function GuideOverlay() {
  const [steps, setSteps] = useState<GuideStep[] | null>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const autoChecked = useRef(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    apiGet<GuideResponse>("/guide")
      .then((response) => {
        if (cancelled) return;
        setSteps(response.steps);
        try {
          window.localStorage.setItem(CACHE_KEY, JSON.stringify(response.steps));
        } catch {
          // cache is a convenience, not a requirement
        }
      })
      .catch(() => {
        if (cancelled) return;
        try {
          const cached = window.localStorage.getItem(CACHE_KEY);
          if (cached) {
            setSteps(JSON.parse(cached) as GuideStep[]);
            return;
          }
        } catch {
          // fall through
        }
        setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  useEffect(() => {
    if (!steps || autoChecked.current) return;
    autoChecked.current = true;
    try {
      if (!window.localStorage.getItem(SEEN_KEY)) setOpen(true);
    } catch {
      // storage blocked — don't nag
    }
  }, [steps]);

  useEffect(() => {
    const onOpen = () => {
      setIndex(0);
      setOpen(true);
    };
    window.addEventListener("tomionce:open-guide", onOpen);
    return () => window.removeEventListener("tomionce:open-guide", onOpen);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(SEEN_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  if (!open) return null;

  const step = steps?.[index] ?? null;
  const isLast = steps !== null && index === steps.length - 1;
  const total = steps?.length ?? 4;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-inverse-surface/50 backdrop-blur-sm sm:items-center sm:p-space-lg"
      role="presentation"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="How to use Tomionce"
        className="sheet-enter flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-surface-container-lowest shadow-[0_16px_48px_rgba(19,27,46,0.28)] sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-space-lg pt-space-md">
          <span className="inline-flex items-center gap-1.5 font-label-ui text-label-ui uppercase tracking-[0.14em] text-primary">
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            Field guide
          </span>
          <button
            type="button"
            aria-label="Close guide"
            onClick={close}
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 px-space-lg pt-space-sm">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                i <= index ? "bg-primary" : "bg-surface-container-high",
              )}
            />
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-space-lg py-space-lg">
          {failed ? (
            <div className="flex flex-col items-start gap-space-sm">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                The guide couldn’t load
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                It is served by the price service and cached after the first
                visit. Check your connection and try again — we won’t show a
                half-remembered version.
              </p>
              <button
                type="button"
                onClick={() => setAttempt((n) => n + 1)}
                className="mt-space-xs inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-primary px-4 font-label-ui text-label-ui text-on-primary"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                Try again
              </button>
            </div>
          ) : step ? (
            <div className="flex flex-col gap-space-md">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  {STEP_ICONS[step.key] ?? "info"}
                </span>
              </span>
              <div>
                <p className="font-label-numeric-sm text-label-numeric-sm uppercase tracking-wider text-on-surface-variant">
                  Step {index + 1} of {total}
                </p>
                <h2 className="mt-1 font-headline-md text-headline-md text-on-surface">
                  {step.title}
                </h2>
              </div>
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                {step.body}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-space-md" aria-busy="true">
              <Skeleton className="h-14 w-14 rounded-2xl" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-space-sm border-t border-outline-variant/40 bg-surface-container-low px-space-lg py-space-md">
          <button
            type="button"
            onClick={() => (index === 0 ? close() : setIndex((i) => i - 1))}
            className="min-h-[44px] rounded-lg px-space-sm font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface"
          >
            {index === 0 ? "Skip" : "Back"}
          </button>
          <button
            type="button"
            disabled={!steps}
            onClick={() => {
              if (isLast || !steps) close();
              else setIndex((i) => Math.min(i + 1, total - 1));
            }}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-primary px-space-lg font-label-ui text-label-ui text-on-primary transition-colors hover:bg-primary-container disabled:opacity-50"
          >
            {isLast ? "Start checking prices" : "Next"}
            <span className="material-symbols-outlined text-[18px]">
              {isLast ? "check" : "arrow_forward"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
