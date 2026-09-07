import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StubPage from "@/components/page/StubPage";
import ContactForm from "@/components/ContactForm";
import GridBackground from "@/components/GridBackground";
import Reveal from "@/components/Reveal";
import { contactStubs } from "@/lib/content/stubs";
import { canonicalPath } from "@/lib/routes";

type Params = { params: { slug: string } };

/** Routes that render the enquiry form rather than a placeholder. */
const FORM_PAGES: Record<
  string,
  { topic: string; eyebrow: string; title: string; body: string }
> = {
  "talk-to-expert": {
    topic: "Talk to an Expert",
    eyebrow: "Contact",
    title: "Talk to a network expert.",
    body: "Tell us about your SD-WAN, SASE, or AI Ops requirements and our team will get back to you.",
  },
  "request-demo": {
    topic: "Request a Demo",
    eyebrow: "Contact",
    title: "Request an enterprise demo.",
    body: "See ScaleAOn, indusWall, or ipDesk in action with a walkthrough tailored to your network.",
  },
};

export function generateStaticParams() {
  return [
    ...Object.keys(FORM_PAGES).map((slug) => ({ slug })),
    ...contactStubs.map((p) => ({ slug: p.slug })),
  ];
}

export function generateMetadata({ params }: Params): Metadata {
  const canonical = canonicalPath("/contact/" + params.slug);
  const form = FORM_PAGES[params.slug];
  if (form)
    return {
      title: form.title,
      description: form.body,
      alternates: { canonical },
    };
  const stub = contactStubs.find((p) => p.slug === params.slug);
  return stub ? { title: stub.heading, alternates: { canonical } } : {};
}

export default function ContactRoute({ params }: Params) {
  const form = FORM_PAGES[params.slug];

  if (form) {
    return (
      <>
        <section className="relative overflow-hidden bg-navy pt-14 text-white">
          <GridBackground />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(120% 80% at 15% 0%, rgba(0,120,212,0.20), transparent 55%)",
            }}
          />
          <div className="container-x relative py-24">
            <div className="max-w-3xl">
              <Reveal>
                <span className="block font-mono text-[12px] font-normal uppercase leading-[16px] tracking-[1.2px] text-brand-sky">
                  {form.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-serif text-[36px] font-semibold leading-[1.15] md:text-[48px] lg:text-[60px] lg:leading-[75px]">
                  {form.title}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-[18px] leading-[29.25px] text-brand-sky">
                  {form.body}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl">
              <ContactForm topic={form.topic} />
            </div>
          </div>
        </section>
      </>
    );
  }

  const stub = contactStubs.find((p) => p.slug === params.slug);
  if (stub) return <StubPage heading={stub.heading} />;
  notFound();
}
