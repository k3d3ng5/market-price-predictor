"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./ui";

const TABS = [
  { href: "/", label: "Prices", icon: "payments" },
  { href: "/forecast", label: "Forecast", icon: "trending_up" },
  { href: "/compare", label: "Compare", icon: "balance" },
  { href: "/sources", label: "Sources", icon: "verified" },
] as const;

export function BottomNav() {
  const pathname = usePathname() ?? "/";

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 bg-surface/90 pb-safe shadow-[0_-1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-2xl items-center justify-around px-gutter">
        {TABS.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname.startsWith(`${tab.href}/`);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-[44px] min-w-[44px] flex-col items-center justify-center px-space-xs transition-colors",
                active
                  ? "font-semibold text-primary"
                  : "text-on-surface-variant hover:text-on-surface",
              )}
            >
              <span className="material-symbols-outlined text-[22px]" data-filled={active}>
                {tab.icon}
              </span>
              <span className="mt-0.5 font-label-ui text-label-ui">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
