import type { PageContent } from "./types";

export const solutionPages: PageContent[] = [
  {
    slug: "bfsi",
    metaTitle: "BFSI Networking Solutions — Banking & Financial Services",
    metaDescription:
      "Secure, compliant networking for Indian banking and financial services — branch connectivity, PCI-DSS and RBI compliance, and network security at scale.",
    sections: [
      {
        kind: "hero",
        eyebrow: "Solution / Banking & Financial Services",
        title: "Secure, compliant networking for Banking & Financial Services",
        body: "Lavelle Networks delivers the branch connectivity, network security, and compliance infrastructure that Indian financial institutions require — from public sector banks to private NBFCs and payment processors.",
        ctas: [
          { label: "Explore BFSI Solutions", href: "/contact/request-demo" },
          { label: "Talk to an Expert", href: "/contact/talk-to-expert" },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Industry Challenges",
        title: "What financial institutions face",
        items: [
          { title: "Branch Connectivity at Scale", body: "Banks operate hundreds of branches across urban, semi-urban, and rural India — each requiring reliable, secure, and manageable connectivity with diverse last-mile options." },
          { title: "PCI-DSS and RBI Compliance", body: "Financial institutions must meet PCI-DSS, RBI IT Framework, and SEBI guidelines — requirements that demand network segmentation, audit trails, and encryption at every layer." },
          { title: "ATM and POS Network Security", body: "ATM and point-of-sale networks carry payment transaction data and are high-value targets. Securing these networks without disrupting uptime is a standing operational challenge." },
          { title: "Core Banking Application Performance", body: "Core banking systems demand low-latency, high-availability connections from branches to data centres. Network degradation directly translates to transaction failures and customer impact." },
          { title: "MPLS Cost Reduction Pressure", body: "Legacy MPLS circuits serving bank branches carry high recurring costs. Institutions are under pressure to reduce WAN spend without compromising reliability or compliance posture." },
          { title: "Legacy Network Modernisation", body: "Older branch network infrastructure struggles to support cloud-native banking applications, digital banking workloads, and the security posture required by modern compliance frameworks." },
        ],
      },
      {
        kind: "platform",
        eyebrow: "Lavelle Solution Architecture",
        title: "Three pillars. One integrated platform.",
        links: [
          { title: "ScaleAOn SD-WAN", body: "Lavelle's SD-WAN platform connects bank branches across hybrid WAN links — MPLS, broadband, LTE — with intelligent path selection and application-aware routing.", href: "/products/sd-wan" },
          { title: "indusWall SASE", body: "Cloud-native security convergence for the financial enterprise, enforcing compliance controls without hairpinning traffic through a central data centre.", href: "/products/sase" },
          { title: "CloudStation Insights", body: "Centralised network analytics and telemetry generating the audit trails, flow logs, and incident records required for PCI-DSS and RBI IT Framework audits.", href: "/products/cloudstation-insights" },
        ],
      },
      {
        kind: "components",
        eyebrow: "Product Components",
        title: "Platform products for BFSI",
        intro: "Each Lavelle platform product contributes specific capabilities to the BFSI deployment architecture.",
        items: [
          { title: "ScaleAOn SD-WAN", href: "/products/sd-wan", bullets: ["Hybrid WAN with MPLS + broadband failover", "Application-aware QoS for core banking traffic", "Zero-touch branch provisioning"] },
          { title: "CloudPort Edge", href: "/products/cloudport-edge", bullets: ["Secure branch edge appliance for regulated environments", "Hardware-enforced network segmentation", "Tamper-evident edge deployment"] },
          { title: "indusWall SASE", href: "/products/sase", bullets: ["PCI-DSS zone segmentation and policy enforcement", "ZTNA for remote banking operations staff", "Threat inspection at cloud and branch edges"] },
          { title: "CloudStation Controller", href: "/products/cloudstation-controller", bullets: ["Centralised policy management across all branches", "Audit log export for regulatory submissions", "Network change management and approval workflows"] },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Use Cases",
        title: "What financial institutions deploy us for",
        items: [
          { title: "Hybrid WAN for Bank Branches", body: "Deploy a mix of MPLS for critical core banking and broadband or LTE for general traffic. ScaleAOn SD-WAN manages path selection per application, ensuring core banking never competes with internet-bound workloads." },
          { title: "Zero-Touch Deployment for New Branches", body: "Open a new bank branch without deploying network engineers on-site. Pre-configure devices, ship to branch, power on — ScaleAOn handles provisioning over secure management channels from the central NOC." },
          { title: "Network Segmentation for Payment vs General Traffic", body: "Enforce hard segmentation between payment network traffic (ATM, POS, core banking) and general branch internet access. Policy is enforced at the edge, not just at the data centre perimeter." },
          { title: "Application QoS for Core Banking", body: "Guarantee bandwidth and latency for core banking applications. QoS policies follow the application, not the port — ensuring CBS transactions get priority even during peak branch internet usage." },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Outcomes",
        title: "What financial customers report",
        items: [
          { title: "Significant WAN Cost Reduction", body: "Enterprises adopting hybrid WAN with ScaleAOn SD-WAN report significant reductions in recurring WAN costs by replacing dedicated MPLS circuits with broadband augmentation and intelligent path management." },
          { title: "Compliance Coverage Across Branches", body: "Centralised policy, segmentation, and audit trail generation reduces the manual compliance effort at each branch. Audit reports are generated from CloudStation Insights without requiring branch-by-branch review." },
          { title: "Operational Efficiency at Scale", body: "Zero-touch provisioning and centralised management reduce the number of network operations staff required to manage hundreds of branch locations. Changes are applied network-wide from a single control plane." },
        ],
      },
      {
        kind: "cta",
        title: "Ready to modernise your financial network?",
        body: "Talk to a Lavelle specialist about your branch connectivity, compliance, and network security requirements.",
        ctas: [
          { label: "Explore BFSI Solutions", href: "/contact/request-demo" },
          { label: "Talk to an Expert", href: "/contact/talk-to-expert" },
        ],
      },
    ],
  },
  {
    slug: "logistics",
    metaTitle: "Logistics & Supply Chain Networking Solutions",
    metaDescription:
      "Network infrastructure built for logistics and supply chain operations — warehouses, depots, and distribution centres on reliable, application-aware connectivity.",
    sections: [
      {
        kind: "hero",
        eyebrow: "Solutions · Logistics and Supply Chain",
        title: "Network infrastructure built for logistics and supply chain operations.",
        body: "Warehouses, depots, and distribution centres running on reliable, application-aware connectivity — provisioned quickly and managed centrally.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Talk to an Expert", href: "/contact/talk-to-expert" },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Industry Challenges",
        title: "Networking challenges specific to logistics operations.",
        items: [
          { title: "Warehouse connectivity", body: "Warehouses require reliable wireless coverage for handheld scanners, automated picking systems, and WMS terminals. Coverage gaps and wireless degradation halt operations and create inventory discrepancies." },
          { title: "Hub-and-spoke network complexity", body: "Large logistics networks span regional distribution centres, urban fulfilment hubs, and local depots in a hub-and-spoke topology. Each location type has different connectivity requirements and technical constraints." },
          { title: "Last-mile reliability", body: "Depot locations are often in industrial zones or rural areas where primary broadband quality is variable. Link failures during peak periods — pre-holiday, sale events — have direct operational and financial consequences." },
          { title: "Fleet tracking system connectivity", body: "Fleet management and real-time tracking systems require continuous connectivity back to central platforms. Latency and packet loss degrade GPS update frequency and tracking accuracy." },
          { title: "Peak demand resilience", body: "Logistics networks experience sharp demand peaks — seasonal shipping periods, promotional events. Network capacity that is adequate for average demand may be insufficient during peaks, and failures at peak moments have outsized consequences." },
          { title: "New depot openings", body: "Rapid expansion requires the ability to connect new depot locations quickly and without specialist on-site networking expertise. Traditional WAN provisioning timelines — weeks or months — constrain growth velocity." },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "The Lavelle Approach",
        title: "Purpose-built responses to logistics network requirements.",
        items: [
          { title: "Hybrid WAN for distribution centres and warehouses", body: "ScaleAOn combines MPLS, broadband, and 4G/LTE transports at each warehouse location. Application-aware routing ensures WMS, ERP, and tracking systems always route over the best available transport. Link quality is measured continuously — not assumed." },
          { title: "Zero-touch provisioning for new depot openings", body: "CloudPort Edge devices ship pre-configured with site identity. On first power-on at a new depot, the device contacts CloudStation Controller, authenticates, and receives its complete configuration automatically. No networking specialist required on-site." },
          { title: "Application prioritisation for WMS and ERP", body: "Warehouse management systems and ERP applications are defined as priority application classes in CloudStation Controller. Policy ensures these applications always receive bandwidth priority over lower-priority traffic — even during peak usage periods." },
          { title: "4G/LTE failover for remote and industrial locations", body: "Depot locations in industrial zones or areas with variable broadband quality are equipped with 4G/LTE as a standby transport. When the primary link degrades below SLA thresholds, ScaleAOn automatically fails over — maintaining operational continuity without manual intervention." },
        ],
      },
      {
        kind: "table",
        eyebrow: "Operational Impact",
        title: "How operations change with Lavelle Networks.",
        headers: ["Operational Scenario", "Traditional Approach", "With Lavelle Networks"],
        rows: [
          ["New depot time-to-connect", "Weeks to months", "Hours — zero-touch provisioning"],
          ["WAN link failure response", "Manual detection and escalation", "Automatic failover in seconds"],
          ["Application priority enforcement", "Per-device QoS configuration", "Centralised policy, all sites"],
          ["Network visibility", "Per-device SNMP polling", "Unified view in CloudStation"],
          ["Peak demand preparation", "Manual capacity assessment", "Capacity Health Score trend analysis"],
        ],
      },
      {
        kind: "platform",
        eyebrow: "Relevant Products",
        title: "Products deployed in logistics environments.",
        links: [
          { title: "ScaleAOn SD-WAN", body: "Hybrid WAN path selection, link bonding, and application-aware routing across all depot and warehouse locations.", href: "/products/sd-wan" },
          { title: "CloudPort Edge", body: "Branch CPE device with zero-touch provisioning. Supports multiple WAN transports. Suitable for warehouse environments.", href: "/products/cloudport-edge" },
          { title: "CloudStation Controller", body: "Centralised management for the entire logistics network. Policy definition, site monitoring, and application visibility from one platform.", href: "/products/cloudstation-controller" },
        ],
      },
      {
        kind: "cta",
        title: "Reliable, scalable connectivity for your logistics network.",
        body: "Talk to a Lavelle Networks specialist about connecting your warehouses, depots, and distribution centres reliably and at scale.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Talk to an Expert", href: "/contact/talk-to-expert" },
        ],
      },
    ],
  },
];
