import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import Mockup from "@/components/mockups/m02";

const f0 = Unbounded({ subsets: ["latin"],  variable: "--f-display", display: "swap" });
const f1 = Inter({ subsets: ["latin"],  variable: "--f-body", display: "swap" });

export const metadata: Metadata = { title: "Mockup 02 · Eclipse" };

export default function Page() {
  return (
    <div className={[f0.variable, f1.variable].join(" ")}>
      <Mockup />
    </div>
  );
}
