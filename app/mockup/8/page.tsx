import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import Mockup from "@/components/mockups/m08";

const f0 = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-display", display: "swap" });
const f1 = Manrope({ subsets: ["latin"],  variable: "--f-body", display: "swap" });

export const metadata: Metadata = { title: "Mockup 08 · Discover" };

export default function Page() {
  return (
    <div className={[f0.variable, f1.variable].join(" ")}>
      <Mockup />
    </div>
  );
}
