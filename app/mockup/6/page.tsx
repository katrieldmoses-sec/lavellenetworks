import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Mockup from "@/components/mockups/m06";

const f0 = Instrument_Sans({ subsets: ["latin"], axes: ["wdth"], variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 06 · Solara" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
