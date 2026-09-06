import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { ArrowRight, TrendingUp, Server, Users, Globe } from "../icons";

type Ico = import("lucide-react").LucideIcon;

const pillars: { icon: Ico; title: string; body: string }[] = [
  {
    icon: TrendingUp,
    title: "Market opportunity",
    body: "India's enterprise networking market is growing rapidly. SD-WAN and SASE are at the inflection point of mainstream enterprise adoption across BFSI, retail, manufacturing, and government.",
  },
  {
    icon: Server,
    title: "Product differentiation",
    body: "Four integrated platforms — SD-WAN, SD-Branch, SASE, and AI Ops — purpose-built for Indian enterprise requirements with no comparable local competitor.",
  },
  {
    icon: Users,
    title: "Customer traction",
    body: "25,000+ managed sites. Customers include organisations across banking, insurance, retail, manufacturing, healthcare, and government.",
  },
  {
    icon: Globe,
    title: "Growth trajectory",
    body: "Consistent growth across revenue and deployment scale. Expanding to international markets across South Asia and the Middle East. NaaS and managed-services platform in roadmap.",
  },
];

export default function Investment() {
  return (
    <section id="investment" className="bg-mist-100 py-24">
      <div className="container-x">
        <SectionHeading
          kicker="Investment case"
          title="Built on products, customers, and long-term execution."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 80}>
              <div className="h-full card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-card bg-mist-100 text-brand-blue">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[14px] font-semibold leading-[20px] text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-navy-500">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="/contact/request-demo" className="btn-primary-blue">
              Talk to Leadership
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact/request-demo" className="btn-outline-dark">
              Download Company Overview
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
