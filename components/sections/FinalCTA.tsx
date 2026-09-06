import Reveal from "../Reveal";
import GridBackground from "../GridBackground";
import { ArrowRight } from "../icons";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-32 text-white"
    >
      <GridBackground />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(90% 80% at 50% 0%, rgba(0,98,177,0.28), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-brand-light">
              Connect. Control. Secure. Anywhere.
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-serif text-[36px] font-semibold leading-[45px] tracking-[-0.01em] lg:text-[60px] lg:leading-[75px]">
              Build a network ready for the next decade.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-brand-sky">
              Modernise connectivity, branch operations, security, and network
              intelligence through one enterprise platform.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact/request-demo" className="btn-primary-blue">
                Request an Enterprise Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/contact/request-demo" className="btn-outline-light">
                Talk to a Network Expert
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
