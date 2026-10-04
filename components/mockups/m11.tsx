"use client";

/**
 * 11 — Index.  Sources: KTM (ink field with vertical guides, giant cropped
 * numerals, white showcase panels with a huge grey word behind the subject,
 * side circles for neighbouring models, spec rows, vertical pager) and the
 * Qorry portfolio (blue poster block, big arrow, underlined hashtag list).
 * Type: Barlow Condensed + Barlow.
 */
import { useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Award, Play } from "lucide-react";
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
import { Lockup, NavMenu, MobileNav, Grain } from "./kit/Brand";

const C = "font-m-display uppercase";

/** Giant numeral with its lower half cropped away. */
function Cropped({ n, className = "" }: { n: string; className?: string }) {
  return (
    <span aria-hidden className={`block h-[0.55em] overflow-hidden leading-[0.9] ${C} font-black ${className}`}>
      {n}
    </span>
  );
}

function Kicker({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`${C} text-[14px] font-semibold tracking-[0.18em] ${dark ? "text-lv-300" : "text-lv-blue"}`}>{children}</span>;
}

export default function M11() {
  const [prod, setProd] = useState(0);
  const [ind, setInd] = useState(0);
  const [filter, setFilter] = useState("All");
  const N = PRODUCTS.items.length;
  const prev = PRODUCTS.items[(prod + N - 1) % N];
  const next = PRODUCTS.items[(prod + 1) % N];
  const it = INDUSTRIES.items[ind];

  return (
    <div className="mk-root mk-dark relative bg-lv-ink font-m-body text-white antialiased">
      {/* vertical guides */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 mx-auto hidden max-w-[1280px] lg:block">
        <span className="absolute inset-y-0 left-[0%] w-px bg-white/[0.06]" />
        <span className="absolute inset-y-0 left-[44%] w-px bg-white/[0.06]" />
        <span className="absolute inset-y-0 right-[0%] w-px bg-white/[0.06]" />
      </div>

      {/* ====================================================== intro + nav */}
      <section className="relative mx-auto grid max-w-[1280px] gap-8 px-6 pb-10 pt-12 lg:grid-cols-[44%_1fr] lg:px-0">
        <div className="lg:pl-16">
          <Cropped n="01" className="text-[140px] text-white lg:text-[200px]" />
          <span className={`${C} mt-2 block text-[13px] font-semibold tracking-[0.12em] text-lv-300`}>{HERO.meta[1]}</span>
        </div>
        <div className="lg:pl-16 lg:pt-10">
          <span className={`${C} block text-[48px] font-black leading-[0.9] lg:text-[72px]`}>
            {HERO.words[0]} <span className="text-lv-blue">{HERO.words[1]}</span>
          </span>
          <p className="mt-5 max-w-md text-[13px] leading-[1.6] text-white/60">{HERO.body}</p>
        </div>
      </section>

      <div className="relative z-50 mx-auto max-w-[1280px] px-4 lg:px-0">
        <header className="flex h-16 items-stretch bg-white text-lv-ink">
          <div className="flex items-center bg-lv-blue px-5">
            <Lockup tone="white" height={22} priority />
          </div>
          <NavMenu
            className="ml-2 h-full items-stretch"
            theme={{
              trigger: `${C} flex h-16 items-center px-5 text-[14px] font-semibold tracking-[0.1em] text-lv-ink/80 hover:text-lv-blue`,
              triggerOpen: "bg-lv-ink text-white hover:text-white",
              panel: "bg-lv-ink p-5 text-white",
              heading: `${C} text-[12px] font-semibold tracking-[0.14em] text-lv-300`,
              link: "py-1.5 text-[13px] text-white/75 hover:text-white",
            }}
          />
          <div className="ml-auto hidden items-center gap-4 pr-4 lg:flex">
            <a href={CHROME.headerCtas.expert.href} className={`${C} text-[13px] font-semibold tracking-[0.1em] text-lv-ink/70`}>
              {CHROME.headerCtas.expert.label}
            </a>
            <a href={CHROME.headerCtas.demo.href} className={`${C} bg-lv-blue px-4 py-2 text-[13px] font-bold tracking-[0.1em] text-white`}>
              {CHROME.headerCtas.demo.label}
            </a>
          </div>
          <MobileNav className="ml-auto self-center pr-2" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
        </header>
      </div>

      {/* ============================================================= hero */}
      <section className="relative z-10 mx-auto max-w-[1280px] px-4 lg:px-0">
        <div className="relative overflow-hidden bg-white text-lv-ink">
          <div className="grid lg:grid-cols-[64px_1fr_64px]">
            {/* left rail */}
            <div className="hidden flex-col items-center justify-between border-r border-lv-ink/10 py-8 lg:flex">
              <span className={`${C} -rotate-180 text-[11px] font-semibold tracking-[0.2em] text-lv-ink/50 [writing-mode:vertical-rl]`}>{HERO.meta[0]}</span>
              <span className="text-lv-blue">
                <ArrowLeft className="h-4 w-4" />
              </span>
            </div>
            <div className="relative px-6 pb-10 pt-10 lg:px-10">
              <div className="pointer-events-none absolute left-1/2 top-[10%] aspect-square w-[min(62%,560px)] -translate-x-1/2">
                <Globe dot="rgba(0,84,147,0.55)" dotSize={1.15} density={1.5} arcs="#0078D4" marker="#0078D4" lon={78} lat={18} speed={4} />
              </div>
              <span className={`${C} relative block text-center text-[14px] font-bold tracking-[0.3em] text-lv-blue`}>{HERO.kicker}</span>
              <h1
                className={`${C} relative mt-2 text-center text-[19vw] font-black leading-[0.82] lg:text-[200px]`}
                style={{ background: "linear-gradient(180deg,#201E1D 0%, #201E1D 30%, rgba(32,30,29,0.18) 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
              >
                {HERO.titleLead} <span style={{ WebkitTextFillColor: "#0078D4" }}>{HERO.titleAccent}</span>
              </h1>

              <div className="relative mt-6 flex flex-col items-center gap-4 text-center">
                <span className={`${C} text-[14px] font-semibold tracking-[0.45em] text-lv-ink/70`}>
                  {HERO.diagram.platform.map((pp) => pp.name).join("   ·   ")}
                </span>
                <span className="h-0.5 w-12 bg-lv-ink/30" />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={HERO.primary.href} className={`${C} flex items-center justify-center gap-2 bg-lv-blue px-6 py-3 text-[14px] font-bold tracking-[0.12em] text-white`}>
                    {HERO.primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={HERO.secondary.href} className={`${C} flex items-center justify-center border-2 border-lv-ink px-6 py-3 text-[14px] font-bold tracking-[0.12em]`}>
                    {HERO.secondary.label}
                  </a>
                </div>
              </div>
            </div>
            {/* right pager */}
            <div className="hidden flex-col items-center justify-center gap-5 border-l border-lv-ink/10 lg:flex">
              {HERO.diagram.platform.map((pp, i) => (
                <span key={pp.name} className={`${C} flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold ${i === 0 ? "border-2 border-lv-blue text-lv-blue" : "text-lv-ink/40"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              ))}
            </div>
          </div>
          {/* sources / destinations spec strip */}
          <div className="grid border-t border-lv-ink/10 sm:grid-cols-2">
            {[HERO.diagram.sources, HERO.diagram.destinations].map((list, li) => (
              <ul key={li} className={`flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 lg:px-10 ${li ? "sm:border-l sm:border-lv-ink/10" : ""}`}>
                <span className={`${C} text-[12px] font-bold tracking-[0.14em] text-lv-blue`}>{li ? "→" : HERO.diagram.platformLabel}</span>
                {list.map((s) => (
                  <li key={s.label} className={`${C} flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.08em]`}>
                    <s.icon className="h-3.5 w-3.5 text-lv-ink/50" />
                    {s.label}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== 02 — stats */}
      <section className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-6 py-24 lg:grid-cols-[44%_1fr] lg:px-0">
        <div className="lg:pl-16">
          <Cropped n="02" className="text-[140px] lg:text-[200px]" />
        </div>
        <div className="lg:pl-16">
          <p className={`${C} text-[40px] font-black leading-[0.95] lg:text-[54px]`}>{STATS.statement}</p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8">
            {STATS.items.map((s) => (
              <div key={s.label}>
                <dd className={`${C} text-[44px] font-black leading-none text-lv-300 xl:text-[50px]`}>
                  <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                </dd>
                <dt className={`${C} mt-2 text-[12px] font-semibold tracking-[0.12em] text-white/55`}>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================================================== 03 — products */}
      <section className="relative z-10 mx-auto max-w-[1280px] px-4 lg:px-0">
        <div className="px-2 pb-8 lg:pl-16">
          <Kicker>{PRODUCTS.kicker}</Kicker>
          <h2 className={`${C} mt-3 max-w-4xl text-[40px] font-black leading-[0.95] lg:text-[60px]`}>{PRODUCTS.title}</h2>
        </div>
        <div className="relative overflow-hidden bg-white text-lv-ink">
          {/* side circles: neighbouring products */}
          <button
            type="button"
            aria-label={`Previous: ${prev.name}`}
            onClick={() => setProd((prod + N - 1) % N)}
            className="absolute -left-24 top-1/2 z-10 hidden h-56 w-56 -translate-y-1/2 items-center justify-end rounded-full bg-lv-blue pr-12 text-white lg:flex"
          >
            <prev.icon className="h-10 w-10" />
          </button>
          <button
            type="button"
            aria-label={`Next: ${next.name}`}
            onClick={() => setProd((prod + 1) % N)}
            className="absolute -right-24 top-1/2 z-10 hidden h-56 w-56 -translate-y-1/2 items-center justify-start rounded-full bg-lv-blue pl-12 text-white lg:flex"
          >
            <next.icon className="h-10 w-10" />
          </button>
          <div className="relative px-6 py-12 lg:px-40">
            <div className="flex justify-end">
              <span className={`${C} text-[13px] font-bold tracking-[0.14em]`}>
                {String(prod + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
              </span>
            </div>
            <div className="relative mt-4 text-center">
              {PRODUCTS.items.map((x, i) => (
                <div key={x.name} className={`transition-all duration-700 ${prod === i ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}`}>
                  <span className={`${C} block text-[13px] font-bold tracking-[0.14em] text-lv-ink/60`}>
                    {x.brand} ___ {x.category}
                  </span>
                  <h3 className={`${C} text-[22vw] font-black leading-[0.8] tracking-[-0.01em] lg:text-[200px]`}>
                    <span className="text-lv-ink">{x.name.split("-")[0]}</span>
                    {x.name.includes("-") && <span className="text-lv-blue">-{x.name.split("-").slice(1).join("-")}</span>}
                  </h3>
                  <p className="mx-auto mt-6 max-w-lg text-[16px] leading-[1.6] text-lv-ink/70">{x.desc}</p>
                  <div className="mx-auto mt-8 grid max-w-2xl gap-4 border-t border-lv-ink/10 pt-6 text-left sm:grid-cols-3">
                    {x.features.map((f) => (
                      <span key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lv-blue" />
                        <span className={`${C} text-[14px] font-bold tracking-[0.06em]`}>{f}</span>
                      </span>
                    ))}
                  </div>
                  <a href={x.href} className={`${C} mt-8 inline-flex items-center gap-3 bg-lv-ink px-6 py-3 text-[14px] font-bold tracking-[0.12em] text-white`}>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    {x.cta}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-2 lg:hidden">
              <button type="button" aria-label="Previous" onClick={() => setProd((prod + N - 1) % N)} className="flex h-10 w-10 items-center justify-center bg-lv-ink text-white">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Next" onClick={() => setProd((prod + 1) % N)} className="flex h-10 w-10 items-center justify-center bg-lv-blue text-white">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== 04 — architecture */}
      <section className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-6 py-24 lg:grid-cols-[44%_1fr] lg:px-0">
        <div className="flex gap-6 lg:pl-16">
          <h2 className={`${C} text-[64px] font-black leading-[0.82] lg:text-[96px] [writing-mode:vertical-rl] rotate-180`}>
            <span className="text-lv-blue">{ARCHITECTURE.kicker.split(" ")[0]}</span> {ARCHITECTURE.kicker.split(" ")[1]}
          </h2>
          <div className="self-end">
            <Cropped n="04" className="text-[120px] lg:text-[160px]" />
          </div>
        </div>
        <div className="lg:pl-16">
          <h3 className={`${C} text-[38px] font-black leading-[0.95] lg:text-[52px]`}>{ARCHITECTURE.title}</h3>
          <p className="mt-5 max-w-lg text-[14px] leading-[1.7] text-white/60">{ARCHITECTURE.body}</p>
          <div className="mt-10 space-y-px">
            {ARCHITECTURE.bands.map((b) => (
              <Reveal key={b.label} variant="left">
                <div className={`grid gap-2 px-5 py-4 sm:grid-cols-[180px_1fr] ${b.active ? "bg-lv-blue" : "bg-white/[0.05]"}`}>
                  <span className={`${C} text-[16px] font-bold tracking-[0.08em]`}>
                    {b.label}
                    {b.badge && <span className="ml-2 text-[11px] text-white/70">/ {b.badge}</span>}
                  </span>
                  <span className={`${C} text-[13px] font-semibold tracking-[0.06em] text-white/75`}>{b.items.map((x) => x.label).join("  ·  ")}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= 05 — why */}
      <section className="relative z-10 bg-[#f4f3f1] py-24 text-lv-ink">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col justify-between gap-10">
            <ArrowDownRight className="h-32 w-32 text-lv-ink" strokeWidth={2.4} />
            <ul className="space-y-1">
              {WHY.items.map((r) => (
                <li key={r.title} className="border-b border-lv-ink/20 py-2 text-right text-[18px]">
                  #{r.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden bg-lv-blue p-8 text-white lg:p-12">
            <Grain opacity={0.25} />
            <span className={`${C} relative text-[14px] font-semibold tracking-[0.2em] text-white/80`}>{WHY.kicker}</span>
            <h2 className={`${C} relative mt-6 text-[48px] font-black leading-[0.88] lg:text-[84px]`}>{WHY.title}</h2>
            <span className={`${C} relative mt-10 block text-[64px] font-black leading-none text-white/25`}>{String(WHY.items.length).padStart(2, "0")}</span>
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-[1280px] gap-px bg-lv-ink/10 px-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.items.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 70} className="bg-[#f4f3f1] p-6">
              <div className="flex items-center gap-3">
                <span className={`${C} text-[22px] font-black text-lv-blue`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`${C} text-[20px] font-bold leading-[1.05]`}>{r.title}</h3>
              </div>
              <p className="mt-3 text-[13px] leading-[1.65] text-lv-ink/65">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================================ 06 — industries */}
      <section className="relative z-10 mx-auto max-w-[1280px] px-4 py-24 lg:px-0">
        <div className="px-2 pb-8 lg:pl-16">
          <Kicker>{INDUSTRIES.kicker}</Kicker>
          <h2 className={`${C} mt-3 max-w-4xl text-[40px] font-black leading-[0.95] lg:text-[60px]`}>{INDUSTRIES.title}</h2>
        </div>
        <div className="relative grid bg-white text-lv-ink lg:grid-cols-[1fr_64px]">
          <div className="p-6 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className={`${C} block text-[96px] font-black leading-[0.82] text-lv-blue lg:text-[150px]`}>{it.name}</span>
                <span className={`${C} mt-3 block text-[14px] font-bold tracking-[0.5em] text-lv-ink/60`}>{it.solution}</span>
              </div>
              <it.icon className="h-24 w-24 text-lv-ink/15" strokeWidth={1.2} />
            </div>
            <div className="mt-10 grid gap-6 border-t border-lv-ink/10 pt-6 sm:grid-cols-3">
              {(["challenge", "solution", "outcome"] as const).map((k) => (
                <div key={k}>
                  <span className={`${C} flex items-center gap-1 text-[12px] font-bold tracking-[0.12em] text-lv-blue`}>▾ {INDUSTRIES.labels[k]}</span>
                  <p className="mt-2 text-[13px] leading-[1.6] text-lv-ink/75">{it[k]}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-end">
              <a href={it.href} className={`${C} flex items-center gap-3 bg-lv-blue px-6 py-4 text-[16px] font-black tracking-[0.06em] text-white`}>
                {INDUSTRIES.linkPrefix} {it.name} {INDUSTRIES.linkSuffix}
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <ol className="flex items-center justify-center gap-3 border-t border-lv-ink/10 py-4 lg:flex-col lg:border-l lg:border-t-0 lg:py-0">
            {INDUSTRIES.items.map((x, i) => (
              <li key={x.name}>
                <button
                  type="button"
                  aria-label={x.name}
                  onClick={() => setInd(i)}
                  className={`${C} text-[13px] font-bold ${ind === i ? "text-lv-blue" : "text-lv-ink/35 hover:text-lv-ink"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              </li>
            ))}
          </ol>
        </div>
        {/* every industry stays in the page for crawlers and print */}
        <ul className="sr-only">
          {INDUSTRIES.items.map((x) => (
            <li key={x.name}>
              {x.name}: {x.challenge} {x.solution} {x.outcome}{" "}
              <a href={x.href}>
                {INDUSTRIES.linkPrefix} {x.name} {INDUSTRIES.linkSuffix}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ==================================================== 07 — proven */}
      <section className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-6 pb-24 lg:grid-cols-[44%_1fr] lg:px-0">
        <div className="lg:pl-16">
          <Cropped n="07" className="text-[120px] lg:text-[160px]" />
          <Kicker>{PROVEN.kicker}</Kicker>
          <h2 className={`${C} mt-3 text-[36px] font-black leading-[0.95] lg:text-[48px]`}>{PROVEN.title}</h2>
          <a href={PROVEN.link.href} className={`${C} mt-6 inline-flex items-center gap-2 border-b-2 border-lv-blue pb-1 text-[14px] font-bold tracking-[0.12em]`}>
            {PROVEN.link.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="space-y-px lg:pl-16">
          {PROVEN.testimonials.map((t) => (
            <Reveal key={t.sector} className="bg-white/[0.05] p-6">
              <span className={`${C} text-[13px] font-bold tracking-[0.14em] text-lv-300`}>{t.sector}</span>
              <blockquote className="mt-3 text-[16px] leading-[1.6]">{t.quote}</blockquote>
              <figcaption className="mt-3 text-[12px] text-white/45">{t.role}</figcaption>
            </Reveal>
          ))}
          <div className="pt-8">
            <span className={`${C} text-[12px] font-bold tracking-[0.14em] text-white/50`}>{PROVEN.logosLabel}</span>
            <ul className="mt-4 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
              {Array.from({ length: PROVEN.logoCount }).map((_, i) => (
                <li key={i} className="flex h-16 items-center justify-center bg-lv-ink px-3 text-center text-[10px] text-white/40">
                  {PROVEN.logoPlaceholder}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================================================== 08 — timeline */}
      <section className="relative z-10 border-y border-white/10 py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
          <Kicker>{TIMELINE.kicker}</Kicker>
          <h2 className={`${C} mt-3 text-[48px] font-black leading-[0.9] lg:text-[80px]`}>{TIMELINE.title}</h2>
          <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.milestones.map((m, i) => (
              <Reveal as="li" key={`${m.year}-${i}`} delay={(i % 4) * 60} className="bg-lv-ink p-6">
                <Cropped n={m.year} className={`text-[88px] ${i === TIMELINE.milestones.length - 1 ? "text-lv-blue" : "text-white/90"}`} />
                <h3 className={`${C} mt-4 text-[18px] font-bold`}>{m.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.6] text-white/55">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ================================================== 09 — insights */}
      <section className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Kicker>{INSIGHTS.kicker}</Kicker>
            <h2 className={`${C} mt-3 text-[36px] font-black leading-[0.95] lg:text-[52px]`}>{INSIGHTS.title}</h2>
          </div>
          <a href={INSIGHTS.link.href} className={`${C} inline-flex items-center gap-2 border-b-2 border-lv-blue pb-1 text-[14px] font-bold tracking-[0.12em]`}>
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
              className={`${C} px-4 py-2 text-[13px] font-bold tracking-[0.1em] ${filter === f ? "bg-lv-blue text-white" : "bg-white/[0.06] text-white/60"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.items.map((r) => (
            <a key={r.title} href={INSIGHTS.link.href} className={`group flex flex-col bg-lv-ink p-6 transition-colors hover:bg-white/[0.04] ${filter === "All" || filter === r.tag ? "" : "hidden"}`}>
              <span className={`${C} text-[12px] font-bold tracking-[0.12em] text-lv-300`}>{r.tag}</span>
              <h3 className={`${C} mt-4 text-[22px] font-bold leading-[1.05]`}>{r.title}</h3>
              <p className="mt-3 flex-1 text-[12px] leading-[1.6] text-white/55">{r.body}</p>
              <div className={`${C} mt-6 flex justify-between text-[11px] font-semibold tracking-[0.1em] text-white/45`}>
                <span>{r.meta}</span>
                <span>{r.read}</span>
              </div>
              <span className={`${C} mt-4 flex items-center gap-2 text-[13px] font-bold tracking-[0.12em]`}>
                {INSIGHTS.readLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================ 10 — recognition/inv */}
      <section className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-6 pb-24 lg:grid-cols-2 lg:px-16">
        <div>
          <Kicker>{RECOGNITION.kicker}</Kicker>
          <h2 className={`${C} mt-3 text-[30px] font-black leading-[0.95] lg:text-[38px]`}>{RECOGNITION.title}</h2>
          <ul className="mt-8 space-y-px">
            {RECOGNITION.items.map((a, i) => (
              <li key={i} className="flex items-center gap-4 bg-white/[0.05] px-4 py-3">
                <Award className="h-4 w-4 text-lv-300" />
                <span className="flex-1 text-[13px] font-medium">{a.title}</span>
                <span className="text-right text-[11px] text-white/45">{a.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 text-lv-ink lg:p-8">
          <Kicker dark={false}>{INVESTMENT.kicker}</Kicker>
          <h2 className={`${C} mt-3 text-[30px] font-black leading-[0.95] lg:text-[38px]`}>{INVESTMENT.title}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {INVESTMENT.items.map((x) => (
              <div key={x.title}>
                <x.icon className="h-5 w-5 text-lv-blue" />
                <h3 className={`${C} mt-3 text-[17px] font-bold`}>{x.title}</h3>
                <p className="mt-1.5 text-[12px] leading-[1.6] text-lv-ink/65">{x.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={INVESTMENT.primary.href} className={`${C} flex items-center justify-center gap-2 bg-lv-blue px-5 py-3 text-[13px] font-bold tracking-[0.1em] text-white`}>
              {INVESTMENT.primary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={INVESTMENT.secondary.href} className={`${C} flex items-center justify-center border-2 border-lv-ink px-5 py-3 text-[13px] font-bold tracking-[0.1em]`}>
              {INVESTMENT.secondary.label}
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================== final */}
      <section className="relative z-10 overflow-hidden bg-lv-blue">
        <Grain opacity={0.25} />
        <div className="relative mx-auto grid max-w-[1280px] items-end gap-10 px-6 py-24 lg:grid-cols-[1.4fr_1fr] lg:px-16">
          <div>
            <span className={`${C} text-[14px] font-semibold tracking-[0.2em] text-white/80`}>{FINAL_CTA.kicker}</span>
            <h2 className={`${C} mt-4 text-[56px] font-black leading-[0.86] lg:text-[110px]`}>{FINAL_CTA.title}</h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.65] text-white/85">{FINAL_CTA.body}</p>
            <div className="mt-8 flex flex-col gap-3">
              <a href={FINAL_CTA.primary.href} className={`${C} flex items-center justify-between bg-white px-6 py-4 text-[15px] font-black tracking-[0.08em] text-lv-ink`}>
                {FINAL_CTA.primary.label}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href={FINAL_CTA.secondary.href} className={`${C} flex items-center justify-between border-2 border-white px-6 py-4 text-[15px] font-black tracking-[0.08em]`}>
                {FINAL_CTA.secondary.label}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= footer */}
      <footer className="relative z-10 mx-auto max-w-[1280px] px-6 pb-10 pt-20 lg:px-16">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className={`${C} text-[30px] font-black`}>{CHROME.footerBand.title}</h3>
            <p className="mt-2 text-[13px] text-white/55">{CHROME.footerBand.body}</p>
          </div>
          <div className="flex gap-3">
            <a href={CHROME.footerBand.expert.href} className={`${C} border-2 border-white/30 px-5 py-3 text-[13px] font-bold tracking-[0.1em]`}>
              {CHROME.footerBand.expert.label}
            </a>
            <a href={CHROME.footerBand.demo.href} className={`${C} bg-lv-blue px-5 py-3 text-[13px] font-bold tracking-[0.1em]`}>
              {CHROME.footerBand.demo.label}
            </a>
          </div>
        </div>
        <div className="grid gap-12 py-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Lockup tone="white" height={28} />
            <p className={`${C} mt-6 text-[18px] font-bold`}>{CHROME.footerBrand.tagline}</p>
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
                <h4 className={`${C} text-[13px] font-bold tracking-[0.12em] text-lv-300`}>{c.title}</h4>
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
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/45 sm:flex-row">
          <span>
            {CHROME.copyright} <span className={`${C} ml-2 font-bold tracking-[0.14em] text-lv-300`}>{CHROME.builtIn}</span>
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
