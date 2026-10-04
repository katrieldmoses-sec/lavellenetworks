import type { Metadata } from "next";
import { IBM_Plex_Mono, Krona_One } from "next/font/google";
import Mockup from "@/components/mockups/m07";

const f0 = Krona_One({ subsets: ["latin"], weight: "400", variable: "--f-display", display: "swap" });
const f1 = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body", display: "swap" });

export const metadata: Metadata = { title: "Mockup 07 · Console" };

export default function Page() {
  return (
    <div className={[f0.variable, f1.variable].join(" ")} style={{ "--f-mono": "var(--f-body)" } as React.CSSProperties}>
      <Mockup />
    </div>
  );
}
