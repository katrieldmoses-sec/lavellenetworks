"use client";

/**
 * 17 — Nexus.  Sources: the dark dot-matrix earth hero (planet rising from
 * the fold, centred statement) and the light product page (soft white sheet,
 * rounded panels, calm grid).  Structure: the hero is pinned; the whole light
 * page slides up over it as a sheet, and the earth rises as you scroll.
 * Type: DM Sans.
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
import { Reveal, SplitWords, Count, useScrollProgress } from "./kit/Motion";
import { Lockup, NavMenu, MobileNav, Grain, GrainField } from "./kit/Brand";

function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`text-[13px] font-medium ${dark ? "text-lv-300" : "text-lv-blue"}`}>{children}</span>;
}

function H2({ children, className = "" }: { children: string; className?: string }) {
  return (
    <h2 className={`mt-4 text-[34px] font-medium leading-[1.08] tracking-[-0.035em] lg:text-[50px] ${className}`}>
      <SplitWords text={children} stagger={30} />
    </h2>
  );
}

export default function M17() {
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");
  const [heroRef, heroP] = useScrollProgress<HTMLDivElement>();

  return (
    <div className="mk-root mk-dark bg-lv-ink font-m-body antialiased">
      {/* Pinned hero + sheet share one container, so the hero un-pins once
          the sheet has fully passed over it. */}
      <div className="relative">
      {/* ============================================ pinned hero (dark) */}
      <div ref={heroRef} className="sticky top-0 h-[100svh] overflow-hidden bg-lv-ink text-white">
        <Grain opacity={0.12} />
        <header className="relative z-50">
          <div className="mx-auto flex h-20 max-w-[1280px] items-center gap-8 px-6">
            <Lockup tone="white" height={26} priority />
            <NavMenu
              className="mx-auto gap-7"
              theme={{
                trigger: "py-2 text-[14px] text-white/70 hover:text-white",
                triggerOpen: "text-white",
                panel: "rounded-[18px] border border-white/10 bg-[#262423] p-5",
                heading: "text-[11px] text-lv-300",
                link: "py-1.5 text-[14px] text-white/75 hover:text-white",
              }}
            />
            <div className="hidden items-center gap-3 lg:flex">
              <a href={CHROME.headerCtas.expert.href} className="text-[14px] text-white/70 hover:text-white">
                {CHROME.headerCtas.expert.label}
              </a>
              <a href={CHROME.headerCtas.demo.href} className="rounded-full border border-white/25 px-5 py-2.5 text-[14px] hover:bg-white hover:text-lv-ink">
                {CHROME.headerCtas.demo.label}
              </a>
            </div>
            <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
          </div>
        </header>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-[8vh] text-center">
          <Kicker dark>{HERO.kicker}</Kicker>
          <h1 className="mt-5 text-[48px] font-medium leading-[1] tracking-[-0.05em] sm:text-[72px] lg:text-[92px]">
            <SplitWords text={HERO.titleLead} />{" "}
            <SplitWords text={HERO.titleAccent} delay={260} wordClassName="text-lv-300" />
          </h1>
          <Reveal delay={350}>
            <p className="mx-auto mt-6 max-w-lg text-[16px] leading-[1.65] text-white/60">{HERO.body}</p>
          </Reveal>
          <Reveal delay={450} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={HERO.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-lv-ink">
              {HERO.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={HERO.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-[14px]">
              {HERO.secondary.label}
            </a>
          </Reveal>
        </div>

        {/* the dot-matrix earth, rising with scroll */}
        <div
          className="absolute inset-x-0 bottom-0 h-[62vh] will-change-transform"
          style={{
            transform: `translate3d(0, ${Math.max(0, 22 - heroP * 60)}%, 0)`,
            maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 30%, #000 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 30%, #000 70%)",
          }}
        >
          <Globe dot="rgba(194,223,246,0.9)" dotSize={1.25} density={1.25} lon={80} lat={22} sway={14} frame={{ cx: 0.5, cy: 1.1, r: 0.42 }} />
        </div>
        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
          <span className="rounded-full border border-white/15 bg-lv-ink/60 px-4 py-2 text-[12px] text-white/70 backdrop-blur">
            {HERO.meta[0]} · {HERO.meta[1]}
          </span>
        </div>
      </div>

      {/* ============================================ the sheet slides over */}
      <main className="relative z-10 -mt-[6vh] rounded-t-[40px] bg-white text-lv-ink shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.6)]">
        <div aria-hidden className="mx-auto h-1.5 w-12 translate-y-4 rounded-full bg-lv-ink/15" />

        {/* platform flow + stats */}
        <section className="mx-auto max-w-[1280px] px-6 pb-24 pt-20">
          <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr_1fr]">
            <Reveal variant="left" className="rounded-[26px] bg-lv-paper p-6">
              <span className="text-[12px] text-lv-ink/50">→</span>
              <ul className="mt-4 space-y-3">
                {HERO.diagram.sources.map((s) => (
                  <li key={s.label} className="flex items-center gap-3 text-[15px]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                      <s.icon className="h-4 w-4 text-lv-blue" />
                    </span>
                    {s.label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="scale" className="rounded-[26px] bg-lv-ink p-6 text-white">
              <span className="text-[12px] text-lv-300">{HERO.diagram.platformLabel}</span>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {HERO.diagram.platform.map((p) => (
                  <div key={p.name} className="rounded-[18px] bg-white/[0.06] p-4">
                    <p.icon className="h-5 w-5 text-lv-300" />
                    <div className="mt-6 text-[12px] text-white/55">{p.brand}</div>
                    <div className="text-[17px] font-medium">{p.name}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="right" className="rounded-[26px] bg-lv-paper p-6">
              <span className="text-[12px] text-lv-ink/50">←</span>
              <ul className="mt-4 space-y-3">
                {HERO.diagram.destinations.map((s) => (
                  <li key={s.label} className="flex items-center gap-3 text-[15px]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                      <s.icon className="h-4 w-4 text-lv-blue" />
                    </span>
                    {s.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <Reveal>
              <p className="text-[28px] font-medium leading-[1.25] tracking-[-0.025em] lg:text-[36px]">{STATS.statement}</p>
            </Reveal>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
              {STATS.items.map((s) => (
                <div key={s.label} className="border-t border-lv-ink/15 pt-4">
                  <dd className="text-[44px] font-medium leading-none tracking-[-0.04em]">
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </dd>
                  <dt className="mt-2 text-[13px] text-lv-ink/55">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* products: asymmetric bento */}
        <section className="mx-auto max-w-[1280px] px-6 pb-28">
          <Kicker>{PRODUCTS.kicker}</Kicker>
          <H2 className="max-w-3xl">{PRODUCTS.title}</H2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {PRODUCTS.items.map((p, i) => {
              const tall = i === 0;
              const wide = i === 3;
              return (
                <Reveal key={p.name} delay={i * 70} className={`${tall ? "lg:row-span-2" : ""} ${wide ? "lg:col-span-2" : ""}`}>
                  <a
                    href={p.href}
                    className={`group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[28px] p-7 ${tall ? "bg-lv-blue text-white" : "bg-lv-paper"}`}
                  >
                    {tall && (
                      <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-60">
                        <Globe dot="rgba(255,255,255,0.85)" dotSize={1} density={1.8} lon={78} lat={-20} sway={10} frame={{ cx: 0.5, cy: 1.2, r: 0.6 }} />
                      </div>
                    )}
                    {tall && <Grain opacity={0.25} />}
                    <div className="relative flex items-center justify-between">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${tall ? "bg-white text-lv-blue" : "bg-white text-lv-blue"}`}>
                        <p.icon className="h-5 w-5" />
                      </span>
                      <span className={`text-[12px] ${tall ? "text-white/75" : "text-lv-ink/50"}`}>{p.category}</span>
                    </div>
                    <div className="relative mt-auto pt-10">
                      <span className={`text-[13px] ${tall ? "text-white/75" : "text-lv-blue"}`}>{p.brand}</span>
                      <h3 className="text-[34px] font-medium leading-none tracking-[-0.035em]">{p.name}</h3>
                      <p className={`mt-3 max-w-md text-[14px] leading-[1.6] ${tall ? "text-white/85" : "text-lv-ink/65"}`}>{p.desc}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {p.features.map((f) => (
                          <li key={f} className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] ${tall ? "bg-white/15" : "bg-white"}`}>
                            <Check className="h-3 w-3" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 flex items-center gap-1.5 text-[14px] font-medium">
                        {p.cta}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* architecture: dark inset with orbit */}
        <section className="px-3 pb-28 sm:px-6">
          <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[36px] bg-lv-ink px-6 py-20 text-white lg:px-14">
            <Grain opacity={0.12} />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <Kicker dark>{ARCHITECTURE.kicker}</Kicker>
                <H2>{ARCHITECTURE.title}</H2>
                <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-white/60">{ARCHITECTURE.body}</p>
                <ul className="mt-10 space-y-3">
                  {ARCHITECTURE.bands.map((b) => (
                    <li key={b.label} className={`rounded-[20px] p-4 ${b.active ? "bg-lv-blue" : "bg-white/[0.05]"}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[15px] font-medium">{b.label}</span>
                        {b.badge && <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-lv-blue">{b.badge}</span>}
                      </div>
                      <p className={`mt-1.5 text-[12px] leading-[1.6] ${b.active ? "text-white/85" : "text-white/55"}`}>{b.items.map((it) => it.label).join(" · ")}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[520px]">
                <div aria-hidden className="mk-spin-slow absolute inset-0 rounded-full border border-white/10" />
                <div aria-hidden className="mk-spin-rev absolute inset-[9%] rounded-full border border-dashed border-white/15" />
                <div className="absolute inset-[16%]">
                  <Globe dot="rgba(194,223,246,0.9)" dotSize={1.05} density={1.6} arcs="#0078D4" marker="#FFFFFF" lon={78} lat={18} speed={4} draggable />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why */}
        <section className="mx-auto max-w-[1280px] px-6 pb-28">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Kicker>{WHY.kicker}</Kicker>
              <H2>{WHY.title}</H2>
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-lv-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {WHY.items.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 70} className="bg-white p-7">
                <r.icon className="h-6 w-6 text-lv-blue" />
                <h3 className="mt-8 text-[19px] font-medium tracking-[-0.01em]">{r.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-lv-ink/60">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* industries: segmented + card */}
        <section className="bg-lv-paper py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <Kicker>{INDUSTRIES.kicker}</Kicker>
            <H2 className="max-w-3xl">{INDUSTRIES.title}</H2>
            <div className="mt-12 grid gap-4 lg:grid-cols-[320px_1fr]">
              <ul className="space-y-1.5">
                {INDUSTRIES.items.map((x, i) => (
                  <li key={x.name}>
                    <button
                      type="button"
                      onClick={() => setInd(i)}
                      className={`flex w-full items-center gap-3 rounded-[18px] px-5 py-4 text-left text-[16px] transition-colors ${ind === i ? "bg-white font-medium shadow-[0_10px_30px_-18px_rgba(32,30,29,0.35)]" : "text-lv-ink/60 hover:text-lv-ink"}`}
                    >
                      <x.icon className={`h-5 w-5 ${ind === i ? "text-lv-blue" : ""}`} />
                      {x.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="relative">
                {INDUSTRIES.items.map((x, i) => (
                  <div key={x.name} className={`grid h-full overflow-hidden rounded-[28px] bg-white transition-opacity duration-500 md:grid-cols-[1fr_1.2fr] ${ind === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                    <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.3} className="min-h-[240px]">
                      <x.icon className="absolute bottom-6 left-6 h-12 w-12 text-white" strokeWidth={1.3} />
                    </GrainField>
                    <div className="flex flex-col p-7">
                      <h3 className="text-[30px] font-medium tracking-[-0.03em]">{x.name}</h3>
                      <dl className="mt-6 space-y-4">
                        {(["challenge", "solution", "outcome"] as const).map((k) => (
                          <div key={k}>
                            <dt className="text-[12px] font-medium text-lv-blue">{INDUSTRIES.labels[k]}</dt>
                            <dd className="mt-1 text-[14px] leading-[1.6] text-lv-ink/75">{x[k]}</dd>
                          </div>
                        ))}
                      </dl>
                      <a href={x.href} className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium">
                        {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* proven */}
        <section className="mx-auto max-w-[1280px] px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Kicker>{PROVEN.kicker}</Kicker>
              <H2>{PROVEN.title}</H2>
            </div>
            <a href={PROVEN.link.href} className="inline-flex items-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[14px] text-white">
              {PROVEN.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {PROVEN.testimonials.map((t, i) => (
              <Reveal key={t.sector} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-[28px] border border-lv-ink/10 p-7">
                  <Quote className="h-6 w-6 text-lv-blue" />
                  <blockquote className="mt-6 flex-1 text-[16px] leading-[1.6]">{t.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-3 text-[12px]">
                    <span className="text-lv-ink/55">{t.role}</span>
                    <span className="rounded-full bg-lv-100 px-2.5 py-1 font-medium text-lv-700">{t.sector}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 grid items-center gap-6 lg:grid-cols-[220px_1fr]">
            <p className="text-[13px] text-lv-ink/55">{PROVEN.logosLabel}</p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                <li key={i} className="flex h-14 items-center justify-center rounded-2xl bg-lv-paper px-3 text-center text-[11px] text-lv-ink/45">
                  {PROVEN.logoPlaceholder}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* timeline: vertical with sticky title */}
        <section className="bg-lv-paper py-28">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Kicker>{TIMELINE.kicker}</Kicker>
              <H2>{TIMELINE.title}</H2>
            </div>
            <ol className="space-y-3">
              {TIMELINE.milestones.map((m, i) => (
                <Reveal as="li" key={`${m.year}-${i}`} className={`grid gap-4 rounded-[24px] p-6 sm:grid-cols-[120px_1fr] ${i === TIMELINE.milestones.length - 1 ? "bg-lv-ink text-white" : "bg-white"}`}>
                  <span className="text-[32px] font-medium leading-none tracking-[-0.04em]">{m.year}</span>
                  <div>
                    <h3 className="text-[17px] font-medium">{m.title}</h3>
                    <p className={`mt-1.5 text-[14px] leading-[1.6] ${i === TIMELINE.milestones.length - 1 ? "text-white/65" : "text-lv-ink/60"}`}>{m.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* insights */}
        <section className="mx-auto max-w-[1280px] px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Kicker>{INSIGHTS.kicker}</Kicker>
              <H2>{INSIGHTS.title}</H2>
            </div>
            <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[14px] text-white">
              {INSIGHTS.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {INSIGHTS.filters.map((f) => (
              <button key={f} type="button" onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-[13px] ${filter === f ? "bg-lv-blue text-white" : "bg-lv-paper text-lv-ink/65"}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INSIGHTS.items.map((r, i) => (
              <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col rounded-[26px] bg-lv-paper p-2 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
                <GrainField tone={(["blue", "sky", "deep", "dusk"] as const)[i]} grain={0.3} className="h-40 rounded-[20px]">
                  <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium">{r.tag}</span>
                </GrainField>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex justify-between text-[11px] text-lv-ink/50">
                    <span>{r.meta}</span>
                    <span>{r.read}</span>
                  </div>
                  <h3 className="mt-3 text-[16px] font-medium leading-[1.35]">{r.title}</h3>
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

        {/* recognition + investment */}
        <section className="mx-auto grid max-w-[1280px] gap-4 px-6 pb-28 lg:grid-cols-2">
          <div className="rounded-[28px] bg-lv-paper p-8">
            <Kicker>{RECOGNITION.kicker}</Kicker>
            <h2 className="mt-4 text-[26px] font-medium leading-[1.2] tracking-[-0.025em]">{RECOGNITION.title}</h2>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {RECOGNITION.items.map((a, i) => (
                <li key={i} className="flex items-start gap-3 rounded-[18px] bg-white p-4">
                  <Award className="h-4 w-4 shrink-0 text-lv-blue" />
                  <div>
                    <h3 className="text-[13px] font-medium">{a.title}</h3>
                    <p className="mt-0.5 text-[12px] text-lv-ink/50">{a.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-lv-blue p-8 text-white">
            <Kicker dark>{INVESTMENT.kicker}</Kicker>
            <h2 className="mt-4 text-[26px] font-medium leading-[1.2] tracking-[-0.025em]">{INVESTMENT.title}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {INVESTMENT.items.map((x) => (
                <div key={x.title}>
                  <x.icon className="h-5 w-5" />
                  <h3 className="mt-3 text-[15px] font-medium">{x.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-white/80">{x.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                {INVESTMENT.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-[13px]">
                {INVESTMENT.secondary.label}
              </a>
            </div>
          </div>
        </section>
      </main>
      </div>

      {/* ======================================= closing: back to the earth */}
      <section className="relative z-10 overflow-hidden bg-lv-ink text-white">
        <div className="relative mx-auto max-w-4xl px-6 pb-[40vh] pt-28 text-center">
          <Kicker dark>{FINAL_CTA.kicker}</Kicker>
          <h2 className="mt-6 text-[44px] font-medium leading-[1] tracking-[-0.045em] lg:text-[80px]">
            <SplitWords text={FINAL_CTA.title} />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.65] text-white/60">{FINAL_CTA.body}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={FINAL_CTA.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-lv-ink">
              {FINAL_CTA.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-[14px]">
              {FINAL_CTA.secondary.label}
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[46vh]">
          <Globe dot="rgba(194,223,246,0.9)" dotSize={1.25} density={1.25} arcs="#0078D4" marker="#FFFFFF" lon={80} lat={22} sway={14} frame={{ cx: 0.5, cy: 1.15, r: 0.42 }} />
        </div>
      </section>

      {/* ============================================================ footer */}
      <footer className="relative z-10 border-t border-white/10 bg-lv-ink text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[24px] font-medium tracking-[-0.02em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-white/55">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
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
              <p className="mt-6 text-[15px]">{CHROME.footerBrand.tagline}</p>
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
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-[12px] text-white/45 sm:flex-row">
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
  );
}
