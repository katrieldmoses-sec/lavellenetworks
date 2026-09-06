import type { PageContent } from "./types";
import { branchTransformation, hybridWorkforce } from "./shared";

const hybridWan: PageContent = {
  slug: "hybrid-wan",
  metaTitle: "Hybrid WAN — Use Every WAN Connection Intelligently",
  metaDescription:
    "Combine MPLS, broadband, fibre, wireless and internet connectivity through one application-aware enterprise WAN with ScaleAOn.",
  sections: [
    {
      kind: "hero",
      eyebrow: "Use Case · Hybrid WAN",
      title: "Use every WAN connection intelligently.",
      body: "Combine MPLS, broadband, fibre, wireless and internet connectivity through one application-aware enterprise WAN. ScaleAOn continuously evaluates available paths and directs traffic according to application priority, network conditions and business policy.",
      ctas: [
        { label: "Talk to a Network Expert", href: "/contact/talk-to-expert" },
        { label: "Explore ScaleAOn SD-WAN", href: "/products/sd-wan" },
      ],
    },
    {
      kind: "capabilities",
      eyebrow: "The challenge",
      title: "What holds hybrid WAN back today.",
      items: [
        { title: "Expensive MPLS dependence", body: "Business traffic remains tied to a limited set of private links even when suitable broadband or wireless capacity is available." },
        { title: "Static routing", body: "Traditional routing decisions cannot react intelligently enough to changing application needs and real-time link quality." },
        { title: "Limited visibility", body: "Network teams struggle to see how individual links, applications and branches are performing." },
        { title: "Slow branch expansion", body: "New locations require manual configurations, specialist intervention and long implementation cycles." },
      ],
    },
    {
      kind: "capabilities",
      eyebrow: "Capabilities",
      title: "How ScaleAOn Hybrid WAN works",
      items: [
        { title: "Dynamic path selection", body: "Continuously assess latency, jitter, packet loss and available capacity before selecting the path for each application flow." },
        { title: "Application-aware policies", body: "Direct critical applications according to business intent instead of depending only on static destination-based routing." },
        { title: "Bandwidth aggregation", body: "Use available WAN capacity more effectively across multiple links." },
        { title: "Unified visibility", body: "View branch, link and application behaviour from a central management platform." },
        { title: "Policy-controlled internet breakout", body: "Provide direct access for approved cloud and SaaS traffic while retaining enterprise security policies." },
        { title: "Zero-touch deployment", body: "Bring new sites into the enterprise network without manually configuring every branch." },
      ],
    },
    {
      kind: "checklist",
      eyebrow: "Outcomes",
      title: "What enterprises gain.",
      items: [
        "Reduce dependence on one carrier or WAN technology",
        "Improve application experience across branches",
        "Use broadband without losing central control",
        "Increase branch resilience through path redundancy",
        "Simplify hybrid-network operations",
        "Prepare the WAN for cloud applications",
      ],
    },
    {
      kind: "platform",
      eyebrow: "Related products",
      title: "Products that deliver hybrid WAN.",
      links: [
        { title: "ScaleAOn SD-WAN", body: "Enterprise WAN platform with dynamic path selection", href: "/products/sd-wan" },
        { title: "CloudPort Edge", body: "Branch CPE with zero-touch provisioning", href: "/products/cloudport-edge" },
        { title: "CloudStation Controller", body: "Central policy and orchestration", href: "/products/cloudstation-controller" },
      ],
    },
    {
      kind: "cta",
      title: "Ready to move forward?",
      body: "Talk to a Lavelle Networks specialist about your network requirements.",
      ctas: [
        { label: "Talk to a Network Expert", href: "/contact/talk-to-expert" },
        { label: "Explore ScaleAOn SD-WAN", href: "/products/sd-wan" },
      ],
    },
  ],
};

const applicationAvailability: PageContent = {
  slug: "application-availability",
  metaTitle: "Application Availability — Protect Application Experience",
  metaDescription:
    "Keep critical applications available when network conditions change, through real-time path monitoring, intelligent traffic steering and centralised visibility.",
  sections: [
    {
      kind: "hero",
      eyebrow: "Use Case · Application Experience",
      title: "Keep critical applications available when network conditions change.",
      body: "Protect enterprise and SaaS application experience through real-time path monitoring, intelligent traffic steering, resilient overlay design and centralised visibility.",
      ctas: [
        { label: "Evaluate Application Resilience", href: "/contact/talk-to-expert" },
        { label: "Explore Network Analytics", href: "/products/network-analytics" },
      ],
    },
    {
      kind: "challenge",
      eyebrow: "The challenge",
      title: "Application availability depends on more than whether a link is technically up.",
      intro:
        "An active WAN link may still suffer from packet loss, high latency, jitter or insufficient capacity. These brownout conditions can damage application experience even when traditional monitoring shows that the connection is available.",
      bullets: [
        "Link is active but latency has spiked",
        "Packet loss degrades voice and video calls",
        "Jitter disrupts real-time transaction flows",
        "Brownout conditions are missed by basic monitoring",
        "Multiple WAN links with no intelligent selection",
        "SaaS traffic hairpinned through data centres",
      ],
    },
    {
      kind: "table",
      eyebrow: "Blackout vs Brownout",
      title: "Both conditions affect application experience. Only one is commonly detected.",
      headers: ["Condition", "What happens", "Detection"],
      rows: [
        ["Blackout", "Complete link failure — application unreachable", "Detected by traditional monitoring"],
        ["Brownout", "Link remains technically active; increased latency or packet loss degrades voice, video and transactional applications", "Often missed by basic availability monitoring"],
      ],
    },
    {
      kind: "capabilities",
      eyebrow: "Platform capabilities",
      title: "A set of integrated capabilities designed to maintain application experience across changing WAN conditions.",
      items: [
        { title: "Real-time link assessment", body: "Measure WAN conditions including latency, jitter, packet loss and available capacity." },
        { title: "First-flow application intelligence", body: "Identify application traffic early enough to apply the appropriate routing decision." },
        { title: "Intelligent traffic steering", body: "Direct application traffic over the most suitable available network path." },
        { title: "Overlay flexibility", body: "Support hub-and-spoke, mesh and partial-mesh connectivity models per application requirements." },
        { title: "SaaS local breakout", body: "Reduce avoidable latency for applications such as Microsoft 365 and Salesforce." },
        { title: "Operational visibility", body: "Use network status and traffic-flow data to investigate application-performance issues." },
        { title: "Seamless path transition", body: "Move traffic away from deteriorating connections before a poor-quality link significantly affects users." },
      ],
    },
    {
      kind: "checklist",
      eyebrow: "Outcomes",
      title: "What application-resilient networking delivers",
      items: [
        "Reduce application brownouts and blackouts",
        "Improve critical application continuity",
        "Increase branch resilience",
        "Improve voice and video experience",
        "Simplify root-cause investigation",
        "Provide consistent SaaS access",
      ],
    },
    {
      kind: "platform",
      eyebrow: "Related products",
      title: "Products that protect application experience.",
      links: [
        { title: "ScaleAOn SD-WAN", body: "Application-aware WAN with dynamic path selection", href: "/products/sd-wan" },
        { title: "Network Analytics", body: "Real-time network visibility", href: "/products/network-analytics" },
        { title: "CloudStation Insights", body: "Analytics and performance intelligence", href: "/products/cloudstation-insights" },
      ],
    },
    {
      kind: "cta",
      title: "Ready to protect critical application experience?",
      body: "Speak with a Lavelle Networks specialist to evaluate how ScaleAOn SD-WAN can improve application resilience across your branch network.",
      ctas: [
        { label: "Evaluate Application Resilience", href: "/contact/talk-to-expert" },
        { label: "Explore ScaleAOn SD-WAN", href: "/products/sd-wan" },
      ],
    },
  ],
};


const multiCloud: Omit<PageContent, "slug"> = {
  metaTitle: "Multi-Cloud Connectivity — One Enterprise Policy",
  metaDescription:
    "Create a consistent connectivity layer across branches, data centres, SaaS applications, private clouds and multiple public-cloud environments.",
  sections: [
    { kind: "hero", eyebrow: "Use Case \u00b7 Multi-Cloud", title: "Connect every branch to every cloud through one enterprise policy.", body: "Create a consistent connectivity layer across branches, data centres, SaaS applications, private clouds and multiple public-cloud environments.", ctas: [{ label: "Discuss Your Cloud Architecture", href: "/contact/talk-to-expert" }, { label: "Explore Cloud Connectivity", href: "/products/cloud-connectivity" }] },
    { kind: "challenge", eyebrow: "The challenge", title: "Multi-cloud adoption creates a network consistency problem.", intro: "Cloud migration rarely happens in a single step. Applications may remain distributed across data centres, private clouds, SaaS platforms and multiple public-cloud providers. Each environment introduces different connectivity, security and operational requirements.", bullets: ["Fragmented cloud connectivity", "Inconsistent network policies", "Limited end-to-end visibility", "Complex hybrid migration", "Application-performance variation", "Security and segmentation requirements"] },
    { kind: "flow", eyebrow: "Architecture", title: "One policy-driven network", intro: "A unified architecture spanning branches, the Lavelle platform and every cloud destination. Conceptual architecture. Cloud provider names shown for reference only.", nodes: [{ title: "Enterprise Sources", sub: "Branches, HQ, remote users, data centres" }, { title: "Lavelle Platform", sub: "CloudPort, CloudStation, ScaleAOn policy" }, { title: "Cloud Destinations", sub: "AWS, Azure, Google Cloud, private cloud, SaaS" }] },
    { kind: "capabilities", eyebrow: "Platform capabilities", title: "A consistent architecture that bridges enterprise locations and cloud environments without requiring separate tooling per provider.", items: [
      { title: "Branch-to-cloud access", body: "Controlled connectivity between enterprise locations and cloud-hosted applications." },
      { title: "DC and cloud interconnection", body: "Connect physical and virtual environments through a consistent WAN architecture." },
      { title: "Application-aware routing", body: "Select paths according to application requirements and real-time network conditions." },
      { title: "Cloud local breakout", body: "Direct access to approved SaaS and cloud applications from enterprise branches." },
      { title: "Network segmentation", body: "Separate users, branches, applications or business environments using centrally governed policies." },
      { title: "Deployment flexibility", body: "Use physical, virtual or cloud-hosted Lavelle components per your enterprise architecture." },
      { title: "Central visibility", body: "Monitor connectivity and traffic behaviour across branches and cloud destinations." }] },
    { kind: "checklist", eyebrow: "Outcomes", title: "What consistent cloud connectivity delivers", items: ["Consistent branch-to-cloud experience", "Simpler hybrid-cloud migration", "Reduced dependency on data-centre backhaul", "Central policy across physical and virtual environments", "Improved cloud application visibility", "Greater flexibility across cloud providers"] },
    { kind: "platform", eyebrow: "Related products", title: "Products that deliver multi-cloud connectivity.", links: [
      { title: "Cloud Connectivity", body: "Multi-cloud networking platform", href: "/products/cloud-connectivity" },
      { title: "CloudPort Gateway", body: "Aggregation and cloud interconnect", href: "/products/cloudport-gateway" },
      { title: "CloudStation Controller", body: "Central policy and orchestration", href: "/products/cloudstation-controller" }] },
    { kind: "cta", title: "Ready to build a consistent multi-cloud network?", body: "Speak with a Lavelle Networks specialist about your cloud connectivity requirements and current architecture.", ctas: [{ label: "Discuss Your Cloud Architecture", href: "/contact/talk-to-expert" }, { label: "Explore Cloud Connectivity", href: "/products/cloud-connectivity" }] },
  ],
};

const microsoft365: PageContent = {
  slug: "microsoft-365-performance",
  metaTitle: "Microsoft 365 Performance \u2014 SaaS Local Breakout",
  metaDescription:
    "Improve Microsoft 365, Teams and other SaaS application experiences by avoiding unnecessary data-centre backhauling with secure local breakout policies.",
  sections: [
    { kind: "hero", eyebrow: "Use Case \u00b7 SaaS Performance", title: "Give Microsoft 365 a more direct path to every user.", body: "Improve Microsoft 365, Teams and other SaaS application experiences by avoiding unnecessary data-centre backhauling and applying secure, application-specific local breakout policies at enterprise branches.", ctas: [{ label: "Assess Your SaaS Connectivity", href: "/contact/talk-to-expert" }, { label: "Explore Secure Internet Access", href: "/products/secure-internet" }] },
    { kind: "capabilities", eyebrow: "The challenge", title: "What slows SaaS down today.", items: [
      { title: "Data-centre hairpin", body: "Branch traffic is routed through headquarters or a central data centre before reaching Microsoft's network, adding latency." },
      { title: "Central bandwidth pressure", body: "All branch SaaS traffic consumes central internet capacity unnecessarily." },
      { title: "Inconsistent policies", body: "Applying application-specific breakout across distributed locations requires consistent policy management." },
      { title: "Limited SaaS visibility", body: "IT teams lack per-branch visibility into SaaS application performance and usage." }] },
    { kind: "table", eyebrow: "Traditional backhaul vs. local breakout", title: "Conceptual comparison \u2014 not a precise network diagram.", headers: ["Path", "Route", "Result"], rows: [
      ["Traditional Path", "Branch User \u2192 WAN \u2192 HQ / Data Centre \u2192 Central Security \u2192 Internet \u2192 Microsoft 365", "Longer path, additional latency and central bandwidth consumption."],
      ["Lavelle Path", "Branch User \u2192 ScaleAOn (App ID) \u2192 Policy Decision \u2192 Local Breakout \u2192 Microsoft 365", "Application-specific, policy-controlled direct access."]] },
    { kind: "capabilities", eyebrow: "Capabilities", title: "How local breakout is applied.", items: [
      { title: "Application identification", body: "Recognise approved SaaS traffic and apply a dedicated connectivity policy." },
      { title: "Selective local breakout", body: "Break out Microsoft 365 traffic locally while routing other traffic per enterprise policy." },
      { title: "Path-quality monitoring", body: "Evaluate available links using latency, jitter, packet loss and capacity." },
      { title: "Centralised policy", body: "Apply the same SaaS-access policy across branches, regions or the full enterprise." },
      { title: "SaaS visibility", body: "Understand application usage, branch behaviour and network performance centrally." },
      { title: "Resilient connectivity", body: "Move traffic to a healthier available path when WAN conditions deteriorate." }] },
    { kind: "checklist", eyebrow: "Outcomes", title: "What SaaS optimisation delivers", items: ["Lower latency for approved SaaS applications", "Better Microsoft Teams voice and video experience", "Reduced data-centre backhaul traffic", "Lower pressure on central internet gateways", "Consistent policies across distributed branches", "Improved troubleshooting visibility"] },
    { kind: "platform", eyebrow: "Related products", title: "Products that improve SaaS performance.", links: [
      { title: "ScaleAOn SD-WAN", body: "Application-aware WAN platform", href: "/products/sd-wan" },
      { title: "CloudPort Edge", body: "Branch connectivity with local breakout", href: "/products/cloudport-edge" },
      { title: "Secure Internet Access", body: "Policy-controlled web and SaaS access", href: "/products/secure-internet" }] },
    { kind: "cta", title: "Ready to move forward?", body: "Talk to a Lavelle Networks specialist about your network requirements.", ctas: [{ label: "Assess Your SaaS Connectivity", href: "/contact/talk-to-expert" }, { label: "Explore Secure Internet Access", href: "/products/secure-internet" }] },
  ],
};

const networkMonitoring: Omit<PageContent, "slug"> = {
  metaTitle: "Enterprise Network Monitoring \u2014 Central Operations",
  metaDescription:
    "Manage and monitor branches, links, applications and network events through a central platform designed for distributed enterprise environments.",
  sections: [
    { kind: "hero", eyebrow: "Use Case \u00b7 Network Operations", title: "See the enterprise network as one operating system.", body: "Manage and monitor branches, links, applications and network events through a central platform designed for distributed enterprise environments.", ctas: [{ label: "See the Operations Platform", href: "/contact/talk-to-expert" }, { label: "Explore CloudStation Insights", href: "/products/cloudstation-insights" }] },
    { kind: "challenge", eyebrow: "The challenge", title: "Fragmented infrastructure creates fragmented operations.", intro: "Traditional enterprise networks often separate MPLS, internet, branch routing, monitoring and security operations. This forces IT teams to use multiple tools, coordinate several providers and troubleshoot without an end-to-end view.", bullets: ["Separate tools for separate network domains", "Limited end-to-end accountability", "Inconsistent branch configurations", "Slow change windows", "Difficult root-cause identification"] },
    { kind: "capabilities", eyebrow: "Platform capabilities", title: "Everything needed to operate a distributed enterprise network from a single pane of glass.", items: [
      { title: "Single management console", body: "One consolidated view of distributed network locations and connections." },
      { title: "Granular branch and link visibility", body: "Inspect utilisation, throughput and health for individual locations and WAN links." },
      { title: "Network-flow analysis", body: "Understand network behaviour by user, endpoint and application." },
      { title: "Real-time alerts", body: "Configure thresholds for faults, events and network conditions." },
      { title: "Centralised upgrades", body: "Coordinate network changes and software upgrades without visiting every branch." },
      { title: "External integrations", body: "Support integration with enterprise monitoring and automation tools through approved APIs." },
      { title: "Historical analysis", body: "Use retained operational data to investigate trends and recurring performance issues." },
      { title: "AI-assisted operations", body: "Connect network telemetry with ipDesk AI Ops for anomaly investigation and event correlation." }] },
    { kind: "checklist", eyebrow: "Outcomes", title: "What centralised operations delivers", items: ["Faster issue isolation across distributed sites", "Lower mean time to resolution", "Consistent enterprise policies", "Reduced operational fragmentation", "Better capacity planning", "Central visibility across branches and links"] },
    { kind: "platform", eyebrow: "Related products", title: "Products that centralise operations.", links: [
      { title: "CloudStation Insights", body: "Analytics and network intelligence platform", href: "/products/cloudstation-insights" },
      { title: "CloudStation Controller", body: "Central orchestration and monitoring", href: "/products/cloudstation-controller" },
      { title: "ipDesk AI Ops", body: "AI-powered network operations", href: "/products/ai-operations" }] },
    { kind: "cta", title: "Ready to unify your network operations?", body: "Speak with a Lavelle Networks specialist to see how centralised monitoring can reduce operational complexity across your enterprise.", ctas: [{ label: "See the Operations Platform", href: "/contact/talk-to-expert" }, { label: "Talk to an Expert", href: "/contact/talk-to-expert" }] },
  ],
};

export const useCasePages: PageContent[] = [
  hybridWan,
  applicationAvailability,
  { slug: "branch-transformation", ...branchTransformation },
  { slug: "hybrid-workforce", ...hybridWorkforce },
  { slug: "multi-cloud", ...multiCloud },
  { slug: "multi-cloud-connectivity", ...multiCloud },
  microsoft365,
  { slug: "enterprise-network-monitoring", ...networkMonitoring },
  { slug: "network-monitoring", ...networkMonitoring },
];
