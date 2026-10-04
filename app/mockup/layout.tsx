import type { Metadata } from "next";
import "@/components/mockups/mockups.css";

// Design explorations: never indexed, never in the sitemap.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MockupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
