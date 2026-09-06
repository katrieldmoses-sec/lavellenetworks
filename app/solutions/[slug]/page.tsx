import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Sections from "@/components/page/Sections";
import StubPage from "@/components/page/StubPage";
import { solutionPages } from "@/lib/content/solutions";
import { solutionStubs } from "@/lib/content/stubs";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return [...solutionPages, ...solutionStubs].map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = solutionPages.find((p) => p.slug === params.slug);
  if (page) return { title: page.metaTitle, description: page.metaDescription };
  const stub = solutionStubs.find((p) => p.slug === params.slug);
  return stub ? { title: stub.heading } : {};
}

export default function Route({ params }: Params) {
  const page = solutionPages.find((p) => p.slug === params.slug);
  if (page) return <Sections sections={page.sections} />;
  const stub = solutionStubs.find((p) => p.slug === params.slug);
  if (stub) return <StubPage heading={stub.heading} />;
  notFound();
}
