"use client";

/**
 * Shared building blocks for the Signal series (/mockup/signal-1…5).
 * Signal's language: grain-blue panels, thin orbit rings around the earth,
 * flat travelling "packets" on the rings, Inter set tight. No glow, no hue.
 */
import { useEffect, useRef, type ComponentType, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { CHROME } from "@/lib/content/home";
import { FOOTER_COLUMNS, FOOTER_LEGAL } from "@/lib/content/footer";
import { SplitWords } from "../kit/Motion";
import { Lockup, NavMenu, MobileNav, GrainField } from "../kit/Brand";

export type Ico = ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ type */

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[13px] font-medium ${light ? "text-white/80" : "text-lv-ink/60"}`}>
      <span className={`h-px w-6 ${light ? "bg-white/60" : "bg-lv-blue"}`} />
      {children}
    </span>
  );
}

/** Ink lead, muted tail (Bloom / Solara). */
export function TwoTone({ text, lead, tail = "text-lv-ink/35" }: { text: string; lead: number; tail?: string }) {
  const w = text.split(" ");
  return (
    <>
      {w.slice(0, lead).join(" ")} <span className={tail}>{w.slice(lead).join(" ")}</span>
    </>
  );
}

export function H2({
  children,
  className = "",
  split = true,
}: {
  children: ReactNode;
  className?: string;
  split?: boolean;
}) {
  return (
    <h2 className={`mt-5 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] lg:text-[50px] ${className}`}>
      {split && typeof children === "string" ? <SplitWords text={children} stagger={30} /> : children}
    </h2>
  );
}

/** Expanded caps accent (Atlas). */
export const XCAPS = "font-m-accent font-extrabold uppercase [font-stretch:125%] tracking-[-0.01em]";

/* ---------------------------------------------------------------- buttons */

export function Btn({
  href,
  children,
  tone = "blue",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "blue" | "white" | "ink" | "ghost-light" | "ghost-dark";
  arrow?: boolean;
  className?: string;
}) {
  const t = {
    blue: "bg-lv-blue text-white hover:bg-lv-600",
    white: "bg-white text-lv-ink hover:bg-lv-100",
    ink: "bg-lv-ink text-white hover:bg-lv-blue",
    "ghost-light": "border border-white/40 text-white hover:bg-white/10",
    "ghost-dark": "border border-lv-ink/20 text-lv-ink hover:border-lv-ink/50",
  }[tone];
  return (
    <a href={href} className={`group inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-[14px] font-medium transition-colors ${t} ${className}`}>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </a>
  );
}

/* ------------------------------------------------------------------ orbit */

export type OrbitItem = { label: string; icon: Ico };

/**
 * Items on a turning ring; labels stay upright. Optional:
 * - packets: flat dashes that travel round the ring (data in transit)
 * - spokes: dashed links from the globe's edge out to each chip
 */
export function Orbit({
  items,
  radius,
  duration = 120,
  chip,
  offset = 0,
  still = false,
  compact = false,
  packets,
  packetSpeed = 9,
  spokes,
  spokeFrom = 0.74,
  dim = false,
}: {
  items: OrbitItem[];
  radius: number;
  duration?: number;
  chip: string;
  offset?: number;
  still?: boolean;
  compact?: boolean;
  /** Colour of travelling packets; omit for none. */
  packets?: string;
  packetSpeed?: number;
  /** Colour of spokes; omit for none. */
  spokes?: string;
  /** Spoke start, as a fraction of this ring's radius. */
  spokeFrom?: number;
  /** Fade this ring back (used when another ring is focused). */
  dim?: boolean;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-current transition-opacity duration-500"
      style={{ width: `${radius * 2}%`, height: `${radius * 2}%`, transform: "translate(-50%,-50%)", opacity: dim ? 0.25 : 1 }}
    >
      {packets && (
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="none"
            stroke={packets}
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={100}
            vectorEffect="non-scaling-stroke"
            className="mk-ring-packet"
            style={{ animationDuration: `${packetSpeed}s` }}
          />
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="none"
            stroke={packets}
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={100}
            vectorEffect="non-scaling-stroke"
            className="mk-ring-packet"
            style={{ animationDuration: `${packetSpeed * 1.6}s`, animationDelay: `-${packetSpeed * 0.7}s` }}
          />
        </svg>
      )}
      <div className={`absolute inset-0 ${still ? "" : "mk-spin"}`} style={{ animationDuration: `${duration}s` }}>
        {spokes && (
          <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
            {items.map((it, i) => {
              const a = (i / items.length + offset) * Math.PI * 2;
              const c = Math.cos(a);
              const s = Math.sin(a);
              return (
                <line
                  key={it.label}
                  x1={(50 + c * 50 * spokeFrom).toFixed(2)}
                  y1={(50 + s * 50 * spokeFrom).toFixed(2)}
                  x2={(50 + c * 50 * 0.97).toFixed(2)}
                  y2={(50 + s * 50 * 0.97).toFixed(2)}
                  stroke={spokes}
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  className="mk-flow"
                />
              );
            })}
          </svg>
        )}
        {items.map((it, i) => {
          const a = (i / items.length + offset) * Math.PI * 2;
          return (
            <div
              key={it.label}
              className="absolute"
              style={{ left: `${(50 + Math.cos(a) * 50).toFixed(3)}%`, top: `${(50 + Math.sin(a) * 50).toFixed(3)}%` }}
            >
              <div className={still ? "" : "mk-spin"} style={{ animationDuration: `${duration}s`, animationDirection: "reverse" }}>
                <span
                  className={`flex -translate-x-1/2 -translate-y-1/2 items-center whitespace-nowrap rounded-full font-medium ${
                    compact ? "gap-1 px-2.5 py-1 text-[11px]" : "gap-1.5 px-3 py-1.5 text-[12px]"
                  } ${chip}`}
                >
                  <it.icon className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
                  {it.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- pointer */

/**
 * Writes eased pointer position (-1…1) to --mx / --my on the element, for
 * CSS parallax. Off under reduced motion and on coarse pointers.
 */
export function usePointerVars<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      el.style.setProperty("--mx", x.toFixed(4));
      el.style.setProperty("--my", y.toFixed(4));
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const leave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

/* -------------------------------------------------------------------- nav */

export function SignalNav({ dark = false }: { dark?: boolean }) {
  return (
    <header className="relative z-50">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center gap-10 px-6">
        <Lockup tone={dark ? "white" : "ink"} height={28} priority />
        <NavMenu
          className="gap-6"
          theme={{
            trigger: `py-2 text-[14px] font-medium ${dark ? "text-white/70 hover:text-white" : "text-lv-ink/70 hover:text-lv-ink"}`,
            triggerOpen: dark ? "text-white" : "text-lv-blue",
            panel: "rounded-[16px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,84,147,0.4)] ring-1 ring-lv-ink/5",
            heading: "text-[11px] font-semibold text-lv-blue",
            link: "py-1.5 text-[14px] text-lv-ink/75 hover:text-lv-ink",
          }}
        />
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <a href={CHROME.headerCtas.expert.href} className={`text-[14px] font-medium ${dark ? "text-white/70" : "text-lv-ink/70"}`}>
            {CHROME.headerCtas.expert.label}
          </a>
          <a href={CHROME.headerCtas.demo.href} className="rounded-[10px] bg-lv-blue px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-lv-600">
            {CHROME.headerCtas.demo.label}
          </a>
        </div>
        <MobileNav tone={dark ? "dark" : "light"} className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------- footer */

/** Signal's footer: deep grain panel ending in the oversized sign-off. */
export function SignalFooter() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <GrainField tone="deep" grain={0.3} className="mx-auto max-w-[1400px] rounded-[24px] px-6 pt-14 text-white lg:px-14">
        <div className="relative">
          <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-0.025em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-white/70">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="rounded-[10px] border border-white/30 px-5 py-3 text-[13px] font-medium hover:bg-white/10">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-[10px] bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 py-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="white" height={28} />
              <p className="mt-6 max-w-xs text-[13px] leading-[1.65] text-white/65">{CHROME.footerBrand.blurb}</p>
              <ul className="mt-6 space-y-1.5 text-[13px] text-white/75">
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
                  <h4 className="text-[12px] font-semibold text-lv-300">{c.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-[13px] text-white/75 hover:text-white">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-6 text-[12px] text-white/55 sm:flex-row">
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
          <SignOff />
        </div>
      </GrainField>
    </footer>
  );
}

/** Oversized sign-off; letters rise in as the footer arrives. */
function SignOff() {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.on = "1";
      return;
    }
    const io = new IntersectionObserver(([e]) => e.isIntersecting && ((el.dataset.on = "1"), io.disconnect()), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const words = CHROME.footerBrand.tagline.split(" ");
  return (
    <p
      ref={ref}
      className="mk-signoff select-none whitespace-nowrap pb-2 pt-4 text-[8.6vw] font-semibold leading-[0.95] tracking-[-0.05em] text-white/90 lg:text-[118px]"
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.06em] align-bottom">
            <span className="mk-signoff-word inline-block" style={{ transitionDelay: `${i * 110}ms` }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}
