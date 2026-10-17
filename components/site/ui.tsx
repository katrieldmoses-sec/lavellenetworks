"use client";

/**
 * Signal design system — UI primitives. See design.md §5.
 * Grain-blue panels, hairline orbit rings, flat travelling packets, Inter set
 * tight. No glow, no hue shifts. Components never contain copy.
 */
import { useEffect, useRef, type ComponentType, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { SplitWords } from "@/components/kit/Motion";

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

/**
 * Ink lead, muted tail. The words are unchanged; only their colour splits.
 * `lead` defaults to roughly the first 40% of the words (min 2).
 */
export function TwoTone({ text, lead, tail = "text-lv-ink/35" }: { text: string; lead?: number; tail?: string }) {
  const w = text.split(" ");
  if (lead === undefined) lead = Math.max(2, Math.round(w.length * 0.4));
  if (w.length <= lead) return <>{text}</>;
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

/** Expanded caps accent (Archivo, wdth 125) — once per page at most. */
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

/* ------------------------------------------------------------ decoration */

/** Three tilted ellipses — orbit-line decoration for cards and panels. */
export function OrbitLines({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={`pointer-events-none ${className}`}>
      <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" />
      <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" transform="rotate(60 100 100)" />
      <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="currentColor" transform="rotate(120 100 100)" />
    </svg>
  );
}

/** Standard content width. */
export const WRAP = "mx-auto max-w-[1320px] px-6";
