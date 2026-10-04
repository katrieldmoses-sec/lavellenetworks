"use client";

/**
 * 02 — Eclipse.  Source: Hamburg (black hero, planet-curve horizon, client
 * row on the curve, value cards, split feature).  Type: Unbounded + Inter.
 */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award, Check, MapPin, Plus } from "lucide-react";
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
import { Reveal, SplitWords, Count, Marquee, useScrollProgress } from "./kit/Motion";
import { Lockup, NavMenu, MobileNav, Grain, GrainField } from "./kit/Brand";

const D = "font-m-display";

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`text-[12px] font-medium uppercase tracking-[0.14em] ${dark ? "text-lv-300" : "text-lv-700"}`}>
      {children}
    </span>
  );
}

/** The planet: a white curve rising out of the ink, edged by a grain band. */
function Horizon() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] overflow-hidden lg:h-[320px]">
      {/* Crisp orbit line above the planet edge — a line, not a glow */}
      <div className="absolute left-1/2 top-[86px] h-[1600px] w-[221%] -translate-x-1/2 rounded-[50%] border-t-2 border-lv-blue lg:w-[161%]" />
      <div
        className="absolute left-1/2 top-[110px] h-[1600px] w-[220%] -translate-x-1/2 rounded-[50%] bg-white lg:w-[160%]"
      />
      <div className="absolute inset-0">
        <Grain opacity={0.35} />
      </div>
    </div>
  );
}

export default function M02() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(0);
  const [tlRef, tl] = useScrollProgress<HTMLDivElement>();

  return (
    <div className="mk-root font-m-body text-lv-ink antialiased">
      {/* =============================================================== hero */}
      <section className="relative overflow-hidden bg-lv-ink pb-[300px] text-white lg:pb-[360px]">
        <div className="absolute inset-0 opacity-40">
          <Globe dot="rgba(140,195,238,0.55)" dotSize={0.9} density={2.4} speed={1.5} lon={78} lat={30} frame={{ cx: 0.78, cy: 0.42, r: 0.36 }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-lv-ink via-lv-ink/85 to-transparent" />

        <header className="relative z-50">
          <div className="mx-auto flex h-20 max-w-[1320px] items-center gap-10 px-6">
            <Lockup tone="white" height={28} priority />
            <NavMenu
              className="gap-7"
              theme={{
                trigger: "py-2 text-[14px] text-white/75 transition-colors hover:text-white",
                triggerOpen: "text-white",
                panel: "rounded-[14px] border border-white/10 bg-lv-ink p-5",
                heading: "text-[11px] uppercase tracking-[0.12em] text-lv-300",
                link: "rounded-md py-1.5 text-[14px] text-white/75 hover:text-white",
              }}
            />
            <div className="ml-auto hidden items-center gap-6 lg:flex">
              <a href={CHROME.headerCtas.expert.href} className="text-[14px] text-white/75 hover:text-white">
                {CHROME.headerCtas.expert.label}
              </a>
              <a
                href={CHROME.headerCtas.demo.href}
                className="rounded-[10px] border border-white/60 bg-white px-5 py-2.5 text-[14px] font-medium text-lv-ink transition-colors hover:bg-lv-100"
              >
                {CHROME.headerCtas.demo.label}
              </a>
            </div>
            <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
          </div>
        </header>

        <div className="relative mx-auto grid max-w-[1320px] gap-16 px-6 pt-14 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
          <div>
            <Reveal>
              <Eyebrow dark>{HERO.kicker}</Eyebrow>
            </Reveal>
            <h1 className={`${D} mt-6 text-[44px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[64px] lg:text-[82px]`}>
              <SplitWords text={HERO.titleLead} />{" "}
              <SplitWords text={HERO.titleAccent} delay={240} wordClassName="text-lv-300" />
            </h1>
            <Reveal delay={300}>
              <p className="mt-7 max-w-[520px] text-[17px] leading-[1.6] text-white/60">{HERO.body}</p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-9 flex max-w-[560px] flex-col gap-2 rounded-[14px] border border-white/15 p-2 sm:flex-row sm:items-center">
                <a href={HERO.primary.href} className="group flex flex-1 items-center gap-2 px-4 py-3 text-[14px] text-white/80 hover:text-white">
                  {HERO.primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={HERO.secondary.href}
                  className="rounded-[10px] bg-white px-5 py-3 text-center text-[14px] font-medium text-lv-ink transition-colors hover:bg-lv-100"
                >
                  {HERO.secondary.label}
                </a>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <p className="mt-6 flex items-center gap-2 text-[13px] text-white/50">
                <MapPin className="h-3.5 w-3.5" />
                {HERO.meta[1]}
              </p>
            </Reveal>
          </div>

          {/* Platform as a fan of cards, fed by sources and feeding destinations */}
          <Reveal delay={250} variant="fade" className="relative">
            <ul className="flex flex-wrap justify-center gap-2">
              {HERO.diagram.sources.map((s) => (
                <li key={s.label} className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[12px] text-white/70">
                  <s.icon className="h-3.5 w-3.5" />
                  {s.label}
                </li>
              ))}
            </ul>
            <svg aria-hidden viewBox="0 0 400 40" className="mx-auto h-10 w-full max-w-[400px] text-lv-300">
              {[60, 150, 250, 340].map((x) => (
                <path key={x} d={`M${x} 0 C ${x} 24, 200 16, 200 40`} stroke="currentColor" strokeWidth="1" fill="none" className="mk-flow" />
              ))}
            </svg>
            <div className="relative mx-auto h-[300px] max-w-[440px]">
              <span className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 rounded-full bg-lv-blue px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em]">
                {HERO.diagram.platformLabel}
              </span>
              {HERO.diagram.platform.map((p, i) => (
                <div
                  key={p.name}
                  className="absolute left-1/2 top-1/2 w-[300px] sm:w-[340px]"
                  style={{
                    transform: `translate(-50%, -50%) translate(${(i - 1.5) * 26}px, ${(i - 1.5) * 34}px) rotate(${(i - 1.5) * -5}deg)`,
                    zIndex: 4 - i,
                  }}
                >
                  <div className="mk-float" style={{ animationDelay: `${i * -1.6}s` }}>
                  <div
                    className={`relative overflow-hidden rounded-[16px] border p-5 ${
                      i === 0 ? "border-white/20 bg-lv-blue" : "border-white/10 bg-[#2b2927]"
                    }`}
                  >
                    <Grain opacity={0.25} />
                    <div className="relative flex items-start justify-between">
                      <span className="text-[12px] text-white/65">{p.brand}</span>
                      <p.icon className="h-5 w-5 text-white/80" />
                    </div>
                    <div className={`${D} relative mt-8 text-[24px] tracking-[-0.02em]`}>{p.name}</div>
                    <div className="relative mt-3 h-[6px] w-16 rounded-full bg-white/25" />
                  </div>
                  </div>
                </div>
              ))}
            </div>
            <svg aria-hidden viewBox="0 0 400 40" className="mx-auto h-10 w-full max-w-[400px] text-lv-300">
              {[60, 150, 250, 340].map((x) => (
                <path key={x} d={`M200 0 C 200 24, ${x} 16, ${x} 40`} stroke="currentColor" strokeWidth="1" fill="none" className="mk-flow" />
              ))}
            </svg>
            <ul className="flex flex-wrap justify-center gap-2">
              {HERO.diagram.destinations.map((s) => (
                <li key={s.label} className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[12px] text-white/70">
                  <s.icon className="h-3.5 w-3.5" />
                  {s.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Horizon />

        {/* Row riding the curve */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto grid max-w-[1320px] items-end gap-8 px-6 pb-10 lg:grid-cols-[240px_1fr]">
            <p className="text-[13px] leading-[1.5] text-lv-ink/60">{HERO.meta[0]}</p>
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.items.map((s) => (
                <div key={s.label}>
                  <dt className="order-2 text-[12px] text-lv-ink/55">{s.label}</dt>
                  <dd className={`${D} text-[34px] tracking-[-0.03em] text-lv-ink lg:text-[40px]`}>
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* =========================================================== statement */}
      <section className="bg-white px-6 pb-8 pt-10 text-center">
        <Reveal>
          <p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-lv-ink/60">{STATS.statement}</p>
        </Reveal>
      </section>

      {/* ============================================================ products */}
      <section className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <Eyebrow>{PRODUCTS.kicker}</Eyebrow>
            </Reveal>
            <h2 className={`${D} mt-6 text-[30px] leading-[1.15] tracking-[-0.03em] lg:text-[46px]`}>
              <SplitWords text={PRODUCTS.title} stagger={40} />
            </h2>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.items.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <a href={p.href} className="group flex h-full flex-col overflow-hidden rounded-[18px] bg-lv-paper">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-x-6 bottom-0 top-6 rounded-t-[14px] bg-lv-ink p-4 transition-transform duration-500 group-hover:-translate-y-2"
                      style={{ transform: `rotate(${i % 2 ? 4 : -4}deg)` }}
                    >
                      <div className="flex items-center justify-between text-[11px] text-white/60">
                        <span>{p.brand}</span>
                        <p.icon className="h-4 w-4" />
                      </div>
                      <div className={`${D} mt-6 text-[22px] text-white`}>{p.name}</div>
                    </div>
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-14"
                      style={{ background: "linear-gradient(to top, #8CC3EE, transparent)" }}
                    />
                    <Grain opacity={0.3} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[12px] font-medium text-lv-700">{p.category}</span>
                    <p className="mt-2 text-[15px] leading-[1.55] text-lv-ink/80">{p.desc}</p>
                    <ul className="mt-5 space-y-2 border-t border-lv-ink/10 pt-5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[13px] text-lv-ink/65">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lv-blue" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto flex items-center gap-1.5 pt-6 text-[13px] font-medium">
                      {p.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== architecture */}
      <section className="bg-white px-6 pb-28 lg:pb-36">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <GrainField tone="blue" grain={0.3} className="rounded-[22px] p-6 lg:p-10">
              <div className="relative ml-auto max-w-[460px] rounded-[16px] bg-white p-2 shadow-[0_30px_60px_-35px_rgba(32,30,29,0.5)]">
                {ARCHITECTURE.bands.map((b) => (
                  <div key={b.label} className={`rounded-[12px] p-4 ${b.active ? "bg-lv-ink text-white" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-semibold">{b.label}</span>
                      {b.badge ? (
                        <span className="rounded-full bg-lv-blue px-2.5 py-0.5 text-[11px] font-medium">{b.badge}</span>
                      ) : (
                        <span className="text-[12px] text-lv-ink/40">{b.items.length}</span>
                      )}
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {b.items.map((it) => (
                        <li
                          key={it.label}
                          className={`flex items-center gap-1.5 rounded-[8px] px-2 py-1 text-[12px] ${
                            b.active ? "bg-white/10" : "bg-lv-paper text-lv-ink/75"
                          }`}
                        >
                          <span className={`flex h-5 w-5 items-center justify-center rounded-[5px] ${b.active ? "bg-lv-blue" : "bg-lv-ink text-white"}`}>
                            <it.icon className="h-3 w-3" />
                          </span>
                          {it.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GrainField>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>{ARCHITECTURE.kicker}</Eyebrow>
            </Reveal>
            <h2 className={`${D} mt-6 text-[34px] leading-[1.08] tracking-[-0.03em] lg:text-[56px]`}>
              <SplitWords text={ARCHITECTURE.title} />
            </h2>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.65] text-lv-ink/60">{ARCHITECTURE.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================= why */}
      <section className="bg-lv-paper px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <Eyebrow>{WHY.kicker}</Eyebrow>
            </Reveal>
            <h2 className={`${D} text-[28px] leading-[1.15] tracking-[-0.03em] lg:text-[40px]`}>
              <SplitWords text={WHY.title} stagger={40} />
            </h2>
          </div>
          <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {WHY.items.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 90} className="border-t border-lv-ink/15 pt-6">
                <div className="flex items-center justify-between">
                  <span className={`${D} text-[40px] font-light text-lv-ink/20`}>{String(i + 1).padStart(2, "0")}</span>
                  <r.icon className="h-5 w-5 text-lv-blue" />
                </div>
                <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.01em]">{r.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-lv-ink/60">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== industries */}
      <section className="bg-white px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>{INDUSTRIES.kicker}</Eyebrow>
            </Reveal>
            <h2 className={`${D} mt-6 text-[30px] leading-[1.12] tracking-[-0.03em] lg:text-[46px]`}>
              <SplitWords text={INDUSTRIES.title} stagger={40} />
            </h2>
          </div>
          {/* Expanding panels: hover or tap to open */}
          <div className="mt-14 flex flex-col gap-2 lg:h-[520px] lg:flex-row">
            {INDUSTRIES.items.map((ind, i) => {
              const active = open === i;
              return (
                <div
                  key={ind.name}
                  onMouseEnter={() => setOpen(i)}
                  onClick={() => setOpen(i)}
                  className={`relative cursor-pointer overflow-hidden rounded-[18px] transition-[flex-grow,background-color] duration-700 ease-[cubic-bezier(.2,.7,.1,1)] lg:min-w-[84px] ${
                    active ? "bg-lv-ink text-white lg:flex-[5]" : "bg-lv-paper lg:flex-[1]"
                  }`}
                >
                  {active && <Grain opacity={0.2} />}
                  <div className="relative flex h-full flex-col p-6">
                    <div className="flex items-center gap-3">
                      <ind.icon className={`h-5 w-5 shrink-0 ${active ? "text-lv-300" : "text-lv-blue"}`} />
                      <h3 className={`${D} whitespace-nowrap text-[18px] tracking-[-0.02em] ${active ? "" : "lg:hidden"}`}>{ind.name}</h3>
                    </div>
                    <span
                      aria-hidden
                      className={`${D} absolute bottom-6 left-1/2 hidden origin-center -translate-x-1/2 -rotate-90 whitespace-nowrap text-[15px] text-lv-ink/70 ${
                        active ? "" : "lg:block"
                      }`}
                      style={{ transformOrigin: "center", bottom: 90 }}
                    >
                      {ind.name}
                    </span>
                    <div
                      className={`mt-auto grid gap-5 pt-8 transition-opacity duration-500 lg:w-[560px] ${
                        active ? "opacity-100 delay-200" : "hidden lg:grid lg:opacity-0"
                      }`}
                    >
                      {(["challenge", "solution", "outcome"] as const).map((k) => (
                        <div key={k} className="grid gap-1 sm:grid-cols-[110px_1fr]">
                          <span className="text-[12px] uppercase tracking-[0.12em] text-lv-300">{INDUSTRIES.labels[k]}</span>
                          <p className="text-[15px] leading-[1.5] text-white/85">{ind[k]}</p>
                        </div>
                      ))}
                      <a href={ind.href} className="mt-2 inline-flex items-center gap-2 text-[14px] font-medium text-white">
                        {INDUSTRIES.linkPrefix} {ind.name} {INDUSTRIES.linkSuffix}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== proven */}
      <section className="relative overflow-hidden bg-lv-ink py-28 text-white lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Reveal>
                <Eyebrow dark>{PROVEN.kicker}</Eyebrow>
              </Reveal>
              <h2 className={`${D} mt-6 text-[30px] leading-[1.12] tracking-[-0.03em] lg:text-[46px]`}>
                <SplitWords text={PROVEN.title} stagger={40} />
              </h2>
            </div>
            <a href={PROVEN.link.href} className="inline-flex items-center gap-2 rounded-[10px] border border-white/25 px-5 py-3 text-[14px] hover:bg-white/10">
              {PROVEN.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[18px] bg-white/10 lg:grid-cols-3">
            {PROVEN.testimonials.map((t, i) => (
              <Reveal key={t.sector} delay={i * 100} className="flex flex-col bg-lv-ink p-8">
                <span className="text-[12px] uppercase tracking-[0.14em] text-lv-300">{t.sector}</span>
                <blockquote className={`${D} mt-8 flex-1 text-[19px] leading-[1.45] tracking-[-0.01em]`}>{t.quote}</blockquote>
                <figcaption className="mt-10 text-[13px] text-white/50">{t.role}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <p className="text-center text-[12px] uppercase tracking-[0.14em] text-white/45">{PROVEN.logosLabel}</p>
          <Marquee className="mt-8" duration={36} gap="1rem">
            {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
              <span
                key={i}
                className="flex h-16 w-60 shrink-0 items-center justify-center rounded-[12px] border border-dashed border-white/15 text-[12px] text-white/40"
              >
                {PROVEN.logoPlaceholder}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ============================================================ timeline */}
      <section className="bg-white px-6 py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <Eyebrow>{TIMELINE.kicker}</Eyebrow>
            </Reveal>
            <h2 className={`${D} mt-6 text-[34px] leading-[1.08] tracking-[-0.03em] lg:text-[52px]`}>
              <SplitWords text={TIMELINE.title} />
            </h2>
          </div>
          <div ref={tlRef} className="relative pl-8">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-lv-ink/10" />
            <div
              className="absolute left-0 top-0 w-px bg-lv-blue"
              style={{ height: `${Math.min(100, Math.max(0, (tl - 0.15) / 0.6) * 100)}%` }}
            />
            <ol className="space-y-12">
              {TIMELINE.milestones.map((m, i) => (
                <Reveal as="li" key={`${m.year}-${i}`} className="relative grid gap-2 sm:grid-cols-[160px_1fr]">
                  <span className="absolute -left-[37px] top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-lv-blue" />
                  <span className={`${D} text-[32px] tracking-[-0.03em] text-lv-ink/85`}>{m.year}</span>
                  <div>
                    <h3 className="text-[17px] font-semibold">{m.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-[1.6] text-lv-ink/60">{m.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================================ insights */}
      <section className="bg-lv-paper px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Reveal>
                <Eyebrow>{INSIGHTS.kicker}</Eyebrow>
              </Reveal>
              <h2 className={`${D} mt-6 text-[30px] leading-[1.12] tracking-[-0.03em] lg:text-[44px]`}>
                <SplitWords text={INSIGHTS.title} stagger={40} />
              </h2>
            </div>
            <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 text-[14px] font-medium">
              {INSIGHTS.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-lv-ink/10">
            {INSIGHTS.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`-mb-px border-b-2 pb-3 text-[14px] transition-colors ${
                  filter === f ? "border-lv-blue text-lv-ink" : "border-transparent text-lv-ink/50 hover:text-lv-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INSIGHTS.items.map((r, i) => (
              <a
                key={r.title}
                href={INSIGHTS.link.href}
                className={`group flex flex-col rounded-[18px] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 ${
                  filter === "All" || filter === r.tag ? "" : "hidden"
                }`}
              >
                <div className="flex justify-between text-[12px] text-lv-ink/50">
                  <span className="font-medium text-lv-700">{r.tag}</span>
                  <span>{r.read}</span>
                </div>
                <span className={`${D} mt-10 text-[52px] leading-none tracking-[-0.04em] text-lv-ink/10`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-6 text-[12px] text-lv-ink/50">{r.meta}</span>
                <h3 className="mt-2 text-[17px] font-semibold leading-[1.35]">{r.title}</h3>
                <p className="mt-3 flex-1 text-[13px] leading-[1.6] text-lv-ink/60">{r.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium">
                  {INSIGHTS.readLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= recognition */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>{RECOGNITION.kicker}</Eyebrow>
            </Reveal>
            <h2 className={`${D} mt-6 text-[26px] leading-[1.2] tracking-[-0.03em] lg:text-[36px]`}>
              <SplitWords text={RECOGNITION.title} stagger={40} />
            </h2>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[18px] border border-lv-ink/10 bg-lv-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {RECOGNITION.items.map((a, i) => (
              <Reveal as="li" key={i} delay={(i % 3) * 70} className="flex items-start gap-4 bg-white p-7">
                <Award className="h-5 w-5 shrink-0 text-lv-blue" />
                <div>
                  <h3 className="text-[15px] font-semibold">{a.title}</h3>
                  <p className="mt-1 text-[13px] text-lv-ink/55">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================== investment */}
      <section className="bg-white px-6 pb-28">
        <GrainField tone="ink" grain={0.25} className="mx-auto max-w-[1320px] rounded-[24px] px-6 py-16 text-white lg:px-14 lg:py-20">
          <div className="relative grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Eyebrow dark>{INVESTMENT.kicker}</Eyebrow>
              <h2 className={`${D} mt-6 text-[28px] leading-[1.15] tracking-[-0.03em] lg:text-[38px]`}>{INVESTMENT.title}</h2>
              <div className="mt-10 flex flex-col gap-3 whitespace-nowrap sm:flex-row lg:flex-col lg:items-start xl:flex-row">
                <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-3 text-[14px] font-medium text-lv-ink">
                  {INVESTMENT.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-[10px] border border-white/25 px-5 py-3 text-[14px]">
                  {INVESTMENT.secondary.label}
                </a>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {INVESTMENT.items.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-lv-300" />
                    <h3 className="text-[17px] font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.65] text-white/60">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </GrainField>
      </section>

      {/* =========================================================== final cta */}
      <section className="relative overflow-hidden bg-lv-ink pt-28 text-center text-white lg:pt-40">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Eyebrow dark>{FINAL_CTA.kicker}</Eyebrow>
          <h2 className={`${D} mt-8 text-[38px] leading-[1.05] tracking-[-0.04em] sm:text-[56px] lg:text-[76px]`}>
            <SplitWords text={FINAL_CTA.title} />
          </h2>
          <Reveal delay={200}>
            <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.6] text-white/60">{FINAL_CTA.body}</p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={FINAL_CTA.primary.href} className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[14px] font-medium text-lv-ink">
              {FINAL_CTA.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center rounded-[10px] border border-white/25 px-6 py-3.5 text-[14px]">
              {FINAL_CTA.secondary.label}
            </a>
          </Reveal>
        </div>
        <div className="relative mt-16 h-[320px] lg:h-[420px]">
          <Globe dot="#8CC3EE" dotSize={1.1} density={1.8} arcs="#0078D4" marker="#C2DFF6" lon={80} lat={22} sway={18} frame={{ cx: 0.5, cy: 1.05, r: 0.36 }} />
        </div>
      </section>

      {/* ============================================================== footer */}
      <footer className="bg-lv-ink px-6 text-white">
        <div className="mx-auto max-w-[1320px] border-t border-white/10">
          <div className="grid gap-10 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className={`${D} text-[22px] tracking-[-0.02em] lg:text-[28px]`}>{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-white/55">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="rounded-[10px] border border-white/25 px-5 py-3 text-[14px]">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-[10px] bg-white px-5 py-3 text-[14px] font-medium text-lv-ink">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 border-t border-white/10 py-14 lg:grid-cols-[1.1fr_2fr]">
            <div>
              <Lockup tone="white" height={32} />
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
                  <h4 className="text-[11px] uppercase tracking-[0.14em] text-lv-300">{c.title}</h4>
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
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-[12px] text-white/45 sm:flex-row">
            <span>
              {CHROME.copyright} <span className="ml-2 uppercase tracking-[0.14em] text-lv-300/70">{CHROME.builtIn}</span>
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
