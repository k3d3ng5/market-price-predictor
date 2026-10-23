import Link from "next/link";
import { GuideButton } from "./guide-button";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/85 pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-margin">
        <Link href="/" className="flex min-w-0 items-center gap-space-sm">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-container">
            <span className="material-symbols-outlined text-[20px] text-on-primary-container">
              potted_plant
            </span>
          </span>
          <span className="flex min-w-0 flex-col justify-center">
            <span className="truncate font-headline-sm text-headline-sm leading-none tracking-tight text-on-surface">
              Tomionce
            </span>
            <span className="truncate font-label-numeric-sm text-label-numeric-sm leading-none text-on-surface-variant">
              Tomato &amp; onion prices
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-space-xs">
          <GuideButton />
          <Link
            href="/sources"
            aria-label="Data sources and trust labels"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[20px]">verified_user</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
