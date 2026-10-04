"use client";

/**
 * 09 — Arch.  Sources: Kohaku product page (bold headline with a hand-drawn
 * ellipse, centre arch window with floating notification chips and a scroll
 * cue, right-hand accordion) and Skot (centred logo nav, soft cut-out panels).
 * Type: Lexend.
 */
import { useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Award, Minus, Plus, Quote } from "lucide-react";
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
import { Reveal, SplitWords, Count, DrawPath } from "./kit/Motion";
import { Lockup, Mark, NavMenu, MobileNav, Grain, GrainField } from "./kit/Brand";

/** Hand-drawn ellipse around a word. */
function Circled({ children, delay = 600 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="relative inline-block">
      <DrawPath
        viewBox="0 0 300 100"
        className="pointer-events-none absolute -inset-x-[12%] -inset-y-[22%] h-[144%] w-[124%] text-lv-300"
        d="M150 8 C 60 6, 8 30, 12 54 C 18 86, 120 96, 210 88 C 280 80, 298 50, 284 30 C 266 8, 190 2, 120 10"
        width={2.5}
        delay={delay}
      />
      <span className="relative">{children}</span>
    </span>
  );
}

const BANDS = [
  { label: ARCHITECTURE.bands[0].label, items: HERO.diagram.sources.map((s) => ({ icon: s.icon, label: s.label })) },
  {
    label: HERO.diagram.platformLabel,
    items: HERO.diagram.platform.map((p) => ({ icon: p.icon, label: `${p.brand} ${p.name}` })),
  },
  { label: ARCHITECTURE.bands[3].label, items: HERO.diagram.destinations.map((s) => ({ icon: s.icon, label: s.label })) },
];

export default function M09() {
  const [acc, setAcc] = useState(1);
  const [why, setWhy] = useState(0);
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root mk-dark bg-[#161514] p-2 font-m-body text-white antialiased sm:p-4">
      <div className="relative overflow-hidden rounded-[28px] bg-lv-ink">
        <Grain opacity={0.12} />

        {/* ---------------------------------------------------------- nav */}
        <header className="relative z-50">
          <div className="mx-auto grid h-24 max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
            <NavMenu
              className="gap-8"
              theme={{
                trigger: "py-2 text-[14px] text-white/80 hover:text-white",
                panel: "rounded-[22px] border border-white/10 bg-[#2a2826] p-5",
                heading: "text-[11px] text-lv-300",
                link: "py-1.5 text-[14px] text-white/75 hover:text-white",
                chevron: false,
              }}
            />
            <div className="col-start-2">
              <Lockup tone="white" height={28} priority />
            </div>
            <div className="col-start-3 flex items-center justify-end gap-2">
              <a href={CHROME.headerCtas.expert.href} className="hidden rounded-full border border-white/20 px-4 py-2.5 text-[13px] lg:inline-flex">
                {CHROME.headerCtas.expert.label}
              </a>
              <a href={CHROME.headerCtas.demo.href} className="hidden items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-[13px] font-medium text-lv-ink lg:inline-flex">
                {CHROME.headerCtas.demo.label}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lv-blue text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <MobileNav tone="dark" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
            </div>
          </div>
        </header>

        {/* ========================================================== hero */}
        <section className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 pb-20 pt-6 lg:grid-cols-[1fr_400px_1fr] lg:px-10">
          {/* left */}
          <div className="relative z-10">
            <span className="text-[13px] text-white/55">{HERO.kicker}</span>
            <h1 className="mt-5 text-[52px] font-semibold leading-[1.02] tracking-[-0.035em] lg:text-[60px]">
              <Reveal as="span" className="block">{HERO.words[0]}</Reveal>{" "}
              <Reveal as="span" delay={120} className="flex items-center gap-2">
                {HERO.words[1]}
                <svg aria-hidden viewBox="0 0 60 20" className="h-6 w-14 text-lv-300">
                  <path d="M0 10 H54 M44 2 L56 10 L44 18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Reveal>{" "}
              <Reveal as="span" delay={240} className="block">
                <Circled>{HERO.titleAccent}</Circled>
              </Reveal>
            </h1>
            <div className="mt-8 text-[40px] font-light leading-none tracking-[-0.02em]">
              <Count end={STATS.items[2].end} suffix={STATS.items[2].suffix} separator />
              <span className="ml-3 align-middle text-[13px] font-normal tracking-normal text-white/50">{STATS.items[2].label}</span>
            </div>
            <p className="mt-6 max-w-[340px] text-[14px] leading-[1.65] text-white/60">{HERO.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={HERO.primary.href} className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-lv-ink hover:bg-lv-100">
                <ArrowRight className="h-4 w-4" />
                {HERO.primary.label}
              </a>
              <a href={HERO.secondary.href} className="rounded-full border border-white/25 px-5 py-3.5 text-[13px] hover:border-white/60">
                {HERO.secondary.label}
              </a>
            </div>
          </div>

          {/* centre arch */}
          <Reveal variant="scale" className="relative mx-auto h-[520px] w-full max-w-[400px]">
            <div aria-hidden className="absolute -left-24 -top-10 h-[440px] w-[440px] rounded-full border border-white/10" />
            <GrainField tone="deep" grain={0.3} className="absolute inset-x-0 bottom-0 top-10 rounded-t-full">
              <div className="absolute inset-x-0 top-[18%] aspect-square">
                <Globe dot="rgba(255,255,255,0.88)" dotSize={1.1} density={1.6} arcs="#8CC3EE" marker="#FFFFFF" lon={78} lat={18} speed={4} frame={{ cx: 0.5, cy: 0.5, r: 0.46 }} />
              </div>
              <DrawPath
                viewBox="0 0 400 480"
                className="absolute inset-0 h-full w-full text-white/70"
                d="M20 300 C 80 200, 200 330, 170 230 S 60 120, 160 90 S 330 140, 280 240 S 200 380, 330 400"
                width={1.2}
                delay={800}
                duration={2400}
              />
              <span className="mk-float absolute left-[14%] top-[58%] h-6 w-6 rounded-full bg-white/90" />
              <span className="mk-float-b absolute right-[12%] top-[34%] h-3 w-3 rounded-full bg-white/90" />
              <a href={HERO.primary.href} aria-label={HERO.primary.label} className="absolute bottom-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-white/50">
                <ArrowDown className="h-5 w-5" />
              </a>
            </GrainField>
            {/* notification chips */}
            {HERO.diagram.platform.slice(0, 2).map((p, i) => (
              <div
                key={p.name}
                className={`absolute z-10 flex items-center gap-3 rounded-full border border-white/10 bg-lv-ink/90 py-2 pl-2 pr-5 backdrop-blur ${
                  i === 0 ? "mk-float -right-14 top-[42%]" : "mk-float-b -left-16 top-[72%]"
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lv-blue">
                  <p.icon className="h-4 w-4" />
                </span>
                <span className="text-[12px] leading-tight">
                  <span className="font-semibold">{p.brand}</span> {p.name}
                </span>
              </div>
            ))}
          </Reveal>

          {/* right accordion */}
          <div className="relative z-10">
            <div className="mb-10 flex gap-6">
              <ArrowLeft className="h-5 w-5 text-white/50" />
              <ArrowRight className="h-5 w-5" />
            </div>
            <ul>
              {BANDS.map((b, i) => (
                <li key={b.label} className="border-b border-white/15">
                  <button type="button" onClick={() => setAcc(acc === i ? -1 : i)} className="flex w-full items-center justify-between py-5 text-left">
                    <span className={`text-[17px] ${acc === i ? "text-white" : "text-white/45"}`}>{b.label}</span>
                    {acc === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4 text-white/50" />}
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ${acc === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <ul className="overflow-hidden">
                      {b.items.map((it) => (
                        <li key={it.label} className="flex items-center gap-2 pb-2.5 text-[13px] text-white/60 last:pb-5">
                          <it.icon className="h-3.5 w-3.5 text-lv-300" />
                          {it.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[12px] text-white/45">
              {HERO.meta[0]} {HERO.meta[1]}
            </p>
          </div>
        </section>

        {/* =========================================================== stats */}
        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.items.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className={`flex h-[240px] flex-col justify-end rounded-t-full p-6 text-center ${i === 1 ? "bg-lv-blue" : "bg-white/[0.05]"}`}>
                  <div className="text-[48px] font-light leading-none tracking-[-0.03em]">
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </div>
                  <div className="mt-3 text-[13px] text-white/65">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-12 max-w-2xl text-center text-[20px] font-light leading-[1.5] text-white/80">{STATS.statement}</p>
          </Reveal>
        </section>

        {/* ======================================================== products */}
        <section className="bg-white/[0.03] py-24 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="text-[13px] text-lv-300">{PRODUCTS.kicker}</span>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] lg:text-[46px]">
                <SplitWords text={PRODUCTS.title} stagger={35} />
              </h2>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.items.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <a href={p.href} className="group flex h-full flex-col rounded-[28px] bg-lv-ink p-3 ring-1 ring-white/10 transition-colors hover:ring-white/30">
                    <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.3} className="flex h-44 items-end justify-center rounded-t-full rounded-b-[18px]">
                      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-lv-blue transition-transform duration-500 group-hover:-translate-y-2">
                        <p.icon className="h-6 w-6" />
                      </span>
                    </GrainField>
                    <div className="flex flex-1 flex-col p-4">
                      <span className="text-[12px] text-white/50">
                        {p.brand} · {p.category}
                      </span>
                      <h3 className="mt-1 text-[26px] font-semibold tracking-[-0.02em]">{p.name}</h3>
                      <p className="mt-3 text-[13px] leading-[1.6] text-white/65">{p.desc}</p>
                      <ul className="mt-4 space-y-1.5 text-[12px] text-white/55">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-lv-300" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-medium">
                        {p.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== architecture */}
        <section className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:px-10 lg:py-32">
          <div>
            <span className="text-[13px] text-lv-300">{ARCHITECTURE.kicker}</span>
            <h2 className="mt-4 text-[38px] font-semibold leading-[1.05] tracking-[-0.035em] lg:text-[54px]">
              {ARCHITECTURE.title.split(". ")[0]}. <Circled delay={400}>{ARCHITECTURE.title.split(". ")[1]}</Circled>
            </h2>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-white/60">{ARCHITECTURE.body}</p>
            </Reveal>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ARCHITECTURE.bands.map((b, i) => (
              <Reveal key={b.label} delay={i * 80}>
                <div className={`h-full rounded-[24px] p-5 ${b.active ? "bg-lv-blue" : "bg-white/[0.05]"}`}>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[16px] font-semibold">{b.label}</h3>
                    {b.badge && <span className="whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-lv-blue">{b.badge}</span>}
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {b.items.map((it) => (
                      <li key={it.label} className={`rounded-full px-2.5 py-1 text-[11px] ${b.active ? "bg-white/15" : "bg-white/[0.06] text-white/75"}`}>
                        {it.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============================================================== why */}
        <section className="bg-white py-24 text-lv-ink lg:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-14 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
            <div>
              <span className="text-[13px] text-lv-700">{WHY.kicker}</span>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] lg:text-[46px]">{WHY.title}</h2>
              <div className="relative mt-10 hidden h-[300px] w-[240px] lg:block">
                <GrainField tone="blue" grain={0.3} className="absolute inset-0 rounded-t-full">
                  <Globe dot="rgba(255,255,255,0.9)" dotSize={1} density={1.8} lon={78} lat={18} speed={4} frame={{ cx: 0.5, cy: 0.62, r: 0.6 }} />
                </GrainField>
              </div>
            </div>
            <ul className="border-t border-lv-ink/15">
              {WHY.items.map((r, i) => (
                <li key={r.title} className="border-b border-lv-ink/15">
                  <button type="button" onClick={() => setWhy(why === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-6 text-left">
                    <span className="flex items-center gap-4">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full ${why === i ? "bg-lv-blue text-white" : "bg-lv-paper text-lv-blue"}`}>
                        <r.icon className="h-4 w-4" />
                      </span>
                      <span className="text-[19px] font-medium">{r.title}</span>
                    </span>
                    {why === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5 text-lv-ink/40" />}
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ${why === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <p className="overflow-hidden pl-14 text-[14px] leading-[1.7] text-lv-ink/65">
                      <span className="block pb-6">{r.body}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ======================================================= industries */}
        <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-[13px] text-lv-300">{INDUSTRIES.kicker}</span>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] lg:text-[46px]">{INDUSTRIES.title}</h2>
            </div>
            <div className="flex gap-2">
              <button type="button" aria-label="Previous" onClick={() => setInd((ind + 5) % 6)} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Next" onClick={() => setInd((ind + 1) % 6)} className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lv-ink">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
              {INDUSTRIES.items.map((it, i) => (
                <li key={it.name}>
                  <button
                    type="button"
                    onClick={() => setInd(i)}
                    className={`flex w-full flex-col items-start gap-6 rounded-[22px] p-5 text-left transition-colors ${ind === i ? "bg-white text-lv-ink" : "bg-white/[0.05] hover:bg-white/[0.09]"}`}
                  >
                    <it.icon className={`h-5 w-5 ${ind === i ? "text-lv-blue" : "text-lv-300"}`} />
                    <span className="text-[15px] font-medium">{it.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="relative">
              {INDUSTRIES.items.map((it, i) => (
                <div
                  key={it.name}
                  className={`h-full rounded-[28px] bg-white/[0.05] p-8 transition-opacity duration-500 ${ind === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}
                >
                  <h3 className="text-[34px] font-semibold tracking-[-0.03em]">{it.name}</h3>
                  <dl className="mt-8 space-y-5">
                    {(["challenge", "solution", "outcome"] as const).map((k) => (
                      <div key={k} className="grid gap-1 sm:grid-cols-[120px_1fr]">
                        <dt className="text-[13px] text-lv-300">{INDUSTRIES.labels[k]}</dt>
                        <dd className="text-[15px] leading-[1.6] text-white/80">{it[k]}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={it.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                    {INDUSTRIES.linkPrefix} {it.name} {INDUSTRIES.linkSuffix}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================== proven */}
        <section className="bg-white/[0.03] py-24 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-3xl">
                <span className="text-[13px] text-lv-300">{PROVEN.kicker}</span>
                <h2 className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] lg:text-[46px]">{PROVEN.title}</h2>
              </div>
              <a href={PROVEN.link.href} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[13px]">
                {PROVEN.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {PROVEN.testimonials.map((t, i) => (
                <Reveal key={t.sector} delay={i * 100}>
                  <figure className="relative flex h-full flex-col rounded-[28px] bg-lv-ink p-7 ring-1 ring-white/10">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lv-blue">
                        <Quote className="h-4 w-4" />
                      </span>
                      <span className="text-[13px] font-semibold">{t.sector}</span>
                    </div>
                    <blockquote className="mt-6 flex-1 text-[16px] leading-[1.6] text-white/85">{t.quote}</blockquote>
                    <figcaption className="mt-6 text-[12px] text-white/45">{t.role}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <div className="mt-16">
              <p className="text-center text-[13px] text-white/50">{PROVEN.logosLabel}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                  <li key={i} className="flex h-16 items-center justify-center rounded-full border border-dashed border-white/15 px-4 text-center text-[11px] text-white/40">
                    {PROVEN.logoPlaceholder}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================= timeline */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <span className="text-[13px] text-lv-300">{TIMELINE.kicker}</span>
            <h2 className="mt-4 max-w-3xl text-[38px] font-semibold leading-[1.05] tracking-[-0.035em] lg:text-[54px]">
              <SplitWords text={TIMELINE.title} />
            </h2>
          </div>
          <div className="mk-noscroll mt-14 overflow-x-auto">
            <ol className="flex w-max gap-3 px-6 lg:px-[max(40px,calc((100vw-1280px)/2+40px))]">
              {TIMELINE.milestones.map((m, i) => (
                <li
                  key={`${m.year}-${i}`}
                  className={`flex h-[380px] w-[230px] shrink-0 flex-col justify-end rounded-t-full border p-6 ${
                    i === TIMELINE.milestones.length - 1 ? "border-lv-blue bg-lv-blue" : "border-white/15"
                  }`}
                >
                  <span className="text-[38px] font-light leading-none tracking-[-0.03em]">{m.year}</span>
                  <h3 className="mt-5 text-[15px] font-semibold">{m.title}</h3>
                  <p className="mt-2 text-[12px] leading-[1.6] text-white/60">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ========================================================= insights */}
        <section className="bg-white py-24 text-lv-ink lg:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-3xl">
                <span className="text-[13px] text-lv-700">{INSIGHTS.kicker}</span>
                <h2 className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] lg:text-[46px]">{INSIGHTS.title}</h2>
              </div>
              <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[13px] text-white">
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
                  className={`rounded-full px-4 py-2 text-[13px] ${filter === f ? "bg-lv-blue text-white" : "bg-lv-paper text-lv-ink/70"}`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {INSIGHTS.items.map((r, i) => (
                <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col rounded-[26px] bg-lv-paper p-3 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
                  <GrainField tone={(["blue", "sky", "deep", "paper"] as const)[i]} grain={0.3} className="h-40 rounded-t-full rounded-b-[16px]" />
                  <div className="flex flex-1 flex-col p-3">
                    <div className="flex justify-between text-[11px] text-lv-ink/50">
                      <span className="font-semibold text-lv-700">{r.tag}</span>
                      <span>{r.read}</span>
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold leading-[1.35]">{r.title}</h3>
                    <p className="mt-2 flex-1 text-[12px] leading-[1.6] text-lv-ink/60">{r.body}</p>
                    <div className="mt-5 flex items-center justify-between text-[12px]">
                      <span className="text-lv-ink/45">{r.meta}</span>
                      <span className="flex items-center gap-1 font-semibold">
                        {INSIGHTS.readLabel}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================== recognition + invest */}
        <section className="mx-auto grid max-w-[1280px] gap-4 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div className="rounded-[28px] bg-white/[0.05] p-8">
            <span className="text-[13px] text-lv-300">{RECOGNITION.kicker}</span>
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em]">{RECOGNITION.title}</h2>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {RECOGNITION.items.map((a, i) => (
                <li key={i} className="flex items-start gap-3 rounded-[18px] bg-lv-ink p-4">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-lv-300" />
                  <div>
                    <h3 className="text-[13px] font-medium">{a.title}</h3>
                    <p className="mt-1 text-[11px] text-white/45">{a.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-lv-blue p-8">
            <span className="text-[13px] text-white/75">{INVESTMENT.kicker}</span>
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em]">{INVESTMENT.title}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {INVESTMENT.items.map((p) => (
                <div key={p.title}>
                  <p.icon className="h-5 w-5" />
                  <h3 className="mt-3 text-[14px] font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-white/75">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
              <a href={INVESTMENT.primary.href} className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                {INVESTMENT.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={INVESTMENT.secondary.href} className="flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-[13px]">
                {INVESTMENT.secondary.label}
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================== final cta */}
        <section className="relative mx-auto grid max-w-[1280px] items-end gap-10 px-6 pb-24 lg:grid-cols-[1.2fr_1fr] lg:px-10">
          <div>
            <span className="text-[13px] text-lv-300">{FINAL_CTA.kicker}</span>
            <h2 className="mt-5 text-[44px] font-semibold leading-[1.02] tracking-[-0.04em] lg:text-[72px]">
              {FINAL_CTA.title.split(" ").slice(0, -2).join(" ")} <Circled>{FINAL_CTA.title.split(" ").slice(-2).join(" ")}</Circled>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-white/60">{FINAL_CTA.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={FINAL_CTA.primary.href} className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-lv-ink">
                <ArrowRight className="h-4 w-4" />
                {FINAL_CTA.primary.label}
              </a>
              <a href={FINAL_CTA.secondary.href} className="flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-[14px]">
                {FINAL_CTA.secondary.label}
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-[420px] w-full max-w-[340px]">
            <GrainField tone="blue" grain={0.3} className="absolute inset-0 rounded-t-full">
              <Globe dot="rgba(255,255,255,0.9)" dotSize={1.1} density={1.6} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={4} frame={{ cx: 0.5, cy: 0.55, r: 0.48 }} />
            </GrainField>
            <div className="absolute -left-10 bottom-10 flex items-center gap-3 rounded-full bg-lv-ink/90 py-2 pl-2 pr-5 ring-1 ring-white/10">
              <Mark tone="square" size={34} />
              <span className="text-[12px]">{CHROME.footerBrand.tagline}</span>
            </div>
          </div>
        </section>

        {/* ========================================================== footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid gap-8 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-[22px] font-semibold">{CHROME.footerBand.title}</h3>
                <p className="mt-2 text-[13px] text-white/55">{CHROME.footerBand.body}</p>
              </div>
              <div className="flex gap-2">
                <a href={CHROME.footerBand.expert.href} className="rounded-full border border-white/25 px-5 py-3 text-[13px]">
                  {CHROME.footerBand.expert.label}
                </a>
                <a href={CHROME.footerBand.demo.href} className="rounded-full bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                  {CHROME.footerBand.demo.label}
                </a>
              </div>
            </div>
            <div className="grid gap-12 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr]">
              <div>
                <Lockup tone="white" height={28} />
                <p className="mt-6 text-[14px]">{CHROME.footerBrand.tagline}</p>
                <p className="mt-3 max-w-xs text-[12px] leading-[1.6] text-white/50">{CHROME.footerBrand.blurb}</p>
                <ul className="mt-6 space-y-1.5 text-[12px] text-white/60">
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
                    <h4 className="text-[12px] text-lv-300">{c.title}</h4>
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
            <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-[11px] text-white/45 sm:flex-row">
              <span>
                {CHROME.copyright} · {CHROME.builtIn}
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
    </div>
  );
}
