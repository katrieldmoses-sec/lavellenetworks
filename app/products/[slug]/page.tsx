import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Sections from "@/components/page/Sections";
import StubPage from "@/components/page/StubPage";
import { productPages, productStubs } from "@/lib/content/products";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return [...productPages, ...productStubs].map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = productPages.find((p) => p.slug === params.slug);
  if (page) return { title: page.metaTitle, description: page.metaDescription };
  const stub = productStubs.find((p) => p.slug === params.slug);
  return stub ? { title: stub.heading } : {};
}

export default function ProductRoute({ params }: Params) {
  const page = productPages.find((p) => p.slug === params.slug);
  if (page) return <Sections sections={page.sections} />;
  const stub = productStubs.find((p) => p.slug === params.slug);
  if (stub) return <StubPage heading={stub.heading} />;
  notFound();
}
