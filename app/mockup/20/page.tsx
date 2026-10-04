import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Mockup from "@/components/mockups/m20";

const f0 = Inter({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 20 · Signal" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
