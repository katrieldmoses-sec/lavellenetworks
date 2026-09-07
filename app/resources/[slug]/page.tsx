import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { canonicalPath } from "@/lib/routes";
import Sections from "@/components/page/Sections";
import StubPage from "@/components/page/StubPage";
import { resourcePages } from "@/lib/content/resources";
import { resourceStubs } from "@/lib/content/stubs";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return [...resourcePages, ...resourceStubs].map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = resourcePages.find((p) => p.slug === params.slug);
  const canonical = canonicalPath("/resources/" + params.slug);
  if (page)
    return {
      title: page.metaTitle,
      description: page.metaDescription,
      alternates: { canonical },
    };
  const stub = resourceStubs.find((p) => p.slug === params.slug);
  return stub ? { title: stub.heading, alternates: { canonical } } : {};
}

export default function Route({ params }: Params) {
  const page = resourcePages.find((p) => p.slug === params.slug);
  if (page) return <Sections sections={page.sections} />;
  const stub = resourceStubs.find((p) => p.slug === params.slug);
  if (stub) return <StubPage heading={stub.heading} />;
  notFound();
}
