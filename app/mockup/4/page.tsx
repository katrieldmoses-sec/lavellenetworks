import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import Mockup from "@/components/mockups/m04";

const f0 = Syne({ subsets: ["latin"],  variable: "--f-display", display: "swap" });
const f1 = Manrope({ subsets: ["latin"],  variable: "--f-body", display: "swap" });

export const metadata: Metadata = { title: "Mockup 04 · Summit" };

export default function Page() {
  return (
    <div className={[f0.variable, f1.variable].join(" ")}>
      <Mockup />
    </div>
  );
}
