import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StubPage from "@/components/page/StubPage";
import { PageHero } from "@/components/page/Sections";
import ContactForm from "@/components/ContactForm";
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
        <PageHero eyebrow={form.eyebrow} title={form.title} body={form.body} compact scene={`/contact/${params.slug}`} />
        <section className="bg-lv-paper px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <ContactForm topic={form.topic} />
          </div>
        </section>
      </>
    );
  }

  const stub = contactStubs.find((p) => p.slug === params.slug);
  if (stub) return <StubPage heading={stub.heading} scene={`/contact/${params.slug}`} />;
  notFound();
}
