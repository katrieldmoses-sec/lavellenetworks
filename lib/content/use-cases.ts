import type { PageContent } from "./types";

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

export const useCasePages: PageContent[] = [
  hybridWan,
  applicationAvailability,
];
