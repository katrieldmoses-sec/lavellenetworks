import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import Signal from "@/components/mockups/signal/Signal";

const inter = Inter({ subsets: ["latin"], variable: "--f-display", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--f-accent", display: "swap" });

export const metadata: Metadata = { title: "Mockup · Signal-3" };

export default function Page() {
  return (
    <div className={`${inter.variable} ${archivo.variable}`} style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}>
      <Signal variant={3} />
    </div>
  );
}
