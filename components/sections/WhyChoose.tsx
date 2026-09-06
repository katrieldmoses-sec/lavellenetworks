import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { TrendingUp, Building2, Lock, Zap, Network, Shield } from "../icons";

type Ico = import("lucide-react").LucideIcon;

const reasons: { icon: Ico; title: string; body: string }[] = [
  {
    icon: TrendingUp,
    title: "Proven at enterprise scale",
    body: "More than 25,000 sites under management across distributed enterprises in banking, retail, manufacturing, and government.",
  },
  {
    icon: Building2,
    title: "Built for complex Indian networks",
    body: "Designed for the realities of Indian enterprise infrastructure — variable ISP quality, multi-provider environments, and regulatory compliance requirements.",
  },
  {
    icon: Lock,
    title: "Centralised control at any scale",
    body: "Apply consistent networking and security policies across every branch, remote user, and cloud workload from a single orchestration plane.",
  },
  {
    icon: Zap,
    title: "Faster branch deployment",
    body: "Deploy new branches without sending specialised network engineers to every location. Zero-touch provisioning reduces deployment time from weeks to hours.",
  },
  {
    icon: Network,
    title: "Resilient multi-provider connectivity",
    body: "Maintain application performance across broadband, MPLS, 4G, and 5G links simultaneously. Automatic failover ensures business continuity.",
  },
  {
    icon: Shield,
    title: "Unified networking and security",
    body: "Reduce operational complexity by converging SD-WAN, SASE, and Zero Trust into one platform with unified visibility and automation.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-mist-100 py-28">
      <div className="container-x">
        <SectionHeading
          kicker="Why enterprises choose Lavelle"
          title="Built to solve real enterprise network problems — not a product brochure."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <div className="h-full card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-card bg-mist-100 text-brand-blue">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[14px] font-semibold leading-[20px] text-navy">
                  {r.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-navy-500">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
