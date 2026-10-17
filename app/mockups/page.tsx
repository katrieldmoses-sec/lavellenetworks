import type { Metadata } from "next";
import Image from "next/image";
import { Archivo } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { MOCKUPS } from "@/components/mockups/registry";
import { SIGNAL_SERIES } from "@/components/mockups/signal/series";
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

        {/* Signal series: the shortlisted direction, developed five ways */}
        <section className="mb-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-lv-ink/15 pb-5">
            <h2 className="text-[28px] font-extrabold tracking-[-0.02em]" style={{ fontStretch: "112%" }}>
              Signal <span className="text-lv-blue">series</span>
            </h2>
            <p className="max-w-md text-[13px] text-lv-ink/60">
              Mockup 20&apos;s structure and hero, developed with the best of Bloom (01), Solara (06) and Atlas (05).
            </p>
          </div>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SIGNAL_SERIES.map((m) => (
              <li key={m.n}>
                <a
                  href={`/mockup/signal-${m.n}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[14px] p-5 text-white"
                  style={{ background: "radial-gradient(120% 90% at 85% 10%, #8CC3EE 0%, #0078D4 38%, #005493 100%)" }}
                >
                  <span aria-hidden className="mk-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" />
                  <svg aria-hidden viewBox="0 0 200 200" className="mk-spin-slow pointer-events-none absolute -right-14 -top-14 h-48 w-48 text-white/25 transition-colors duration-500 group-hover:text-white/50">
                    <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" />
                    <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeDasharray="2 6" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" />
                  </svg>
                  <div className="relative flex items-start justify-between">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80">Signal-{m.n}</span>
                    <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="relative mt-auto pt-10 text-[19px] font-bold leading-tight">{m.name}</h3>
                  <p className="relative mt-2 text-[12px] leading-[1.5] text-white/80">{m.idea}</p>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <h2 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.06em] text-lv-ink/50">All twenty directions</h2>
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
