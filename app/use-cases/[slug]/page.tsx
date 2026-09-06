import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Sections from "@/components/page/Sections";
import StubPage from "@/components/page/StubPage";
import { useCasePages } from "@/lib/content/use-cases";
import { noStubs } from "@/lib/content/stubs";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return [...useCasePages, ...noStubs].map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = useCasePages.find((p) => p.slug === params.slug);
  if (page) return { title: page.metaTitle, description: page.metaDescription };
  const stub = noStubs.find((p) => p.slug === params.slug);
  return stub ? { title: stub.heading } : {};
}

export default function Route({ params }: Params) {
  const page = useCasePages.find((p) => p.slug === params.slug);
  if (page) return <Sections sections={page.sections} />;
  const stub = noStubs.find((p) => p.slug === params.slug);
  if (stub) return <StubPage heading={stub.heading} />;
  notFound();
}
