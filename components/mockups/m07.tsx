"use client";

/**
 * 07 — Console.  Source: Moon Travel (framed dark page, monospace system,
 * centred framed hero image with tilted side frames, booking-style input bar,
 * large globe with marker, pill cloud, three cards with one highlighted).
 * Type: Krona One + IBM Plex Mono.
 */
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";
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

const D = "font-m-display";

function H2({ children, className = "" }: { children: string; className?: string }) {
  return (
    <h2 className={`${D} text-[24px] leading-[1.25] tracking-[-0.01em] lg:text-[34px] ${className}`}>
      <SplitWords text={children} stagger={40} />
    </h2>
  );
}

function Small({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] text-white/45">{children}</span>;
}

export default function M07() {
  const [why, setWhy] = useState(3);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root mk-dark bg-[#161514] p-2 font-m-body text-white antialiased sm:p-5">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[20px] border border-white/15 bg-lv-ink">
        <Grain opacity={0.1} />

        {/* ---------------------------------------------------------- nav */}
        <header className="relative z-50 flex items-center gap-8 px-6 py-6 lg:px-10">
          <Lockup tone="white" height={24} priority />
          <NavMenu
            className="mx-auto gap-6"
            theme={{
              trigger: "border-b border-white/20 py-1 text-[12px] text-white/75 hover:border-white hover:text-white",
              triggerOpen: "border-lv-300 text-white",
              panel: "rounded-[10px] border border-white/15 bg-[#262423] p-4",
              heading: "text-[10px] text-white/40",
              link: "py-1 text-[12px] text-white/75 hover:text-white",
              chevron: false,
            }}
          />
          <div className="hidden items-center gap-3 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="text-[12px] text-white/70 hover:text-white">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="rounded-[6px] bg-lv-blue px-4 py-2 text-[12px] font-medium hover:bg-lv-600">
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav tone="dark" className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </header>

        {/* ========================================================== hero */}
        <section className="relative px-6 pb-10 pt-8 lg:px-10">
          <div className="relative mx-auto max-w-[760px]">
            {/* tilted side frames */}
            <div aria-hidden className="absolute -left-48 top-16 hidden h-40 w-40 -rotate-[14deg] overflow-hidden rounded-[10px] border border-white/10 bg-[#2a2826] opacity-70 lg:block">
              <Globe dot="rgba(255,255,255,0.55)" dotSize={0.8} density={2.6} lon={-20} lat={20} speed={3} />
            </div>
            <div aria-hidden className="absolute -right-48 top-6 hidden h-36 w-40 rotate-[12deg] overflow-hidden rounded-[10px] border border-white/10 bg-[#2a2826] opacity-70 lg:block">
              <Globe dot="rgba(255,255,255,0.55)" dotSize={0.8} density={2.6} lon={140} lat={10} speed={3} />
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-[14px] bg-[#2a2826] sm:h-[340px]">
              <Globe dot="rgba(255,255,255,0.42)" dotSize={1} density={1.7} lon={78} lat={18} speed={3} frame={{ cx: 0.5, cy: 0.85, r: 0.5 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-lv-ink/70 via-transparent to-lv-ink/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <span className="text-[12px] text-lv-300">
                  {HERO.kicker}
                  <span className="mk-caret ml-1 inline-block h-3.5 w-2 translate-y-0.5 bg-lv-300" />
                </span>
                <h1 className={`${D} mt-5 text-[30px] leading-[1.15] sm:text-[44px] lg:text-[52px]`}>
                  <SplitWords text={HERO.titleLead} />
                  <br />
                  <SplitWords text={HERO.titleAccent} delay={240} wordClassName="text-lv-300" />
                </h1>
              </div>
            </div>
          </div>

          {/* Booking-style input bar = the platform diagram */}
          <Reveal delay={200} className="mx-auto mt-10 max-w-[1040px]">
            <div className="grid gap-3 rounded-[14px] border border-white/10 bg-[#2a2826] p-4 lg:grid-cols-[1fr_1.4fr_1fr_auto] lg:items-end">
              {[
                { label: "→", items: HERO.diagram.sources.map((s) => s.label) },
                { label: HERO.diagram.platformLabel, items: HERO.diagram.platform.map((p) => `${p.brand} ${p.name}`) },
                { label: "←", items: HERO.diagram.destinations.map((s) => s.label) },
              ].map((f, i) => (
                <div key={i}>
                  <Small>{f.label}</Small>
                  <div className={`mt-1.5 flex flex-wrap gap-1.5 rounded-[8px] border px-2.5 py-2 ${i === 1 ? "border-lv-blue/60 bg-lv-blue/10" : "border-white/15"}`}>
                    {f.items.map((t) => (
                      <span key={t} className="text-[12px] text-white/85">
                        {t}
                        <span className="text-white/25"> ·</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <a href={HERO.primary.href} className="flex items-center justify-center gap-2 rounded-[8px] bg-lv-blue px-5 py-3 text-[12px] font-medium hover:bg-lv-600">
                {HERO.primary.label}
              </a>
            </div>
          </Reveal>

          <div className="mx-auto mt-8 grid max-w-[1040px] gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal delay={300}>
              <p className="text-[13px] leading-[1.75] text-white/70">{HERO.body}</p>
            </Reveal>
            <Reveal delay={350} className="flex flex-col gap-2 lg:items-end">
              <a href={HERO.secondary.href} className="flex items-center gap-2 rounded-[8px] border border-white/20 px-4 py-2.5 text-[12px] hover:border-white/50">
                {HERO.secondary.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Small>
                {HERO.meta[0]} {HERO.meta[1]}
              </Small>
            </Reveal>
          </div>
        </section>

        {/* stats as a readout */}
        <section className="border-y border-white/10 px-6 py-10 lg:px-10">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.items.map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] text-white/45">{s.label}</dt>
                <dd className={`${D} mt-2 text-[28px] lg:text-[34px]`}>
                  <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-[13px] leading-[1.7] text-white/60">{STATS.statement}</p>
        </section>

        {/* =================================================== architecture */}
        <section className="grid items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-10 lg:py-28">
          <div>
            <Small>{ARCHITECTURE.kicker}</Small>
            <H2 className="mt-3">{ARCHITECTURE.title}</H2>
            <Reveal delay={200} className="mt-6 rounded-[12px] border border-white/10 bg-[#2a2826] p-5">
              <p className="text-[12px] leading-[1.8] text-white/75">{ARCHITECTURE.body}</p>
              <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                {ARCHITECTURE.bands.map((b) => (
                  <li key={b.label}>
                    <span className={`text-[12px] ${b.active ? "text-lv-300" : "text-white"}`}>
                      {b.label}
                      {b.badge && <span className="ml-2 rounded-[4px] bg-lv-blue px-1.5 py-0.5 text-[10px] text-white">{b.badge}</span>}
                    </span>
                    <p className="mt-1 text-[11px] leading-[1.7] text-white/50">{b.items.map((it) => it.label).join(" · ")}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal variant="scale" className="relative mx-auto aspect-square w-full max-w-[520px]">
            <Globe dot="rgba(255,255,255,0.75)" dotSize={1.15} density={1.5} ocean="#2a2826" arcs="#8CC3EE" marker="#FFFFFF" lon={78} lat={16} speed={2.5} draggable />
            <span className="pointer-events-none absolute left-[49%] top-[51%] ml-3 rounded-[4px] bg-lv-ink/80 px-2 py-1 text-[11px] text-white">
              {HERO.meta[1]}
            </span>
          </Reveal>
        </section>

        {/* ============================================================ why */}
        <section className="px-6 pb-20 lg:px-10 lg:pb-28">
          <Small>{WHY.kicker}</Small>
          <H2 className="mt-3 max-w-3xl">{WHY.title}</H2>
          <div className="mt-10 flex flex-wrap gap-2">
            {WHY.items.map((r, i) => (
              <button
                key={r.title}
                type="button"
                onClick={() => setWhy(i)}
                onMouseEnter={() => setWhy(i)}
                className={`rounded-[8px] border px-4 py-2.5 text-[12px] transition-colors ${
                  why === i ? "border-lv-blue bg-lv-blue text-white" : "border-white/25 text-white/80 hover:border-white/60"
                }`}
              >
                {r.title}
              </button>
            ))}
          </div>
          <div className="relative mt-6 min-h-[110px] max-w-3xl">
            {WHY.items.map((r, i) => (
              <p
                key={r.title}
                className={`text-[13px] leading-[1.8] text-white/70 transition-opacity duration-500 ${why === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}
              >
                <span className="text-lv-300">&gt; </span>
                {r.body}
              </p>
            ))}
          </div>
        </section>

        {/* ======================================================= products */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <Small>{PRODUCTS.kicker}</Small>
          <H2 className="mt-3 max-w-3xl">{PRODUCTS.title}</H2>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.items.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className={`flex h-full flex-col rounded-[14px] p-5 ${i === 0 ? "bg-lv-blue" : "border border-white/10 bg-[#2a2826]"}`}>
                  <p.icon className="h-6 w-6" />
                  <span className={`mt-10 text-[11px] ${i === 0 ? "text-white/75" : "text-white/45"}`}>
                    {p.brand} / {p.category}
                  </span>
                  <h3 className={`${D} mt-2 text-[20px]`}>{p.name}</h3>
                  <p className={`mt-3 text-[12px] leading-[1.7] ${i === 0 ? "text-white/85" : "text-white/65"}`}>{p.desc}</p>
                  <ul className={`mt-4 space-y-1 text-[11px] ${i === 0 ? "text-white/80" : "text-white/55"}`}>
                    {p.features.map((f) => (
                      <li key={f}>+ {f}</li>
                    ))}
                  </ul>
                  <a
                    href={p.href}
                    className={`mt-auto inline-flex w-fit items-center gap-1.5 rounded-[6px] px-3 py-2 text-[11px] ${
                      i === 0 ? "bg-white text-lv-ink" : "border border-white/25"
                    }`}
                    style={{ marginTop: 24 }}
                  >
                    {p.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================================================== industries */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <Small>{INDUSTRIES.kicker}</Small>
          <H2 className="mt-3 max-w-3xl">{INDUSTRIES.title}</H2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-[12px]">
              <thead>
                <tr className="text-[11px] text-white/45">
                  <th className="border-b border-white/15 py-3 pr-4 font-normal" />
                  <th className="border-b border-white/15 py-3 pr-4 font-normal">{INDUSTRIES.labels.challenge}</th>
                  <th className="border-b border-white/15 py-3 pr-4 font-normal">{INDUSTRIES.labels.solution}</th>
                  <th className="border-b border-white/15 py-3 pr-4 font-normal">{INDUSTRIES.labels.outcome}</th>
                  <th className="border-b border-white/15 py-3 font-normal" />
                </tr>
              </thead>
              <tbody>
                {INDUSTRIES.items.map((ind) => (
                  <tr key={ind.name} className="group align-top transition-colors hover:bg-white/[0.03]">
                    <td className="border-b border-white/10 py-5 pr-4">
                      <span className="flex items-center gap-2 text-[13px]">
                        <ind.icon className="h-4 w-4 text-lv-300" />
                        {ind.name}
                      </span>
                    </td>
                    <td className="border-b border-white/10 py-5 pr-4 leading-[1.7] text-white/65">{ind.challenge}</td>
                    <td className="border-b border-white/10 py-5 pr-4 leading-[1.7] text-white/85">{ind.solution}</td>
                    <td className="border-b border-white/10 py-5 pr-4 leading-[1.7] text-white/65">{ind.outcome}</td>
                    <td className="border-b border-white/10 py-5 text-right">
                      <a href={ind.href} className="inline-flex items-center gap-1 whitespace-nowrap text-[11px] text-lv-300 hover:text-white">
                        {INDUSTRIES.linkPrefix} {ind.name} {INDUSTRIES.linkSuffix}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= proven */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Small>{PROVEN.kicker}</Small>
              <H2 className="mt-3">{PROVEN.title}</H2>
            </div>
            <a href={PROVEN.link.href} className="flex items-center gap-2 rounded-[8px] border border-white/25 px-4 py-2.5 text-[12px]">
              {PROVEN.link.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-12 grid gap-3 lg:grid-cols-3">
            {PROVEN.testimonials.map((t, i) => (
              <Reveal key={t.sector} delay={i * 80} className="flex flex-col rounded-[14px] border border-white/10 bg-[#2a2826] p-5">
                <span className="text-[11px] text-lv-300">[{t.sector}]</span>
                <blockquote className="mt-5 flex-1 text-[13px] leading-[1.75] text-white/85">{t.quote}</blockquote>
                <figcaption className="mt-6 text-[11px] text-white/45">— {t.role}</figcaption>
              </Reveal>
            ))}
          </div>
          <p className="mt-14 text-[11px] text-white/45">{PROVEN.logosLabel}</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
              <li key={i} className="flex h-14 items-center justify-center rounded-[8px] border border-dashed border-white/15 px-3 text-center text-[10px] text-white/40">
                {PROVEN.logoPlaceholder}
              </li>
            ))}
          </ul>
        </section>

        {/* ======================================================= timeline */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <Small>{TIMELINE.kicker}</Small>
          <H2 className="mt-3 max-w-3xl">{TIMELINE.title}</H2>
          <ol className="mt-12 rounded-[14px] border border-white/10 bg-[#161514] p-5 text-[12px] lg:p-7">
            {TIMELINE.milestones.map((m, i) => (
              <Reveal as="li" key={`${m.year}-${i}`} delay={i * 90} variant="fade" className="grid gap-1 border-b border-white/[0.06] py-3 last:border-0 sm:grid-cols-[90px_260px_1fr]">
                <span className="text-lv-300">{m.year}</span>
                <span className="text-white">{m.title}</span>
                <span className="text-white/55">{m.body}</span>
              </Reveal>
            ))}
            <li className="pt-3 text-white/40">
              &gt;<span className="mk-caret ml-1 inline-block h-3 w-2 translate-y-0.5 bg-white/60" />
            </li>
          </ol>
        </section>

        {/* ======================================================= insights */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Small>{INSIGHTS.kicker}</Small>
              <H2 className="mt-3">{INSIGHTS.title}</H2>
            </div>
            <a href={INSIGHTS.link.href} className="flex items-center gap-2 rounded-[8px] border border-white/25 px-4 py-2.5 text-[12px]">
              {INSIGHTS.link.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {INSIGHTS.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-[8px] border px-3 py-1.5 text-[11px] ${filter === f ? "border-lv-blue bg-lv-blue" : "border-white/20 text-white/70"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {INSIGHTS.items.map((r) => (
              <a
                key={r.title}
                href={INSIGHTS.link.href}
                className={`group flex flex-col rounded-[14px] border border-white/10 bg-[#2a2826] p-5 transition-colors hover:border-white/30 ${
                  filter === "All" || filter === r.tag ? "" : "hidden"
                }`}
              >
                <div className="flex justify-between text-[11px] text-white/45">
                  <span className="text-lv-300">{r.tag}</span>
                  <span>
                    {r.meta} · {r.read}
                  </span>
                </div>
                <h3 className="mt-4 text-[14px] leading-[1.5]">{r.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.7] text-white/55">{r.body}</p>
                <span className="mt-5 flex items-center gap-1.5 text-[11px] text-white/80">
                  {INSIGHTS.readLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ============================================ recognition + invest */}
        <section className="grid gap-10 border-t border-white/10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <Small>{RECOGNITION.kicker}</Small>
            <h2 className={`${D} mt-3 text-[20px] leading-[1.3] lg:text-[24px]`}>{RECOGNITION.title}</h2>
            <ul className="mt-8 space-y-2">
              {RECOGNITION.items.map((a, i) => (
                <li key={i} className="flex items-center gap-3 rounded-[8px] border border-white/10 px-4 py-3 text-[12px]">
                  <Award className="h-4 w-4 shrink-0 text-lv-300" />
                  <span className="flex-1">{a.title}</span>
                  <span className="text-right text-[11px] text-white/45">{a.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Small>{INVESTMENT.kicker}</Small>
            <h2 className={`${D} mt-3 text-[20px] leading-[1.3] lg:text-[24px]`}>{INVESTMENT.title}</h2>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {INVESTMENT.items.map((p) => (
                <div key={p.title} className="rounded-[10px] border border-white/10 bg-[#2a2826] p-4">
                  <p.icon className="h-4 w-4 text-lv-300" />
                  <h3 className="mt-4 text-[13px]">{p.title}</h3>
                  <p className="mt-2 text-[11px] leading-[1.7] text-white/55">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <a href={INVESTMENT.primary.href} className="flex items-center justify-center gap-2 rounded-[8px] bg-lv-blue px-4 py-2.5 text-[12px]">
                {INVESTMENT.primary.label}
              </a>
              <a href={INVESTMENT.secondary.href} className="flex items-center justify-center rounded-[8px] border border-white/25 px-4 py-2.5 text-[12px]">
                {INVESTMENT.secondary.label}
              </a>
            </div>
          </div>
        </section>

        {/* ====================================================== final cta */}
        <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 text-center lg:px-10 lg:py-32">
          <div className="absolute inset-0 opacity-30">
            <Globe dot="rgba(255,255,255,0.7)" dotSize={1} density={2} lon={78} lat={18} speed={2} frame={{ cx: 0.5, cy: 0.5, r: 0.32 }} />
          </div>
          <div className="relative">
            <span className="text-[12px] text-lv-300">{FINAL_CTA.kicker}</span>
            <h2 className={`${D} mx-auto mt-5 max-w-3xl text-[30px] leading-[1.15] lg:text-[48px]`}>
              <SplitWords text={FINAL_CTA.title} />
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[13px] leading-[1.75] text-white/65">{FINAL_CTA.body}</p>
            <div className="mt-8 flex flex-col justify-center gap-2 sm:flex-row">
              <a href={FINAL_CTA.primary.href} className="flex items-center justify-center gap-2 rounded-[8px] bg-lv-blue px-5 py-3 text-[12px]">
                {FINAL_CTA.primary.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href={FINAL_CTA.secondary.href} className="flex items-center justify-center rounded-[8px] border border-white/25 px-5 py-3 text-[12px]">
                {FINAL_CTA.secondary.label}
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================= footer */}
        <footer className="relative border-t border-white/10 px-6 py-12 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className={`${D} text-[18px]`}>{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[12px] text-white/55">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-2">
              <a href={CHROME.footerBand.expert.href} className="rounded-[8px] border border-white/25 px-4 py-2.5 text-[12px]">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-[8px] bg-lv-blue px-4 py-2.5 text-[12px]">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="white" height={26} />
              <p className="mt-5 text-[12px]">{CHROME.footerBrand.tagline}</p>
              <p className="mt-2 max-w-xs text-[11px] leading-[1.7] text-white/50">{CHROME.footerBrand.blurb}</p>
              <ul className="mt-5 space-y-1 text-[11px] text-white/60">
                <li>{CHROME.footerBrand.location}</li>
                <li>
                  <a href={`mailto:${CHROME.footerBrand.email}`}>{CHROME.footerBrand.email}</a>
                </li>
                <li>
                  <a href={CHROME.footerBrand.phoneHref}>{CHROME.footerBrand.phone}</a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {FOOTER_COLUMNS.map((c) => (
                <div key={c.title}>
                  <h4 className="text-[11px] text-white/40">{c.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-[11px] text-white/70 hover:text-white">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-[10px] text-white/40 sm:flex-row">
            <span>
              {CHROME.copyright} {CHROME.builtIn}
            </span>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
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
    </div>
  );
}
