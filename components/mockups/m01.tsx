"use client";

/**
 * 01 — Bloom.  Sources: BloomFi (inset hero card, split intro, bento),
 * uixshuvo (two-tone headings).  Type: Plus Jakarta Sans.
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
import { Lockup, Mark, NavMenu, MobileNav, GrainField } from "./kit/Brand";

/** Ink lead, muted remainder — the uixshuvo two-tone heading. */
function TwoTone({ text, lead }: { text: string; lead: number }) {
  const w = text.split(" ");
  return (
    <>
      {w.slice(0, lead).join(" ")}{" "}
      <span className="text-lv-ink/35">{w.slice(lead).join(" ")}</span>
    </>
  );
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[13px] font-medium ${light ? "text-white/70" : "text-lv-ink/60"}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-white" : "bg-lv-blue"}`} />
      {children}
    </span>
  );
}

const THUMBS = ["blue", "sky", "deep", "paper"] as const;

export default function M01() {
  const [industry, setIndustry] = useState(0);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root bg-lv-paper font-m-body text-lv-ink antialiased">
      {/* ------------------------------------------------------------ nav */}
      <header className="sticky top-0 z-50 bg-lv-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1360px] items-center gap-8 px-5 lg:px-8">
          <Lockup tone="ink" height={28} priority />
          <NavMenu
            className="mx-auto gap-1"
            theme={{
              trigger:
                "rounded-full px-4 py-2 text-[14px] font-medium text-lv-ink/80 transition-colors hover:text-lv-ink",
              triggerOpen: "bg-white text-lv-ink",
              panel: "rounded-[20px] bg-white p-5 shadow-[0_24px_60px_-30px_rgba(32,30,29,0.35)]",
              heading: "px-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-lv-ink/40",
              link: "rounded-lg px-2 py-1.5 text-[14px] text-lv-ink/80 transition-colors hover:bg-lv-paper hover:text-lv-ink",
            }}
          />
          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <a
              href={CHROME.headerCtas.expert.href}
              className="rounded-full px-4 py-2.5 text-[14px] font-medium text-lv-ink/80 hover:text-lv-ink"
            >
              {CHROME.headerCtas.expert.label}
            </a>
            <a
              href={CHROME.headerCtas.demo.href}
              className="rounded-full bg-lv-ink px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-lv-blue"
            >
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      <main className="mx-auto max-w-[1360px] px-3 lg:px-5">
        {/* ----------------------------------------------------------- hero */}
        <section className="relative">
          <GrainField tone="sky" grain={0.28} className="min-h-[calc(100svh-84px)] rounded-[28px] lg:rounded-[36px]">
            <div
              className="absolute inset-x-0 bottom-0 h-[46%]"
              style={{ maskImage: "linear-gradient(to bottom, transparent, #000 45%)", WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 45%)" }}
            >
              <Globe
                dot="#005493"
                dotSize={1.2}
                density={1.6}
                arcs="#0078D4"
                marker="#0078D4"
                lon={80}
                lat={24}
                sway={16}
                frame={{ cx: 0.5, cy: 0.99, r: 0.27 }}
              />
            </div>
            <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-56 pt-16 text-center lg:pb-72 lg:pt-24">
              <Reveal variant="scale">
                <Mark tone="square" size={34} />
              </Reveal>
              <Reveal delay={100} className="mt-7">
                <Kicker>{HERO.kicker}</Kicker>
              </Reveal>
              <h1 className="mt-5 text-[46px] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[72px] lg:text-[92px]">
                <SplitWords text={HERO.titleLead} delay={150} />{" "}
                <SplitWords text={HERO.titleAccent} delay={330} wordClassName="text-lv-blue" />
              </h1>
              <Reveal delay={450}>
                <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.6] text-lv-ink/70 sm:text-[17px]">
                  {HERO.body}
                </p>
              </Reveal>
              <Reveal delay={560} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={HERO.primary.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-lv-ink px-6 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-lv-blue"
                >
                  {HERO.primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={HERO.secondary.href}
                  className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3.5 text-[14px] font-medium backdrop-blur transition-colors hover:bg-white"
                >
                  {HERO.secondary.label}
                </a>
              </Reveal>
              <p className="mt-6 text-[12px] text-lv-ink/60 sm:hidden" aria-hidden>
                {HERO.meta[0]} {HERO.meta[1]}
              </p>
            </div>
            <div className="absolute inset-x-0 top-0 hidden justify-between p-6 text-[12px] font-medium text-lv-ink/60 sm:flex lg:p-8">
              <span>{HERO.meta[0]}</span>
              <span>{HERO.meta[1]}</span>
            </div>
          </GrainField>

          {/* Platform flow strip — overlaps the bottom of the hero card */}
          <Reveal className="relative z-10 mx-auto -mt-px max-w-[1180px] px-3 pt-4 lg:-mt-16 lg:px-0 lg:pt-0">
            <div className="grid items-center gap-4 rounded-[24px] bg-white p-5 lg:grid-cols-[1fr_auto_1.35fr_auto_1fr] lg:gap-0 lg:p-6">
              <ul className="grid grid-cols-4 gap-2 lg:grid-cols-2">
                {HERO.diagram.sources.map((s) => (
                  <li key={s.label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-lv-paper px-2 py-3 text-center lg:flex-row lg:px-3 lg:text-left">
                    <s.icon className="h-4 w-4 text-lv-ink/60" />
                    <span className="text-[12px] font-medium">{s.label}</span>
                  </li>
                ))}
              </ul>
              <svg aria-hidden className="mx-auto hidden h-6 w-16 text-lv-blue lg:block" viewBox="0 0 64 24">
                <path d="M0 12H64" stroke="currentColor" strokeWidth="1.5" className="mk-flow" />
              </svg>
              <div className="rounded-[18px] bg-lv-100 p-3">
                <div className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-lv-700">
                  {HERO.diagram.platformLabel}
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {HERO.diagram.platform.map((p) => (
                    <li key={p.name} className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lv-blue text-white">
                        <p.icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="leading-tight">
                        <span className="block text-[11px] text-lv-ink/55">{p.brand}</span>
                        <span className="block text-[13px] font-semibold">{p.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <svg aria-hidden className="mx-auto hidden h-6 w-16 text-lv-blue lg:block" viewBox="0 0 64 24">
                <path d="M0 12H64" stroke="currentColor" strokeWidth="1.5" className="mk-flow" />
              </svg>
              <ul className="grid grid-cols-4 gap-2 lg:grid-cols-2">
                {HERO.diagram.destinations.map((s) => (
                  <li key={s.label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-lv-paper px-2 py-3 text-center lg:flex-row lg:px-3 lg:text-left">
                    <s.icon className="h-4 w-4 text-lv-ink/60" />
                    <span className="text-[12px] font-medium">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* ---------------------------------------------------------- stats */}
        <section className="px-2 py-24 lg:px-6 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[54px]">
                <TwoTone text={STATS.statement} lead={4} />
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            <Reveal className="md:col-span-2 lg:col-span-2">
              <GrainField tone="sky" grain={0.2} className="flex h-full min-h-[260px] flex-col justify-between rounded-[24px] p-7">
                <span className="text-[15px] font-medium text-lv-ink/70">{STATS.items[0].label}</span>
                <div className="flex items-end justify-between gap-6">
                  <span className="text-[80px] font-medium leading-none tracking-[-0.05em] lg:text-[112px]">
                    <Count end={STATS.items[0].end} suffix={STATS.items[0].suffix} />
                  </span>
                </div>
              </GrainField>
            </Reveal>
            {STATS.items.slice(1).map((s, i) => (
              <Reveal key={s.label} delay={(i + 1) * 90}>
                <div
                  className={`flex h-full min-h-[260px] flex-col justify-between rounded-[24px] p-7 ${
                    i === 1 ? "bg-lv-blue text-white" : "bg-lv-ink text-white"
                  }`}
                >
                  <span className="text-[15px] font-medium text-white/70">{s.label}</span>
                  <span className="text-[52px] font-medium leading-none tracking-[-0.05em] lg:text-[44px] xl:text-[54px]">
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------- products */}
        <section className="grid gap-12 px-2 pb-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div>
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Kicker>{PRODUCTS.kicker}</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-[34px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[50px]">
                  <TwoTone text={PRODUCTS.title} lead={3} />
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="space-y-4">
            {PRODUCTS.items.map((p, i) => (
              <div key={p.name} className="lg:sticky" style={{ top: 112 + i * 18 }}>
                <Reveal>
                  <a
                    href={p.href}
                    className="group block rounded-[28px] border border-lv-ink/[0.06] bg-white p-7 transition-colors hover:border-lv-blue/30 lg:p-9"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="text-[13px] font-medium text-lv-700">{p.brand}</span>
                        <h3 className="mt-1 text-[40px] font-medium leading-none tracking-[-0.035em]">{p.name}</h3>
                        <span className="mt-2 block text-[13px] text-lv-ink/50">{p.category}</span>
                      </div>
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lv-100 text-lv-blue transition-colors group-hover:bg-lv-blue group-hover:text-white">
                        <p.icon className="h-6 w-6" />
                      </span>
                    </div>
                    <p className="mt-6 max-w-md text-[16px] leading-[1.55] text-lv-ink/70">{p.desc}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 rounded-full bg-lv-paper px-3 py-1.5 text-[12px] font-medium text-lv-ink/75">
                          <Check className="h-3.5 w-3.5 text-lv-blue" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold">
                      {p.cta}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lv-ink text-white transition-colors group-hover:bg-lv-blue">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------- architecture */}
        <section className="rounded-[28px] bg-lv-ink px-5 py-20 text-white lg:rounded-[36px] lg:px-14 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Kicker light>{ARCHITECTURE.kicker}</Kicker>
            </Reveal>
            <h2 className="mt-5 text-[34px] font-medium leading-[1.06] tracking-[-0.03em] lg:text-[58px]">
              <SplitWords text={ARCHITECTURE.title} />
            </h2>
            <Reveal delay={200}>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.6] text-white/60">{ARCHITECTURE.body}</p>
            </Reveal>
          </div>
          <div className="mt-14 space-y-2">
            {ARCHITECTURE.bands.map((b, i) => (
              <Reveal key={b.label} delay={i * 80}>
                <div
                  className={`grid gap-4 rounded-[20px] p-5 lg:grid-cols-[220px_1fr] lg:items-center lg:p-6 ${
                    b.active ? "bg-lv-blue" : "bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[16px] font-semibold">{b.label}</span>
                    {b.badge && (
                      <span className="whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-lv-blue">
                        {b.badge}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {b.items.map((it) => (
                      <li
                        key={it.label}
                        className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] ${
                          b.active ? "bg-white/15" : "bg-white/[0.06] text-white/80"
                        }`}
                      >
                        <it.icon className="h-3.5 w-3.5 opacity-80" />
                        {it.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ why */}
        <section className="px-2 py-28 lg:px-6 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <Reveal>
                <Kicker>{WHY.kicker}</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-[34px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[50px]">
                  <TwoTone text={WHY.title} lead={5} />
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {WHY.items.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 90}>
                <div className="flex h-full flex-col rounded-[24px] bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lv-paper text-lv-blue">
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
        </section>

        {/* ----------------------------------------------------- industries */}
        <section className="rounded-[28px] bg-white px-5 py-20 lg:rounded-[36px] lg:px-14 lg:py-24">
          <Reveal>
            <Kicker>{INDUSTRIES.kicker}</Kicker>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-3xl text-[34px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[50px]">
              <TwoTone text={INDUSTRIES.title} lead={3} />
            </h2>
          </Reveal>
          <div role="tablist" aria-label="Industries" className="mk-noscroll mt-12 flex gap-2 overflow-x-auto">
            {INDUSTRIES.items.map((ind, i) => (
              <button
                key={ind.name}
                role="tab"
                aria-selected={industry === i}
                onClick={() => setIndustry(i)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium transition-colors ${
                  industry === i ? "bg-lv-ink text-white" : "bg-lv-paper text-lv-ink/70 hover:text-lv-ink"
                }`}
              >
                <ind.icon className="h-4 w-4" />
                {ind.name}
              </button>
            ))}
          </div>
          {INDUSTRIES.items.map((ind, i) => (
            <div
              key={ind.name}
              role="tabpanel"
              className={`mt-6 grid gap-3 lg:grid-cols-[1fr_1.4fr] ${industry === i ? "" : "hidden"}`}
            >
              <GrainField tone="blue" grain={0.25} className="flex min-h-[320px] flex-col justify-between rounded-[24px] p-8 text-white">
                <ind.icon className="h-8 w-8" />
                <div>
                  <h3 className="text-[44px] font-medium leading-none tracking-[-0.035em]">{ind.name}</h3>
                  <a
                    href={ind.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-lv-ink"
                  >
                    {INDUSTRIES.linkPrefix} {ind.name} {INDUSTRIES.linkSuffix}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </GrainField>
              <dl className="divide-y divide-lv-ink/10 rounded-[24px] bg-lv-paper px-7">
                {(["challenge", "solution", "outcome"] as const).map((k) => (
                  <div key={k} className="grid gap-2 py-7 sm:grid-cols-[140px_1fr]">
                    <dt className="text-[13px] font-semibold text-lv-700">{INDUSTRIES.labels[k]}</dt>
                    <dd className="text-[17px] leading-[1.5]">{ind[k]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </section>

        {/* --------------------------------------------------------- proven */}
        <section className="px-2 py-28 lg:px-6 lg:py-36">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Reveal>
                <Kicker>{PROVEN.kicker}</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-[34px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[50px]">
                  <TwoTone text={PROVEN.title} lead={3} />
                </h2>
              </Reveal>
            </div>
            <a href={PROVEN.link.href} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium">
              {PROVEN.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-3 lg:grid-cols-3">
            {PROVEN.testimonials.map((t, i) => (
              <Reveal key={t.sector} delay={i * 90}>
                <figure className={`flex h-full flex-col rounded-[24px] p-7 ${i === 0 ? "bg-lv-ink text-white" : "bg-white"}`}>
                  <Quote className={`h-6 w-6 ${i === 0 ? "text-lv-300" : "text-lv-blue"}`} />
                  <blockquote className="mt-6 flex-1 text-[17px] leading-[1.5]">{t.quote}</blockquote>
                  <figcaption className="mt-8 flex items-end justify-between gap-4">
                    <span className={`text-[13px] ${i === 0 ? "text-white/60" : "text-lv-ink/55"}`}>{t.role}</span>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${i === 0 ? "bg-white/10" : "bg-lv-100 text-lv-700"}`}>
                      {t.sector}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid items-center gap-8 border-t border-lv-ink/10 pt-10 lg:grid-cols-[220px_1fr]">
            <p className="text-[13px] leading-[1.5] text-lv-ink/55">{PROVEN.logosLabel}</p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                <li
                  key={i}
                  className="flex h-14 items-center justify-center rounded-xl border border-dashed border-lv-ink/15 px-3 text-center text-[11px] text-lv-ink/45"
                >
                  {PROVEN.logoPlaceholder}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------------- timeline */}
        <section className="overflow-hidden rounded-[28px] bg-lv-ink py-20 text-white lg:rounded-[36px] lg:py-28">
          <div className="px-5 lg:px-14">
            <Reveal>
              <Kicker light>{TIMELINE.kicker}</Kicker>
            </Reveal>
            <h2 className="mt-5 max-w-2xl text-[34px] font-medium leading-[1.06] tracking-[-0.03em] lg:text-[58px]">
              <SplitWords text={TIMELINE.title} />
            </h2>
          </div>
          <div className="mk-noscroll mt-14 overflow-x-auto px-5 lg:px-14">
            <ol className="relative flex w-max snap-x gap-3 pb-2">
              {TIMELINE.milestones.map((m, i) => (
                <li
                  key={`${m.year}-${i}`}
                  className={`flex w-[290px] shrink-0 snap-start flex-col rounded-[22px] p-6 ${
                    i === TIMELINE.milestones.length - 1 ? "bg-lv-blue" : "bg-white/[0.06]"
                  }`}
                >
                  <span className="text-[44px] font-medium leading-none tracking-[-0.04em]">{m.year}</span>
                  <h3 className="mt-14 text-[17px] font-semibold">{m.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-white/60">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------------- insights */}
        <section className="px-2 py-28 lg:px-6 lg:py-36">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Reveal>
                <Kicker>{INSIGHTS.kicker}</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-[34px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[50px]">
                  <TwoTone text={INSIGHTS.title} lead={2} />
                </h2>
              </Reveal>
            </div>
            <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium">
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
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  filter === f ? "bg-lv-ink text-white" : "bg-white text-lv-ink/65 hover:text-lv-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {INSIGHTS.items.map((r, i) => (
              <a
                key={r.title}
                href={INSIGHTS.link.href}
                className={`group flex flex-col rounded-[24px] bg-white p-3 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}
              >
                <GrainField tone={THUMBS[i]} grain={0.3} className="aspect-[4/3] rounded-[18px]">
                  <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold">{r.tag}</span>
                </GrainField>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex justify-between text-[12px] text-lv-ink/50">
                    <span>{r.meta}</span>
                    <span>{r.read}</span>
                  </div>
                  <h3 className="mt-3 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em]">{r.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-[1.55] text-lv-ink/60">{r.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold">
                    {INSIGHTS.readLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- recognition */}
        <section className="grid gap-12 rounded-[28px] bg-white px-5 py-20 lg:grid-cols-[1fr_1.3fr] lg:rounded-[36px] lg:px-14 lg:py-24">
          <div>
            <Reveal>
              <Kicker>{RECOGNITION.kicker}</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[30px] font-medium leading-[1.1] tracking-[-0.03em] lg:text-[40px]">
                <TwoTone text={RECOGNITION.title} lead={4} />
              </h2>
            </Reveal>
          </div>
          <ul className="divide-y divide-lv-ink/10 border-y border-lv-ink/10">
            {RECOGNITION.items.map((a, i) => (
              <Reveal as="li" key={i} delay={i * 50} className="flex items-center gap-5 py-5">
                <Award className="h-5 w-5 shrink-0 text-lv-blue" />
                <span className="flex-1 text-[15px] font-medium">{a.title}</span>
                <span className="text-right text-[13px] text-lv-ink/50">{a.body}</span>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ----------------------------------------------------- investment */}
        <section className="px-2 py-28 lg:px-6 lg:py-36">
          <Reveal>
            <Kicker>{INVESTMENT.kicker}</Kicker>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-3xl text-[34px] font-medium leading-[1.08] tracking-[-0.03em] lg:text-[50px]">
              <TwoTone text={INVESTMENT.title} lead={2} />
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {INVESTMENT.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-[24px] bg-lv-100 p-7">
                  <p.icon className="h-6 w-6 text-lv-blue" />
                  <h3 className="mt-12 text-[19px] font-semibold">{p.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-lv-ink/65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={INVESTMENT.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-ink px-6 py-3.5 text-[14px] font-medium text-white hover:bg-lv-blue"
            >
              {INVESTMENT.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-[14px] font-medium">
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </section>

        {/* ------------------------------------------------------ final cta */}
        <section>
          <GrainField tone="deep" grain={0.3} className="rounded-[28px] px-6 py-24 text-center text-white lg:rounded-[36px] lg:py-36">
            <div
              className="absolute inset-x-0 bottom-0 h-1/2 opacity-60"
              style={{ maskImage: "linear-gradient(to bottom, transparent, #000 70%)", WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 70%)" }}
            >
              <Globe dot="#8CC3EE" dotSize={1} density={2} speed={2} lon={78} lat={24} frame={{ cx: 0.5, cy: 1.02, r: 0.3 }} />
            </div>
            <div className="relative mx-auto max-w-3xl">
              <Kicker light>{FINAL_CTA.kicker}</Kicker>
              <h2 className="mt-6 text-[40px] font-medium leading-[1.04] tracking-[-0.04em] lg:text-[76px]">
                <SplitWords text={FINAL_CTA.title} />
              </h2>
              <Reveal delay={200}>
                <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.6] text-white/70">{FINAL_CTA.body}</p>
              </Reveal>
              <Reveal delay={300} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={FINAL_CTA.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-lv-ink"
                >
                  {FINAL_CTA.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={FINAL_CTA.secondary.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-[14px] font-medium hover:bg-white/10"
                >
                  {FINAL_CTA.secondary.label}
                </a>
              </Reveal>
            </div>
          </GrainField>
        </section>
      </main>

      {/* --------------------------------------------------------- footer */}
      <footer className="mx-auto max-w-[1360px] px-5 pb-10 pt-24 lg:px-11">
        <div className="flex flex-col justify-between gap-8 border-b border-lv-ink/10 pb-14 lg:flex-row lg:items-end">
          <div>
            <h3 className="text-[30px] font-medium tracking-[-0.03em] lg:text-[40px]">{CHROME.footerBand.title}</h3>
            <p className="mt-2 text-[15px] text-lv-ink/60">{CHROME.footerBand.body}</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <a href={CHROME.footerBand.expert.href} className="rounded-full bg-white px-5 py-3 text-[14px] font-medium">
              {CHROME.footerBand.expert.label}
            </a>
            <a href={CHROME.footerBand.demo.href} className="rounded-full bg-lv-ink px-5 py-3 text-[14px] font-medium text-white">
              {CHROME.footerBand.demo.label}
            </a>
          </div>
        </div>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Lockup tone="ink" height={34} />
            <p className="mt-6 text-[17px] font-medium">{CHROME.footerBrand.tagline}</p>
            <p className="mt-3 max-w-xs text-[13px] leading-[1.6] text-lv-ink/55">{CHROME.footerBrand.blurb}</p>
            <ul className="mt-6 space-y-1.5 text-[13px] text-lv-ink/65">
              <li>{CHROME.footerBrand.location}</li>
              <li>
                <a href={`mailto:${CHROME.footerBrand.email}`} className="hover:text-lv-ink">
                  {CHROME.footerBrand.email}
                </a>
              </li>
              <li>
                <a href={CHROME.footerBrand.phoneHref} className="hover:text-lv-ink">
                  {CHROME.footerBrand.phone}
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((c) => (
              <div key={c.title}>
                <h4 className="text-[12px] font-semibold text-lv-ink/40">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[13px] text-lv-ink/75 hover:text-lv-ink">
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
