"use client";

/**
 * 06 — Solara.  Sources: Solara (full-bleed sky with the name across it,
 * bottom row of subhead / copy / ruled stats, two-tone statement, bento with
 * a dominant blue tile) and the two-tone "striking concepts" page (huge
 * centred two-tone line, a row of tiles that open on hover).
 * Type: Instrument Sans.
 */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award, Check, Minus, Plus, Quote } from "lucide-react";
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
import { Lockup, NavMenu, MobileNav, Grain, GrainField } from "./kit/Brand";

function Slash({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`text-[12px] font-medium uppercase tracking-[0.04em] ${light ? "text-white/80" : "text-lv-ink/70"}`}>/ {children}</span>;
}

/** Ink lead + muted tail. */
function TwoTone({ text, lead, tail = "text-lv-ink/35" }: { text: string; lead: number; tail?: string }) {
  const w = text.split(" ");
  return (
    <>
      {w.slice(0, lead).join(" ")} <span className={tail}>{w.slice(lead).join(" ")}</span>
    </>
  );
}

export default function M06() {
  const [why, setWhy] = useState(0);
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");
  const [tlRef, tl] = useStickyProgress<HTMLDivElement>();

  return (
    <div className="mk-root bg-white font-m-body text-lv-ink antialiased">
      {/* ============================================================= hero */}
      <section className="p-2 sm:p-4">
        <div
          className="relative flex min-h-[calc(100svh-16px)] flex-col overflow-hidden rounded-[6px] text-white sm:min-h-[calc(100svh-32px)]"
          style={{ background: "linear-gradient(180deg,#0078D4 0%,#3C98DF 38%,#8CC3EE 70%,#C2DFF6 100%)" }}
        >
          <Grain opacity={0.3} />
          {/* earth curvature */}
          {/* Aspect-locked so the curve sits at the same height at every width */}
          <div className="absolute inset-x-0 bottom-0 aspect-[2.6/1]">
            <Globe dot="rgba(255,255,255,0.9)" dotSize={1.2} density={1.4} lon={80} lat={-30} sway={12} horizon={{ r: 0.55, top: 0.2 }} outline="rgba(255,255,255,0.7)" ocean="rgba(0,84,147,0.32)" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-lv-700/70 to-transparent" />

          <header className="relative z-50 flex items-center gap-8 px-6 py-5 lg:px-8">
            <Lockup tone="white" height={26} priority />
            <NavMenu
              className="gap-6"
              theme={{
                trigger: "py-2 text-[12px] font-medium uppercase tracking-[0.04em] text-white/90 hover:text-white",
                panel: "rounded-[6px] bg-white p-5 text-lv-ink",
                heading: "text-[10px] font-semibold uppercase tracking-[0.08em] text-lv-ink/45",
                link: "py-1.5 text-[13px] text-lv-ink/75 hover:text-lv-blue",
                chevron: false,
              }}
            />
            <div className="ml-auto hidden items-center gap-3 lg:flex">
              <a href={CHROME.headerCtas.expert.href} className="text-[12px] font-medium uppercase tracking-[0.04em] text-white/90">
                {CHROME.headerCtas.expert.label}
              </a>
              <a href={CHROME.headerCtas.demo.href} className="rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-lv-ink">
                {CHROME.headerCtas.demo.label}
              </a>
            </div>
            <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
          </header>

          <div className="relative px-6 pt-[6vh] lg:px-8">
            <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-white/85">{HERO.kicker}</span>
            <h1 className="mt-4 text-[13vw] font-medium leading-[0.92] tracking-[-0.055em] lg:text-[7.4vw]">
              <SplitWords text={HERO.titleLead} />{" "}
              <SplitWords text={HERO.titleAccent} delay={240} wordClassName="text-lv-ink" />
            </h1>
          </div>

          <div className="relative mt-auto grid gap-8 px-6 pb-8 lg:grid-cols-[1.2fr_1fr_1.4fr] lg:items-end lg:px-8">
            <Reveal delay={400}>
              <p className="text-[13px] text-white/85">
                {HERO.meta[0]} {HERO.meta[1]}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={HERO.primary.href} className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-lv-ink">
                  {HERO.primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={HERO.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-[14px] font-semibold">
                  {HERO.secondary.label}
                </a>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <p className="max-w-sm text-[15px] font-medium leading-[1.45]">{HERO.body}</p>
            </Reveal>
            <Reveal delay={600}>
              <dl className="grid grid-cols-4">
                {STATS.items.map((s) => (
                  <div key={s.label} className="border-l border-white/50 pl-3">
                    <dd className="text-[22px] font-medium leading-none tracking-[-0.02em] lg:text-[24px]">
                      <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                    </dd>
                    <dt className="mt-2 text-[11px] leading-[1.2] text-white/85">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Diagram strip under the hero */}
      <section className="border-b border-lv-ink/10 px-6 py-8 lg:px-12">
        <div className="mx-auto grid max-w-[1360px] items-center gap-6 lg:grid-cols-[1fr_auto_1.3fr_auto_1fr]">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-lv-ink/70">
            {HERO.diagram.sources.map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                <s.icon className="h-4 w-4 text-lv-blue" />
                {s.label}
              </li>
            ))}
          </ul>
          <ArrowRight className="hidden h-4 w-4 text-lv-ink/30 lg:block" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[12px] font-semibold uppercase tracking-[0.04em] text-lv-blue">{HERO.diagram.platformLabel}</span>
            {HERO.diagram.platform.map((p) => (
              <span key={p.name} className="rounded-full bg-lv-100 px-3 py-1.5 text-[12px] font-medium">
                {p.brand} {p.name}
              </span>
            ))}
          </div>
          <ArrowRight className="hidden h-4 w-4 text-lv-ink/30 lg:block" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-lv-ink/70">
            {HERO.diagram.destinations.map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                <s.icon className="h-4 w-4 text-lv-blue" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ======================================================== statement */}
      <section className="mx-auto grid max-w-[1360px] gap-8 px-6 py-28 lg:grid-cols-2 lg:px-12 lg:py-36">
        <Reveal>
          <Slash>{PRODUCTS.kicker}</Slash>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[28px] font-medium leading-[1.2] tracking-[-0.02em] lg:text-[36px]">
            <TwoTone text={STATS.statement} lead={7} />
          </p>
        </Reveal>
      </section>

      {/* ========================================================= products */}
      <section className="mx-auto max-w-[1360px] px-6 pb-28 lg:px-12">
        <Reveal>
          <h2 className="max-w-4xl text-[34px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[50px]">{PRODUCTS.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {PRODUCTS.items.map((p, i) => {
            const big = i === 1 || i === 2;
            return (
              <Reveal key={p.name} delay={(i % 2) * 90} className={big ? "lg:col-span-2" : ""}>
                {big ? (
                  <a href={p.href} className="group relative block h-full min-h-[420px] overflow-hidden rounded-[6px]">
                    <GrainField tone={i === 1 ? "blue" : "deep"} grain={0.3} className="absolute inset-0">
                      <div className="absolute inset-0 opacity-80">
                        <Globe dot="rgba(255,255,255,0.75)" dotSize={1} density={1.8} lon={i === 1 ? 78 : 10} lat={-30} speed={2} horizon={{ r: 0.38, top: 0.45, cx: 0.78 }} outline="rgba(255,255,255,0.5)" />
                      </div>
                    </GrainField>
                    <div className="relative flex h-full min-h-[420px] flex-col p-8 text-white">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lv-blue">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <span className="mt-8 text-[13px] text-white/75">
                        {p.brand} · {p.category}
                      </span>
                      <h3 className="mt-1 text-[40px] font-medium leading-none tracking-[-0.035em]">{p.name}</h3>
                      <p className="mt-4 max-w-md text-[16px] leading-[1.5] text-white/85">{p.desc}</p>
                      <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                        {p.features.map((f) => (
                          <li key={f} className="rounded-full bg-white/15 px-3 py-1.5 text-[12px] backdrop-blur">
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 flex items-center gap-2 text-[14px] font-semibold">
                        {p.cta}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                ) : (
                  <a href={p.href} className="group flex h-full min-h-[420px] flex-col rounded-[6px] bg-lv-paper p-4">
                    <GrainField tone="sky" grain={0.3} className="flex h-40 w-32 items-end rounded-[4px] p-3">
                      <p.icon className="relative h-7 w-7 text-lv-700" />
                    </GrainField>
                    <div className="mt-auto p-2">
                      <span className="text-[12px] text-lv-ink/55">
                        {p.brand} · {p.category}
                      </span>
                      <h3 className="mt-1 text-[22px] font-semibold tracking-[-0.02em]">{p.name}</h3>
                      <p className="mt-2 text-[14px] leading-[1.55] text-lv-ink/65">{p.desc}</p>
                      <ul className="mt-4 space-y-1">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-[12px] text-lv-ink/70">
                            <Check className="h-3.5 w-3.5 text-lv-blue" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-5 flex items-center gap-2 text-[13px] font-semibold">
                        {p.cta}
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===================================================== architecture */}
      <section className="bg-lv-paper py-28 lg:py-36">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <Slash>{ARCHITECTURE.kicker}</Slash>
            <h2 className="mt-5 text-[34px] font-medium leading-[1.06] tracking-[-0.03em] lg:text-[52px]">
              <SplitWords text={ARCHITECTURE.title} />
            </h2>
            <Reveal delay={200}>
              <p className="mt-5 text-[15px] leading-[1.6] text-lv-ink/60">{ARCHITECTURE.body}</p>
            </Reveal>
          </div>
          <div className="relative mt-16 grid items-center gap-4 lg:grid-cols-[1fr_380px_1fr]">
            {[0, 1].map((col) => (
              <div key={col} className={`grid gap-4 ${col === 0 ? "lg:order-1" : "lg:order-3"}`}>
                {ARCHITECTURE.bands.slice(col * 2, col * 2 + 2).map((b, i) => (
                  <Reveal key={b.label} delay={i * 100} variant={col === 0 ? "left" : "right"}>
                    <div className={`rounded-[6px] p-6 ${b.active ? "bg-lv-blue text-white" : "bg-white"}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[17px] font-semibold">{b.label}</span>
                        {b.badge && <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-lv-blue">{b.badge}</span>}
                      </div>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {b.items.map((it) => (
                          <li
                            key={it.label}
                            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] ${b.active ? "bg-white/15" : "bg-lv-paper text-lv-ink/75"}`}
                          >
                            <it.icon className="h-3 w-3" />
                            {it.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            ))}
            <Reveal variant="scale" className="order-first mx-auto aspect-square w-full max-w-[380px] lg:order-2">
              <GrainField tone="blue" grain={0.3} className="h-full w-full rounded-full">
                <Globe dot="rgba(255,255,255,0.9)" dotSize={1.1} density={1.6} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={4} />
              </GrainField>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================== why */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
          <div className="text-center">
            <Slash>{WHY.kicker}</Slash>
            <Reveal delay={100}>
              <h2 className="mx-auto mt-6 max-w-5xl text-[38px] font-medium leading-[1] tracking-[-0.045em] lg:text-[76px]">
                <TwoTone text={WHY.title} lead={6} tail="text-lv-ink/30" />
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 flex flex-col gap-2 lg:h-[300px] lg:flex-row">
            {WHY.items.map((r, i) => {
              const on = why === i;
              return (
                <button
                  type="button"
                  key={r.title}
                  onMouseEnter={() => setWhy(i)}
                  onFocus={() => setWhy(i)}
                  onClick={() => setWhy(i)}
                  className={`relative flex flex-col overflow-hidden rounded-[6px] p-5 text-left transition-[flex-grow,background-color,color] duration-700 ease-[cubic-bezier(.2,.7,.1,1)] ${
                    on ? "bg-lv-ink text-white lg:flex-[2.4]" : "bg-lv-paper lg:flex-1"
                  }`}
                >
                  {on && <Grain opacity={0.15} />}
                  <span className={`relative inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[11px] ${on ? "border-white/30" : "border-lv-ink/20"}`}>
                    <r.icon className="h-3.5 w-3.5" />
                  </span>
                  <p className={`relative mt-4 text-[13px] leading-[1.55] ${on ? "text-white/70" : "text-lv-ink/60 lg:hidden"}`}>
                    {r.body}
                  </p>
                  <h3 className="relative mt-auto pt-6 text-[19px] font-medium leading-[1.15] tracking-[-0.01em]">{r.title}</h3>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================= industries */}
      <section className="bg-lv-paper py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-6 lg:grid-cols-[1fr_1.6fr] lg:px-12">
          <div>
            <Slash>{INDUSTRIES.kicker}</Slash>
            <h2 className="mt-5 text-[32px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[44px]">
              <TwoTone text={INDUSTRIES.title} lead={3} />
            </h2>
          </div>
          <ul className="border-t border-lv-ink/15">
            {INDUSTRIES.items.map((it, i) => {
              const on = ind === i;
              return (
                <li key={it.name} className="border-b border-lv-ink/15">
                  <button type="button" onClick={() => setInd(on ? -1 : i)} aria-expanded={on} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                    <span className="flex items-center gap-4">
                      <it.icon className="h-5 w-5 text-lv-blue" />
                      <span className="text-[24px] font-medium tracking-[-0.02em]">{it.name}</span>
                    </span>
                    {on ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.7,.1,1)] ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <dl className="grid gap-5 pb-8 sm:grid-cols-3">
                        {(["challenge", "solution", "outcome"] as const).map((k) => (
                          <div key={k}>
                            <dt className="text-[12px] font-medium uppercase tracking-[0.04em] text-lv-700">/ {INDUSTRIES.labels[k]}</dt>
                            <dd className="mt-2 text-[14px] leading-[1.55] text-lv-ink/75">{it[k]}</dd>
                          </div>
                        ))}
                      </dl>
                      <a href={it.href} className="mb-8 inline-flex items-center gap-2 text-[14px] font-semibold">
                        {INDUSTRIES.linkPrefix} {it.name} {INDUSTRIES.linkSuffix}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* =========================================================== proven */}
      <section className="mx-auto max-w-[1360px] px-6 py-28 lg:px-12 lg:py-36">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Slash>{PROVEN.kicker}</Slash>
            <h2 className="mt-5 text-[32px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[44px]">
              <TwoTone text={PROVEN.title} lead={3} />
            </h2>
          </div>
          <a href={PROVEN.link.href} className="inline-flex items-center gap-2 justify-self-start rounded-full bg-lv-ink px-5 py-3 text-[13px] font-semibold text-white lg:justify-self-end">
            {PROVEN.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {PROVEN.testimonials.map((t, i) => (
            <Reveal key={t.sector} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-[6px] bg-lv-paper p-7">
                <Quote className="h-5 w-5 text-lv-blue" />
                <blockquote className="mt-8 flex-1 text-[18px] font-medium leading-[1.4] tracking-[-0.01em]">{t.quote}</blockquote>
                <figcaption className="mt-8 border-t border-lv-ink/10 pt-4 text-[12px] text-lv-ink/55">
                  {t.role} <span className="float-right font-semibold text-lv-700">{t.sector}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 border-t border-lv-ink/10 pt-8">
          <Slash>{PROVEN.logosLabel}</Slash>
          <ul className="mt-6 grid grid-cols-2 gap-px bg-lv-ink/10 sm:grid-cols-4">
            {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
              <li key={i} className="flex h-20 items-center justify-center bg-white px-4 text-center text-[11px] text-lv-ink/40">
                {PROVEN.logoPlaceholder}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================= timeline */}
      {/* Pinned: vertical scroll drives the track sideways. */}
      <section ref={tlRef} className="relative h-[260vh] bg-lv-ink text-white">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-[1360px] px-6 lg:px-12">
            <Slash light>{TIMELINE.kicker}</Slash>
            <h2 className="mt-5 max-w-3xl text-[34px] font-medium leading-[1.05] tracking-[-0.035em] lg:text-[56px]">{TIMELINE.title}</h2>
          </div>
          <div className="mt-14 pl-6 lg:pl-12">
            <ol
              className="flex w-max gap-3 pr-6 will-change-transform"
              style={{ transform: `translate3d(calc(${tl} * (100vw - 100% - 48px)),0,0)` }}
            >
              {TIMELINE.milestones.map((m, i) => (
                <li key={`${m.year}-${i}`} className={`flex h-[300px] w-[300px] shrink-0 flex-col rounded-[6px] p-6 ${i === TIMELINE.milestones.length - 1 ? "bg-lv-blue" : "bg-white/[0.06]"}`}>
                  <span className="text-[52px] font-medium leading-none tracking-[-0.045em]">{m.year}</span>
                  <h3 className="mt-auto text-[17px] font-semibold">{m.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-white/60">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mx-auto mt-10 h-px w-full max-w-[1360px] px-6 lg:px-12">
            <div className="h-px w-full bg-white/15">
              <div className="h-px bg-lv-300" style={{ width: `${tl * 100}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= insights */}
      <section className="mx-auto max-w-[1360px] px-6 py-28 lg:px-12 lg:py-36">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Slash>{INSIGHTS.kicker}</Slash>
            <h2 className="mt-5 text-[32px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[44px]">
              <TwoTone text={INSIGHTS.title} lead={2} />
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {INSIGHTS.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-[13px] transition-colors ${filter === f ? "bg-lv-ink text-white" : "bg-lv-paper text-lv-ink/65"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.items.map((r, i) => (
            <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
              <GrainField tone={(["blue", "sky", "deep", "paper"] as const)[i]} grain={0.3} className="aspect-[4/5] rounded-[6px]">
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium">{r.tag}</span>
              </GrainField>
              <div className="mt-4 flex justify-between text-[12px] text-lv-ink/50">
                <span>{r.meta}</span>
                <span>{r.read}</span>
              </div>
              <h3 className="mt-2 text-[17px] font-semibold leading-[1.3]">{r.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-lv-ink/60">{r.body}</p>
              <span className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold">
                {INSIGHTS.readLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
        <a href={INSIGHTS.link.href} className="mt-10 inline-flex items-center gap-2 text-[14px] font-semibold">
          {INSIGHTS.link.label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      {/* ============================================== recognition + invest */}
      <section className="bg-lv-paper py-28">
        <div className="mx-auto grid max-w-[1360px] gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <Slash>{RECOGNITION.kicker}</Slash>
            <h2 className="mt-5 text-[26px] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[32px]">{RECOGNITION.title}</h2>
            <ul className="mt-10 border-t border-lv-ink/15">
              {RECOGNITION.items.map((a, i) => (
                <Reveal as="li" key={i} delay={i * 50} className="flex items-center gap-4 border-b border-lv-ink/15 py-4">
                  <Award className="h-4 w-4 text-lv-blue" />
                  <span className="flex-1 text-[14px] font-medium">{a.title}</span>
                  <span className="text-right text-[12px] text-lv-ink/50">{a.body}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Slash>{INVESTMENT.kicker}</Slash>
            <h2 className="mt-5 text-[26px] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[32px]">{INVESTMENT.title}</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {INVESTMENT.items.map((p, i) => (
                <Reveal key={p.title} delay={i * 70} className="rounded-[6px] bg-white p-5">
                  <p.icon className="h-5 w-5 text-lv-blue" />
                  <h3 className="mt-6 text-[15px] font-semibold">{p.title}</h3>
                  <p className="mt-2 text-[12px] leading-[1.6] text-lv-ink/60">{p.body}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[13px] font-semibold text-white">
                {INVESTMENT.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-full border border-lv-ink/20 px-5 py-3 text-[13px] font-semibold">
                {INVESTMENT.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== final cta */}
      <section className="p-2 sm:p-4">
        <div
          className="relative overflow-hidden rounded-[6px] px-6 pb-[34vh] pt-24 text-white lg:px-8"
          style={{ background: "linear-gradient(180deg,#005493 0%,#0078D4 45%,#8CC3EE 100%)" }}
        >
          <Grain opacity={0.3} />
          <div className="absolute inset-x-0 bottom-0 aspect-[3.2/1]">
            <Globe dot="rgba(255,255,255,0.9)" dotSize={1.2} density={1.4} lon={80} lat={-30} sway={12} horizon={{ r: 0.5, top: 0.25 }} outline="rgba(255,255,255,0.7)" ocean="rgba(0,84,147,0.32)" />
          </div>
          <div className="relative">
            <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-white/85">{FINAL_CTA.kicker}</span>
            <h2 className="mt-5 max-w-5xl text-[44px] font-medium leading-[0.95] tracking-[-0.05em] lg:text-[96px]">
              <SplitWords text={FINAL_CTA.title} />
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-md text-[16px] leading-[1.55] text-white/85">{FINAL_CTA.body}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={FINAL_CTA.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-lv-ink">
                  {FINAL_CTA.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3.5 text-[14px] font-semibold">
                  {FINAL_CTA.secondary.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== footer */}
      <footer className="mx-auto max-w-[1360px] px-6 pb-10 pt-20 lg:px-12">
        <div className="grid gap-8 border-b border-lv-ink/10 pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h3 className="text-[28px] font-medium tracking-[-0.025em]">{CHROME.footerBand.title}</h3>
            <p className="mt-2 text-[14px] text-lv-ink/60">{CHROME.footerBand.body}</p>
          </div>
          <div className="flex gap-3">
            <a href={CHROME.footerBand.expert.href} className="rounded-full border border-lv-ink/20 px-5 py-3 text-[13px] font-semibold">
              {CHROME.footerBand.expert.label}
            </a>
            <a href={CHROME.footerBand.demo.href} className="rounded-full bg-lv-blue px-5 py-3 text-[13px] font-semibold text-white">
              {CHROME.footerBand.demo.label}
            </a>
          </div>
        </div>
        <div className="grid gap-12 py-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <Lockup tone="ink" height={30} />
            <p className="mt-6 text-[15px] font-medium">{CHROME.footerBrand.tagline}</p>
            <p className="mt-3 max-w-xs text-[13px] leading-[1.6] text-lv-ink/55">{CHROME.footerBrand.blurb}</p>
            <ul className="mt-6 space-y-1.5 text-[13px] text-lv-ink/65">
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
                <h4 className="text-[12px] font-medium uppercase tracking-[0.04em] text-lv-ink/45">{c.title}</h4>
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
        <div className="flex flex-col justify-between gap-4 border-t border-lv-ink/10 pt-6 text-[12px] text-lv-ink/50 sm:flex-row">
          <span>
            {CHROME.copyright} · {CHROME.builtIn}
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
      </footer>
    </div>
  );
}
