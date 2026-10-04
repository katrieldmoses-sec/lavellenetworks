"use client";

/**
 * 14 — Schematic.  Sources: Interlude (dot-matrix object art, bracketed
 * label tags, quiet white UI) and Skot (white rounded panels, notched cards).
 * Structure as an engineering spec sheet: a line-art system diagram that
 * draws itself, mono section codes, flat offset-edge cards (a hard offset
 * line, never a blur).  Type: Space Grotesk + Space Mono.
 */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";
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
import { Reveal, SplitWords, Count, useInView } from "./kit/Motion";
import { Lockup, NavMenu, MobileNav } from "./kit/Brand";

const M = "font-m-mono";
const OFFSET = "shadow-[6px_6px_0_0_#201E1D]";

function Tag({ children, blue = false }: { children: React.ReactNode; blue?: boolean }) {
  return (
    <span className={`${M} inline-flex items-center gap-1 text-[11px] uppercase ${blue ? "text-lv-blue" : "text-lv-ink/60"}`}>
      [<span className="px-0.5">{children}</span>]
    </span>
  );
}

function Code({ n, label }: { n: string; label: string }) {
  return (
    <div className={`${M} flex items-center gap-3 text-[11px] uppercase text-lv-ink/55`}>
      <span className="text-lv-blue">§{n}</span>
      <span className="h-px w-10 bg-lv-ink/25" />
      {label}
    </div>
  );
}

function Head({ n, kicker, title }: { n: string; kicker: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <Code n={n} label={kicker} />
      <h2 className="mt-5 text-[32px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[46px]">
        <SplitWords text={title} stagger={30} />
      </h2>
    </div>
  );
}

/** Line-art system schematic: sources → platform → destinations. */
function Schematic() {
  const [ref, on] = useInView<HTMLDivElement>();
  const draw = (d: number) => ({
    strokeDasharray: 1,
    strokeDashoffset: on ? 0 : 1,
    transition: `stroke-dashoffset 1400ms cubic-bezier(.65,0,.35,1) ${d}ms`,
  });
  const src = HERO.diagram.sources;
  const dst = HERO.diagram.destinations;
  return (
    <div ref={ref} className="relative aspect-[1.05] w-full">
      <svg viewBox="0 0 420 400" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        {/* grid ticks */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="6" stroke="#201E1D" strokeOpacity=".25" />
        ))}
        {/* centre box */}
        <rect x="120" y="140" width="180" height="120" rx="6" stroke="#0078D4" strokeWidth="1.5" pathLength={1} style={draw(300)} />
        <rect x="128" y="148" width="164" height="104" rx="3" stroke="#0078D4" strokeOpacity=".35" pathLength={1} style={draw(500)} />
        {/* in-links */}
        {src.map((_, i) => {
          const y = 60 + i * 93;
          return <path key={i} d={`M28 ${y} C 80 ${y}, 80 200, 120 200`} stroke="#201E1D" strokeWidth="1" pathLength={1} style={draw(700 + i * 120)} />;
        })}
        {dst.map((_, i) => {
          const y = 60 + i * 93;
          return <path key={i} d={`M300 200 C 340 200, 340 ${y}, 392 ${y}`} stroke="#201E1D" strokeWidth="1" pathLength={1} style={draw(1100 + i * 120)} />;
        })}
        {/* flowing packets once drawn */}
        {on && (
          <>
            <path d="M28 153 C 80 153, 80 200, 120 200" stroke="#0078D4" strokeWidth="2" className="mk-flow" />
            <path d="M300 200 C 340 200, 340 246, 392 246" stroke="#0078D4" strokeWidth="2" className="mk-flow" />
          </>
        )}
        {/* terminals */}
        {[...src, ...dst].map((_, i) => {
          const left = i < src.length;
          const y = 60 + (i % 4) * 93;
          return <circle key={i} cx={left ? 28 : 392} cy={y} r="4" fill="#F3F2F2" stroke="#201E1D" />;
        })}
      </svg>
      {/* labels */}
      {src.map((s, i) => (
        <span key={s.label} className={`${M} absolute left-0 -translate-y-[150%] text-[10px] uppercase text-lv-ink/70`} style={{ top: `${((60 + i * 93) / 400) * 100}%` }}>
          {s.label}
        </span>
      ))}
      {dst.map((s, i) => (
        <span key={s.label} className={`${M} absolute right-0 -translate-y-[150%] text-right text-[10px] uppercase text-lv-ink/70`} style={{ top: `${((60 + i * 93) / 400) * 100}%` }}>
          {s.label}
        </span>
      ))}
      <div className="absolute left-[28.6%] top-[35%] grid h-[30%] w-[42.8%] grid-cols-2 gap-1 p-3">
        {HERO.diagram.platform.map((p) => (
          <span key={p.name} className="flex items-center gap-1.5 rounded-[3px] bg-white px-2 text-[11px] font-medium">
            <p.icon className="h-3.5 w-3.5 shrink-0 text-lv-blue" />
            <span className="truncate">{p.name}</span>
          </span>
        ))}
      </div>
      <span className={`${M} absolute left-[28.6%] top-[30%] text-[10px] uppercase text-lv-blue`}>{HERO.diagram.platformLabel}</span>
    </div>
  );
}

export default function M14() {
  const [band, setBand] = useState(1);
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");

  return (
    <div
      className="mk-root font-m-body text-lv-ink antialiased"
      style={{
        backgroundColor: "#F3F2F2",
        backgroundImage: "radial-gradient(rgba(32,30,29,0.12) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      {/* --------------------------------------------------------------- nav */}
      <div className="sticky top-0 z-50 px-3 pt-3">
        <header className="mx-auto flex h-16 max-w-[1280px] items-center gap-6 rounded-[14px] border border-lv-ink/15 bg-white px-5">
          <Lockup tone="ink" height={24} priority />
          <span className={`${M} hidden text-[10px] uppercase text-lv-ink/45 xl:inline`}>/ {HERO.meta[1]}</span>
          <NavMenu
            className="mx-auto gap-1"
            theme={{
              trigger: `${M} rounded-[8px] px-3 py-2 text-[12px] uppercase text-lv-ink/75 hover:bg-lv-paper`,
              triggerOpen: "bg-lv-paper text-lv-ink",
              panel: `rounded-[12px] border border-lv-ink bg-white p-5 ${OFFSET}`,
              heading: `${M} text-[10px] uppercase text-lv-blue`,
              link: "py-1.5 text-[14px] text-lv-ink/80 hover:text-lv-blue",
            }}
          />
          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className={`${M} rounded-[8px] px-3 py-2 text-[12px] uppercase`}>
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className={`${M} rounded-[8px] border border-lv-ink bg-lv-blue px-4 py-2 text-[12px] uppercase text-white ${"shadow-[3px_3px_0_0_#201E1D]"}`}>
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </header>
      </div>

      {/* =============================================================== hero */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1fr_1fr] lg:pt-24">
        <div>
          <Code n="00" label={HERO.kicker} />
          <h1 className="mt-6 text-[56px] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[80px] lg:text-[96px]">
            <SplitWords text={HERO.titleLead} />{" "}
            <SplitWords text={HERO.titleAccent} delay={250} wordClassName="text-lv-blue" />
          </h1>
          <Reveal delay={350}>
            <p className="mt-7 max-w-md text-[17px] leading-[1.55] text-lv-ink/70">{HERO.body}</p>
          </Reveal>
          <Reveal delay={450} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={HERO.primary.href} className={`group inline-flex items-center justify-center gap-2 rounded-[10px] border border-lv-ink bg-lv-blue px-6 py-3.5 text-[15px] font-medium text-white transition-transform hover:translate-x-[2px] hover:translate-y-[2px] ${OFFSET} hover:shadow-[4px_4px_0_0_#201E1D]`}>
              {HERO.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={HERO.secondary.href} className="inline-flex items-center justify-center rounded-[10px] border border-lv-ink bg-white px-6 py-3.5 text-[15px] font-medium">
              {HERO.secondary.label}
            </a>
          </Reveal>
          <Reveal delay={550} className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
            <Tag>{HERO.meta[0]}</Tag>
          </Reveal>
        </div>
        <Reveal variant="fade" className={`rounded-[16px] border border-lv-ink bg-white p-6 ${OFFSET}`}>
          <div className="flex items-center justify-between border-b border-dashed border-lv-ink/25 pb-3">
            <Tag blue>{ARCHITECTURE.kicker}</Tag>
            <span className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2 w-2 rounded-full border border-lv-ink/40" />
              ))}
            </span>
          </div>
          <div className="pt-6">
            <Schematic />
          </div>
        </Reveal>
      </section>

      {/* ============================================================== stats */}
      <section className="border-y border-lv-ink bg-white">
        <dl className="mx-auto grid max-w-[1280px] grid-cols-2 lg:grid-cols-4">
          {STATS.items.map((s, i) => (
            <div key={s.label} className={`border-lv-ink px-6 py-10 ${i ? "border-l" : ""} ${i === 2 ? "max-lg:border-l-0" : ""} ${i > 1 ? "max-lg:border-t" : ""}`}>
              <dt className={`${M} text-[11px] uppercase text-lv-ink/55`}>
                {String(i + 1).padStart(2, "0")} — {s.label}
              </dt>
              <dd className="mt-4 text-[54px] font-medium leading-none tracking-[-0.04em]">
                <Count end={s.end} suffix={s.suffix} separator={s.separator} />
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <Reveal>
          <p className="max-w-3xl text-[24px] font-medium leading-[1.35] tracking-[-0.015em] lg:text-[30px]">{STATS.statement}</p>
        </Reveal>
      </section>

      {/* =========================================================== products */}
      <section className="mx-auto max-w-[1280px] px-6 pb-28">
        <Head n="01" kicker={PRODUCTS.kicker} title={PRODUCTS.title} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PRODUCTS.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 90}>
              <a href={p.href} className={`group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-lv-ink bg-white transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] ${OFFSET} hover:shadow-[8px_8px_0_0_#0078D4]`}>
                {/* notch */}
                <span aria-hidden className="absolute right-0 top-0 h-14 w-24 rounded-bl-[16px] border-b border-l border-lv-ink bg-lv-paper" />
                <span className={`${M} absolute right-4 top-4 text-[11px] uppercase text-lv-ink/60`}>0{i + 1}/04</span>
                <div className="flex items-center gap-4 border-b border-dashed border-lv-ink/25 p-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-lv-ink bg-lv-100">
                    <p.icon className="h-6 w-6 text-lv-blue" />
                  </span>
                  <div>
                    <Tag>{p.brand}</Tag>
                    <h3 className="text-[30px] font-medium leading-none tracking-[-0.03em]">{p.name}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className={`${M} text-[11px] uppercase text-lv-blue`}>{p.category}</span>
                  <p className="mt-3 text-[15px] leading-[1.6] text-lv-ink/70">{p.desc}</p>
                  <table className="mt-6 w-full text-[13px]">
                    <tbody>
                      {p.features.map((f, k) => (
                        <tr key={f} className="border-t border-lv-ink/10">
                          <td className={`${M} w-10 py-2 text-[11px] text-lv-ink/45`}>{String(k + 1).padStart(2, "0")}</td>
                          <td className="py-2">{f}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <span className="mt-auto flex items-center justify-between pt-6 text-[14px] font-medium">
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======================================================= architecture */}
      <section className="border-y border-lv-ink bg-lv-ink py-24 text-white lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <div className={`${M} flex items-center gap-3 text-[11px] uppercase text-white/55`}>
                <span className="text-lv-300">§02</span>
                <span className="h-px w-10 bg-white/25" />
                {ARCHITECTURE.kicker}
              </div>
              <h2 className="mt-5 text-[34px] font-medium leading-[1.05] tracking-[-0.03em] lg:text-[52px]">{ARCHITECTURE.title}</h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-white/60">{ARCHITECTURE.body}</p>
              <div className="mt-10 aspect-square w-full max-w-[340px]">
                <Globe dot="rgba(255,255,255,0.85)" dotSize={1.05} density={1.7} graticule="rgba(255,255,255,0.08)" arcs="#8CC3EE" marker="#FFFFFF" lon={78} lat={18} speed={4} />
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {ARCHITECTURE.bands.map((b, i) => (
                  <button
                    key={b.label}
                    type="button"
                    onClick={() => setBand(i)}
                    className={`${M} rounded-[8px] border px-3 py-2 text-[11px] uppercase transition-colors ${band === i ? "border-white bg-white text-lv-ink" : "border-white/25 text-white/70"}`}
                  >
                    {String(i + 1).padStart(2, "0")} {b.label}
                  </button>
                ))}
              </div>
              <div className="relative mt-6">
                {ARCHITECTURE.bands.map((b, i) => (
                  <div key={b.label} className={`rounded-[16px] border border-white/20 p-6 transition-opacity duration-500 ${band === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-[24px] font-medium">{b.label}</h3>
                      {b.badge && <span className={`${M} rounded-[6px] bg-lv-blue px-2 py-1 text-[10px] uppercase`}>{b.badge}</span>}
                    </div>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {b.items.map((it, k) => (
                        <li key={it.label} className="flex items-center gap-3 rounded-[10px] border border-dashed border-white/20 px-4 py-3">
                          <span className={`${M} text-[10px] text-white/40`}>{String(k + 1).padStart(2, "0")}</span>
                          <it.icon className="h-4 w-4 text-lv-300" />
                          <span className="text-[14px]">{it.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ why */}
      <section className="mx-auto max-w-[1280px] px-6 py-28">
        <Head n="03" kicker={WHY.kicker} title={WHY.title} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.items.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <div className={`h-full rounded-[16px] border border-lv-ink bg-white p-6 ${i === 0 ? OFFSET : ""}`}>
                <div className="flex items-center justify-between">
                  <r.icon className="h-6 w-6 text-lv-blue" />
                  <span className={`${M} text-[11px] text-lv-ink/45`}>R.{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-[19px] font-medium tracking-[-0.01em]">{r.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-lv-ink/65">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================================================= industries */}
      <section className="mx-auto max-w-[1280px] px-6 pb-28">
        <Head n="04" kicker={INDUSTRIES.kicker} title={INDUSTRIES.title} />
        <div className={`mt-14 overflow-hidden rounded-[16px] border border-lv-ink bg-white ${OFFSET}`}>
          <div className="mk-noscroll flex overflow-x-auto border-b border-lv-ink">
            {INDUSTRIES.items.map((x, i) => (
              <button
                key={x.name}
                type="button"
                onClick={() => setInd(i)}
                className={`flex shrink-0 items-center gap-2 border-r border-lv-ink px-5 py-4 text-[14px] font-medium transition-colors ${ind === i ? "bg-lv-blue text-white" : "hover:bg-lv-paper"}`}
              >
                <x.icon className="h-4 w-4" />
                {x.name}
              </button>
            ))}
          </div>
          {INDUSTRIES.items.map((x, i) => (
            <div key={x.name} className={`grid lg:grid-cols-3 ${ind === i ? "" : "hidden"}`}>
              {(["challenge", "solution", "outcome"] as const).map((k, j) => (
                <div key={k} className={`p-7 ${j ? "border-t border-lv-ink/15 lg:border-l lg:border-t-0" : ""}`}>
                  <Tag blue>{INDUSTRIES.labels[k]}</Tag>
                  <p className="mt-4 text-[17px] leading-[1.5]">{x[k]}</p>
                </div>
              ))}
              <div className="border-t border-lv-ink/15 px-7 py-4 lg:col-span-3">
                <a href={x.href} className="inline-flex items-center gap-2 text-[14px] font-medium text-lv-blue">
                  {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================= proven */}
      <section className="mx-auto max-w-[1280px] px-6 pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Head n="05" kicker={PROVEN.kicker} title={PROVEN.title} />
          <a href={PROVEN.link.href} className={`${M} inline-flex items-center gap-2 rounded-[8px] border border-lv-ink bg-white px-4 py-2.5 text-[12px] uppercase`}>
            {PROVEN.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROVEN.testimonials.map((t, i) => (
            <Reveal key={t.sector} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-[16px] border border-dashed border-lv-ink/40 bg-white/70 p-6">
                <Tag blue>{t.sector}</Tag>
                <blockquote className="mt-5 flex-1 text-[16px] leading-[1.6]">{t.quote}</blockquote>
                <figcaption className={`${M} mt-6 text-[11px] uppercase text-lv-ink/50`}>— {t.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <Tag>{PROVEN.logosLabel}</Tag>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
              <li key={i} className="flex h-16 items-center justify-center rounded-[10px] border border-dashed border-lv-ink/30 bg-white px-3 text-center text-[11px] text-lv-ink/45">
                {PROVEN.logoPlaceholder}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================== timeline */}
      <section className="border-y border-lv-ink bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <Head n="06" kicker={TIMELINE.kicker} title={TIMELINE.title} />
          <div className="mk-noscroll mt-14 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className={`${M} text-[11px] uppercase text-lv-ink/50`}>
                  {TIMELINE.milestones.map((m, i) => (
                    <th key={`${m.year}-${i}`} className="border-b border-lv-ink px-3 pb-3 font-normal">
                      T{String(i + 1).padStart(2, "0")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  {TIMELINE.milestones.map((m, i) => (
                    <td key={`${m.year}-${i}`} className={`border-r border-lv-ink/15 px-3 py-5 last:border-r-0 ${i === TIMELINE.milestones.length - 1 ? "bg-lv-100" : ""}`}>
                      <span className="text-[26px] font-medium tracking-[-0.03em]">{m.year}</span>
                      <h3 className="mt-3 text-[14px] font-medium">{m.title}</h3>
                      <p className="mt-1.5 text-[12px] leading-[1.55] text-lv-ink/60">{m.body}</p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================== insights */}
      <section className="mx-auto max-w-[1280px] px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Head n="07" kicker={INSIGHTS.kicker} title={INSIGHTS.title} />
          <a href={INSIGHTS.link.href} className={`${M} inline-flex items-center gap-2 rounded-[8px] border border-lv-ink bg-white px-4 py-2.5 text-[12px] uppercase`}>
            {INSIGHTS.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {INSIGHTS.filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`${M} rounded-[8px] border px-3 py-1.5 text-[11px] uppercase ${filter === f ? "border-lv-ink bg-lv-ink text-white" : "border-lv-ink/30 bg-white"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.items.map((r, i) => (
            <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col rounded-[16px] border border-lv-ink bg-white transition-shadow hover:shadow-[6px_6px_0_0_#201E1D] ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
              <div className="relative h-36 overflow-hidden rounded-t-[15px] border-b border-lv-ink" style={{ backgroundImage: "radial-gradient(#0078D4 1.3px, transparent 1.3px)", backgroundSize: `${8 + i * 2}px ${8 + i * 2}px`, backgroundColor: "#E5F1FB" }}>
                <span className="absolute left-3 top-3">
                  <Tag blue>{r.tag}</Tag>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className={`${M} flex justify-between text-[10px] uppercase text-lv-ink/50`}>
                  <span>{r.meta}</span>
                  <span>{r.read}</span>
                </div>
                <h3 className="mt-3 text-[16px] font-medium leading-[1.3]">{r.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-[1.6] text-lv-ink/60">{r.body}</p>
                <span className="mt-5 flex items-center gap-1.5 text-[13px] font-medium">
                  {INSIGHTS.readLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================== recognition + invest */}
      <section className="mx-auto grid max-w-[1280px] gap-8 px-6 pb-28 lg:grid-cols-2">
        <div>
          <Head n="08" kicker={RECOGNITION.kicker} title={RECOGNITION.title} />
          <ul className="mt-10 overflow-hidden rounded-[16px] border border-lv-ink bg-white">
            {RECOGNITION.items.map((a, i) => (
              <li key={i} className="flex items-center gap-4 border-b border-lv-ink/15 px-5 py-4 last:border-b-0">
                <span className={`${M} text-[10px] text-lv-ink/45`}>{String(i + 1).padStart(2, "0")}</span>
                <Award className="h-4 w-4 text-lv-blue" />
                <span className="flex-1 text-[14px]">{a.title}</span>
                <span className="text-right text-[12px] text-lv-ink/50">{a.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Head n="09" kicker={INVESTMENT.kicker} title={INVESTMENT.title} />
          <div className={`mt-10 rounded-[16px] border border-lv-ink bg-lv-blue p-6 text-white ${OFFSET}`}>
            <div className="grid gap-6 sm:grid-cols-2">
              {INVESTMENT.items.map((x) => (
                <div key={x.title}>
                  <x.icon className="h-5 w-5" />
                  <h3 className="mt-3 text-[16px] font-medium">{x.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-white/80">{x.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-lv-ink bg-white px-5 py-3 text-[14px] font-medium text-lv-ink">
                {INVESTMENT.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-[10px] border border-white/60 px-5 py-3 text-[14px] font-medium">
                {INVESTMENT.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== final cta */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24">
        <div className={`grid overflow-hidden rounded-[20px] border border-lv-ink bg-white lg:grid-cols-[1.3fr_1fr] ${OFFSET}`}>
          <div className="p-8 lg:p-14">
            <Code n="10" label={FINAL_CTA.kicker} />
            <h2 className="mt-6 text-[44px] font-medium leading-[1] tracking-[-0.045em] lg:text-[72px]">
              <SplitWords text={FINAL_CTA.title} />
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-lv-ink/65">{FINAL_CTA.body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={FINAL_CTA.primary.href} className={`inline-flex items-center justify-center gap-2 rounded-[10px] border border-lv-ink bg-lv-blue px-6 py-3.5 text-[15px] font-medium text-white ${"shadow-[4px_4px_0_0_#201E1D]"}`}>
                {FINAL_CTA.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center rounded-[10px] border border-lv-ink px-6 py-3.5 text-[15px] font-medium">
                {FINAL_CTA.secondary.label}
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] border-t border-lv-ink bg-lv-100 lg:border-l lg:border-t-0">
            <Globe dot="#005493" dotSize={1.2} density={1.5} arcs="#0078D4" marker="#201E1D" lon={78} lat={18} speed={4} />
          </div>
        </div>
      </section>

      {/* ============================================================= footer */}
      <footer className="border-t border-lv-ink bg-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[24px] font-medium tracking-[-0.02em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-lv-ink/60">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="rounded-[10px] border border-lv-ink px-5 py-3 text-[14px] font-medium">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-[10px] border border-lv-ink bg-lv-blue px-5 py-3 text-[14px] font-medium text-white">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 border-t border-dashed border-lv-ink/30 py-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="ink" height={28} />
              <p className="mt-6 text-[15px] font-medium">{CHROME.footerBrand.tagline}</p>
              <p className="mt-3 max-w-xs text-[13px] leading-[1.6] text-lv-ink/55">{CHROME.footerBrand.blurb}</p>
              <ul className={`${M} mt-6 space-y-1.5 text-[11px] uppercase text-lv-ink/65`}>
                <li>{CHROME.footerBrand.location}</li>
                <li>
                  <a href={`mailto:${CHROME.footerBrand.email}`} className="normal-case">
                    {CHROME.footerBrand.email}
                  </a>
                </li>
                <li>
                  <a href={CHROME.footerBrand.phoneHref}>{CHROME.footerBrand.phone}</a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {FOOTER_COLUMNS.map((c) => (
                <div key={c.title}>
                  <h4 className={`${M} text-[10px] uppercase text-lv-blue`}>{c.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-[13px] text-lv-ink/75 hover:text-lv-blue">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className={`${M} flex flex-col justify-between gap-4 border-t border-lv-ink py-5 text-[10px] uppercase text-lv-ink/55 sm:flex-row`}>
            <span>
              {CHROME.copyright} / {CHROME.builtIn}
            </span>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_LEGAL.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-lv-ink">
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
