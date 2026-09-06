import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import GridBackground from "../GridBackground";

const milestones = [
  {
    year: "2015",
    title: "Founded in Bangalore",
    body: "Lavelle Networks incorporated with a mission to build enterprise-grade networking from India.",
  },
  {
    year: "2016",
    title: "First enterprise deployments",
    body: "Early SD-WAN deployments across BFSI and retail customers.",
  },
  {
    year: "2018",
    title: "Cloud-native platform",
    body: "ScaleAOn rebuilt for multi-cloud environments — AWS, Azure, and GCP ready.",
  },
  {
    year: "[Year]",
    title: "SD-WAN scale milestone",
    body: "[Insert verified deployment milestone]",
  },
  {
    year: "2021",
    title: "SASE capabilities",
    body: "indusWall launched as Lavelle's cloud-native security platform.",
  },
  {
    year: "[Year]",
    title: "SD-Branch expansion",
    body: "Platform extended to cover the complete enterprise branch edge.",
  },
  {
    year: "2023",
    title: "AI Operations launch",
    body: "ipDesk AI Ops introduced for predictive, autonomous network management.",
  },
  {
    year: "2024",
    title: "Unified platform",
    body: "Connect. Control. Secure. Four integrated platform pillars powering enterprise networks across India.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-navy py-28 text-white"
    >
      <GridBackground />
      <div className="container-x relative">
        <SectionHeading
          dark
          kicker="Connect. Control. Secure."
          title="Ten years. One coherent platform strategy."
        />

        {/* Horizontally scrolling milestone track, as in the source */}
        <Reveal className="mt-10">
          <div className="relative overflow-x-auto">
            {/* connecting rail */}
            <div
              className="absolute left-0 top-[5px] h-px w-full bg-white/10"
              aria-hidden
            />
            <ul className="flex min-w-max gap-6">
              {milestones.map((m) => (
                <li
                  key={`${m.year}-${m.title}`}
                  className="w-[357px] shrink-0"
                >
                  <span
                    className="block h-2.5 w-2.5 rounded-full bg-brand-light shadow-[0_0_12px_2px_rgba(59,158,245,0.6)]"
                    aria-hidden
                  />
                  <span className="mt-3 block font-mono text-[12px] font-bold leading-[16px] text-brand-light">
                    {m.year}
                  </span>
                  <h3 className="mt-2 text-[12px] font-semibold leading-[16.5px] text-white">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-[10px] leading-[16.25px] text-white/55">
                    {m.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
