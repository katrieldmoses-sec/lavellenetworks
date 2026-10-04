"use client";

/**
 * 08 — Discover.  Sources: Discver (oversized serif across a landscape panel,
 * caps serif subhead, mini thumbnail card, search row, recommended-cards
 * carousel, split feature) and CVeeBee (serif headline over a sky, prompt
 * card).  Type: Instrument Serif + Manrope.
 */
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Award, Check, Search } from "lucide-react";
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

const S = "font-m-display font-normal";

function Round({ dir, onClick, dark = false }: { dir: "l" | "r"; onClick: () => void; dark?: boolean }) {
  const I = dir === "l" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      aria-label={dir === "l" ? "Previous" : "Next"}
      onClick={onClick}
      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
        dark ? "border-white/40 text-white hover:bg-white hover:text-lv-ink" : "border-lv-ink/15 hover:border-lv-ink hover:bg-lv-ink hover:text-white"
      }`}
    >
      <I className="h-4 w-4" />
    </button>
  );
}

export default function M08() {
  const [quote, setQuote] = useState(0);
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");
  const cards = useRef<HTMLDivElement>(null);
  const years = useRef<HTMLDivElement>(null);
  const nudge = (el: HTMLDivElement | null, d: number) => el?.scrollBy({ left: d * 380, behavior: "smooth" });

  return (
    <div className="mk-root bg-white font-m-body text-lv-ink antialiased">
      {/* ------------------------------------------------------------ nav */}
      <header className="relative z-50">
        <div className="mx-auto grid h-20 max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-6">
          <NavMenu
            className="gap-6"
            theme={{
              trigger: "py-2 text-[13px] font-medium text-lv-ink/80 hover:text-lv-ink",
              panel: "rounded-[16px] bg-white p-5 shadow-[0_24px_60px_-30px_rgba(32,30,29,0.35)] ring-1 ring-lv-ink/5",
              heading: "text-[10px] font-semibold uppercase tracking-[0.1em] text-lv-ink/40",
              link: "py-1.5 text-[13px] text-lv-ink/75 hover:text-lv-blue",
              chevron: false,
            }}
          />
          <div className="col-start-2 justify-self-center">
            <Lockup tone="ink" height={28} priority />
          </div>
          <div className="col-start-3 flex items-center justify-end gap-4">
            <a href={CHROME.headerCtas.expert.href} className="hidden text-[13px] font-medium underline underline-offset-4 lg:inline">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="hidden rounded-full bg-lv-ink px-5 py-2.5 text-[13px] font-medium text-white lg:inline-flex">
              {CHROME.headerCtas.demo.label}
            </a>
            <MobileNav ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
          </div>
        </div>
      </header>

      {/* ============================================================= hero */}
      <section className="px-3 sm:px-5">
        <div className="relative mx-auto min-h-[640px] max-w-[1400px] overflow-hidden rounded-[22px] text-white lg:h-[calc(100svh-100px)]">
          <GrainField tone="dusk" grain={0.32} className="absolute inset-0">
            <div className="absolute inset-x-0 bottom-0 aspect-[2.2/1]">
              <Globe dot="rgba(255,255,255,0.85)" dotSize={1.25} density={1.35} lon={80} lat={-48} sway={10} frame={{ cx: 0.42, cy: 1.9, r: 0.62 }} />
            </div>
          </GrainField>
          {/* giant serif word */}
          <div
            aria-hidden
            className={`${S} pointer-events-none absolute inset-x-0 top-4 select-none text-center text-[22vw] uppercase leading-[0.8] tracking-[-0.02em] text-white/90 lg:text-[17vw]`}
          >
            {HERO.words[0]}
          </div>

          <div className="absolute right-6 top-[42%] hidden max-w-[260px] lg:block">
            <Reveal delay={400}>
              <p className={`${S} text-[19px] leading-[1.3] text-white/90`}>{HERO.body}</p>
            </Reveal>
          </div>

          <div className="absolute inset-x-0 bottom-0 grid gap-6 p-6 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/80">{HERO.kicker}</span>
              <h1 className={`${S} mt-3 text-[42px] uppercase leading-[0.98] sm:text-[58px] lg:text-[68px]`}>
                <SplitWords text={HERO.titleLead} />
                <br />
                <SplitWords text={HERO.titleAccent} delay={250} wordClassName="italic" />
              </h1>
              <p className="mt-4 max-w-md text-[14px] leading-[1.55] text-white/85 lg:hidden">{HERO.body}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={HERO.primary.href} className="group flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-5 text-[13px] font-semibold text-lv-ink">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lv-ink text-white">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  {HERO.primary.label}
                </a>
                <a href={HERO.secondary.href} className="rounded-full border border-white/60 px-5 py-2.5 text-[13px] font-semibold backdrop-blur">
                  {HERO.secondary.label}
                </a>
              </div>
              <p className="mt-6 text-[12px] text-white/75">
                {HERO.meta[0]} · {HERO.meta[1]}
              </p>
            </div>
            {/* mini thumbnail card */}
            <Reveal delay={500} variant="right" className="hidden w-[300px] rounded-[18px] border-[6px] border-lv-ink/80 bg-lv-ink/80 lg:block">
              <GrainField tone="blue" grain={0.3} className="h-[150px] rounded-[12px]">
                <Globe dot="rgba(255,255,255,0.9)" dotSize={0.9} density={2} lon={78} lat={18} speed={5} />
              </GrainField>
              <ul className="grid grid-cols-4 gap-1.5 p-1.5">
                {HERO.diagram.platform.map((p) => (
                  <li key={p.name} className="rounded-[8px] bg-white/10 px-1 py-2 text-center">
                    <p.icon className="mx-auto h-3.5 w-3.5" />
                    <span className="mt-1 block truncate text-[9px]">{p.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Search-row diagram */}
      <section className="mx-auto max-w-[1300px] px-6 py-10">
        <Reveal>
          <div className="grid items-center gap-4 rounded-[20px] border border-lv-ink/10 px-6 py-5 lg:grid-cols-[1fr_1px_1.3fr_1px_1fr_auto] lg:gap-6">
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] font-medium">
              {HERO.diagram.sources.map((s) => (
                <li key={s.label} className="flex items-center gap-1.5">
                  <s.icon className="h-4 w-4 text-lv-ink/50" />
                  {s.label}
                </li>
              ))}
            </ul>
            <span className="hidden h-10 bg-lv-ink/10 lg:block" />
            <div>
              <span className={`${S} text-[20px]`}>{HERO.diagram.platformLabel}</span>
              <p className="mt-0.5 text-[12px] text-lv-ink/55">{HERO.diagram.platform.map((p) => `${p.brand} ${p.name}`).join(" · ")}</p>
            </div>
            <span className="hidden h-10 bg-lv-ink/10 lg:block" />
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] font-medium">
              {HERO.diagram.destinations.map((s) => (
                <li key={s.label} className="flex items-center gap-1.5">
                  <s.icon className="h-4 w-4 text-lv-ink/50" />
                  {s.label}
                </li>
              ))}
            </ul>
            <a href={HERO.primary.href} aria-label={HERO.primary.label} className="flex h-12 w-12 items-center justify-center rounded-full bg-lv-ink text-white">
              <Search className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ============================================================ stats */}
      <section className="mx-auto max-w-[1300px] px-6 py-16">
        <div className="grid gap-y-10 border-y border-lv-ink/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={`px-2 lg:px-6 ${i ? "lg:border-l lg:border-lv-ink/10" : ""}`}>
              <div className={`${S} text-[64px] leading-none tracking-[-0.02em] lg:text-[80px]`}>
                <Count end={s.end} suffix={s.suffix} separator={s.separator} />
              </div>
              <div className="mt-3 text-[13px] font-medium text-lv-ink/60">{s.label}</div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className={`${S} mx-auto mt-14 max-w-3xl text-center text-[28px] leading-[1.25] lg:text-[36px]`}>{STATS.statement}</p>
        </Reveal>
      </section>

      {/* ========================================================= products */}
      <section className="py-24">
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-end justify-between gap-6 px-6">
          <div className="max-w-3xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{PRODUCTS.kicker}</span>
            <h2 className={`${S} mt-4 text-[38px] leading-[1.05] lg:text-[54px]`}>
              <SplitWords text={PRODUCTS.title} stagger={30} />
            </h2>
          </div>
          <div className="flex gap-3">
            <Round dir="l" onClick={() => nudge(cards.current, -1)} />
            <Round dir="r" onClick={() => nudge(cards.current, 1)} />
          </div>
        </div>
        <div ref={cards} className="mk-noscroll mt-12 overflow-x-auto scroll-smooth">
          <div className="flex w-max snap-x gap-4 px-6 xl:px-[max(24px,calc((100vw-1300px)/2+24px))]">
            {PRODUCTS.items.map((p, i) => (
              <a key={p.name} href={p.href} className="group flex w-[330px] shrink-0 snap-start flex-col rounded-[18px] border border-lv-ink/10 p-2 sm:w-[360px]">
                <GrainField tone={(["blue", "sky", "deep", "dusk"] as const)[i]} grain={0.3} className="h-[230px] rounded-[14px]">
                  <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold">
                    <p.icon className="h-3.5 w-3.5 text-lv-blue" />
                    {p.brand}
                  </span>
                  <span className="absolute bottom-3 left-3 rounded-full bg-lv-ink/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">{p.category}</span>
                </GrainField>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className={`${S} text-[32px] leading-none`}>{p.name}</h3>
                  <p className="mt-3 text-[13px] leading-[1.6] text-lv-ink/65">{p.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[12px] text-lv-ink/75">
                        <Check className="h-3.5 w-3.5 text-lv-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center justify-between border-t border-lv-ink/10 pt-4 text-[13px] font-semibold" style={{ marginTop: 24 }}>
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== architecture */}
      <section className="mx-auto grid max-w-[1300px] items-start gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{ARCHITECTURE.kicker}</span>
          <h2 className={`${S} mt-4 text-[40px] leading-[1.02] lg:text-[60px]`}>
            <SplitWords text={ARCHITECTURE.title} />
          </h2>
          <Reveal delay={200}>
            <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-lv-ink/60">{ARCHITECTURE.body}</p>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {ARCHITECTURE.bands.map((b, i) => (
              <Reveal key={b.label} delay={i * 80}>
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${b.active ? "bg-lv-blue text-white" : "bg-lv-paper"}`}>
                  {(() => {
                    const I = b.items[0].icon;
                    return <I className="h-4 w-4" />;
                  })()}
                </span>
                <h3 className="mt-4 flex items-center gap-2 text-[16px] font-semibold">
                  {b.label}
                  {b.badge && <span className="rounded-full bg-lv-100 px-2 py-0.5 text-[10px] font-semibold text-lv-700">{b.badge}</span>}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-lv-ink/60">{b.items.map((it) => it.label).join(", ")}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal variant="right" className="lg:sticky lg:top-8">
          <GrainField tone="deep" grain={0.3} className="aspect-[4/5] rounded-[22px]">
            <Globe dot="rgba(194,223,246,0.9)" dotSize={1.15} density={1.5} arcs="#8CC3EE" marker="#FFFFFF" lon={78} lat={18} speed={3} frame={{ cx: 0.5, cy: 0.55, r: 0.46 }} />
            <span className="absolute right-4 top-4 rounded-full border border-white/40 px-3 py-1 text-[11px] text-white">{HERO.meta[1]}</span>
          </GrainField>
        </Reveal>
      </section>

      {/* ============================================================== why */}
      <section className="bg-lv-paper py-24 lg:py-32">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{WHY.kicker}</span>
            <h2 className={`${S} text-[36px] leading-[1.06] lg:text-[50px]`}>
              <SplitWords text={WHY.title} stagger={30} />
            </h2>
          </div>
          <ol className="mt-16 grid gap-x-16 lg:grid-cols-2">
            {WHY.items.map((r, i) => (
              <Reveal as="li" key={r.title} delay={(i % 2) * 80} className="grid grid-cols-[60px_1fr] gap-4 border-t border-lv-ink/15 py-8">
                <span className={`${S} text-[34px] italic leading-none text-lv-blue`}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={`${S} text-[26px] leading-[1.1]`}>{r.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-lv-ink/60">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======================================================= industries */}
      <section className="mx-auto max-w-[1300px] px-6 py-24 lg:py-32">
        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{INDUSTRIES.kicker}</span>
        <h2 className={`${S} mt-4 max-w-3xl text-[38px] leading-[1.05] lg:text-[54px]`}>
          <SplitWords text={INDUSTRIES.title} stagger={30} />
        </h2>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-lv-ink/10">
          {INDUSTRIES.items.map((it, i) => (
            <button
              key={it.name}
              type="button"
              onClick={() => setInd(i)}
              className={`-mb-px border-b-2 pb-3 ${S} text-[24px] transition-colors ${ind === i ? "border-lv-ink" : "border-transparent text-lv-ink/35 hover:text-lv-ink/70"}`}
            >
              {it.name}
            </button>
          ))}
        </div>
        {INDUSTRIES.items.map((it, i) => (
          <div key={it.name} className={`mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr] ${ind === i ? "" : "hidden"}`}>
            <GrainField tone={(["blue", "sky", "deep", "dusk", "blue", "sky"] as const)[i]} grain={0.3} className="flex min-h-[300px] items-end rounded-[22px] p-6">
              <it.icon className={`relative h-10 w-10 ${i % 2 ? "text-lv-700" : "text-white"}`} />
            </GrainField>
            <div className="flex flex-col">
              <dl className="space-y-6">
                {(["challenge", "solution", "outcome"] as const).map((k) => (
                  <div key={k} className="grid gap-2 border-b border-lv-ink/10 pb-6 sm:grid-cols-[130px_1fr]">
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-lv-ink/45">{INDUSTRIES.labels[k]}</dt>
                    <dd className={`${S} text-[22px] leading-[1.3]`}>{it[k]}</dd>
                  </div>
                ))}
              </dl>
              <a href={it.href} className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-lv-ink py-1.5 pl-5 pr-1.5 text-[13px] font-semibold text-white">
                {INDUSTRIES.linkPrefix} {it.name} {INDUSTRIES.linkSuffix}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lv-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================== proven */}
      <section className="bg-lv-ink py-24 text-white lg:py-32">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-300">{PROVEN.kicker}</span>
              <h2 className={`${S} mt-4 text-[36px] leading-[1.06] lg:text-[50px]`}>{PROVEN.title}</h2>
            </div>
            <a href={PROVEN.link.href} className="inline-flex items-center gap-2 text-[13px] font-semibold underline underline-offset-4">
              {PROVEN.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative mt-16 min-h-[260px]">
            {PROVEN.testimonials.map((t, i) => (
              <figure
                key={t.sector}
                className={`transition-opacity duration-700 ${quote === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}
              >
                <blockquote className={`${S} max-w-4xl text-[30px] italic leading-[1.25] lg:text-[44px]`}>“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 text-[13px] text-white/60">
                  <span className="rounded-full border border-white/30 px-3 py-1 text-white">{t.sector}</span>
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4">
            <Round dark dir="l" onClick={() => setQuote((q) => (q + PROVEN.testimonials.length - 1) % PROVEN.testimonials.length)} />
            <Round dark dir="r" onClick={() => setQuote((q) => (q + 1) % PROVEN.testimonials.length)} />
            <div className="ml-4 flex gap-2">
              {PROVEN.testimonials.map((t, i) => (
                <span key={t.sector} className={`h-1 rounded-full transition-all ${quote === i ? "w-10 bg-white" : "w-4 bg-white/30"}`} />
              ))}
            </div>
          </div>
          <div className="mt-20 border-t border-white/10 pt-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">{PROVEN.logosLabel}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                <li key={i} className="flex h-16 items-center justify-center rounded-[12px] border border-dashed border-white/15 px-3 text-center text-[11px] text-white/40">
                  {PROVEN.logoPlaceholder}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= timeline */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-end justify-between gap-6 px-6">
          <div className="max-w-3xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{TIMELINE.kicker}</span>
            <h2 className={`${S} mt-4 text-[38px] leading-[1.05] lg:text-[54px]`}>
              <SplitWords text={TIMELINE.title} />
            </h2>
          </div>
          <div className="flex gap-3">
            <Round dir="l" onClick={() => nudge(years.current, -1)} />
            <Round dir="r" onClick={() => nudge(years.current, 1)} />
          </div>
        </div>
        <div ref={years} className="mk-noscroll mt-12 overflow-x-auto scroll-smooth">
          <ol className="flex w-max snap-x border-t border-lv-ink/15 px-6 xl:px-[max(24px,calc((100vw-1300px)/2+24px))]">
            {TIMELINE.milestones.map((m, i) => (
              <li key={`${m.year}-${i}`} className="relative w-[300px] shrink-0 snap-start border-r border-lv-ink/10 px-6 pb-4 pt-10 first:pl-0">
                <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-lv-blue first:left-0" style={{ left: i === 0 ? 0 : 24 }} />
                <span className={`${S} text-[64px] leading-none`}>{m.year}</span>
                <h3 className="mt-6 text-[15px] font-semibold">{m.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-lv-ink/60">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================================================= insights */}
      <section className="bg-lv-paper py-24 lg:py-32">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{INSIGHTS.kicker}</span>
              <h2 className={`${S} mt-4 text-[36px] leading-[1.06] lg:text-[50px]`}>{INSIGHTS.title}</h2>
            </div>
            <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 text-[13px] font-semibold underline underline-offset-4">
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
                className={`rounded-full border px-4 py-2 text-[13px] font-medium ${filter === f ? "border-lv-ink bg-lv-ink text-white" : "border-lv-ink/15 bg-white"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <ul className="mt-8 border-t border-lv-ink/15">
            {INSIGHTS.items.map((r) => (
              <li key={r.title} className={filter === "All" || filter === r.tag ? "" : "hidden"}>
                <a href={INSIGHTS.link.href} className="group grid gap-3 border-b border-lv-ink/15 py-7 lg:grid-cols-[180px_1fr_1fr_100px] lg:items-baseline lg:gap-8">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-lv-700">{r.tag}</span>
                  <h3 className={`${S} text-[26px] leading-[1.15] transition-colors group-hover:text-lv-blue`}>{r.title}</h3>
                  <p className="text-[13px] leading-[1.6] text-lv-ink/60">
                    {r.body}
                    <span className="mt-2 block text-[12px] text-lv-ink/45">
                      {r.meta} · {r.read}
                    </span>
                  </p>
                  <span className="flex items-center gap-1.5 text-[13px] font-semibold lg:justify-end">
                    {INSIGHTS.readLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================== recognition + invest */}
      <section className="mx-auto grid max-w-[1300px] gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{RECOGNITION.kicker}</span>
          <h2 className={`${S} mt-4 text-[32px] leading-[1.1] lg:text-[40px]`}>{RECOGNITION.title}</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {RECOGNITION.items.map((a, i) => (
              <Reveal as="li" key={i} delay={(i % 2) * 70} className="rounded-[16px] border border-lv-ink/10 p-5">
                <Award className="h-5 w-5 text-lv-blue" />
                <h3 className="mt-4 text-[14px] font-semibold">{a.title}</h3>
                <p className="mt-1 text-[12px] text-lv-ink/55">{a.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{INVESTMENT.kicker}</span>
          <h2 className={`${S} mt-4 text-[32px] leading-[1.1] lg:text-[40px]`}>{INVESTMENT.title}</h2>
          <ul className="mt-10 space-y-6">
            {INVESTMENT.items.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70} className="grid grid-cols-[44px_1fr] gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lv-paper text-lv-blue">
                  <p.icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-lv-ink/60">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[13px] font-semibold text-white">
              {INVESTMENT.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-full border border-lv-ink/20 px-5 py-3 text-[13px] font-semibold">
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== final cta */}
      <section className="px-3 pb-6 sm:px-5">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[22px] text-center text-white">
          <GrainField tone="sky" grain={0.3} className="absolute inset-0" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,84,147,0.75) 0%, rgba(0,120,212,0.35) 55%, rgba(194,223,246,0) 100%)" }} />
          <div className="relative px-6 pb-16 pt-24 lg:pb-24 lg:pt-32">
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/85">{FINAL_CTA.kicker}</span>
            <h2 className={`${S} mx-auto mt-5 max-w-4xl text-[46px] leading-[1] lg:text-[84px]`}>
              <SplitWords text={FINAL_CTA.title} />
            </h2>
            <div className="mx-auto mt-10 max-w-xl rounded-[20px] bg-white p-3 text-left text-lv-ink shadow-[0_30px_60px_-30px_rgba(0,84,147,0.6)]">
              <p className="px-3 pt-2 text-[14px] leading-[1.55] text-lv-ink/70">{FINAL_CTA.body}</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <a href={FINAL_CTA.secondary.href} className="rounded-[12px] px-4 py-2.5 text-center text-[13px] font-semibold text-lv-ink/70 hover:text-lv-ink">
                  {FINAL_CTA.secondary.label}
                </a>
                <a href={FINAL_CTA.primary.href} className="flex items-center justify-center gap-2 rounded-[12px] bg-lv-blue px-4 py-2.5 text-[13px] font-semibold text-white">
                  {FINAL_CTA.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== footer */}
      <footer className="mx-auto max-w-[1300px] px-6 pb-10 pt-16">
        <div className="grid gap-8 border-b border-lv-ink/10 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h3 className={`${S} text-[34px] leading-[1.1]`}>{CHROME.footerBand.title}</h3>
            <p className="mt-2 text-[14px] text-lv-ink/60">{CHROME.footerBand.body}</p>
          </div>
          <div className="flex gap-3">
            <a href={CHROME.footerBand.expert.href} className="rounded-full border border-lv-ink/20 px-5 py-3 text-[13px] font-semibold">
              {CHROME.footerBand.expert.label}
            </a>
            <a href={CHROME.footerBand.demo.href} className="rounded-full bg-lv-ink px-5 py-3 text-[13px] font-semibold text-white">
              {CHROME.footerBand.demo.label}
            </a>
          </div>
        </div>
        <div className="grid gap-12 py-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Lockup tone="ink" height={30} />
            <p className={`${S} mt-6 text-[22px] italic`}>{CHROME.footerBrand.tagline}</p>
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
                <h4 className="text-[12px] font-semibold text-lv-ink/45">{c.title}</h4>
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
