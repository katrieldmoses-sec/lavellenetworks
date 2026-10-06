"use client";

/**
 * 20 — Signal.  Sources: the grain-gradient SaaS pages (blue grain panels,
 * thin orbit lines around a central object, Gantt-style roadmap, oversized
 * sign-off line in the footer).  Structure: the platform drawn as orbits —
 * products and architecture bands ride concentric rings around the earth —
 * and the decade laid out as a roadmap chart.  Type: Inter.
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
import { Lockup, NavMenu, MobileNav, GrainField } from "./kit/Brand";

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[13px] font-medium ${light ? "text-white/80" : "text-lv-ink/60"}`}>
      <span className={`h-px w-6 ${light ? "bg-white/60" : "bg-lv-blue"}`} />
      {children}
    </span>
  );
}

/** Items placed around a ring that slowly turns; labels stay upright. */
function Orbit({
  items,
  radius,
  duration,
  reverse = false,
  chip,
  offset = 0,
  still = false,
  compact = false,
}: {
  items: { label: string; icon: React.ComponentType<{ className?: string }> }[];
  radius: number;
  duration: number;
  reverse?: boolean;
  chip: string;
  /** Starting angle, as a fraction of a turn. */
  offset?: number;
  /** Hold chips in place (dense diagrams); only the globe moves. */
  still?: boolean;
  /** Smaller chips for dense rings. */
  compact?: boolean;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-current"
      style={{ width: `${radius * 2}%`, height: `${radius * 2}%`, transform: "translate(-50%,-50%)" }}
    >
      <div
        className={`absolute inset-0 ${still ? "" : "mk-spin"}`}
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {items.map((it, i) => {
          const a = (i / items.length + offset) * Math.PI * 2;
          return (
            <div key={it.label} className="absolute" style={{ left: `${(50 + Math.cos(a) * 50).toFixed(3)}%`, top: `${(50 + Math.sin(a) * 50).toFixed(3)}%` }}>
              <div
                className={still ? "" : "mk-spin"}
                style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "normal" : "reverse" }}
              >
                <span
                  className={`flex -translate-x-1/2 -translate-y-1/2 items-center whitespace-nowrap rounded-full font-medium ${
                    compact ? "gap-1 px-2.5 py-1 text-[11px]" : "gap-1.5 px-3 py-1.5 text-[12px]"
                  } ${chip}`}
                >
                  <it.icon className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
                  {it.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function M20() {
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root bg-white font-m-body text-lv-ink antialiased">
      {/* --------------------------------------------------------------- nav */}
      <header className="relative z-50">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center gap-10 px-6">
          <Lockup tone="ink" height={28} priority />
          <NavMenu
            className="gap-6"
            theme={{
              trigger: "py-2 text-[14px] font-medium text-lv-ink/70 hover:text-lv-ink",
              triggerOpen: "text-lv-blue",
              panel: "rounded-[16px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,84,147,0.4)] ring-1 ring-lv-ink/5",
              heading: "text-[11px] font-semibold text-lv-blue",
              link: "py-1.5 text-[14px] text-lv-ink/75 hover:text-lv-ink",
            }}
          />
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="text-[14px] font-medium text-lv-ink/70">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="rounded-[10px] bg-lv-blue px-5 py-2.5 text-[14px] font-medium text-white">
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      {/* ============================================================== hero */}
      <section className="px-3 sm:px-5">
        <GrainField tone="blue" grain={0.32} className="mx-auto min-h-[calc(100svh-96px)] max-w-[1400px] rounded-[24px] text-white">
          <div className="absolute inset-0 text-white/25">
            <div className="absolute left-[74%] top-1/2 aspect-square w-[min(100vh,920px)] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-[30%]">
                <Globe dot="rgba(255,255,255,0.95)" dotSize={1.1} density={1.6} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={4} />
              </div>
              <Orbit items={HERO.diagram.platform.map((p) => ({ label: `${p.brand} ${p.name}`, icon: p.icon }))} radius={27} duration={120} chip="bg-white text-lv-ink" />
              <Orbit items={HERO.diagram.sources} radius={38} duration={120} offset={1 / 8} chip="bg-white/15 text-white backdrop-blur" />
              <Orbit items={HERO.diagram.destinations} radius={48} duration={120} offset={1 / 16} chip="bg-lv-ink/40 text-white backdrop-blur" />
            </div>
          </div>
          <div className="relative flex min-h-[calc(100svh-96px)] flex-col justify-end p-6 lg:p-12">
            <div className="max-w-[640px]">
              <Kicker light>{HERO.kicker}</Kicker>
              <h1 className="mt-5 text-[52px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[76px] lg:text-[92px]">
                <SplitWords text={HERO.titleLead} />{" "}
                <SplitWords text={HERO.titleAccent} delay={250} wordClassName="text-lv-ink" />
              </h1>
              <Reveal delay={350}>
                <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-white/85">{HERO.body}</p>
              </Reveal>
              <Reveal delay={450} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={HERO.primary.href} className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[14px] font-medium text-lv-ink">
                  {HERO.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={HERO.secondary.href} className="inline-flex items-center justify-center rounded-[10px] border border-white/40 px-6 py-3.5 text-[14px] font-medium">
                  {HERO.secondary.label}
                </a>
              </Reveal>
              <p className="mt-8 text-[12px] text-white/70">
                {HERO.diagram.platformLabel} · {HERO.meta[0]} · {HERO.meta[1]}
              </p>
            </div>
          </div>
        </GrainField>
      </section>

      {/* ============================================================ stats */}
      <section className="mx-auto max-w-[1320px] px-6 py-24">
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

      {/* ========================================================= products */}
      <section className="mx-auto max-w-[1320px] px-6 pb-28">
        <Kicker>{PRODUCTS.kicker}</Kicker>
        <h2 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[48px]">
          <SplitWords text={PRODUCTS.title} stagger={30} />
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {PRODUCTS.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <a href={p.href} className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-lv-ink/10 p-7 transition-colors hover:border-lv-blue/40">
                {/* orbit lines */}
                <svg aria-hidden viewBox="0 0 200 200" className="mk-spin-slow pointer-events-none absolute -right-20 -top-20 h-72 w-72 text-lv-blue/20">
                  <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" />
                  <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" transform="rotate(60 100 100)" />
                  <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" transform="rotate(120 100 100)" />
                </svg>
                <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.3} className="flex h-14 w-14 items-center justify-center rounded-[14px] text-white">
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

      {/* ============================================= architecture: rings */}
      <section className="overflow-hidden bg-lv-paper py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Kicker>{ARCHITECTURE.kicker}</Kicker>
            <h2 className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] lg:text-[56px]">
              <SplitWords text={ARCHITECTURE.title} />
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-lv-ink/65">{ARCHITECTURE.body}</p>
            <ul className="mt-10 space-y-2">
              {ARCHITECTURE.bands.map((b, i) => (
                <li key={b.label} className={`flex items-center justify-between rounded-[12px] px-4 py-3 ${b.active ? "bg-lv-blue text-white" : "bg-white"}`}>
                  <span className="flex items-center gap-3 text-[14px] font-medium">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${b.active ? "border-white/50" : "border-lv-ink/20"}`}>{i + 1}</span>
                    {b.label}
                  </span>
                  <span className={`text-[12px] ${b.active ? "text-white/80" : "text-lv-ink/45"}`}>{b.badge ?? `${b.items.length}`}</span>
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
            <Orbit still compact items={ARCHITECTURE.bands[1].items} radius={25} duration={120} offset={0.0143} chip="bg-lv-blue text-white" />
            <Orbit still compact items={ARCHITECTURE.bands[2].items} radius={37} duration={120} offset={0.1542} chip="bg-white text-lv-ink shadow-sm" />
            <Orbit still compact items={[...ARCHITECTURE.bands[0].items, ...ARCHITECTURE.bands[3].items]} radius={49} duration={120} offset={0.0545} chip="bg-lv-ink text-white" />
          </Reveal>
        </div>
      </section>

      {/* ============================================================== why */}
      <section className="mx-auto max-w-[1320px] px-6 py-28 lg:py-36">
        <div className="max-w-3xl">
          <Kicker>{WHY.kicker}</Kicker>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[48px]">{WHY.title}</h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {WHY.items.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 70}>
              <div className="h-full rounded-[20px] border border-lv-ink/10 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lv-100 text-lv-blue">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-8 text-[19px] font-semibold tracking-[-0.015em]">{r.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-lv-ink/60">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======================================================= industries */}
      <section className="px-3 sm:px-5">
        <GrainField tone="deep" grain={0.3} className="mx-auto max-w-[1400px] rounded-[24px] px-6 py-24 text-white lg:px-14">
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
                <div key={x.name} className={`grid gap-3 transition-opacity duration-500 lg:grid-cols-3 ${ind === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                  {(["challenge", "solution", "outcome"] as const).map((k) => (
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

      {/* =========================================================== proven */}
      <section className="mx-auto max-w-[1320px] px-6 py-28 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Kicker>{PROVEN.kicker}</Kicker>
            <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[48px]">{PROVEN.title}</h2>
          </div>
          <a href={PROVEN.link.href} className="inline-flex items-center gap-2 text-[14px] font-medium text-lv-blue">
            {PROVEN.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {PROVEN.testimonials.map((t, i) => (
            <Reveal key={t.sector} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-[20px] bg-lv-paper p-7">
                <Quote className="h-6 w-6 text-lv-blue" />
                <blockquote className="mt-6 flex-1 text-[16px] leading-[1.6]">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-lv-ink/10 pt-4 text-[12px]">
                  <span className="text-lv-ink/55">{t.role}</span>
                  <span className="font-semibold text-lv-blue">{t.sector}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-14 text-[13px] text-lv-ink/55">{PROVEN.logosLabel}</p>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
            <li key={i} className="flex h-14 items-center justify-center rounded-[12px] border border-dashed border-lv-ink/15 px-3 text-center text-[11px] text-lv-ink/45">
              {PROVEN.logoPlaceholder}
            </li>
          ))}
        </ul>
      </section>

      {/* ============================================== timeline: roadmap */}
      <section className="bg-lv-paper py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6">
          <Kicker>{TIMELINE.kicker}</Kicker>
          <h2 className="mt-5 max-w-3xl text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] lg:text-[56px]">
            <SplitWords text={TIMELINE.title} />
          </h2>
          <div className="mt-14 overflow-x-auto rounded-[20px] bg-white p-5 lg:p-8">
            <div className="min-w-[860px]">
              {/* axis: one column per milestone, in order */}
              <div className="grid grid-cols-[220px_repeat(8,1fr)] border-b border-lv-ink/10 pb-3 text-[12px] font-medium text-lv-ink/45">
                <span />
                {TIMELINE.milestones.map((m, i) => (
                  <span key={`${m.year}-${i}`} className={i === TIMELINE.milestones.length - 1 ? "text-lv-blue" : ""}>
                    {m.year}
                  </span>
                ))}
              </div>
              {TIMELINE.milestones.map((m, i) => (
                <div key={`${m.year}-${i}`} className="grid grid-cols-[220px_repeat(8,1fr)] items-center border-b border-lv-ink/[0.06] py-3 last:border-0">
                  <div className="pr-4">
                    <h3 className="text-[13px] font-semibold">{m.title}</h3>
                    <p className="mt-0.5 text-[11px] leading-[1.45] text-lv-ink/55">{m.body}</p>
                  </div>
                  <div className="relative h-8" style={{ gridColumn: `${i + 2} / span ${8 - i}` }}>
                    <Reveal variant="clip" delay={i * 90} className="h-full">
                      <div
                        className={`h-full rounded-[8px] ${
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

      {/* ========================================================= insights */}
      <section className="mx-auto max-w-[1320px] px-6 py-28 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Kicker>{INSIGHTS.kicker}</Kicker>
            <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[48px]">{INSIGHTS.title}</h2>
          </div>
          <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 text-[14px] font-medium text-lv-blue">
            {INSIGHTS.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {INSIGHTS.filters.map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} className={`rounded-[10px] px-4 py-2 text-[13px] font-medium ${filter === f ? "bg-lv-blue text-white" : "bg-lv-paper text-lv-ink/65"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.items.map((r, i) => (
            <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col overflow-hidden rounded-[20px] border border-lv-ink/10 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
              <GrainField tone={(["blue", "sky", "deep", "dusk"] as const)[i]} grain={0.3} className="h-36">
                <svg aria-hidden viewBox="0 0 200 120" className="absolute inset-0 h-full w-full text-white/40">
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

      {/* =========================================== recognition + investment */}
      <section className="mx-auto grid max-w-[1320px] gap-4 px-6 pb-28 lg:grid-cols-2">
        <div className="rounded-[20px] border border-lv-ink/10 p-8">
          <Kicker>{RECOGNITION.kicker}</Kicker>
          <h2 className="mt-5 text-[26px] font-semibold leading-[1.2] tracking-[-0.025em]">{RECOGNITION.title}</h2>
          <ul className="mt-8 divide-y divide-lv-ink/10">
            {RECOGNITION.items.map((a, i) => (
              <li key={i} className="flex items-center gap-4 py-3.5">
                <Award className="h-4 w-4 text-lv-blue" />
                <span className="flex-1 text-[14px] font-medium">{a.title}</span>
                <span className="text-right text-[12px] text-lv-ink/50">{a.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <GrainField tone="blue" grain={0.3} className="rounded-[20px] p-8 text-white">
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
              <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                {INVESTMENT.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-[10px] border border-white/40 px-5 py-3 text-[13px] font-medium">
                {INVESTMENT.secondary.label}
              </a>
            </div>
          </div>
        </GrainField>
      </section>

      {/* ======================================================== final cta */}
      <section className="mx-auto max-w-[1320px] px-6 pb-20">
        <div className="grid gap-10 border-t border-lv-ink/10 pt-20 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className="text-[44px] font-semibold leading-[1] tracking-[-0.045em] lg:text-[72px]">
            <SplitWords text={FINAL_CTA.title} />
          </h2>
          <div>
            <p className="text-[16px] leading-[1.65] text-lv-ink/65">{FINAL_CTA.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={FINAL_CTA.primary.href} className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-lv-blue px-6 py-3.5 text-[14px] font-medium text-white">
                {FINAL_CTA.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center rounded-[10px] border border-lv-ink/20 px-6 py-3.5 text-[14px] font-medium">
                {FINAL_CTA.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ footer + sign-off */}
      <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
        <GrainField tone="deep" grain={0.3} className="mx-auto max-w-[1400px] rounded-[24px] px-6 pt-14 text-white lg:px-14">
          <div className="relative">
            <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-[24px] font-semibold tracking-[-0.025em]">{CHROME.footerBand.title}</h3>
                <p className="mt-2 text-[14px] text-white/70">{CHROME.footerBand.body}</p>
              </div>
              <div className="flex gap-3">
                <a href={CHROME.footerBand.expert.href} className="rounded-[10px] border border-white/30 px-5 py-3 text-[13px] font-medium">
                  {CHROME.footerBand.expert.label}
                </a>
                <a href={CHROME.footerBand.demo.href} className="rounded-[10px] bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                  {CHROME.footerBand.demo.label}
                </a>
              </div>
            </div>
            <div className="grid gap-12 py-12 lg:grid-cols-[1fr_2fr]">
              <div>
                <Lockup tone="white" height={28} />
                <p className="mt-6 max-w-xs text-[13px] leading-[1.65] text-white/65">{CHROME.footerBrand.blurb}</p>
                <ul className="mt-6 space-y-1.5 text-[13px] text-white/75">
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
                    <h4 className="text-[12px] font-semibold text-lv-300">{c.title}</h4>
                    <ul className="mt-4 space-y-2.5">
                      {c.links.map((l) => (
                        <li key={l.label}>
                          <a href={l.href} className="text-[13px] text-white/75 hover:text-white">
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-6 text-[12px] text-white/55 sm:flex-row">
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
            {/* oversized sign-off — the brand line from the footer and final CTA */}
            <p className="select-none whitespace-nowrap pb-2 pt-4 text-[8.6vw] font-semibold leading-[0.9] tracking-[-0.05em] text-white/90 lg:text-[118px]">
              {CHROME.footerBrand.tagline}
            </p>
          </div>
        </GrainField>
      </footer>
    </div>
  );
}
