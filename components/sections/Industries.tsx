import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import {
  ChevronRight,
  Building2,
  ShoppingCart,
  Factory,
  Heart,
  Landmark,
  GraduationCap,
} from "../icons";

type Ico = import("lucide-react").LucideIcon;

const industries: {
  name: string;
  icon: Ico;
  challenge: string;
  solution: string;
  outcome: string;
}[] = [
  {
    name: "BFSI",
    icon: Building2,
    challenge:
      "Branch uptime, secure connectivity, and regulatory operations across hundreds of locations.",
    solution: "ScaleAOn SD-WAN with indusWall SASE",
    outcome:
      "Continuous branch connectivity with compliant application access controls.",
  },
  {
    name: "Retail",
    icon: ShoppingCart,
    challenge:
      "Rapid store deployment, POS application reliability, and centralised IT control across thousands of stores.",
    solution: "ScaleAOn SD-Branch with zero-touch provisioning",
    outcome:
      "New store connectivity in hours, not weeks. POS uptime across every location.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    challenge:
      "Factory floor connectivity, OT network isolation, and operational visibility across plant locations.",
    solution: "ScaleAOn SD-WAN with ipDesk AI Ops",
    outcome:
      "Real-time plant network visibility with predictive issue resolution.",
  },
  {
    name: "Healthcare",
    icon: Heart,
    challenge:
      "Clinical application performance, patient data security, and connectivity across hospitals and clinics.",
    solution: "indusWall SASE with centralised policy management",
    outcome:
      "Secure, high-performance access to clinical applications from every care location.",
  },
  {
    name: "Government & PSU",
    icon: Landmark,
    challenge:
      "Sovereign data controls, multi-agency connectivity, and compliance-driven network operations.",
    solution: "ScaleAOn SD-WAN with identity-aware security policies",
    outcome:
      "Compliant connectivity across government networks with full audit visibility.",
  },
  {
    name: "Education",
    icon: GraduationCap,
    challenge:
      "Campus and remote-learning connectivity, secure internet access, and network management at scale.",
    solution: "ScaleAOn SD-Branch with indusWall Secure Internet Access",
    outcome:
      "Reliable learning environments with appropriate access controls across every campus.",
  },
];

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block font-mono text-[10px] font-semibold leading-[16px] tracking-[0.14em] text-brand-blue">
        {label}
      </span>
      <p className="text-[12px] leading-[16px] text-navy-500">{value}</p>
    </div>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-28">
      <div className="container-x">
        <SectionHeading
          kicker="Built for mission-critical industries"
          title="Enterprise networking designed around real operational environments."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 80}>
              <div className="group flex h-full flex-col card p-6 transition-colors duration-200 hover:border-brand-light/50">
                <div className="flex h-10 items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-card bg-navy text-brand-light">
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-[18px] font-semibold text-navy">
                    {ind.name}
                  </h3>
                </div>

                <div className="mt-4 space-y-3">
                  <Row label="Challenge" value={ind.challenge} />
                  <Row label="Solution" value={ind.solution} />
                  <Row label="Outcome" value={ind.outcome} />
                </div>

                <a
                  href="#contact"
                  className="mt-4 flex items-center gap-1 text-[12px] font-semibold leading-[16px] text-brand-blue"
                >
                  View {ind.name} solutions
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
