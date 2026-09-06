import Reveal from "../Reveal";
import GridBackground from "../GridBackground";
import {
  ArrowRight,
  MapPin,
  Users,
  Building2,
  Cloud,
  Server,
  Globe,
  Network,
  GitBranch,
  Shield,
  Cpu,
} from "../icons";

type Ico = import("lucide-react").LucideIcon;

const sources: { icon: Ico; label: string }[] = [
  { icon: Users, label: "Users" },
  { icon: Building2, label: "Branches" },
  { icon: Cloud, label: "Cloud" },
  { icon: Server, label: "Data Centres" },
];

const platform: { brand: string; name: string; icon: Ico }[] = [
  { brand: "ScaleAOn", name: "SD-WAN", icon: Network },
  { brand: "ScaleAOn", name: "SD-Branch", icon: GitBranch },
  { brand: "indusWall", name: "SASE", icon: Shield },
  { brand: "ipDesk", name: "AI Ops", icon: Cpu },
];

const destinations: { icon: Ico; label: string }[] = [
  { icon: Server, label: "Private DC" },
  { icon: Cloud, label: "Public Cloud" },
  { icon: Globe, label: "SaaS" },
  { icon: Globe, label: "Internet" },
];

function FlowNode({ icon: Icon, label }: { icon: Ico; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-card border border-white/10 bg-white/[0.03] text-brand-sky">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <span className="text-[10px] text-[#4a6891]">{label}</span>
    </div>
  );
}

function Diagram() {
  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-3">
        {sources.map((s) => (
          <FlowNode key={s.label} icon={s.icon} label={s.label} />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-3 py-2.5">
        {sources.map((s) => (
          <div key={s.label} className="mx-auto h-5 w-px bg-brand-light/25" />
        ))}
      </div>

      <div className="rounded-card border border-brand-light/25 bg-brand-light/[0.06] p-4">
        <div className="mb-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-brand-light">
          Lavelle Platform
        </div>
        <div className="grid grid-cols-2 gap-3">
          {platform.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2.5 rounded-card border border-[#1a3055] bg-[#112040] px-3 py-2.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-light/15 text-brand-light">
                <p.icon className="h-3.5 w-3.5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold text-white">
                  {p.brand}
                </span>
                <span className="block text-[10px] text-[#4a6891]">{p.name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 py-2.5">
        {destinations.map((s) => (
          <div key={s.label} className="mx-auto h-5 w-px bg-brand-light/25" />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {destinations.map((s) => (
          <FlowNode key={s.label} icon={s.icon} label={s.label} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-14 text-white"
    >
      <GridBackground />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(120% 80% at 15% 0%, rgba(0,120,212,0.20), transparent 55%), radial-gradient(90% 70% at 95% 15%, rgba(59,158,245,0.12), transparent 55%)",
        }}
      />

      <div className="container-x relative grid items-center gap-16 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-brand-light/30 bg-brand-light/10 px-4 py-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-light">
              Enterprise Networking Platform
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-[48px] font-semibold leading-[1.06] tracking-[-0.025em] md:text-[60px] lg:text-[72px]">
              Connect. Control.{" "}
              <span className="text-brand-light">Secure.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.6] text-brand-sky">
              Lavelle Networks connects, controls, and secures distributed
              enterprises through a unified platform for SD-WAN, SD-Branch, SASE,
              and AI-powered network operations.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#platform" className="btn-primary-blue">
                Explore the Platform
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-outline-light">
                Request an Enterprise Demo
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-2 text-[12px] text-[#4a6891]">
              <MapPin className="h-3.5 w-3.5" />
              <span>Built in India. Trusted by enterprises.</span>
              <span>Est. 2015 · Bangalore</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <Diagram />
        </Reveal>
      </div>
    </section>
  );
}
