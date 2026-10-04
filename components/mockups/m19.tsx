"use client";

/**
 * 19 — Apparatus.  Source: the instrument/apparatus concept (condensed caps,
 * gauge rings, lettered drawers, technical readouts).  Structure: the page
 * as a control instrument — the globe sits inside calibrated rings with a
 * sweeping arc, figures read out like gauges, industries are lettered
 * drawers A–F that slide open.  Type: Archivo at condensed widths.
 */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award, Check, Plus, Minus } from "lucide-react";
import {
  HERO,
  STATS,
  PRODUCTS,
  ARCHITECTURE,
  WHY,
  INDUSTRIES,
  PROVEN,
  TIMELINE,
  INSIGHTS,
  RECOGNITION,
  INVESTMENT,
  FINAL_CTA,
  CHROME,
} from "@/lib/content/home";
import { FOOTER_COLUMNS, FOOTER_LEGAL } from "@/lib/content/footer";
import Globe from "./kit/Globe";
import { Reveal, Count, DrawPath } from "./kit/Motion";
import { Lockup, NavMenu, MobileNav, Grain } from "./kit/Brand";

const CN = "font-m-display uppercase [font-stretch:62%] font-bold";
const CN_M = "font-m-display uppercase [font-stretch:75%] font-semibold";
const LETTERS = ["A", "B", "C", "D", "E", "F"];

/** Calibrated rings with ticks and a sweeping arc. */
function Rings() {
  const ticks = Array.from({ length: 72 });
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
      <circle cx="200" cy="200" r="196" fill="none" stroke="rgba(255,255,255,0.14)" />
      <circle cx="200" cy="200" r="176" fill="none" stroke="rgba(255,255,255,0.08)" />
      {ticks.map((_, i) => {
        const a = (i / ticks.length) * Math.PI * 2;
        const long = i % 6 === 0;
        const r1 = 196;
        const r2 = long ? 182 : 188;
        return (
          <line
            key={i}
            x1={(200 + Math.cos(a) * r1).toFixed(2)}
            y1={(200 + Math.sin(a) * r1).toFixed(2)}
            x2={(200 + Math.cos(a) * r2).toFixed(2)}
            y2={(200 + Math.sin(a) * r2).toFixed(2)}
            stroke={long ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
          />
        );
      })}
      <g className="mk-spin" style={{ transformOrigin: "200px 200px", animationDuration: "14s" }}>
        <path d="M200 24 A176 176 0 0 1 352 112" fill="none" stroke="#0078D4" strokeWidth="3" strokeLinecap="round" />
        <circle cx="352" cy="112" r="4" fill="#8CC3EE" />
      </g>
      <g className="mk-spin-rev" style={{ transformOrigin: "200px 200px" }}>
        <circle cx="200" cy="200" r="186" fill="none" stroke="rgba(140,195,238,0.35)" strokeDasharray="2 10" />
      </g>
    </svg>
  );
}

/** Semicircular gauge around a figure. The arc sweeps fully on reveal —
    decoration only, it does not encode a value. */
function Gauge({ end, suffix, separator, label }: { end: number; suffix: string; separator?: boolean; label: string }) {
  return (
    <div className="relative">
      <div className="relative">
        <svg viewBox="0 0 120 70" className="w-full" aria-hidden>
          <path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <DrawPath viewBox="0 0 120 70" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full text-lv-blue" d="M10 60 A50 50 0 0 1 110 60" width={6} duration={1800} />
      </div>
      <div className="-mt-9 text-center">
        <div className={`${CN} text-[34px] leading-none`}>
          <Count end={end} suffix={suffix} separator={separator} />
        </div>
        <div className={`${CN_M} mt-1.5 text-[11px] tracking-[0.12em] text-white/55`}>{label}</div>
      </div>
    </div>
  );
}

function Head({ code, kicker, title }: { code: string; kicker: string; title: string }) {
  return (
    <div>
      <div className={`${CN_M} flex items-center gap-3 text-[12px] tracking-[0.18em] text-lv-300`}>
        <span className="rounded-[3px] border border-lv-300/50 px-1.5 py-0.5">{code}</span>
        {kicker}
      </div>
      <h2 className={`${CN} mt-4 max-w-4xl text-[46px] leading-[0.92] lg:text-[72px]`}>{title}</h2>
    </div>
  );
}

export default function M19() {
  const [drawer, setDrawer] = useState(0);
  const [mod, setMod] = useState(0);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root mk-dark relative bg-lv-ink font-m-body text-white antialiased">
      <Grain opacity={0.1} className="fixed" />

      {/* --------------------------------------------------------------- nav */}
      <header className="relative z-50 border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-[1320px] items-center gap-8 px-6">
          <Lockup tone="white" height={24} priority />
          <NavMenu
            className="gap-1"
            theme={{
              trigger: `${CN_M} rounded-[4px] px-3 py-2 text-[14px] tracking-[0.08em] text-white/70 hover:text-white`,
              triggerOpen: "bg-white/[0.06] text-white",
              panel: "rounded-[6px] border border-white/[0.12] bg-[#262423] p-5",
              heading: `${CN_M} text-[11px] tracking-[0.14em] text-lv-300`,
              link: "py-1.5 text-[13px] text-white/75 hover:text-white",
            }}
          />
          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className={`${CN_M} rounded-[4px] border border-white/20 px-4 py-2 text-[14px] tracking-[0.08em]`}>
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className={`${CN_M} rounded-[4px] bg-lv-blue px-4 py-2 text-[14px] tracking-[0.08em]`}>
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      {/* ============================================================== hero */}
      <section className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:py-20">
        <div>
          <div className={`${CN_M} flex items-center gap-3 text-[13px] tracking-[0.2em] text-lv-300`}>
            <span className="h-2 w-2 rounded-full bg-lv-blue" />
            {HERO.kicker}
          </div>
          <h1 className={`${CN} mt-6 text-[96px] leading-[0.84] sm:text-[130px] lg:text-[150px]`}>
            {HERO.words.map((w, i) => (
              <Reveal as="span" key={w} delay={i * 120} className={`block ${i === 2 ? "text-lv-blue" : ""}`}>
                {w}
                {i < 2 ? " " : ""}
              </Reveal>
            ))}
          </h1>
          <Reveal delay={400}>
            <p className="mt-8 max-w-md text-[16px] leading-[1.65] text-white/65">{HERO.body}</p>
          </Reveal>
          <Reveal delay={500} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={HERO.primary.href} className={`${CN_M} inline-flex items-center justify-center gap-2 rounded-[4px] bg-lv-blue px-6 py-3.5 text-[17px] tracking-[0.06em]`}>
              {HERO.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={HERO.secondary.href} className={`${CN_M} inline-flex items-center justify-center rounded-[4px] border border-white/25 px-6 py-3.5 text-[17px] tracking-[0.06em]`}>
              {HERO.secondary.label}
            </a>
          </Reveal>
          <p className={`${CN_M} mt-8 text-[12px] tracking-[0.16em] text-white/45`}>
            {HERO.meta[0]} — {HERO.meta[1]}
          </p>
        </div>

        {/* the instrument */}
        <Reveal variant="scale" className="relative mx-auto aspect-square w-full max-w-[560px]">
          <Rings />
          <div className="absolute inset-[13%]">
            <Globe dot="rgba(194,223,246,0.9)" dotSize={1.05} density={1.6} arcs="#0078D4" marker="#FFFFFF" lon={78} lat={18} speed={4} draggable />
          </div>
          {/* readouts around the ring */}
          {HERO.diagram.platform.map((p, i) => {
            const pos = [
              "left-[2%] top-[8%]",
              "right-[2%] top-[8%]",
              "left-[2%] bottom-[8%]",
              "right-[2%] bottom-[8%]",
            ][i];
            return (
              <div key={p.name} className={`absolute ${pos} rounded-[4px] border border-white/15 bg-lv-ink/85 px-3 py-2 backdrop-blur`}>
                <span className={`${CN_M} block text-[10px] tracking-[0.16em] text-lv-300`}>{p.brand}</span>
                <span className={`${CN} flex items-center gap-1.5 text-[18px] leading-none`}>
                  <p.icon className="h-3.5 w-3.5" />
                  {p.name}
                </span>
              </div>
            );
          })}
          <span className={`${CN_M} absolute left-1/2 top-[1%] -translate-x-1/2 bg-lv-ink px-2 text-[11px] tracking-[0.2em] text-white/60`}>
            {HERO.diagram.platformLabel}
          </span>
        </Reveal>
      </section>

      {/* gauges */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-12 lg:grid-cols-[1fr_2fr] lg:items-center">
          <p className="text-[18px] leading-[1.55] text-white/75">{STATS.statement}</p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.items.map((s) => (
              <Gauge key={s.label} end={s.end} suffix={s.suffix} separator={s.separator} label={s.label} />
            ))}
          </div>
        </div>
        <div className="mx-auto grid max-w-[1320px] border-t border-white/10 px-6 md:grid-cols-2">
          {[HERO.diagram.sources, HERO.diagram.destinations].map((list, li) => (
            <div key={li} className={`flex flex-wrap items-center gap-x-6 gap-y-2 py-5 ${li ? "md:border-l md:border-white/10 md:pl-6" : ""}`}>
              <span className={`${CN_M} text-[12px] tracking-[0.16em] text-lv-300`}>{li ? "←" : "→"}</span>
              {list.map((s) => (
                <span key={s.label} className={`${CN_M} flex items-center gap-1.5 text-[15px] tracking-[0.06em] text-white/80`}>
                  <s.icon className="h-4 w-4 text-white/45" />
                  {s.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================= products: modules */}
      <section className="mx-auto max-w-[1320px] px-6 py-24 lg:py-32">
        <Head code="01" kicker={PRODUCTS.kicker} title={PRODUCTS.title} />
        <div className="mt-14 grid gap-3 lg:grid-cols-[280px_1fr]">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {PRODUCTS.items.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setMod(i)}
                className={`flex items-center justify-between rounded-[6px] border px-4 py-4 text-left transition-colors ${mod === i ? "border-lv-blue bg-lv-blue" : "border-white/[0.12] hover:border-white/30"}`}
              >
                <span>
                  <span className={`${CN_M} block text-[11px] tracking-[0.16em] ${mod === i ? "text-white/80" : "text-white/45"}`}>{p.brand}</span>
                  <span className={`${CN} text-[26px] leading-none`}>{p.name}</span>
                </span>
                <span className={`${CN} text-[30px] leading-none ${mod === i ? "text-white" : "text-white/20"}`}>0{i + 1}</span>
              </button>
            ))}
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[6px] border border-white/[0.12]">
            {PRODUCTS.items.map((p, i) => (
              <div key={p.name} className={`absolute inset-0 grid transition-all duration-700 lg:grid-cols-[1.2fr_1fr] ${mod === i ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"}`}>
                <div className="flex flex-col p-8">
                  <span className={`${CN_M} text-[13px] tracking-[0.16em] text-lv-300`}>{p.category}</span>
                  <h3 className={`${CN} mt-3 text-[88px] leading-[0.85]`}>{p.name}</h3>
                  <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-white/70">{p.desc}</p>
                  <a href={p.href} className={`${CN_M} mt-auto inline-flex w-fit items-center gap-2 rounded-[4px] bg-white px-5 py-3 text-[16px] tracking-[0.06em] text-lv-ink`} style={{ marginTop: 32 }}>
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex flex-col justify-between border-t border-white/[0.12] bg-white/[0.03] p-8 lg:border-l lg:border-t-0">
                  <div className="relative mx-auto aspect-square w-40">
                    <svg viewBox="0 0 100 100" className="mk-spin-slow absolute inset-0 h-full w-full" aria-hidden>
                      <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,255,255,0.2)" strokeDasharray="1 4" />
                    </svg>
                    <span className="absolute inset-[18%] flex items-center justify-center rounded-full border border-lv-blue">
                      <p.icon className="h-10 w-10 text-lv-300" />
                    </span>
                  </div>
                  <ul className="mt-8 space-y-2">
                    {p.features.map((f, k) => (
                      <li key={f} className="flex items-center gap-3 border-t border-white/10 pt-2 text-[14px]">
                        <span className={`${CN_M} w-6 text-[12px] text-white/40`}>{k + 1}</span>
                        <Check className="h-3.5 w-3.5 text-lv-300" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== architecture */}
      <section className="border-y border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6">
          <Head code="02" kicker={ARCHITECTURE.kicker} title={ARCHITECTURE.title} />
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-white/60">{ARCHITECTURE.body}</p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[6px] border border-white/[0.12] bg-white/[0.12] lg:grid-cols-4">
            {ARCHITECTURE.bands.map((b, i) => (
              <Reveal key={b.label} delay={i * 90} className={`p-6 ${b.active ? "bg-lv-blue" : "bg-lv-ink"}`}>
                <div className="flex items-baseline justify-between">
                  <span className={`${CN} text-[54px] leading-none ${b.active ? "text-white" : "text-white/20"}`}>{String(i + 1).padStart(2, "0")}</span>
                  {b.badge && <span className={`${CN_M} rounded-[3px] bg-white px-1.5 py-0.5 text-[11px] tracking-[0.1em] text-lv-blue`}>{b.badge}</span>}
                </div>
                <h3 className={`${CN} mt-4 text-[26px] leading-none`}>{b.label}</h3>
                <ul className="mt-5 space-y-2">
                  {b.items.map((it) => (
                    <li key={it.label} className="flex items-center gap-2 text-[13px] text-white/80">
                      <it.icon className="h-3.5 w-3.5 opacity-70" />
                      {it.label}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== why */}
      <section className="mx-auto max-w-[1320px] px-6 py-24 lg:py-32">
        <Head code="03" kicker={WHY.kicker} title={WHY.title} />
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {WHY.items.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 70}>
              <div className="h-full rounded-[6px] border border-white/[0.12] p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                    <r.icon className="h-5 w-5 text-lv-300" />
                  </span>
                  <span className={`${CN} text-[30px] leading-none text-white/15`}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={`${CN} mt-8 text-[28px] leading-[0.95]`}>{r.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-white/60">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================ industries: drawers */}
      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6">
          <Head code="04" kicker={INDUSTRIES.kicker} title={INDUSTRIES.title} />
          <div className="mt-14 space-y-2">
            {INDUSTRIES.items.map((x, i) => {
              const open = drawer === i;
              return (
                <div key={x.name} className={`overflow-hidden rounded-[6px] border transition-colors ${open ? "border-lv-blue" : "border-white/[0.12]"}`}>
                  <button type="button" onClick={() => setDrawer(open ? -1 : i)} aria-expanded={open} className="flex w-full items-center gap-5 px-5 py-4 text-left">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] ${CN} text-[28px] ${open ? "bg-lv-blue" : "bg-white/[0.06]"}`}>{LETTERS[i]}</span>
                    <span className={`${CN} flex-1 text-[32px] leading-none`}>{x.name}</span>
                    <x.icon className="hidden h-5 w-5 text-white/40 sm:block" />
                    {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5 text-white/50" />}
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="grid gap-6 border-t border-white/10 px-5 py-6 sm:pl-[88px] lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
                        {(["challenge", "solution", "outcome"] as const).map((k) => (
                          <div key={k}>
                            <span className={`${CN_M} text-[12px] tracking-[0.16em] text-lv-300`}>{INDUSTRIES.labels[k]}</span>
                            <p className="mt-2 text-[14px] leading-[1.6] text-white/80">{x[k]}</p>
                          </div>
                        ))}
                        <a href={x.href} className={`${CN_M} inline-flex items-center gap-2 whitespace-nowrap rounded-[4px] bg-white px-4 py-2.5 text-[15px] tracking-[0.06em] text-lv-ink`}>
                          {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================== proven */}
      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Head code="05" kicker={PROVEN.kicker} title={PROVEN.title} />
            <a href={PROVEN.link.href} className={`${CN_M} inline-flex items-center gap-2 rounded-[4px] border border-white/25 px-4 py-2.5 text-[15px] tracking-[0.06em]`}>
              {PROVEN.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-3">
            {PROVEN.testimonials.map((t, i) => (
              <Reveal key={t.sector} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-[6px] border border-white/[0.12] bg-white/[0.03] p-6">
                  <span className={`${CN} text-[48px] leading-none text-lv-blue`}>“</span>
                  <blockquote className="mt-2 flex-1 text-[16px] leading-[1.6] text-white/85">{t.quote}</blockquote>
                  <figcaption className="mt-6 flex items-end justify-between gap-3">
                    <span className="text-[12px] text-white/50">{t.role}</span>
                    <span className={`${CN_M} text-[13px] tracking-[0.12em] text-lv-300`}>{t.sector}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <span className={`${CN_M} text-[12px] tracking-[0.16em] text-white/45`}>{PROVEN.logosLabel}</span>
            <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                <li key={i} className="flex h-16 items-center justify-center rounded-[4px] border border-dashed border-white/15 px-3 text-center text-[11px] text-white/40">
                  {PROVEN.logoPlaceholder}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= timeline */}
      <section className="border-t border-white/10 bg-white text-lv-ink">
        <div className="mx-auto max-w-[1320px] px-6 py-24 lg:py-32">
          <div className={`${CN_M} flex items-center gap-3 text-[12px] tracking-[0.18em] text-lv-blue`}>
            <span className="rounded-[3px] border border-lv-blue/50 px-1.5 py-0.5">06</span>
            {TIMELINE.kicker}
          </div>
          <h2 className={`${CN} mt-4 max-w-4xl text-[46px] leading-[0.92] lg:text-[72px]`}>{TIMELINE.title}</h2>
          <div className="relative mt-16">
            <div aria-hidden className="absolute left-0 right-0 top-[58px] hidden h-px bg-lv-ink/20 lg:block" />
            <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-8 lg:gap-3">
              {TIMELINE.milestones.map((m, i) => (
                <Reveal as="li" key={`${m.year}-${i}`} delay={i * 70}>
                  <span className={`${CN} block text-[44px] leading-none ${i === TIMELINE.milestones.length - 1 ? "text-lv-blue" : ""}`}>{m.year}</span>
                  <span aria-hidden className="mt-3 hidden h-3 w-px bg-lv-ink lg:block" />
                  <h3 className={`${CN_M} mt-3 text-[16px] leading-[1.15] tracking-[0.02em]`}>{m.title}</h3>
                  <p className="mt-2 text-[12px] leading-[1.55] text-lv-ink/60">{m.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ========================================================= insights */}
      <section className="mx-auto max-w-[1320px] px-6 py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Head code="07" kicker={INSIGHTS.kicker} title={INSIGHTS.title} />
          <a href={INSIGHTS.link.href} className={`${CN_M} inline-flex items-center gap-2 rounded-[4px] border border-white/25 px-4 py-2.5 text-[15px] tracking-[0.06em]`}>
            {INSIGHTS.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {INSIGHTS.filters.map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} className={`${CN_M} rounded-[4px] px-3 py-1.5 text-[14px] tracking-[0.06em] ${filter === f ? "bg-lv-blue" : "border border-white/15 text-white/65"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.items.map((r) => (
            <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col rounded-[6px] border border-white/[0.12] p-5 transition-colors hover:border-lv-blue ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
              <span className={`${CN_M} text-[13px] tracking-[0.12em] text-lv-300`}>{r.tag}</span>
              <h3 className={`${CN} mt-4 text-[24px] leading-[1]`}>{r.title}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-[1.6] text-white/55">{r.body}</p>
              <div className={`${CN_M} mt-6 flex items-center justify-between text-[12px] tracking-[0.1em] text-white/45`}>
                <span>
                  {r.meta} · {r.read}
                </span>
                <span className="flex items-center gap-1 text-white">
                  {INSIGHTS.readLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================ recognition + invest */}
      <section className="mx-auto grid max-w-[1320px] gap-10 px-6 pb-24 lg:grid-cols-2 lg:pb-32">
        <div>
          <Head code="08" kicker={RECOGNITION.kicker} title={RECOGNITION.title} />
          <ul className="mt-8 space-y-2">
            {RECOGNITION.items.map((a, i) => (
              <li key={i} className="flex items-center gap-4 rounded-[4px] border border-white/[0.12] px-4 py-3">
                <Award className="h-4 w-4 text-lv-300" />
                <span className="flex-1 text-[13px]">{a.title}</span>
                <span className="text-right text-[12px] text-white/45">{a.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Head code="09" kicker={INVESTMENT.kicker} title={INVESTMENT.title} />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {INVESTMENT.items.map((x) => (
              <div key={x.title} className="rounded-[6px] border border-white/[0.12] p-5">
                <x.icon className="h-5 w-5 text-lv-300" />
                <h3 className={`${CN} mt-4 text-[22px] leading-none`}>{x.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.6] text-white/60">{x.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={INVESTMENT.primary.href} className={`${CN_M} inline-flex items-center justify-center gap-2 rounded-[4px] bg-lv-blue px-5 py-3 text-[16px] tracking-[0.06em]`}>
              {INVESTMENT.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={INVESTMENT.secondary.href} className={`${CN_M} inline-flex items-center justify-center rounded-[4px] border border-white/25 px-5 py-3 text-[16px] tracking-[0.06em]`}>
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== final cta */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-24 lg:grid-cols-[1.2fr_1fr] lg:py-32">
          <div>
            <div className={`${CN_M} text-[13px] tracking-[0.2em] text-lv-300`}>{FINAL_CTA.kicker}</div>
            <h2 className={`${CN} mt-5 text-[64px] leading-[0.86] lg:text-[118px]`}>{FINAL_CTA.title}</h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-white/65">{FINAL_CTA.body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={FINAL_CTA.primary.href} className={`${CN_M} inline-flex items-center justify-center gap-2 rounded-[4px] bg-lv-blue px-6 py-3.5 text-[17px] tracking-[0.06em]`}>
                {FINAL_CTA.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={FINAL_CTA.secondary.href} className={`${CN_M} inline-flex items-center justify-center rounded-[4px] border border-white/25 px-6 py-3.5 text-[17px] tracking-[0.06em]`}>
                {FINAL_CTA.secondary.label}
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[440px]">
            <Rings />
            <div className="absolute inset-[13%]">
              <Globe dot="rgba(194,223,246,0.9)" dotSize={1} density={1.7} lon={20} lat={10} speed={4} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-8 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className={`${CN} text-[34px] leading-none`}>{CHROME.footerBand.title}</h3>
              <p className="mt-3 text-[14px] text-white/55">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-2">
              <a href={CHROME.footerBand.expert.href} className={`${CN_M} rounded-[4px] border border-white/25 px-4 py-2.5 text-[15px] tracking-[0.06em]`}>
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className={`${CN_M} rounded-[4px] bg-white px-4 py-2.5 text-[15px] tracking-[0.06em] text-lv-ink`}>
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="white" height={28} />
              <p className={`${CN_M} mt-6 text-[18px] tracking-[0.04em]`}>{CHROME.footerBrand.tagline}</p>
              <p className="mt-3 max-w-xs text-[13px] leading-[1.65] text-white/50">{CHROME.footerBrand.blurb}</p>
              <ul className="mt-6 space-y-1.5 text-[13px] text-white/60">
                <li>{CHROME.footerBrand.location}</li>
                <li>
                  <a href={`mailto:${CHROME.footerBrand.email}`}>{CHROME.footerBrand.email}</a>
                </li>
                <li>
                  <a href={CHROME.footerBrand.phoneHref}>{CHROME.footerBrand.phone}</a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {FOOTER_COLUMNS.map((c) => (
                <div key={c.title}>
                  <h4 className={`${CN_M} text-[13px] tracking-[0.12em] text-lv-300`}>{c.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-[13px] text-white/70 hover:text-white">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-[12px] text-white/45 sm:flex-row">
            <span>
              {CHROME.copyright} <span className={`${CN_M} ml-2 tracking-[0.14em] text-lv-300`}>{CHROME.builtIn}</span>
            </span>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_LEGAL.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
