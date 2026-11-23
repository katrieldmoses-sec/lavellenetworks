/**
 * Homepage copy. Updated for change set 1.0 (November 2026): figures from the
 * corporate deck, AI Ops parked until January 2027, customer statements and
 * logos from the deck, and the ten-year panel. The homepage mockups keep the
 * earlier copy in components/mockups/content/home.ts.
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
  body: "Lavelle Networks connects, controls, and secures distributed enterprises through a unified platform for SD-WAN, SD-Branch, and SASE.",
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
    ],
    destinations: [
      { icon: Server, label: "Private DC" },
      { icon: Cloud, label: "Public Cloud" },
      { icon: Globe, label: "SaaS" },
      { icon: Globe, label: "Internet" },
    ] as Node[],
  },
};

/**
 * Figures from the corporate deck. `unit` is set smaller after the counted
 * number; `separator` groups digits Indian-style (3,00,000).
 */
export type Stat = { end: number; suffix: string; unit?: string; label: string; separator?: boolean };

export const STATS = {
  items: [
    { end: 300000, suffix: "+", label: "Enterprise workforce logins daily", separator: true },
    { end: 90, suffix: "", unit: "Billion+", label: "Network sessions inspected every year" },
    { end: 15, suffix: "%", label: "Enterprise market share" },
    { end: 35, suffix: "%", label: "BFSI market share" },
    { end: 10, suffix: "", unit: "Million", label: "Enterprise transactions per day" },
    { end: 300, suffix: "+", unit: "Gbps", label: "Network processing per day" },
  ] as Stat[],
  statement:
    "Designed for enterprises where network reliability, visibility, security, and operational continuity are business-critical.",
};

export const PRODUCTS = {
  kicker: "One Platform. Three Strategic Pillars.",
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
        "Secure Web Gateway",
        "Identity-aware policies",
        "Zero Trust Network Access",
      ],
      cta: "Explore indusWall SASE",
      href: "/products/sase",
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
      solution: "ScaleAOn SD-WAN with CloudStation Insights",
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
        "The rollout across our nationwide branches was remarkably smooth. We achieved secure connectivity and centralized control without downtime — something we’d struggled with for years.",
      role: "Head of Network Infrastructure, Leading Public Sector Bank",
      sector: "BFSI",
    },
    {
      quote:
        "With the new SD-WAN solution, we reduced branch setup time by 60% and gained full visibility into application performance. Our IT team can now troubleshoot issues in minutes instead of hours.",
      role: "VP – IT Operations, National Retail Chain",
      sector: "Retail",
    },
    {
      quote:
        "Transitioning hundreds of remote offices to a unified, cloud-managed network was easier than expected. The platform delivered consistency, reliability, and measurable cost savings from day one.",
      role: "Director – Digital Transformation",
      sector: "Enterprise",
    },
  ],
  logosLabel: "Trusted by enterprises across India",
  /** Files in public/customers, from the corporate deck. */
  logos: [
    { name: "Canara Bank", file: "canara-bank.png" },
    { name: "Indian Bank", file: "indian-bank.png" },
    { name: "ICICI Bank", file: "icici-bank.png" },
    { name: "SBI Mutual Fund", file: "sbi-mutual-fund.png" },
    { name: "Flipkart", file: "flipkart.png" },
    { name: "Federal Bank", file: "federal-bank.png" },
    { name: "Kerala Bank", file: "kerala-bank.png" },
    { name: "Indian Overseas Bank", file: "indian-overseas-bank.png" },
    { name: "CSB Bank", file: "csb-bank.png" },
    { name: "SMFG India Credit", file: "smfg-india-credit.png" },
    { name: "Aakash", file: "aakash.png" },
    { name: "Motilal Oswal", file: "motilal-oswal.png" },
    { name: "L&T Financial Services", file: "lt-financial-services.png" },
    { name: "Karnataka Grameena Bank", file: "karnataka-grameena-bank.png" },
    { name: "Moneyboxx", file: "moneyboxx.png" },
    { name: "Gati", file: "gati.png" },
    { name: "Religare Health Insurance", file: "religare-health-insurance.png" },
    { name: "Care Health Insurance", file: "care-health-insurance.png" },
    { name: "UTI International", file: "uti-international.png" },
    { name: "Titan", file: "titan.png" },
    { name: "Godrej", file: "godrej.png" },
    { name: "Barbeque Nation", file: "barbeque-nation.png" },
    { name: "Page Industries", file: "page-industries.png" },
    { name: "Malabar Gold & Diamonds", file: "malabar-gold-diamonds.png" },
    { name: "Jubilant Motorworks", file: "jubilant-motorworks.png" },
    { name: "Forever 21", file: "forever-21.png" },
  ],
};

/**
 * The ten-year panel: a carousel of the first decade that arrives at a wider
 * 2026 card, "The Decade Ahead". `era` marks the chapters of the story.
 */
export const TIMELINE = {
  kicker: "2015 → 2025",
  title: "A Decade of Building Networks That India Runs On",
  intro: "Ten years of building, scaling and proving Indian enterprise networking.",
  milestones: [
    {
      year: "2015",
      era: "Build",
      title: "The Journey Begins",
      body: "Lavelle Networks is born in Bengaluru with a bold idea: simplify enterprise networking through software-defined, cloud-managed architecture.",
    },
    {
      year: "2016",
      title: "SD-WAN Enters Indian Retail",
      body: "Within a year of launch, one of South Asia’s largest retailers adopts our SD-WAN, becoming one of the region’s earliest large-scale retail deployments.",
    },
    {
      year: "2017",
      era: "Prove",
      title: "Recognition. Investment. Scale.",
      body: "Ideaspring Capital invests. Microsoft Accelerator and Jio GenNext pick Lavelle among India’s promising enterprise technology companies. Our first 1,000+ location SD-WAN network goes live.",
    },
    {
      year: "2018",
      title: "Enterprise Adoption Takes Off",
      body: "Leading businesses across e-commerce, banking, insurance and retail begin rolling out Lavelle. Our e-commerce footprint crosses 1,000+ locations, as YourNest and other investors back our journey.",
    },
    {
      year: "2019",
      era: "Scale",
      title: "SD-WAN Reaches Banking Networks",
      body: "One of South Asia’s first bank ATM SD-WAN networks goes live, proving Indian-built networking technology can support mission-critical financial infrastructure.",
    },
    {
      year: "2020",
      title: "Banking at Asia Scale",
      body: "A leading PSU bank selects our Made-in-India platform. What begins with 3,000+ branches grows into one of Asia’s largest SD-WAN banking networks.",
    },
    {
      year: "2021",
      era: "Endure",
      title: "Scaling Through the Pandemic",
      body: "Even through COVID, we keep India’s essential networks growing. A major e-commerce deployment crosses 2,000 locations, alongside continued expansion across banking and financial services.",
    },
    {
      year: "2022",
      title: "A National Telecom Partnership",
      body: "Bharti Airtel partners with and invests in Lavelle, taking our enterprise SD-WAN technology and go-to-market reach to the next level.",
    },
    {
      year: "2023",
      era: "Lead",
      title: "An Indian Enterprise Networking Leader",
      body: "Lavelle reaches approximately 15% of India’s enterprise SD-WAN market, emerging as the Indian technology company competing with global networking leaders for large enterprise networks.",
    },
    {
      year: "2024–2025",
      title: "Leadership in Indian BFSI",
      body: "Major wins across Canara Bank, Indian Bank, Indian Overseas Bank, Karnataka Gramin Bank and others strengthen our position in BFSI, taking Lavelle beyond 20,000 enterprise locations nationwide.",
    },
    {
      year: "2025",
      era: "10 Years",
      title: "A Decade of Proven Innovation",
      body: "Ten years. 150+ customers. 20,000+ locations. From an Indian SDN pioneer to a trusted enterprise networking platform powering mission-critical networks across the country.",
    },
  ] as { year: string; era?: string; title: string; body: string }[],
  /** The destination card: wider, and in the language of the decade ahead. */
  ahead: {
    year: "2026 →",
    title: "The Decade Ahead",
    lines: ["From networks that connect.", "To networks that think."],
    body: "AI-native enterprise networking, built in India for the world.",
    signoff: "Do Great Work Anywhere.",
  },
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
      body: "Three integrated platforms — SD-WAN, SD-Branch, and SASE — purpose-built for Indian enterprise requirements with no comparable local competitor.",
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
    body: "Talk to our team about your SD-WAN, SD-Branch, or SASE requirements.",
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
export function formatStat(s: { end: number; suffix: string; unit?: string; separator?: boolean }) {
  return (s.separator ? s.end.toLocaleString("en-IN") : String(s.end)) + s.suffix + (s.unit ? " " + s.unit : "");
}
