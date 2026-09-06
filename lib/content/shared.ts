import type { PageContent } from "./types";

/** Content shared between /solutions/* and /use-cases/* (identical in the source). */

export const branchTransformation: Omit<PageContent, "slug"> = {
  metaTitle: "Branch Transformation — One Controlled Branch Edge",
  metaDescription:
    "Bring WAN connectivity, switching, wireless, security, users, devices and applications together through one centrally governed branch architecture.",
  sections: [
    {
      kind: "hero",
      eyebrow: "Use Case · Branch Transformation",
      title: "Transform the branch from disconnected devices into one controlled edge.",
      body: "Bring WAN connectivity, switching, wireless, security, users, devices and applications together through one centrally governed branch architecture.",
      ctas: [
        { label: "Plan Your Branch Transformation", href: "/contact/talk-to-expert" },
        { label: "Explore ScaleAOn SD-Branch", href: "/products/secure-branch" },
      ],
    },
    {
      kind: "note",
      eyebrow: "The Challenge",
      title: "A modern branch is more than a router.",
      body: "Every enterprise location contains a combination of users, devices, applications, wired access, wireless access, WAN connectivity and security policies. Managing each layer separately creates operational complexity, inconsistent policies and limited visibility.",
    },
    {
      kind: "table",
      eyebrow: "Architecture",
      title: "Current versus transformed branch architecture",
      headers: ["Layer", "Traditional branch", "ScaleAOn SD-Branch"],
      rows: [
        ["Connectivity", "WAN Router", "SD-WAN and routing in one platform"],
        ["Security", "Separate firewall appliance", "Integrated branch security policy"],
        ["Access", "Switches, wireless controller, access points", "Converged switching and wireless"],
        ["Operations", "Monitoring tools, manual config, separate consoles", "Central orchestration and unified monitoring"],
        ["Outcome", "Multiple systems, operational silos and inconsistent policy.", "One policy-led branch edge."],
      ],
    },
    {
      kind: "capabilities",
      eyebrow: "Operating Principles",
      title: "Capabilities that define the transformed branch",
      items: [
        { title: "Trust", body: "Identify and govern approved users, devices and applications." },
        { title: "Availability", body: "Maintain reliable access to enterprise, SaaS and cloud applications." },
        { title: "Performance", body: "Use application and path intelligence to improve business-critical traffic experience." },
        { title: "Security", body: "Apply consistent policies across branch, cloud and internet access." },
        { title: "Zero-touch deployment", body: "Deploy and configure distributed branch locations centrally." },
        { title: "Central monitoring", body: "Operate branch networking from the enterprise NOC or cloud-management environment." },
      ],
    },
    {
      kind: "checklist",
      eyebrow: "Where It Applies",
      title: "Relevant scenarios",
      items: [
        "New branch rollout",
        "Retail store expansion",
        "Bank branch modernisation",
        "Manufacturing and warehouse connectivity",
        "Small-format offices",
        "Distributed campus locations",
        "Branch cloud migration",
        "WAN and LAN operational consolidation",
      ],
    },
    {
      kind: "checklist",
      eyebrow: "Outcomes",
      title: "What branch transformation delivers",
      items: [
        "Faster branch rollout across locations",
        "Fewer management silos",
        "Consistent enterprise policy across branches",
        "Improved user and device visibility",
        "Lower operational complexity",
        "Better branch application experience",
      ],
    },
    {
      kind: "platform",
      eyebrow: "Related Products",
      title: "Products that enable branch transformation",
      links: [
        { title: "ScaleAOn SD-Branch", body: "Converged branch networking platform", href: "/products/secure-branch" },
        { title: "ScaleAOn SD-WAN", body: "Enterprise WAN with central orchestration", href: "/products/sd-wan" },
        { title: "CloudStation Controller", body: "Central policy and zero-touch provisioning", href: "/products/cloudstation-controller" },
      ],
    },
    {
      kind: "cta",
      title: "Ready to simplify your branch network?",
      body: "Talk to a Lavelle Networks engineer about your branch transformation requirements.",
      ctas: [
        { label: "Plan Your Branch Transformation", href: "/contact/talk-to-expert" },
        { label: "Explore ScaleAOn SD-Branch", href: "/products/secure-branch" },
      ],
    },
  ],
};

export const hybridWorkforce: Omit<PageContent, "slug"> = {
  metaTitle: "Hybrid Workforce — Secure Application Access Anywhere",
  metaDescription:
    "Connect office users, remote employees, contractors and mobile teams to enterprise, SaaS and cloud applications through consistent identity and security policies.",
  sections: [
    {
      kind: "hero",
      eyebrow: "Use Case · Hybrid Workforce",
      title: "Secure application access wherever enterprise work happens.",
      body: "Connect office users, remote employees, contractors and mobile teams to enterprise, SaaS and cloud applications through consistent identity, connectivity and security policies.",
      ctas: [
        { label: "Discuss Secure Workforce Access", href: "/contact/talk-to-expert" },
        { label: "Explore indusWall SASE", href: "/products/sase" },
      ],
    },
    {
      kind: "challenge",
      eyebrow: "The Challenge",
      title: "The enterprise perimeter no longer ends at the branch.",
      intro:
        "Users now access applications from offices, homes, customer locations and mobile networks. Applications may be hosted in the data centre, private cloud, public cloud or delivered as SaaS. Extending the traditional branch perimeter to every user creates complexity and inconsistent security.",
      bullets: [
        "Users working from multiple locations",
        "Applications distributed across cloud and data centre",
        "Overdependence on full-network VPN access",
        "Inconsistent access policies",
        "Poor user experience from central backhauling",
        "Limited visibility into remote application experience",
      ],
    },
    {
      kind: "flow",
      eyebrow: "Architecture",
      title: "Hybrid workforce access architecture",
      intro: "Conceptual representation of Lavelle hybrid workforce access architecture.",
      nodes: [
        { title: "User Sources", sub: "Branch, home, mobile, contractor, partner" },
        { title: "Identity & Access Policy", sub: "Identity, device posture, entitlement" },
        { title: "Lavelle Platform", sub: "SD-WAN, SASE, ZTNA, visibility" },
        { title: "Destinations", sub: "Private apps, SaaS, cloud, data centre" },
      ],
    },
    {
      kind: "capabilities",
      eyebrow: "Capabilities",
      title: "How Lavelle supports hybrid workforce access",
      items: [
        { title: "Identity-aware access", body: "Apply access decisions per the approved identity of the user, device and requested application." },
        { title: "Application-specific access", body: "Access to approved applications without exposing the complete enterprise network." },
        { title: "Consistent enterprise policy", body: "Common policy framework across branches and remote users." },
        { title: "Secure internet access", body: "Protect remote and branch internet access through approved security controls." },
        { title: "Optimised application paths", body: "Reduce unnecessary backhauling where policy permits more direct application access." },
        { title: "User-experience visibility", body: "Understand how network and application conditions affect users in different locations." },
        { title: "Central operations", body: "Manage connectivity and access through enterprise control and monitoring platforms." },
      ],
    },
    {
      kind: "checklist",
      eyebrow: "Outcomes",
      title: "Supporting secure hybrid work",
      items: [
        "Consistent access across office and remote environments",
        "Reduced dependence on location-based trust",
        "Simpler user access to SaaS and private applications",
        "Better remote application experience",
        "Central policy and visibility",
        "Support for employees, contractors and partner users",
      ],
    },
    {
      kind: "platform",
      eyebrow: "Related Products",
      title: "Products that support hybrid workforce access",
      links: [
        { title: "indusWall SASE", body: "Cloud-delivered networking and security", href: "/products/sase" },
        { title: "ZTNA", body: "Zero Trust network access", href: "/products/ztna" },
        { title: "Secure Internet Access", body: "Policy-controlled web and cloud access", href: "/products/secure-internet" },
      ],
    },
    {
      kind: "cta",
      title: "Connect and secure your distributed workforce.",
      body: "Speak with a Lavelle Networks engineer about your hybrid workforce access requirements.",
      ctas: [
        { label: "Discuss Secure Workforce Access", href: "/contact/talk-to-expert" },
        { label: "Explore indusWall SASE", href: "/products/sase" },
      ],
    },
  ],
};
