"use client";

/**
 * Inner-page renderer — design.md §7.2. Every section kind in
 * lib/content/types.ts has a Signal treatment here. Copy comes only from the
 * section data; components add decoration (numerals, rings, arrows) only.
 */
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Cta, Section } from "@/lib/content/types";
import Globe from "@/components/kit/Globe";
import { Reveal, SplitWords } from "@/components/kit/Motion";
import { GrainField, Grain } from "@/components/kit/Brand";
import { Kicker, TwoTone, Btn, Orbit, OrbitLines, WRAP } from "@/components/site/ui";

/* ------------------------------------------------------------------ parts */

const pad = (i: number) => String(i + 1).padStart(2, "0");

/** Column count that never leaves an orphan: pairs and quads go two-up. */
const cols = (n: number) => (n === 2 || n === 4 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3");

function Head({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title?: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <Kicker light={dark}>{eyebrow}</Kicker>
        </Reveal>
      )}
      {title && (
        <Reveal delay={80}>
          <h2 className={`mt-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] lg:text-[46px] ${dark ? "text-white" : ""}`}>
            <TwoTone text={title} tail={dark ? "text-white/45" : "text-lv-ink/35"} />
          </h2>
        </Reveal>
      )}
      {intro && (
        <Reveal delay={160}>
          <p className={`mt-5 text-[16px] leading-[1.65] ${dark ? "text-white/65" : "text-lv-ink/65"}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

function Actions({ ctas, onDark = false, center = false }: { ctas?: Cta[]; onDark?: boolean; center?: boolean }) {
  if (!ctas?.length) return null;
  return (
    <Reveal delay={260} className={`mt-9 flex flex-col gap-3 sm:flex-row ${center ? "justify-center" : ""}`}>
      {ctas.map((c, i) => (
        <Btn key={c.label} href={c.href} tone={i === 0 ? (onDark ? "white" : "blue") : onDark ? "ghost-light" : "ghost-dark"} arrow={i === 0}>
          {c.label}
        </Btn>
      ))}
    </Reveal>
  );
}

/** Light section on white or paper. */
function Light({ ground, children }: { ground: "white" | "paper"; children: React.ReactNode }) {
  return (
    <section className={`py-24 lg:py-28 ${ground === "paper" ? "bg-lv-paper" : "bg-white"}`}>
      <div className={WRAP}>{children}</div>
    </section>
  );
}

/** Inset panel frame (design.md §4). */
function Frame({ children }: { children: React.ReactNode }) {
  return <section className="px-3 py-3 sm:px-5">{children}</section>;
}

/** Decorative orbit system for page heroes: rings, packets, sweep, earth. */
function HeroSystem() {
  return (
    <div aria-hidden className="pointer-events-none absolute right-[-8%] top-1/2 hidden aspect-square w-[min(84vh,720px)] -translate-y-1/2 text-white/25 lg:block">
      <div className="absolute left-[2%] top-[2%] h-[96%] w-[96%] overflow-hidden rounded-full">
        <div className="mk-sweep absolute inset-0 rounded-full" />
      </div>
      <div className="absolute inset-[30%]">
        <Globe dot="rgba(255,255,255,0.95)" dotSize={1.05} density={1.7} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={4} />
      </div>
      <Orbit items={[]} radius={27} chip="" packets="#FFFFFF" />
      <Orbit items={[]} radius={38} chip="" packets="#C2DFF6" packetSpeed={13} />
      <Orbit items={[]} radius={48} chip="" packets="#8CC3EE" packetSpeed={17} />
    </div>
  );
}

/** Page hero: the blue grain card. Also used by placeholder pages. */
export function PageHero({
  eyebrow,
  title,
  body,
  ctas,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  ctas?: Cta[];
  compact?: boolean;
}) {
  return (
    <section className="px-3 pb-3 sm:px-5">
      <GrainField
        tone="blue"
        grain={0.32}
        className={`mx-auto max-w-[1400px] rounded-[24px] text-white ${compact ? "min-h-[52vh]" : "min-h-[min(68vh,680px)]"}`}
      >
        <HeroSystem />
        <div className={`relative flex flex-col justify-end p-6 lg:p-12 ${compact ? "min-h-[52vh]" : "min-h-[min(68vh,680px)]"}`}>
          <div className="max-w-[720px] lg:max-w-[min(56%,760px)]">
            {eyebrow && (
              <Reveal>
                <Kicker light>{eyebrow}</Kicker>
              </Reveal>
            )}
            <h1 className="mt-5 text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[54px] lg:text-[64px]">
              <SplitWords text={title} stagger={45} />
            </h1>
            {body && (
              <Reveal delay={300}>
                <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-white/85">{body}</p>
              </Reveal>
            )}
            <Actions ctas={ctas} onDark />
          </div>
        </div>
      </GrainField>
    </section>
  );
}

/* --------------------------------------------------------------- sections */

export function SectionRenderer({ section, ground }: { section: Section; ground: "white" | "paper" }) {
  switch (section.kind) {
    case "hero":
      return <PageHero eyebrow={section.eyebrow} title={section.title} body={section.body} ctas={section.ctas} />;

    case "challenge":
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
          <ul className={`mt-14 grid gap-3 ${cols(section.bullets.length)}`}>
            {section.bullets.map((b, i) => (
              <Reveal as="li" key={b} delay={(i % 3) * 70}>
                <div className="flex h-full items-start gap-4 rounded-[18px] border border-lv-ink/10 bg-white p-5 transition-colors hover:border-lv-blue/35">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lv-100 text-[13px] font-bold text-lv-blue">!</span>
                  <span className="text-[15px] leading-[1.55] text-lv-ink/75">{b}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Light>
      );

    case "capabilities":
    case "features":
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} />
          <div className={`mt-14 grid gap-3 ${cols(section.items.length)}`}>
            {section.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 80}>
                <div
                  className={`group flex h-full flex-col rounded-[22px] p-7 transition-transform duration-500 hover:-translate-y-1 ${
                    ground === "paper" ? "bg-white" : "border border-lv-ink/10 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lv-100 text-lv-blue transition-colors duration-300 group-hover:bg-lv-blue group-hover:text-white">
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="text-[13px] font-medium text-lv-ink/30">{pad(i)}</span>
                  </div>
                  <h3 className="mt-9 text-[19px] font-semibold leading-[1.25] tracking-[-0.01em]">{it.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-lv-ink/65">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Light>
      );

    case "how":
      return (
        <Frame>
          <GrainField tone="deep" grain={0.3} className="mx-auto max-w-[1400px] rounded-[24px] px-6 py-20 text-white lg:px-14 lg:py-24">
            <div className="absolute -right-40 -top-40 h-[520px] w-[520px] text-white/10">
              <OrbitLines className="mk-spin-slow h-full w-full" />
            </div>
            <div className="relative">
              <Head eyebrow={section.eyebrow} title={section.title} dark />
              <ol className="mt-14 grid gap-3 md:grid-cols-2">
                {section.steps.map((s, i) => (
                  <Reveal as="li" key={s.title} delay={(i % 2) * 90}>
                    <div className="flex h-full gap-5 rounded-[18px] border border-white/15 bg-lv-ink/30 p-6 backdrop-blur">
                      <span className="text-[34px] font-semibold leading-none tracking-[-0.04em] text-lv-300">{pad(i)}</span>
                      <div>
                        <h3 className="text-[17px] font-semibold">{s.title}</h3>
                        <p className="mt-2 text-[14px] leading-[1.6] text-white/70">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </GrainField>
        </Frame>
      );

    case "outcomes":
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} />
          <div className={`mt-14 grid gap-3 ${section.items.length === 3 ? "md:grid-cols-3" : cols(section.items.length)}`}>
            {section.items.map((it, i) => {
              const lead = i === 1 || section.items.length === 1;
              return (
                <Reveal key={it.title} delay={i * 90}>
                  {lead ? (
                    <GrainField tone="blue" grain={0.3} className="flex h-full min-h-[240px] flex-col rounded-[22px] p-7 text-white">
                      <span className="relative text-[13px] font-medium text-white/70">{pad(i)}</span>
                      <h3 className="relative mt-auto pt-10 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em]">{it.title}</h3>
                      <p className="relative mt-3 text-[14px] leading-[1.6] text-white/85">{it.body}</p>
                    </GrainField>
                  ) : (
                    <div className="flex h-full min-h-[240px] flex-col rounded-[22px] border border-lv-ink/10 bg-white p-7">
                      <span className="text-[13px] font-medium text-lv-ink/35">{pad(i)}</span>
                      <h3 className="mt-auto pt-10 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em]">{it.title}</h3>
                      <p className="mt-3 text-[14px] leading-[1.6] text-lv-ink/65">{it.body}</p>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Light>
      );

    case "stats": {
      const tones = ["sky", "blue", "ink"] as const;
      return (
        <section className="bg-white py-24 lg:py-28">
          <div className={WRAP}>
            <Head eyebrow={section.eyebrow} title={section.title} />
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {section.items.map((it, i) => {
                const tone = tones[i % 3];
                const inner = (
                  <>
                    <span className={`relative text-[52px] font-semibold leading-none tracking-[-0.05em] lg:text-[64px]`}>{it.value}</span>
                    <div className="relative mt-auto pt-10">
                      <div className="text-[16px] font-semibold">{it.title}</div>
                      <div className={`mt-1.5 text-[14px] leading-[1.55] ${tone === "sky" ? "text-lv-ink/65" : "text-white/75"}`}>{it.body}</div>
                    </div>
                  </>
                );
                return (
                  <Reveal key={it.title} delay={i * 90}>
                    {tone === "ink" ? (
                      <div className="flex h-full min-h-[260px] flex-col rounded-[22px] bg-lv-ink p-7 text-white">{inner}</div>
                    ) : (
                      <GrainField tone={tone} grain={0.26} className={`flex h-full min-h-[260px] flex-col rounded-[22px] p-7 ${tone === "blue" ? "text-white" : ""}`}>
                        {inner}
                      </GrainField>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      );
    }

    case "platform": {
      const pillars = section.variant === "pillars";
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
          <div className={`mt-14 grid gap-3 md:grid-cols-2 ${section.links.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
            {section.links.map((l, i) => (
              <Reveal key={l.title} delay={(i % 3) * 80}>
                <a
                  href={l.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-lv-ink/10 bg-white p-7 transition-colors duration-500 hover:border-lv-blue/40"
                >
                  <div className="absolute -right-16 -top-16 h-56 w-56 text-lv-blue/15 transition-colors duration-500 group-hover:text-lv-blue/40">
                    <OrbitLines className="mk-spin-slow h-full w-full" />
                  </div>
                  <GrainField tone={i % 2 ? "deep" : "blue"} grain={0.3} className="flex h-12 w-12 items-center justify-center rounded-[14px] text-white transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="relative text-[13px] font-semibold">{pad(i)}</span>
                  </GrainField>
                  {pillars && l.eyebrow && <span className="relative mt-8 text-[13px] text-lv-ink/55">{l.eyebrow}</span>}
                  <h3 className={`relative font-semibold tracking-[-0.03em] ${pillars ? "mt-1 text-[30px] leading-[1.05]" : "mt-8 text-[20px] leading-[1.2]"}`}>{l.title}</h3>
                  <p className="relative mt-3 flex-1 text-[14px] leading-[1.6] text-lv-ink/65">{l.body}</p>
                  {pillars ? (
                    <span className="relative mt-7 flex items-center gap-2 text-[14px] font-medium text-lv-blue">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <ArrowUpRight aria-hidden className="relative mt-6 h-4 w-4 text-lv-blue transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </a>
              </Reveal>
            ))}
          </div>
        </Light>
      );
    }

    case "components":
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
          <div className="mt-14 grid gap-3 md:grid-cols-2">
            {section.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 2) * 80}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-lv-ink/10 bg-white p-7 transition-colors duration-500 hover:border-lv-blue/40">
                  <div className="absolute -right-16 -top-16 h-56 w-56 text-lv-blue/15">
                    <OrbitLines className="mk-spin-slow h-full w-full" />
                  </div>
                  <h3 className="relative text-[24px] font-semibold tracking-[-0.03em]">{it.title}</h3>
                  <ul className="relative mt-5 flex-1 space-y-2.5">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-lv-ink/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-lv-blue" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href={it.href} className="relative mt-7 flex items-center gap-2 text-[14px] font-medium text-lv-blue">
                    {it.linkLabel ?? "View product"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Light>
      );

    case "table":
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} />
          <Reveal delay={160}>
            <div className="mt-12 overflow-x-auto rounded-[20px] border border-lv-ink/10 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-lv-paper/70">
                    {section.headers.map((h) => (
                      <th key={h} className="px-6 py-4 text-[12px] font-semibold text-lv-ink/55">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((r, ri) => (
                    <tr key={ri} className="border-t border-lv-ink/[0.07] transition-colors hover:bg-lv-100/50">
                      {r.map((c, ci) => (
                        <td key={ci} className={`px-6 py-4 text-[14px] leading-[1.55] ${ci === 0 ? "font-semibold" : "text-lv-ink/65"}`}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Light>
      );

    case "checklist":
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} />
          <ul className={`mt-12 grid gap-3 ${cols(section.items.length)}`}>
            {section.items.map((it, i) => (
              <Reveal as="li" key={it} delay={(i % 3) * 60}>
                <div className="flex h-full items-start gap-3.5 rounded-[16px] border border-lv-ink/10 bg-white px-5 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lv-blue text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="pt-0.5 text-[14px] leading-[1.55] text-lv-ink/75">{it}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Light>
      );

    case "people":
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((m, i) => (
              <Reveal key={m.name + i} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-lv-ink/10 bg-white">
                  <GrainField tone={i % 3 === 1 ? "deep" : i % 3 === 2 ? "sky" : "blue"} grain={0.3} className="h-20">
                    <div className="absolute -bottom-20 -right-10 h-48 w-48 text-white/25">
                      <OrbitLines className="mk-spin-slow h-full w-full" />
                    </div>
                  </GrainField>
                  <div className="flex flex-1 flex-col p-6">
                    {m.category && <span className="text-[12px] font-medium text-lv-ink/50">{m.category}</span>}
                    <h3 className="mt-1.5 text-[19px] font-semibold tracking-[-0.015em]">{m.name}</h3>
                    <div className="mt-0.5 text-[14px] font-medium text-lv-700">{m.role}</div>
                    <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-lv-ink/65">{m.bio}</p>
                    {m.note && <span className="mt-5 w-fit rounded-full bg-lv-paper px-3 py-1 text-[12px] font-medium text-lv-ink/60">{m.note}</span>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Light>
      );

    case "flow": {
      const mid = Math.floor((section.nodes.length - 1) / 2);
      return (
        <Light ground={ground}>
          <Head eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
          <Reveal delay={200}>
            <div className="mt-12 flex flex-col items-stretch gap-2 rounded-[22px] bg-white p-4 shadow-[0_30px_60px_-45px_rgba(0,84,147,0.55)] ring-1 ring-lv-ink/5 lg:flex-row lg:items-center lg:gap-0 lg:p-5">
              {section.nodes.map((n, i) => (
                <div key={n.title} className="flex flex-col items-stretch lg:flex-1 lg:flex-row lg:items-center">
                  <div
                    className={`flex-1 rounded-[16px] px-4 py-4 text-center ${
                      i === mid ? "bg-lv-blue text-white" : "bg-lv-paper"
                    }`}
                  >
                    <div className="text-[14px] font-semibold">{n.title}</div>
                    <div className={`mt-1 text-[12px] ${i === mid ? "text-white/80" : "text-lv-ink/55"}`}>{n.sub}</div>
                  </div>
                  {i < section.nodes.length - 1 && (
                    <svg aria-hidden className="mx-auto h-6 w-6 shrink-0 text-lv-blue lg:h-6 lg:w-10" viewBox="0 0 40 24" preserveAspectRatio="none">
                      <path d="M0 12H40" stroke="currentColor" strokeWidth="1.5" className="mk-flow hidden lg:block" />
                      <path d="M20 0V24" stroke="currentColor" strokeWidth="1.5" className="mk-flow lg:hidden" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Light>
      );
    }

    case "deployment":
      return (
        <Frame>
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[24px] bg-lv-ink px-6 py-20 text-white lg:px-14 lg:py-24">
            <Grain opacity={0.1} />
            <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] text-white/10">
              <OrbitLines className="mk-spin-slow h-full w-full" />
            </div>
            <div className="relative">
              <Head eyebrow={section.eyebrow} title={section.title} intro={section.intro} dark />
              <div className={`mt-14 grid gap-3 ${section.items.length === 3 ? "md:grid-cols-3" : cols(section.items.length)}`}>
                {section.items.map((it, i) => (
                  <Reveal key={it.title} delay={i * 90}>
                    <div className={`h-full rounded-[20px] p-6 ${i === 0 ? "bg-lv-blue" : "bg-white/[0.06]"}`}>
                      <span className={`text-[13px] font-medium ${i === 0 ? "text-white/75" : "text-lv-300"}`}>{pad(i)}</span>
                      <h3 className="mt-8 text-[19px] font-semibold">{it.title}</h3>
                      <p className={`mt-2.5 text-[14px] leading-[1.6] ${i === 0 ? "text-white/85" : "text-white/65"}`}>{it.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              {section.note && (
                <Reveal delay={200}>
                  <p className="mt-8 max-w-3xl text-[14px] leading-[1.6] text-white/60">{section.note}</p>
                </Reveal>
              )}
            </div>
          </div>
        </Frame>
      );

    case "note":
      return (
        <Light ground={ground}>
          <Reveal>
            <div className={`relative grid gap-8 overflow-hidden rounded-[24px] p-8 lg:grid-cols-[1fr_1.1fr] lg:p-12 ${ground === "paper" ? "bg-white" : "bg-lv-paper"}`}>
              <div className="absolute -right-24 -top-24 h-80 w-80 text-lv-blue/15">
                <OrbitLines className="mk-spin-slow h-full w-full" />
              </div>
              <div className="relative">
                <Kicker>{section.eyebrow}</Kicker>
                <h2 className="mt-5 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] lg:text-[38px]">
                  <TwoTone text={section.title} />
                </h2>
              </div>
              <div className="relative self-end">
                <p className="text-[16px] leading-[1.65] text-lv-ink/70">{section.body}</p>
                {section.cta && (
                  <Btn href={section.cta.href} tone="blue" arrow className="mt-7">
                    {section.cta.label}
                  </Btn>
                )}
              </div>
            </div>
          </Reveal>
        </Light>
      );

    case "cta":
      return (
        <Frame>
          <div
            className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[24px] px-6 pb-[34vh] pt-24 text-white lg:px-12"
            style={{ background: "linear-gradient(180deg,#005493 0%,#0078D4 45%,#8CC3EE 100%)" }}
          >
            <Grain opacity={0.3} />
            <div className="absolute inset-x-0 bottom-0 aspect-[3.2/1]">
              <Globe dot="rgba(255,255,255,0.92)" dotSize={1.2} density={1.4} arcs="#FFFFFF" marker="#FFFFFF" lon={80} lat={-30} sway={12} horizon={{ r: 0.5, top: 0.42 }} outline="rgba(255,255,255,0.7)" ocean="rgba(0,84,147,0.32)" />
            </div>
            <div className="relative">
              <h2 className="max-w-4xl text-[40px] font-semibold leading-[1] tracking-[-0.045em] lg:text-[72px]">
                <SplitWords text={section.title} stagger={45} />
              </h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                {section.body ? <p className="max-w-xl text-[16px] leading-[1.6] text-white/85">{section.body}</p> : <span />}
                <Actions ctas={section.ctas} onDark />
              </div>
            </div>
          </div>
        </Frame>
      );

    default: {
      // Exhaustiveness guard: a new section kind without a case here fails to
      // compile rather than silently rendering nothing.
      const _exhaustive: never = section;
      return _exhaustive;
    }
  }
}

const PANELS = new Set<Section["kind"]>(["hero", "how", "deployment", "cta", "stats"]);

/** Renders a page's sections; light sections alternate white and paper. */
export default function Sections({ sections }: { sections: Section[] }) {
  let light = 0;
  return (
    <>
      {sections.map((s, i) => {
        const ground = PANELS.has(s.kind) ? "white" : light++ % 2 === 0 ? "white" : "paper";
        return <SectionRenderer key={i} section={s} ground={ground} />;
      })}
    </>
  );
}
