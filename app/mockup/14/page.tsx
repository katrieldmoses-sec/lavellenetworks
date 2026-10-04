import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import Mockup from "@/components/mockups/m14";

const f0 = Space_Grotesk({ subsets: ["latin"],  variable: "--f-display", display: "swap" });
const f1 = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--f-mono", display: "swap" });

export const metadata: Metadata = { title: "Mockup 14 · Schematic" };

export default function Page() {
  return (
    <div className={[f0.variable, f1.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
