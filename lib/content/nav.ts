/** Main navigation, mirrored from the source design. Shared by the site
    header and the homepage mockups. */
export type NavLink = { name: string; href: string };
export type NavGroup = { label: string; items: NavLink[] };
export type NavEntry = {
  label: string;
  href: string;
  /** Panel width in px, measured from the source design. */
  panelWidth: number;
  /** Grouped mega-menu (rendered in two columns) or a flat list. */
  groups?: NavGroup[];
  items?: NavLink[];
};

/** Mirrors the navigation data in the source design exactly. */
export const NAV: NavEntry[] = [
  {
    label: "Products",
    href: "/products/sd-wan",
    panelWidth: 680,
    groups: [
      {
        label: "Platform",
        items: [
          { name: "ScaleAOn SD-WAN", href: "/products/sd-wan" },
          { name: "ScaleAOn SD-Branch", href: "/products/secure-branch" },
          { name: "indusWall SASE", href: "/products/sase" },
          { name: "ipDesk AI Ops", href: "/products/ai-operations" },
        ],
      },
      {
        label: "SD-WAN Components",
        items: [
          { name: "CloudPort Edge", href: "/products/cloudport-edge" },
          { name: "CloudPort Gateway", href: "/products/cloudport-gateway" },
          { name: "CloudStation Controller", href: "/products/cloudstation-controller" },
          { name: "CloudStation Insights", href: "/products/cloudstation-insights" },
        ],
      },
      {
        label: "Security & Access",
        items: [
          { name: "ZTNA", href: "/products/ztna" },
          { name: "Secure Internet Access", href: "/products/secure-internet" },
        ],
      },
      {
        label: "Cloud & Intelligence",
        items: [
          { name: "Cloud Connectivity", href: "/products/cloud-connectivity" },
          { name: "Network Analytics", href: "/products/network-analytics" },
          { name: "Digital Experience", href: "/products/digital-experience" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/bfsi",
    panelWidth: 560,
    groups: [
      {
        label: "Use Cases",
        items: [
          { name: "Hybrid WAN", href: "/use-cases/hybrid-wan" },
          { name: "Microsoft 365 Performance", href: "/use-cases/microsoft-365-performance" },
          { name: "Enterprise Network Monitoring", href: "/use-cases/enterprise-network-monitoring" },
          { name: "Multi-cloud Connectivity", href: "/use-cases/multi-cloud-connectivity" },
          { name: "Application Availability", href: "/use-cases/application-availability" },
          { name: "Branch Transformation", href: "/use-cases/branch-transformation" },
          { name: "Hybrid Workforce", href: "/use-cases/hybrid-workforce" },
        ],
      },
      {
        label: "Industries",
        items: [
          { name: "BFSI", href: "/solutions/bfsi" },
          { name: "Retail", href: "/solutions/retail" },
          { name: "Manufacturing", href: "/solutions/manufacturing" },
          { name: "Logistics & Supply Chain", href: "/solutions/logistics" },
          { name: "Information Technology", href: "/solutions/information-technology" },
          { name: "Healthcare", href: "/solutions/healthcare" },
          { name: "Education", href: "/solutions/education" },
          { name: "Government & PSU", href: "/solutions/government" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blogs",
    panelWidth: 192,
    items: [
      { name: "Blogs & Insights", href: "/resources/blogs" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Datasheets", href: "/resources/datasheets" },
    ],
  },
  {
    label: "Company",
    href: "/company/about",
    panelWidth: 192,
    items: [
      { name: "Our Story", href: "/company/about" },
      { name: "Leadership", href: "/company/leadership" },
      { name: "Careers", href: "/company/careers" },
      { name: "Investors", href: "/company/investors" },
      { name: "Contact", href: "/company/contact" },
    ],
  },
];
