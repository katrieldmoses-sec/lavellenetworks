import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { Award } from "../icons";

const awards = [
  { title: "[Insert award name and year]", body: "[Insert recognising body]" },
  { title: "[Insert analyst recognition]", body: "[Insert analyst firm]" },
  { title: "[Insert industry award]", body: "[Insert organisation]" },
  { title: "[Insert product innovation recognition]", body: "[Insert body]" },
  { title: "[Insert founder recognition]", body: "[Insert publication]" },
  { title: "[Insert partner recognition]", body: "[Insert partner organisation]" },
];

export default function Recognition() {
  return (
    <section id="recognition" className="bg-mist-50 py-20">
      <div className="container-x">
        <SectionHeading
          size="md"
          kicker="Recognition & market validation"
          title="A decade of recognition from industry bodies, analysts, and media."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="flex h-full items-start gap-3 card p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-accent-gold/10 text-accent-gold">
                  <Award className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <h3 className="text-[13px] font-semibold leading-[18px] text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-[16px] text-navy-500">
                    {a.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
