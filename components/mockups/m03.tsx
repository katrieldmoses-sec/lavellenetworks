"use client";

/**
 * 03 — Explorer.  Source: National Geographic concept (ruled editorial grid,
 * numbered chapters, globe splitting the headline, bordered article panels).
 * Type: Inter Tight.
 */
import { useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Award, MoreHorizontal, Search } from "lucide-react";
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
import { Lockup, Mark, NavMenu, MobileNav, Grain } from "./kit/Brand";

const HATCH = {
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 7px)",
};

/** Chapter marker: small number over a bold word with a full stop. */
function Chapter({ n, label }: { n: string; label?: string }) {
  return (
    <div className="text-white">
      <span className="block text-[44px] font-bold leading-none tracking-[-0.05em] text-white/15">{n}</span>
      <span className="mt-3 block h-px w-8 bg-lv-blue" />
      {label && <span className="mt-3 block text-[15px] font-semibold">{label}</span>}
    </div>
  );
}

function Section({
  n,
  label,
  kicker,
  title,
  aside,
  children,
}: {
  n: string;
  label?: string;
  kicker: string;
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[220px_1fr]">
        <div className="border-white/10 px-6 pb-6 pt-14 lg:border-r lg:py-20">
          <div className="lg:sticky lg:top-24">
            <Chapter n={n} label={label} />
          </div>
        </div>
        <div className="px-6 pb-20 pt-4 lg:px-12 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Reveal>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lv-300">{kicker}</span>
              </Reveal>
              <h2 className="mt-5 text-[32px] font-bold leading-[1.05] tracking-[-0.035em] lg:text-[52px]">
                <SplitWords text={title} stagger={35} />
              </h2>
            </div>
            {aside}
          </div>
          <div className="mt-14">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function M03() {
  const [band, setBand] = useState(1);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root mk-dark relative bg-lv-ink font-m-body text-white antialiased">
      {/* Vertical guides — the ruled editorial grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 mx-auto hidden max-w-[1400px] lg:block">
        <div className="absolute inset-y-0 left-[220px] w-px bg-white/[0.05]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.04]" />
        <div className="absolute inset-y-0 right-[220px] w-px bg-white/[0.04]" />
      </div>
      <Grain opacity={0.08} className="fixed z-0" />

      {/* ------------------------------------------------------------ nav */}
      <header className="relative z-50 border-b border-white/10">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center gap-8 px-6">
          <Lockup tone="white" height={26} priority />
          <NavMenu
            className="ml-8 gap-6"
            theme={{
              trigger: "py-2 text-[13px] font-medium text-white/70 hover:text-white",
              triggerOpen: "text-white",
              panel: "border border-white/10 bg-[#181716] p-5",
              heading: "text-[10px] font-semibold uppercase tracking-[0.16em] text-lv-300",
              link: "py-1.5 text-[13px] text-white/70 hover:text-white",
              chevron: false,
            }}
          />
          <div className="ml-auto hidden items-center gap-5 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="text-[13px] font-medium text-white/70 hover:text-white">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="flex items-center gap-3 text-[13px] font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lv-blue">
                <ArrowRight className="h-4 w-4" />
              </span>
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      <main className="relative z-10">
        {/* ----------------------------------------------------------- hero */}
        <section className="mx-auto grid max-w-[1400px] lg:grid-cols-[220px_1fr]">
          <div className="hidden flex-col justify-between border-r border-white/10 px-6 py-10 lg:flex">
            <p className="text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-white/35">{HERO.meta[0]}</p>
            <Chapter n="01" label={HERO.kicker} />
          </div>
          <div className="relative overflow-hidden px-6 pb-16 pt-10 lg:px-12 lg:pt-16">
            <div className="flex justify-between text-[11px] tracking-[0.1em] text-white/45 lg:justify-end">
              <span className="lg:hidden">{HERO.kicker}</span>
              <span>{HERO.meta[1]}</span>
            </div>
            <div className="relative mt-10 grid items-center lg:mt-4 lg:grid-cols-[1fr_minmax(320px,440px)_1fr]">
              <h1 className="relative z-10 text-[56px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[84px] lg:text-[96px] xl:text-[112px]">
                <SplitWords text={HERO.titleLead} />
                <span className="sr-only"> {HERO.titleAccent}</span>
              </h1>
              <div className="relative my-6 aspect-square w-full max-w-[440px] justify-self-center lg:my-0">
                <Globe dot="rgba(255,255,255,0.75)" dotSize={1.05} density={1.7} outline="rgba(255,255,255,0.12)" arcs="#0078D4" marker="#8CC3EE" lon={78} lat={18} speed={3} draggable />
                <Reveal delay={500} variant="fade" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <p className="max-w-[200px] bg-lv-ink/80 p-3 text-[14px] font-medium leading-[1.4] text-white/90 backdrop-blur-[3px]">
                    {HERO.body}
                  </p>
                </Reveal>
              </div>
              <div className="relative z-10 text-[56px] font-bold leading-[0.95] tracking-[-0.05em] text-lv-300 sm:text-[84px] lg:text-right lg:text-[96px] xl:text-[112px]" aria-hidden>
                <SplitWords text={HERO.titleAccent} delay={300} />
              </div>
            </div>
            <Reveal delay={600} className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
              <a href={HERO.primary.href} className="flex items-center gap-3 text-[14px] font-semibold">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lv-blue">
                  <ArrowDown className="h-4 w-4" />
                </span>
                {HERO.primary.label}
              </a>
              <a href={HERO.secondary.href} className="border border-white/20 px-5 py-3 text-[13px] font-medium hover:border-white/50">
                {HERO.secondary.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* Platform panel — the bordered "Articles." card */}
        <section className="border-t border-white/10 px-4 py-14 lg:px-6" style={HATCH}>
          <Reveal className="mx-auto max-w-[1300px]">
            <div className="relative grid overflow-hidden border border-white/15 bg-lv-ink lg:grid-cols-[80px_1fr_260px]">
              <div className="hidden flex-col items-center justify-between border-r border-white/10 py-8 lg:flex">
                <Mark tone="white" size={26} />
                <MoreHorizontal className="h-5 w-5 text-white/50" />
                <Search className="h-4 w-4 text-white/50" />
              </div>
              <div className="relative">
                <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 px-7 py-7">
                  <div>
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      <ArrowLeft className="h-3.5 w-3.5" />
                      {ARCHITECTURE.kicker}
                    </span>
                    <h2 className="mt-4 text-[34px] font-bold tracking-[-0.03em] lg:text-[44px]">{HERO.diagram.platformLabel}.</h2>
                  </div>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-medium">
                    {HERO.diagram.platform.map((p, i) => (
                      <li key={p.name} className={i === 0 ? "text-white" : "text-white/45"}>
                        {p.brand} {p.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                  {[
                    { title: "→", list: HERO.diagram.sources },
                    { title: "←", list: HERO.diagram.destinations },
                  ].map((col, ci) => (
                    <ul key={ci} className="grid grid-cols-2 gap-px">
                      {col.list.map((s, i) => (
                        <li key={s.label} className="bg-lv-ink px-7 py-8">
                          <s.icon className="h-5 w-5 text-lv-300" />
                          <p className="mt-6 text-[15px] font-semibold">{s.label}</p>
                          <p className="mt-2 text-[10px] tracking-[0.14em] text-white/35">
                            {String(ci * 4 + i + 1).padStart(2, "0")}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
                <div className="pointer-events-none absolute -right-40 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-60 xl:block">
                  <Globe dot="rgba(255,255,255,0.6)" dotSize={0.9} density={2} speed={2} lon={20} lat={10} />
                </div>
              </div>
              <div className="relative border-t border-white/10 bg-lv-ink p-7 lg:border-l lg:border-t-0">
                <span className="block h-px w-8 bg-lv-blue" />
                <p className="mt-6 text-[15px] font-medium leading-[1.55] text-white/80">{STATS.statement}</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------------------------------------------------------- stats */}
        <section className="border-t border-white/10">
          <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[220px_1fr]">
            <div className="border-white/10 px-6 pt-14 lg:border-r lg:py-20">
              <Chapter n="02" />
            </div>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.items.map((s, i) => (
                <Reveal key={s.label} delay={i * 80} className={`border-white/10 px-6 py-12 lg:py-20 ${i ? "border-l" : ""}`}>
                  <dd className="text-[46px] font-bold leading-none tracking-[-0.05em] lg:text-[56px] xl:text-[66px]">
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </dd>
                  <dt className="mt-4 text-[11px] uppercase tracking-[0.14em] text-white/50">{s.label}</dt>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ------------------------------------------------------- products */}
        <Section n="03" kicker={PRODUCTS.kicker} title={PRODUCTS.title}>
          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.items.map((p, i) => (
              <Reveal key={p.name} delay={i * 80} className="border-b border-r border-white/10">
                <a href={p.href} className="group flex h-full flex-col p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                    {p.brand} · {p.category}
                  </span>
                  <h3 className="mt-14 text-[38px] font-bold leading-none tracking-[-0.04em]">{p.name}</h3>
                  <p className="mt-5 text-[14px] leading-[1.6] text-white/65">{p.desc}</p>
                  <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-[12px] text-white/55">
                    {p.features.map((f) => (
                      <li key={f}>— {f}</li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center gap-3 pt-8 text-[13px] font-semibold">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lv-blue transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    {p.cta}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* --------------------------------------------------- architecture */}
        <Section n="04" kicker={ARCHITECTURE.kicker} title={ARCHITECTURE.title}>
          <p className="-mt-6 mb-12 max-w-2xl text-[16px] leading-[1.65] text-white/60">{ARCHITECTURE.body}</p>
          <div className="grid border border-white/15 lg:grid-cols-[300px_1fr]">
            <ul className="border-b border-white/10 lg:border-b-0 lg:border-r">
              {ARCHITECTURE.bands.map((b, i) => (
                <li key={b.label}>
                  <button
                    type="button"
                    onMouseEnter={() => setBand(i)}
                    onClick={() => setBand(i)}
                    className={`flex w-full items-center justify-between border-b border-white/10 px-6 py-6 text-left transition-colors ${
                      band === i ? "bg-white/[0.04]" : ""
                    }`}
                  >
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-white/40">{String(i + 1).padStart(2, "0")}</span>
                      <span className="mt-1 block text-[18px] font-semibold">{b.label}</span>
                    </span>
                    {b.badge ? (
                      <span className="flex items-center gap-1.5 text-[11px] text-lv-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-lv-blue" />
                        {b.badge}
                      </span>
                    ) : (
                      <ArrowRight className={`h-4 w-4 transition-opacity ${band === i ? "opacity-100" : "opacity-0"}`} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <div className="relative min-h-[320px]">
              {ARCHITECTURE.bands.map((b, i) => (
                <ul
                  key={b.label}
                  className={`grid grid-cols-2 gap-px bg-white/10 transition-opacity duration-500 sm:grid-cols-3 ${band === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}
                >
                  {b.items.map((it) => (
                    <li key={it.label} className={`flex flex-col justify-between gap-10 p-6 ${b.active ? "bg-lv-blue" : "bg-lv-ink"}`}>
                      <it.icon className="h-5 w-5 opacity-80" />
                      <span className="text-[15px] font-semibold">{it.label}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Section>

        {/* ------------------------------------------------------------ why */}
        <Section n="05" kicker={WHY.kicker} title={WHY.title}>
          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {WHY.items.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 80} className="bg-lv-ink p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.1em] text-white/40">{String(i + 1).padStart(2, "0")}</span>
                  <r.icon className="h-5 w-5 text-lv-300" />
                </div>
                <h3 className="mt-10 text-[24px] font-bold leading-[1.1] tracking-[-0.025em]">{r.title}.</h3>
                <p className="mt-4 text-[14px] leading-[1.65] text-white/60">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ----------------------------------------------------- industries */}
        <Section n="06" kicker={INDUSTRIES.kicker} title={INDUSTRIES.title}>
          <div className="hidden grid-cols-[200px_1fr_1fr_1fr_40px] gap-6 border-b border-white/15 pb-3 text-[10px] uppercase tracking-[0.16em] text-white/40 lg:grid">
            <span />
            <span>{INDUSTRIES.labels.challenge}</span>
            <span>{INDUSTRIES.labels.solution}</span>
            <span>{INDUSTRIES.labels.outcome}</span>
          </div>
          <ul>
            {INDUSTRIES.items.map((ind, i) => (
              <Reveal as="li" key={ind.name} delay={i * 50}>
                <a
                  href={ind.href}
                  className="group grid gap-3 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.03] lg:grid-cols-[200px_1fr_1fr_1fr_40px] lg:gap-6"
                >
                  <span className="flex items-center gap-3 text-[20px] font-bold tracking-[-0.02em]">
                    <ind.icon className="h-5 w-5 text-lv-300" />
                    {ind.name}
                  </span>
                  {(["challenge", "solution", "outcome"] as const).map((k) => (
                    <span key={k} className="text-[13px] leading-[1.6] text-white/65">
                      <span className="mr-2 text-[10px] uppercase tracking-[0.14em] text-white/35 lg:hidden">{INDUSTRIES.labels[k]}</span>
                      {ind[k]}
                    </span>
                  ))}
                  <span className="sr-only">
                    {INDUSTRIES.linkPrefix} {ind.name} {INDUSTRIES.linkSuffix}
                  </span>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-lv-blue group-hover:bg-lv-blue"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* --------------------------------------------------------- proven */}
        <Section
          n="07"
          kicker={PROVEN.kicker}
          title={PROVEN.title}
          aside={
            <a href={PROVEN.link.href} className="flex items-center gap-3 text-[13px] font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lv-blue">
                <ArrowRight className="h-4 w-4" />
              </span>
              {PROVEN.link.label}
            </a>
          }
        >
          <div className="grid gap-px bg-white/10 lg:grid-cols-3">
            {PROVEN.testimonials.map((t, i) => (
              <Reveal key={t.sector} delay={i * 80} className="flex flex-col bg-lv-ink p-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lv-300">{t.sector}</span>
                <blockquote className="mt-8 flex-1 text-[22px] font-semibold leading-[1.25] tracking-[-0.02em]">{t.quote}</blockquote>
                <figcaption className="mt-8 text-[12px] text-white/45">{t.role}</figcaption>
              </Reveal>
            ))}
          </div>
          <p className="mt-16 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">{PROVEN.logosLabel}</p>
          <ul className="mt-5 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
            {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
              <li key={i} className="flex h-20 items-center justify-center border-b border-r border-white/10 px-3 text-center text-[11px] text-white/35" style={HATCH}>
                {PROVEN.logoPlaceholder}
              </li>
            ))}
          </ul>
        </Section>

        {/* ------------------------------------------------------- timeline */}
        <Section n="08" kicker={TIMELINE.kicker} title={TIMELINE.title}>
          <ol className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.milestones.map((m, i) => (
              <Reveal as="li" key={`${m.year}-${i}`} delay={(i % 4) * 70} className="relative border-b border-r border-white/10 p-6">
                <span className="text-[44px] font-bold leading-none tracking-[-0.05em] text-white/90">{m.year}</span>
                <h3 className="mt-10 text-[15px] font-semibold">{m.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-white/55">{m.body}</p>
                {i === TIMELINE.milestones.length - 1 && <span className="absolute right-6 top-7 h-2 w-2 rounded-full bg-lv-blue" />}
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* ------------------------------------------------------- insights */}
        <Section
          n="09"
          kicker={INSIGHTS.kicker}
          title={INSIGHTS.title}
          aside={
            <a href={INSIGHTS.link.href} className="flex items-center gap-3 text-[13px] font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lv-blue">
                <ArrowRight className="h-4 w-4" />
              </span>
              {INSIGHTS.link.label}
            </a>
          }
        >
          <div className="border border-white/15">
            <div className="flex flex-wrap gap-x-7 gap-y-2 border-b border-white/10 px-7 py-5">
              {INSIGHTS.filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`text-[12px] font-medium transition-colors ${filter === f ? "text-white" : "text-white/40 hover:text-white/70"}`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {INSIGHTS.items.map((r, i) => (
                <a
                  key={r.title}
                  href={INSIGHTS.link.href}
                  className={`group flex flex-col border-white/10 p-7 lg:[&:not(:first-child)]:border-l ${filter === "All" || filter === r.tag ? "" : "hidden"}`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lv-300">{r.tag}</span>
                  <h3 className="mt-6 text-[17px] font-semibold leading-[1.3]">{r.title}</h3>
                  <p className="mt-3 flex-1 text-[13px] leading-[1.6] text-white/55">{r.body}</p>
                  <div className="mt-8 flex justify-between text-[10px] uppercase tracking-[0.14em] text-white/40">
                    <span>{r.meta}</span>
                    <span>{r.read}</span>
                  </div>
                  <span className="mt-5 flex items-center gap-2 text-[12px] font-semibold">
                    {INSIGHTS.readLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* ---------------------------------------------------- recognition */}
        <Section n="10" kicker={RECOGNITION.kicker} title={RECOGNITION.title}>
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {RECOGNITION.items.map((a, i) => (
              <Reveal as="li" key={i} delay={(i % 3) * 60} className="flex gap-4 bg-lv-ink p-6">
                <Award className="h-5 w-5 shrink-0 text-lv-300" />
                <div>
                  <h3 className="text-[14px] font-semibold">{a.title}</h3>
                  <p className="mt-1 text-[12px] text-white/45">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* ----------------------------------------------------- investment */}
        <Section n="11" kicker={INVESTMENT.kicker} title={INVESTMENT.title}>
          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {INVESTMENT.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="bg-lv-ink p-7">
                <p.icon className="h-5 w-5 text-lv-300" />
                <h3 className="mt-10 text-[19px] font-bold tracking-[-0.02em]">{p.title}.</h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-white/55">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={INVESTMENT.primary.href} className="flex items-center gap-3 text-[14px] font-semibold">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lv-blue">
                <ArrowRight className="h-4 w-4" />
              </span>
              {INVESTMENT.primary.label}
            </a>
            <a href={INVESTMENT.secondary.href} className="border border-white/20 px-5 py-3 text-[13px] font-medium hover:border-white/50 sm:ml-4">
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </Section>

        {/* ------------------------------------------------------ final cta */}
        <section className="relative overflow-hidden border-t border-white/10" style={HATCH}>
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-24 lg:grid-cols-[1fr_520px] lg:py-32">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lv-300">{FINAL_CTA.kicker}</span>
              <h2 className="mt-6 text-[44px] font-bold leading-[0.98] tracking-[-0.045em] lg:text-[84px]">
                <SplitWords text={FINAL_CTA.title} />
              </h2>
              <Reveal delay={200}>
                <p className="mt-8 max-w-lg text-[17px] leading-[1.6] text-white/60">{FINAL_CTA.body}</p>
              </Reveal>
              <Reveal delay={300} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={FINAL_CTA.primary.href} className="flex items-center gap-3 text-[14px] font-semibold">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lv-blue">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  {FINAL_CTA.primary.label}
                </a>
                <a href={FINAL_CTA.secondary.href} className="border border-white/20 px-5 py-3 text-[13px] font-medium hover:border-white/50 sm:ml-4">
                  {FINAL_CTA.secondary.label}
                </a>
              </Reveal>
            </div>
            <div className="aspect-square w-full">
              <Globe dot="rgba(255,255,255,0.7)" dotSize={1.05} density={1.6} graticule="rgba(255,255,255,0.06)" arcs="#0078D4" marker="#8CC3EE" lon={78} lat={20} speed={4} draggable />
            </div>
          </div>
        </section>
      </main>

      {/* --------------------------------------------------------- footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[26px] font-bold tracking-[-0.03em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-white/55">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="border border-white/20 px-5 py-3 text-[13px] font-medium">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="bg-lv-blue px-5 py-3 text-[13px] font-semibold">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 py-14 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="white" height={30} />
              <p className="mt-6 text-[15px] font-semibold">{CHROME.footerBrand.tagline}</p>
              <p className="mt-3 max-w-xs text-[13px] leading-[1.6] text-white/50">{CHROME.footerBrand.blurb}</p>
              <ul className="mt-6 space-y-1.5 text-[12px] text-white/55">
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
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{c.title}</h4>
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
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-[11px] text-white/40 sm:flex-row">
            <span>
              {CHROME.copyright} — {CHROME.builtIn}.
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
