"use client";

/**
 * Homepage hero (design.md §7.1). The blue grain card: the earth inside three
 * orbit rings — platform, sources, destinations — with travelling packets,
 * spokes and a radar sweep; the rings tilt with the pointer; the headline
 * carries a passing underline; the platform ticks along the base.
 */
import { HERO } from "@/lib/content/home";
import Globe from "@/components/kit/Globe";
import { Reveal, SplitWords, Marquee } from "@/components/kit/Motion";
import { GrainField } from "@/components/kit/Brand";
import { Kicker, Orbit, Btn, usePointerVars } from "../ui";

const PLATFORM = HERO.diagram.platform.map((p) => ({ label: `${p.brand} ${p.name}`, icon: p.icon }));

/** The orbit system: earth, three rings with packets, spokes and a sweep. */
function System() {
  return (
    <div className="absolute inset-0 text-white/25">
      <div className="absolute left-[2%] top-[2%] h-[96%] w-[96%] overflow-hidden rounded-full">
        <div className="mk-sweep absolute inset-0 rounded-full" />
      </div>
      <div className="absolute inset-[30%]">
        <Globe dot="rgba(255,255,255,0.95)" dotSize={1.1} density={1.6} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={4} />
      </div>
      <Orbit items={PLATFORM} radius={27} chip="bg-white text-lv-ink" packets="#FFFFFF" spokes="rgba(255,255,255,0.55)" spokeFrom={0.76} />
      <Orbit items={HERO.diagram.sources} radius={38} offset={1 / 8} chip="bg-white/15 text-white backdrop-blur" packets="#C2DFF6" packetSpeed={13} />
      <Orbit items={HERO.diagram.destinations} radius={46} offset={1 / 4} chip="bg-lv-ink/40 text-white backdrop-blur" packets="#8CC3EE" packetSpeed={17} />
    </div>
  );
}

/** Headline, with an underline that passes from word to word. */
function Headline() {
  return (
    <h1 className="mt-5 text-[52px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[76px] lg:text-[92px]">
      {HERO.words.map((w, i) => {
        const accent = i === HERO.words.length - 1;
        return (
          <span key={w}>
            <span className="relative inline-block">
              <SplitWords text={w} delay={i * 130} wordClassName={accent ? "text-lv-ink" : ""} />
              <span
                aria-hidden
                className={`mk-word-line absolute -bottom-1 left-0 h-[3px] w-full rounded-full ${accent ? "bg-lv-ink" : "bg-white"}`}
                style={{ animationDelay: `${1.2 + i * 2.5}s` }}
              />
            </span>
            {i < HERO.words.length - 1 ? " " : null}
          </span>
        );
      })}
    </h1>
  );
}

function Copy() {
  return (
    <div className="max-w-[640px]">
      <Kicker light>{HERO.kicker}</Kicker>
      <Headline />
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
      <p className="mt-8 text-[12px] text-white/70">
        {HERO.diagram.platformLabel} · {HERO.meta[0]} · {HERO.meta[1]}
      </p>
    </div>
  );
}

export default function HomeHero() {
  const ptr = usePointerVars<HTMLDivElement>();
  return (
    <section className="px-3 sm:px-5">
      <div ref={ptr}>
        <GrainField tone="blue" grain={0.32} className="mx-auto min-h-[calc(100svh-96px)] max-w-[1400px] rounded-[24px] text-white">
          {/* Rings interleave by 45° (offsets 0, 1/8, 1/4) so chips on neighbouring
              rings never share an angle at any point in the turn; the size keeps
              the outer ring clear of the card's top edge and the ticker. */}
          <div className="absolute left-[72%] top-[45%] hidden aspect-square w-[min(78vh,700px)] -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="mk-tilt absolute inset-0">
              <System />
            </div>
          </div>
          {/* small screens: the earth alone, behind the copy */}
          <div className="absolute inset-x-0 top-0 h-[46%] opacity-30 md:hidden">
            <Globe dot="rgba(255,255,255,0.9)" dotSize={1} density={1.8} lon={78} lat={18} speed={4} />
          </div>
          <div className="relative flex min-h-[calc(100svh-96px)] flex-col justify-end p-6 pb-24 lg:p-12 lg:pb-28">
            <Copy />
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-lv-700/25 backdrop-blur-[2px]">
            <Marquee duration={44} gap="2.5rem" className="py-4">
              {[...PLATFORM, ...HERO.diagram.sources, ...HERO.diagram.destinations].map((x) => (
                <span key={x.label} className="flex shrink-0 items-center gap-2.5 text-[13px] font-medium text-white/85">
                  <x.icon className="h-4 w-4 text-lv-200" />
                  {x.label}
                  <span className="ml-6 h-1 w-1 rounded-full bg-white/40" />
                </span>
              ))}
            </Marquee>
          </div>
        </GrainField>
      </div>
    </section>
  );
}
