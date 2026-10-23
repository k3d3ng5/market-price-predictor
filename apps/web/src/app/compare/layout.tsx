import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Compare recorded tomato or onion prices in two Nigerian markets, normalised per kilogram with validated unit conversions.",
};

export default function CompareLayout({ children }: { children: ReactNode }) {
  return children;
}
