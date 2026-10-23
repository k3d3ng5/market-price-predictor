import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Licences, coverage counts, trust labels and honesty rules behind every Tomionce price.",
};

export default function SourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
