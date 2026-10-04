import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Mockup from "@/components/mockups/m01";

const f0 = Plus_Jakarta_Sans({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 01 · Bloom" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
