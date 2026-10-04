import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Mockup from "@/components/mockups/m18";

const f0 = Albert_Sans({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 18 · Paper" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
