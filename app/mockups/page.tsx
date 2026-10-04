import type { Metadata } from "next";
import Image from "next/image";
import { Archivo } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { MOCKUPS } from "@/components/mockups/registry";
import "@/components/mockups/mockups.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--f-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homepage mockups",
  robots: { index: false, follow: false },
};

const GROUND: Record<string, string> = {
  light: "Light",
  dark: "Dark",
  split: "Light + dark",
};

export default function MockupsIndex() {
  return (
    <div className={`${archivo.variable} mk-root relative min-h-screen bg-lv-paper font-m-display text-lv-ink`}>
      <div aria-hidden className="mk-paper-grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-24 pt-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-lv-ink/15 pb-8">
          <a href="/" aria-label="Lavelle Networks home">
            <Image
              src="/brand/logo-ink.png"
              alt="Lavelle Networks"
              width={1750}
              height={378}
              priority
              style={{ height: 30, width: "auto" }}
            />
          </a>
          <span className="text-xs font-semibold uppercase tracking-[0.06em] text-lv-ink/50">
            Internal · not indexed
          </span>
        </header>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:py-24">
          <h1
            className="text-[56px] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-[88px] lg:text-[112px]"
            style={{ fontStretch: "112%" }}
          >
            Homepage
            <br />
            <span className="text-lv-blue">mockups.</span>
          </h1>
          <div className="max-w-md text-[15px] leading-[1.55] text-lv-ink/70">
            <p>
              Twenty structural directions for the landing page. Every one carries the
              live homepage copy word for word — only layout, type and motion change.
              Colour is held to the identity kit: brand blue, ink, paper and white.
            </p>
            <p className="mt-4">Each opens in a new tab.</p>
          </div>
        </section>

        <ol className="grid gap-px overflow-hidden rounded-[2px] border border-lv-ink/15 bg-lv-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {MOCKUPS.map((m) => (
            <li key={m.n} className="bg-lv-paper">
              <a
                href={`/mockup/${m.n}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[260px] flex-col p-6 transition-colors duration-300 hover:bg-white"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-[64px] font-extrabold leading-none tracking-[-0.04em] text-lv-ink transition-colors duration-300 group-hover:text-lv-blue"
                    style={{ fontStretch: "115%" }}
                  >
                    {String(m.n).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-lv-ink/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lv-blue" />
                </div>
                <h2 className="mt-auto pt-8 text-xl font-bold tracking-[-0.01em]">{m.name}</h2>
                <p className="mt-2 text-[13px] leading-[1.5] text-lv-ink/65">{m.idea}</p>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-lv-ink/45">
                  <span>{m.type}</span>
                  <span aria-hidden>·</span>
                  <span>{GROUND[m.ground]}</span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
