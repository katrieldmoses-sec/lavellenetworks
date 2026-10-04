"use client";

/**
 * 10 — Gen 5.  Source: Fossil Gen 5 (dark field cut by two huge circles that
 * leave a coloured lens, product in the lens, solid + outline type, vertical
 * side index, square thumbnail with arrows, 1/4 pager).  Type: Montserrat.
 */
import { useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Award } from "lucide-react";
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
import { Lockup, NavMenu, MobileNav, Grain } from "./kit/Brand";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lv-300">{children}</span>;
}

export default function M10() {
  const [prod, setProd] = useState(0);
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");
  const p = PRODUCTS.items[prod];

  return (
    <div className="mk-root mk-dark bg-lv-ink font-m-body text-white antialiased">
      {/* ============================================================= hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-lv-blue">
        <Grain opacity={0.28} />
        {/* the two circles */}
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[150vmax] w-[150vmax] -translate-y-1/2 rounded-full bg-lv-ink" style={{ transform: "translate(calc(-100% - 9vw), -50%)" }} />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[150vmax] w-[150vmax] -translate-y-1/2 rounded-full bg-lv-ink" style={{ transform: "translate(9vw, -50%)" }} />

        <header className="relative z-50 flex items-center gap-8 px-6 py-7 lg:px-12">
          <Lockup tone="white" height={24} priority />
          <NavMenu
            className="gap-8"
            theme={{
              trigger: "py-2 text-[11px] font-semibold tracking-[0.18em] text-white/80 hover:text-white",
              panel: "rounded-[16px] bg-[#2a2826] p-5",
              heading: "text-[10px] font-semibold uppercase tracking-[0.16em] text-lv-300",
              link: "py-1.5 text-[13px] text-white/75 hover:text-white",
              chevron: false,
              upper: true,
            }}
          />
          <div className="ml-auto hidden items-center gap-6 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              {CHROME.headerCtas.demo.label} <span className="text-lv-300">(→)</span>
            </a>
          </div>
          <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </header>

        {/* vertical index */}
        <ul aria-hidden className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 text-[10px] font-semibold tracking-[0.2em] lg:flex">
          {HERO.words.map((w, i) => (
            <li key={w} className={`-rotate-90 ${i === 0 ? "text-white" : "text-white/35"}`}>
              {String(i + 1).padStart(2, "0")}
            </li>
          ))}
        </ul>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-90px)] max-w-[1400px] items-center gap-8 px-6 pb-10 lg:grid-cols-[1fr_minmax(300px,30vw)_1fr] lg:px-16">
          <div>
            <Eyebrow>{HERO.kicker}</Eyebrow>
            <h1 className="mt-6 text-[54px] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-[72px] xl:text-[92px]">
              <SplitWords text={HERO.titleLead} />{" "}
              <span className="mk-outline font-semibold text-white">
                <SplitWords text={HERO.titleAccent} delay={250} />
              </span>
            </h1>
            <div className="mt-7 text-[30px] font-semibold tracking-[-0.01em]">
              <Count end={STATS.items[0].end} suffix={STATS.items[0].suffix} /> <span className="text-[13px] font-medium text-white/55">{STATS.items[0].label}</span>
            </div>
            <p className="mt-5 max-w-[380px] text-[14px] leading-[1.7] text-white/60">{HERO.body}</p>
            <a href={HERO.primary.href} className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em]">
              {HERO.primary.label}
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* the lens */}
          <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
            <div className="aspect-square w-full max-w-[420px]">
              <Globe dot="rgba(255,255,255,0.95)" dotSize={1.15} density={1.5} arcs="#201E1D" marker="#201E1D" lon={78} lat={16} speed={5} draggable />
            </div>
            <a href={HERO.secondary.href} className="mt-6 text-[13px] font-semibold tracking-[0.04em] text-white hover:underline">
              {HERO.secondary.label}
            </a>
          </div>

          <div className="flex flex-col items-start gap-10 lg:items-end">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-3 text-white/60">
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="w-[170px] rounded-[18px] border border-white/30 p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lv-300">{HERO.diagram.platformLabel}</span>
                <ul className="mt-3 space-y-2">
                  {HERO.diagram.platform.map((pp) => (
                    <li key={pp.name} className="flex items-center gap-2 text-[12px]">
                      <pp.icon className="h-3.5 w-3.5 text-white/60" />
                      {pp.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-[12px] leading-[1.8] text-white/60 lg:text-right">
              {HERO.diagram.sources.map((s) => s.label).join(" · ")}
              <br />
              <span className="text-white/35">→</span>
              <br />
              {HERO.diagram.destinations.map((s) => s.label).join(" · ")}
            </div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/45 lg:text-right">
              {HERO.meta[0]}
              <br />
              {HERO.meta[1]}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ stats */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-16">
        <dl className="grid gap-px overflow-hidden rounded-[22px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-lv-ink p-8">
              <dd className={`text-[60px] leading-none tracking-[-0.04em] ${i % 2 ? "mk-outline font-semibold" : "font-extrabold"}`}>
                <Count end={s.end} suffix={s.suffix} separator={s.separator} />
              </dd>
              <dt className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
        <Reveal>
          <p className="mx-auto mt-14 max-w-3xl text-center text-[22px] font-medium leading-[1.45] lg:text-[26px]">{STATS.statement}</p>
        </Reveal>
      </section>

      {/* ========================================== products: one-at-a-time */}
      <section className="relative overflow-hidden bg-white text-lv-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-16 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lv-700">{PRODUCTS.kicker}</span>
              <h2 className="mt-5 text-[30px] font-bold leading-[1.15] tracking-[-0.02em] lg:text-[40px]">{PRODUCTS.title}</h2>
            </div>
            <div className="flex items-center gap-4 text-lv-ink">
              <button type="button" aria-label="Previous" onClick={() => setProd((prod + 3) % 4)} className="text-lv-ink/50 hover:text-lv-ink">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-lv-ink/30 text-[12px] font-semibold">
                {prod + 1}/{PRODUCTS.items.length}
              </span>
              <button type="button" aria-label="Next" onClick={() => setProd((prod + 1) % 4)} className="text-lv-ink/50 hover:text-lv-ink">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative">
              {PRODUCTS.items.map((it, i) => (
                <div key={it.name} className={`transition-all duration-700 ${prod === i ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 translate-y-6 opacity-0"}`}>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-lv-700">
                    {it.brand} — {it.category}
                  </span>
                  <h3 className="mt-3 text-[64px] font-extrabold leading-[0.95] tracking-[-0.04em] lg:text-[110px]">{it.name}</h3>
                  <p className="mt-6 max-w-lg text-[17px] leading-[1.6] text-lv-ink/70">{it.desc}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {it.features.map((f) => (
                      <li key={f} className="rounded-full border border-lv-ink/15 px-4 py-2 text-[12px] font-semibold">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={it.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-lv-ink px-6 py-3.5 text-[13px] font-semibold text-white hover:bg-lv-blue">
                    {it.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              <div className="absolute inset-0 rounded-full bg-lv-blue" />
              <Grain opacity={0.25} className="rounded-full" />
              <div className="absolute inset-[16%] flex items-center justify-center rounded-full bg-lv-ink text-white transition-transform duration-700" style={{ transform: `rotate(${prod * 90}deg)` }}>
                <p.icon className="h-20 w-20" style={{ transform: `rotate(${-prod * 90}deg)` }} />
              </div>
              <span className="absolute -right-2 top-6 rounded-full bg-white px-4 py-2 text-[12px] font-bold shadow-[0_10px_30px_-12px_rgba(32,30,29,0.4)]">{p.brand}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== architecture */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-16 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow>{ARCHITECTURE.kicker}</Eyebrow>
            <h2 className="mt-5 text-[40px] font-extrabold leading-[1] tracking-[-0.035em] lg:text-[64px]">
              {ARCHITECTURE.title.split(". ")[0]}. <span className="mk-outline font-semibold">{ARCHITECTURE.title.split(". ")[1]}</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-white/60">{ARCHITECTURE.body}</p>
          </div>
          <div className="space-y-2">
            {ARCHITECTURE.bands.map((b, i) => (
              <Reveal key={b.label} delay={i * 80}>
                <div className={`grid gap-3 rounded-full px-6 py-4 sm:grid-cols-[170px_1fr] sm:items-center ${b.active ? "bg-lv-blue" : "border border-white/15"}`}>
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em]">
                    {b.label}
                    {b.badge && <span className="ml-2 block text-[10px] text-white/70 sm:inline">{b.badge}</span>}
                  </span>
                  <span className="text-[12px] leading-[1.6] text-white/70">{b.items.map((it) => it.label).join(" · ")}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== why */}
      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <Eyebrow>{WHY.kicker}</Eyebrow>
          <h2 className="mt-5 max-w-4xl text-[32px] font-bold leading-[1.12] tracking-[-0.02em] lg:text-[44px]">{WHY.title}</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {WHY.items.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 p-7">
                  <div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lv-blue/0 transition-colors duration-500 group-hover:bg-lv-blue" />
                  <r.icon className="relative h-6 w-6 text-lv-300" />
                  <h3 className="relative mt-10 text-[19px] font-bold">{r.title}</h3>
                  <p className="relative mt-3 text-[13px] leading-[1.7] text-white/60">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= industries */}
      <section className="relative overflow-hidden bg-lv-blue py-24 lg:py-32">
        <Grain opacity={0.25} />
        <div aria-hidden className="absolute -right-[30vw] top-1/2 h-[80vw] w-[80vw] -translate-y-1/2 rounded-full bg-lv-ink" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:px-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">{INDUSTRIES.kicker}</span>
            <h2 className="mt-5 text-[32px] font-bold leading-[1.12] tracking-[-0.02em] lg:text-[44px]">{INDUSTRIES.title}</h2>
            <ul className="mt-10 space-y-1">
              {INDUSTRIES.items.map((it, i) => (
                <li key={it.name}>
                  <button
                    type="button"
                    onClick={() => setInd(i)}
                    onMouseEnter={() => setInd(i)}
                    className={`text-left text-[34px] tracking-[-0.03em] transition-colors lg:text-[44px] ${ind === i ? "font-extrabold text-white" : "mk-outline font-semibold text-white/80"}`}
                  >
                    {it.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center">
            {INDUSTRIES.items.map((it, i) => (
              <div key={it.name} className={`w-full transition-opacity duration-500 ${ind === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                <it.icon className="h-10 w-10 text-lv-300" />
                <dl className="mt-8 space-y-6">
                  {(["challenge", "solution", "outcome"] as const).map((k) => (
                    <div key={k}>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lv-300">{INDUSTRIES.labels[k]}</dt>
                      <dd className="mt-2 text-[17px] leading-[1.55]">{it[k]}</dd>
                    </div>
                  ))}
                </dl>
                <a href={it.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[12px] font-semibold text-lv-ink">
                  {INDUSTRIES.linkPrefix} {it.name} {INDUSTRIES.linkSuffix}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================== proven */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-16 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Eyebrow>{PROVEN.kicker}</Eyebrow>
            <h2 className="mt-5 text-[32px] font-bold leading-[1.12] tracking-[-0.02em] lg:text-[44px]">{PROVEN.title}</h2>
          </div>
          <a href={PROVEN.link.href} className="text-[11px] font-semibold uppercase tracking-[0.2em]">
            {PROVEN.link.label} <span className="text-lv-300">(→)</span>
          </a>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {PROVEN.testimonials.map((t, i) => (
            <Reveal key={t.sector} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-[22px] bg-white/[0.05] p-7">
                <span className="mk-outline text-[60px] font-semibold leading-none">“</span>
                <blockquote className="mt-2 flex-1 text-[15px] leading-[1.7] text-white/85">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-end justify-between gap-3 text-[11px]">
                  <span className="text-white/50">{t.role}</span>
                  <span className="font-semibold uppercase tracking-[0.16em] text-lv-300">{t.sector}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid items-center gap-6 lg:grid-cols-[220px_1fr]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">{PROVEN.logosLabel}</p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
              <li key={i} className="flex h-14 items-center justify-center rounded-full border border-dashed border-white/15 px-3 text-center text-[10px] text-white/40">
                {PROVEN.logoPlaceholder}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================= timeline */}
      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <Eyebrow>{TIMELINE.kicker}</Eyebrow>
          <h2 className="mt-5 text-[40px] font-extrabold leading-[1] tracking-[-0.035em] lg:text-[64px]">{TIMELINE.title}</h2>
          <ol className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.milestones.map((m, i) => (
              <Reveal as="li" key={`${m.year}-${i}`} delay={(i % 4) * 70}>
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${i === TIMELINE.milestones.length - 1 ? "bg-lv-blue" : "border border-white/40"}`} />
                  <span className="h-px flex-1 bg-white/15" />
                </div>
                <span className={`mt-6 block text-[48px] leading-none tracking-[-0.04em] ${i % 2 ? "mk-outline font-semibold" : "font-extrabold"}`}>{m.year}</span>
                <h3 className="mt-4 text-[15px] font-bold">{m.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-white/55">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================================================= insights */}
      <section className="bg-white py-24 text-lv-ink lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lv-700">{INSIGHTS.kicker}</span>
              <h2 className="mt-5 text-[32px] font-bold leading-[1.12] tracking-[-0.02em] lg:text-[44px]">{INSIGHTS.title}</h2>
            </div>
            <a href={INSIGHTS.link.href} className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              {INSIGHTS.link.label} <span className="text-lv-blue">(→)</span>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {INSIGHTS.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${filter === f ? "text-lv-ink underline decoration-lv-blue decoration-2 underline-offset-8" : "text-lv-ink/40"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INSIGHTS.items.map((r, i) => (
              <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col rounded-[22px] border border-lv-ink/10 p-6 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
                <div className="flex items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full ${i % 2 ? "bg-lv-blue" : "bg-lv-ink"} text-[13px] font-bold text-white`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] text-lv-ink/50">{r.read}</span>
                </div>
                <span className="mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-lv-700">{r.tag}</span>
                <h3 className="mt-2 text-[16px] font-bold leading-[1.35]">{r.title}</h3>
                <p className="mt-2 flex-1 text-[12px] leading-[1.65] text-lv-ink/60">{r.body}</p>
                <div className="mt-6 flex items-center justify-between text-[11px]">
                  <span className="text-lv-ink/45">{r.meta}</span>
                  <span className="flex items-center gap-1 font-bold uppercase tracking-[0.14em]">
                    {INSIGHTS.readLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== recognition + invest */}
      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 lg:grid-cols-2 lg:px-16 lg:py-32">
        <div>
          <Eyebrow>{RECOGNITION.kicker}</Eyebrow>
          <h2 className="mt-5 text-[26px] font-bold leading-[1.2] lg:text-[32px]">{RECOGNITION.title}</h2>
          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {RECOGNITION.items.map((a, i) => (
              <li key={i} className="flex items-center gap-4 py-4">
                <Award className="h-4 w-4 text-lv-300" />
                <span className="flex-1 text-[13px] font-semibold">{a.title}</span>
                <span className="text-right text-[11px] text-white/45">{a.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Eyebrow>{INVESTMENT.kicker}</Eyebrow>
          <h2 className="mt-5 text-[26px] font-bold leading-[1.2] lg:text-[32px]">{INVESTMENT.title}</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {INVESTMENT.items.map((it) => (
              <div key={it.title} className="rounded-[18px] border border-white/10 p-5">
                <it.icon className="h-5 w-5 text-lv-300" />
                <h3 className="mt-5 text-[14px] font-bold">{it.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.65] text-white/55">{it.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={INVESTMENT.primary.href} className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[12px] font-semibold text-lv-ink">
              {INVESTMENT.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={INVESTMENT.secondary.href} className="flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-[12px] font-semibold">
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== final cta */}
      <section className="relative overflow-hidden bg-lv-blue">
        <Grain opacity={0.28} />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[150vmax] w-[150vmax] rounded-full bg-lv-ink" style={{ transform: "translate(calc(-100% - 14vw), -50%)" }} />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[150vmax] w-[150vmax] rounded-full bg-lv-ink" style={{ transform: "translate(14vw, -50%)" }} />
        <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 py-24 text-center lg:py-32">
          <Eyebrow>{FINAL_CTA.kicker}</Eyebrow>
          <h2 className="mt-6 max-w-[26ch] text-[40px] font-extrabold leading-[1] tracking-[-0.035em] lg:text-[64px]">
            {FINAL_CTA.title.split(" ").slice(0, 4).join(" ")} <span className="mk-outline font-semibold">{FINAL_CTA.title.split(" ").slice(4).join(" ")}</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-white/70">{FINAL_CTA.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={FINAL_CTA.primary.href} className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13px] font-semibold text-lv-ink">
              {FINAL_CTA.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={FINAL_CTA.secondary.href} className="flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-[13px] font-semibold">
              {FINAL_CTA.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================== footer */}
      <footer className="mx-auto max-w-[1400px] px-6 pb-10 pt-20 lg:px-16">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-[22px] font-bold">{CHROME.footerBand.title}</h3>
            <p className="mt-2 text-[13px] text-white/55">{CHROME.footerBand.body}</p>
          </div>
          <div className="flex gap-3">
            <a href={CHROME.footerBand.expert.href} className="rounded-full border border-white/25 px-5 py-3 text-[12px] font-semibold">
              {CHROME.footerBand.expert.label}
            </a>
            <a href={CHROME.footerBand.demo.href} className="rounded-full bg-lv-blue px-5 py-3 text-[12px] font-semibold">
              {CHROME.footerBand.demo.label}
            </a>
          </div>
        </div>
        <div className="grid gap-12 py-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Lockup tone="white" height={28} />
            <p className="mt-6 text-[14px] font-semibold">{CHROME.footerBrand.tagline}</p>
            <p className="mt-3 max-w-xs text-[12px] leading-[1.65] text-white/50">{CHROME.footerBrand.blurb}</p>
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
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lv-300">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[12px] text-white/70 hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/45 sm:flex-row">
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
