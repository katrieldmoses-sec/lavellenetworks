import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Mockup from "@/components/mockups/m19";

const f0 = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 19 · Apparatus" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
