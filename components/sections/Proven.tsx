import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { ArrowRight, Quote } from "../icons";

const testimonials = [
  {
    quote:
      "[Insert verified customer quotation from an enterprise decision-maker — CTO, CIO, or Head of IT Infrastructure.]",
    role: "[Insert verified customer role and organisation]",
    sector: "BFSI",
  },
  {
    quote:
      "[Insert verified customer quotation about deployment scale, operational impact, or business outcome.]",
    role: "[Insert verified customer role and organisation]",
    sector: "Retail",
  },
  {
    quote:
      "[Insert verified customer quotation about network reliability, visibility, or cost reduction.]",
    role: "[Insert verified customer role and organisation]",
    sector: "Manufacturing",
  },
];

export default function Proven() {
  return (
    <section id="proven" className="bg-mist-50 py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Proven in production"
            title="Trusted where network performance directly affects business performance."
          />
          <Reveal delay={160}>
            <a
              href="/resources/blogs"
              className="flex items-center gap-1.5 text-[14px] font-semibold text-brand-blue"
            >
              All case studies
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.sector} delay={i * 90}>
              <figure className="flex h-full flex-col card p-7">
                <Quote className="h-5 w-5 text-brand-light/40" />
                <blockquote className="mt-4 flex-1 text-[14px] leading-[22.75px] text-navy/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5">
                  <div className="text-[12px] font-semibold leading-[16px] text-navy">
                    {t.role}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] font-semibold leading-[15px] tracking-[0.14em] text-brand-blue">
                    {t.sector}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16">
            <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">
              Trusted by enterprises across India
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-[42px] items-center justify-center rounded-card border border-dashed border-navy/15 bg-white px-2 text-center text-[10px] leading-[15px] text-navy-500"
                >
                  [Insert approved customer logo]
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
