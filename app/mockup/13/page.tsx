import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Mockup from "@/components/mockups/m13";

const f0 = Figtree({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 13 · Thread" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
