"use client";

/**
 * 04 — Summit.  Sources: Trekcave (heavy wide headline, blob-cut image with a
 * dotted route, card carousel) and the flight-booking concept (numbered
 * stepper, raised centre card, oversized uppercase statement).
 * Type: Syne + Manrope.
 */
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Award, Check, Quote } from "lucide-react";
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
import { Reveal, SplitWords, Count, DrawPath } from "./kit/Motion";
import { Lockup, Mark, NavMenu, MobileNav, GrainField, Sparkle } from "./kit/Brand";

const D = "font-m-display";

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-700">{children}</span>;
}

function ArrowBtn({ dir, onClick, filled = false }: { dir: "l" | "r"; onClick: () => void; filled?: boolean }) {
  const Icon = dir === "l" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      aria-label={dir === "l" ? "Previous" : "Next"}
      onClick={onClick}
      className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
        filled ? "bg-lv-ink text-white hover:bg-lv-blue" : "bg-lv-paper text-lv-ink hover:bg-lv-200"
      }`}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

export default function M04() {
  const [industry, setIndustry] = useState(0);
  const [filter, setFilter] = useState("All");
  const track = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * 420, behavior: "smooth" });

  return (
    <div className="mk-root bg-white font-m-body text-lv-ink antialiased">
      {/* ------------------------------------------------------------ nav */}
      <header className="border-b border-lv-ink/[0.07]">
        <div className="mx-auto flex h-[84px] max-w-[1280px] items-center gap-10 px-6">
          <Lockup tone="ink" height={30} priority />
          <NavMenu
            className="mx-auto gap-8"
            theme={{
              trigger: "py-2 text-[14px] font-semibold text-lv-ink/80 hover:text-lv-ink",
              triggerOpen: "text-lv-blue",
              panel: "rounded-[24px] bg-white p-5 shadow-[0_30px_70px_-30px_rgba(32,30,29,0.35)] ring-1 ring-lv-ink/5",
              heading: "text-[11px] font-bold uppercase tracking-[0.1em] text-lv-blue",
              link: "rounded-lg px-1 py-1.5 text-[14px] font-medium text-lv-ink/75 hover:text-lv-ink",
            }}
          />
          <div className="hidden items-center gap-3 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className="text-[14px] font-semibold text-lv-ink/75 hover:text-lv-ink">
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className="rounded-full bg-lv-blue px-6 py-3 text-[14px] font-semibold text-white hover:bg-lv-600">
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </div>
      </header>

      {/* =============================================================== hero */}
      <section className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-12 lg:pt-20">
        <Sparkle className="mk-float absolute left-[46%] top-16 hidden text-lv-ink lg:block" size={16} />
        <Sparkle className="mk-float-b absolute bottom-24 left-[30%] hidden text-lv-ink lg:block" size={34} />
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative z-10 flex gap-6">
            {/* stepper */}
            <ol aria-hidden className="mt-4 hidden flex-col items-center sm:flex">
              {HERO.words.map((w, i) => (
                <li key={w} className="flex flex-col items-center">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full border text-[12px] font-bold ${i === 0 ? "border-lv-ink bg-lv-ink text-white" : "border-lv-ink/20 text-lv-ink/50"}`}>
                    {i + 1}
                  </span>
                  {i < 2 && <span className="h-16 w-px bg-lv-ink/15 lg:h-[68px]" />}
                </li>
              ))}
            </ol>
            <div>
              <Reveal>
                <Kicker>{HERO.kicker}</Kicker>
              </Reveal>
              <h1 className={`${D} mt-5 text-[52px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-[76px] lg:text-[88px]`}>
                <SplitWords text={HERO.titleLead} />{" "}
                <SplitWords text={HERO.titleAccent} delay={220} wordClassName="text-lv-blue" />
              </h1>
              <Reveal delay={300}>
                <p className="mt-7 max-w-md text-[17px] leading-[1.6] text-lv-ink/70">{HERO.body}</p>
              </Reveal>
              <Reveal delay={400} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={HERO.primary.href}
                  className="group inline-flex items-center justify-between gap-5 rounded-full bg-lv-blue py-2 pl-7 pr-2 text-[15px] font-semibold text-white"
                >
                  {HERO.primary.label}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lv-blue transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
                <a href={HERO.secondary.href} className="text-[15px] font-semibold underline decoration-lv-ink/20 underline-offset-[6px] hover:decoration-lv-blue">
                  {HERO.secondary.label}
                </a>
              </Reveal>
            </div>
          </div>

          {/* Blob-cut visual: grain sky, a live route, notched corners */}
          <Reveal variant="scale" className="relative">
            <div className="relative aspect-[1.05] overflow-hidden rounded-[44px]">
              <GrainField tone="blue" grain={0.3} className="absolute inset-0">
                <div className="absolute inset-0 opacity-70">
                  <Globe dot="rgba(255,255,255,0.75)" dotSize={1.1} density={1.6} lon={80} lat={20} sway={20} frame={{ cx: 0.55, cy: 0.62, r: 0.5 }} />
                </div>
                <svg aria-hidden viewBox="0 0 400 380" className="absolute inset-0 h-full w-full">
                  <path
                    d="M60 340 C 110 300, 120 250, 170 240 S 230 170, 230 130 S 300 80, 330 60"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="2 7"
                    strokeLinecap="round"
                    className="mk-flow"
                  />
                  {[
                    [60, 340],
                    [170, 240],
                    [230, 130],
                    [330, 60],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="7" fill="white" />
                      <circle cx={x} cy={y} r="3" fill="#0078D4" />
                    </g>
                  ))}
                </svg>
              </GrainField>
              {/* Concave notches, cut with the page ground */}
              <span aria-hidden className="absolute left-0 top-0 h-[96px] w-[96px] rounded-br-[40px] bg-white" />
              <span aria-hidden className="absolute bottom-0 right-0 h-[118px] w-[230px] rounded-tl-[40px] bg-white" />
            </div>
            {/* chip in the top-right */}
            <div className="mk-float absolute right-6 top-[16%] flex items-center gap-3 rounded-full bg-white/90 py-2 pl-2 pr-5 backdrop-blur">
              <Mark tone="square" size={32} />
              <span className="text-[13px] font-semibold leading-tight">{HERO.diagram.platformLabel}</span>
            </div>
            {/* notch content, bottom-right */}
            <div className="absolute bottom-0 right-0 flex h-[118px] w-[230px] flex-col items-end justify-end pb-1 text-right">
              <span className="flex -space-x-2">
                {HERO.diagram.platform.map((p) => (
                  <span key={p.name} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-lv-ink text-white">
                    <p.icon className="h-4 w-4" />
                  </span>
                ))}
              </span>
              <span className="mt-2 text-[12px] font-semibold leading-tight text-lv-ink/70">{HERO.meta[1]}</span>
            </div>
            <span className="absolute left-0 top-0 flex h-[96px] w-[96px] items-center justify-center">
              <Sparkle className="text-lv-blue" size={28} />
            </span>
          </Reveal>
        </div>
      </section>

      {/* Platform carousel strip — the hero diagram */}
      <section className="bg-lv-paper py-10">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <p className="shrink-0 text-[13px] font-medium text-lv-ink/60 lg:w-44">{HERO.meta[0]}</p>
            <ul className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {HERO.diagram.platform.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 80} className="flex items-center gap-4 rounded-[20px] bg-white p-3 shadow-[0_12px_30px_-20px_rgba(32,30,29,0.3)]">
                  <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.3} className="flex h-16 w-20 shrink-0 items-center justify-center rounded-[14px] text-white">
                    <p.icon className="relative h-6 w-6" />
                  </GrainField>
                  <div>
                    <div className={`${D} text-[18px] font-bold leading-tight`}>{p.name}</div>
                    <div className="text-[13px] text-lv-ink/55">{p.brand}</div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-col gap-3 text-[13px] lg:ml-48 lg:flex-row lg:items-center">
            <span className="flex flex-wrap gap-x-4 gap-y-1 text-lv-ink/65">
              {HERO.diagram.sources.map((s) => (
                <span key={s.label} className="flex items-center gap-1.5">
                  <s.icon className="h-3.5 w-3.5 text-lv-blue" />
                  {s.label}
                </span>
              ))}
            </span>
            <span className="hidden h-px flex-1 border-t-2 border-dotted border-lv-blue/40 lg:block" />
            <span className={`${D} font-bold text-lv-blue`}>{HERO.diagram.platformLabel}</span>
            <span className="hidden h-px flex-1 border-t-2 border-dotted border-lv-blue/40 lg:block" />
            <span className="flex flex-wrap gap-x-4 gap-y-1 text-lv-ink/65">
              {HERO.diagram.destinations.map((s) => (
                <span key={s.label} className="flex items-center gap-1.5">
                  <s.icon className="h-3.5 w-3.5 text-lv-blue" />
                  {s.label}
                </span>
              ))}
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================== stats */}
      <section className="mx-auto max-w-[1280px] px-6 py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className={`${D} text-[28px] font-bold leading-[1.2] tracking-[-0.02em] lg:text-[38px]`}>{STATS.statement}</h2>
        </Reveal>
        <div className="mt-16 grid items-end gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.items.map((s, i) => {
            const raised = i === 2;
            return (
              <Reveal key={s.label} delay={i * 90}>
                {raised ? (
                  <GrainField tone="blue" grain={0.28} className="flex min-h-[300px] flex-col justify-between rounded-[28px] p-8 text-white">
                    <Sparkle className="relative text-white" size={22} />
                    <div className="relative">
                      <div className={`${D} text-[34px] font-bold leading-none tracking-[-0.03em] xl:text-[40px]`}>
                        <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                      </div>
                      <div className="mt-3 text-[15px] font-semibold text-white/80">{s.label}</div>
                    </div>
                  </GrainField>
                ) : (
                  <div className="flex min-h-[220px] flex-col justify-between rounded-[28px] bg-lv-paper p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[13px] font-bold">{i + 1}</span>
                    <div>
                      <div className={`${D} text-[34px] font-bold leading-none tracking-[-0.03em] xl:text-[40px]`}>
                        <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                      </div>
                      <div className="mt-3 text-[15px] font-semibold text-lv-ink/60">{s.label}</div>
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* =========================================================== products */}
      <section className="bg-lv-paper py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <Kicker>{PRODUCTS.kicker}</Kicker>
              </Reveal>
              <h2 className={`${D} mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] lg:text-[46px]`}>
                <SplitWords text={PRODUCTS.title} stagger={35} />
              </h2>
            </div>
            <div className="flex gap-3">
              <ArrowBtn dir="l" onClick={() => scroll(-1)} />
              <ArrowBtn dir="r" filled onClick={() => scroll(1)} />
            </div>
          </div>
        </div>
        <div ref={track} className="mk-noscroll mt-14 overflow-x-auto scroll-smooth">
          <div className="mx-auto flex w-max snap-x gap-5 px-6 xl:px-[max(24px,calc((100vw-1280px)/2+24px))]">
            {PRODUCTS.items.map((p, i) => (
              <a key={p.name} href={p.href} className="group flex w-[340px] shrink-0 snap-start flex-col rounded-[30px] bg-white p-3 sm:w-[400px]">
                <GrainField tone={(["blue", "deep", "sky", "dusk"] as const)[i]} grain={0.3} className="relative h-[220px] rounded-[24px]">
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-lv-ink">{p.category}</span>
                  <p.icon className={`absolute bottom-5 left-5 h-10 w-10 ${i === 2 ? "text-lv-700" : "text-white"}`} />
                </GrainField>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[13px] font-semibold text-lv-700">{p.brand}</span>
                  <h3 className={`${D} mt-1 text-[30px] font-extrabold tracking-[-0.03em]`}>{p.name}</h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-lv-ink/65">{p.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[14px] font-medium">
                        <Check className="h-4 w-4 text-lv-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center justify-between pt-8 text-[14px] font-bold">
                    {p.cta}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lv-paper transition-colors group-hover:bg-lv-blue group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= architecture */}
      <section className="mx-auto max-w-[1280px] px-6 py-28 lg:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr]">
          <Reveal variant="left">
            <GrainField tone="deep" grain={0.3} className="relative aspect-[3/4] rounded-[32px]">
              <Globe dot="rgba(194,223,246,0.85)" dotSize={1.1} density={1.6} arcs="#8CC3EE" marker="#FFFFFF" lon={78} lat={18} speed={4} />
            </GrainField>
          </Reveal>
          <div>
            <Reveal>
              <Kicker>{ARCHITECTURE.kicker}</Kicker>
            </Reveal>
            <h2 className={`${D} mt-6 text-[40px] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] lg:text-[64px]`}>
              <SplitWords text={ARCHITECTURE.title} />
            </h2>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-[16px] leading-[1.65] text-lv-ink/65">{ARCHITECTURE.body}</p>
            </Reveal>
          </div>
        </div>
        <div className="mt-14 grid gap-3 lg:grid-cols-4">
          {ARCHITECTURE.bands.map((b, i) => (
            <Reveal key={b.label} delay={i * 90}>
              <div className={`h-full rounded-[26px] p-6 ${b.active ? "bg-lv-blue text-white" : "bg-lv-paper"}`}>
                <div className="flex items-center justify-between">
                  <span className={`${D} text-[18px] font-bold`}>{b.label}</span>
                  <span className={`text-[12px] font-bold ${b.active ? "text-white/70" : "text-lv-ink/35"}`}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                {b.badge && <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-bold text-lv-blue">{b.badge}</span>}
                <ul className="mt-6 space-y-2.5">
                  {b.items.map((it) => (
                    <li key={it.label} className={`flex items-center gap-2.5 text-[14px] font-medium ${b.active ? "" : "text-lv-ink/75"}`}>
                      <it.icon className={`h-4 w-4 ${b.active ? "text-white/80" : "text-lv-blue"}`} />
                      {it.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================================================ why */}
      <section className="bg-lv-ink py-28 text-white lg:py-36">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-300">{WHY.kicker}</span>
            </Reveal>
            <h2 className={`${D} mt-5 text-[30px] font-bold leading-[1.12] tracking-[-0.025em] lg:text-[44px]`}>
              <SplitWords text={WHY.title} stagger={35} />
            </h2>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {WHY.items.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 90}>
                <div className={`h-full rounded-[28px] p-8 ${i === 1 ? "bg-lv-blue" : "bg-white/[0.05]"}`}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${i === 1 ? "bg-white text-lv-blue" : "bg-white/10 text-lv-300"}`}>
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className={`${D} mt-10 text-[21px] font-bold leading-[1.2]`}>{r.title}</h3>
                  <p className={`mt-3 text-[14px] leading-[1.65] ${i === 1 ? "text-white/80" : "text-white/55"}`}>{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= industries */}
      <section className="mx-auto max-w-[1280px] px-6 py-28 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <Kicker>{INDUSTRIES.kicker}</Kicker>
          </Reveal>
          <h2 className={`${D} mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] lg:text-[46px]`}>
            <SplitWords text={INDUSTRIES.title} stagger={35} />
          </h2>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[300px_1fr]">
          <ol className="relative">
            <span className="absolute bottom-6 left-[19px] top-6 w-px bg-lv-ink/10" />
            {INDUSTRIES.items.map((ind, i) => (
              <li key={ind.name}>
                <button
                  type="button"
                  onClick={() => setIndustry(i)}
                  onMouseEnter={() => setIndustry(i)}
                  className="relative flex w-full items-center gap-4 py-3 text-left"
                >
                  <span
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[13px] font-bold transition-colors ${
                      industry === i ? "border-lv-blue bg-lv-blue text-white" : "border-lv-ink/15 bg-white text-lv-ink/50"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`${D} text-[19px] font-bold transition-colors ${industry === i ? "text-lv-ink" : "text-lv-ink/40"}`}>{ind.name}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="relative">
            {INDUSTRIES.items.map((ind, i) => (
              <div
                key={ind.name}
                className={`grid gap-4 rounded-[32px] bg-lv-paper p-8 transition-opacity duration-500 lg:grid-cols-[1fr_1.2fr] lg:p-10 ${
                  industry === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
                }`}
              >
                <div className="flex flex-col justify-between gap-8">
                  <ind.icon className="h-10 w-10 text-lv-blue" />
                  <div>
                    <h3 className={`${D} text-[44px] font-extrabold leading-none tracking-[-0.03em]`}>{ind.name}</h3>
                    <a href={ind.href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-lv-ink px-5 py-3 text-[14px] font-semibold text-white hover:bg-lv-blue">
                      {INDUSTRIES.linkPrefix} {ind.name} {INDUSTRIES.linkSuffix}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <dl className="space-y-3">
                  {(["challenge", "solution", "outcome"] as const).map((k) => (
                    <div key={k} className="rounded-[20px] bg-white p-5">
                      <dt className="text-[12px] font-bold uppercase tracking-[0.1em] text-lv-700">{INDUSTRIES.labels[k]}</dt>
                      <dd className="mt-2 text-[15px] leading-[1.55]">{ind[k]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= proven */}
      <section className="bg-lv-paper py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Reveal>
                <Kicker>{PROVEN.kicker}</Kicker>
              </Reveal>
              <h2 className={`${D} mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] lg:text-[46px]`}>
                <SplitWords text={PROVEN.title} stagger={35} />
              </h2>
            </div>
            <a href={PROVEN.link.href} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold">
              {PROVEN.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {PROVEN.testimonials.map((t, i) => (
              <Reveal key={t.sector} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-[28px] bg-white p-8">
                  <div className="flex items-center justify-between">
                    <Quote className="h-7 w-7 text-lv-blue" />
                    <span className="rounded-full bg-lv-100 px-3 py-1 text-[12px] font-bold text-lv-700">{t.sector}</span>
                  </div>
                  <blockquote className="mt-6 flex-1 text-[17px] font-medium leading-[1.55]">{t.quote}</blockquote>
                  <figcaption className="mt-6 text-[13px] text-lv-ink/55">{t.role}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 rounded-[28px] bg-white p-6">
            <p className="text-[13px] font-semibold text-lv-ink/60">{PROVEN.logosLabel}</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                <li key={i} className="flex h-14 items-center justify-center rounded-[16px] border-2 border-dashed border-lv-ink/10 px-3 text-center text-[11px] text-lv-ink/45">
                  {PROVEN.logoPlaceholder}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================== timeline */}
      <section className="overflow-hidden py-28 lg:py-36">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-2xl">
            <Reveal>
              <Kicker>{TIMELINE.kicker}</Kicker>
            </Reveal>
            <h2 className={`${D} mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] lg:text-[56px]`}>
              <SplitWords text={TIMELINE.title} />
            </h2>
          </div>
          {/* Route with waypoints (desktop): the route runs in its own band,
              milestones hang above and below it on short stems. */}
          <div className="relative mt-20 hidden h-[600px] lg:block">
            <DrawPath
              viewBox="0 0 1000 120"
              className="absolute inset-x-0 top-[240px] h-[120px] w-full text-lv-blue"
              d="M0 60 C 60 10, 110 10, 160 60 S 260 110, 320 60 S 420 10, 480 60 S 580 110, 640 60 S 740 10, 800 60 S 900 110, 1000 60"
              width={2}
              duration={2600}
            />
            {TIMELINE.milestones.map((m, i) => {
              const up = i % 2 === 0;
              return (
                <Reveal
                  key={`${m.year}-${i}`}
                  delay={300 + i * 160}
                  className="absolute flex w-[150px] flex-col"
                  style={{ left: `${1 + i * 12.2}%`, ...(up ? { bottom: 360 } : { top: 360 }) }}
                >
                  <div className={up ? "order-1" : "order-2 mt-0"}>
                    <span className={`${D} block text-[26px] font-extrabold tracking-[-0.02em]`}>{m.year}</span>
                    <h3 className="mt-1 text-[14px] font-bold">{m.title}</h3>
                    <p className="mt-1 text-[12px] leading-[1.5] text-lv-ink/60">{m.body}</p>
                  </div>
                  <div className={`flex items-start ${up ? "order-2 mt-4 flex-col" : "order-1 mb-4 flex-col-reverse"}`}>
                    <span className="ml-[7px] h-8 w-px self-start bg-lv-blue/40" />
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lv-blue ring-4 ring-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <ol className="mt-14 space-y-6 border-l-2 border-dotted border-lv-blue/40 pl-6 lg:hidden">
            {TIMELINE.milestones.map((m, i) => (
              <li key={`${m.year}-${i}`}>
                <span className={`${D} text-[24px] font-extrabold`}>{m.year}</span>
                <h3 className="text-[15px] font-bold">{m.title}</h3>
                <p className="mt-1 text-[13px] text-lv-ink/60">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =========================================================== insights */}
      <section className="bg-lv-paper py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Reveal>
                <Kicker>{INSIGHTS.kicker}</Kicker>
              </Reveal>
              <h2 className={`${D} mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] lg:text-[44px]`}>
                <SplitWords text={INSIGHTS.title} stagger={35} />
              </h2>
            </div>
            <a href={INSIGHTS.link.href} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold">
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
                className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors ${filter === f ? "bg-lv-blue text-white" : "bg-white text-lv-ink/65"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {INSIGHTS.items.map((r, i) => (
              <a
                key={r.title}
                href={INSIGHTS.link.href}
                className={`group flex gap-5 rounded-[26px] bg-white p-3 ${filter === "All" || filter === r.tag ? "" : "hidden"}`}
              >
                <GrainField tone={(["blue", "sky", "deep", "paper"] as const)[i]} grain={0.3} className="w-32 shrink-0 rounded-[20px] sm:w-40" />
                <div className="flex flex-1 flex-col py-3 pr-3">
                  <div className="flex items-center justify-between text-[12px] font-semibold">
                    <span className="text-lv-700">{r.tag}</span>
                    <span className="text-lv-ink/45">{r.read}</span>
                  </div>
                  <h3 className={`${D} mt-2 text-[18px] font-bold leading-[1.25]`}>{r.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-lv-ink/60">{r.body}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 text-[12px]">
                    <span className="text-lv-ink/45">{r.meta}</span>
                    <span className="flex items-center gap-1 font-bold">
                      {INSIGHTS.readLabel}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== recognition */}
      <section className="mx-auto max-w-[1280px] px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Reveal>
              <Kicker>{RECOGNITION.kicker}</Kicker>
            </Reveal>
            <h2 className={`${D} mt-5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] lg:text-[36px]`}>{RECOGNITION.title}</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {RECOGNITION.items.map((a, i) => (
              <Reveal as="li" key={i} delay={(i % 2) * 80} className="flex items-start gap-4 rounded-[22px] bg-lv-paper p-5">
                <Award className="h-5 w-5 shrink-0 text-lv-blue" />
                <div>
                  <h3 className="text-[14px] font-bold">{a.title}</h3>
                  <p className="mt-1 text-[13px] text-lv-ink/55">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================= investment */}
      <section className="mx-auto max-w-[1280px] px-6 pb-28">
        <div className="rounded-[36px] bg-lv-ink p-8 text-white lg:p-14">
          <Reveal>
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lv-300">{INVESTMENT.kicker}</span>
          </Reveal>
          <h2 className={`${D} mt-5 max-w-2xl text-[30px] font-bold leading-[1.12] tracking-[-0.025em] lg:text-[42px]`}>{INVESTMENT.title}</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INVESTMENT.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="rounded-[24px] bg-white/[0.05] p-6">
                <p.icon className="h-6 w-6 text-lv-300" />
                <h3 className={`${D} mt-8 text-[18px] font-bold`}>{p.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-white/60">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={INVESTMENT.primary.href} className="group inline-flex items-center justify-between gap-5 rounded-full bg-lv-blue py-2 pl-6 pr-2 text-[14px] font-semibold">
              {INVESTMENT.primary.label}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lv-blue">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a href={INVESTMENT.secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-semibold">
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================== final cta */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24">
        <GrainField tone="blue" grain={0.3} className="rounded-[44px] px-6 py-20 text-center text-white lg:py-28">
          <div className="absolute inset-0 opacity-80">
            <Globe dot="rgba(255,255,255,0.85)" dotSize={1} density={1.8} lon={78} lat={-30} speed={3} horizon={{ r: 0.42, top: 0.58 }} outline="rgba(255,255,255,0.6)" />
          </div>
          <Sparkle className="mk-float absolute left-[12%] top-[22%] text-white" size={26} />
          <Sparkle className="mk-float-b absolute right-[14%] top-[30%] text-white" size={16} />
          <div className="relative mx-auto max-w-3xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/75">{FINAL_CTA.kicker}</span>
            <h2 className={`${D} mt-6 text-[40px] font-extrabold leading-[1.02] tracking-[-0.035em] lg:text-[60px]`}>
              <SplitWords text={FINAL_CTA.title} />
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.6] text-white/80">{FINAL_CTA.body}</p>
            <div className="mx-auto mt-10 flex max-w-xl flex-col gap-2 rounded-full bg-white/15 p-2 backdrop-blur sm:flex-row">
              <a href={FINAL_CTA.primary.href} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-bold text-lv-ink">
                {FINAL_CTA.primary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={FINAL_CTA.secondary.href} className="flex flex-1 items-center justify-center rounded-full px-6 py-3.5 text-[14px] font-bold">
                {FINAL_CTA.secondary.label}
              </a>
            </div>
          </div>
        </GrainField>
      </section>

      {/* ============================================================= footer */}
      <footer className="border-t border-lv-ink/[0.07]">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className={`${D} text-[26px] font-bold tracking-[-0.02em]`}>{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[15px] text-lv-ink/60">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="rounded-full bg-lv-paper px-6 py-3 text-[14px] font-semibold">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-full bg-lv-blue px-6 py-3 text-[14px] font-semibold text-white">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 border-t border-lv-ink/[0.07] py-14 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="ink" height={32} />
              <p className={`${D} mt-6 text-[17px] font-bold`}>{CHROME.footerBrand.tagline}</p>
              <p className="mt-3 max-w-xs text-[13px] leading-[1.6] text-lv-ink/55">{CHROME.footerBrand.blurb}</p>
              <ul className="mt-6 space-y-1.5 text-[13px] font-medium text-lv-ink/65">
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
                  <h4 className="text-[13px] font-bold">{c.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-[13px] text-lv-ink/65 hover:text-lv-blue">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-lv-ink/[0.07] py-6 text-[12px] text-lv-ink/50 sm:flex-row">
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
        </div>
      </footer>
    </div>
  );
}
