import type { StubPage } from "./types";

export const solutionStubs: StubPage[] = [
  { slug: "education", heading: "Education Page" },
  { slug: "government", heading: "Government Page" },
  { slug: "healthcare", heading: "Healthcare Page" },
  { slug: "manufacturing", heading: "Manufacturing Page" },
  { slug: "multi-cloud", heading: "MultiCloud Page" },
  { slug: "retail", heading: "Retail Page" },
];

export const resourceStubs: StubPage[] = [
  { slug: "case-studies", heading: "CaseStudies Page" },
  { slug: "datasheets", heading: "Datasheets Page" },
];

export const contactStubs: StubPage[] = [
  { slug: "partner-with-us", heading: "PartnerWithUs Page" },
];

export const companyStubs: StubPage[] = [
];

/** Typed empty collections for route groups that have only one kind of page. */
export const noPages: import("./types").PageContent[] = [];
export const noStubs: StubPage[] = [];
