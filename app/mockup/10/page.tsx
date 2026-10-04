import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Mockup from "@/components/mockups/m10";

const f0 = Montserrat({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 10 · Gen 5" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
