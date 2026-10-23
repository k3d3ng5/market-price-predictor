"use client";

import type { ReactNode } from "react";
import { ApiError } from "@/lib/api";

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/* --------------------------------- panels -------------------------------- */

const NOTICE_TONES = {
  info: {
    wrapper: "bg-surface-container text-on-surface",
    icon: "info",
    iconClass: "text-on-surface-variant",
  },
  success: {
    wrapper: "bg-primary-fixed/50 text-on-primary-fixed",
    icon: "check_circle",
    iconClass: "text-primary",
  },
  warning: {
    wrapper: "bg-secondary-fixed/60 text-on-secondary-fixed",
    icon: "info",
    iconClass: "text-secondary",
  },
  danger: {
    wrapper: "bg-error-container text-on-error-container",
    icon: "error",
    iconClass: "text-error",
  },
} as const;

export function InlineNotice({
  tone = "info",
  title,
  children,
  action,
  className,
}: {
  tone?: keyof typeof NOTICE_TONES;
  title?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  const t = NOTICE_TONES[tone];
  return (
    <div
      className={cn(
        "flex items-start gap-space-sm rounded-lg p-space-md",
        t.wrapper,
        className,
      )}
    >
      <span className={cn("material-symbols-outlined mt-0.5 shrink-0 text-[18px]", t.iconClass)}>
        {t.icon}
      </span>
      <div className="min-w-0 flex-1">
        {title ? <p className="font-label-ui text-label-ui">{title}</p> : null}
        <div className="font-body-sm text-body-sm leading-relaxed opacity-90">{children}</div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

/* -------------------------------- headings ------------------------------- */

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <header className="flex flex-col gap-1.5">
      {eyebrow ? (
        <p className="font-label-ui text-label-ui uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-headline-md text-headline-md text-on-surface">{title}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
    </header>
  );
}

export function SectionTitle({
  title,
  hint,
  action,
}: {
  title: string;
  hint?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-space-sm px-1">
      <div className="min-w-0">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">{title}</h2>
        {hint ? (
          <p className="font-body-sm text-body-sm text-on-surface-variant">{hint}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

/* -------------------------------- skeletons ------------------------------- */

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded bg-surface-variant",
        className,
      )}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-surface-bright/80 to-transparent animate-shimmer" />
    </div>
  );
}

export function PriceSkeleton() {
  return (
    <div className="flex flex-col gap-space-md" aria-busy="true" aria-label="Loading price">
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <div className="flex items-center justify-between">
          <Skeleton className="h-3.5 w-44" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
        <div className="mt-space-md flex flex-col gap-2">
          <Skeleton className="h-10 w-56" />
          <Skeleton className="h-3 w-32" />
        </div>
        <div className="mt-space-md flex gap-2">
          <Skeleton className="h-5 w-32 rounded-full" />
          <Skeleton className="h-5 w-40 rounded-full" />
        </div>
        <div className="mt-space-md">
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
        <div className="mt-space-md flex justify-between">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="mt-space-md h-16 w-full" />
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-[0_1px_8px_rgba(19,27,46,0.04)]"
        >
          <div className="flex items-center gap-space-sm">
            <Skeleton className="h-8 w-8" />
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3.5 w-32" />
              <Skeleton className="h-2.5 w-20" />
            </div>
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}

/* --------------------------------- states -------------------------------- */

function errorCopy(error: ApiError): { title: string; detail: string } {
  if (error.status === 0) {
    return {
      title: "Can't reach the price service",
      detail:
        "Your device may be offline, or the API is not running. If you have used Tomionce before, cached prices may still be readable.",
    };
  }
  if (error.status === 404) {
    return {
      title: "Nothing recorded here yet",
      detail: "There is no observation for this commodity and market.",
    };
  }
  if (error.status === 409) {
    return {
      title: "Not enough history yet",
      detail: "Tomionce will not publish a forecast without enough held-out data.",
    };
  }
  return {
    title: "Something went wrong",
    detail: `The price service answered with ${error.code.replaceAll("_", " ")}. Nothing was guessed or filled in.`,
  };
}

export function ErrorPanel({
  error,
  onRetry,
  className,
}: {
  error: ApiError;
  onRetry?: () => void;
  className?: string;
}) {
  const copy = errorCopy(error);
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center gap-space-sm rounded-xl bg-surface-container-lowest p-space-lg text-center shadow-[0_1px_8px_rgba(19,27,46,0.04)]",
        className,
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-error-container text-error">
        <span className="material-symbols-outlined text-[24px]">
          {error.status === 0 ? "cloud_off" : "error"}
        </span>
      </span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">{copy.title}</h2>
      <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">
        {copy.detail}
      </p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-space-xs inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-primary px-4 font-label-ui text-label-ui text-on-primary transition-colors hover:bg-primary-container"
        >
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          Try again
        </button>
      ) : null}
    </div>
  );
}

export function EmptyPanel({
  icon = "inventory_2",
  title,
  children,
  action,
}: {
  icon?: string;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-space-sm rounded-xl bg-surface-container-lowest p-space-lg text-center shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant">
        <span className="material-symbols-outlined text-[24px]">{icon}</span>
      </span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">{title}</h2>
      {children ? (
        <div className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">
          {children}
        </div>
      ) : null}
      {action}
    </div>
  );
}
