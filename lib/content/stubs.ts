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
  { slug: "documentation", heading: "Documentation Page" },
  { slug: "news", heading: "News Page" },
  { slug: "webinars", heading: "Webinars Page" },
  { slug: "whitepapers", heading: "Whitepapers Page" },
];

export const contactStubs: StubPage[] = [
  { slug: "partner-with-us", heading: "PartnerWithUs Page" },
  { slug: "request-demo", heading: "RequestDemo Page" },
  { slug: "support", heading: "Support Page" },
  { slug: "talk-to-expert", heading: "TalkToExpert Page" },
];

export const companyStubs: StubPage[] = [
  { slug: "news", heading: "News Page" },
];

/** Typed empty collections for route groups that have only one kind of page. */
export const noPages: import("./types").PageContent[] = [];
export const noStubs: StubPage[] = [];
