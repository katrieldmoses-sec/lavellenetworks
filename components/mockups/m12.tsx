"use client";

/**
 * 12 — Tura.  Source: Tura portfolio (monochrome slides on a grain ground,
 * each a framed screen numbered .01 .02 …, spaced caps, side links, vertical
 * "scroll" cue, overlapping device frames, contact screen).  Type: Jost.
 */
import { useState } from "react";
import { ArrowRight, Award } from "lucide-react";
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
import { Reveal, Count } from "./kit/Motion";
import { Lockup, Mark, NavMenu, MobileNav, Grain } from "./kit/Brand";

const CAPS = "uppercase tracking-[0.22em]";

/** A framed slide with its number outside the frame. */
function Screen({ n, children, className = "" }: { n: string; children: React.ReactNode; className?: string }) {
  return (
    <section className="relative mx-auto max-w-[1180px] px-4 py-10 lg:px-8 lg:py-16">
      <span className="absolute bottom-10 left-0 hidden text-[15px] font-medium text-white/40 lg:block lg:bottom-16 lg:-left-6">.{n}</span>
      <Reveal variant="scale" duration={1100}>
        <div className={`relative overflow-hidden rounded-[4px] bg-[#232120] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)] ${className}`}>
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 70%)" }} />
          <span className={`absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] text-white/40 lg:flex ${CAPS} [writing-mode:vertical-rl]`}>
            {n}
            <span className="h-10 w-px bg-white/25" />
          </span>
          <div className="relative">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className={`text-[10px] text-white/50 ${CAPS}`}>{children}</span>;
}

function Title({ children, className = "" }: { children: string; className?: string }) {
  return <h2 className={`text-[24px] font-semibold leading-[1.3] tracking-[0.12em] lg:text-[30px] ${className} uppercase`}>{children}</h2>;
}

function Btn({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-[11px] ${CAPS} shadow-[0_10px_24px_-10px_rgba(0,0,0,0.8)] transition-colors ${
        primary ? "bg-lv-blue text-white hover:bg-lv-600" : "bg-[#2c2a28] text-white/85 hover:bg-[#363331]"
      }`}
    >
      {children}
    </a>
  );
}

export default function M12() {
  const [prod, setProd] = useState(1);
  const [why, setWhy] = useState(0);
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root mk-dark relative min-h-screen font-m-body text-white antialiased" style={{ background: "radial-gradient(90% 60% at 50% 0%, #3a3735 0%, #201E1D 55%, #161514 100%)" }}>
      <Grain opacity={0.14} className="fixed" />

      {/* project header strip */}
      <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-6 px-4 pt-14 lg:px-8">
        <div>
          <Label>{HERO.meta[1]}</Label>
          <p className={`mt-3 text-[22px] font-medium ${CAPS}`}>{HERO.kicker}</p>
        </div>
        <div className="text-right">
          <Label>{HERO.meta[0]}</Label>
          <div className="mt-3 flex justify-end">
            <Mark tone="white" size={36} />
          </div>
        </div>
      </div>

      {/* .01 hero */}
      <Screen n="01">
        <header className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-10">
          <Lockup tone="white" height={22} priority />
          <NavMenu
            className="gap-7"
            theme={{
              trigger: `py-2 text-[10px] text-white/70 hover:text-white ${CAPS}`,
              panel: "rounded-[2px] bg-[#2c2a28] p-5 shadow-2xl",
              heading: `text-[9px] text-white/40 ${CAPS}`,
              link: "py-1.5 text-[13px] text-white/75 hover:text-white",
              chevron: false,
            }}
          />
          <div className="hidden items-center gap-5 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className={`text-[10px] text-white/70 ${CAPS}`}>
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className={`text-[10px] text-lv-300 ${CAPS}`}>
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav tone="dark" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </header>
        <div className="relative flex min-h-[520px] flex-col items-center justify-center px-6 pb-20 pt-6 text-center lg:min-h-[600px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(80%,560px)] -translate-x-1/2 -translate-y-1/2 opacity-25">
            <Globe dot="rgba(255,255,255,0.9)" dotSize={1} density={1.8} lon={78} lat={18} speed={2.5} />
          </div>
          <span className={`relative text-[10px] text-white/55 ${CAPS}`}>{HERO.kicker}</span>
          <h1 className="relative mt-5 text-[46px] font-semibold uppercase leading-[1.05] tracking-[0.06em] [text-shadow:0_20px_40px_rgba(0,0,0,0.6)] sm:text-[68px] lg:text-[84px]">
            {HERO.titleLead}
            <br />
            <span className="text-lv-300">{HERO.titleAccent}</span>
          </h1>
          <p className="relative mt-6 max-w-[440px] text-[12px] leading-[1.8] tracking-[0.06em] text-white/60">{HERO.body}</p>
          <div className="relative mt-9 flex flex-col gap-3 sm:flex-row">
            <Btn href={HERO.primary.href} primary>
              {HERO.primary.label} <ArrowRight className="h-3.5 w-3.5" />
            </Btn>
            <Btn href={HERO.secondary.href}>{HERO.secondary.label}</Btn>
          </div>
        </div>
        {/* diagram as a quiet footer row inside the screen */}
        <div className="grid border-t border-white/[0.07] text-center sm:grid-cols-3">
          {[
            { label: "→", items: HERO.diagram.sources.map((x) => x.label) },
            { label: HERO.diagram.platformLabel, items: HERO.diagram.platform.map((x) => `${x.brand} ${x.name}`) },
            { label: "←", items: HERO.diagram.destinations.map((x) => x.label) },
          ].map((c, i) => (
            <div key={i} className={`px-6 py-6 ${i ? "sm:border-l sm:border-white/[0.07]" : ""}`}>
              <Label>{c.label}</Label>
              <p className="mt-2 text-[11px] leading-[1.9] tracking-[0.08em] text-white/70">{c.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </Screen>

      {/* .02 stats */}
      <Screen n="02">
        <div className="px-6 py-16 text-center lg:px-16 lg:py-20">
          <p className="mx-auto max-w-2xl text-[15px] leading-[1.8] tracking-[0.04em] text-white/75">{STATS.statement}</p>
          <dl className="mt-14 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {STATS.items.map((s) => (
              <div key={s.label}>
                <dd className="text-[52px] font-light leading-none tracking-[0.02em]">
                  <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                </dd>
                <dt className={`mt-4 text-[10px] text-white/50 ${CAPS}`}>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Screen>

      {/* .03 products — overlapping frames */}
      <Screen n="03">
        <div className="px-6 pb-14 pt-12 text-center lg:px-16">
          <Label>{PRODUCTS.kicker}</Label>
          <Title className="mx-auto mt-4 max-w-3xl">{PRODUCTS.title}</Title>
          <div className="relative mx-auto mt-12 flex h-[300px] max-w-[760px] items-center justify-center">
            {PRODUCTS.items.map((x, i) => {
              const offset = i - prod;
              const visible = Math.abs(offset) <= 1;
              return (
                <button
                  key={x.name}
                  type="button"
                  onClick={() => setProd(i)}
                  aria-label={x.name}
                  className="absolute top-1/2 w-[260px] rounded-[3px] bg-[#2c2a28] p-4 text-left shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] transition-all duration-700 ease-[cubic-bezier(.2,.7,.1,1)] sm:w-[300px]"
                  style={{
                    transform: `translate(calc(-50% + ${offset * 250}px), -50%) scale(${offset === 0 ? 1.08 : 0.86})`,
                    left: "50%",
                    zIndex: 10 - Math.abs(offset),
                    opacity: visible ? (offset === 0 ? 1 : 0.45) : 0,
                    filter: offset === 0 ? "none" : "grayscale(1)",
                    pointerEvents: visible ? "auto" : "none",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    ))}
                  </div>
                  <div className="mt-4 flex h-28 items-center justify-center rounded-[2px] bg-gradient-to-br from-[#3a3735] to-[#1c1b1a]">
                    <x.icon className={`h-10 w-10 ${offset === 0 ? "text-lv-300" : "text-white/50"}`} />
                  </div>
                  <span className={`mt-4 block text-[9px] text-white/45 ${CAPS}`}>
                    {x.brand} · {x.category}
                  </span>
                  <span className="mt-1 block text-[15px] font-semibold tracking-[0.08em]">{x.name}</span>
                </button>
              );
            })}
          </div>
          <div className="relative mx-auto mt-6 max-w-xl">
            {PRODUCTS.items.map((x, i) => (
              <div key={x.name} className={`transition-opacity duration-500 ${prod === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                <h3 className={`text-[34px] font-semibold ${CAPS}`}>{x.name}</h3>
                <p className="mt-4 text-[12px] leading-[1.9] tracking-[0.05em] text-white/60">{x.desc}</p>
                <p className="mt-3 text-[11px] leading-[1.9] tracking-[0.06em] text-white/45">{x.features.join(" · ")}</p>
                <div className="mt-8">
                  <Btn href={x.href}>{x.cta}</Btn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Screen>

      {/* .04 architecture */}
      <Screen n="04">
        <div className="grid gap-10 px-6 py-14 lg:grid-cols-[1fr_1.2fr] lg:px-16 lg:py-20">
          <div>
            <Label>{ARCHITECTURE.kicker}</Label>
            <Title className="mt-4">{ARCHITECTURE.title}</Title>
            <p className="mt-6 text-[12px] leading-[1.9] tracking-[0.05em] text-white/60">{ARCHITECTURE.body}</p>
          </div>
          <div className="space-y-2">
            {ARCHITECTURE.bands.map((b) => (
              <div key={b.label} className={`rounded-[2px] p-5 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.8)] ${b.active ? "bg-lv-blue" : "bg-[#2c2a28]"}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-medium ${CAPS}`}>{b.label}</span>
                  {b.badge && <span className={`text-[9px] text-white/80 ${CAPS}`}>{b.badge}</span>}
                </div>
                <p className="mt-3 text-[11px] leading-[1.9] tracking-[0.06em] text-white/65">{b.items.map((x) => x.label).join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </Screen>

      {/* .05 why */}
      <Screen n="05">
        <div className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="text-center">
            <Label>{WHY.kicker}</Label>
            <Title className="mx-auto mt-4 max-w-3xl">{WHY.title}</Title>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr]">
            <ul className="space-y-1">
              {WHY.items.map((r, i) => (
                <li key={r.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setWhy(i)}
                    onClick={() => setWhy(i)}
                    className={`w-full border-l-2 py-2.5 pl-4 text-left text-[11px] transition-colors ${CAPS} ${why === i ? "border-lv-300 text-white" : "border-white/10 text-white/45"}`}
                  >
                    {r.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="relative min-h-[180px]">
              {WHY.items.map((r, i) => (
                <div key={r.title} className={`transition-opacity duration-500 ${why === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                  <r.icon className="h-8 w-8 text-lv-300" />
                  <p className="mt-6 max-w-xl text-[18px] font-light leading-[1.7] tracking-[0.02em] text-white/85">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Screen>

      {/* .06 industries */}
      <Screen n="06">
        <div className="px-6 py-14 lg:px-16 lg:py-20">
          <Label>{INDUSTRIES.kicker}</Label>
          <Title className="mt-4 max-w-3xl">{INDUSTRIES.title}</Title>
          <div className="mt-10 flex flex-wrap gap-2">
            {INDUSTRIES.items.map((x, i) => (
              <button
                key={x.name}
                type="button"
                onClick={() => setInd(i)}
                className={`px-4 py-2.5 text-[10px] shadow-[0_10px_20px_-12px_rgba(0,0,0,0.8)] ${CAPS} ${ind === i ? "bg-white text-lv-ink" : "bg-[#2c2a28] text-white/65"}`}
              >
                {x.name}
              </button>
            ))}
          </div>
          <div className="relative mt-8">
            {INDUSTRIES.items.map((x, i) => (
              <div key={x.name} className={`grid gap-6 transition-opacity duration-500 sm:grid-cols-3 ${ind === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                {(["challenge", "solution", "outcome"] as const).map((k) => (
                  <div key={k} className="rounded-[2px] bg-[#2c2a28] p-5">
                    <Label>{INDUSTRIES.labels[k]}</Label>
                    <p className="mt-3 text-[13px] leading-[1.75] tracking-[0.02em] text-white/80">{x[k]}</p>
                  </div>
                ))}
                <a href={x.href} className={`text-[10px] text-lv-300 sm:col-span-3 ${CAPS}`}>
                  {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </Screen>

      {/* .07 proven */}
      <Screen n="07">
        <div className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Label>{PROVEN.kicker}</Label>
              <Title className="mt-4">{PROVEN.title}</Title>
            </div>
            <a href={PROVEN.link.href} className={`text-[10px] text-lv-300 ${CAPS}`}>
              {PROVEN.link.label} →
            </a>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {PROVEN.testimonials.map((t) => (
              <figure key={t.sector} className="rounded-[2px] bg-[#2c2a28] p-6 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.9)]">
                <Label>{t.sector}</Label>
                <blockquote className="mt-4 text-[13px] leading-[1.85] tracking-[0.02em] text-white/80">{t.quote}</blockquote>
                <figcaption className="mt-5 text-[10px] tracking-[0.06em] text-white/45">{t.role}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Label>{PROVEN.logosLabel}</Label>
            <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                <li key={i} className="flex h-14 items-center justify-center border border-dashed border-white/10 px-3 text-[10px] text-white/35">
                  {PROVEN.logoPlaceholder}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Screen>

      {/* .08 timeline */}
      <Screen n="08">
        <div className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="text-center">
            <Label>{TIMELINE.kicker}</Label>
            <Title className="mx-auto mt-4 max-w-2xl">{TIMELINE.title}</Title>
          </div>
          <ol className="relative mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.milestones.map((m, i) => (
              <li key={`${m.year}-${i}`} className="border-t border-white/10 pt-5">
                <span className={`text-[26px] font-light tracking-[0.08em] ${i === TIMELINE.milestones.length - 1 ? "text-lv-300" : ""}`}>{m.year}</span>
                <h3 className={`mt-3 text-[11px] font-medium ${CAPS}`}>{m.title}</h3>
                <p className="mt-2 text-[11px] leading-[1.8] tracking-[0.04em] text-white/55">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Screen>

      {/* .09 insights */}
      <Screen n="09">
        <div className="px-6 py-14 lg:px-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Label>{INSIGHTS.kicker}</Label>
              <Title className="mt-4">{INSIGHTS.title}</Title>
            </div>
            <a href={INSIGHTS.link.href} className={`text-[10px] text-lv-300 ${CAPS}`}>
              {INSIGHTS.link.label} →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {INSIGHTS.filters.map((f) => (
              <button key={f} type="button" onClick={() => setFilter(f)} className={`text-[10px] ${CAPS} ${filter === f ? "text-white" : "text-white/35"}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {INSIGHTS.items.map((r) => (
              <a key={r.title} href={INSIGHTS.link.href} className={`group rounded-[2px] bg-[#2c2a28] p-6 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.9)] ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
                <div className="flex justify-between">
                  <Label>{r.tag}</Label>
                  <span className="text-[10px] text-white/40">
                    {r.meta} · {r.read}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-medium leading-[1.5] tracking-[0.02em]">{r.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.8] text-white/55">{r.body}</p>
                <span className={`mt-5 inline-flex items-center gap-2 text-[10px] text-lv-300 ${CAPS}`}>
                  {INSIGHTS.readLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Screen>

      {/* .10 recognition + investment */}
      <Screen n="10">
        <div className="grid gap-12 px-6 py-14 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div>
            <Label>{RECOGNITION.kicker}</Label>
            <Title className="mt-4 !text-[20px]">{RECOGNITION.title}</Title>
            <ul className="mt-8 space-y-2">
              {RECOGNITION.items.map((a, i) => (
                <li key={i} className="flex items-center gap-3 bg-[#2c2a28] px-4 py-3">
                  <Award className="h-4 w-4 text-white/50" />
                  <span className="flex-1 text-[12px]">{a.title}</span>
                  <span className="text-[10px] text-white/40">{a.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label>{INVESTMENT.kicker}</Label>
            <Title className="mt-4 !text-[20px]">{INVESTMENT.title}</Title>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {INVESTMENT.items.map((x) => (
                <div key={x.title}>
                  <x.icon className="h-4 w-4 text-lv-300" />
                  <h3 className={`mt-3 text-[11px] font-medium ${CAPS}`}>{x.title}</h3>
                  <p className="mt-2 text-[11px] leading-[1.8] text-white/55">{x.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Btn href={INVESTMENT.primary.href} primary>
                {INVESTMENT.primary.label}
              </Btn>
              <Btn href={INVESTMENT.secondary.href}>{INVESTMENT.secondary.label}</Btn>
            </div>
          </div>
        </div>
      </Screen>

      {/* .11 contact */}
      <Screen n="11">
        <div className="grid gap-10 px-6 py-14 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div className="text-center lg:text-left">
            <Label>{FINAL_CTA.kicker}</Label>
            <h2 className={`mt-5 text-[30px] font-semibold leading-[1.25] lg:text-[38px] ${CAPS} !tracking-[0.1em]`}>{FINAL_CTA.title}</h2>
            <p className="mt-6 text-[12px] leading-[1.9] tracking-[0.05em] text-white/60">{FINAL_CTA.body}</p>
            <dl className="mt-10 space-y-5 text-[12px]">
              <div>
                <dt className={`text-[10px] font-medium ${CAPS}`}>{CHROME.footerBrand.location}</dt>
              </div>
              <div>
                <dd className="text-white/60">
                  <a href={CHROME.footerBrand.phoneHref}>{CHROME.footerBrand.phone}</a>
                </dd>
              </div>
              <div>
                <dd className="text-white/60">
                  <a href={`mailto:${CHROME.footerBrand.email}`}>{CHROME.footerBrand.email}</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-[2px] bg-[#2c2a28] p-8 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.9)]">
            <h3 className={`text-center text-[18px] font-semibold ${CAPS}`}>{CHROME.footerBand.title}</h3>
            <p className="mt-4 text-center text-[12px] leading-[1.8] text-white/55">{CHROME.footerBand.body}</p>
            <div className="mt-10 flex flex-col gap-3">
              <Btn href={FINAL_CTA.primary.href} primary>
                {FINAL_CTA.primary.label} <ArrowRight className="h-3.5 w-3.5" />
              </Btn>
              <Btn href={FINAL_CTA.secondary.href}>{FINAL_CTA.secondary.label}</Btn>
              <Btn href={CHROME.footerBand.expert.href}>{CHROME.footerBand.expert.label}</Btn>
              <Btn href={CHROME.footerBand.demo.href}>{CHROME.footerBand.demo.label}</Btn>
            </div>
          </div>
        </div>
      </Screen>

      {/* footer outside the screens */}
      <footer className="relative mx-auto max-w-[1180px] px-4 pb-14 pt-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Lockup tone="white" height={26} />
            <p className={`mt-6 text-[12px] ${CAPS}`}>{CHROME.footerBrand.tagline}</p>
            <p className="mt-3 max-w-xs text-[11px] leading-[1.8] text-white/45">{CHROME.footerBrand.blurb}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((c) => (
              <div key={c.title}>
                <h4 className={`text-[9px] text-white/40 ${CAPS}`}>{c.title}</h4>
                <ul className="mt-4 space-y-2">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[11px] tracking-[0.04em] text-white/65 hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <span className={`text-[9px] text-white/40 ${CAPS}`}>{CHROME.builtIn}</span>
          <p className={`text-[11px] text-white/50 ${CAPS}`}>{CHROME.copyright}</p>
          <ul className={`flex flex-wrap justify-center gap-x-5 gap-y-2 text-[9px] text-white/40 ${CAPS}`}>
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
