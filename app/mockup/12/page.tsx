import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Mockup from "@/components/mockups/m12";

const f0 = Jost({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 12 · Tura" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
