import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Mockup from "@/components/mockups/m17";

const f0 = DM_Sans({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 17 · Nexus" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
