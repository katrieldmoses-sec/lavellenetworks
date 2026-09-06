import { Fragment } from "react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import GridBackground from "../GridBackground";
import {
  ArrowRight,
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

const columns: {
  heading: string;
  badge?: string;
  brand?: boolean;
  items: Item[];
}[] = [
  {
    heading: "Your Enterprise",
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
    heading: "Lavelle Platform",
    badge: "Active Platform",
    brand: true,
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
    heading: "Unified Control",
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
    heading: "Destinations",
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
        <SectionHeading
          dark
          size="md"
          kicker="Platform Architecture"
          title="One control plane. Every connection."
          intro="From branches and remote users to cloud workloads and data centres — the Lavelle platform sits at the centre of every enterprise network decision."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr_auto_1fr] lg:items-start">
          {columns.map((col, idx) => (
            <Fragment key={col.heading}>
              <Reveal
                delay={idx * 90}
                className={`h-full rounded-card border p-5 ${
                  col.brand
                    ? "border-brand-light/40 bg-brand-light/[0.06]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-sky">
                    {col.heading}
                  </span>
                  {col.badge && (
                    <span className="rounded-full bg-brand-light/20 px-2 py-0.5 font-mono text-[8px] font-medium tracking-wider text-brand-light">
                      {col.badge}
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item.label}
                      className={`flex items-center gap-2 rounded-md border px-3 py-2 text-[12px] leading-[16px] ${
                        col.brand
                          ? "border-[#1a3055] bg-[#112040] font-medium text-white"
                          : "border-white/5 bg-white/[0.02] text-white/75"
                      }`}
                    >
                      <item.icon className="h-4 w-4 shrink-0 text-brand-light" />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </Reveal>
              {idx < columns.length - 1 && (
                <div
                  className="hidden items-center justify-center pt-16 text-brand-light/50 lg:flex"
                  aria-hidden
                >
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
