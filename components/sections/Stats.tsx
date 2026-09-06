import CountUp from "../CountUp";
import Reveal from "../Reveal";

const stats = [
  { end: 10, suffix: "+", label: "Years of execution" },
  { end: 100, suffix: "+", label: "Enterprise customers" },
  { end: 25000, suffix: "+", label: "Deployed sites", separator: true },
  { end: 6, suffix: "", label: "Industry verticals" },
];

export default function Stats() {
  return (
    <section className="bg-brand-blue py-14 text-white">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="font-serif text-[48px] font-bold leading-none">
                <CountUp end={s.end} suffix={s.suffix} separator={s.separator} />
              </div>
              <div className="mt-1.5 text-[13px] text-white/70">{s.label}</div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-12 max-w-4xl text-[15px] leading-relaxed text-white/70">
            Designed for enterprises where network reliability, visibility,
            security, and operational continuity are business-critical.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
