import type { PageContent } from "./types";

export const resourcePages: PageContent[] = [
  {
    slug: "blogs",
    metaTitle: "Blogs & Insights \u2014 Lavelle Networks",
    metaDescription: "Founder articles, product perspectives, media coverage, and technical analysis from 10 years of building and deploying enterprise networks across India.",
    sections: [
      { kind: "hero", eyebrow: "Insights from a decade of networking", title: "Perspectives that anticipated the evolution of enterprise networking.", body: "Founder articles, product perspectives, external media coverage, and technical analysis from 10 years of building and deploying enterprise networks across India." },
      { kind: "components", eyebrow: "Featured", title: "Why Indian Enterprises Are Moving to SD-WAN: A Decade in Review", items: [
        { title: "Why Indian Enterprises Are Moving to SD-WAN: A Decade in Review", href: "/resources/blogs", linkLabel: "Read Article", bullets: ["SD-WAN \u00b7 Article", "From early adopter hesitation to mainstream enterprise deployment \u2014 how SD-WAN reshaped distributed connectivity across India's complex network landscape.", "Lavelle Networks \u00b7 November 2024 \u00b7 8 min read"] }] },
      { kind: "components", eyebrow: "Latest", title: "More from the Lavelle Networks team", items: [
        { title: "Building a SASE Architecture for the Indian Hybrid Enterprise", href: "/resources/whitepapers", linkLabel: "Read", bullets: ["SASE \u00b7 Whitepaper", "A practical guide to converging networking and security for distributed workforces, multi-cloud environments, and regulated industries.", "October 2024 \u00b7 12 min"] },
        { title: "The Predictive Network: How AIOps Eliminates Enterprise Downtime", href: "/products/ai-operations", linkLabel: "Read", bullets: ["AI Ops \u00b7 Article", "AI-powered operations enable IT teams to identify and resolve network issues before users experience degradation.", "September 2024 \u00b7 6 min"] },
        { title: "[Insert verified customer case study title]", href: "/resources/case-studies", linkLabel: "Read", bullets: ["Customer Transformation \u00b7 Case Study", "[Insert brief description of the business challenge, Lavelle solution, and enterprise outcome.]", "August 2024 \u00b7 5 min"] },
        { title: "Multi-Cloud Networking: Connecting Enterprises to AWS, Azure, and GCP", href: "/use-cases/multi-cloud", linkLabel: "Read", bullets: ["Cloud \u00b7 Article", "How enterprise IT teams are architecting resilient connectivity across public cloud environments without sacrificing security or performance.", "July 2024 \u00b7 7 min"] },
        { title: "SD-Branch: Why SD-WAN is Just the Beginning of Branch Transformation", href: "/use-cases/branch-transformation", linkLabel: "Read", bullets: ["SD-Branch \u00b7 Article", "The enterprise branch needs more than a WAN edge \u2014 converged networking changes what a branch can be.", "June 2024 \u00b7 7 min"] }] },
      { kind: "platform", eyebrow: "Resource Library", title: "More ways to learn from a decade of deployments.", links: [
        { title: "Case Studies", body: "Real enterprise deployments. Measured outcomes.", href: "/resources/case-studies" },
        { title: "Whitepapers", body: "Technical depth on architecture, security, and operations.", href: "/resources/whitepapers" },
        { title: "Webinars", body: "Live and on-demand sessions from our network engineers.", href: "/resources/webinars" }] },
    ],
  },
];
