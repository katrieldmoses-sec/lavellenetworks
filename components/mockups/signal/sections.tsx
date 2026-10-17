"use client";

/**
 * Section library for the Signal series. Each export renders one homepage
 * section in full (every string from lib/content/home.ts), in Signal's
 * language, carrying a donor's best idea:
 *
 *   Bloom  — bento figures, stacking product cards, tabbed industries
 *   Solara — two-tone statements, bento with sky tiles, expanding reasons,
 *            accordion industries, the pinned sideways decade, horizon close
 *   Atlas  — globe straddling a dark panel, expanded caps, centred close
 *   Signal — orbit cards, orbit architecture, Gantt decade, grain insights
 */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award, Check, Minus, Plus, Quote } from "lucide-react";
import {
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
  HERO,
} from "@/lib/content/home";
import Globe from "../kit/Globe";
import { Reveal, SplitWords, Count, useStickyProgress } from "../kit/Motion";
import { GrainField, Grain } from "../kit/Brand";
import { Kicker, TwoTone, H2, Btn, Orbit, XCAPS } from "./parts";

const WRAP = "mx-auto max-w-[1320px] px-6";

/* =================================================================== STATS */

/** Bloom: two-tone statement over a bento of figures. */
export function StatsBento() {
  return (
    <section className={`${WRAP} py-24 lg:py-32`}>
      <Reveal>
        <h2 className="max-w-4xl text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[50px]">
          <TwoTone text={STATS.statement} lead={4} />
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        <Reveal className="md:col-span-2">
          <GrainField tone="sky" grain={0.22} className="flex h-full min-h-[260px] flex-col justify-between rounded-[22px] p-7">
            <div className="absolute -bottom-24 -right-16 h-72 w-72 text-lv-blue/30">
              <svg viewBox="0 0 200 200" className="mk-spin-slow h-full w-full" aria-hidden>
                <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeDasharray="2 6" />
              </svg>
            </div>
            <span className="relative text-[15px] font-medium text-lv-ink/70">{STATS.items[0].label}</span>
            <span className="relative text-[88px] font-semibold leading-none tracking-[-0.06em] lg:text-[112px]">
              <Count end={STATS.items[0].end} suffix={STATS.items[0].suffix} />
            </span>
          </GrainField>
        </Reveal>
        {STATS.items.slice(1).map((s, i) => (
          <Reveal key={s.label} delay={(i + 1) * 90}>
            {i === 1 ? (
              <GrainField tone="blue" grain={0.3} className="flex h-full min-h-[260px] flex-col justify-between rounded-[22px] p-7 text-white">
                <span className="relative text-[15px] font-medium text-white/80">{s.label}</span>
                <span className="relative text-[46px] font-semibold leading-none tracking-[-0.05em] xl:text-[52px]">
                  <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                </span>
              </GrainField>
            ) : (
              <div className={`flex h-full min-h-[260px] flex-col justify-between rounded-[22px] p-7 ${i === 0 ? "bg-lv-ink text-white" : "border border-lv-ink/10"}`}>
                <span className={`text-[15px] font-medium ${i === 0 ? "text-white/70" : "text-lv-ink/60"}`}>{s.label}</span>
                <span className="text-[52px] font-semibold leading-none tracking-[-0.05em]">
                  <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                </span>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Solara: the statement in two tones; optionally a ruled row of figures. */
export function StatsRuled({ figures = true }: { figures?: boolean }) {
  return (
    <section className={`${WRAP} py-24 lg:py-32`}>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <Reveal>
          <Kicker>{HERO.kicker}</Kicker>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[30px] font-medium leading-[1.2] tracking-[-0.025em] lg:text-[44px]">
            <TwoTone text={STATS.statement} lead={7} />
          </p>
        </Reveal>
      </div>
      {figures && (
        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:ml-[220px] lg:grid-cols-4">
          {STATS.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="border-l border-lv-ink/15 pl-5">
              <dd className="text-[48px] font-semibold leading-none tracking-[-0.05em] lg:text-[52px] xl:text-[60px]">
                <Count end={s.end} suffix={s.suffix} separator={s.separator} />
              </dd>
              <dt className="mt-3 text-[13px] text-lv-ink/55">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      )}
    </section>
  );
}

/** Signal's original: statement left, four tiles right. */
export function StatsSignal() {
  return (
    <section className={`${WRAP} py-24`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <Reveal>
          <p className="text-[26px] font-medium leading-[1.3] tracking-[-0.025em] lg:text-[32px]">{STATS.statement}</p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              {i === 2 ? (
                <GrainField tone="blue" grain={0.3} className="flex h-full min-h-[170px] flex-col justify-between rounded-[16px] p-5 text-white">
                  <dt className="relative text-[13px] text-white/80">{s.label}</dt>
                  <dd className="relative text-[34px] font-semibold leading-none tracking-[-0.04em]">
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </dd>
                </GrainField>
              ) : (
                <div className="flex h-full min-h-[170px] flex-col justify-between rounded-[16px] border border-lv-ink/10 p-5">
                  <dt className="text-[13px] text-lv-ink/55">{s.label}</dt>
                  <dd className="text-[34px] font-semibold leading-none tracking-[-0.04em]">
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </dd>
                </div>
              )}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ================================================================ PRODUCTS */

function OrbitLines({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={`pointer-events-none ${className}`}>
      <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" />
      <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" transform="rotate(60 100 100)" />
      <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" transform="rotate(120 100 100)" />
    </svg>
  );
}

/** Signal: four orbit cards; the rings speed up on hover. */
export function ProductsOrbit() {
  return (
    <section className={`${WRAP} pb-28`}>
      <Kicker>{PRODUCTS.kicker}</Kicker>
      <H2 className="max-w-3xl">{PRODUCTS.title}</H2>
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {PRODUCTS.items.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 80}>
            <a href={p.href} className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-lv-ink/10 p-7 transition-colors duration-500 hover:border-lv-blue/40">
              <div className="absolute -right-20 -top-20 h-72 w-72 text-lv-blue/20 transition-colors duration-500 group-hover:text-lv-blue/45">
                <OrbitLines className="mk-spin-slow h-full w-full group-hover:[animation-duration:14s]" />
              </div>
              <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.3} className="flex h-14 w-14 items-center justify-center rounded-[14px] text-white transition-transform duration-500 group-hover:-translate-y-1">
                <p.icon className="relative h-6 w-6" />
              </GrainField>
              <span className="mt-10 text-[13px] text-lv-ink/55">
                {p.brand} · {p.category}
              </span>
              <h3 className="mt-1 text-[36px] font-semibold leading-none tracking-[-0.04em]">{p.name}</h3>
              <p className="mt-4 max-w-md text-[15px] leading-[1.6] text-lv-ink/65">{p.desc}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] leading-[1.4]">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lv-blue" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="mt-auto flex items-center gap-2 pt-8 text-[14px] font-medium text-lv-blue">
                {p.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Bloom: sticky heading; product cards stack over each other as you scroll. */
export function ProductsStack() {
  return (
    <section className={`${WRAP} grid gap-12 pb-28 lg:grid-cols-[0.85fr_1.15fr]`}>
      <div>
        <div className="lg:sticky lg:top-28">
          <Kicker>{PRODUCTS.kicker}</Kicker>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] lg:text-[48px]">
            <TwoTone text={PRODUCTS.title} lead={3} />
          </h2>
          <div className="relative mt-12 hidden aspect-square w-[260px] text-lv-blue/25 lg:block">
            <OrbitLines className="mk-spin-slow absolute inset-0 h-full w-full" />
            <div className="absolute inset-[28%] overflow-hidden rounded-full">
              <GrainField tone="blue" grain={0.3} className="h-full w-full rounded-full">
                <Globe dot="rgba(255,255,255,0.95)" dotSize={0.8} density={2.2} lon={78} lat={18} speed={6} />
              </GrainField>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {PRODUCTS.items.map((p, i) => (
          <div key={p.name} className="lg:sticky" style={{ top: 96 + i * 22 }}>
            <a
              href={p.href}
              className="group relative block overflow-hidden rounded-[26px] border border-lv-ink/[0.07] bg-white p-7 shadow-[0_24px_50px_-40px_rgba(0,84,147,0.55)] transition-colors hover:border-lv-blue/35 lg:p-9"
            >
              <div className="absolute -right-24 -top-24 h-80 w-80 text-lv-blue/15">
                <OrbitLines className="mk-spin-slow h-full w-full" />
              </div>
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <span className="text-[13px] font-medium text-lv-700">
                    {p.brand} · {p.category}
                  </span>
                  <h3 className="mt-1 text-[44px] font-semibold leading-none tracking-[-0.045em]">{p.name}</h3>
                </div>
                <GrainField tone={(["blue", "deep", "blue", "deep"] as const)[i]} grain={0.3} className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] text-white">
                  <p.icon className="relative h-7 w-7" />
                </GrainField>
              </div>
              <p className="relative mt-6 max-w-md text-[16px] leading-[1.55] text-lv-ink/70">{p.desc}</p>
              <ul className="relative mt-6 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 rounded-full bg-lv-paper px-3 py-1.5 text-[12px] font-medium text-lv-ink/75">
                    <Check className="h-3.5 w-3.5 text-lv-blue" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="relative mt-8 inline-flex items-center gap-2 text-[14px] font-semibold">
                {p.cta}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lv-ink text-white transition-colors group-hover:bg-lv-blue">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Solara: bento — two dominant grain tiles with a planet rising inside. */
export function ProductsBento() {
  return (
    <section className={`${WRAP} pb-28`}>
      <Kicker>{PRODUCTS.kicker}</Kicker>
      <h2 className="mt-5 max-w-4xl text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] lg:text-[50px]">
        <TwoTone text={PRODUCTS.title} lead={3} />
      </h2>
      <div className="mt-14 grid gap-3 lg:grid-cols-3">
        {PRODUCTS.items.map((p, i) => {
          const big = i === 1 || i === 2;
          return (
            <Reveal key={p.name} delay={(i % 2) * 90} className={big ? "lg:col-span-2" : ""}>
              {big ? (
                <a href={p.href} className="group relative block h-full min-h-[440px] overflow-hidden rounded-[22px]">
                  <GrainField tone={i === 1 ? "blue" : "deep"} grain={0.3} className="absolute inset-0">
                    <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:-translate-y-4">
                      <Globe dot="rgba(255,255,255,0.85)" dotSize={1.05} density={1.6} lon={80} lat={-30} sway={8} horizon={{ r: 0.42, top: 0.56, cx: 0.72 }} outline="rgba(255,255,255,0.4)" ocean="rgba(0,84,147,0.25)" />
                    </div>
                  </GrainField>
                  <div className="relative flex h-full min-h-[440px] flex-col p-8 text-white">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lv-blue">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <span className="mt-8 text-[13px] text-white/75">
                      {p.brand} · {p.category}
                    </span>
                    <h3 className="mt-1 text-[44px] font-semibold leading-none tracking-[-0.04em]">{p.name}</h3>
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
                <a href={p.href} className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-[22px] bg-lv-paper p-6">
                  <div className="absolute -right-16 -top-16 h-60 w-60 text-lv-blue/20">
                    <OrbitLines className="mk-spin-slow h-full w-full" />
                  </div>
                  <GrainField tone="sky" grain={0.3} className="flex h-36 w-28 items-end rounded-[14px] p-3">
                    <p.icon className="relative h-7 w-7 text-lv-700" />
                  </GrainField>
                  <div className="relative mt-auto">
                    <span className="text-[12px] text-lv-ink/55">
                      {p.brand} · {p.category}
                    </span>
                    <h3 className="mt-1 text-[26px] font-semibold tracking-[-0.03em]">{p.name}</h3>
                    <p className="mt-2 text-[14px] leading-[1.55] text-lv-ink/65">{p.desc}</p>
                    <ul className="mt-4 space-y-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[12px] text-lv-ink/70">
                          <Check className="h-3.5 w-3.5 text-lv-blue" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-lv-blue">
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
  );
}

/* ============================================================ ARCHITECTURE */

/**
 * Signal: the orbit diagram. Hovering a band focuses its ring and fades
 * the others, so the four layers can be read one at a time.
 */
export function ArchOrbit() {
  const [focus, setFocus] = useState<number | null>(null);
  const ring = (i: number) => (i === 1 ? 0 : i === 2 ? 1 : 2);
  const f = focus === null ? null : ring(focus);
  return (
    <section className="overflow-hidden bg-lv-paper py-28 lg:py-36">
      <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]`}>
        <div>
          <Kicker>{ARCHITECTURE.kicker}</Kicker>
          <h2 className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] lg:text-[56px]">
            <SplitWords text={ARCHITECTURE.title} />
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-lv-ink/65">{ARCHITECTURE.body}</p>
          <ul className="mt-10 space-y-2" onMouseLeave={() => setFocus(null)}>
            {ARCHITECTURE.bands.map((b, i) => (
              <li key={b.label}>
                <button
                  type="button"
                  onMouseEnter={() => setFocus(i)}
                  onFocus={() => setFocus(i)}
                  onBlur={() => setFocus(null)}
                  className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left transition-all duration-300 ${
                    b.active ? "bg-lv-blue text-white" : "bg-white"
                  } ${focus === i ? "translate-x-2 shadow-[0_14px_30px_-20px_rgba(0,84,147,0.6)]" : ""}`}
                >
                  <span className="flex items-center gap-3 text-[14px] font-medium">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${b.active ? "border-white/50" : "border-lv-ink/20"}`}>{i + 1}</span>
                    {b.label}
                  </span>
                  <span className={`text-[12px] ${b.active ? "text-white/80" : "text-lv-ink/45"}`}>{b.badge ?? `${b.items.length}`}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <Reveal variant="scale" className="relative mx-auto aspect-square w-full max-w-[640px] text-lv-ink/15">
          <div className="absolute inset-[37%] overflow-hidden rounded-full">
            <GrainField tone="blue" grain={0.3} className="h-full w-full rounded-full">
              <Globe dot="rgba(255,255,255,0.95)" dotSize={0.9} density={2} lon={78} lat={18} speed={5} />
            </GrainField>
          </div>
          <Orbit still compact items={ARCHITECTURE.bands[1].items} radius={25} offset={0.0143} chip="bg-lv-blue text-white" packets="#0078D4" dim={f !== null && f !== 0} />
          <Orbit still compact items={ARCHITECTURE.bands[2].items} radius={37} offset={0.1542} chip="bg-white text-lv-ink shadow-sm" packets="#8CC3EE" packetSpeed={14} dim={f !== null && f !== 1} />
          <Orbit
            still
            compact
            items={[...ARCHITECTURE.bands[0].items, ...ARCHITECTURE.bands[3].items]}
            radius={49}
            offset={0.0545}
            chip="bg-lv-ink text-white"
            packets="#201E1D"
            packetSpeed={20}
            dim={f !== null && f !== 2}
          />
        </Reveal>
      </div>
    </section>
  );
}

/** Atlas: a dark panel with the globe straddling its top edge. */
export function ArchAtlas() {
  return (
    <section className={`${WRAP} pb-28 pt-40`}>
      <div className="relative rounded-[30px] bg-lv-ink px-6 pb-14 pt-44 text-white lg:px-14 lg:pt-52">
        <Grain opacity={0.1} className="rounded-[30px]" />
        <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 lg:h-[340px] lg:w-[340px]">
          <div className="absolute -inset-8 text-white/15">
            <OrbitLines className="mk-spin-slow h-full w-full" />
          </div>
          <div className="relative h-full w-full rounded-full bg-white p-3">
            <div className="h-full w-full overflow-hidden rounded-full bg-lv-ink">
              <Globe dot="rgba(194,223,246,0.95)" dotSize={1.1} density={1.6} arcs="#0078D4" marker="#8CC3EE" lon={78} lat={18} speed={5} />
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <Kicker light>{ARCHITECTURE.kicker}</Kicker>
          <h2 className={`${XCAPS} mt-6 text-[30px] leading-[1.04] lg:text-[46px]`}>
            <SplitWords text={ARCHITECTURE.title} />
          </h2>
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-white/60">{ARCHITECTURE.body}</p>
          </Reveal>
        </div>
        <div className="relative mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {ARCHITECTURE.bands.map((b, i) => (
            <Reveal key={b.label} delay={i * 90}>
              <div className={`group h-full rounded-[20px] p-5 transition-transform duration-500 hover:-translate-y-1 ${b.active ? "bg-lv-blue" : "bg-white/[0.06]"}`}>
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
  );
}

/* ===================================================================== WHY */

/** Solara: a row of tiles; the one you point at opens and darkens. */
export function WhyTiles() {
  const [on, setOn] = useState(0);
  return (
    <section className={`${WRAP} py-28 lg:py-36`}>
      <div className="text-center">
        <Kicker>{WHY.kicker}</Kicker>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-6 max-w-5xl text-[38px] font-semibold leading-[1] tracking-[-0.045em] lg:text-[72px]">
            <TwoTone text={WHY.title} lead={6} tail="text-lv-ink/30" />
          </h2>
        </Reveal>
      </div>
      <div className="mt-16 flex flex-col gap-2 lg:h-[320px] lg:flex-row">
        {WHY.items.map((r, i) => {
          const open = on === i;
          return (
            <button
              type="button"
              key={r.title}
              onMouseEnter={() => setOn(i)}
              onFocus={() => setOn(i)}
              onClick={() => setOn(i)}
              className={`relative flex flex-col overflow-hidden rounded-[20px] p-6 text-left transition-[flex-grow,background-color,color] duration-700 ease-[cubic-bezier(.2,.7,.1,1)] ${
                open ? "bg-lv-ink text-white lg:flex-[2.6]" : "bg-lv-paper lg:flex-1"
              }`}
            >
              {open && (
                <>
                  <Grain opacity={0.15} />
                  <div className="absolute -bottom-20 -right-20 h-64 w-64 text-white/10">
                    <OrbitLines className="mk-spin-slow h-full w-full" />
                  </div>
                </>
              )}
              <span className={`relative flex h-10 w-10 items-center justify-center rounded-full ${open ? "bg-lv-blue text-white" : "bg-white text-lv-blue"}`}>
                <r.icon className="h-4 w-4" />
              </span>
              <p className={`relative mt-5 max-w-sm text-[14px] leading-[1.6] ${open ? "text-white/70" : "text-lv-ink/60 lg:hidden"}`}>{r.body}</p>
              <h3 className="relative mt-auto pt-6 text-[19px] font-semibold leading-[1.15] tracking-[-0.01em]">{r.title}</h3>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/** Bloom: numbered cards on paper. */
export function WhyNumbered() {
  return (
    <section className="bg-lv-paper py-28 lg:py-36">
      <div className={WRAP}>
        <Kicker>{WHY.kicker}</Kicker>
        <h2 className="mt-5 max-w-4xl text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] lg:text-[50px]">
          <TwoTone text={WHY.title} lead={5} />
        </h2>
        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {WHY.items.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 90}>
              <div className="group flex h-full flex-col rounded-[22px] bg-white p-7 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lv-100 text-lv-blue transition-colors group-hover:bg-lv-blue group-hover:text-white">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <span className="text-[13px] font-medium text-lv-ink/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-10 text-[19px] font-semibold tracking-[-0.01em]">{r.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-lv-ink/60">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== INDUSTRIES */

const KEYS = ["challenge", "solution", "outcome"] as const;

/** Signal: deep grain panel, tabbed. */
export function IndDeep() {
  const [ind, setInd] = useState(0);
  return (
    <section className="px-3 sm:px-5">
      <GrainField tone="deep" grain={0.3} className="mx-auto max-w-[1400px] rounded-[24px] px-6 py-24 text-white lg:px-14">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] text-white/10">
          <OrbitLines className="mk-spin-slow h-full w-full" />
        </div>
        <div className="relative">
          <Kicker light>{INDUSTRIES.kicker}</Kicker>
          <h2 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[48px]">{INDUSTRIES.title}</h2>
          <div className="mt-12 flex flex-wrap gap-2">
            {INDUSTRIES.items.map((x, i) => (
              <button
                key={x.name}
                type="button"
                onClick={() => setInd(i)}
                className={`flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[14px] font-medium transition-colors ${ind === i ? "bg-white text-lv-ink" : "bg-white/10 text-white/80 hover:bg-white/15"}`}
              >
                <x.icon className="h-4 w-4" />
                {x.name}
              </button>
            ))}
          </div>
          <div className="relative mt-8">
            {INDUSTRIES.items.map((x, i) => (
              <div key={x.name} className={`grid gap-3 transition-all duration-500 lg:grid-cols-3 ${ind === i ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 translate-y-2 opacity-0"}`}>
                {KEYS.map((k) => (
                  <div key={k} className="rounded-[16px] border border-white/15 bg-lv-ink/30 p-6 backdrop-blur">
                    <span className="text-[12px] font-medium text-lv-300">{INDUSTRIES.labels[k]}</span>
                    <p className="mt-3 text-[16px] leading-[1.55]">{x[k]}</p>
                  </div>
                ))}
                <a href={x.href} className="inline-flex w-fit items-center gap-2 text-[14px] font-medium lg:col-span-3">
                  {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </GrainField>
    </section>
  );
}

/** Solara: accordion. */
export function IndAccordion() {
  const [ind, setInd] = useState(0);
  return (
    <section className="bg-lv-paper py-28 lg:py-36">
      <div className={`${WRAP} grid gap-12 lg:grid-cols-[1fr_1.6fr]`}>
        <div>
          <Kicker>{INDUSTRIES.kicker}</Kicker>
          <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] lg:text-[44px]">
            <TwoTone text={INDUSTRIES.title} lead={3} />
          </h2>
        </div>
        <ul className="border-t border-lv-ink/15">
          {INDUSTRIES.items.map((it, i) => {
            const open = ind === i;
            return (
              <li key={it.name} className="border-b border-lv-ink/15">
                <button type="button" onClick={() => setInd(open ? -1 : i)} aria-expanded={open} className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="flex items-center gap-4">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${open ? "bg-lv-blue text-white" : "bg-white text-lv-blue"}`}>
                      <it.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[24px] font-semibold tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">{it.name}</span>
                  </span>
                  {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.7,.1,1)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <dl className="grid gap-5 pb-6 sm:grid-cols-3">
                      {KEYS.map((k) => (
                        <div key={k}>
                          <dt className="text-[12px] font-semibold text-lv-700">{INDUSTRIES.labels[k]}</dt>
                          <dd className="mt-2 text-[14px] leading-[1.55] text-lv-ink/75">{it[k]}</dd>
                        </div>
                      ))}
                    </dl>
                    <a href={it.href} className="mb-8 inline-flex items-center gap-2 text-[14px] font-semibold text-lv-blue">
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
  );
}

/** Bloom: pill tabs, a grain panel and a definition list. */
export function IndBloom() {
  const [ind, setInd] = useState(0);
  return (
    <section className="px-3 sm:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[28px] bg-lv-paper px-5 py-20 lg:px-14 lg:py-24">
        <Kicker>{INDUSTRIES.kicker}</Kicker>
        <h2 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] lg:text-[50px]">
          <TwoTone text={INDUSTRIES.title} lead={3} />
        </h2>
        <div role="tablist" aria-label="Industries" className="mk-noscroll mt-12 flex gap-2 overflow-x-auto">
          {INDUSTRIES.items.map((x, i) => (
            <button
              key={x.name}
              role="tab"
              aria-selected={ind === i}
              type="button"
              onClick={() => setInd(i)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium transition-colors ${ind === i ? "bg-lv-ink text-white" : "bg-white text-lv-ink/70 hover:text-lv-ink"}`}
            >
              <x.icon className="h-4 w-4" />
              {x.name}
            </button>
          ))}
        </div>
        {INDUSTRIES.items.map((x, i) => (
          <div key={x.name} role="tabpanel" className={`mt-6 grid gap-3 lg:grid-cols-[1fr_1.4fr] ${ind === i ? "" : "hidden"}`}>
            <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.25} className="flex min-h-[320px] flex-col justify-between rounded-[22px] p-8 text-white">
              <div className="absolute inset-0 opacity-60">
                <Globe dot="rgba(255,255,255,0.85)" dotSize={1} density={1.8} lon={80} lat={-30} horizon={{ r: 0.5, top: 0.62 }} outline="rgba(255,255,255,0.35)" speed={2} />
              </div>
              <x.icon className="relative h-8 w-8" />
              <div className="relative">
                <h3 className="text-[44px] font-semibold leading-none tracking-[-0.04em]">{x.name}</h3>
                <a href={x.href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-lv-ink">
                  {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </GrainField>
            <dl className="divide-y divide-lv-ink/10 rounded-[22px] bg-white px-7">
              {KEYS.map((k) => (
                <div key={k} className="grid gap-2 py-7 sm:grid-cols-[140px_1fr]">
                  <dt className="text-[13px] font-semibold text-lv-700">{INDUSTRIES.labels[k]}</dt>
                  <dd className="text-[17px] leading-[1.5]">{x[k]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================== PROVEN */

export function Proven({ inkFirst = false }: { inkFirst?: boolean }) {
  return (
    <section className={`${WRAP} py-28 lg:py-36`}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-3xl">
          <Kicker>{PROVEN.kicker}</Kicker>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[48px]">
            <TwoTone text={PROVEN.title} lead={3} />
          </h2>
        </div>
        <a href={PROVEN.link.href} className="group inline-flex items-center gap-2 text-[14px] font-medium text-lv-blue">
          {PROVEN.link.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {PROVEN.testimonials.map((t, i) => {
          const ink = inkFirst && i === 0;
          return (
            <Reveal key={t.sector} delay={i * 80}>
              <figure className={`flex h-full flex-col rounded-[20px] p-7 ${ink ? "bg-lv-ink text-white" : "bg-lv-paper"}`}>
                <Quote className={`h-6 w-6 ${ink ? "text-lv-300" : "text-lv-blue"}`} />
                <blockquote className="mt-6 flex-1 text-[16px] leading-[1.6]">{t.quote}</blockquote>
                <figcaption className={`mt-6 flex items-center justify-between gap-3 border-t pt-4 text-[12px] ${ink ? "border-white/15" : "border-lv-ink/10"}`}>
                  <span className={ink ? "text-white/60" : "text-lv-ink/55"}>{t.role}</span>
                  <span className={`font-semibold ${ink ? "text-lv-300" : "text-lv-blue"}`}>{t.sector}</span>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-14 grid items-center gap-6 border-t border-lv-ink/10 pt-10 lg:grid-cols-[220px_1fr]">
        <p className="text-[13px] text-lv-ink/55">{PROVEN.logosLabel}</p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
            <li key={i} className="flex h-14 items-center justify-center rounded-[12px] border border-dashed border-lv-ink/15 px-3 text-center text-[11px] text-lv-ink/45">
              {PROVEN.logoPlaceholder}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================================================================ TIMELINE */

/** Signal: the decade as a roadmap chart; bars draw in. */
export function TimelineGantt() {
  return (
    <section className="bg-lv-paper py-28 lg:py-36">
      <div className={WRAP}>
        <Kicker>{TIMELINE.kicker}</Kicker>
        <h2 className="mt-5 max-w-3xl text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] lg:text-[56px]">
          <SplitWords text={TIMELINE.title} />
        </h2>
        <div className="mt-14 overflow-x-auto rounded-[20px] bg-white p-5 lg:p-8">
          <div className="min-w-[860px]">
            <div className="grid grid-cols-[220px_repeat(8,1fr)] border-b border-lv-ink/10 pb-3 text-[12px] font-medium text-lv-ink/45">
              <span />
              {TIMELINE.milestones.map((m, i) => (
                <span key={`${m.year}-${i}`} className={i === TIMELINE.milestones.length - 1 ? "text-lv-blue" : ""}>
                  {m.year}
                </span>
              ))}
            </div>
            {TIMELINE.milestones.map((m, i) => (
              <div key={`${m.year}-${i}`} className="group grid grid-cols-[220px_repeat(8,1fr)] items-center border-b border-lv-ink/[0.06] py-3 last:border-0">
                <div className="pr-4">
                  <h3 className="text-[13px] font-semibold">{m.title}</h3>
                  <p className="mt-0.5 text-[11px] leading-[1.45] text-lv-ink/55">{m.body}</p>
                </div>
                <div className="relative h-8" style={{ gridColumn: `${i + 2} / span ${8 - i}` }}>
                  <Reveal variant="clip" delay={i * 90} duration={1100} className="h-full">
                    <div
                      className={`h-full rounded-[8px] transition-transform duration-300 group-hover:scale-y-110 ${
                        i === TIMELINE.milestones.length - 1
                          ? "bg-lv-ink"
                          : m.year.startsWith("[")
                            ? "border border-dashed border-lv-blue/60 bg-lv-100"
                            : "bg-gradient-to-r from-lv-blue to-lv-300"
                      }`}
                    />
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Solara: pinned; vertical scroll drives the decade sideways. */
export function TimelinePinned() {
  const [ref, p] = useStickyProgress<HTMLDivElement>();
  return (
    <section ref={ref} className="relative h-[280vh] bg-lv-ink text-white">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <Grain opacity={0.1} />
        <div className={`${WRAP} relative w-full`}>
          <Kicker light>{TIMELINE.kicker}</Kicker>
          <h2 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] lg:text-[56px]">{TIMELINE.title}</h2>
        </div>
        <div className="relative mt-14 pl-6 lg:pl-[max(24px,calc((100vw-1320px)/2+24px))]">
          <ol className="flex w-max gap-3 pr-6 will-change-transform" style={{ transform: `translate3d(calc(${p} * (100vw - 100% - 48px)),0,0)` }}>
            {TIMELINE.milestones.map((m, i) => {
              const last = i === TIMELINE.milestones.length - 1;
              return (
                <li key={`${m.year}-${i}`} className={`relative flex h-[300px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[20px] p-6 ${last ? "bg-lv-blue" : "bg-white/[0.06]"}`}>
                  {last && <Grain opacity={0.25} />}
                  <span className="relative text-[52px] font-semibold leading-none tracking-[-0.045em]">{m.year}</span>
                  <h3 className="relative mt-auto text-[17px] font-semibold">{m.title}</h3>
                  <p className="relative mt-2 text-[13px] leading-[1.55] text-white/60">{m.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className={`${WRAP} relative mt-10 w-full`}>
          <div className="h-px w-full bg-white/15">
            <div className="h-px bg-lv-300" style={{ width: `${p * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ INSIGHTS */

export function Insights() {
  const [filter, setFilter] = useState("All");
  return (
    <section className={`${WRAP} py-28 lg:py-36`}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-3xl">
          <Kicker>{INSIGHTS.kicker}</Kicker>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[48px]">
            <TwoTone text={INSIGHTS.title} lead={2} />
          </h2>
        </div>
        <a href={INSIGHTS.link.href} className="group inline-flex items-center gap-2 text-[14px] font-medium text-lv-blue">
          {INSIGHTS.link.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {INSIGHTS.filters.map((f) => (
          <button key={f} type="button" onClick={() => setFilter(f)} className={`rounded-[10px] px-4 py-2 text-[13px] font-medium transition-colors ${filter === f ? "bg-lv-blue text-white" : "bg-lv-paper text-lv-ink/65 hover:text-lv-ink"}`}>
            {f}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {INSIGHTS.items.map((r, i) => (
          <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col overflow-hidden rounded-[20px] border border-lv-ink/10 transition-transform duration-500 hover:-translate-y-1 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
            <GrainField tone={(["blue", "sky", "deep", "dusk"] as const)[i]} grain={0.3} className="h-36">
              <svg aria-hidden viewBox="0 0 200 120" className="absolute inset-0 h-full w-full text-white/40 transition-transform duration-700 group-hover:scale-110">
                <ellipse cx="100" cy="60" rx={60 + i * 10} ry={24 + i * 4} fill="none" stroke="currentColor" />
                <ellipse cx="100" cy="60" rx={90 + i * 6} ry={40} fill="none" stroke="currentColor" strokeDasharray="2 5" />
              </svg>
              <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium">{r.tag}</span>
            </GrainField>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex justify-between text-[11px] text-lv-ink/50">
                <span>{r.meta}</span>
                <span>{r.read}</span>
              </div>
              <h3 className="mt-3 text-[16px] font-semibold leading-[1.35]">{r.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-[1.6] text-lv-ink/60">{r.body}</p>
              <span className="mt-5 flex items-center gap-1.5 text-[13px] font-medium text-lv-blue">
                {INSIGHTS.readLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ================================================= RECOGNITION + INVESTMENT */

export function RecogInvest() {
  return (
    <section className={`${WRAP} grid gap-4 pb-28 lg:grid-cols-2`}>
      <div className="rounded-[20px] border border-lv-ink/10 p-8">
        <Kicker>{RECOGNITION.kicker}</Kicker>
        <h2 className="mt-5 text-[26px] font-semibold leading-[1.2] tracking-[-0.025em]">{RECOGNITION.title}</h2>
        <ul className="mt-8 divide-y divide-lv-ink/10">
          {RECOGNITION.items.map((a, i) => (
            <Reveal as="li" key={i} delay={i * 50} className="flex items-center gap-4 py-3.5">
              <Award className="h-4 w-4 text-lv-blue" />
              <span className="flex-1 text-[14px] font-medium">{a.title}</span>
              <span className="text-right text-[12px] text-lv-ink/50">{a.body}</span>
            </Reveal>
          ))}
        </ul>
      </div>
      <GrainField tone="blue" grain={0.3} className="rounded-[20px] p-8 text-white">
        <div className="absolute -bottom-24 -right-24 h-80 w-80 text-white/15">
          <OrbitLines className="mk-spin-slow h-full w-full" />
        </div>
        <div className="relative">
          <Kicker light>{INVESTMENT.kicker}</Kicker>
          <h2 className="mt-5 text-[26px] font-semibold leading-[1.2] tracking-[-0.025em]">{INVESTMENT.title}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {INVESTMENT.items.map((x) => (
              <div key={x.title}>
                <x.icon className="h-5 w-5" />
                <h3 className="mt-3 text-[15px] font-semibold">{x.title}</h3>
                <p className="mt-1.5 text-[12px] leading-[1.6] text-white/85">{x.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={INVESTMENT.primary.href} tone="white" arrow>
              {INVESTMENT.primary.label}
            </Btn>
            <Btn href={INVESTMENT.secondary.href} tone="ghost-light">
              {INVESTMENT.secondary.label}
            </Btn>
          </div>
        </div>
      </GrainField>
    </section>
  );
}

/* =============================================================== FINAL CTA */

/** Signal: a large statement and the two actions. */
export function FinalSignal() {
  return (
    <section className={`${WRAP} pb-20`}>
      <div className="grid gap-10 border-t border-lv-ink/10 pt-20 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <h2 className="text-[44px] font-semibold leading-[1] tracking-[-0.045em] lg:text-[72px]">
          <SplitWords text={FINAL_CTA.title} />
        </h2>
        <div>
          <p className="text-[16px] leading-[1.65] text-lv-ink/65">{FINAL_CTA.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={FINAL_CTA.primary.href} tone="blue" arrow>
              {FINAL_CTA.primary.label}
            </Btn>
            <Btn href={FINAL_CTA.secondary.href} tone="ghost-dark">
              {FINAL_CTA.secondary.label}
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Solara: the headline over a sky with the planet rising beneath. */
export function FinalHorizon() {
  return (
    <section className="px-3 pb-4 sm:px-5">
      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[24px] px-6 pb-[32vh] pt-24 text-white lg:px-12"
        style={{ background: "linear-gradient(180deg,#005493 0%,#0078D4 45%,#8CC3EE 100%)" }}
      >
        <Grain opacity={0.3} />
        <div className="absolute inset-x-0 bottom-0 aspect-[3.2/1]">
          <Globe dot="rgba(255,255,255,0.92)" dotSize={1.2} density={1.4} arcs="#FFFFFF" marker="#FFFFFF" lon={80} lat={-30} sway={12} horizon={{ r: 0.5, top: 0.25 }} outline="rgba(255,255,255,0.7)" ocean="rgba(0,84,147,0.32)" />
        </div>
        <div className="relative">
          <span className="text-[13px] font-medium text-white/85">{FINAL_CTA.kicker}</span>
          <h2 className="mt-5 max-w-5xl text-[46px] font-semibold leading-[0.96] tracking-[-0.05em] lg:text-[96px]">
            <SplitWords text={FINAL_CTA.title} />
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-md text-[16px] leading-[1.6] text-white/85">{FINAL_CTA.body}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Btn href={FINAL_CTA.primary.href} tone="white" arrow>
                {FINAL_CTA.primary.label}
              </Btn>
              <Btn href={FINAL_CTA.secondary.href} tone="ghost-light">
                {FINAL_CTA.secondary.label}
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Atlas: centred, expanded caps, the earth rising out of the paper. */
export function FinalAtlas() {
  return (
    <section className="px-3 pb-4 sm:px-5">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[24px] bg-lv-paper px-6 pt-24 text-center">
        <Kicker>{FINAL_CTA.kicker}</Kicker>
        <h2 className={`${XCAPS} mx-auto mt-6 max-w-4xl text-[32px] leading-[1.04] lg:text-[60px]`}>
          <SplitWords text={FINAL_CTA.title} />
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.6] text-lv-ink/65">{FINAL_CTA.body}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Btn href={FINAL_CTA.primary.href} tone="blue" arrow>
            {FINAL_CTA.primary.label}
          </Btn>
          <Btn href={FINAL_CTA.secondary.href} tone="ghost-dark">
            {FINAL_CTA.secondary.label}
          </Btn>
        </div>
        <div className="relative mx-auto mt-14 h-[300px] max-w-[980px] lg:h-[380px]">
          <Globe dot="#005493" dotSize={1.15} density={1.5} arcs="#0078D4" marker="#0078D4" lon={78} lat={-30} sway={14} horizon={{ r: 0.4, top: 0.1 }} outline="rgba(0,84,147,0.3)" ocean="rgba(255,255,255,0.55)" />
        </div>
      </div>
    </section>
  );
}
