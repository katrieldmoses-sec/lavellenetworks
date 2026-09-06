import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Sections from "@/components/page/Sections";
import StubPage from "@/components/page/StubPage";
import { contactStubs, noPages } from "@/lib/content/stubs";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return [...noPages, ...contactStubs].map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = noPages.find((p) => p.slug === params.slug);
  if (page) return { title: page.metaTitle, description: page.metaDescription };
  const stub = contactStubs.find((p) => p.slug === params.slug);
  return stub ? { title: stub.heading } : {};
}

export default function Route({ params }: Params) {
  const page = noPages.find((p) => p.slug === params.slug);
  if (page) return <Sections sections={page.sections} />;
  const stub = contactStubs.find((p) => p.slug === params.slug);
  if (stub) return <StubPage heading={stub.heading} />;
  notFound();
}
