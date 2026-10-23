import type { Freshness, TrustLabel } from "@/lib/api";
import { freshnessCopy, shortDate, trustCopy } from "@/lib/format";
import { cn } from "./ui";

export function TrustChip({
  label,
  className,
}: {
  label: TrustLabel;
  className?: string;
}) {
  const copy = trustCopy(label);
  return (
    <span
      title={copy.description}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-label-ui text-label-ui",
        copy.className,
        className,
      )}
    >
      <span className="material-symbols-outlined text-[14px]">{copy.icon}</span>
      {copy.label}
    </span>
  );
}

export function FreshnessChip({
  state,
  observedAt,
  className,
}: {
  state: Freshness;
  observedAt?: string;
  className?: string;
}) {
  const copy = freshnessCopy(state);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-label-numeric-sm text-label-numeric-sm",
        copy.className,
        className,
      )}
    >
      <span className="material-symbols-outlined text-[13px]">{copy.icon}</span>
      {copy.label}
      {observedAt ? ` · as at ${shortDate(observedAt)}` : null}
    </span>
  );
}

export function DemoChip({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-secondary-fixed px-2 py-0.5 font-label-ui text-label-ui text-on-secondary-fixed",
        className,
      )}
    >
      <span className="material-symbols-outlined text-[14px]">science</span>
      Demonstration data
    </span>
  );
}
