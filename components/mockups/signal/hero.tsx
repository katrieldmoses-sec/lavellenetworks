"use client";

/**
 * The Signal hero, kept as designed — grain-blue card, the earth inside
 * three orbit rings, headline bottom-left — with a personality layer per
 * variant:
 *
 *  bloom  — pointer parallax (rings tilt in 3D), an underline that passes
 *           from word to word, packets travelling the rings, and Bloom's
 *           platform strip overlapping the card's lower edge.
 *  sky    — Solara's sky: a sky gradient, the planet's horizon rising under
 *           the copy, and a ruled row of live figures.
 *  atlas  — Atlas's giant faded word behind the system and floating cards.
 *  radar  — a slow radar sweep across the rings, spokes from the globe to
 *           each product, and a ticker of the platform along the base.
 *  scroll — the card insets into a framed panel as you scroll (Bloom) while
 *           the rings turn with the scroll.
 */
import { MapPin } from "lucide-react";
import { HERO, STATS } from "@/lib/content/home";
import Globe from "../kit/Globe";
import { Reveal, SplitWords, Count, Marquee, useStickyProgress } from "../kit/Motion";
import { GrainField, Grain } from "../kit/Brand";
import { Kicker, Orbit, Btn, XCAPS, usePointerVars } from "./parts";

export type HeroPersona = "bloom" | "sky" | "atlas" | "radar" | "scroll";

const PLATFORM = HERO.diagram.platform.map((p) => ({ label: `${p.brand} ${p.name}`, icon: p.icon }));

/** The orbit system: earth, three rings, optional packets/spokes/sweep. */
function System({
  persona,
  turn = 0,
  scale = 1,
}: {
  persona: HeroPersona;
  turn?: number;
  scale?: number;
}) {
  const lively = persona !== "sky";
  return (
    <div
      className="absolute inset-0 text-white/25"
      style={turn || scale !== 1 ? { transform: `rotate(${turn}deg) scale(${scale})`, transition: "transform 80ms linear" } : undefined}
    >
      {persona === "radar" && (
        <div className="absolute left-[2%] top-[2%] h-[96%] w-[96%] overflow-hidden rounded-full">
          <div className="mk-sweep absolute inset-0 rounded-full" />
        </div>
      )}
      <div className="absolute inset-[30%]">
        <Globe dot="rgba(255,255,255,0.95)" dotSize={1.1} density={1.6} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={4} />
      </div>
      <Orbit
        items={PLATFORM}
        radius={27}
        chip="bg-white text-lv-ink"
        packets={lively ? "#FFFFFF" : undefined}
        spokes={persona === "radar" ? "rgba(255,255,255,0.55)" : undefined}
        spokeFrom={0.76}
      />
      <Orbit items={HERO.diagram.sources} radius={38} offset={persona === "radar" ? 0.06 : 1 / 8} chip="bg-white/15 text-white backdrop-blur" packets={lively ? "#C2DFF6" : undefined} packetSpeed={13} />
      <Orbit items={HERO.diagram.destinations} radius={persona === "radar" ? 46 : 48} offset={persona === "radar" ? 0.3 : 1 / 16} chip="bg-lv-ink/40 text-white backdrop-blur" packets={lively ? "#8CC3EE" : undefined} packetSpeed={17} />
    </div>
  );
}

/** Headline: "Connect. Control. Secure." with an optional passing underline. */
function Headline({ underline }: { underline: boolean }) {
  return (
    <h1 className="mt-5 text-[52px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[76px] lg:text-[92px]">
      {HERO.words.map((w, i) => {
        const accent = i === HERO.words.length - 1;
        return (
          <span key={w}>
            <span className="relative inline-block">
              <SplitWords text={w} delay={i * 130} wordClassName={accent ? "text-lv-ink" : ""} />
              {underline && (
                <span
                  aria-hidden
                  className={`mk-word-line absolute -bottom-1 left-0 h-[3px] w-full rounded-full ${accent ? "bg-lv-ink" : "bg-white"}`}
                  style={{ animationDelay: `${1.2 + i * 2.5}s` }}
                />
              )}
            </span>
            {i < HERO.words.length - 1 ? " " : null}
          </span>
        );
      })}
    </h1>
  );
}

function Copy({ underline, meta = true }: { underline: boolean; meta?: boolean }) {
  return (
    <div className="max-w-[640px]">
      <Kicker light>{HERO.kicker}</Kicker>
      <Headline underline={underline} />
      <Reveal delay={350}>
        <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-white/85">{HERO.body}</p>
      </Reveal>
      <Reveal delay={450} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Btn href={HERO.primary.href} tone="white" arrow>
          {HERO.primary.label}
        </Btn>
        <Btn href={HERO.secondary.href} tone="ghost-light">
          {HERO.secondary.label}
        </Btn>
      </Reveal>
      {meta && (
        <p className="mt-8 text-[12px] text-white/70">
          {HERO.diagram.platformLabel} · {HERO.meta[0]} · {HERO.meta[1]}
        </p>
      )}
    </div>
  );
}

/** Bloom's platform strip, overlapping the hero's lower edge. */
export function FlowStrip() {
  return (
    <Reveal className="relative z-10 mx-auto -mt-px max-w-[1180px] px-3 pt-4 lg:-mt-20 lg:px-0 lg:pt-0">
      <div className="grid items-center gap-4 rounded-[22px] bg-white p-5 shadow-[0_30px_60px_-40px_rgba(0,84,147,0.55)] ring-1 ring-lv-ink/5 lg:grid-cols-[1fr_auto_1.35fr_auto_1fr] lg:gap-0 lg:p-6">
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
          <div className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-lv-700">{HERO.diagram.platformLabel}</div>
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
  );
}

const SYS = "absolute left-[74%] top-1/2 aspect-square w-[min(100vh,920px)] -translate-x-1/2 -translate-y-1/2";

export default function SignalHero({ persona }: { persona: HeroPersona }) {
  const ptr = usePointerVars<HTMLDivElement>();
  const [stickRef, p] = useStickyProgress<HTMLDivElement>();

  /* ---------------------------------------------------------------- scroll */
  if (persona === "scroll") {
    const e = Math.min(1, p * 1.25);
    return (
      <div ref={stickRef} className="relative mb-[-28vh] h-[150vh]">
        <div className="sticky top-0 h-[100svh] px-3 pt-3 sm:px-5">
          <div
            className="relative mx-auto h-[calc(100svh-24px)] max-w-[1400px] overflow-hidden will-change-transform"
            style={{ transform: `scale(${1 - e * 0.08})`, transformOrigin: "50% 30%", borderRadius: 24 + e * 24 }}
          >
            <GrainField tone="blue" grain={0.32} className="h-full text-white">
              <div className={SYS}>
                <System persona="scroll" turn={e * 90} scale={1 + e * 0.12} />
              </div>
              <div className="relative flex h-full flex-col justify-end p-6 lg:p-12" style={{ transform: `translate3d(0, ${-e * 36}px, 0)` }}>
                <Copy underline />
              </div>
              <div className="absolute right-6 top-6 hidden items-center gap-3 text-[12px] text-white/70 lg:flex" style={{ opacity: 1 - e }}>
                <span className="h-8 w-px bg-white/30" />
                {HERO.meta[1]}
              </div>
            </GrainField>
          </div>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------- sky */
  if (persona === "sky") {
    return (
      <section className="px-3 sm:px-5">
        <div
          className="relative mx-auto min-h-[calc(100svh-96px)] max-w-[1400px] overflow-hidden rounded-[24px] text-white"
          style={{ background: "linear-gradient(180deg,#0068B8 0%,#0078D4 30%,#4FA3E3 62%,#C2DFF6 100%)" }}
        >
          <Grain opacity={0.3} />
          {/* the planet rising under the copy */}
          <div className="absolute inset-0">
            <Globe dot="rgba(255,255,255,0.92)" dotSize={1.25} density={1.4} lon={80} lat={-30} sway={10} horizon={{ r: 0.7, top: 0.84 }} outline="rgba(255,255,255,0.75)" ocean="rgba(0,84,147,0.38)" />
          </div>
          <div className="absolute left-[74%] top-[42%] aspect-square w-[min(74vh,680px)] -translate-x-1/2 -translate-y-1/2">
            <System persona="sky" />
          </div>
          <div className="relative flex min-h-[calc(100svh-96px)] flex-col justify-end gap-10 p-6 lg:p-12">
            <Copy underline={false} meta={false} />
            <Reveal delay={600}>
              <dl className="grid max-w-[560px] grid-cols-4">
                {STATS.items.map((s) => (
                  <div key={s.label} className="border-l border-white/50 pl-3">
                    <dd className="text-[22px] font-semibold leading-none tracking-[-0.03em] lg:text-[26px]">
                      <Count end={s.end} suffix={s.suffix} separator={s.separator} />
                    </dd>
                    <dt className="mt-2 text-[11px] leading-[1.2] text-white/85">{s.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[12px] text-white/75">
                {HERO.diagram.platformLabel} · {HERO.meta[0]} · {HERO.meta[1]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    );
  }

  /* ---------------------------------------------- bloom / atlas / radar */
  return (
    <section className="px-3 sm:px-5">
      <div ref={ptr}>
        <GrainField tone="blue" grain={0.32} className="mx-auto min-h-[calc(100svh-96px)] max-w-[1400px] rounded-[24px] text-white">
          {persona === "atlas" && (
            <div
              aria-hidden
              className={`${XCAPS} mk-drift pointer-events-none absolute inset-x-0 top-[6%] select-none whitespace-nowrap text-center text-[17vw] leading-[0.85] lg:text-[230px]`}
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.32) 10%, rgba(255,255,255,0) 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {HERO.words[0]}
            </div>
          )}

          <div className={`${SYS} ${persona === "radar" ? "!top-[44%] !w-[min(86vh,800px)]" : ""}`}>
            <div className="mk-tilt absolute inset-0">
              <System persona={persona} />
            </div>
          </div>

          {persona === "atlas" && (
            <>
              <div className="mk-drift-far absolute left-[38%] top-[8%] hidden xl:block">
                <div className="mk-float w-[190px] rounded-[16px] bg-white/90 p-3 text-lv-ink backdrop-blur">
                  <div className="h-20 overflow-hidden rounded-[10px] bg-lv-ink">
                    <Globe dot="rgba(194,223,246,0.9)" dotSize={0.8} density={2.6} lon={78} lat={20} speed={6} />
                  </div>
                  <p className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold leading-[1.3]">
                    <MapPin className="h-3.5 w-3.5 text-lv-blue" />
                    {HERO.meta[1]}
                  </p>
                </div>
              </div>
              <div className="mk-drift-far absolute right-[3%] top-[72%] hidden xl:block">
                <div className="mk-float-b flex items-center gap-3 rounded-full bg-white/90 py-2 pl-2 pr-5 text-lv-ink backdrop-blur">
                  <span className="flex -space-x-2">
                    {HERO.diagram.sources.map((s) => (
                      <span key={s.label} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-lv-ink text-white">
                        <s.icon className="h-3.5 w-3.5" />
                      </span>
                    ))}
                  </span>
                  <span className="text-[13px] font-bold leading-tight">
                    <Count end={STATS.items[1].end} suffix={STATS.items[1].suffix} />
                    <span className="block text-[11px] font-medium text-lv-ink/55">{STATS.items[1].label}</span>
                  </span>
                </div>
              </div>
            </>
          )}

          <div className={`relative flex min-h-[calc(100svh-96px)] flex-col justify-end p-6 lg:p-12 ${persona === "bloom" ? "lg:pb-32" : ""} ${persona === "radar" ? "pb-24 lg:pb-28" : ""}`}>
            <Copy underline={persona !== "atlas"} />
          </div>

          {persona === "radar" && (
            <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-lv-700/25 backdrop-blur-[2px]">
              <Marquee duration={44} gap="2.5rem" className="py-4">
                {[...HERO.diagram.platform.map((x) => ({ label: `${x.brand} ${x.name}`, icon: x.icon })), ...HERO.diagram.sources, ...HERO.diagram.destinations].map((x) => (
                  <span key={x.label} className="flex shrink-0 items-center gap-2.5 text-[13px] font-medium text-white/85">
                    <x.icon className="h-4 w-4 text-lv-200" />
                    {x.label}
                    <span className="ml-6 h-1 w-1 rounded-full bg-white/40" />
                  </span>
                ))}
              </Marquee>
            </div>
          )}
        </GrainField>
      </div>
    </section>
  );
}

