"use client";

/**
 * 13 — Thread.  Sources: the Elevate Finance concept (calm product hero,
 * floating UI cards orbiting a phone, "how it works" in short columns) and
 * the dark AI landing page (centred hero over a glowing horizon — rendered
 * here flat, with no glow — tabbed showcase, three-up feature cards).
 * Structural idea: one network line draws itself down the whole page,
 * threading every section together.  Type: Figtree.
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
import { Reveal, SplitWords, Count, useStickyProgress } from "./kit/Motion";
import { Lockup, Mark, NavMenu, MobileNav, Grain, GrainField } from "./kit/Brand";

/** A node on the thread: the section's anchor point. */
function Node({ n, active = false }: { n: number; active?: boolean }) {
  return (
    <span
      aria-hidden
      style={{ left: "calc(max(20px, (100vw - 1240px) / 2 - 36px))" }}
      className={`absolute top-0 z-30 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[11px] font-semibold xl:flex ${
        active ? "border-lv-blue bg-lv-blue text-white" : "border-white/20 bg-lv-ink text-white/60"
      }`}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

function Head({ kicker, title, center = false }: { kicker: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[12px] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-lv-blue" />
          {kicker}
        </span>
      </Reveal>
      <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] lg:text-[46px]">
        <SplitWords text={title} stagger={35} />
      </h2>
    </div>
  );
}

export default function M13() {
  const [tab, setTab] = useState(0);
  const [filter, setFilter] = useState("All");
  const [pageRef, progress] = useStickyProgress<HTMLDivElement>();

  return (
    <div ref={pageRef} className="mk-root mk-dark relative bg-lv-ink font-m-body text-white antialiased">
      {/* ================================================= the thread itself */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 z-20 hidden w-px xl:block" style={{ left: "calc(max(20px, (100vw - 1240px) / 2 - 36px))" }}>
        <div className="absolute inset-0 bg-white/[0.07]" />
        <div className="absolute inset-x-0 top-0 bg-lv-blue" style={{ height: `${progress * 100}%` }} />
        <span
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white"
          style={{ top: `${progress * 100}%` }}
        />
      </div>

      {/* --------------------------------------------------------------- nav */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-lv-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center gap-8 px-6">
          <Lockup tone="white" height={26} priority />
          <NavMenu
            className="mx-auto gap-1"
            theme={{
              trigger: "rounded-full px-4 py-2 text-[14px] text-white/70 hover:text-white",
              triggerOpen: "bg-white/[0.07] text-white",
              panel: "rounded-[18px] border border-white/10 bg-[#262423] p-5",
              heading: "text-[11px] font-semibold text-lv-300",
              link: "rounded-lg px-1 py-1.5 text-[14px] text-white/75 hover:text-white",
            }}
          />
          <div className="hidden items-center gap-2 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="rounded-full px-4 py-2.5 text-[14px] text-white/75 hover:text-white">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-lv-ink">
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      {/* ============================================================== hero */}
      <section className="relative z-10 overflow-hidden">
        {/* flat horizon: a solid curve, no glow */}
        <div className="absolute inset-x-0 bottom-0 h-[34%]">
          <Globe dot="rgba(140,195,238,0.7)" dotSize={1.1} density={1.4} lon={80} lat={-50} sway={10} frame={{ cx: 0.5, cy: 2.3, r: 0.62 }} />
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div className="relative mx-auto max-w-4xl px-6 pb-[34vh] pt-24 text-center lg:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[12px] text-white/75">
              <Mark tone="white" size={24} />
              {HERO.kicker}
            </span>
          </Reveal>
          <h1 className="mt-7 text-[50px] font-semibold leading-[1] tracking-[-0.045em] sm:text-[72px] lg:text-[96px]">
            <SplitWords text={HERO.titleLead} />{" "}
            <SplitWords text={HERO.titleAccent} delay={260} wordClassName="text-lv-300" />
          </h1>
          <Reveal delay={350}>
            <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.6] text-white/60">{HERO.body}</p>
          </Reveal>
          <Reveal delay={450} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={HERO.primary.href} className="group inline-flex items-center justify-center gap-2 rounded-full bg-lv-blue px-6 py-3.5 text-[14px] font-medium hover:bg-lv-600">
              {HERO.primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={HERO.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-[14px] hover:bg-white/[0.05]">
              {HERO.secondary.label}
            </a>
          </Reveal>
          <Reveal delay={550}>
            <p className="mt-8 text-[12px] text-white/45">
              {HERO.meta[0]} · {HERO.meta[1]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================ 01: platform, orbiting */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={1} active={progress > 0.08} />
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* centre device */}
            <div className="absolute left-1/2 top-1/2 h-[64%] w-[38%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] border-[6px] border-[#2d2b29] bg-lv-blue">
              <Grain opacity={0.25} />
              <div className="relative flex h-full flex-col items-center justify-between p-4 text-center">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">{HERO.diagram.platformLabel}</span>
                <div className="aspect-square w-full">
                  <Globe dot="rgba(255,255,255,0.9)" dotSize={0.8} density={2.2} lon={78} lat={18} speed={6} />
                </div>
                <span className="text-[10px] text-white/75">{HERO.meta[1]}</span>
              </div>
            </div>
            {/* orbit */}
            <div aria-hidden className="mk-spin-slow absolute inset-[6%] rounded-full border border-dashed border-white/10" />
            {HERO.diagram.platform.map((p, i) => {
              const a = (i / 4) * Math.PI * 2 - Math.PI / 4;
              return (
                <div
                  key={p.name}
                  className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-white/10 bg-[#2a2826] p-2.5 pr-4 ${i % 2 ? "mk-float-b" : "mk-float"}`}
                  style={{ left: `${50 + Math.cos(a) * 44}%`, top: `${50 + Math.sin(a) * 44}%` }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lv-blue">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[12px] leading-tight">
                    <span className="block text-white/55">{p.brand}</span>
                    <span className="font-semibold">{p.name}</span>
                  </span>
                </div>
              );
            })}
          </div>
          <div>
            <Head kicker={STATS.items[1].label} title={STATS.statement} />
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] bg-white/10">
              {STATS.items.map((s) => (
                <div key={s.label} className="bg-lv-ink p-6">
                  <dd className="text-[40px] font-semibold leading-none tracking-[-0.03em]">
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </dd>
                  <dt className="mt-3 text-[13px] text-white/55">{s.label}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-8 grid gap-3 text-[13px] sm:grid-cols-2">
              <p className="text-white/60">
                <span className="mb-1 block text-[11px] uppercase tracking-[0.1em] text-lv-300">→</span>
                {HERO.diagram.sources.map((s) => s.label).join(", ")}
              </p>
              <p className="text-white/60">
                <span className="mb-1 block text-[11px] uppercase tracking-[0.1em] text-lv-300">←</span>
                {HERO.diagram.destinations.map((s) => s.label).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ 02: products, tabbed */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={2} active={progress > 0.18} />
        <div className="mx-auto max-w-[1240px] px-6">
          <Head center kicker={PRODUCTS.kicker} title={PRODUCTS.title} />
          <div role="tablist" className="mx-auto mt-12 flex w-fit flex-wrap justify-center gap-1 rounded-full border border-white/10 p-1">
            {PRODUCTS.items.map((p, i) => (
              <button
                key={p.name}
                role="tab"
                aria-selected={tab === i}
                type="button"
                onClick={() => setTab(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] transition-colors ${tab === i ? "bg-white text-lv-ink" : "text-white/65 hover:text-white"}`}
              >
                <p.icon className="h-4 w-4" />
                {p.name}
              </button>
            ))}
          </div>
          <div className="relative mt-10">
            {PRODUCTS.items.map((p, i) => (
              <div
                key={p.name}
                role="tabpanel"
                className={`grid overflow-hidden rounded-[26px] border border-white/10 bg-[#262423] transition-opacity duration-500 lg:grid-cols-[1fr_1.1fr] ${
                  tab === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
                }`}
              >
                <div className="flex flex-col p-8 lg:p-12">
                  <span className="text-[13px] text-lv-300">
                    {p.brand} · {p.category}
                  </span>
                  <h3 className="mt-3 text-[44px] font-semibold leading-none tracking-[-0.035em]">{p.name}</h3>
                  <p className="mt-5 text-[16px] leading-[1.6] text-white/65">{p.desc}</p>
                  <ul className="mt-7 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[14px]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lv-blue/20 text-lv-300">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={p.href} className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-lv-ink" style={{ marginTop: 40 }}>
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.3} className="min-h-[320px]">
                  <div className="absolute inset-8 rounded-[18px] border border-white/15 bg-lv-ink/50 p-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/60">{p.brand}</span>
                      <p.icon className="h-5 w-5 text-white/80" />
                    </div>
                    <div className="mt-6 space-y-3">
                      {p.features.map((f, k) => (
                        <div key={f} className="flex items-center gap-3">
                          <span className="h-2 rounded-full bg-white/80" style={{ width: `${40 + k * 18}%`, opacity: 1 - k * 0.2 }} />
                        </div>
                      ))}
                    </div>
                    <svg aria-hidden viewBox="0 0 300 80" className="absolute inset-x-5 bottom-5 h-20 w-[calc(100%-40px)] text-white/70">
                      <path d="M0 60 C 40 55, 60 20, 100 30 S 160 70, 200 40 S 260 10, 300 20" stroke="currentColor" strokeWidth="1.5" fill="none" className="mk-flow" />
                    </svg>
                  </div>
                </GrainField>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= 03: architecture */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={3} active={progress > 0.3} />
        <div className="mx-auto max-w-[1240px] px-6">
          <Head center kicker={ARCHITECTURE.kicker} title={ARCHITECTURE.title} />
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-[1.65] text-white/60">{ARCHITECTURE.body}</p>
          </Reveal>
          {/* four columns joined by the thread */}
          <div className="relative mt-16 grid gap-4 lg:grid-cols-4">
            <svg aria-hidden className="absolute left-0 top-10 hidden h-px w-full lg:block" preserveAspectRatio="none" viewBox="0 0 100 1">
              <path d="M0 0.5 H100" stroke="#0078D4" strokeWidth="1" vectorEffect="non-scaling-stroke" className="mk-flow" />
            </svg>
            {ARCHITECTURE.bands.map((b, i) => (
              <Reveal key={b.label} delay={i * 100}>
                <div className="relative">
                  <span className={`relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border ${b.active ? "border-lv-blue bg-lv-blue" : "border-white/15 bg-lv-ink"}`}>
                    <span className="text-[22px] font-semibold">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <div className={`mt-6 rounded-[20px] p-5 ${b.active ? "bg-lv-blue/15 ring-1 ring-lv-blue" : "bg-white/[0.04]"}`}>
                    <h3 className="text-center text-[16px] font-semibold">{b.label}</h3>
                    {b.badge && <p className="mt-1 text-center text-[11px] text-lv-300">{b.badge}</p>}
                    <ul className="mt-4 space-y-2">
                      {b.items.map((it) => (
                        <li key={it.label} className="flex items-center gap-2 text-[13px] text-white/75">
                          <it.icon className="h-3.5 w-3.5 text-lv-300" />
                          {it.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== 04: why */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={4} active={progress > 0.42} />
        <div className="mx-auto max-w-[1240px] px-6">
          <Head center kicker={WHY.kicker} title={WHY.title} />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {WHY.items.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-[22px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-lv-ink text-lv-300">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-8 text-[18px] font-semibold">{r.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-white/60">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== 05: industries */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={5} active={progress > 0.54} />
        <div className="mx-auto max-w-[1240px] px-6">
          <Head kicker={INDUSTRIES.kicker} title={INDUSTRIES.title} />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {INDUSTRIES.items.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 2) * 90} variant={i % 2 ? "right" : "left"}>
                <a href={ind.href} className="group grid h-full gap-5 rounded-[22px] border border-white/10 p-6 transition-colors hover:border-white/25 sm:grid-cols-[150px_1fr]">
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lv-blue">
                      <ind.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{ind.name}</h3>
                  </div>
                  <dl className="space-y-3">
                    {(["challenge", "solution", "outcome"] as const).map((k) => (
                      <div key={k}>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-lv-300">{INDUSTRIES.labels[k]}</dt>
                        <dd className="mt-0.5 text-[13px] leading-[1.55] text-white/70">{ind[k]}</dd>
                      </div>
                    ))}
                    <dd className="flex items-center gap-1.5 pt-1 text-[13px] font-medium">
                      {INDUSTRIES.linkPrefix} {ind.name} {INDUSTRIES.linkSuffix}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </dd>
                  </dl>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== 06: proven */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={6} active={progress > 0.64} />
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Head kicker={PROVEN.kicker} title={PROVEN.title} />
            <a href={PROVEN.link.href} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[13px]">
              {PROVEN.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {PROVEN.testimonials.map((t, i) => (
              <Reveal key={t.sector} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-[22px] bg-[#262423] p-7">
                  <Quote className="h-5 w-5 text-lv-300" />
                  <blockquote className="mt-5 flex-1 text-[16px] leading-[1.6] text-white/85">{t.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-[12px]">
                    <span className="text-white/50">{t.role}</span>
                    <span className="rounded-full bg-lv-blue/20 px-2.5 py-0.5 text-lv-300">{t.sector}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-16 text-center text-[13px] text-white/50">{PROVEN.logosLabel}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
              <li key={i} className="flex h-14 items-center justify-center rounded-xl border border-dashed border-white/[0.12] px-3 text-center text-[11px] text-white/40">
                {PROVEN.logoPlaceholder}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =============================================== 07: timeline */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={7} active={progress > 0.74} />
        <div className="mx-auto max-w-[1240px] px-6">
          <Head center kicker={TIMELINE.kicker} title={TIMELINE.title} />
          <ol className="relative mx-auto mt-16 max-w-4xl">
            {TIMELINE.milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal as="li" key={`${m.year}-${i}`} variant={left ? "left" : "right"} className={`relative mb-6 lg:w-1/2 ${left ? "lg:pr-14 lg:text-right" : "lg:ml-auto lg:pl-14"}`}>
                  <span className={`absolute top-6 hidden h-3 w-3 rounded-full bg-lv-blue lg:block ${left ? "-right-1.5" : "-left-1.5"}`} />
                  <div className="rounded-[18px] border border-white/10 p-5">
                    <span className="text-[30px] font-semibold tracking-[-0.03em] text-lv-300">{m.year}</span>
                    <h3 className="mt-2 text-[16px] font-semibold">{m.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-[1.6] text-white/60">{m.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* =============================================== 08: insights */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={8} active={progress > 0.84} />
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Head kicker={INSIGHTS.kicker} title={INSIGHTS.title} />
            <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[13px]">
              {INSIGHTS.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {INSIGHTS.filters.map((f) => (
              <button key={f} type="button" onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-[13px] ${filter === f ? "bg-white text-lv-ink" : "border border-white/15 text-white/65"}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INSIGHTS.items.map((r, i) => (
              <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col overflow-hidden rounded-[22px] border border-white/10 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
                <GrainField tone={(["blue", "deep", "ink", "dusk"] as const)[i]} grain={0.3} className="h-36">
                  <span className="absolute left-3 top-3 rounded-full bg-lv-ink/70 px-2.5 py-1 text-[11px] backdrop-blur">{r.tag}</span>
                </GrainField>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex justify-between text-[11px] text-white/45">
                    <span>{r.meta}</span>
                    <span>{r.read}</span>
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold leading-[1.35]">{r.title}</h3>
                  <p className="mt-2 flex-1 text-[12px] leading-[1.6] text-white/55">{r.body}</p>
                  <span className="mt-5 flex items-center gap-1.5 text-[13px] font-medium">
                    {INSIGHTS.readLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================== 09: recognition + invest */}
      <section className="relative z-10 border-t border-white/[0.06] py-24 lg:py-32">
        <Node n={9} active={progress > 0.92} />
        <div className="mx-auto grid max-w-[1240px] gap-6 px-6 lg:grid-cols-2">
          <div className="rounded-[26px] border border-white/10 p-8">
            <Head kicker={RECOGNITION.kicker} title={RECOGNITION.title} />
            <ul className="mt-8 space-y-2">
              {RECOGNITION.items.map((a, i) => (
                <li key={i} className="flex items-center gap-4 rounded-2xl bg-white/[0.04] px-4 py-3">
                  <Award className="h-4 w-4 text-lv-300" />
                  <span className="flex-1 text-[13px]">{a.title}</span>
                  <span className="text-right text-[12px] text-white/45">{a.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[26px] bg-white p-8 text-lv-ink">
            <span className="inline-flex items-center gap-2 rounded-full border border-lv-ink/15 px-3 py-1 text-[12px] text-lv-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-lv-blue" />
              {INVESTMENT.kicker}
            </span>
            <h2 className="mt-5 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em]">{INVESTMENT.title}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {INVESTMENT.items.map((x) => (
                <div key={x.title}>
                  <x.icon className="h-5 w-5 text-lv-blue" />
                  <h3 className="mt-3 text-[15px] font-semibold">{x.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-lv-ink/60">{x.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[13px] font-medium text-white">
                {INVESTMENT.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-full border border-lv-ink/20 px-5 py-3 text-[13px] font-medium">
                {INVESTMENT.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== final cta */}
      <section className="relative z-10 overflow-hidden border-t border-white/[0.06]">
        <Node n={10} active={progress > 0.97} />
        <div className="relative mx-auto max-w-4xl px-6 pb-[30vh] pt-28 text-center">
          <span className="text-[13px] text-lv-300">{FINAL_CTA.kicker}</span>
          <h2 className="mt-6 text-[44px] font-semibold leading-[1.02] tracking-[-0.04em] lg:text-[76px]">
            <SplitWords text={FINAL_CTA.title} />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.6] text-white/60">{FINAL_CTA.body}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={FINAL_CTA.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-blue px-6 py-3.5 text-[14px] font-medium">
              {FINAL_CTA.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-[14px]">
              {FINAL_CTA.secondary.label}
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[42%]">
          <Globe dot="rgba(140,195,238,0.7)" dotSize={1.1} density={1.5} arcs="#0078D4" marker="#C2DFF6" lon={80} lat={-30} sway={10} frame={{ cx: 0.5, cy: 1.75, r: 0.55 }} />
        </div>
      </section>

      {/* ======================================================== footer */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-0.02em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-white/55">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="rounded-full border border-white/20 px-5 py-3 text-[13px]">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-full bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 border-t border-white/10 py-14 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="white" height={28} />
              <p className="mt-6 text-[15px]">{CHROME.footerBrand.tagline}</p>
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
                  <h4 className="text-[12px] font-semibold text-white/45">{c.title}</h4>
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
