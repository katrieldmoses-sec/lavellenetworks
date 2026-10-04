/**
 * Homepage copy, verbatim from the live homepage sections
 * (components/sections/*). The homepage mockups render exclusively from this
 * module so every layout carries identical words; scripts/check-mockup-copy.mjs
 * verifies each mockup against the live page.
 */
import type { LucideIcon } from "lucide-react";
import {
  Users,
  Building2,
  Cloud,
  Server,
  Globe,
  Network,
  GitBranch,
  Shield,
  Cpu,
  TrendingUp,
  Lock,
  Zap,
  ShoppingCart,
  Factory,
  Heart,
  Landmark,
  GraduationCap,
  Wifi,
  ChartNoAxesColumn,
  Eye,
} from "lucide-react";

type Node = { label: string; icon: LucideIcon };

export const HERO = {
  kicker: "Enterprise Networking Platform",
  /** Rendered as "Connect. Control." + highlighted "Secure." */
  titleLead: "Connect. Control.",
  titleAccent: "Secure.",
  words: ["Connect.", "Control.", "Secure."],
  body: "Lavelle Networks connects, controls, and secures distributed enterprises through a unified platform for SD-WAN, SD-Branch, SASE, and AI-powered network operations.",
  primary: { label: "Explore the Platform", href: "/products/sd-wan" },
  secondary: { label: "Request an Enterprise Demo", href: "/contact/request-demo" },
  meta: ["Built in India. Trusted by enterprises.", "Est. 2015 · Bangalore"],
  diagram: {
    sources: [
      { icon: Users, label: "Users" },
      { icon: Building2, label: "Branches" },
      { icon: Cloud, label: "Cloud" },
      { icon: Server, label: "Data Centres" },
    ] as Node[],
    platformLabel: "Lavelle Platform",
    platform: [
      { brand: "ScaleAOn", name: "SD-WAN", icon: Network },
      { brand: "ScaleAOn", name: "SD-Branch", icon: GitBranch },
      { brand: "indusWall", name: "SASE", icon: Shield },
      { brand: "ipDesk", name: "AI Ops", icon: Cpu },
    ],
    destinations: [
      { icon: Server, label: "Private DC" },
      { icon: Cloud, label: "Public Cloud" },
      { icon: Globe, label: "SaaS" },
      { icon: Globe, label: "Internet" },
    ] as Node[],
  },
};

export const STATS = {
  items: [
    { end: 10, suffix: "+", label: "Years of execution" },
    { end: 100, suffix: "+", label: "Enterprise customers" },
    { end: 25000, suffix: "+", label: "Deployed sites", separator: true },
    { end: 6, suffix: "", label: "Industry verticals" },
  ],
  statement:
    "Designed for enterprises where network reliability, visibility, security, and operational continuity are business-critical.",
};

export const PRODUCTS = {
  kicker: "One Platform. Four Strategic Pillars.",
  title:
    "Built for every connection, branch, user, application, and operational decision.",
  items: [
    {
      brand: "ScaleAOn",
      name: "SD-WAN",
      category: "Enterprise WAN",
      icon: Network,
      desc: "Enterprise SD-WAN built for performance, resilience, and operational control.",
      features: [
        "Application-aware path control",
        "Multi-provider resilience",
        "Zero-touch provisioning",
      ],
      cta: "Explore ScaleAOn SD-WAN",
      href: "/products/sd-wan",
    },
    {
      brand: "ScaleAOn",
      name: "SD-Branch",
      category: "Branch Infrastructure",
      icon: GitBranch,
      desc: "One platform for the complete enterprise branch.",
      features: [
        "Converged WAN, LAN & wireless",
        "Unified branch management",
        "Zero-touch deployment",
      ],
      cta: "Explore ScaleAOn SD-Branch",
      href: "/products/secure-branch",
    },
    {
      brand: "indusWall",
      name: "SASE",
      category: "Network Security",
      icon: Shield,
      desc: "Cloud-delivered networking and security for users, branches, applications, and devices.",
      features: [
        "Zero Trust Network Access",
        "Secure Web Gateway",
        "Identity-aware policies",
      ],
      cta: "Explore indusWall SASE",
      href: "/products/sase",
    },
    {
      brand: "ipDesk",
      name: "AI Ops",
      category: "Network Operations",
      icon: Cpu,
      desc: "AI-powered operations for predictive, autonomous, and experience-led enterprise networks.",
      features: [
        "Predictive anomaly detection",
        "Automated root-cause analysis",
        "Network health scoring",
      ],
      cta: "Explore ipDesk AI Ops",
      href: "/products/ai-operations",
    },
  ],
};

export const ARCHITECTURE = {
  kicker: "Platform Architecture",
  title: "One control plane. Every connection.",
  body: "From branches and remote users to cloud workloads and data centres — the Lavelle platform sits at the centre of every enterprise network decision.",
  bands: [
    {
      label: "Your Enterprise",
      items: [
        { label: "Branches", icon: Building2 },
        { label: "Headquarters", icon: Landmark },
        { label: "Remote Users", icon: Users },
        { label: "Cloud Workloads", icon: Cloud },
        { label: "Data Centres", icon: Server },
        { label: "IoT & Edge", icon: Wifi },
      ] as Node[],
    },
    {
      label: "Lavelle Platform",
      badge: "Active Platform",
      active: true,
      items: [
        { label: "ScaleAOn SD-WAN", icon: Network },
        { label: "ScaleAOn SD-Branch", icon: GitBranch },
        { label: "indusWall SASE", icon: Shield },
        { label: "ZTNA", icon: Lock },
        { label: "Secure Internet", icon: Globe },
        { label: "Network Analytics", icon: ChartNoAxesColumn },
        { label: "ipDesk AI Ops", icon: Cpu },
      ] as Node[],
    },
    {
      label: "Unified Control",
      items: [
        { label: "Orchestration", icon: Zap },
        { label: "Central Policy", icon: Lock },
        { label: "App Visibility", icon: Eye },
        { label: "Security Rules", icon: Shield },
        { label: "Analytics", icon: ChartNoAxesColumn },
        { label: "Automation", icon: Cpu },
      ] as Node[],
    },
    {
      label: "Destinations",
      items: [
        { label: "Private DC", icon: Server },
        { label: "Public Cloud", icon: Cloud },
        { label: "SaaS", icon: Globe },
        { label: "Internet", icon: Globe },
        { label: "Partner Networks", icon: Network },
      ] as Node[],
    },
  ] as { label: string; badge?: string; active?: boolean; items: Node[] }[],
};

export const WHY = {
  kicker: "Why enterprises choose Lavelle",
  title:
    "Built to solve real enterprise network problems — not a product brochure.",
  items: [
    {
      icon: TrendingUp,
      title: "Proven at enterprise scale",
      body: "More than 25,000 sites under management across distributed enterprises in banking, retail, manufacturing, and government.",
    },
    {
      icon: Building2,
      title: "Built for complex Indian networks",
      body: "Designed for the realities of Indian enterprise infrastructure — variable ISP quality, multi-provider environments, and regulatory compliance requirements.",
    },
    {
      icon: Lock,
      title: "Centralised control at any scale",
      body: "Apply consistent networking and security policies across every branch, remote user, and cloud workload from a single orchestration plane.",
    },
    {
      icon: Zap,
      title: "Faster branch deployment",
      body: "Deploy new branches without sending specialised network engineers to every location. Zero-touch provisioning reduces deployment time from weeks to hours.",
    },
    {
      icon: Network,
      title: "Resilient multi-provider connectivity",
      body: "Maintain application performance across broadband, MPLS, 4G, and 5G links simultaneously. Automatic failover ensures business continuity.",
    },
    {
      icon: Shield,
      title: "Unified networking and security",
      body: "Reduce operational complexity by converging SD-WAN, SASE, and Zero Trust into one platform with unified visibility and automation.",
    },
  ],
};

export const INDUSTRIES = {
  kicker: "Built for mission-critical industries",
  title: "Enterprise networking designed around real operational environments.",
  labels: { challenge: "Challenge", solution: "Solution", outcome: "Outcome" },
  linkPrefix: "View",
  linkSuffix: "solutions",
  items: [
    {
      name: "BFSI",
      href: "/solutions/bfsi",
      icon: Building2,
      challenge:
        "Branch uptime, secure connectivity, and regulatory operations across hundreds of locations.",
      solution: "ScaleAOn SD-WAN with indusWall SASE",
      outcome:
        "Continuous branch connectivity with compliant application access controls.",
    },
    {
      name: "Retail",
      href: "/solutions/retail",
      icon: ShoppingCart,
      challenge:
        "Rapid store deployment, POS application reliability, and centralised IT control across thousands of stores.",
      solution: "ScaleAOn SD-Branch with zero-touch provisioning",
      outcome:
        "New store connectivity in hours, not weeks. POS uptime across every location.",
    },
    {
      name: "Manufacturing",
      href: "/solutions/manufacturing",
      icon: Factory,
      challenge:
        "Factory floor connectivity, OT network isolation, and operational visibility across plant locations.",
      solution: "ScaleAOn SD-WAN with ipDesk AI Ops",
      outcome:
        "Real-time plant network visibility with predictive issue resolution.",
    },
    {
      name: "Healthcare",
      href: "/solutions/healthcare",
      icon: Heart,
      challenge:
        "Clinical application performance, patient data security, and connectivity across hospitals and clinics.",
      solution: "indusWall SASE with centralised policy management",
      outcome:
        "Secure, high-performance access to clinical applications from every care location.",
    },
    {
      name: "Government & PSU",
      href: "/solutions/government",
      icon: Landmark,
      challenge:
        "Sovereign data controls, multi-agency connectivity, and compliance-driven network operations.",
      solution: "ScaleAOn SD-WAN with identity-aware security policies",
      outcome:
        "Compliant connectivity across government networks with full audit visibility.",
    },
    {
      name: "Education",
      href: "/solutions/education",
      icon: GraduationCap,
      challenge:
        "Campus and remote-learning connectivity, secure internet access, and network management at scale.",
      solution: "ScaleAOn SD-Branch with indusWall Secure Internet Access",
      outcome:
        "Reliable learning environments with appropriate access controls across every campus.",
    },
  ],
};

export const PROVEN = {
  kicker: "Proven in production",
  title:
    "Trusted where network performance directly affects business performance.",
  link: { label: "All case studies", href: "/resources/blogs" },
  testimonials: [
    {
      quote:
        "[Insert verified customer quotation from an enterprise decision-maker — CTO, CIO, or Head of IT Infrastructure.]",
      role: "[Insert verified customer role and organisation]",
      sector: "BFSI",
    },
    {
      quote:
        "[Insert verified customer quotation about deployment scale, operational impact, or business outcome.]",
      role: "[Insert verified customer role and organisation]",
      sector: "Retail",
    },
    {
      quote:
        "[Insert verified customer quotation about network reliability, visibility, or cost reduction.]",
      role: "[Insert verified customer role and organisation]",
      sector: "Manufacturing",
    },
  ],
  logosLabel: "Trusted by enterprises across India",
  logoPlaceholder: "[Insert approved customer logo]",
  logoCount: 8,
};

export const TIMELINE = {
  kicker: "Connect. Control. Secure.",
  title: "Ten years. One coherent platform strategy.",
  milestones: [
    {
      year: "2015",
      title: "Founded in Bangalore",
      body: "Lavelle Networks incorporated with a mission to build enterprise-grade networking from India.",
    },
    {
      year: "2016",
      title: "First enterprise deployments",
      body: "Early SD-WAN deployments across BFSI and retail customers.",
    },
    {
      year: "2018",
      title: "Cloud-native platform",
      body: "ScaleAOn rebuilt for multi-cloud environments — AWS, Azure, and GCP ready.",
    },
    {
      year: "[Year]",
      title: "SD-WAN scale milestone",
      body: "[Insert verified deployment milestone]",
    },
    {
      year: "2021",
      title: "SASE capabilities",
      body: "indusWall launched as Lavelle's cloud-native security platform.",
    },
    {
      year: "[Year]",
      title: "SD-Branch expansion",
      body: "Platform extended to cover the complete enterprise branch edge.",
    },
    {
      year: "2023",
      title: "AI Operations launch",
      body: "ipDesk AI Ops introduced for predictive, autonomous network management.",
    },
    {
      year: "2024",
      title: "Unified platform",
      body: "Connect. Control. Secure. Four integrated platform pillars powering enterprise networks across India.",
    },
  ],
};

export const INSIGHTS = {
  kicker: "Insights from a decade of networking",
  title: "Perspectives that anticipated the evolution of enterprise networking.",
  link: { label: "All resources", href: "/resources/blogs" },
  readLabel: "Read",
  filters: ["All", "SD-WAN", "SASE", "AI Ops", "Cloud", "Customer Transformation"],
  items: [
    {
      tag: "SD-WAN",
      read: "8 min",
      meta: "Article · 2024",
      title: "Why Indian Enterprises Are Moving to SD-WAN: A Decade in Review",
      body: "From early adopter hesitation to mainstream enterprise deployment — how SD-WAN reshaped distributed connectivity across India.",
    },
    {
      tag: "SASE",
      read: "12 min",
      meta: "Whitepaper · 2024",
      title: "Building a SASE Architecture for the Indian Hybrid Enterprise",
      body: "A practical guide to converging networking and security for distributed workforces and multi-cloud environments.",
    },
    {
      tag: "AI Ops",
      read: "6 min",
      meta: "Article · 2023",
      title: "The Predictive Network: How AIOps Eliminates Enterprise Downtime",
      body: "AI-powered operations enable IT teams to resolve network issues before users experience them.",
    },
    {
      tag: "Customer Transformation",
      read: "5 min",
      meta: "Case Study · 2023",
      title:
        "Connecting 800+ Branches: An Enterprise Banking Network Transformation",
      body: "How a leading private-sector bank modernised its branch network using ScaleAOn SD-WAN across India.",
    },
  ],
};

export const RECOGNITION = {
  kicker: "Recognition & market validation",
  title: "A decade of recognition from industry bodies, analysts, and media.",
  items: [
    { title: "[Insert award name and year]", body: "[Insert recognising body]" },
    { title: "[Insert analyst recognition]", body: "[Insert analyst firm]" },
    { title: "[Insert industry award]", body: "[Insert organisation]" },
    { title: "[Insert product innovation recognition]", body: "[Insert body]" },
    { title: "[Insert founder recognition]", body: "[Insert publication]" },
    { title: "[Insert partner recognition]", body: "[Insert partner organisation]" },
  ],
};

export const INVESTMENT = {
  kicker: "Investment case",
  title: "Built on products, customers, and long-term execution.",
  items: [
    {
      icon: TrendingUp,
      title: "Market opportunity",
      body: "India's enterprise networking market is growing rapidly. SD-WAN and SASE are at the inflection point of mainstream enterprise adoption across BFSI, retail, manufacturing, and government.",
    },
    {
      icon: Server,
      title: "Product differentiation",
      body: "Four integrated platforms — SD-WAN, SD-Branch, SASE, and AI Ops — purpose-built for Indian enterprise requirements with no comparable local competitor.",
    },
    {
      icon: Users,
      title: "Customer traction",
      body: "25,000+ managed sites. Customers include organisations across banking, insurance, retail, manufacturing, healthcare, and government.",
    },
    {
      icon: Globe,
      title: "Growth trajectory",
      body: "Consistent growth across revenue and deployment scale. Expanding to international markets across South Asia and the Middle East. NaaS and managed-services platform in roadmap.",
    },
  ],
  primary: { label: "Talk to Leadership", href: "/contact/request-demo" },
  secondary: { label: "Download Company Overview", href: "/contact/request-demo" },
};

export const FINAL_CTA = {
  kicker: "Connect. Control. Secure. Anywhere.",
  title: "Build a network ready for the next decade.",
  body: "Modernise connectivity, branch operations, security, and network intelligence through one enterprise platform.",
  primary: { label: "Request an Enterprise Demo", href: "/contact/request-demo" },
  secondary: { label: "Talk to a Network Expert", href: "/contact/request-demo" },
};

/** Site header CTAs and the footer copy that frames every page. */
export const CHROME = {
  headerCtas: {
    expert: { label: "Talk to Expert", href: "/contact/talk-to-expert" },
    demo: { label: "Request Demo", href: "/contact/request-demo" },
  },
  footerBand: {
    title: "Ready to modernise your enterprise network?",
    body: "Talk to our team about your SD-WAN, SASE, or AI Ops requirements.",
    expert: { label: "Talk to an Expert", href: "/contact/talk-to-expert" },
    demo: { label: "Request Enterprise Demo", href: "/contact/request-demo" },
  },
  footerBrand: {
    tagline: "Connect. Control. Secure. Anywhere.",
    blurb:
      "India's trusted enterprise networking platform. Connect. Control. Secure. — mission-critical connectivity for enterprises across India.",
    location: "Bangalore, India · Est. 2015",
    email: "sales@lavellenetworks.com",
    phone: "+91 80 4567 8900",
    phoneHref: "tel:+918045678900",
  },
  copyright: "© 2024 Lavelle Networks Pvt. Ltd. All rights reserved.",
  builtIn: "Built in India",
};

/** Formats a stat the same way the live CountUp does once it settles. */
export function formatStat(s: { end: number; suffix: string; separator?: boolean }) {
  return (s.separator ? s.end.toLocaleString("en-IN") : String(s.end)) + s.suffix;
}
