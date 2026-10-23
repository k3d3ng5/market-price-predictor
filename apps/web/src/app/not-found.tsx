import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-space-md py-space-xl text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container text-on-surface-variant">
        <span className="material-symbols-outlined text-[32px]">search_off</span>
      </span>
      <div>
        <h1 className="font-headline-md text-headline-md text-on-surface">
          That page doesn’t exist
        </h1>
        <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
          Prices, forecasts and comparisons live in the four tabs below. No
          invented content was served in the meantime.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-primary px-space-lg font-label-ui text-label-ui text-on-primary"
      >
        <span className="material-symbols-outlined text-[18px]">payments</span>
        Back to prices
      </Link>
    </div>
  );
}
