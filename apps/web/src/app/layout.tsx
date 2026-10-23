import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";
import { ConnectivityBanner } from "@/components/connectivity-banner";
import { GuideOverlay } from "@/components/guide-overlay";
import { InstallPrompt } from "@/components/install-prompt";
import { ServiceWorkerRegistrar } from "@/components/service-worker";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Tomionce — tomato & onion prices for Nigeria",
    template: "%s · Tomionce",
  },
  description:
    "Recorded tomato and onion prices for Nigerian markets, in the unit they were reported, with trust labels and forecasts that only publish after beating a naive baseline.",
  applicationName: "Tomionce",
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "Tomionce",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#00592b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-surface font-body-md text-body-md text-on-surface">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[120] focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:font-label-ui focus:text-label-ui focus:text-on-primary"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main
          id="main"
          className="mx-auto w-full max-w-2xl flex-1 px-margin pb-nav pt-header"
        >
          {children}
        </main>
        <ConnectivityBanner />
        <InstallPrompt />
        <BottomNav />
        <GuideOverlay />
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
