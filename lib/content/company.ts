import type { PageContent } from "./types";

export const companyPages: PageContent[] = [
  {
    slug: "about",
    metaTitle: "About Lavelle Networks",
    metaDescription:
      "Founded in 2015 in Bangalore to build world-class enterprise networking technology from India, powering connectivity, security and operations for Indian enterprises.",
    sections: [
      {
        kind: "hero",
        eyebrow: "About Lavelle Networks",
        title: "Connect. Control. Secure. A platform built for the next decade.",
        body: "Lavelle Networks was founded in 2015 in Bangalore with a clear mission: build world-class enterprise networking technology from India. We power the connectivity, security, and operations of enterprises across India.",
        ctas: [
          { label: "Meet our Leadership", href: "/company/leadership" },
          { label: "View Open Roles", href: "/company/careers" },
        ],
      },
      {
        kind: "note",
        eyebrow: "Our Mission",
        title: "Build the networking infrastructure that India's enterprises depend on.",
        body: "Lavelle Networks exists to make enterprise-grade networking accessible, reliable, and intelligent for every distributed organisation in India — from banks with 800 branches to manufacturers with 50 factories. We believe that networking technology should be built by people who understand the environments it operates in. That means Indian bandwidth realities, Indian regulatory requirements, Indian ISP ecosystems, and the Indian enterprise's unique operational constraints. Our products are not adaptations of Western networking platforms. They are built from the ground up for the demands of Indian enterprise infrastructure — and that difference is measurable in every deployment.",
      },
      {
        kind: "stats",
        eyebrow: "By the numbers",
        items: [
          { value: "2015", title: "Founded", body: "Bangalore, India" },
          { value: "25,000+", title: "Managed Sites", body: "Across distributed enterprises" },
          { value: "6", title: "Industry Verticals", body: "BFSI to education" },
        ],
      },
      {
        kind: "table",
        eyebrow: "A Decade of Execution",
        title: "From Bangalore startup to India's enterprise networking platform.",
        headers: ["Year", "Milestone"],
        rows: [
          ["2015", "Founded in Bangalore. First SD-WAN platform development begins."],
          ["2016", "First 50 enterprise deployments across BFSI and retail sectors."],
          ["2018", "Platform rebuilt for multi-cloud era. AWS, Azure, GCP integration."],
          ["2020", "Expanded into manufacturing, healthcare, and government sectors."],
          ["2021", "indusWall SASE platform launched. Security convergence begins."],
          ["2023", "ipDesk AI Ops launched. Predictive network operations for enterprise."],
          ["2024", "10 years. 25,000+ sites. Four unified platform pillars."],
        ],
      },
      {
        kind: "platform",
        eyebrow: "Platform Strategy",
        title: "Four platforms. One enterprise network strategy.",
        links: [
          { title: "ScaleAOn SD-WAN", body: "Intelligent software-defined WAN for distributed enterprise connectivity.", href: "/products/sd-wan" },
          { title: "ScaleAOn SD-Branch", body: "Unified branch networking converging WAN, switching, wireless, and security.", href: "/products/secure-branch" },
          { title: "indusWall SASE", body: "Cloud-native security and networking convergence for the hybrid enterprise.", href: "/products/sase" },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Built in India",
        title: "World-class enterprise networking technology, engineered from India.",
        items: [
          { title: "Engineering Depth", body: "Every feature is built, owned, and evolved by our Bangalore engineering teams — not integrated from third-party components." },
          { title: "Customer Proximity", body: "We deploy alongside your team. Implementation, optimisation, and ongoing operations are not outsourced." },
          { title: "Product Ownership", body: "Full-stack platform ownership means we can respond to Indian enterprise requirements faster than any international vendor." },
          { title: "Global Ambition", body: "Built in India, designed for the complexity of global enterprise. Our platform is ready for multi-region deployments." },
        ],
      },
      {
        kind: "cta",
        title: "Build the network your enterprise depends on.",
        ctas: [
          { label: "Request an Enterprise Demo", href: "/contact/request-demo" },
          { label: "Talk to a Network Expert", href: "/contact/talk-to-expert" },
        ],
      },
    ],
  },
  {
    slug: "leadership",
    metaTitle: "Leadership — Lavelle Networks",
    metaDescription:
      "Lavelle Networks is led by a founding team with deep roots in enterprise networking and distributed systems, built from Bangalore.",
    sections: [
      {
        kind: "hero",
        eyebrow: "Company / Leadership",
        title: "Experienced leadership. Decade of execution.",
        body: "Lavelle Networks is led by a founding team with deep roots in enterprise networking and distributed systems. Built from Bangalore, the leadership has spent a decade shaping how Indian enterprises approach connectivity, security, and network operations.",
      },
      {
        kind: "people",
        eyebrow: "Founding Team",
        title: "The team that built Lavelle from zero",
        intro:
          "Founded in 2015 in Bangalore, the founding team combines platform architecture, engineering depth, and operational execution.",
        items: [
          { category: "Platform Strategy & Product", name: "[Insert Name]", role: "[Insert Title — Co-founder & CEO]", bio: "Co-founder with background in SDN and distributed systems. Previously led product and engineering at enterprise networking organisations. Architect of the ScaleAOn platform vision.", note: "Verification required" },
          { category: "Engineering & Architecture", name: "[Insert Name]", role: "[Insert Title — Co-founder & CTO]", bio: "Co-founder with deep expertise in network operating systems and carrier-grade infrastructure. Leads engineering architecture and platform R&D from Lavelle's Bangalore centre.", note: "Verification required" },
          { category: "Operations & Customer Success", name: "[Insert Name]", role: "[Insert Title — Co-founder & COO]", bio: "Co-founder responsible for enterprise deployment operations, customer success, and India go-to-market. Scaled operations across thousands of managed sites.", note: "Verification required" },
        ],
      },
      {
        kind: "people",
        eyebrow: "Senior Leadership",
        title: "The team behind platform, sales, and operations",
        intro:
          "Senior leaders across engineering, product, sales, security, and customer experience who shape Lavelle's day-to-day execution.",
        items: [
          { category: "Engineering", name: "[Insert Name]", role: "[Insert Title — VP Engineering]", bio: "Leads core platform engineering teams across SD-WAN, SASE, and AI Ops pillars. Background in network virtualisation and cloud-native systems.", note: "Verify" },
          { category: "Sales", name: "[Insert Name]", role: "[Insert Title — VP Sales]", bio: "Leads enterprise and channel sales across India. Track record of building distributed enterprise accounts in BFSI, manufacturing, and retail sectors.", note: "Verify" },
          { category: "Product", name: "[Insert Name]", role: "[Insert Title — VP Product]", bio: "Drives product strategy and roadmap for the four-pillar platform. Background in product management for enterprise networking and cloud infrastructure.", note: "Verify" },
          { category: "Security", name: "[Insert Name]", role: "[Insert Title — Head of Security Research]", bio: "Leads security architecture and threat intelligence for the indusWall SASE platform. Background in zero trust, ZTNA, and enterprise perimeter security.", note: "Verify" },
          { category: "Customer Experience", name: "[Insert Name]", role: "[Insert Title — Head of Customer Experience]", bio: "Responsible for customer onboarding, professional services, and post-deployment optimisation across Lavelle's enterprise base.", note: "Verify" },
          { category: "Finance", name: "[Insert Name]", role: "[Insert Title — Head of Finance]", bio: "Leads financial planning, strategy, and investor relations. Background in enterprise technology finance and capital markets.", note: "Verify" },
        ],
      },
      {
        kind: "people",
        eyebrow: "Executive Advisors",
        title: "Industry veterans who guide the platform",
        intro:
          "Lavelle benefits from executive advisors drawn from global networking, telecom, financial services, and enterprise technology. Their counsel shapes product strategy, market entry, and long-term positioning.",
        items: [
          { name: "[Insert Name]", role: "[Insert Title — Executive Advisor]", bio: "Industry veteran with decades of leadership in global networking and telecommunications. Advises on product direction and international market strategy." },
          { name: "[Insert Name]", role: "[Insert Title — Executive Advisor]", bio: "Former executive at a leading Indian public sector or private sector financial institution. Advises on enterprise strategy and BFSI sector relationships." },
          { name: "[Insert Name]", role: "[Insert Title — Executive Advisor]", bio: "Technology and policy advisor with experience in Indian government and regulatory environments. Advises on public sector and compliance strategy." },
          { name: "[Insert Name]", role: "[Insert Title — Executive Advisor]", bio: "Serial entrepreneur and investor in enterprise technology. Advises on go-to-market, partnerships, and growth strategy." },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Engineering Leadership Principles",
        title: "What guides the team",
        items: [
          { title: "Customer-First Engineering", body: "Every platform feature is shaped by direct customer feedback from production deployments. Our engineering teams are embedded in enterprise problems, not abstracted from them." },
          { title: "Technical Rigour", body: "We build networking infrastructure at carrier grade. Rigour in design, testing, and validation is non-negotiable — the networks we manage run banking, healthcare, and critical operations." },
          { title: "Built in India", body: "India's enterprise networking complexity — scale, diversity of sites, cost constraints — is the proving ground for our platform. What works at India's scale, works everywhere." },
          { title: "Ownership Culture", body: "Engineering teams own features end-to-end from design through production monitoring. There is no handoff between product and engineering — both share the outcome." },
          { title: "Long-term Perspective", body: "We build for decade-long platform relationships with customers. Short-term feature velocity is balanced against architectural decisions that age well as the customer's network evolves." },
        ],
      },
      {
        kind: "cta",
        title: "Want to build with us?",
        body: "We are always looking for engineers, product thinkers, and enterprise specialists who want to build the next decade of enterprise networking from India.",
        ctas: [
          { label: "Join the team", href: "/company/careers" },
          { label: "Talk to us", href: "/company/contact" },
        ],
      },
    ],
  },
  {
    slug: "careers",
    metaTitle: "Careers \u2014 Lavelle Networks",
    metaDescription: "Join the team making enterprise networking smarter, faster, and more secure \u2014 built in India for the world.",
    sections: [
      { kind: "hero", eyebrow: "We're Hiring", title: "Build the network of the next decade", body: "Join the team making enterprise networking smarter, faster, and more secure \u2014 built in India for the world.", ctas: [{ label: "View Open Roles", href: "/company/contact" }] },
      { kind: "capabilities", eyebrow: "Why Lavelle", title: "Craft that matters, at scale", items: [
        { title: "Global Impact, Indian Roots", body: "Build enterprise networking technology trusted by India's largest organisations \u2014 competing with global vendors from Bangalore." },
        { title: "Deep Engineering Problems", body: "Work on SD-WAN, SASE, AI Ops, and cloud networking \u2014 real distributed systems challenges at enterprise scale." },
        { title: "A Decade of Craft", body: "A seasoned team that's shipped mission-critical networking products since 2015. Learn from engineers who've done it before." },
        { title: "Ownership & Speed", body: "Small teams, high ownership. Your decisions ship to production and land in enterprise networks across India." },
        { title: "Built in India", body: "Be part of building world-class enterprise technology from India \u2014 a product that competes globally and is trusted by India's largest organisations." }] },
      { kind: "stats", eyebrow: "By the numbers", items: [
        { value: "10+", title: "Years", body: "In enterprise networking" },
        { value: "30+", title: "States & UTs", body: "Covered" },
        { value: "100%", title: "Built & supported", body: "In India" }] },
      { kind: "components", eyebrow: "Open Roles", title: "Current openings", items: [
        { title: "Senior Software Engineer \u2014 SD-WAN Data Plane", href: "/company/contact", linkLabel: "Apply", bullets: ["Engineering \u00b7 Full-time \u00b7 Bangalore", "Design and optimise the data plane for our ScaleAOn SD-WAN platform.", "Deep experience in Linux networking, DPDK, or eBPF required."] },
        { title: "Product Manager \u2014 AI Operations", href: "/company/contact", linkLabel: "Apply", bullets: ["Product \u00b7 Full-time \u00b7 Bangalore", "Own the roadmap for ipDesk AI Ops.", "Drive AIOps features that reduce NOC effort and improve network visibility."] },
        { title: "Staff Engineer \u2014 Cloud Infrastructure", href: "/company/contact", linkLabel: "Apply", bullets: ["Engineering \u00b7 Full-time \u00b7 Bangalore", "Architect and scale the cloud orchestration layer powering CloudStation Controller and CloudStation Insights."] },
        { title: "Enterprise Account Executive", href: "/company/contact", linkLabel: "Apply", bullets: ["Sales \u00b7 Full-time \u00b7 Mumbai / Delhi / Bangalore", "Drive new enterprise logos in BFSI, manufacturing, and government verticals."] }] },
      { kind: "cta", title: "Don't see the right role?", body: "We're always interested in exceptional people. Send us your profile and tell us what you'd build at Lavelle.", ctas: [{ label: "Get in Touch", href: "/company/contact" }] },
    ],
  },
  {
    slug: "contact",
    metaTitle: "Contact Lavelle Networks",
    metaDescription: "Talk to the right team directly \u2014 enterprise demos, sales, technical consultation, partnerships, support, and media enquiries.",
    sections: [
      { kind: "hero", eyebrow: "Contact Lavelle Networks", title: "Talk to the right team, directly.", body: "Whether you're evaluating our platform, planning a deployment, exploring a partnership, or looking for technical support \u2014 we'll connect you with the right person." },
      { kind: "capabilities", eyebrow: "Choose Your Path", title: "How can we help?", items: [
        { title: "Enterprise Demo", body: "See ScaleAOn or indusWall in action. Get a customised platform walkthrough for your use case." },
        { title: "Sales Enquiry", body: "Talk to our enterprise sales team about pricing, deployment scope, or trial options. sales@lavellenetworks.com" },
        { title: "Technical Consultation", body: "Speak with a network architect about your specific requirements and infrastructure context." },
        { title: "Partnerships", body: "Explore becoming a channel partner, reseller, or technology alliance partner." },
        { title: "Customer Support", body: "Existing customers \u2014 access technical support, raise tickets, and reach our help portal." },
        { title: "Media & Analysts", body: "Press, analyst, and industry enquiries welcome. We respond to all credentialed requests. media@lavellenetworks.com" }] },
      { kind: "table", eyebrow: "Find Us", title: "Our offices", headers: ["Office", "Address", "Contact"], rows: [
        ["Headquarters \u2014 Bangalore, India", "#47, 2nd Floor, Whitefield Main Road, Whitefield, Bangalore \u2014 560066", "+91 80 4567 8900 \u00b7 enterprise@lavellenetworks.com"],
        ["Regional Office \u2014 Mumbai, India", "Level 8, One BKC, Bandra Kurla Complex, Mumbai \u2014 400051", "+91 22 6789 1000"]] },
      { kind: "cta", title: "Send us a message", body: "Tell us about your enterprise networking requirements and we will route your enquiry to the right team.", ctas: [{ label: "Email Enterprise Team", href: "mailto:enterprise@lavellenetworks.com" }, { label: "Request a Demo", href: "/contact/request-demo" }] },
    ],
  },
  {
    slug: "investors",
    metaTitle: "Investor Relations \u2014 Lavelle Networks",
    metaDescription: "Lavelle Networks is an enterprise networking platform company headquartered in Bangalore, building SD-WAN, SASE, and AI-driven network operations software.",
    sections: [
      { kind: "hero", eyebrow: "Company / Investor Relations", title: "Investor Relations", body: "Lavelle Networks is an enterprise networking platform company headquartered in Bangalore, India. We build and operate SD-WAN, SASE, and AI-driven network operations software for large Indian enterprises." },
      { kind: "stats", eyebrow: "At a glance", items: [
        { value: "10+", title: "Years", body: "In enterprise networking" },
        { value: "25,000+", title: "Managed network sites", body: "Across India" },
        { value: "6+", title: "Industry verticals", body: "Served" }] },
      { kind: "note", eyebrow: "Company Overview", title: "Built in India. Trusted by enterprises.", body: "Founded in 2015, Lavelle Networks has grown from a Bangalore-based engineering startup to a platform company serving enterprises across India's most complex and regulated industries. Our four-pillar platform \u2014 ScaleAOn SD-WAN, ScaleAOn SD-Branch, indusWall SASE, and ipDesk AI Ops \u2014 is designed, built, and maintained by our engineering teams in Bangalore. We do not resell third-party software. Lavelle is positioned to serve the global enterprise networking market from an India-first foundation \u2014 \"Built in India for global markets\" is not a marketing position, it is an engineering strategy." },
      { kind: "table", eyebrow: "Company Milestones", title: "A decade of platform evolution", headers: ["Year", "Milestone", "Detail"], rows: [
        ["[Insert Year \u2014 Verify]", "Company Founded", "Lavelle Networks founded in Bangalore. Development of the first SD-WAN platform begins with a founding engineering team focused on enterprise networking."],
        ["[Insert Year \u2014 Verify]", "First Enterprise Deployments", "Initial enterprise customer deployments across BFSI and retail sectors in India. Product-market fit validated in complex multi-branch environments."],
        ["[Insert Year \u2014 Verify]", "Platform Expansion", "Platform expanded for multi-cloud era with AWS, Azure, and GCP integration. Customer base grows to include manufacturing and healthcare verticals."],
        ["[Insert Year \u2014 Verify]", "SASE Platform Launch", "indusWall SASE launched, converging cloud-native security with the networking platform."]] },
      { kind: "capabilities", eyebrow: "Investment Highlights", title: "Why Lavelle Networks", items: [
        { title: "Large and Growing TAM", body: "The enterprise WAN and SASE market represents a large and rapidly growing opportunity. Indian enterprises are accelerating investment in network modernisation, cloud connectivity, and security convergence \u2014 a multi-billion dollar addressable market." },
        { title: "Established Customer Base", body: "Lavelle serves enterprise customers across BFSI, retail, manufacturing, healthcare, and government sectors in India. Multi-year deployment relationships and platform dependency provide durable revenue." },
        { title: "Proven Product Portfolio", body: "Four integrated platform pillars \u2014 ScaleAOn SD-WAN, ScaleAOn SD-Branch, indusWall SASE, and ipDesk AI Ops \u2014 cover the full enterprise networking stack. Built, owned, and evolved by Lavelle's engineering teams." }] },
      { kind: "checklist", eyebrow: "Investor Enquiries", title: "What to include in your enquiry", items: [
        "Your organisation and role",
        "Nature of the investment enquiry",
        "Preferred format for initial discussion",
        "Any specific areas of focus \u2014 product, market, financials"] },
      { kind: "cta", title: "Contact our team", body: "For investor relations enquiries, please contact our team directly. All investor communications are handled confidentially by the Lavelle leadership team. Lavelle Networks does not publish financial data on this website. All financial information is shared under NDA with qualified investors.", ctas: [{ label: "Contact Investor Relations", href: "/company/contact" }] },
    ],
  },
];
