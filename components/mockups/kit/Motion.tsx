"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";

/* ------------------------------------------------------------------------- */
/* Hooks                                                                     */
/* ------------------------------------------------------------------------- */

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useInView<T extends Element>(
  opts: { once?: boolean; threshold?: number; rootMargin?: string } = {},
): [RefObject<T>, boolean] {
  const { once = true, threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = opts;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReduced()) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) setInView(false);
      },
      { threshold, rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [once, threshold, rootMargin]);
  return [ref, inView];
}

/** 0 → 1 as the element travels from entering the viewport bottom to leaving the top. */
export function useScrollProgress<T extends HTMLElement>(): [RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh;
      setP(Math.min(1, Math.max(0, (vh - r.top) / total)));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return [ref, p];
}

/** Progress through a tall sticky container: 0 at its top, 1 when its bottom meets the viewport bottom. */
export function useStickyProgress<T extends HTMLElement>(): [RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      setP(span <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / span)));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return [ref, p];
}

/* ------------------------------------------------------------------------- */
/* Reveal                                                                    */
/* ------------------------------------------------------------------------- */

type RevealVariant = "up" | "fade" | "scale" | "left" | "right" | "clip";

const HIDDEN: Record<RevealVariant, CSSProperties> = {
  up: { opacity: 0, transform: "translate3d(0,28px,0)" },
  fade: { opacity: 0 },
  scale: { opacity: 0, transform: "scale(0.96)" },
  left: { opacity: 0, transform: "translate3d(-32px,0,0)" },
  right: { opacity: 0, transform: "translate3d(32px,0,0)" },
  clip: { clipPath: "inset(0 0 100% 0)", transform: "translate3d(0,16px,0)" },
};
const SHOWN: CSSProperties = { opacity: 1, transform: "none" };
// Only the clip variant animates clip-path; elsewhere it would clip any
// child that overhangs the revealed box (floating chips, shadows).
const SHOWN_CLIP: CSSProperties = { ...SHOWN, clipPath: "inset(0 0 0% 0)" };

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 900,
  variant = "up",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: RevealVariant;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
}) {
  const [ref, inView] = useInView<HTMLElement>();
  const C = Tag as any;
  return (
    <C
      ref={ref}
      className={className}
      style={{
        ...(inView ? (variant === "clip" ? SHOWN_CLIP : SHOWN) : HIDDEN[variant]),
        transition: `opacity ${duration}ms cubic-bezier(.2,.7,.1,1) ${delay}ms, transform ${duration}ms cubic-bezier(.2,.7,.1,1) ${delay}ms${
          variant === "clip" ? `, clip-path ${duration}ms cubic-bezier(.7,0,.2,1) ${delay}ms` : ""
        }`,
        ...style,
      }}
    >
      {children}
    </C>
  );
}

/**
 * Splits text into words that rise out of a mask, one after another. Spaces
 * stay as real text nodes so the copy reads naturally to crawlers and
 * screen readers.
 */
export function SplitWords({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 70,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const [ref, inView] = useInView<HTMLElement>();
  const words = text.split(" ");
  const C = Tag as any;
  return (
    <C ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <span
              className={`inline-block ${wordClassName}`}
              style={{
                transform: inView ? "translate3d(0,0,0)" : "translate3d(0,110%,0)",
                transition: `transform 1000ms cubic-bezier(.2,.75,.1,1) ${delay + i * stagger}ms`,
              }}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </C>
  );
}

/* ------------------------------------------------------------------------- */
/* Count                                                                     */
/* ------------------------------------------------------------------------- */

/**
 * Counts up when scrolled into view. Server-renders the final value so the
 * number is correct without JavaScript; resets just before animating.
 */
export function Count({
  end,
  suffix = "",
  separator = false,
  duration = 1800,
  className = "",
}: {
  end: number;
  suffix?: string;
  separator?: boolean;
  duration?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [v, setV] = useState(end);
  const armed = useRef(false);

  useEffect(() => {
    if (prefersReduced()) return;
    // Arm below the fold: drop to zero before the reader sees it.
    const el = ref.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight) {
      armed.current = true;
      setV(0);
    }
  }, [ref]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const e = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setV(Math.round(e * end));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {separator ? v.toLocaleString("en-IN") : v}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------------- */
/* Marquee                                                                   */
/* ------------------------------------------------------------------------- */

export function Marquee({
  children,
  className = "",
  duration = 40,
  reverse = false,
  gap = "3rem",
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
  gap?: string;
}) {
  return (
    <div className={`mk-marquee overflow-hidden ${className}`}>
      <div
        className="mk-marquee-track flex w-max"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
          gap,
        }}
      >
        <div className="flex shrink-0" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap }} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Draw-on SVG stroke (hand-drawn ellipse, underlines, routes)               */
/* ------------------------------------------------------------------------- */

export function DrawPath({
  d,
  className = "",
  stroke = "currentColor",
  width = 2,
  viewBox,
  delay = 0,
  duration = 1400,
  preserveAspectRatio = "none",
}: {
  d: string;
  className?: string;
  stroke?: string;
  width?: number;
  viewBox: string;
  delay?: number;
  duration?: number;
  preserveAspectRatio?: string;
}) {
  const [ref, inView] = useInView<SVGSVGElement>();
  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      className={className}
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden
      fill="none"
    >
      <path
        d={d}
        stroke={stroke}
        strokeWidth={width}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: inView ? 0 : 1,
          transition: `stroke-dashoffset ${duration}ms cubic-bezier(.65,0,.35,1) ${delay}ms`,
        }}
      />
    </svg>
  );
}
