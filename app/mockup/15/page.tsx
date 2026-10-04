import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Mockup from "@/components/mockups/m15";

const f0 = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 15 · Estate" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
