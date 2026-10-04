import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Mockup from "@/components/mockups/m09";

const f0 = Lexend({ subsets: ["latin"],  variable: "--f-display", display: "swap" });

export const metadata: Metadata = { title: "Mockup 09 · Arch" };

export default function Page() {
  return (
    <div className={[f0.variable].join(" ")} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
