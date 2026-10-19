/**
 * India scenes — sector solutions, partner locator and contact. A dot field
 * of the subcontinent's land (1° Natural Earth mask, coastlines only — no
 * political boundaries are drawn), with sites wired back to a hub.
 */
import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  Building2,
  Store,
  Server,
  Factory,
  Hospital,
  HeartPulse,
  School,
  GraduationCap,
  Truck,
  Warehouse,
  CodeXml,
  MapPin,
  Handshake,
} from "lucide-react";
import { isLand } from "@/components/kit/landmask";
import { Stage, Chip, Dot, Pulse, Wire, curve } from "./kit";

type LatLon = [number, number];

const CITY = {
  bangalore: [12.97, 77.59],
  mumbai: [19.07, 72.88],
  delhi: [28.61, 77.21],
  kolkata: [22.57, 88.36],
  chennai: [13.08, 80.27],
  hyderabad: [17.38, 78.48],
  ahmedabad: [23.02, 72.57],
  pune: [18.52, 73.85],
  jaipur: [26.91, 75.79],
  lucknow: [26.85, 80.95],
  guwahati: [26.14, 91.74],
  kochi: [9.93, 76.27],
} satisfies Record<string, LatLon>;

type City = keyof typeof CITY;

/** Equirectangular, lightly compressed in longitude for the latitude band. */
function proj([lat, lon]: LatLon) {
  return { x: 50 + ((lon - 82.25) * 0.93 * 100) / 32, y: ((37 - lat) / 32) * 100 };
}

/** Land cells in the window, faded towards the edges of the stage. */
const FIELD = (() => {
  const out: { x: number; y: number; o: number }[] = [];
  for (let lat = 36.5; lat >= 6.5; lat -= 1) {
    for (let lon = 66.5; lon <= 98.5; lon += 1) {
      if (!isLand(lat, lon)) continue;
      const p = proj([lat, lon]);
      // Elliptical fade centred on the peninsula, so neighbouring land and
      // the window's edges dissolve instead of ending in a hard rectangle.
      const d = Math.hypot((p.x - 44) / 46, (p.y - 54) / 50);
      const o = Math.max(0, Math.min(1, (1.12 - d) / 0.4));
      if (o > 0.04) out.push({ ...p, o: Number(o.toFixed(2)) });
    }
  }
  return out;
})();

function Field() {
  return (
    <g>
      {FIELD.map((p, i) => (
        <circle key={i} cx={p.x.toFixed(2)} cy={p.y.toFixed(2)} r={0.85} fill="#FFFFFF" fillOpacity={0.42 * p.o} />
      ))}
    </g>
  );
}

type Variant = {
  hub: City;
  hubIcon: LucideIcon;
  /** Sites drawn as chips (with the sector icon). */
  sites: City[];
  siteIcon: LucideIcon;
  /** Extra sites drawn as plain dots. */
  dots?: City[];
  /** Draw a route through these cities instead of a star from the hub. */
  route?: City[];
  routeIcon?: LucideIcon;
};

const ALL: City[] = Object.keys(CITY) as City[];

const VARIANTS = {
  bfsi: { hub: "mumbai", hubIcon: Landmark, sites: ["delhi", "bangalore", "kolkata", "hyderabad"], siteIcon: Building2 },
  retail: { hub: "mumbai", hubIcon: Server, sites: ["delhi", "kolkata", "bangalore", "jaipur"], siteIcon: Store },
  manufacturing: { hub: "delhi", hubIcon: Building2, sites: ["pune", "ahmedabad", "chennai", "kolkata"], siteIcon: Factory },
  healthcare: { hub: "bangalore", hubIcon: HeartPulse, sites: ["delhi", "kolkata", "mumbai", "lucknow"], siteIcon: Hospital },
  government: { hub: "delhi", hubIcon: Landmark, sites: ["lucknow", "kolkata", "mumbai", "chennai", "guwahati"], siteIcon: Building2 },
  education: { hub: "bangalore", hubIcon: GraduationCap, sites: ["delhi", "kolkata", "pune", "jaipur"], siteIcon: School },
  it: { hub: "bangalore", hubIcon: Server, sites: ["pune", "hyderabad", "delhi", "kolkata"], siteIcon: CodeXml },
  logistics: {
    hub: "mumbai",
    hubIcon: Warehouse,
    sites: ["delhi", "kolkata", "chennai"],
    siteIcon: Warehouse,
    route: ["delhi", "jaipur", "ahmedabad", "mumbai", "pune", "bangalore", "chennai", "hyderabad", "kolkata", "lucknow", "delhi"],
    routeIcon: Truck,
  },
  partners: { hub: "bangalore", hubIcon: Handshake, sites: ["delhi", "mumbai", "kolkata", "hyderabad", "ahmedabad", "kochi"], siteIcon: MapPin },
  contact: { hub: "bangalore", hubIcon: MapPin, sites: ["delhi", "mumbai"], siteIcon: Building2 },
} satisfies Record<string, Variant>;

export type IndiaVariant = keyof typeof VARIANTS;

export function IndiaScene({ variant }: { variant: IndiaVariant }) {
  const v: Variant = VARIANTS[variant];
  const hub = proj(CITY[v.hub]);
  const taken = new Set<City>([v.hub, ...v.sites]);
  const dots = (v.dots ?? ALL).filter((c) => !taken.has(c));
  const route = v.route?.map((c) => proj(CITY[c]));
  const routeD = route ? "M" + route.map((p) => `${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" L") : "";

  return (
    <Stage
      svg={
        <>
          <Field />
          {route ? (
            <>
              <path d={routeD} stroke="#FFFFFF" strokeOpacity={0.22} strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeDasharray="3 4" />
              <path d={routeD} stroke="#FFFFFF" strokeWidth={1.8} vectorEffect="non-scaling-stroke" strokeLinejoin="round" pathLength={1} className="mk-draw-loop" style={{ animationDuration: "9s" }} />
            </>
          ) : (
            <>
              {[...v.sites, ...dots].map((c, k) => {
                const p = proj(CITY[c]);
                const chip = k < v.sites.length;
                return <Wire key={c} d={curve(hub.x, hub.y, p.x, p.y, 7)} strength={chip ? "bright" : "faint"} packets={chip ? 2 : 1} speed={chip ? 2.2 : 3} delay={-k * 0.45} />;
              })}
            </>
          )}
        </>
      }
    >
      {dots.map((c, k) => {
        const p = proj(CITY[c]);
        return <Dot key={c} x={p.x} y={p.y} size={7} className="mk-blink bg-white" style={{ animationDuration: "2.6s", animationDelay: `${-k * 0.4}s` }} />;
      })}
      <Pulse x={hub.x} y={hub.y} size={96} count={2} />
      {v.sites.map((c, k) => {
        const p = proj(CITY[c]);
        return <Chip key={c} x={p.x} y={p.y} icon={v.siteIcon} tone="glass" size="sm" float={k % 2 ? "b" : "a"} />;
      })}
      <Chip x={hub.x} y={hub.y} icon={v.hubIcon} size="lg" />
      {route && v.routeIcon && (
        // The vehicle drives the route above the chips; a parked copy replaces it under reduced motion.
        <svg viewBox="0 0 100 100" className="mk-motion-only absolute inset-0 h-full w-full overflow-visible" fill="none">
          <g>
            <animateMotion dur="16s" repeatCount="indefinite" path={routeD} />
            <rect x={-3.6} y={-3.6} width={7.2} height={7.2} rx={1.8} fill="#201E1D" />
            <v.routeIcon x={-2.1} y={-2.1} width={4.2} height={4.2} color="#FFFFFF" strokeWidth={2} />
          </g>
        </svg>
      )}
      {route && v.routeIcon && (
        <div className="mk-static-only">
          <Chip x={hub.x} y={hub.y + 12} icon={v.routeIcon} tone="ink" size="sm" />
        </div>
      )}
    </Stage>
  );
}
