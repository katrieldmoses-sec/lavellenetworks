/**
 * Network scenes — products and use cases. Each depicts what the page is
 * about; see the registry in ./index.tsx for which page uses which.
 */
import {
  Building2,
  Server,
  Cloud,
  Globe as GlobeIcon,
  Network,
  RadioTower,
  AppWindow,
  Unplug,
  Activity,
  Router,
  Wifi,
  ShieldCheck,
  Laptop,
  Smartphone,
  Monitor,
  Cctv,
  UserRound,
  LayoutGrid,
  Ban,
  Fingerprint,
  KeyRound,
  Cable,
  ServerCog,
  House,
  Coffee,
  Plane,
  BrainCircuit,
  ScanEye,
  Bug,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Globe from "@/components/kit/Globe";
import { Stage, Chip, Dot, Pulse, Wire, curve, Panel } from "./kit";

/* ===================================================== SD-WAN / hybrid WAN */

/**
 * Path selection: a branch reaches the data centre and cloud over several
 * transports; traffic moves to the best path in turn (three-phase cycle).
 */
export function PathsScene({ links = 3 }: { links?: 2 | 3 }) {
  const ys = links === 3 ? [20, 50, 80] : [28, 72];
  const icons = links === 3 ? [GlobeIcon, Network, RadioTower] : [GlobeIcon, Network];
  const B = { x: 12, y: 50 };
  const T = [
    { x: 88, y: 30 },
    { x: 88, y: 70 },
  ];
  return (
    <Stage
      svg={
        <>
          {ys.map((y) => (
            <g key={y}>
              <Wire d={curve(B.x, B.y, 50, y, 0)} strength="faint" />
              {T.map((t) => (
                <Wire key={t.y} d={curve(50, y, t.x, t.y, 0)} strength="faint" />
              ))}
            </g>
          ))}
          {ys.map((y, i) => (
            <g key={`on-${y}`} className={links === 3 ? "mk-third" : i ? "mk-half-b" : "mk-half-a"} style={links === 3 ? { animationDelay: `${-i * 3}s` } : undefined}>
              <Wire d={curve(B.x, B.y, 50, y, 0)} strength="bright" packets={2} speed={1.8} />
              {T.map((t) => (
                <Wire key={t.y} d={curve(50, y, t.x, t.y, 0)} strength="bright" packets={2} speed={1.8} delay={-0.4} />
              ))}
            </g>
          ))}
        </>
      }
    >
      <Chip x={B.x} y={B.y} icon={Building2} size="lg" pulse />
      {ys.map((y, i) => (
        <Chip key={y} x={50} y={y} icon={icons[i]} tone="glass" size="md" />
      ))}
      <Chip x={T[0].x} y={T[0].y} icon={Server} size="lg" />
      <Chip x={T[1].x} y={T[1].y} icon={Cloud} size="lg" />
    </Stage>
  );
}

/* =================================================== application availability */

/** Failover: the primary link drops, traffic shifts to the secondary; a heartbeat never breaks. */
export function FailoverScene() {
  const up = curve(14, 56, 86, 56, -26);
  const down = curve(14, 56, 86, 56, 26);
  return (
    <Stage
      svg={
        <>
          <path
            d="M4 16 H30 L34 8 L39 24 L43 12 L46 16 H86"
            stroke="#FFFFFF"
            strokeWidth={1.8}
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            className="mk-draw-loop"
            style={{ animationDuration: "3s" }}
          />
          <Wire d={up} strength="faint" />
          <Wire d={down} strength="faint" />
          <g className="mk-half-a">
            <Wire d={up} strength="bright" packets={3} speed={2} />
          </g>
          <g className="mk-half-b">
            <Wire d={down} strength="bright" packets={3} speed={2} />
          </g>
        </>
      }
    >
      <Chip x={14} y={56} icon={Building2} size="lg" />
      <Chip x={86} y={56} icon={AppWindow} size="lg" pulse />
      <Chip x={50} y={43} icon={GlobeIcon} tone="glass" size="sm" />
      <Chip x={50} y={69} icon={RadioTower} tone="glass" size="sm" />
      <div className="mk-half-b absolute inset-0">
        <Chip x={50} y={43} icon={Unplug} tone="ink" size="sm" />
      </div>
      <Chip x={93} y={16} icon={Activity} tone="glass" size="xs" round />
    </Stage>
  );
}

/* ====================================================== SD-Branch / branch */

/** Converged branch: router, Wi-Fi, security and compute in one box, devices around, uplink to cloud. */
export function BranchScene() {
  const devices = [
    { x: 10, y: 38, i: Laptop },
    { x: 12, y: 74, i: Smartphone },
    { x: 90, y: 38, i: Monitor },
    { x: 88, y: 74, i: Cctv },
  ];
  return (
    <Stage
      svg={
        <>
          <Wire d={curve(50, 30, 50, 9, 0)} strength="bright" packets={2} speed={1.6} />
          {devices.map((d, k) => (
            <Wire key={k} d={curve(d.x, d.y, d.x < 50 ? 30 : 70, 56, d.y < 50 ? 6 : -6)} packets={1} speed={2.2} delay={-k * 0.5} />
          ))}
        </>
      }
    >
      <Pulse x={50} y={56} size={240} count={3} period={4} className="border-white/30" />
      <div className="absolute rounded-[28px] bg-white/10 ring-1 ring-white/35 backdrop-blur-sm" style={{ left: "30%", top: "34%", width: "40%", height: "44%" }} />
      <Chip x={41} y={46} icon={Router} size="md" />
      <Chip x={59} y={46} icon={Wifi} size="md" />
      <Chip x={41} y={66} icon={ShieldCheck} size="md" />
      <Chip x={59} y={66} icon={Server} size="md" />
      <Chip x={50} y={9} icon={Cloud} tone="glass" size="md" />
      {devices.map((d, k) => (
        <Chip key={k} x={d.x} y={d.y} icon={d.i} tone="glass" size="sm" float={k % 2 ? "b" : "a"} />
      ))}
    </Stage>
  );
}

/* ========================================================= SASE / secure internet */

/** Security edge: traffic passes through a cloud-delivered shield; a threat stops at the ring. */
export function ShieldScene({ variant = "sase" }: { variant?: "sase" | "internet" }) {
  const left = [
    { x: 10, y: 28, i: UserRound },
    { x: 8, y: 52, i: Laptop },
    { x: 12, y: 76, i: Smartphone },
  ];
  const rightIcons = variant === "internet" ? [GlobeIcon, AppWindow, Cloud] : [Cloud, GlobeIcon, LayoutGrid];
  const right = [28, 52, 76].map((y, k) => ({ x: 90 - (k === 1 ? 2 : 0), y, i: rightIcons[k] }));
  return (
    <Stage
      svg={
        <>
          <circle cx={50} cy={52} r={22} stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeDasharray="2 4" className="mk-spin-slow" style={{ transformOrigin: "50px 52px" }} />
          <circle cx={50} cy={52} r={31} stroke="#FFFFFF" strokeOpacity={0.2} strokeWidth={1} vectorEffect="non-scaling-stroke" />
          {left.map((p, k) => (
            <Wire key={k} d={curve(p.x, p.y, 34, 52, 0)} packets={2} speed={2} delay={-k * 0.6} />
          ))}
          {right.map((p, k) => (
            <Wire key={k} d={curve(66, 52, p.x, p.y, 0)} strength="bright" packets={2} speed={2} delay={-k * 0.6 - 1} />
          ))}
          {/* blocked: a stream that stops at the inspection ring */}
          <Wire d="M10 6 Q24 10 34 34" strength="faint" dashed />
          <Wire d="M10 6 Q24 10 34 34" packets={1} speed={1.8} />
        </>
      }
    >
      <Chip x={50} y={52} icon={ShieldCheck} size="xl" pulse />
      <Chip x={10} y={6} icon={Bug} tone="ink" size="xs" />
      <Chip x={35} y={34} icon={Ban} tone="ink" size="xs" round />
      {left.map((p, k) => (
        <Chip key={k} x={p.x} y={p.y} icon={p.i} tone="glass" size="sm" />
      ))}
      {right.map((p, k) => (
        <Chip key={k} x={p.x} y={p.y} icon={p.i} size="md" />
      ))}
    </Stage>
  );
}

/* ================================================================ ZTNA */

/** Zero trust: a user passes identity, key and posture checks in turn to reach only its own app. */
export function ZeroTrustScene() {
  const gates = [
    { x: 31, i: Fingerprint },
    { x: 47, i: KeyRound },
    { x: 63, i: ShieldCheck },
  ];
  const apps = [24, 50, 76];
  return (
    <Stage
      svg={
        <>
          <Wire d="M12 50 H76" strength="bright" packets={2} speed={2.4} />
          {apps.map((y, k) => (
            <Wire key={y} d={curve(76, 50, 86, y, 0)} strength={k === 1 ? "bright" : "faint"} packets={k === 1 ? 1 : 0} speed={1.4} />
          ))}
          <rect x={4} y={8} width={92} height={84} rx={6} stroke="#FFFFFF" strokeOpacity={0.18} strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
        </>
      }
    >
      <Chip x={12} y={50} icon={UserRound} size="lg" round />
      {gates.map((g, k) => (
        <div key={k} className="absolute" style={{ left: `${g.x}%`, top: "50%" }}>
          <div className="mk-gate flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/40" style={{ animationDelay: `${k * 0.7}s` }}>
            <g.i className="h-5 w-5" strokeWidth={1.8} />
          </div>
        </div>
      ))}
      {apps.map((y, k) => (
        <div key={y}>
          <div className="absolute rounded-[16px] border border-dashed border-white/45" style={{ left: "79%", top: `${y - 9}%`, width: "18%", height: "18%" }} />
          <Chip x={88} y={y} icon={[LayoutGrid, AppWindow, Server][k]} tone={k === 1 ? "white" : "glass"} size="md" />
        </div>
      ))}
    </Stage>
  );
}

/* ================================================ telemetry / analytics */

function Sparkline() {
  return (
    <svg viewBox="0 0 100 40" className="absolute inset-x-4 bottom-4 top-10 h-[calc(100%-56px)] w-[calc(100%-32px)]" preserveAspectRatio="none">
      <path d="M0 32 L10 28 L20 30 L30 20 L40 24 L50 14 L60 18 L70 9 L80 13 L90 5 L100 8" stroke="#FFFFFF" strokeWidth={2} vectorEffect="non-scaling-stroke" pathLength={1} className="mk-draw-loop" fill="none" />
      <path d="M0 32 L10 28 L20 30 L30 20 L40 24 L50 14 L60 18 L70 9 L80 13 L90 5 L100 8 V40 H0Z" fill="rgba(255,255,255,0.12)" />
    </svg>
  );
}

function Donut({ to = 22 }: { to?: number }) {
  return (
    <svg viewBox="0 0 40 40" className="absolute inset-0 m-auto h-[70%] w-[70%] -rotate-90">
      <circle cx={20} cy={20} r={15} stroke="rgba(255,255,255,0.22)" strokeWidth={4} fill="none" />
      <circle cx={20} cy={20} r={15} stroke="#FFFFFF" strokeWidth={4} fill="none" pathLength={100} strokeLinecap="round" className="mk-gauge" style={{ ["--to" as string]: to }} />
    </svg>
  );
}

function Bars({ n = 14 }: { n?: number }) {
  return (
    <div className="absolute inset-x-5 bottom-5 top-10 flex items-end gap-[2.5%]">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="mk-bar flex-1 rounded-t-[3px] bg-white/80" style={{ height: `${40 + ((i * 37) % 60)}%`, animationDelay: `${-i * 0.23}s` }} />
      ))}
    </div>
  );
}

/** Dashboards: a live line, a health gauge and a third panel by variant. */
export function TelemetryScene({ variant = "analytics" }: { variant?: "analytics" | "insights" | "monitoring" }) {
  return (
    <Stage>
      <Panel x={4} y={8} w={58} h={40}>
        <Activity className="absolute left-4 top-3.5 h-4 w-4 text-white/80" />
        <Sparkline />
      </Panel>
      <Panel x={66} y={8} w={30} h={40}>
        <Donut to={variant === "insights" ? 12 : 22} />
        <ScanEye className="absolute left-3 top-3 h-4 w-4 text-white/80" />
      </Panel>
      <Panel x={4} y={53} w={92} h={40}>
        {variant === "monitoring" ? (
          <div className="absolute inset-0">
            <Globe dot="rgba(255,255,255,0.85)" dotSize={0.9} density={2.2} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={5} horizon={{ r: 0.42, top: 0.18 }} outline="rgba(255,255,255,0.4)" />
          </div>
        ) : (
          <Bars n={variant === "insights" ? 18 : 14} />
        )}
        <span className="mk-blink absolute right-4 top-4 h-2 w-2 rounded-full bg-white" />
      </Panel>
    </Stage>
  );
}

/* ================================================================ AI Ops */

/** AI Ops: a signal shows an anomaly, the model traces it back through the graph to its root cause. */
export function AiOpsScene() {
  const mids = [24, 50, 76];
  const leaves = [12, 31, 50, 69, 88];
  return (
    <Stage
      svg={
        <>
          <path d="M2 26 C10 20 14 30 22 24 S34 22 40 26 L44 6 L48 34 L52 22 S66 26 74 22 S90 26 98 22" stroke="#FFFFFF" strokeWidth={1.8} vectorEffect="non-scaling-stroke" pathLength={1} className="mk-draw-loop" />
          {mids.map((x) => (
            <Wire key={x} d={curve(50, 52, x, 70, 0)} strength="faint" />
          ))}
          {leaves.map((x, k) => (
            <Wire key={x} d={curve(mids[Math.min(2, Math.floor(k / 2))], 70, x, 88, 0)} strength="faint" />
          ))}
          {/* the traced path to the root cause */}
          <g className="mk-half-b">
            <Wire d={curve(50, 52, 50, 70, 0)} strength="bright" packets={1} speed={1.2} />
            <Wire d={curve(50, 70, 69, 88, 0)} strength="bright" packets={1} speed={1.2} delay={-0.6} />
          </g>
        </>
      }
    >
      <Pulse x={44} y={6} size={64} count={2} period={2.4} className="border-white/80" />
      <Chip x={50} y={52} icon={BrainCircuit} size="lg" />
      {mids.map((x) => (
        <Chip key={x} x={x} y={70} icon={Network} tone="glass" size="sm" />
      ))}
      {leaves.map((x, k) => (
        <Dot key={x} x={x} y={88} size={12} className={k === 3 ? "bg-white" : "bg-white/40"} />
      ))}
      <div className="mk-half-b absolute inset-0">
        <Chip x={69} y={88} icon={ScanEye} tone="ink" size="sm" round />
      </div>
    </Stage>
  );
}

/* ================================================= digital experience / M365 */

/** Experience: the user's path straight to the app, the old backhaul fading, an experience gauge filling. */
export function ExperienceScene({ variant = "dex" }: { variant?: "dex" | "m365" }) {
  return (
    <Stage
      svg={
        <>
          <path d="M20 44 A30 30 0 0 1 80 44" stroke="#FFFFFF" strokeOpacity={0.22} strokeWidth={6} vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          <path d="M20 44 A30 30 0 0 1 80 44" stroke="#FFFFFF" strokeWidth={6} vectorEffect="non-scaling-stroke" strokeLinecap="round" pathLength={100} className="mk-gauge" style={{ ["--to" as string]: 14 }} />
          {Array.from({ length: 9 }).map((_, i) => {
            const a = Math.PI - (i / 8) * Math.PI;
            return <line key={i} x1={(50 + Math.cos(a) * 36).toFixed(2)} y1={(44 - Math.sin(a) * 36).toFixed(2)} x2={(50 + Math.cos(a) * 39).toFixed(2)} y2={(44 - Math.sin(a) * 39).toFixed(2)} stroke="#FFFFFF" strokeOpacity={0.5} vectorEffect="non-scaling-stroke" />;
          })}
          <Wire d={curve(12, 74, 88, 74, -8)} strength="bright" packets={3} speed={1.6} />
          <Wire d="M12 74 Q30 96 50 92 T88 74" strength="faint" dashed />
        </>
      }
    >
      <Chip x={50} y={36} icon={variant === "m365" ? LayoutGrid : Activity} tone="glass" size="md" round />
      <Chip x={12} y={74} icon={UserRound} size="lg" round />
      <Chip x={88} y={74} icon={variant === "m365" ? LayoutGrid : AppWindow} size="lg" pulse />
      <Chip x={50} y={92} icon={Server} tone="ink" size="sm" className="opacity-60" />
    </Stage>
  );
}

/* ============================================================ CloudPort Edge */

/** The edge appliance: ports with live status lights, uplinks above, devices below. */
export function EdgeScene() {
  const ups = [
    { x: 24, y: 12, i: Cloud },
    { x: 50, y: 8, i: GlobeIcon },
    { x: 76, y: 12, i: Server },
  ];
  const downs = [
    { x: 20, y: 88, i: Laptop },
    { x: 50, y: 92, i: Cctv },
    { x: 80, y: 88, i: Smartphone },
  ];
  return (
    <Stage
      svg={
        <>
          {ups.map((u, k) => (
            <Wire key={k} d={curve(u.x, u.y, 50, 42, 0)} strength="bright" packets={2} speed={1.8} delay={-k * 0.5} />
          ))}
          {downs.map((u, k) => (
            <Wire key={k} d={curve(50, 60, u.x, u.y, 0)} packets={1} speed={2.2} delay={-k * 0.7} />
          ))}
        </>
      }
    >
      <div className="absolute flex items-center gap-[3%] rounded-[18px] bg-lv-ink px-[4%] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/15" style={{ left: "16%", top: "41%", width: "68%", height: "19%" }}>
        <Router className="h-6 w-6 shrink-0 text-lv-300" strokeWidth={1.8} />
        <div className="grid flex-1 grid-cols-8 gap-[6%]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-[4px] bg-white/10 ring-1 ring-white/20">
              <span className="mk-blink absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-lv-300" style={{ animationDelay: `${-i * 0.37}s`, animationDuration: `${1.2 + (i % 3) * 0.4}s` }} />
            </div>
          ))}
        </div>
      </div>
      {ups.map((u, k) => (
        <Chip key={k} x={u.x} y={u.y} icon={u.i} size="md" />
      ))}
      {downs.map((u, k) => (
        <Chip key={k} x={u.x} y={u.y} icon={u.i} tone="glass" size="sm" />
      ))}
    </Stage>
  );
}

/* ========================================================= CloudPort Gateway */

/** The gateway hub: many edges converge, traffic leaves for data centre and cloud. */
export function HubScene() {
  const edges = [14, 30, 46, 62, 78].map((y, k) => ({ x: 10 + (k % 2) * 6, y }));
  return (
    <Stage
      svg={
        <>
          {edges.map((e, k) => (
            <Wire key={k} d={curve(e.x, e.y, 52, 50, 0)} packets={1} speed={2} delay={-k * 0.4} />
          ))}
          <Wire d={curve(52, 50, 88, 30, 0)} strength="bright" packets={3} speed={1.4} />
          <Wire d={curve(52, 50, 88, 70, 0)} strength="bright" packets={3} speed={1.4} delay={-0.7} />
          <circle cx={52} cy={50} r={13} stroke="#FFFFFF" strokeOpacity={0.5} strokeDasharray="2 4" vectorEffect="non-scaling-stroke" className="mk-spin-slow" style={{ transformOrigin: "52px 50px" }} />
        </>
      }
    >
      {edges.map((e, k) => (
        <Chip key={k} x={e.x} y={e.y} icon={Router} tone="glass" size="sm" />
      ))}
      <Chip x={52} y={50} icon={Cable} size="xl" pulse />
      <Chip x={88} y={30} icon={Server} size="lg" />
      <Chip x={88} y={70} icon={Cloud} size="lg" />
    </Stage>
  );
}

/* ===================================================== CloudStation Controller */

/** Orchestration: policy waves leave the controller and each device acknowledges as the wave arrives. */
export function ControllerScene() {
  const ring = (r: number, n: number, off: number) =>
    Array.from({ length: n }).map((_, i) => {
      const a = (i / n + off) * Math.PI * 2;
      return { x: 50 + Math.cos(a) * r, y: 50 + Math.sin(a) * r };
    });
  const inner = ring(24, 6, 0.08);
  const outer = ring(41, 10, 0);
  return (
    <Stage
      svg={
        <>
          <circle cx={50} cy={50} r={24} stroke="#FFFFFF" strokeOpacity={0.18} vectorEffect="non-scaling-stroke" />
          <circle cx={50} cy={50} r={41} stroke="#FFFFFF" strokeOpacity={0.14} vectorEffect="non-scaling-stroke" />
          {inner.map((p, k) => (
            <Wire key={k} d={`M50 50 L${p.x.toFixed(2)} ${p.y.toFixed(2)}`} strength="faint" packets={1} speed={1.5} />
          ))}
        </>
      }
    >
      <Pulse x={50} y={50} size={260} count={3} period={3} className="border-white/50" />
      <Chip x={50} y={50} icon={ServerCog} size="xl" />
      {inner.map((p, k) => (
        <Chip key={k} x={p.x} y={p.y} icon={Router} tone="glass" size="sm" />
      ))}
      {outer.map((p, k) => (
        <Dot key={k} x={p.x} y={p.y} size={11} className="mk-blink bg-white" style={{ animationDuration: "3s", animationDelay: `${-1 + (k % 2) * 0.2}s` }} />
      ))}
    </Stage>
  );
}

/* =========================================================== multi-cloud */

/** Multi-cloud fabric: three clouds meshed through one fabric to the enterprise. */
export function MultiCloudScene({ fabric = Network, branches = 1 }: { fabric?: LucideIcon; branches?: 1 | 3 }) {
  const sites = branches === 3 ? [26, 50, 74] : [50];
  const clouds = [
    { x: 16, y: 20 },
    { x: 50, y: 10 },
    { x: 84, y: 20 },
  ];
  return (
    <Stage
      svg={
        <>
          <Wire d={curve(16, 20, 50, 10, -4)} strength="faint" packets={1} speed={2.4} />
          <Wire d={curve(50, 10, 84, 20, -4)} strength="faint" packets={1} speed={2.4} delay={-1} />
          <Wire d={curve(16, 20, 84, 20, 16)} strength="faint" />
          {clouds.map((c, k) => (
            <Wire key={k} d={curve(c.x, c.y, 50, 50, 0)} strength="bright" packets={2} speed={1.8} delay={-k * 0.5} />
          ))}
          {sites.map((x, k) => (
            <Wire key={x} d={curve(50, 50, x, 84, 0)} strength="bright" packets={branches === 3 ? 2 : 3} speed={1.4} delay={-k * 0.4} />
          ))}
        </>
      }
    >
      <Pulse x={50} y={50} size={150} count={2} className="border-white/40" />
      {clouds.map((c, k) => (
        <Chip key={k} x={c.x} y={c.y} icon={Cloud} tone={k === 1 ? "white" : "glass"} size="lg" />
      ))}
      <Chip x={50} y={50} icon={fabric} tone="blue" size="md" round />
      {sites.map((x) => (
        <Chip key={x} x={x} y={84} icon={Building2} size={branches === 3 ? "md" : "lg"} />
      ))}
    </Stage>
  );
}

/* ========================================================== hybrid workforce */

/** Work from anywhere: home, office, café and travel all reach apps through one secure edge. */
export function AnywhereScene() {
  const places = [House, Building2, Coffee, Plane, Laptop, Smartphone].map((icon, i) => {
    const a = (i / 6 - 0.25) * Math.PI * 2;
    return { icon, x: 50 + Math.cos(a) * 42, y: 50 + Math.sin(a) * 42 };
  });
  return (
    <Stage
      svg={
        <>
          <circle cx={50} cy={50} r={42} stroke="#FFFFFF" strokeOpacity={0.16} vectorEffect="non-scaling-stroke" />
          {places.map((p, k) => (
            <Wire key={k} d={`M${p.x.toFixed(2)} ${p.y.toFixed(2)} L50 50`} packets={1} speed={2} delay={-k * 0.33} />
          ))}
        </>
      }
    >
      <div className="absolute inset-[27%] overflow-hidden rounded-full">
        <Globe dot="rgba(255,255,255,0.95)" dotSize={0.8} density={2.2} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={5} />
      </div>
      {places.map((p, k) => (
        <Chip key={k} x={p.x} y={p.y} icon={p.icon} tone={k === 1 ? "white" : "glass"} size="md" round />
      ))}
      <Chip x={50} y={50} icon={ShieldCheck} tone="blue" size="sm" round />
    </Stage>
  );
}
