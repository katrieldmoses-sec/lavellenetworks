import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Mockup from "@/components/mockups/m03";

const f0 = Inter_Tight({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 03 · Explorer" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
