import Reveal from "../Reveal";
import GridBackground from "../GridBackground";
import SectionHeading from "../SectionHeading";
import { Server, Users, Globe, TrendingUp, Quote } from "../icons";

type Ico = import("lucide-react").LucideIcon;

const metricCards: { icon: Ico; value: string; unit: string; label: string }[] = [
  { icon: Server, value: "12+", unit: "in India", label: "Network PoPs" },
  { icon: Users, value: "200+", unit: "engineers", label: "Engineering team" },
  { icon: Globe, value: "8+", unit: "countries", label: "Countries deployed" },
  {
    icon: TrendingUp,
    value: "Consistent",
    unit: "growth",
    label: "Year-on-year growth",
  },
];

const statRows: { label: string; value: string }[] = [
  { label: "Enterprise network uptime SLA", value: "99.99%" },
  { label: "Sites provisioned under 24 hours", value: "[Insert verified metric]" },
  {
    label: "Customer satisfaction (Gartner Peer Insights)",
    value: "[Insert verified rating]",
  },
];

export default function BuiltInIndia() {
  return (
    <section
      id="built-in-india"
      className="relative overflow-hidden bg-navy py-28 text-white"
    >
      <GridBackground />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(70% 60% at 100% 0%, rgba(0,120,212,0.18), transparent 60%)",
        }}
      />
      <div className="container-x relative grid gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left: heading, paragraph, metric cards */}
        <div>
          <SectionHeading
            dark
            kicker="Built in India"
            title="Built in India. Engineered for the world's most demanding enterprise networks."
            intro="Lavelle Networks combines deep understanding of complex enterprise environments with world-class product engineering, delivering networking technology from India for distributed organisations."
          />

          <div className="mt-8 grid grid-cols-2 gap-3">
            {metricCards.map((m, i) => (
              <Reveal key={m.label} delay={(i % 2) * 80 + 120}>
                <div className="h-full rounded-card border border-[#1a3055] bg-[#112040] p-4">
                  <m.icon className="h-5 w-5 text-brand-light" />
                  <div className="mt-3 text-[14px] font-bold text-white">
                    {m.value}{" "}
                    <span className="font-normal text-[#4a6891]">
                      {m.unit}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[12px] text-[#4a6891]">
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: stat rows + analyst quote */}
        <div className="space-y-3 lg:pt-2">
          <Reveal delay={120}>
            <div className="rounded-card border border-[#1a3055] bg-[#112040] p-6">
              <ul className="divide-y divide-white/[0.06]">
                {statRows.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <span className="text-[13px] text-brand-sky">{s.label}</span>
                    <span className="shrink-0 font-mono text-[13px] font-bold text-white">
                      {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <figure className="rounded-card border border-white/10 bg-white/[0.03] p-5">
              <Quote className="h-7 w-7 text-brand-light/40" />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-white/80">
                [Insert analyst or media quote validating Lavelle&apos;s position
                in the Indian enterprise networking market.]
              </blockquote>
              <figcaption className="mt-4 font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-sky">
                — [Insert analyst firm or publication], [Year]
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
