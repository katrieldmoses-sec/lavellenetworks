"use client";

import Image from "next/image";
import { useState, type CSSProperties, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { NAV } from "@/lib/content/nav";

/* ------------------------------------------------------------------------- */
/* Identity-kit artwork                                                      */
/* ------------------------------------------------------------------------- */

/**
 * The supplied lockup — never retyped. `white` for ink and blue fields, `ink`
 * for white and paper (identity kit, section 06). Height in px; the kit's
 * 1/2 X clear space is the caller's job.
 */
export function Lockup({
  tone,
  height = 28,
  className = "",
  priority = false,
}: {
  tone: "white" | "ink";
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <a href="/" aria-label="Lavelle Networks home" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src={`/brand/logo-${tone}.png`}
        alt="Lavelle Networks"
        width={1750}
        height={378}
        priority={priority}
        style={{ height, width: "auto" }}
      />
    </a>
  );
}

/**
 * The bird square alone (identity kit, section 03). Never below 24px.
 * `square` = white square, ink bird — for paper, white and blue grounds.
 * `white`  = knockout white — for ink grounds.
 */
export function Mark({
  tone,
  size = 32,
  className = "",
}: {
  tone: "white" | "square";
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={`/brand/mark-${tone}.png`}
      alt=""
      aria-hidden
      width={tone === "square" ? 342 : 344}
      height={377}
      className={className}
      style={{ height: Math.max(24, size), width: "auto" }}
    />
  );
}

/* ------------------------------------------------------------------------- */
/* Grain                                                                     */
/* ------------------------------------------------------------------------- */

/**
 * Film-grain overlay. Static SVG turbulence as a data URI — no runtime cost,
 * no extra request, permitted by the img-src 'self' data: CSP.
 */
export function Grain({
  opacity = 0.18,
  blend = "overlay",
  className = "",
}: {
  opacity?: number;
  blend?: CSSProperties["mixBlendMode"];
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`mk-grain pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity, mixBlendMode: blend }}
    />
  );
}

/**
 * Grainy gradient field in the brand ramp only — blue, its tints, ink and
 * paper. Tonal, not luminous: no hue shifts and no glow.
 */
export function GrainField({
  tone = "blue",
  className = "",
  grain = 0.22,
  children,
}: {
  tone?: "blue" | "deep" | "sky" | "ink" | "paper" | "dusk";
  className?: string;
  grain?: number;
  children?: ReactNode;
}) {
  const bg: Record<string, string> = {
    // brand blue resolving into blue-700
    blue: "radial-gradient(120% 90% at 85% 10%, #8CC3EE 0%, #0078D4 38%, #005493 100%)",
    // blue-700 sinking into ink
    deep: "radial-gradient(110% 80% at 80% 0%, #0068B8 0%, #005493 35%, #201E1D 100%)",
    // pale sky: blue-100/200 over white
    sky: "radial-gradient(90% 70% at 20% 0%, #FFFFFF 0%, #E5F1FB 40%, #8CC3EE 100%)",
    // ink with a faint blue-700 floor
    ink: "radial-gradient(120% 70% at 50% 120%, #005493 0%, #201E1D 60%)",
    // paper to blue-100
    paper: "radial-gradient(100% 80% at 80% 100%, #C2DFF6 0%, #F3F2F2 55%)",
    // ink overhead, blue-300 horizon
    dusk: "linear-gradient(180deg, #201E1D 0%, #005493 55%, #8CC3EE 100%)",
  };
  // Respect a caller-supplied position; otherwise establish a stacking box.
  const pos = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className) ? "" : "relative";
  return (
    <div className={`${pos} overflow-hidden ${className}`} style={{ background: bg[tone] }}>
      <Grain opacity={grain} />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Navigation                                                                */
/* ------------------------------------------------------------------------- */

export type NavTheme = {
  /** Classes for each top-level trigger. */
  trigger: string;
  /** Extra classes on the trigger whose panel is open. */
  triggerOpen?: string;
  /** Dropdown panel surface. */
  panel: string;
  /** Group headings inside mega panels. */
  heading: string;
  /** Links inside panels. */
  link: string;
  /** Show the chevron. */
  chevron?: boolean;
  /** Uppercase top-level labels. */
  upper?: boolean;
};

/**
 * Full site navigation with dropdowns, styled per mockup. Panels stay in the
 * DOM (crawlable) and toggle with CSS, matching the live header.
 */
export function NavMenu({ theme, className = "" }: { theme: NavTheme; className?: string }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <nav
      aria-label="Main navigation"
      className={`hidden items-center lg:flex ${className}`}
      onMouseLeave={() => setOpen(null)}
    >
      {NAV.map((entry) => {
        const isOpen = open === entry.label;
        return (
          <div
            key={entry.label}
            className="relative"
            onMouseEnter={() => setOpen(entry.label)}
            onFocus={() => setOpen(entry.label)}
          >
            <a
              href={entry.href}
              aria-expanded={isOpen}
              className={`flex items-center gap-1.5 ${theme.upper ? "uppercase" : ""} ${theme.trigger} ${
                isOpen ? theme.triggerOpen ?? "" : ""
              }`}
            >
              {entry.label}
              {theme.chevron !== false && (
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              )}
            </a>
            <div
              aria-hidden={!isOpen}
              className={`absolute left-0 top-full z-50 pt-3 transition-all duration-300 ${
                isOpen
                  ? "visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-1 opacity-0"
              }`}
              style={{ width: entry.panelWidth }}
            >
              <div className={theme.panel}>
                {entry.groups ? (
                  <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                    {entry.groups.map((g) => (
                      <div key={g.label}>
                        <span className={`block ${theme.heading}`}>{g.label}</span>
                        <ul className="mt-2">
                          {g.items.map((it) => (
                            <li key={it.name}>
                              <a href={it.href} className={`block ${theme.link}`}>
                                {it.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul>
                    {entry.items?.map((it) => (
                      <li key={it.name}>
                        <a href={it.href} className={`block ${theme.link}`}>
                          {it.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

/* ------------------------------------------------------------------------- */
/* Small shared bits                                                         */
/* ------------------------------------------------------------------------- */

/** Four-point sparkle, drawn flat (Trekcave / GreenBank detail). */
export function Sparkle({ className = "", size = 18 }: { className?: string; size?: number }) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z" />
    </svg>
  );
}

/**
 * Mobile navigation sheet. Lists every nav destination plus the two header
 * CTAs. `tone` picks the sheet surface; the font is inherited.
 */
export function MobileNav({
  tone = "light",
  className = "",
  ctas,
}: {
  tone?: "light" | "dark";
  className?: string;
  ctas: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const dark = tone === "dark";
  return (
    <div className={`lg:hidden ${className}`}>
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full ${
          dark ? "text-white" : "text-lv-ink"
        }`}
      >
        <span
          className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>
      <div
        className={`fixed inset-0 z-[60] overflow-y-auto px-6 pb-12 pt-24 transition-opacity duration-300 ${
          dark ? "bg-lv-ink text-white" : "bg-lv-paper text-lv-ink"
        } ${open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
      >
        {NAV.map((entry) => (
          <div key={entry.label} className={`border-b py-5 ${dark ? "border-white/10" : "border-lv-ink/10"}`}>
            <a href={entry.href} className="text-2xl font-medium" onClick={() => setOpen(false)}>
              {entry.label}
            </a>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {(entry.groups ? entry.groups.flatMap((g) => g.items) : entry.items ?? []).map((it) => (
                <li key={it.name}>
                  <a
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm ${dark ? "text-white/60" : "text-lv-ink/60"}`}
                  >
                    {it.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-8 flex flex-col gap-3">
          {ctas.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              className={`rounded-full px-5 py-3.5 text-center text-sm font-medium ${
                i === ctas.length - 1
                  ? "bg-lv-blue text-white"
                  : dark
                    ? "border border-white/20"
                    : "border border-lv-ink/20"
              }`}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
