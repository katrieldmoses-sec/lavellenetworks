"use client";

/**
 * 16 — Ledger.  Sources: the finance dashboard concept (giant figures, thin
 * rules, data set in rows) and the numbered-cards page (oversized numerals
 * cropped by their card).  Structure: the company read as a ledger — every
 * section is a set of ruled rows; rows sweep a fill in from the left on
 * hover; figures count up at display size.  Type: Urbanist, thin to heavy.
 */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award, Check } from "lucide-react";
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

/** A ruled ledger row whose fill sweeps in on hover. */
function Row({ children, className = "", as: Tag = "div", href }: { children: React.ReactNode; className?: string; as?: "div" | "a" | "li"; href?: string }) {
  const C = Tag as any;
  return (
    <C href={href} className={`group relative block overflow-hidden border-b border-white/[0.12] ${className}`}>
      <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-white/[0.04] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.1,1)] group-hover:scale-x-100" />
      <div className="relative">{children}</div>
    </C>
  );
}

function SectionHead({ n, kicker, title, action }: { n: string; kicker: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-b border-white/25 pb-8 lg:grid-cols-[120px_1fr_auto] lg:items-end">
      <span className="text-[64px] font-extralight leading-none tracking-[-0.04em] text-lv-300">{n}</span>
      <div>
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">{kicker}</span>
        <h2 className="mt-3 max-w-3xl text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] lg:text-[44px]">
          <SplitWords text={title} stagger={30} />
        </h2>
      </div>
      {action}
    </div>
  );
}

export default function M16() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root mk-dark relative bg-lv-ink font-m-body text-white antialiased">
      <Grain opacity={0.1} className="fixed" />

      {/* --------------------------------------------------------------- nav */}
      <header className="relative z-50 border-b border-white/[0.12]">
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center gap-10 px-6">
          <Lockup tone="white" height={26} priority />
          <NavMenu
            className="gap-6"
            theme={{
              trigger: "py-2 text-[14px] font-medium text-white/70 hover:text-white",
              triggerOpen: "text-white",
              panel: "border border-white/[0.12] bg-[#262423] p-5",
              heading: "text-[11px] font-semibold uppercase tracking-[0.14em] text-lv-300",
              link: "py-1.5 text-[14px] text-white/75 hover:text-white",
            }}
          />
          <div className="ml-auto hidden items-center gap-6 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="text-[14px] font-medium text-white/70 hover:text-white">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="border-b-2 border-lv-blue pb-0.5 text-[14px] font-semibold">
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      {/* ============================================================== hero */}
      <section className="relative mx-auto grid max-w-[1320px] gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1fr_1.15fr] lg:pt-20">
        <div className="flex flex-col">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lv-300">{HERO.kicker}</span>
          <h1 className="mt-6 text-[60px] font-bold leading-[0.95] tracking-[-0.045em] sm:text-[84px] lg:text-[96px]">
            <SplitWords text={HERO.titleLead} />{" "}
            <SplitWords text={HERO.titleAccent} delay={250} wordClassName="font-extralight text-lv-300" />
          </h1>
          <Reveal delay={350}>
            <p className="mt-8 max-w-md text-[16px] leading-[1.7] text-white/60">{HERO.body}</p>
          </Reveal>
          <Reveal delay={450} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={HERO.primary.href} className="group inline-flex items-center justify-center gap-2 bg-lv-blue px-6 py-4 text-[14px] font-semibold hover:bg-lv-600">
              {HERO.primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={HERO.secondary.href} className="inline-flex items-center justify-center border border-white/25 px-6 py-4 text-[14px] font-semibold hover:border-white/60">
              {HERO.secondary.label}
            </a>
          </Reveal>
          <div className="mt-auto pt-14">
            <div className="flex items-center gap-5">
              <div className="h-24 w-24 shrink-0">
                <Globe dot="rgba(140,195,238,0.9)" dotSize={0.7} density={3} lon={78} lat={18} speed={8} />
              </div>
              <p className="text-[13px] leading-[1.6] text-white/55">
                {HERO.meta[0]}
                <br />
                {HERO.meta[1]}
              </p>
            </div>
          </div>
        </div>

        {/* the ledger of figures */}
        <div className="border-t border-white/25">
          {STATS.items.map((s, i) => (
            <Row key={s.label} className="py-5">
              <div className="flex items-end justify-between gap-6">
                <span className="pb-3 text-[13px] font-medium text-white/55">
                  <span className="mr-3 text-lv-300">{String(i + 1).padStart(2, "0")}</span>
                  {s.label}
                </span>
                <span className="text-[64px] font-extralight leading-[0.9] tracking-[-0.05em] sm:text-[84px] lg:text-[96px]">
                  <Count end={s.end} suffix={s.suffix} separator={s.separator} duration={2200} />
                </span>
              </div>
            </Row>
          ))}
          <p className="pt-6 text-[15px] leading-[1.65] text-white/70">{STATS.statement}</p>
        </div>
      </section>

      {/* diagram as a three-column ledger */}
      <section className="border-y border-white/[0.12] bg-white/[0.02]">
        <div className="mx-auto grid max-w-[1320px] px-6 md:grid-cols-[1fr_1.4fr_1fr]">
          {[
            { label: "→", items: HERO.diagram.sources.map((x) => ({ icon: x.icon, t: x.label })) },
            { label: HERO.diagram.platformLabel, items: HERO.diagram.platform.map((x) => ({ icon: x.icon, t: `${x.brand} ${x.name}` })) },
            { label: "←", items: HERO.diagram.destinations.map((x) => ({ icon: x.icon, t: x.label })) },
          ].map((c, i) => (
            <div key={i} className={`py-7 md:px-6 ${i ? "border-t border-white/[0.12] md:border-l md:border-t-0" : ""} ${i === 1 ? "bg-lv-blue/10" : ""}`}>
              <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${i === 1 ? "text-lv-300" : "text-white/45"}`}>{c.label}</span>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {c.items.map((x) => (
                  <li key={x.t} className="flex items-center gap-2 text-[13px] text-white/80">
                    <x.icon className="h-3.5 w-3.5 text-white/40" />
                    {x.t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= products */}
      <section className="mx-auto max-w-[1320px] px-6 py-24 lg:py-32">
        <SectionHead n="01" kicker={PRODUCTS.kicker} title={PRODUCTS.title} />
        <div className="mt-10 grid gap-px bg-white/[0.12] md:grid-cols-2">
          {PRODUCTS.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <a href={p.href} className="group relative flex h-full min-h-[420px] flex-col overflow-hidden bg-lv-ink p-8">
                {/* cropped numeral */}
                <span aria-hidden className="pointer-events-none absolute -right-6 -top-16 text-[260px] font-extralight leading-none tracking-[-0.06em] text-white/[0.06] transition-colors duration-700 group-hover:text-lv-blue/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center border border-white/20 text-lv-300">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="relative mt-auto">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    {p.brand} / {p.category}
                  </span>
                  <h3 className="mt-2 text-[48px] font-bold leading-none tracking-[-0.04em]">{p.name}</h3>
                  <p className="mt-4 max-w-sm text-[15px] leading-[1.6] text-white/65">{p.desc}</p>
                  <ul className="mt-5 grid gap-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 border-t border-white/10 pt-1.5 text-[13px] text-white/75">
                        <Check className="h-3.5 w-3.5 text-lv-300" />
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================================================== architecture */}
      <section className="mx-auto max-w-[1320px] px-6 pb-24 lg:pb-32">
        <SectionHead n="02" kicker={ARCHITECTURE.kicker} title={ARCHITECTURE.title} />
        <p className="mt-8 max-w-2xl text-[16px] leading-[1.7] text-white/60 lg:ml-[120px]">{ARCHITECTURE.body}</p>
        <div className="mt-10 border-t border-white/25">
          {ARCHITECTURE.bands.map((b) => (
            <Row key={b.label} className={`py-6 ${b.active ? "bg-lv-blue/15" : ""}`}>
              <div className="grid gap-4 lg:grid-cols-[120px_260px_1fr] lg:items-baseline">
                <span className="text-[44px] font-extralight leading-none tracking-[-0.04em] text-white/80">{String(b.items.length).padStart(2, "0")}</span>
                <span className="text-[19px] font-semibold">
                  {b.label}
                  {b.badge && <span className="ml-3 whitespace-nowrap bg-lv-blue px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-[0.12em]">{b.badge}</span>}
                </span>
                <span className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-white/70">
                  {b.items.map((it) => (
                    <span key={it.label} className="flex items-center gap-1.5">
                      <it.icon className="h-3.5 w-3.5 text-lv-300" />
                      {it.label}
                    </span>
                  ))}
                </span>
              </div>
            </Row>
          ))}
        </div>
      </section>

      {/* ============================================================== why */}
      <section className="bg-white py-24 text-lv-ink lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-6 border-b border-lv-ink/30 pb-8 lg:grid-cols-[120px_1fr] lg:items-end">
            <span className="text-[64px] font-extralight leading-none tracking-[-0.04em] text-lv-blue">03</span>
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lv-ink/50">{WHY.kicker}</span>
              <h2 className="mt-3 max-w-3xl text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] lg:text-[44px]">{WHY.title}</h2>
            </div>
          </div>
          <ol>
            {WHY.items.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 50} className="grid gap-4 border-b border-lv-ink/[0.12] py-8 lg:grid-cols-[120px_1fr_1.3fr] lg:items-baseline">
                <span className="text-[56px] font-extralight leading-none tracking-[-0.05em] text-lv-ink/25">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="flex items-center gap-3 text-[22px] font-semibold tracking-[-0.015em]">
                  <r.icon className="h-5 w-5 text-lv-blue" />
                  {r.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-lv-ink/65">{r.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======================================================= industries */}
      <section className="mx-auto max-w-[1320px] px-6 py-24 lg:py-32">
        <SectionHead n="04" kicker={INDUSTRIES.kicker} title={INDUSTRIES.title} />
        <div className="mt-2 hidden grid-cols-[240px_1fr_1fr_1fr] gap-6 border-b border-white/[0.12] py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40 lg:grid">
          <span />
          <span>{INDUSTRIES.labels.challenge}</span>
          <span>{INDUSTRIES.labels.solution}</span>
          <span>{INDUSTRIES.labels.outcome}</span>
        </div>
        {INDUSTRIES.items.map((x) => (
          <Row key={x.name} as="a" href={x.href} className="py-7">
            <div className="grid gap-3 lg:grid-cols-[240px_1fr_1fr_1fr] lg:gap-6">
              <span className="flex items-start gap-3">
                <x.icon className="mt-1 h-5 w-5 text-lv-300" />
                <span>
                  <span className="block text-[22px] font-semibold tracking-[-0.02em]">{x.name}</span>
                  <span className="mt-1 flex items-center gap-1 text-[12px] font-semibold text-lv-300">
                    {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </span>
              </span>
              <span className="text-[14px] leading-[1.6] text-white/65">{x.challenge}</span>
              <span className="text-[14px] font-medium leading-[1.6] text-white">{x.solution}</span>
              <span className="text-[14px] leading-[1.6] text-white/65">{x.outcome}</span>
            </div>
          </Row>
        ))}
      </section>

      {/* =========================================================== proven */}
      <section className="mx-auto max-w-[1320px] px-6 pb-24 lg:pb-32">
        <SectionHead
          n="05"
          kicker={PROVEN.kicker}
          title={PROVEN.title}
          action={
            <a href={PROVEN.link.href} className="inline-flex items-center gap-2 border-b-2 border-lv-blue pb-1 text-[14px] font-semibold">
              {PROVEN.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />
        {PROVEN.testimonials.map((t, i) => (
          <Row key={t.sector} className="py-8">
            <div className="grid gap-4 lg:grid-cols-[120px_1fr_280px] lg:items-baseline">
              <span className="text-[44px] font-extralight leading-none text-white/25">“{i + 1}</span>
              <blockquote className="text-[20px] font-medium leading-[1.45] tracking-[-0.01em]">{t.quote}</blockquote>
              <figcaption className="text-[13px] text-white/50">
                <span className="mb-1 block font-semibold uppercase tracking-[0.14em] text-lv-300">{t.sector}</span>
                {t.role}
              </figcaption>
            </div>
          </Row>
        ))}
        <div className="mt-12 grid gap-6 lg:grid-cols-[120px_1fr]">
          <span />
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">{PROVEN.logosLabel}</span>
            <ul className="mt-5 grid grid-cols-2 border-l border-t border-white/[0.12] sm:grid-cols-4">
              {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                <li key={i} className="flex h-20 items-center justify-center border-b border-r border-white/[0.12] px-3 text-center text-[11px] text-white/35">
                  {PROVEN.logoPlaceholder}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= timeline */}
      <section className="border-y border-white/[0.12] bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHead n="06" kicker={TIMELINE.kicker} title={TIMELINE.title} />
          {TIMELINE.milestones.map((m, i) => (
            <Row key={`${m.year}-${i}`} className="py-5">
              <div className="grid items-baseline gap-3 lg:grid-cols-[260px_300px_1fr]">
                <span className={`text-[72px] font-extralight leading-[0.9] tracking-[-0.05em] ${i === TIMELINE.milestones.length - 1 ? "text-lv-300" : "text-white/85"}`}>{m.year}</span>
                <h3 className="text-[18px] font-semibold">{m.title}</h3>
                <p className="text-[14px] leading-[1.6] text-white/60">{m.body}</p>
              </div>
            </Row>
          ))}
        </div>
      </section>

      {/* ========================================================= insights */}
      <section className="mx-auto max-w-[1320px] px-6 py-24 lg:py-32">
        <SectionHead
          n="07"
          kicker={INSIGHTS.kicker}
          title={INSIGHTS.title}
          action={
            <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 border-b-2 border-lv-blue pb-1 text-[14px] font-semibold">
              {INSIGHTS.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />
        <div className="flex flex-wrap gap-x-6 gap-y-2 py-6 lg:pl-[120px]">
          {INSIGHTS.filters.map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} className={`text-[13px] font-semibold ${filter === f ? "text-white" : "text-white/40 hover:text-white/70"}`}>
              {f}
              {filter === f && <span className="ml-1 text-lv-300">•</span>}
            </button>
          ))}
        </div>
        <div className="border-t border-white/25">
          {INSIGHTS.items.map((r) => (
            <Row key={r.title} as="a" href={INSIGHTS.link.href} className={`py-7 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
              <div className="grid gap-3 lg:grid-cols-[120px_1.2fr_1fr_140px] lg:items-baseline lg:gap-6">
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-300">{r.tag}</span>
                <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em]">{r.title}</h3>
                <p className="text-[14px] leading-[1.6] text-white/55">{r.body}</p>
                <span className="flex items-center justify-between gap-3 text-[12px] text-white/45 lg:flex-col lg:items-end">
                  <span>
                    {r.meta} · {r.read}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-white">
                    {INSIGHTS.readLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </div>
            </Row>
          ))}
        </div>
      </section>

      {/* ============================================ recognition + invest */}
      <section className="mx-auto grid max-w-[1320px] gap-16 px-6 pb-24 lg:grid-cols-2 lg:pb-32">
        <div>
          <div className="border-b border-white/25 pb-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">{RECOGNITION.kicker}</span>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.2] tracking-[-0.02em]">{RECOGNITION.title}</h2>
          </div>
          {RECOGNITION.items.map((a, i) => (
            <Row key={i} className="py-4">
              <div className="flex items-center gap-4">
                <Award className="h-4 w-4 text-lv-300" />
                <span className="flex-1 text-[14px] font-medium">{a.title}</span>
                <span className="text-right text-[12px] text-white/45">{a.body}</span>
              </div>
            </Row>
          ))}
        </div>
        <div>
          <div className="border-b border-white/25 pb-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">{INVESTMENT.kicker}</span>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.2] tracking-[-0.02em]">{INVESTMENT.title}</h2>
          </div>
          {INVESTMENT.items.map((x) => (
            <Row key={x.title} className="py-5">
              <div className="grid grid-cols-[28px_1fr] gap-3">
                <x.icon className="mt-0.5 h-4 w-4 text-lv-300" />
                <div>
                  <h3 className="text-[15px] font-semibold">{x.title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-white/55">{x.body}</p>
                </div>
              </div>
            </Row>
          ))}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 bg-lv-blue px-5 py-3.5 text-[13px] font-semibold">
              {INVESTMENT.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center border border-white/25 px-5 py-3.5 text-[13px] font-semibold">
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== final cta */}
      <section className="relative overflow-hidden border-t border-white/[0.12]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[-6vw] select-none text-center text-[26vw] font-extralight leading-none tracking-[-0.06em] text-white/[0.05]">
          <Count end={STATS.items[2].end} suffix={STATS.items[2].suffix} separator />
        </div>
        <div className="relative mx-auto max-w-[1320px] px-6 py-28 lg:py-40">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lv-300">{FINAL_CTA.kicker}</span>
          <h2 className="mt-6 max-w-4xl text-[48px] font-bold leading-[0.98] tracking-[-0.045em] lg:text-[88px]">
            <SplitWords text={FINAL_CTA.title} />
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-md text-[16px] leading-[1.7] text-white/60">{FINAL_CTA.body}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={FINAL_CTA.primary.href} className="inline-flex items-center justify-center gap-2 bg-lv-blue px-6 py-4 text-[14px] font-semibold">
                {FINAL_CTA.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center border border-white/25 px-6 py-4 text-[14px] font-semibold">
                {FINAL_CTA.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== footer */}
      <footer className="relative border-t border-white/[0.12]">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-8 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-0.02em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-white/55">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="border border-white/25 px-5 py-3 text-[13px] font-semibold">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="bg-white px-5 py-3 text-[13px] font-semibold text-lv-ink">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 border-t border-white/[0.12] py-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="white" height={28} />
              <p className="mt-6 text-[15px] font-semibold">{CHROME.footerBrand.tagline}</p>
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
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">{c.title}</h4>
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
          <div className="flex flex-col justify-between gap-4 border-t border-white/[0.12] py-6 text-[12px] text-white/45 sm:flex-row">
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
