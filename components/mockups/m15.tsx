"use client";

/**
 * 15 — Estate.  Sources: the real-estate landing page (light hero with a
 * wide headline, rounded hero image, rotating circular seal, black band of
 * big numbers, tabbed locations, two-column image/text rows) and the Hayati
 * page (centred product, numbered spec callouts).  Type: Poppins.
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
import { Reveal, SplitWords, Count, Marquee } from "./kit/Motion";
import { Lockup, NavMenu, MobileNav, GrainField } from "./kit/Brand";

/** Rotating circular text around an arrow. */
function Seal({ text, href, dark = false, size = 132 }: { text: string; href: string; dark?: boolean; size?: number }) {
  const t = `${text} • ${text} • `;
  return (
    <a href={href} aria-label={text} className={`relative block shrink-0 rounded-full ${dark ? "bg-lv-ink text-white" : "bg-white text-lv-ink"}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="mk-spin absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <path id={`seal-${size}-${dark}`} d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <text fontSize="8.2" letterSpacing="1.6" fill="currentColor" style={{ textTransform: "uppercase", fontWeight: 500 }}>
          <textPath href={`#seal-${size}-${dark}`}>{t}</textPath>
        </text>
      </svg>
      <span className="absolute inset-[30%] flex items-center justify-center rounded-full bg-lv-blue text-white">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </a>
  );
}

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-medium ${dark ? "border-white/25 text-white/80" : "border-lv-ink/15 text-lv-ink/70"}`}>
      {children}
    </span>
  );
}

export default function M15() {
  const [band, setBand] = useState(1);
  const [why, setWhy] = useState(0);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root bg-white font-m-body text-lv-ink antialiased">
      {/* --------------------------------------------------------------- nav */}
      <header className="relative z-50">
        <div className="mx-auto flex h-24 max-w-[1320px] items-center gap-10 px-6">
          <Lockup tone="ink" height={30} priority />
          <NavMenu
            className="mx-auto gap-2"
            theme={{
              trigger: "rounded-full px-4 py-2 text-[14px] font-medium text-lv-ink/75 hover:text-lv-ink",
              triggerOpen: "bg-lv-paper text-lv-ink",
              panel: "rounded-[22px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(32,30,29,0.35)] ring-1 ring-lv-ink/5",
              heading: "text-[11px] font-semibold uppercase tracking-[0.08em] text-lv-blue",
              link: "py-1.5 text-[14px] text-lv-ink/75 hover:text-lv-ink",
            }}
          />
          <div className="hidden items-center gap-3 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="text-[14px] font-medium text-lv-ink/75">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="flex items-center gap-2 rounded-full bg-lv-ink py-2 pl-5 pr-2 text-[14px] font-medium text-white">
              {CHROME.headerCtas.demo.label}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lv-blue">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
          <MobileNav className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      {/* ============================================================= hero */}
      <section className="mx-auto max-w-[1320px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <Pill>
              <span className="h-1.5 w-1.5 rounded-full bg-lv-blue" />
              {HERO.kicker}
            </Pill>
            <h1 className="mt-6 text-[54px] font-semibold leading-[1] tracking-[-0.045em] sm:text-[78px] lg:text-[100px]">
              <SplitWords text={HERO.titleLead} />{" "}
              <SplitWords text={HERO.titleAccent} delay={250} wordClassName="text-lv-blue" />
            </h1>
          </div>
          <div className="pb-3">
            <Reveal delay={300}>
              <p className="text-[16px] leading-[1.7] text-lv-ink/65">{HERO.body}</p>
            </Reveal>
            <Reveal delay={400} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={HERO.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-blue px-6 py-3.5 text-[14px] font-medium text-white">
                {HERO.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={HERO.secondary.href} className="inline-flex items-center justify-center rounded-full border border-lv-ink/20 px-6 py-3.5 text-[14px] font-medium">
                {HERO.secondary.label}
              </a>
            </Reveal>
          </div>
        </div>

        {/* wide hero image with seal on its corner */}
        <Reveal variant="scale" className="relative mt-14">
          <GrainField tone="blue" grain={0.3} className="relative h-[460px] overflow-hidden rounded-[36px] lg:h-[540px]">
            <div className="absolute inset-0">
              <Globe dot="rgba(255,255,255,0.9)" dotSize={1.25} density={1.4} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={16} sway={18} frame={{ cx: 0.68, cy: 0.62, r: 0.36 }} />
            </div>
            {/* spec callouts */}
            <div className="absolute left-6 top-6 flex flex-col gap-2 lg:left-10 lg:top-10">
              {HERO.diagram.platform.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 rounded-full bg-white/90 py-1.5 pl-1.5 pr-4 backdrop-blur" style={{ marginLeft: i * 18 }}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lv-ink text-white">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13px]">
                    <span className="text-lv-ink/55">{p.brand}</span> <span className="font-semibold">{p.name}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white lg:bottom-10 lg:left-10 lg:right-10">
              <div className="text-[13px]">
                <span className="font-semibold">{HERO.diagram.platformLabel}</span>
                <p className="mt-1 text-white/80">
                  {HERO.diagram.sources.map((s) => s.label).join(" · ")} → {HERO.diagram.destinations.map((s) => s.label).join(" · ")}
                </p>
              </div>
              <span className="rounded-full bg-white/15 px-4 py-2 text-[12px] backdrop-blur">{HERO.meta[1]}</span>
            </div>
          </GrainField>
          {/* the notch the seal sits in */}
          <div className="absolute -top-8 right-10 hidden rounded-full bg-white p-3 lg:block">
            <Seal text={HERO.primary.label} href={HERO.primary.href} />
          </div>
        </Reveal>
        <p className="mt-6 text-center text-[13px] text-lv-ink/55">{HERO.meta[0]}</p>
      </section>

      {/* ======================================================= black band */}
      <section className="mt-24 bg-lv-ink py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <p className="text-[22px] font-medium leading-[1.4] tracking-[-0.01em] text-white/90 lg:text-[26px]">{STATS.statement}</p>
            <dl className="grid grid-cols-2 gap-x-10 gap-y-10">
              {STATS.items.map((s) => (
                <div key={s.label}>
                  <dd className="text-[48px] font-semibold leading-none tracking-[-0.04em] lg:text-[54px]">
                    <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                  </dd>
                  <dt className="mt-3 text-[13px] text-white/55">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <Marquee className="mt-16 border-y border-white/10 py-6" duration={30} gap="3.5rem">
          {PRODUCTS.items.map((p) => (
            <span key={p.name} className="flex shrink-0 items-center gap-4 text-[38px] font-semibold tracking-[-0.03em] text-white/85">
              <p.icon className="h-8 w-8 text-lv-300" />
              {p.brand} {p.name}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ========================================================= products */}
      <section className="mx-auto max-w-[1320px] px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Pill>{PRODUCTS.kicker}</Pill>
          <h2 className="mt-6 text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] lg:text-[48px]">
            <SplitWords text={PRODUCTS.title} stagger={35} />
          </h2>
        </div>
        <div className="mt-16 space-y-6">
          {PRODUCTS.items.map((p, i) => (
            <Reveal key={p.name}>
              <div className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                <GrainField tone={(["blue", "deep", "sky", "dusk"] as const)[i]} grain={0.3} className="relative h-[320px] rounded-[32px] [direction:ltr]">
                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1.5 text-[12px] font-medium text-lv-ink">{p.category}</span>
                  <p.icon className={`absolute bottom-8 left-8 h-16 w-16 ${i === 2 ? "text-lv-700" : "text-white"}`} strokeWidth={1.3} />
                  <span className={`absolute bottom-8 right-8 text-[64px] font-semibold leading-none tracking-[-0.04em] ${i === 2 ? "text-lv-700/40" : "text-white/30"}`}>0{i + 1}</span>
                </GrainField>
                <div className="[direction:ltr] lg:px-10">
                  <span className="text-[14px] font-medium text-lv-blue">{p.brand}</span>
                  <h3 className="mt-1 text-[44px] font-semibold leading-none tracking-[-0.04em]">{p.name}</h3>
                  <p className="mt-5 text-[16px] leading-[1.65] text-lv-ink/65">{p.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[15px]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lv-100 text-lv-blue">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={p.href} className="mt-8 inline-flex items-center gap-2 rounded-full border border-lv-ink/20 px-5 py-3 text-[14px] font-medium hover:border-lv-ink">
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================= architecture: tabbed */}
      <section className="bg-lv-paper py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <Pill>{ARCHITECTURE.kicker}</Pill>
              <h2 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] lg:text-[58px]">
                <SplitWords text={ARCHITECTURE.title} />
              </h2>
            </div>
            <p className="text-[16px] leading-[1.7] text-lv-ink/65">{ARCHITECTURE.body}</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 rounded-full bg-white p-1.5 sm:w-fit">
            {ARCHITECTURE.bands.map((b, i) => (
              <button
                key={b.label}
                type="button"
                onClick={() => setBand(i)}
                className={`rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${band === i ? "bg-lv-ink text-white" : "text-lv-ink/60 hover:text-lv-ink"}`}
              >
                {b.label}
              </button>
            ))}
          </div>
          <div className="relative mt-6">
            {ARCHITECTURE.bands.map((b, i) => (
              <div key={b.label} className={`grid gap-4 transition-opacity duration-500 lg:grid-cols-[1.2fr_1fr] ${band === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                <div className="rounded-[32px] bg-white p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[28px] font-semibold tracking-[-0.03em]">{b.label}</h3>
                    {b.badge && <span className="rounded-full bg-lv-blue px-3 py-1 text-[12px] font-medium text-white">{b.badge}</span>}
                  </div>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {b.items.map((it) => (
                      <li key={it.label} className="flex items-center gap-3 rounded-[18px] bg-lv-paper px-4 py-3.5 text-[14px] font-medium">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lv-blue">
                          <it.icon className="h-4 w-4" />
                        </span>
                        {it.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <GrainField tone={b.active ? "blue" : "deep"} grain={0.3} className="min-h-[300px] rounded-[32px]">
                  <Globe dot="rgba(255,255,255,0.85)" dotSize={1.05} density={1.7} lon={78 + i * 30} lat={18} speed={3} />
                </GrainField>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== why: tab + panel */}
      <section className="mx-auto max-w-[1320px] px-6 py-28 lg:py-36">
        <div className="max-w-3xl">
          <Pill>{WHY.kicker}</Pill>
          <h2 className="mt-6 text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] lg:text-[48px]">{WHY.title}</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <ul className="space-y-2">
            {WHY.items.map((r, i) => (
              <li key={r.title}>
                <button
                  type="button"
                  onMouseEnter={() => setWhy(i)}
                  onClick={() => setWhy(i)}
                  className={`flex w-full items-center justify-between rounded-[22px] px-6 py-5 text-left transition-colors ${why === i ? "bg-lv-ink text-white" : "bg-lv-paper hover:bg-lv-100"}`}
                >
                  <span className="flex items-center gap-4">
                    <span className={`text-[13px] font-semibold ${why === i ? "text-lv-300" : "text-lv-ink/40"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[17px] font-medium">{r.title}</span>
                  </span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${why === i ? "translate-x-0" : "-translate-x-2 opacity-0"}`} />
                </button>
              </li>
            ))}
          </ul>
          <div className="relative">
            {WHY.items.map((r, i) => (
              <div key={r.title} className={`flex h-full flex-col rounded-[32px] bg-lv-100 p-10 transition-opacity duration-500 ${why === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-lv-blue">
                  <r.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-auto pt-16 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em]">{r.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.7] text-lv-ink/70">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= industries */}
      <section className="bg-lv-ink py-28 text-white lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Pill dark>{INDUSTRIES.kicker}</Pill>
              <h2 className="mt-6 text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] lg:text-[48px]">{INDUSTRIES.title}</h2>
            </div>
            <Seal text={INDUSTRIES.kicker} href={INDUSTRIES.items[0].href} dark size={120} />
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.items.map((x, i) => (
              <Reveal key={x.name} delay={(i % 3) * 80}>
                <a href={x.href} className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white/[0.05] transition-colors hover:bg-white/[0.08]">
                  <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.3} className="h-40">
                    <x.icon className="absolute bottom-5 left-5 h-9 w-9 text-white" />
                    <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lv-ink transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </GrainField>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{x.name}</h3>
                    <dl className="mt-4 space-y-3 text-[13px] leading-[1.6]">
                      {(["challenge", "solution", "outcome"] as const).map((k) => (
                        <div key={k}>
                          <dt className="font-semibold text-lv-300">{INDUSTRIES.labels[k]}</dt>
                          <dd className="text-white/65">{x[k]}</dd>
                        </div>
                      ))}
                    </dl>
                    <span className="mt-auto pt-6 text-[13px] font-medium underline underline-offset-4">
                      {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================== proven */}
      <section className="mx-auto max-w-[1320px] px-6 py-28 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Pill>{PROVEN.kicker}</Pill>
            <h2 className="mt-6 text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] lg:text-[48px]">{PROVEN.title}</h2>
          </div>
          <a href={PROVEN.link.href} className="inline-flex items-center gap-2 rounded-full border border-lv-ink/20 px-5 py-3 text-[14px] font-medium">
            {PROVEN.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {PROVEN.testimonials.map((t, i) => (
            <Reveal key={t.sector} delay={i * 90}>
              <figure className={`flex h-full flex-col rounded-[28px] p-8 ${i === 1 ? "bg-lv-blue text-white" : "bg-lv-paper"}`}>
                <Quote className={`h-8 w-8 ${i === 1 ? "text-white/70" : "text-lv-blue"}`} />
                <blockquote className="mt-6 flex-1 text-[17px] leading-[1.6]">{t.quote}</blockquote>
                <figcaption className="mt-8 flex items-center justify-between gap-3 text-[13px]">
                  <span className={i === 1 ? "text-white/75" : "text-lv-ink/55"}>{t.role}</span>
                  <span className={`rounded-full px-3 py-1 font-medium ${i === 1 ? "bg-white/20" : "bg-white"}`}>{t.sector}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 rounded-[28px] border border-lv-ink/10 p-6">
          <p className="text-center text-[13px] font-medium text-lv-ink/55">{PROVEN.logosLabel}</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
              <li key={i} className="flex h-14 items-center justify-center rounded-full bg-lv-paper px-3 text-center text-[11px] text-lv-ink/45">
                {PROVEN.logoPlaceholder}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================= timeline */}
      <section className="overflow-hidden bg-lv-paper py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6">
          <Pill>{TIMELINE.kicker}</Pill>
          <h2 className="mt-6 max-w-3xl text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] lg:text-[58px]">
            <SplitWords text={TIMELINE.title} />
          </h2>
        </div>
        <div className="mk-noscroll mt-14 overflow-x-auto">
          <ol className="flex w-max gap-4 px-6 xl:px-[max(24px,calc((100vw-1320px)/2+24px))]">
            {TIMELINE.milestones.map((m, i) => (
              <li key={`${m.year}-${i}`} className={`flex w-[280px] shrink-0 flex-col rounded-[28px] p-7 ${i === TIMELINE.milestones.length - 1 ? "bg-lv-ink text-white" : "bg-white"}`}>
                <span className="text-[44px] font-semibold leading-none tracking-[-0.04em]">{m.year}</span>
                <span className={`mt-6 h-px w-full ${i === TIMELINE.milestones.length - 1 ? "bg-white/20" : "bg-lv-ink/10"}`} />
                <h3 className="mt-6 text-[17px] font-semibold">{m.title}</h3>
                <p className={`mt-2 text-[13px] leading-[1.6] ${i === TIMELINE.milestones.length - 1 ? "text-white/65" : "text-lv-ink/60"}`}>{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================================================= insights */}
      <section className="mx-auto max-w-[1320px] px-6 py-28 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Pill>{INSIGHTS.kicker}</Pill>
            <h2 className="mt-6 text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] lg:text-[48px]">{INSIGHTS.title}</h2>
          </div>
          <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 rounded-full border border-lv-ink/20 px-5 py-3 text-[14px] font-medium">
            {INSIGHTS.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {INSIGHTS.filters.map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} className={`rounded-full px-5 py-2.5 text-[13px] font-medium ${filter === f ? "bg-lv-ink text-white" : "bg-lv-paper text-lv-ink/65"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.items.map((r, i) => (
            <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
              <GrainField tone={(["blue", "sky", "deep", "paper"] as const)[i]} grain={0.3} className="aspect-[4/3] rounded-[24px]">
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-medium">{r.tag}</span>
              </GrainField>
              <div className="mt-4 flex justify-between text-[12px] text-lv-ink/50">
                <span>{r.meta}</span>
                <span>{r.read}</span>
              </div>
              <h3 className="mt-2 text-[17px] font-semibold leading-[1.3]">{r.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-lv-ink/60">{r.body}</p>
              <span className="mt-3 flex items-center gap-1.5 text-[13px] font-medium">
                {INSIGHTS.readLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* =========================================== recognition + investment */}
      <section className="mx-auto grid max-w-[1320px] gap-4 px-6 pb-28 lg:grid-cols-2">
        <div className="rounded-[32px] bg-lv-paper p-8 lg:p-10">
          <Pill>{RECOGNITION.kicker}</Pill>
          <h2 className="mt-6 text-[26px] font-semibold leading-[1.2] tracking-[-0.02em]">{RECOGNITION.title}</h2>
          <ul className="mt-8 space-y-2">
            {RECOGNITION.items.map((a, i) => (
              <li key={i} className="flex items-center gap-4 rounded-full bg-white px-5 py-3">
                <Award className="h-4 w-4 text-lv-blue" />
                <span className="flex-1 text-[13px] font-medium">{a.title}</span>
                <span className="text-right text-[12px] text-lv-ink/50">{a.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] bg-lv-ink p-8 text-white lg:p-10">
          <Pill dark>{INVESTMENT.kicker}</Pill>
          <h2 className="mt-6 text-[26px] font-semibold leading-[1.2] tracking-[-0.02em]">{INVESTMENT.title}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {INVESTMENT.items.map((x) => (
              <div key={x.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lv-300">
                  <x.icon className="h-4 w-4" />
                </span>
                <h3 className="mt-3 text-[15px] font-semibold">{x.title}</h3>
                <p className="mt-1.5 text-[12px] leading-[1.6] text-white/60">{x.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-blue px-5 py-3 text-[13px] font-medium">
              {INVESTMENT.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-[13px] font-medium">
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== final cta */}
      <section className="mx-auto max-w-[1320px] px-6 pb-24">
        <GrainField tone="blue" grain={0.3} className="rounded-[40px] px-8 py-16 text-white lg:px-16 lg:py-20">
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <Pill dark>{FINAL_CTA.kicker}</Pill>
              <h2 className="mt-6 text-[44px] font-semibold leading-[1] tracking-[-0.045em] lg:text-[76px]">
                <SplitWords text={FINAL_CTA.title} />
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-[1.65] text-white/85">{FINAL_CTA.body}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={FINAL_CTA.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-lv-ink">
                  {FINAL_CTA.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-[14px] font-medium">
                  {FINAL_CTA.secondary.label}
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <Seal text={FINAL_CTA.primary.label} href={FINAL_CTA.primary.href} size={170} />
            </div>
          </div>
        </GrainField>
      </section>

      {/* =========================================================== footer */}
      <footer className="bg-lv-ink text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[26px] font-semibold tracking-[-0.02em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-white/55">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="rounded-full border border-white/25 px-5 py-3 text-[13px] font-medium">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-full bg-lv-blue px-5 py-3 text-[13px] font-medium">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 border-t border-white/10 py-14 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="white" height={30} />
              <p className="mt-6 text-[15px] font-medium">{CHROME.footerBrand.tagline}</p>
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
                  <h4 className="text-[13px] font-semibold">{c.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-[13px] text-white/60 hover:text-white">
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
