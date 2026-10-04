"use client";

/**
 * 18 — Paper.  Sources: the soft centred landing pages (centred two-tone
 * headlines, quiet paper grounds, small pill labels, generous air).
 * Structure: everything sits on grain paper; the four products are a folio of
 * sheets that stack as you scroll; sections are sheets laid on the desk.
 * Type: Albert Sans.
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

function TwoTone({ text, lead }: { text: string; lead: number }) {
  const w = text.split(" ");
  return (
    <>
      {w.slice(0, lead).join(" ")} <span className="text-lv-ink/35">{w.slice(lead).join(" ")}</span>
    </>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-lv-ink/70 shadow-[0_1px_0_rgba(32,30,29,0.06)]">{children}</span>;
}

function Center({ kicker, title, lead }: { kicker: string; title: string; lead: number }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <Pill>{kicker}</Pill>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[52px]">
          <TwoTone text={title} lead={lead} />
        </h2>
      </Reveal>
    </div>
  );
}

/** A sheet of paper on the desk. */
function Sheet({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-[#FBFAF9] shadow-[0_1px_0_rgba(32,30,29,0.05),0_30px_60px_-40px_rgba(32,30,29,0.35)] ${className}`}>
      <div aria-hidden className="mk-paper-grain pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function M18() {
  const [why, setWhy] = useState(0);
  const [filter, setFilter] = useState("All");

  return (
    <div className="mk-root relative bg-lv-paper font-m-body text-lv-ink antialiased">
      <div aria-hidden className="mk-paper-grain pointer-events-none absolute inset-0 opacity-50" />

      {/* --------------------------------------------------------------- nav */}
      <header className="relative z-50">
        <div className="mx-auto flex h-24 max-w-[1240px] items-center gap-8 px-6">
          <Lockup tone="ink" height={28} priority />
          <NavMenu
            className="mx-auto gap-1 rounded-full bg-white/70 p-1 backdrop-blur"
            theme={{
              trigger: "rounded-full px-4 py-2 text-[14px] text-lv-ink/70 hover:text-lv-ink",
              triggerOpen: "bg-white text-lv-ink shadow-sm",
              panel: "rounded-[22px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(32,30,29,0.3)]",
              heading: "text-[11px] font-semibold text-lv-ink/40",
              link: "py-1.5 text-[14px] text-lv-ink/75 hover:text-lv-ink",
              chevron: false,
            }}
          />
          <div className="hidden items-center gap-2 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="rounded-full px-4 py-2.5 text-[14px] text-lv-ink/70">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="rounded-full bg-lv-ink px-5 py-2.5 text-[14px] font-medium text-white">
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      {/* ============================================================== hero */}
      <section className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-10 text-center lg:pt-16">
        <Reveal variant="scale">
          <Mark tone="square" size={44} className="mx-auto" />
        </Reveal>
        <Reveal delay={100} className="mt-8">
          <Pill>{HERO.kicker}</Pill>
        </Reveal>
        <h1 className="mx-auto mt-7 max-w-4xl text-[54px] font-semibold leading-[1] tracking-[-0.05em] sm:text-[78px] lg:text-[104px]">
          <SplitWords text={HERO.titleLead} />{" "}
          <SplitWords text={HERO.titleAccent} delay={260} wordClassName="text-lv-blue" />
        </h1>
        <Reveal delay={350}>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.65] text-lv-ink/60">{HERO.body}</p>
        </Reveal>
        <Reveal delay={450} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={HERO.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-blue px-7 py-4 text-[15px] font-medium text-white">
            {HERO.primary.label}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href={HERO.secondary.href} className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[15px] font-medium">
            {HERO.secondary.label}
          </a>
        </Reveal>
        <Reveal delay={550}>
          <p className="mt-8 text-[13px] text-lv-ink/50">
            {HERO.meta[0]} · {HERO.meta[1]}
          </p>
        </Reveal>

        {/* sheet with globe + diagram */}
        <Reveal delay={300} variant="up" className="mt-16">
          <Sheet className="mx-auto max-w-[1080px] text-left">
            <div className="grid items-center lg:grid-cols-[1fr_1.1fr]">
              <div className="relative aspect-square">
                <Globe dot="#005493" dotSize={1.2} density={1.5} arcs="#0078D4" marker="#0078D4" lon={78} lat={18} speed={3.5} frame={{ cx: 0.5, cy: 0.5, r: 0.4 }} />
              </div>
              <div className="border-t border-lv-ink/10 p-8 lg:border-l lg:border-t-0 lg:p-12">
                <span className="text-[13px] font-medium text-lv-blue">{HERO.diagram.platformLabel}</span>
                <ul className="mt-6 space-y-4">
                  {HERO.diagram.platform.map((p) => (
                    <li key={p.name} className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lv-100 text-lv-blue">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[12px] text-lv-ink/50">{p.brand}</span>
                        <span className="text-[18px] font-semibold">{p.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-lv-ink/10 pt-6 text-[13px] text-lv-ink/65">
                  <p>
                    <span className="block text-[11px] text-lv-ink/40">→</span>
                    {HERO.diagram.sources.map((s) => s.label).join(", ")}
                  </p>
                  <p>
                    <span className="block text-[11px] text-lv-ink/40">←</span>
                    {HERO.diagram.destinations.map((s) => s.label).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </Sheet>
        </Reveal>
      </section>

      {/* ============================================================ stats */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.025em] lg:text-[38px]">
            <TwoTone text={STATS.statement} lead={6} />
          </p>
        </Reveal>
        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <Sheet className="p-6 text-center">
                <dd className="text-[40px] font-semibold leading-none tracking-[-0.04em]">
                  <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                </dd>
                <dt className="mt-3 text-[13px] text-lv-ink/55">{s.label}</dt>
              </Sheet>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ============================================ products: the folio */}
      <section className="relative mx-auto max-w-[1240px] px-6 pb-16">
        <Center kicker={PRODUCTS.kicker} title={PRODUCTS.title} lead={3} />
        <div className="mt-16">
          {PRODUCTS.items.map((p, i) => (
            <div key={p.name} className="sticky mb-6" style={{ top: 32 + i * 18 }}>
              <Sheet className="min-h-[440px]" >
                <div className="grid min-h-[440px] lg:grid-cols-[1.1fr_1fr]">
                  <div className="flex flex-col p-8 lg:p-12">
                    <div className="flex items-center justify-between">
                      <Pill>{p.category}</Pill>
                      <span className="text-[13px] text-lv-ink/40">
                        {String(i + 1).padStart(2, "0")} / {String(PRODUCTS.items.length).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="mt-auto pt-10 text-[14px] font-medium text-lv-blue">{p.brand}</span>
                    <h3 className="text-[52px] font-semibold leading-none tracking-[-0.045em] lg:text-[64px]">{p.name}</h3>
                    <p className="mt-5 max-w-md text-[16px] leading-[1.6] text-lv-ink/65">{p.desc}</p>
                    <a href={p.href} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[14px] font-medium text-white">
                      {p.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex flex-col justify-end gap-3 border-t border-lv-ink/10 p-8 lg:border-l lg:border-t-0 lg:p-12">
                    <p.icon className="mb-auto h-14 w-14 text-lv-blue" strokeWidth={1.2} />
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 rounded-[16px] bg-white px-4 py-3.5 text-[15px] shadow-[0_1px_0_rgba(32,30,29,0.06)]">
                        <Check className="h-4 w-4 text-lv-blue" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </Sheet>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================== architecture */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24">
        <Center kicker={ARCHITECTURE.kicker} title={ARCHITECTURE.title} lead={3} />
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[16px] leading-[1.65] text-lv-ink/60">{ARCHITECTURE.body}</p>
        </Reveal>
        <div className="mx-auto mt-14 max-w-4xl space-y-3">
          {ARCHITECTURE.bands.map((b, i) => (
            <Reveal key={b.label} delay={i * 80}>
              <Sheet className={b.active ? "ring-2 ring-lv-blue" : ""}>
                <div className="grid gap-4 p-6 sm:grid-cols-[200px_1fr] sm:items-center">
                  <div>
                    <h3 className="text-[17px] font-semibold">{b.label}</h3>
                    {b.badge && <span className="mt-1 inline-block text-[12px] font-medium text-lv-blue">{b.badge}</span>}
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {b.items.map((it) => (
                      <li key={it.label} className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] ${b.active ? "bg-lv-blue text-white" : "bg-white text-lv-ink/75"}`}>
                        <it.icon className="h-3.5 w-3.5" />
                        {it.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </Sheet>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================== why */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24">
        <Center kicker={WHY.kicker} title={WHY.title} lead={5} />
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2">
            {WHY.items.map((r, i) => (
              <button
                key={r.title}
                type="button"
                onClick={() => setWhy(i)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${why === i ? "bg-lv-ink text-white" : "bg-white text-lv-ink/65 hover:text-lv-ink"}`}
              >
                {r.title}
              </button>
            ))}
          </div>
          <div className="relative mt-8">
            {WHY.items.map((r, i) => (
              <div key={r.title} className={`transition-all duration-500 ${why === i ? "relative translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"}`}>
                <Sheet className="p-10 text-center lg:p-14">
                  <r.icon className="mx-auto h-10 w-10 text-lv-blue" strokeWidth={1.4} />
                  <h3 className="mt-6 text-[30px] font-semibold tracking-[-0.03em]">{r.title}</h3>
                  <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.7] text-lv-ink/65">{r.body}</p>
                </Sheet>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= industries */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24">
        <Center kicker={INDUSTRIES.kicker} title={INDUSTRIES.title} lead={2} />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.items.map((x, i) => (
            <Reveal key={x.name} delay={(i % 3) * 80}>
              <a href={x.href} className="group block h-full">
                <Sheet className="h-full p-7 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-0.6deg]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{x.name}</h3>
                    <x.icon className="h-6 w-6 text-lv-blue" />
                  </div>
                  <dl className="mt-6 space-y-4">
                    {(["challenge", "solution", "outcome"] as const).map((k) => (
                      <div key={k}>
                        <dt className="text-[12px] font-semibold text-lv-ink/40">{INDUSTRIES.labels[k]}</dt>
                        <dd className="mt-1 text-[14px] leading-[1.6] text-lv-ink/75">{x[k]}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-lv-blue">
                    {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Sheet>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================== proven */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24">
        <Center kicker={PROVEN.kicker} title={PROVEN.title} lead={3} />
        <div className="mt-8 text-center">
          <a href={PROVEN.link.href} className="inline-flex items-center gap-2 text-[14px] font-medium text-lv-blue">
            {PROVEN.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {PROVEN.testimonials.map((t, i) => (
            <Reveal key={t.sector} delay={i * 80}>
              <Sheet className="flex h-full flex-col p-8" >
                <Quote className="h-6 w-6 text-lv-blue" />
                <blockquote className="mt-6 text-[17px] leading-[1.6]">{t.quote}</blockquote>
                <figcaption className="mt-6 text-[13px] text-lv-ink/55">
                  {t.role}
                  <span className="mt-2 block font-semibold text-lv-ink">{t.sector}</span>
                </figcaption>
              </Sheet>
            </Reveal>
          ))}
        </div>
        <p className="mt-14 text-center text-[13px] text-lv-ink/50">{PROVEN.logosLabel}</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
            <li key={i} className="flex h-14 items-center justify-center rounded-full bg-white px-3 text-center text-[11px] text-lv-ink/45">
              {PROVEN.logoPlaceholder}
            </li>
          ))}
        </ul>
      </section>

      {/* ========================================================= timeline */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24">
        <Center kicker={TIMELINE.kicker} title={TIMELINE.title} lead={2} />
        <ol className="relative mx-auto mt-14 max-w-3xl">
          <span aria-hidden className="absolute bottom-4 left-[88px] top-4 w-px bg-lv-ink/15" />
          {TIMELINE.milestones.map((m, i) => (
            <Reveal as="li" key={`${m.year}-${i}`} className="relative grid grid-cols-[88px_1fr] gap-8 py-5">
              <span className="pt-0.5 text-right text-[15px] font-semibold text-lv-blue">{m.year}</span>
              <span aria-hidden className="absolute left-[84px] top-[26px] h-2 w-2 rounded-full bg-lv-blue ring-4 ring-lv-paper" />
              <div>
                <h3 className="text-[17px] font-semibold">{m.title}</h3>
                <p className="mt-1 text-[14px] leading-[1.6] text-lv-ink/60">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ========================================================= insights */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24">
        <Center kicker={INSIGHTS.kicker} title={INSIGHTS.title} lead={2} />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {INSIGHTS.filters.map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-[13px] font-medium ${filter === f ? "bg-lv-ink text-white" : "bg-white text-lv-ink/65"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.items.map((r, i) => (
            <a key={r.title} href={INSIGHTS.link.href} className={`group block ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
              <Sheet className="flex h-full flex-col p-3">
                <GrainField tone={(["sky", "paper", "blue", "sky"] as const)[i]} grain={0.3} className="h-36 rounded-[20px]">
                  <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium">{r.tag}</span>
                </GrainField>
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-[12px] text-lv-ink/50">
                    {r.meta} · {r.read}
                  </span>
                  <h3 className="mt-2 text-[16px] font-semibold leading-[1.35]">{r.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-lv-ink/60">{r.body}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-[13px] font-medium text-lv-blue">
                    {INSIGHTS.readLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Sheet>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium">
            {INSIGHTS.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* =========================================== recognition + investment */}
      <section className="relative mx-auto grid max-w-[1240px] gap-4 px-6 py-24 lg:grid-cols-2">
        <Sheet className="p-8 lg:p-10">
          <Pill>{RECOGNITION.kicker}</Pill>
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
        </Sheet>
        <Sheet className="p-8 lg:p-10">
          <Pill>{INVESTMENT.kicker}</Pill>
          <h2 className="mt-5 text-[26px] font-semibold leading-[1.2] tracking-[-0.025em]">{INVESTMENT.title}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {INVESTMENT.items.map((x) => (
              <div key={x.title}>
                <x.icon className="h-5 w-5 text-lv-blue" />
                <h3 className="mt-3 text-[15px] font-semibold">{x.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-lv-ink/60">{x.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={INVESTMENT.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[14px] font-medium text-white">
              {INVESTMENT.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[14px] font-medium">
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </Sheet>
      </section>

      {/* ======================================================== final cta */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-24 text-center">
        <Pill>{FINAL_CTA.kicker}</Pill>
        <h2 className="mx-auto mt-7 max-w-4xl text-[46px] font-semibold leading-[1] tracking-[-0.05em] lg:text-[88px]">
          <TwoTone text={FINAL_CTA.title} lead={3} />
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.65] text-lv-ink/60">{FINAL_CTA.body}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={FINAL_CTA.primary.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-lv-blue px-7 py-4 text-[15px] font-medium text-white">
            {FINAL_CTA.primary.label}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href={FINAL_CTA.secondary.href} className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[15px] font-medium">
            {FINAL_CTA.secondary.label}
          </a>
        </div>
      </section>

      {/* ============================================================ footer */}
      <footer className="relative mx-auto max-w-[1240px] px-6 pb-10">
        <Sheet className="p-8 lg:p-12">
          <div className="grid gap-8 border-b border-lv-ink/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-0.025em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-lv-ink/60">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="rounded-full bg-white px-5 py-3 text-[14px] font-medium">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-full bg-lv-ink px-5 py-3 text-[14px] font-medium text-white">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 py-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="ink" height={28} />
              <p className="mt-6 text-[15px] font-semibold">{CHROME.footerBrand.tagline}</p>
              <p className="mt-3 max-w-xs text-[13px] leading-[1.65] text-lv-ink/55">{CHROME.footerBrand.blurb}</p>
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
        </Sheet>
      </footer>
    </div>
  );
}
