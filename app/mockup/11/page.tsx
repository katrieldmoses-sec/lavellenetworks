import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Mockup from "@/components/mockups/m11";

const f0 = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700", "800", "900"], variable: "--f-display", display: "swap" });
const f1 = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body", display: "swap" });

export const metadata: Metadata = { title: "Mockup 11 · Index" };

export default function Page() {
  return (
    <div className={[f0.variable, f1.variable].join(" ")}>
      <Mockup />
    </div>
  );
}
