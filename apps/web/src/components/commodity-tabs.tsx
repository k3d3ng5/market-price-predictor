"use client";

import { commodityCopy } from "@/lib/format";
import { cn } from "./ui";

const COMMODITIES = ["tomato", "onion"] as const;

export function CommodityTabs({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label="Commodity"
      className={cn(
        "flex w-full items-center gap-1 rounded-full bg-surface-container-high p-1",
        className,
      )}
    >
      {COMMODITIES.map((id) => {
        const copy = commodityCopy(id);
        const active = id === value;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(id)}
            className={cn(
              "flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-full px-space-md font-label-ui text-label-ui transition-colors",
              active
                ? "bg-primary text-on-primary shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface",
            )}
          >
            <span className="material-symbols-outlined text-[16px]" data-filled={active}>
              {copy.icon}
            </span>
            {copy.label}
          </button>
        );
      })}
    </div>
  );
}
