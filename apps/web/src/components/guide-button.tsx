"use client";

export function GuideButton() {
  return (
    <button
      type="button"
      aria-label="How to use Tomionce"
      onClick={() => window.dispatchEvent(new Event("tomionce:open-guide"))}
      className="flex min-h-[44px] min-w-[44px] items-center justify-center text-on-surface-variant hover:text-on-surface"
    >
      <span className="material-symbols-outlined text-[20px]">help_outline</span>
    </button>
  );
}
