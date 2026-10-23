import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Forecast",
  description:
    "Rolling-origin backtested tomato and onion price forecasts for Nigerian markets. A range is published only when the model beats a naive baseline.",
};

export default function ForecastLayout({ children }: { children: ReactNode }) {
  return children;
}
