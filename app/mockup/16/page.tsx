import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Mockup from "@/components/mockups/m16";

const f0 = Urbanist({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 16 · Ledger" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
