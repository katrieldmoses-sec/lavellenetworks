"use client";

import { useEffect, useRef } from "react";
import { landPoints } from "./landmask";

/**
 * Dotted earth rendered to canvas with an orthographic projection.
 *
 * Deliberately flat: no bloom, no glow, no hue shifts. Depth comes only from
 * dot opacity falling off toward the limb. Arcs are thin lines with a single
 * travelling dot. Rendering pauses off-screen and under reduced motion.
 */

type LatLon = [number, number];

const BANGALORE: LatLon = [12.97, 77.59];
/**
 * Network hubs that arcs fan out to from Bangalore. Unlabelled, and kept
 * within ~60 degrees so arcs stay on the visible face instead of streaking
 * across the disc.
 */
const HUBS: LatLon[] = [
  [19.08, 72.88], // Mumbai
  [28.61, 77.21], // Delhi
  [22.57, 88.36], // Kolkata
  [25.2, 55.27], // Dubai
  [1.35, 103.82], // Singapore
  [22.32, 114.17], // Hong Kong
  [-6.2, 106.85], // Jakarta
  [35.68, 139.69], // Tokyo
];

export type GlobeProps = {
  className?: string;
  /** Dot colour (any CSS colour). */
  dot?: string;
  /** Dot radius in CSS px. */
  dotSize?: number;
  /** Land sampling step in degrees. Smaller = denser. */
  density?: number;
  /** Disc fill behind the dots; omit for transparent. */
  ocean?: string;
  /** Limb outline colour; omit for none. */
  outline?: string;
  /** Draw a latitude/longitude graticule in this colour. */
  graticule?: string;
  /** Network arcs from Bangalore, in this colour. */
  arcs?: string;
  /** Marker colour for Bangalore and the hubs. Defaults to `arcs`. */
  marker?: string;
  /** Degrees per second of spin. 0 = static. */
  speed?: number;
  /** Initial centre longitude, and the tilt (centre latitude). */
  lon?: number;
  lat?: number;
  /** Rock gently around `lon` instead of spinning all the way round. */
  sway?: number;
  /**
   * Placement within the canvas: centre x as a fraction of width, centre y
   * as a fraction of height, radius as a fraction of width. Default fits
   * the disc to the box. Use cy > 1 for a horizon / earth-curvature crop.
   */
  frame?: { cx: number; cy: number; r: number };
  /**
   * Horizon crop: the top of the planet rising into the box. The curve is
   * placed from the box's real aspect ratio, so it sits correctly at every
   * width. `r` = radius as a fraction of width, `top` = where the planet's
   * edge sits as a fraction of height, `cx` = horizontal centre.
   */
  horizon?: { r: number; top?: number; cx?: number };
  /** Allow drag-to-rotate. */
  draggable?: boolean;
};

export default function Globe({
  className = "",
  dot = "rgba(32,30,29,0.55)",
  dotSize = 1.1,
  density = 2,
  ocean,
  outline,
  graticule,
  arcs,
  marker,
  speed = 4,
  lon = 78,
  lat = 18,
  sway = 0,
  frame,
  horizon,
  draggable = false,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Key the effect on the frame's values, not its identity, so inline object
  // literals from a re-rendering parent don't restart the renderer.
  const frameKey = frame ? `${frame.cx},${frame.cy},${frame.r}` : "";
  const horizonKey = horizon ? `${horizon.r},${horizon.top ?? 0.1},${horizon.cx ?? 0.5}` : "";

  useEffect(() => {
    const fr = frameKey
      ? (() => {
          const [cx, cy, r] = frameKey.split(",").map(Number);
          return { cx, cy, r };
        })()
      : null;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const D2R = Math.PI / 180;

    // Precompute unit vectors for land dots.
    const pts = landPoints(density).map(([la, lo]) => {
      const a = la * D2R;
      const b = lo * D2R;
      return [Math.cos(a) * Math.cos(b), Math.cos(a) * Math.sin(b), Math.sin(a)] as const;
    });

    const vec = ([la, lo]: LatLon) => {
      const a = la * D2R;
      const b = lo * D2R;
      return [Math.cos(a) * Math.cos(b), Math.cos(a) * Math.sin(b), Math.sin(a)] as const;
    };

    // Great-circle arcs, lifted above the surface mid-way.
    const arcPaths = arcs
      ? HUBS.map((h, i) => {
          const p = vec(BANGALORE);
          const q = vec(h);
          const dot3 = p[0] * q[0] + p[1] * q[1] + p[2] * q[2];
          const omega = Math.acos(Math.min(1, Math.max(-1, dot3)));
          const steps = 48;
          const lift = 0.015 + omega * 0.07;
          const out: (readonly [number, number, number])[] = [];
          for (let s = 0; s <= steps; s++) {
            const t = s / steps;
            const k1 = Math.sin((1 - t) * omega) / Math.sin(omega);
            const k2 = Math.sin(t * omega) / Math.sin(omega);
            const m = 1 + lift * Math.sin(Math.PI * t);
            out.push([
              (k1 * p[0] + k2 * q[0]) * m,
              (k1 * p[1] + k2 * q[1]) * m,
              (k1 * p[2] + k2 * q[2]) * m,
            ] as const);
          }
          return { pts: out, phase: (i * 0.37) % 1 };
        })
      : [];

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let rotLon = lon;
    let rotLat = lat;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const project = (
      v: readonly [number, number, number],
      cx: number,
      cy: number,
      r: number,
    ) => {
      // Rotate so (rotLat, rotLon) faces the viewer.
      const l0 = rotLon * D2R;
      const p0 = rotLat * D2R;
      const cosL = Math.cos(-l0);
      const sinL = Math.sin(-l0);
      // rotate around z by -lon
      const x1 = v[0] * cosL - v[1] * sinL;
      const y1 = v[0] * sinL + v[1] * cosL;
      const z1 = v[2];
      // rotate around y by lat (tilt)
      const cosP = Math.cos(p0);
      const sinP = Math.sin(p0);
      const x2 = x1 * cosP + z1 * sinP; // depth toward viewer
      const z2 = -x1 * sinP + z1 * cosP;
      return { sx: cx + y1 * r, sy: cy - z2 * r, depth: x2 };
    };

    let raf = 0;
    let running = false;
    let last = performance.now();
    let clock = 0;

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const hz = horizonKey ? horizonKey.split(",").map(Number) : null;
      const f = hz
        ? { cx: hz[2], cy: hz[1] + (hz[0] * w) / h, r: hz[0] }
        : fr ?? { cx: 0.5, cy: 0.5, r: (Math.min(w, h) / w) * 0.48 };
      const cx = f.cx * w;
      const cy = f.cy * h;
      const r = f.r * w;

      if (ocean) {
        ctx.fillStyle = ocean;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (graticule) {
        ctx.strokeStyle = graticule;
        ctx.lineWidth = 0.6;
        for (let gl = -60; gl <= 60; gl += 30) {
          ctx.beginPath();
          let pen = false;
          for (let g = -180; g <= 180; g += 3) {
            const p = project(vec([gl, g]), cx, cy, r);
            if (p.depth > 0) {
              if (pen) ctx.lineTo(p.sx, p.sy);
              else ctx.moveTo(p.sx, p.sy);
              pen = true;
            } else pen = false;
          }
          ctx.stroke();
        }
        for (let g = -180; g < 180; g += 30) {
          ctx.beginPath();
          let pen = false;
          for (let gl = -88; gl <= 88; gl += 3) {
            const p = project(vec([gl, g]), cx, cy, r);
            if (p.depth > 0) {
              if (pen) ctx.lineTo(p.sx, p.sy);
              else ctx.moveTo(p.sx, p.sy);
              pen = true;
            } else pen = false;
          }
          ctx.stroke();
        }
      }

      // Land dots. Opacity and size ease off toward the limb, which reads
      // as curvature without any lighting effects.
      ctx.fillStyle = dot;
      const s = dotSize;
      // A horizon only shows the band near the edge, so ease the falloff there.
      const [a0, a1, s0] = hz ? [0.55, 0.45, 0.8] : [0.2, 0.9, 0.55];
      for (let i = 0; i < pts.length; i++) {
        const p = project(pts[i], cx, cy, r);
        if (p.depth <= 0.04) continue;
        if (p.sx < -4 || p.sy < -4 || p.sx > w + 4 || p.sy > h + 4) continue;
        ctx.globalAlpha = Math.min(1, a0 + p.depth * a1);
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, s * (s0 + (1 - s0) * p.depth), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (outline) {
        ctx.strokeStyle = outline;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Arcs only when the origin faces the viewer; otherwise they would
      // appear from nowhere on a horizon crop.
      const origin = project(vec(BANGALORE), cx, cy, r);
      if (arcs && origin.depth > 0.15) {
        const r2 = r * r;
        const seen = (p: { sx: number; sy: number; depth: number }) =>
          p.depth > 0 || (p.sx - cx) ** 2 + (p.sy - cy) ** 2 > r2;
        ctx.lineWidth = 1;
        for (const a of arcPaths) {
          ctx.strokeStyle = arcs;
          ctx.globalAlpha = 0.85;
          ctx.beginPath();
          let pen = false;
          for (const v of a.pts) {
            const p = project(v, cx, cy, r);
            if (seen(p)) {
              if (pen) ctx.lineTo(p.sx, p.sy);
              else ctx.moveTo(p.sx, p.sy);
              pen = true;
            } else pen = false;
          }
          ctx.stroke();
          // Travelling packet.
          const t = (((clock * 0.22 + a.phase) % 1) + 1) % 1;
          const idx = Math.floor(t * (a.pts.length - 1));
          const pp = project(a.pts[idx], cx, cy, r);
          if (seen(pp)) {
            ctx.globalAlpha = 1;
            ctx.fillStyle = marker ?? arcs;
            ctx.beginPath();
            ctx.arc(pp.sx, pp.sy, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.globalAlpha = 1;
        // Hub markers.
        ctx.fillStyle = marker ?? arcs;
        for (const hub of HUBS) {
          const p = project(vec(hub), cx, cy, r);
          if (p.depth <= 0) continue;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
        // Origin: Bangalore, with a flat expanding ring (no glow).
        const o = project(vec(BANGALORE), cx, cy, r);
        if (o.depth > 0) {
          const ring = (clock * 0.6) % 1;
          ctx.strokeStyle = marker ?? arcs;
          ctx.globalAlpha = 1 - ring;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(o.sx, o.sy, 3 + ring * 12, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(o.sx, o.sy, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const tick = (now: number) => {
      // rAF timestamps can precede the performance.now() taken at start.
      const dt = Math.max(0, Math.min(0.05, (now - last) / 1000));
      last = now;
      clock += dt;
      if (!dragging) {
        if (sway) rotLon = lon + Math.sin(clock * 0.25) * sway;
        else rotLon += speed * dt;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    draw();
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { rootMargin: "100px" },
    );
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    const onDown = (e: PointerEvent) => {
      if (!draggable) return;
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      rotLon -= (e.clientX - lastX) * 0.3;
      rotLat = Math.max(-60, Math.min(60, rotLat + (e.clientY - lastY) * 0.3));
      lastX = e.clientX;
      lastY = e.clientY;
      if (reduce) draw();
    };
    const onUp = () => {
      dragging = false;
    };
    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dot, dotSize, density, ocean, outline, graticule, arcs, marker, speed, lon, lat, sway, frameKey, horizonKey, draggable]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`block h-full w-full ${draggable ? "cursor-grab active:cursor-grabbing" : ""} ${className}`}
    />
  );
}
