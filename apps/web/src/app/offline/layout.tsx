import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Offline",
  description: "Tomionce is offline. Previously synced prices remain available.",
};

export default function OfflineLayout({ children }: { children: ReactNode }) {
  return children;
}
