"use client";

/**
 * 05 — Atlas.  Source: Payrot (framed pale-blue sheet, giant faded word,
 * centrepiece object with floating cards, notched headline tab, dark panel
 * with the globe straddling its edge).  Type: Archivo, expanded for display —
 * the identity kit's own family.
 */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award, Check, Quote } from "lucide-react";
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
import { Reveal, SplitWords, Count } from "./kit/Motion";
import { Lockup, Mark, NavMenu, MobileNav, Grain, GrainField } from "./kit/Brand";

/** Expanded caps display. */
const X = "font-m-display font-extrabold uppercase [font-stretch:125%] tracking-[-0.01em]";

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${
        light ? "border-white/30 text-white/80" : "border-lv-ink/20 text-lv-ink/70"
      }`}
    >
      {children}
    </span>
  );
}

export default function M05() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root mk-dark bg-lv-ink p-2 font-m-body text-lv-ink antialiased sm:p-3">
      <div className="relative overflow-hidden rounded-[22px] sm:rounded-[30px]" style={{ background: "linear-gradient(180deg,#E5F1FB 0%,#C2DFF6 38%,#F3F2F2 72%)" }}>
        <Grain opacity={0.22} />

        {/* ---------------------------------------------------------- nav */}
        <header className="relative z-50">
          <div className="mx-auto flex h-20 max-w-[1240px] items-center gap-8 px-6">
            <Lockup tone="ink" height={26} priority />
            <NavMenu
              className="mx-auto gap-7"
              theme={{
                trigger: "py-2 text-[13px] font-medium text-lv-ink/80 underline decoration-lv-ink/25 underline-offset-[6px] hover:decoration-lv-blue",
                triggerOpen: "text-lv-blue decoration-lv-blue",
                panel: "rounded-[18px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,84,147,0.45)]",
                heading: "text-[10px] font-bold uppercase tracking-[0.12em] text-lv-700",
                link: "py-1.5 text-[13px] font-medium text-lv-ink/75 hover:text-lv-blue",
                chevron: false,
              }}
            />
            <div className="hidden items-center gap-4 lg:flex">
              <a href={CHROME.headerCtas.expert.href} className="text-[13px] font-medium text-lv-ink/75 underline decoration-lv-ink/25 underline-offset-[6px]">
                {CHROME.headerCtas.expert.label}
              </a>
              <a href={CHROME.headerCtas.demo.href} className="flex items-center gap-2 rounded-full bg-lv-blue px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-lv-600">
                {CHROME.headerCtas.demo.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <MobileNav className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
          </div>
        </header>

        {/* ========================================================== hero */}
        <section className="relative mx-auto max-w-[1240px] px-6">
          {/* Giant faded word behind the centrepiece */}
          <div
            aria-hidden
            className={`${X} pointer-events-none select-none whitespace-nowrap text-center text-[14vw] leading-[0.85] lg:text-[168px]`}
            style={{
              background: "linear-gradient(180deg,#FFFFFF 15%, rgba(255,255,255,0) 85%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {HERO.words[0]}
          </div>

          <div className="relative -mt-[9vw] grid items-start gap-6 lg:-mt-[110px] lg:grid-cols-[230px_1fr_250px]">
            {/* left card */}
            <Reveal variant="left" delay={300} className="relative z-10 order-2 lg:order-1 lg:mt-24">
              <div className="mk-float rounded-[18px] bg-white/80 p-4 backdrop-blur">
                <div className="h-28 overflow-hidden rounded-[12px] bg-lv-ink">
                  <Globe dot="rgba(194,223,246,0.9)" dotSize={0.8} density={2.6} lon={78} lat={20} speed={6} />
                </div>
                <p className="mt-3 text-[13px] font-semibold leading-[1.35]">{HERO.meta[0]}</p>
                <p className="mt-1 text-[12px] text-lv-ink/55">{HERO.meta[1]}</p>
              </div>
            </Reveal>

            {/* centrepiece globe */}
            <Reveal variant="scale" className="relative order-1 mx-auto aspect-square w-full max-w-[520px] lg:order-2">
              <Globe dot="#005493" dotSize={1.25} density={1.45} ocean="rgba(255,255,255,0.35)" outline="rgba(0,84,147,0.25)" arcs="#0078D4" marker="#0078D4" lon={78} lat={18} speed={4} draggable />
            </Reveal>

            {/* right cards */}
            <div className="relative z-10 order-3 flex flex-col gap-4 lg:mt-10">
              <Reveal variant="right" delay={350}>
                <div className="mk-float-b flex items-center gap-3 rounded-full bg-white/85 py-2 pl-2 pr-5 backdrop-blur">
                  <span className="flex -space-x-2">
                    {HERO.diagram.sources.map((s) => (
                      <span key={s.label} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-lv-ink text-white">
                        <s.icon className="h-3.5 w-3.5" />
                      </span>
                    ))}
                  </span>
                  <span className="text-[13px] font-bold leading-tight">
                    <Count end={STATS.items[1].end} suffix={STATS.items[1].suffix} />
                    <span className="block text-[11px] font-medium text-lv-ink/55">{STATS.items[1].label}</span>
                  </span>
                </div>
              </Reveal>
              <Reveal variant="right" delay={450}>
                <div className="relative">
                  <div className="absolute -top-3 left-4 right-4 h-full rounded-[18px] bg-lv-700/40" />
                  <GrainField tone="blue" grain={0.3} className="relative rounded-[18px] p-5 text-white">
                    <div className="flex items-center justify-between">
                      <Mark tone="square" size={26} />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">{HERO.diagram.platformLabel}</span>
                    </div>
                    <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2">
                      {HERO.diagram.platform.map((p) => (
                        <li key={p.name} className="text-[12px] leading-tight">
                          <span className="block text-white/65">{p.brand}</span>
                          <span className="font-semibold">{p.name}</span>
                        </li>
                      ))}
                    </ul>
                  </GrainField>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Notched headline tab */}
          <div className="relative mt-8 grid items-end gap-8 lg:-mt-6 lg:grid-cols-[1fr_minmax(0,540px)_1fr]">
            <Reveal className="order-2 lg:order-1">
              <ul className="flex flex-wrap gap-2">
                {HERO.diagram.destinations.map((d) => (
                  <li key={d.label} className="flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-[12px] font-medium">
                    <d.icon className="h-3.5 w-3.5 text-lv-blue" />
                    {d.label}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-[300px] text-[14px] leading-[1.55] text-lv-ink/70">{HERO.body}</p>
            </Reveal>
            <div className="relative order-1 lg:order-2">
              <div className="mx-auto flex flex-col items-center rounded-t-[36px] bg-lv-blue px-8 pb-10 pt-6 text-center text-white sm:px-10">
                <a href={HERO.primary.href} className="flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-[12px] font-semibold">
                  {HERO.primary.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">{HERO.kicker}</span>
                <h1 className={`${X} mt-3 text-[28px] leading-[1.04] sm:text-[36px] lg:text-[38px]`}>
                  <SplitWords text={HERO.titleLead} />{" "}
                  <SplitWords text={HERO.titleAccent} delay={200} wordClassName="text-lv-200" />
                </h1>
              </div>
            </div>
            <Reveal className="order-3 lg:text-right">
              <div className={`${X} text-[44px] leading-none text-lv-blue lg:text-[52px]`}>
                <Count end={STATS.items[2].end} suffix={STATS.items[2].suffix} separator />
              </div>
              <p className="mt-2 text-[13px] font-medium text-lv-ink/60">{STATS.items[2].label}</p>
              <a href={HERO.secondary.href} className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold underline decoration-lv-ink/25 underline-offset-[6px]">
                {HERO.secondary.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* White sheet rising out of the notch */}
        <div className="relative rounded-t-[36px] bg-white">
          {/* stats */}
          <section className="mx-auto max-w-[1240px] px-6 py-20">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_2fr] lg:items-end">
              <Reveal>
                <p className="text-[19px] font-medium leading-[1.5]">{STATS.statement}</p>
              </Reveal>
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {STATS.items.map((s, i) => (
                  <Reveal key={s.label} delay={i * 80} className="rounded-[18px] bg-lv-paper p-5">
                    <dd className={`${X} text-[28px] leading-none`}>
                      <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                    </dd>
                    <dt className="mt-3 text-[12px] font-medium text-lv-ink/55">{s.label}</dt>
                  </Reveal>
                ))}
              </dl>
            </div>
          </section>

          {/* products */}
          <section className="mx-auto grid max-w-[1240px] gap-12 px-6 pb-28 lg:grid-cols-[1fr_1.25fr]">
            <div className="lg:sticky lg:top-10 lg:self-start">
              <Reveal>
                <Label>{PRODUCTS.kicker}</Label>
              </Reveal>
              <h2 className={`${X} mt-6 text-[28px] leading-[1.08] lg:text-[36px]`}>
                <SplitWords text={PRODUCTS.title} stagger={35} />
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {PRODUCTS.items.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 90}>
                  <a
                    href={p.href}
                    className={`group flex h-full flex-col rounded-[22px] p-6 transition-colors ${
                      i === 0 ? "bg-lv-blue text-white" : "bg-lv-100 hover:bg-lv-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${i === 0 ? "bg-white text-lv-blue" : "bg-white text-lv-blue"}`}>
                        <p.icon className="h-5 w-5" />
                      </span>
                      <span className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${i === 0 ? "text-white/70" : "text-lv-700"}`}>{p.category}</span>
                    </div>
                    <span className={`mt-8 text-[13px] font-semibold ${i === 0 ? "text-white/75" : "text-lv-700"}`}>{p.brand}</span>
                    <h3 className={`${X} mt-1 text-[24px]`}>{p.name}</h3>
                    <p className={`mt-3 text-[14px] leading-[1.55] ${i === 0 ? "text-white/80" : "text-lv-ink/70"}`}>{p.desc}</p>
                    <ul className="mt-5 space-y-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[13px]">
                          <Check className={`h-3.5 w-3.5 ${i === 0 ? "text-white" : "text-lv-blue"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto flex items-center gap-1.5 pt-7 text-[13px] font-bold uppercase tracking-[0.04em]">
                      {p.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>

          {/* architecture: dark panel with the globe straddling its edge */}
          <section className="mx-auto max-w-[1240px] px-6 pb-28 pt-24">
            <div className="relative rounded-[30px] bg-lv-ink px-6 pb-14 pt-40 text-white lg:px-14 lg:pt-48">
              <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 lg:h-[320px] lg:w-[320px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-lv-ink">
                  <Globe dot="rgba(194,223,246,0.95)" dotSize={1.1} density={1.6} arcs="#0078D4" marker="#8CC3EE" lon={78} lat={18} speed={5} />
                </div>
              </div>
              <div className="mx-auto max-w-3xl text-center">
                <Label light>{ARCHITECTURE.kicker}</Label>
                <h2 className={`${X} mt-6 text-[30px] leading-[1.04] lg:text-[46px]`}>
                  <SplitWords text={ARCHITECTURE.title} />
                </h2>
                <Reveal delay={200}>
                  <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-white/60">{ARCHITECTURE.body}</p>
                </Reveal>
              </div>
              <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {ARCHITECTURE.bands.map((b, i) => (
                  <Reveal key={b.label} delay={i * 80}>
                    <div className={`h-full rounded-[20px] p-5 ${b.active ? "bg-lv-blue" : "bg-white/[0.06]"}`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[12px] font-bold uppercase tracking-[0.08em]">{b.label}</span>
                        {b.badge && <span className="whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-lv-blue">{b.badge}</span>}
                      </div>
                      <ul className="mt-5 space-y-2">
                        {b.items.map((it) => (
                          <li key={it.label} className="flex items-center gap-2 text-[13px] text-white/85">
                            <it.icon className="h-3.5 w-3.5 opacity-70" />
                            {it.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* why */}
          <section className="mx-auto max-w-[1240px] px-6 pb-28">
            <div className="text-center">
              <Reveal>
                <Label>{WHY.kicker}</Label>
              </Reveal>
              <h2 className={`${X} mx-auto mt-6 max-w-4xl text-[26px] leading-[1.1] lg:text-[36px]`}>
                <SplitWords text={WHY.title} stagger={35} />
              </h2>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {WHY.items.map((r, i) => (
                <Reveal key={r.title} delay={(i % 3) * 80}>
                  <div className="flex h-full gap-5 rounded-[22px] border border-lv-ink/10 p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lv-100 text-lv-blue">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[16px] font-bold">{r.title}</h3>
                      <p className="mt-2 text-[13px] leading-[1.65] text-lv-ink/60">{r.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* industries */}
          <section className="bg-lv-paper py-28">
            <div className="mx-auto max-w-[1240px] px-6">
              <div className="text-center">
                <Reveal>
                  <Label>{INDUSTRIES.kicker}</Label>
                </Reveal>
                <h2 className={`${X} mx-auto mt-6 max-w-4xl text-[26px] leading-[1.1] lg:text-[36px]`}>
                  <SplitWords text={INDUSTRIES.title} stagger={35} />
                </h2>
              </div>
              <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {INDUSTRIES.items.map((ind, i) => (
                  <Reveal key={ind.name} delay={(i % 3) * 80}>
                    <a href={ind.href} className="group flex h-full flex-col rounded-[22px] bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`${X} text-[20px]`}>{ind.name}</h3>
                        <ind.icon className="h-6 w-6 text-lv-blue" />
                      </div>
                      <dl className="mt-6 space-y-4 border-t border-lv-ink/10 pt-5">
                        {(["challenge", "solution", "outcome"] as const).map((k) => (
                          <div key={k}>
                            <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-lv-700">{INDUSTRIES.labels[k]}</dt>
                            <dd className="mt-1 text-[13px] leading-[1.55] text-lv-ink/70">{ind[k]}</dd>
                          </div>
                        ))}
                      </dl>
                      <span className="mt-auto flex items-center gap-1.5 pt-6 text-[12px] font-bold uppercase tracking-[0.04em] text-lv-blue">
                        {INDUSTRIES.linkPrefix} {ind.name} {INDUSTRIES.linkSuffix}
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* proven */}
          <section className="mx-auto max-w-[1240px] px-6 py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-3xl">
                <Reveal>
                  <Label>{PROVEN.kicker}</Label>
                </Reveal>
                <h2 className={`${X} mt-6 text-[26px] leading-[1.1] lg:text-[36px]`}>
                  <SplitWords text={PROVEN.title} stagger={35} />
                </h2>
              </div>
              <a href={PROVEN.link.href} className="flex items-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[13px] font-semibold text-white">
                {PROVEN.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {PROVEN.testimonials.map((t, i) => (
                <Reveal key={t.sector} delay={i * 90}>
                  <figure className="flex h-full flex-col rounded-[22px] bg-lv-100 p-7">
                    <Quote className="h-6 w-6 text-lv-blue" />
                    <blockquote className="mt-5 flex-1 text-[16px] font-medium leading-[1.55]">{t.quote}</blockquote>
                    <figcaption className="mt-6 flex items-end justify-between gap-3">
                      <span className="text-[12px] text-lv-ink/55">{t.role}</span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-lv-700">{t.sector}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <div className="mt-14 grid items-center gap-6 lg:grid-cols-[220px_1fr]">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-lv-ink/55">{PROVEN.logosLabel}</p>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                  <li key={i} className="flex h-14 items-center justify-center rounded-full border border-dashed border-lv-ink/15 px-4 text-center text-[11px] text-lv-ink/45">
                    {PROVEN.logoPlaceholder}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* timeline */}
          <section className="relative overflow-hidden">
            <GrainField tone="deep" grain={0.28} className="mx-3 rounded-[30px] px-6 py-24 text-white lg:px-14">
              <div className="relative mx-auto max-w-[1180px]">
                <Label light>{TIMELINE.kicker}</Label>
                <h2 className={`${X} mt-6 max-w-3xl text-[30px] leading-[1.05] lg:text-[46px]`}>
                  <SplitWords text={TIMELINE.title} />
                </h2>
                <ol className="mt-14 grid gap-px overflow-hidden rounded-[20px] bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
                  {TIMELINE.milestones.map((m, i) => (
                    <Reveal as="li" key={`${m.year}-${i}`} delay={(i % 4) * 70} className="bg-[#0f3f66]/90 p-6">
                      <span className={`${X} text-[28px] leading-none`}>{m.year}</span>
                      <h3 className="mt-8 text-[15px] font-bold">{m.title}</h3>
                      <p className="mt-2 text-[13px] leading-[1.6] text-white/65">{m.body}</p>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </GrainField>
          </section>

          {/* insights */}
          <section className="mx-auto max-w-[1240px] px-6 py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-3xl">
                <Reveal>
                  <Label>{INSIGHTS.kicker}</Label>
                </Reveal>
                <h2 className={`${X} mt-6 text-[26px] leading-[1.1] lg:text-[36px]`}>
                  <SplitWords text={INSIGHTS.title} stagger={35} />
                </h2>
              </div>
              <a href={INSIGHTS.link.href} className="flex items-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[13px] font-semibold text-white">
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
                  className={`rounded-full border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors ${
                    filter === f ? "border-lv-blue bg-lv-blue text-white" : "border-lv-ink/15 text-lv-ink/60 hover:text-lv-ink"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {INSIGHTS.items.map((r, i) => (
                <a
                  key={r.title}
                  href={INSIGHTS.link.href}
                  className={`group flex flex-col overflow-hidden rounded-[22px] border border-lv-ink/10 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}
                >
                  <GrainField tone={(["blue", "sky", "deep", "paper"] as const)[i]} grain={0.3} className="h-36">
                    <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em]">{r.tag}</span>
                  </GrainField>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex justify-between text-[11px] text-lv-ink/50">
                      <span>{r.meta}</span>
                      <span>{r.read}</span>
                    </div>
                    <h3 className="mt-3 text-[15px] font-bold leading-[1.35]">{r.title}</h3>
                    <p className="mt-2 flex-1 text-[12px] leading-[1.6] text-lv-ink/60">{r.body}</p>
                    <span className="mt-5 flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-lv-blue">
                      {INSIGHTS.readLabel}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* recognition + investment */}
          <section className="mx-auto grid max-w-[1240px] gap-4 px-6 pb-28 lg:grid-cols-2">
            <div className="rounded-[26px] bg-lv-paper p-7 lg:p-10">
              <Label>{RECOGNITION.kicker}</Label>
              <h2 className={`${X} mt-6 text-[22px] leading-[1.12] lg:text-[26px]`}>{RECOGNITION.title}</h2>
              <ul className="mt-8 space-y-2">
                {RECOGNITION.items.map((a, i) => (
                  <Reveal as="li" key={i} delay={i * 50} className="flex items-center gap-4 rounded-[14px] bg-white px-4 py-3.5">
                    <Award className="h-5 w-5 shrink-0 text-lv-blue" />
                    <span className="flex-1 text-[13px] font-semibold">{a.title}</span>
                    <span className="text-right text-[12px] text-lv-ink/50">{a.body}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="rounded-[26px] bg-lv-ink p-7 text-white lg:p-10">
              <Label light>{INVESTMENT.kicker}</Label>
              <h2 className={`${X} mt-6 text-[22px] leading-[1.12] lg:text-[26px]`}>{INVESTMENT.title}</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {INVESTMENT.items.map((p) => (
                  <div key={p.title}>
                    <p.icon className="h-5 w-5 text-lv-300" />
                    <h3 className="mt-3 text-[14px] font-bold">{p.title}</h3>
                    <p className="mt-1.5 text-[12px] leading-[1.6] text-white/60">{p.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={INVESTMENT.primary.href} className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-lv-ink">
                  {INVESTMENT.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={INVESTMENT.secondary.href} className="flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-[13px] font-semibold">
                  {INVESTMENT.secondary.label}
                </a>
              </div>
            </div>
          </section>

          {/* final cta */}
          <section className="relative overflow-hidden bg-lv-paper px-6 pt-24 text-center">
            <Label>{FINAL_CTA.kicker}</Label>
            <h2 className={`${X} mx-auto mt-6 max-w-4xl text-[32px] leading-[1.04] lg:text-[56px]`}>
              <SplitWords text={FINAL_CTA.title} />
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.6] text-lv-ink/65">{FINAL_CTA.body}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={FINAL_CTA.primary.href} className="flex items-center justify-center gap-2 rounded-full bg-lv-blue px-6 py-3.5 text-[14px] font-semibold text-white">
                {FINAL_CTA.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={FINAL_CTA.secondary.href} className="flex items-center justify-center rounded-full border border-lv-ink/20 px-6 py-3.5 text-[14px] font-semibold">
                {FINAL_CTA.secondary.label}
              </a>
            </div>
            <div className="relative mx-auto mt-14 h-[280px] max-w-[900px] lg:h-[360px]">
              <Globe dot="#005493" dotSize={1.15} density={1.6} arcs="#0078D4" marker="#0078D4" lon={78} lat={22} sway={16} frame={{ cx: 0.5, cy: 1.08, r: 0.42 }} />
            </div>
          </section>
        </div>
      </div>

      {/* ============================================================ footer */}
      <footer className="mx-auto max-w-[1240px] px-6 pb-10 pt-16 text-white">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className={`${X} text-[22px]`}>{CHROME.footerBand.title}</h3>
            <p className="mt-2 text-[14px] text-white/55">{CHROME.footerBand.body}</p>
          </div>
          <div className="flex gap-3">
            <a href={CHROME.footerBand.expert.href} className="rounded-full border border-white/25 px-5 py-3 text-[13px] font-semibold">
              {CHROME.footerBand.expert.label}
            </a>
            <a href={CHROME.footerBand.demo.href} className="rounded-full bg-lv-blue px-5 py-3 text-[13px] font-semibold">
              {CHROME.footerBand.demo.label}
            </a>
          </div>
        </div>
        <div className="mt-14 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <Lockup tone="white" height={30} />
            <p className="mt-6 text-[14px] font-semibold">{CHROME.footerBrand.tagline}</p>
            <p className="mt-3 max-w-xs text-[13px] leading-[1.6] text-white/50">{CHROME.footerBrand.blurb}</p>
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
                <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-lv-300">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[13px] text-white/65 hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-white/45 sm:flex-row">
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
      </footer>
    </div>
  );
}
