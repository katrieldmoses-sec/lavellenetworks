import Reveal from "../Reveal";
import GridBackground from "../GridBackground";
import {
  Building2,
  Landmark,
  Users,
  Cloud,
  Server,
  Wifi,
  Network,
  GitBranch,
  Shield,
  Lock,
  Globe,
  ChartNoAxesColumn,
  Cpu,
  Zap,
  Eye,
} from "../icons";

type Ico = import("lucide-react").LucideIcon;
type Item = { label: string; icon: Ico };

const bands: {
  label: string;
  badge?: string;
  active?: boolean;
  items: Item[];
}[] = [
  {
    label: "Your Enterprise",
    items: [
      { label: "Branches", icon: Building2 },
      { label: "Headquarters", icon: Landmark },
      { label: "Remote Users", icon: Users },
      { label: "Cloud Workloads", icon: Cloud },
      { label: "Data Centres", icon: Server },
      { label: "IoT & Edge", icon: Wifi },
    ],
  },
  {
    label: "Lavelle Platform",
    badge: "Active Platform",
    active: true,
    items: [
      { label: "ScaleAOn SD-WAN", icon: Network },
      { label: "ScaleAOn SD-Branch", icon: GitBranch },
      { label: "indusWall SASE", icon: Shield },
      { label: "ZTNA", icon: Lock },
      { label: "Secure Internet", icon: Globe },
      { label: "Network Analytics", icon: ChartNoAxesColumn },
      { label: "ipDesk AI Ops", icon: Cpu },
    ],
  },
  {
    label: "Unified Control",
    items: [
      { label: "Orchestration", icon: Zap },
      { label: "Central Policy", icon: Lock },
      { label: "App Visibility", icon: Eye },
      { label: "Security Rules", icon: Shield },
      { label: "Analytics", icon: ChartNoAxesColumn },
      { label: "Automation", icon: Cpu },
    ],
  },
  {
    label: "Destinations",
    items: [
      { label: "Private DC", icon: Server },
      { label: "Public Cloud", icon: Cloud },
      { label: "SaaS", icon: Globe },
      { label: "Internet", icon: Globe },
      { label: "Partner Networks", icon: Network },
    ],
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-navy py-24 text-white"
    >
      <GridBackground />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(0,98,177,0.22), transparent 60%)",
        }}
      />

      <div className="container-x relative">
        {/* Centred heading with pill badge */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-light/30 px-5 py-2 font-mono text-[12px] font-normal uppercase leading-[16px] tracking-[1.2px] text-brand-light">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand-light"
                aria-hidden
              />
              Platform Architecture
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-serif text-[32px] font-semibold leading-[1.12] tracking-[-0.01em] sm:text-[42px] lg:text-[52px]">
              One control plane. Every connection.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[26px] text-brand-sky/80">
              From branches and remote users to cloud workloads and data centres
              — the Lavelle platform sits at the centre of every enterprise
              network decision.
            </p>
          </Reveal>
        </div>

        {/* Stacked horizontal bands inside one container */}
        <Reveal delay={200}>
          <div className="mt-14 overflow-hidden rounded-[10px] border border-white/[0.09]">
            {bands.map((band, i) => (
              <div
                key={band.label}
                className={`px-6 py-6 sm:px-8 ${
                  i > 0 ? "border-t border-white/[0.07]" : ""
                } ${band.active ? "bg-brand-blue/[0.14]" : ""}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[12px] font-normal uppercase leading-[16px] tracking-[1.2px] text-[#7fafd8]">
                    {band.label}
                  </span>
                  {band.badge && (
                    <span className="shrink-0 rounded-full border border-brand-light/40 px-3 py-1 text-[12px] text-brand-light">
                      {band.badge}
                    </span>
                  )}
                </div>

                <ul className="mt-4 flex flex-wrap gap-3">
                  {band.items.map((item) => (
                    <li key={item.label}>
                      <span
                        className={`inline-flex items-center gap-2.5 rounded-[6px] border px-4 py-2.5 text-[15px] ${
                          band.active
                            ? "border-brand-light/30 bg-brand-light/[0.08] text-white"
                            : "border-white/10 bg-white/[0.03] text-white/90"
                        }`}
                      >
                        <item.icon
                          className={`h-4 w-4 shrink-0 ${
                            band.active ? "text-brand-light" : "text-brand-sky"
                          }`}
                        />
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
