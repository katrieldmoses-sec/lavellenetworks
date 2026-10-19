/**
 * Scene kit for page heroes (design.md §5, "Page-hero scenes").
 *
 * A scene is a square Stage: an SVG layer (viewBox 0–100) for hairline wires
 * and an HTML layer for icon chips placed at percentage coordinates. Scenes
 * are decoration only — aria-hidden, no copy — drawn flat in white and the
 * brand ramp over the hero's blue grain. All motion is CSS and stops under
 * prefers-reduced-motion.
 */
import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ stage */

export function Stage({ svg, children, className = "" }: { svg?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none relative aspect-square w-full select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" fill="none">
        {svg}
      </svg>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------- chip */

type Tone = "white" | "glass" | "ink" | "blue";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const SIZE: Record<Size, { box: string; icon: string; r: string }> = {
  xs: { box: "h-7 w-7", icon: "h-3.5 w-3.5", r: "rounded-[9px]" },
  sm: { box: "h-9 w-9", icon: "h-4 w-4", r: "rounded-[11px]" },
  md: { box: "h-12 w-12", icon: "h-5 w-5", r: "rounded-[14px]" },
  lg: { box: "h-16 w-16", icon: "h-7 w-7", r: "rounded-[18px]" },
  xl: { box: "h-[88px] w-[88px]", icon: "h-9 w-9", r: "rounded-[24px]" },
};

const TONE: Record<Tone, string> = {
  white: "bg-white text-lv-blue shadow-[0_18px_40px_-22px_rgba(0,40,90,0.65)]",
  glass: "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm",
  ink: "bg-lv-ink text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.7)]",
  blue: "bg-lv-blue text-white ring-1 ring-white/40",
};

/** An icon tile centred on (x, y) in percent. */
export function Chip({
  x,
  y,
  icon: Icon,
  tone = "white",
  size = "md",
  round = false,
  pulse = false,
  float,
  className = "",
  style,
}: {
  x: number;
  y: number;
  icon: LucideIcon;
  tone?: Tone;
  size?: Size;
  round?: boolean;
  pulse?: boolean;
  /** "a" or "b" for the two float phases. */
  float?: "a" | "b";
  className?: string;
  style?: CSSProperties;
}) {
  const s = SIZE[size];
  return (
    <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
      {pulse && (
        <span
          className={`mk-pulse-ring absolute left-0 top-0 ${s.box} ${round ? "rounded-full" : s.r} border border-white/70`}
        />
      )}
      <div className={float === "a" ? "mk-float" : float === "b" ? "mk-float-b" : ""}>
        <div
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ${s.box} ${round ? "rounded-full" : s.r} ${TONE[tone]} ${className}`}
          style={style}
        >
          <Icon className={s.icon} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}

/** A small round status dot centred on (x, y). */
export function Dot({ x, y, className = "bg-white", size = 8, style }: { x: number; y: number; className?: string; size?: number; style?: CSSProperties }) {
  return (
    <span
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${className}`}
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, ...style }}
    />
  );
}

/** Flat expanding rings around (x, y) — signal / pulse. */
export function Pulse({ x, y, size = 120, count = 2, period = 3, className = "border-white/60" }: { x: number; y: number; size?: number; count?: number; period?: number; className?: string }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`mk-pulse-ring absolute rounded-full border ${className}`}
          style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDuration: `${period}s`, animationDelay: `${(-period / count) * i}s` }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------- wire */

/**
 * A hairline path with optional packets (short dashes travelling along it).
 * `strength` sets the base line; packets are always crisp white.
 */
export function Wire({
  d,
  packets = 0,
  speed = 2.8,
  delay = 0,
  strength = "base",
  dashed = false,
  colour = "#FFFFFF",
  className = "",
  style,
}: {
  d: string;
  packets?: number;
  speed?: number;
  delay?: number;
  strength?: "faint" | "base" | "bright";
  dashed?: boolean;
  colour?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const op = strength === "faint" ? 0.18 : strength === "bright" ? 0.85 : 0.4;
  return (
    <g className={className} style={style}>
      <path d={d} stroke={colour} strokeOpacity={op} strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeDasharray={dashed ? "3 5" : undefined} strokeLinecap="round" />
      {Array.from({ length: packets }).map((_, i) => (
        <path
          key={i}
          d={d}
          pathLength={100}
          stroke={colour}
          strokeWidth={2.6}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="mk-wire"
          style={{ animationDuration: `${speed}s`, animationDelay: `${delay - (speed / packets) * i}s` }}
        />
      ))}
    </g>
  );
}

/** Quadratic curve from (x1,y1) to (x2,y2), bowed by `bend` (perpendicular, in units). */
export function curve(x1: number, y1: number, x2: number, y2: number, bend = 0) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const cx = mx + (-dy / len) * bend;
  const cy = my + (dx / len) * bend;
  return `M${x1} ${y1} Q${cx.toFixed(2)} ${cy.toFixed(2)} ${x2} ${y2}`;
}

/** Glass panel placed by percent box. */
export function Panel({ x, y, w, h, children, className = "" }: { x: number; y: number; w: number; h: number; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[18px] bg-white/10 ring-1 ring-white/25 backdrop-blur-[3px] ${className}`}
      style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }}
    >
      {children}
    </div>
  );
}
