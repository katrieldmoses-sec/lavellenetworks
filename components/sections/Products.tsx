import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import {
  ArrowRight,
  CircleCheck,
  Network,
  GitBranch,
  Shield,
  Cpu,
} from "../icons";

type Ico = import("lucide-react").LucideIcon;

const products: {
  brand: string;
  name: string;
  category: string;
  icon: Ico;
  desc: string;
  features: string[];
  cta: string;
  href: string;
}[] = [
  {
    brand: "ScaleAOn",
    name: "SD-WAN",
    category: "Enterprise WAN",
    icon: Network,
    desc: "Enterprise SD-WAN built for performance, resilience, and operational control.",
    features: [
      "Application-aware path control",
      "Multi-provider resilience",
      "Zero-touch provisioning",
    ],
    cta: "Explore ScaleAOn SD-WAN",
    href: "/products/sd-wan",
  },
  {
    brand: "ScaleAOn",
    name: "SD-Branch",
    category: "Branch Infrastructure",
    icon: GitBranch,
    desc: "One platform for the complete enterprise branch.",
    features: [
      "Converged WAN, LAN & wireless",
      "Unified branch management",
      "Zero-touch deployment",
    ],
    cta: "Explore ScaleAOn SD-Branch",
    href: "/products/secure-branch",
  },
  {
    brand: "indusWall",
    name: "SASE",
    category: "Network Security",
    icon: Shield,
    desc: "Cloud-delivered networking and security for users, branches, applications, and devices.",
    features: [
      "Zero Trust Network Access",
      "Secure Web Gateway",
      "Identity-aware policies",
    ],
    cta: "Explore indusWall SASE",
    href: "/products/sase",
  },
  {
    brand: "ipDesk",
    name: "AI Ops",
    category: "Network Operations",
    icon: Cpu,
    desc: "AI-powered operations for predictive, autonomous, and experience-led enterprise networks.",
    features: [
      "Predictive anomaly detection",
      "Automated root-cause analysis",
      "Network health scoring",
    ],
    cta: "Explore ipDesk AI Ops",
    href: "/products/ai-operations",
  },
];

export default function Products() {
  return (
    <section id="platform" className="bg-white py-28">
      <div className="container-x">
        <SectionHeading
          kicker="One Platform. Four Strategic Pillars."
          title="Built for every connection, branch, user, application, and operational decision."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 90}>
              <a
                href={p.href}
                className="group flex h-full flex-col card p-7 transition-colors duration-200 hover:border-brand-light/50"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-brand-blue/[0.08] text-brand-azure">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block font-mono text-[10px] font-bold leading-[15px] tracking-[0.1em] text-brand-azure">
                      {p.brand}
                    </span>
                    <h3 className="font-serif text-[24px] font-semibold leading-[30px] text-navy">
                      {p.name}
                    </h3>
                    <span className="block text-[12px] font-medium leading-[16px] text-brand-blue">
                      {p.category}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-[14px] leading-[22.75px] text-navy-500">
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-[12px] leading-[16px] text-navy/80"
                    >
                      <CircleCheck className="h-4 w-4 shrink-0 text-brand-azure" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 flex items-center gap-1.5 text-[14px] font-semibold leading-[20px] text-brand-blue">
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
