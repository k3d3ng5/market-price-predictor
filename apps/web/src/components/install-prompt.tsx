"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const DISMISS_KEY = "tomionce:install-dismissed";

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.sessionStorage.getItem(DISMISS_KEY) === "1"
    ) {
      return;
    }

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
      window.setTimeout(() => setVisible(true), 6000);
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (!visible || !deferred) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  };

  const install = async () => {
    try {
      await deferred.prompt();
      await deferred.userChoice;
    } catch {
      // the browser decides; nothing to report
    }
    dismiss();
  };

  return (
    <aside
      aria-label="Install Tomionce"
      className="fixed inset-x-0 bottom-16 z-40 px-margin pb-2"
    >
      <div className="sheet-enter mx-auto flex max-w-lg flex-col gap-space-sm rounded-2xl bg-surface-container-lowest p-space-md shadow-[0_12px_32px_rgba(19,27,46,0.16)]">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-space-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]">potted_plant</span>
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="truncate font-body-lg text-body-lg font-bold tracking-tight text-on-surface">
                  Install Tomionce
                </span>
                <span className="rounded bg-primary-fixed px-1.5 py-0.5 font-label-numeric-sm text-[10px] font-bold uppercase text-on-primary-fixed">
                  PWA
                </span>
              </div>
              <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
                Offline access to prices you’ve already synced
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close install prompt"
            onClick={dismiss}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div className="flex items-center justify-end gap-space-xs">
          <button
            type="button"
            onClick={dismiss}
            className="min-h-[40px] rounded-lg px-space-sm font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface"
          >
            Not now
          </button>
          <button
            type="button"
            onClick={install}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-primary px-space-lg font-label-ui text-label-ui text-on-primary shadow-sm transition-transform active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            Install
          </button>
        </div>
      </div>
    </aside>
  );
}
