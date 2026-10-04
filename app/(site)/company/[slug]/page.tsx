import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { canonicalPath } from "@/lib/routes";
import Sections from "@/components/page/Sections";
import StubPage from "@/components/page/StubPage";
import { companyPages } from "@/lib/content/company";
import { companyStubs } from "@/lib/content/stubs";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return [...companyPages, ...companyStubs].map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = companyPages.find((p) => p.slug === params.slug);
  const canonical = canonicalPath("/company/" + params.slug);
  if (page)
    return {
      title: page.metaTitle,
      description: page.metaDescription,
      alternates: { canonical },
    };
  const stub = companyStubs.find((p) => p.slug === params.slug);
  return stub ? { title: stub.heading, alternates: { canonical } } : {};
}

export default function Route({ params }: Params) {
  const page = companyPages.find((p) => p.slug === params.slug);
  if (page) return <Sections sections={page.sections} />;
  const stub = companyStubs.find((p) => p.slug === params.slug);
  if (stub) return <StubPage heading={stub.heading} />;
  notFound();
}
