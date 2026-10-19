/**
 * Company, resources, contact and partner scenes.
 */
import {
  Building2,
  Network,
  Cloud,
  ShieldCheck,
  UserRound,
  Award,
  Rocket,
  Sparkles,
  TrendingUp,
  ChartPie,
  Newspaper,
  BookOpen,
  FileText,
  Activity,
  GitBranch,
  Cpu,
  MousePointer2,
  Headset,
  MessagesSquare,
  Handshake,
  UserRoundPlus,
  Landmark,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Globe from "@/components/kit/Globe";
import { Mark } from "@/components/kit/Brand";
import { Stage, Chip, Dot, Pulse, Wire, curve, Panel } from "./kit";

const around = (n: number, r: number, off = -0.25, cx = 50, cy = 50) =>
  Array.from({ length: n }).map((_, i) => {
    const a = (i / n + off) * Math.PI * 2;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
  });

/* ============================================================ about */

/** The story: built in Bangalore, connected to the world. */
export function StoryScene() {
  const pts = around(4, 46, -0.125);
  const icons = [Building2, Network, Cloud, ShieldCheck];
  return (
    <Stage
      svg={
        <>
          <circle cx={50} cy={50} r={46} stroke="#FFFFFF" strokeOpacity={0.2} vectorEffect="non-scaling-stroke" />
          <circle cx={50} cy={50} r={46} stroke="#FFFFFF" strokeOpacity={0.6} strokeDasharray="1 7" vectorEffect="non-scaling-stroke" className="mk-spin-slow" style={{ transformOrigin: "50px 50px" }} />
        </>
      }
    >
      <div className="absolute inset-[10%]">
        <Globe dot="rgba(255,255,255,0.95)" dotSize={1} density={1.8} arcs="#C2DFF6" marker="#FFFFFF" outline="rgba(255,255,255,0.35)" lon={78} lat={16} speed={5} />
      </div>
      {pts.map((p, k) => (
        <Chip key={k} x={p.x} y={p.y} icon={icons[k]} tone={k ? "glass" : "white"} size="md" round float={k % 2 ? "b" : "a"} />
      ))}
    </Stage>
  );
}

/* ======================================================= leadership */

/** The team: people around the mark, linked to one another. */
export function TeamScene() {
  const inner = around(5, 28, -0.25);
  const outer = around(10, 44, -0.2);
  return (
    <Stage
      svg={
        <>
          {inner.map((p, k) => {
            const q = inner[(k + 1) % inner.length];
            return <Wire key={`r${k}`} d={`M${p.x.toFixed(2)} ${p.y.toFixed(2)} L${q.x.toFixed(2)} ${q.y.toFixed(2)}`} strength="faint" />;
          })}
          {inner.map((p, k) => (
            <Wire key={`s${k}`} d={`M50 50 L${p.x.toFixed(2)} ${p.y.toFixed(2)}`} packets={1} speed={2.4} delay={-k * 0.5} />
          ))}
          {outer.map((p, k) => {
            const q = inner[Math.floor(k / 2)];
            return <Wire key={`o${k}`} d={`M${q.x.toFixed(2)} ${q.y.toFixed(2)} L${p.x.toFixed(2)} ${p.y.toFixed(2)}`} strength="faint" />;
          })}
        </>
      }
    >
      <Pulse x={50} y={50} size={140} count={2} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] shadow-[0_18px_40px_-22px_rgba(0,40,90,0.65)]">
        <Mark tone="square" size={80} />
      </div>
      {inner.map((p, k) => (
        <Chip key={k} x={p.x} y={p.y} icon={UserRound} tone="white" size="md" round />
      ))}
      {outer.map((p, k) => (
        <Dot key={k} x={p.x} y={p.y} size={10} className="mk-blink bg-white/80" style={{ animationDuration: "3.2s", animationDelay: `${-k * 0.32}s` }} />
      ))}
    </Stage>
  );
}

/* ========================================================== careers */

/** Careers: a path that climbs — join, learn, grow, lead. */
export function CareersScene() {
  const steps = [
    { x: 14, y: 82, i: UserRound },
    { x: 38, y: 62, i: Sparkles },
    { x: 62, y: 42, i: Award },
    { x: 86, y: 18, i: Rocket },
  ];
  const d = "M14 82 C26 82 26 62 38 62 S50 42 62 42 S74 18 86 18";
  return (
    <Stage
      svg={
        <>
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1={4} x2={96} y1={y} y2={y} stroke="#FFFFFF" strokeOpacity={0.1} vectorEffect="non-scaling-stroke" />
          ))}
          <path d={d} stroke="#FFFFFF" strokeOpacity={0.25} strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeDasharray="3 5" />
          <path d={d} stroke="#FFFFFF" strokeWidth={2} vectorEffect="non-scaling-stroke" pathLength={1} className="mk-draw-loop" style={{ animationDuration: "7s" }} />
        </>
      }
    >
      {steps.map((s, k) => (
        <Chip key={k} x={s.x} y={s.y} icon={s.i} tone={k === steps.length - 1 ? "white" : "glass"} size={k === steps.length - 1 ? "lg" : "md"} round pulse={k === steps.length - 1} />
      ))}
      {around(3, 9, 0.1, 22, 30).map((p, k) => (
        <Chip key={`t${k}`} x={p.x} y={p.y} icon={UserRound} tone="glass" size="xs" round float={k % 2 ? "b" : "a"} />
      ))}
    </Stage>
  );
}

/* ========================================================= investors */

/** Investors: growth over time and the shape of the business. */
export function InvestorsScene() {
  const d = "M0 34 L12 30 L24 31 L36 24 L48 22 L60 15 L72 14 L84 8 L100 3";
  return (
    <Stage>
      <Panel x={4} y={10} w={92} h={52}>
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-x-5 bottom-5 top-12 h-[calc(100%-68px)] w-[calc(100%-40px)] overflow-visible" fill="none">
          {[10, 20, 30].map((y) => (
            <line key={y} x1={0} x2={100} y1={y} y2={y} stroke="#FFFFFF" strokeOpacity={0.12} vectorEffect="non-scaling-stroke" />
          ))}
          <path d={`${d} V40 H0Z`} fill="rgba(255,255,255,0.1)" />
          <path d={d} stroke="#FFFFFF" strokeWidth={2} vectorEffect="non-scaling-stroke" pathLength={1} className="mk-draw-loop" />
        </svg>
        <TrendingUp className="absolute left-5 top-4 h-5 w-5 text-white" strokeWidth={1.8} />
        <span className="mk-blink absolute right-5 top-5 h-2 w-2 rounded-full bg-white" />
      </Panel>
      <Panel x={4} y={66} w={56} h={28}>
        <div className="absolute inset-x-5 bottom-4 top-5 flex items-end gap-[7%]">
          {[34, 46, 52, 64, 72, 88].map((h, i) => (
            <span key={i} className="mk-bar flex-1 rounded-t-[3px] bg-white/80" style={{ height: `${h}%`, animationDelay: `${-i * 0.3}s` }} />
          ))}
        </div>
      </Panel>
      <Panel x={64} y={66} w={32} h={28}>
        <svg viewBox="0 0 40 40" className="absolute inset-0 m-auto h-[64%] w-[64%] -rotate-90">
          <circle cx={20} cy={20} r={14} stroke="rgba(255,255,255,0.22)" strokeWidth={6} fill="none" />
          <circle cx={20} cy={20} r={14} stroke="#FFFFFF" strokeWidth={6} fill="none" pathLength={100} className="mk-gauge" style={{ ["--to" as string]: 35 }} />
        </svg>
      </Panel>
      <Chip x={92} y={10} icon={ChartPie} size="md" round />
      <Chip x={8} y={66} icon={Landmark} tone="ink" size="sm" />
    </Stage>
  );
}

/* ========================================================= resources */

const DOC_ICON: Record<"blogs" | "case-studies" | "datasheets", LucideIcon[]> = {
  blogs: [Newspaper, BookOpen, FileText],
  "case-studies": [Building2, BookOpen, Activity],
  datasheets: [FileText, Cpu, ShieldCheck],
};

/** A fanned stack of documents — articles, stories or sheets by variant. */
export function LibraryScene({ variant }: { variant: keyof typeof DOC_ICON }) {
  const icons = DOC_ICON[variant];
  const cards = [
    { x: 8, y: 22, r: -8, d: "b" },
    { x: 30, y: 12, r: -1, d: "a" },
    { x: 52, y: 22, r: 7, d: "b" },
  ] as const;
  return (
    <Stage>
      {cards.map((c, k) => (
        <div key={k} className="absolute" style={{ left: `${c.x}%`, top: `${c.y}%`, width: "40%", height: "56%" }}>
          <div className={`${c.d === "a" ? "mk-float" : "mk-float-b"} h-full w-full`}>
            <div
              className={`h-full w-full rounded-[18px] p-[9%] ${k === 1 ? "bg-white" : "bg-white/12 ring-1 ring-white/30 backdrop-blur-[3px]"}`}
              style={{ transform: `rotate(${c.r}deg)`, background: k === 1 ? undefined : "rgba(255,255,255,0.12)" }}
            >
              {(() => {
                const I = icons[k];
                return <I className={`h-7 w-7 ${k === 1 ? "text-lv-blue" : "text-white"}`} strokeWidth={1.8} />;
              })()}
              <div className="mt-[18%] space-y-[9%]">
                {variant === "datasheets" && k === 1 ? (
                  <div className="grid grid-cols-3 gap-1.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className={`h-2 rounded-full ${i % 3 === 0 ? "bg-lv-blue/70" : "bg-lv-blue/20"}`} />
                    ))}
                  </div>
                ) : (
                  [92, 100, 74, 86, 58].map((w, i) => (
                    <span key={i} className={`block h-[7px] rounded-full ${k === 1 ? (i ? "bg-lv-blue/20" : "bg-lv-blue/70") : "bg-white/35"}`} style={{ width: `${w}%` }} />
                  ))
                )}
              </div>
              {k === 1 && variant === "case-studies" && (
                <svg viewBox="0 0 100 30" className="mt-[14%] h-[18%] w-full" fill="none" preserveAspectRatio="none">
                  <path d="M0 26 L20 22 L40 24 L60 14 L80 10 L100 3" stroke="#0078D4" strokeWidth={2} vectorEffect="non-scaling-stroke" pathLength={1} className="mk-draw-loop" />
                </svg>
              )}
            </div>
          </div>
        </div>
      ))}
      <Chip x={84} y={82} icon={icons[0]} tone="ink" size="md" round />
    </Stage>
  );
}

/* ========================================================== contact */

/** Request a demo: the platform's modules around a live console, a pointer exploring it. */
export function PlatformScene() {
  const mods = [
    { x: 10, y: 18, i: Network },
    { x: 90, y: 18, i: ShieldCheck },
    { x: 10, y: 82, i: GitBranch },
    { x: 90, y: 82, i: Cpu },
    { x: 50, y: 6, i: Cloud },
  ];
  return (
    <Stage
      svg={
        <>
          {mods.map((m, k) => (
            <Wire key={k} d={curve(m.x, m.y, 50, 50, k % 2 ? 6 : -6)} packets={1} speed={2.2} delay={-k * 0.45} />
          ))}
        </>
      }
    >
      <Panel x={22} y={26} w={56} h={48} className="bg-white/15">
        <div className="absolute left-4 right-4 top-4 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-white/50" />
          ))}
        </div>
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-x-4 top-[30%] h-[34%] w-[calc(100%-32px)]" fill="none">
          <path d="M0 32 L14 26 L28 29 L42 17 L56 21 L70 10 L84 13 L100 5" stroke="#FFFFFF" strokeWidth={2} vectorEffect="non-scaling-stroke" pathLength={1} className="mk-draw-loop" />
        </svg>
        <div className="absolute inset-x-4 bottom-4 flex h-[18%] items-end gap-[5%]">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mk-bar flex-1 rounded-t-[2px] bg-white/70" style={{ height: `${40 + ((i * 41) % 60)}%`, animationDelay: `${-i * 0.27}s` }} />
          ))}
        </div>
      </Panel>
      {mods.map((m, k) => (
        <Chip key={k} x={m.x} y={m.y} icon={m.i} tone={k === 4 ? "white" : "glass"} size="md" />
      ))}
      <div className="mk-float absolute" style={{ left: "66%", top: "60%" }}>
        <MousePointer2 className="h-8 w-8 fill-white text-lv-ink" strokeWidth={1.5} />
      </div>
    </Stage>
  );
}

/** Talk to an expert: a live line between you and a specialist. */
export function ConversationScene() {
  return (
    <Stage
      svg={
        <>
          <Wire d={curve(18, 64, 82, 36, -10)} strength="bright" packets={2} speed={2.2} />
          <Wire d={curve(82, 36, 18, 64, -10)} packets={2} speed={2.6} delay={-1.1} />
        </>
      }
    >
      <Pulse x={82} y={36} size={150} count={3} period={3.4} />
      <Chip x={82} y={36} icon={Headset} size="xl" round />
      <Chip x={18} y={64} icon={UserRound} tone="glass" size="lg" round />
      <div className="absolute flex items-center gap-[3px]" style={{ left: "34%", top: "76%", width: "32%", height: "12%" }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="mk-bar flex-1 self-center rounded-full bg-white/80" style={{ height: `${30 + ((i * 53) % 70)}%`, transformOrigin: "center", animationDuration: "1.4s", animationDelay: `${-i * 0.11}s` }} />
        ))}
      </div>
      <Chip x={50} y={20} icon={MessagesSquare} tone="glass" size="md" float="b" />
    </Stage>
  );
}

/* ========================================================== partners */

/** The ecosystem: overlapping circles of partners; partner-with-us adds a new circle joining in. */
export function EcosystemScene({ join = false }: { join?: boolean }) {
  const c = around(3, 17, -0.25, 50, 50);
  const icons = [Network, Cloud, Building2];
  return (
    <Stage
      svg={
        <>
          {c.map((p, k) => (
            <circle key={k} cx={p.x} cy={p.y} r={27} stroke="#FFFFFF" strokeOpacity={0.45} vectorEffect="non-scaling-stroke" fill="rgba(255,255,255,0.04)" />
          ))}
          {join && (
            <circle cx={84} cy={80} r={14} stroke="#FFFFFF" strokeOpacity={0.7} strokeDasharray="2 4" vectorEffect="non-scaling-stroke" className="mk-spin-slow" style={{ transformOrigin: "84px 80px" }} />
          )}
          {join && <Wire d={curve(84, 80, 50, 50, 8)} strength="bright" packets={2} speed={2} />}
        </>
      }
    >
      <Pulse x={50} y={50} size={120} count={2} />
      <Chip x={50} y={50} icon={Handshake} size="lg" round />
      {c.map((p, k) => {
        const q = { x: 50 + (p.x - 50) * 1.9, y: 50 + (p.y - 50) * 1.9 };
        return <Chip key={k} x={q.x} y={q.y} icon={icons[k]} tone="glass" size="md" float={k % 2 ? "b" : "a"} />;
      })}
      {around(9, 46, 0.02).map((p, k) => (
        <Dot key={k} x={p.x} y={p.y} size={7} className="mk-blink bg-white/70" style={{ animationDuration: "2.8s", animationDelay: `${-k * 0.31}s` }} />
      ))}
      {join && <Chip x={84} y={80} icon={UserRoundPlus} size="md" round />}
    </Stage>
  );
}
