/** Footer link columns and legal links. Shared by the site footer and the
    homepage mockups. */
export const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "ScaleAOn SD-WAN", href: "/products/sd-wan" },
      { label: "ScaleAOn SD-Branch", href: "/products/secure-branch" },
      { label: "indusWall SASE", href: "/products/sase" },
      { label: "ipDesk AI Ops", href: "/products/ai-operations" },
      { label: "ZTNA", href: "/products/ztna" },
      { label: "Network Analytics", href: "/products/network-analytics" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "BFSI", href: "/solutions/bfsi" },
      { label: "Retail", href: "/solutions/retail" },
      { label: "Manufacturing", href: "/solutions/manufacturing" },
      { label: "Government & PSU", href: "/solutions/government" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Education", href: "/solutions/education" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs & Insights", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Datasheets", href: "/resources/datasheets" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Lavelle", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  },
  {
    title: "Partners & Support",
    links: [
      { label: "Partner Programme", href: "/partners" },
      { label: "Partner With Us", href: "/contact/partner-with-us" },
      { label: "Request Demo", href: "/contact/request-demo" },
      { label: "Talk to Expert", href: "/contact/talk-to-expert" },
    ],
  },
];

export const FOOTER_LEGAL = [
  "Privacy Policy",
  "Terms of Use",
  "Security",
  "Cookie Preferences",
  "Sitemap",
];
