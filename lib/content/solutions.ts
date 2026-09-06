import type { PageContent } from "./types";
import { branchTransformation, hybridWorkforce } from "./shared";

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
        variant: "pillars",
        eyebrow: "Lavelle Solution Architecture",
        title: "Three pillars. One integrated platform.",
        intro:
          "Lavelle's BFSI solution combines branch connectivity, cloud-native security, and compliance operations into a coherent platform — not disconnected point products.",
        links: [
          { eyebrow: "Branch Connectivity", title: "ScaleAOn SD-WAN", body: "Lavelle's SD-WAN platform connects bank branches across hybrid WAN links — MPLS, broadband, LTE — with intelligent path selection and application-aware routing. Branch teams operate on a consistent, policy-driven network regardless of the underlying link.", href: "/products/sd-wan" },
          { eyebrow: "Secure Access", title: "indusWall SASE", body: "Cloud-native security convergence for the financial enterprise. indusWall delivers firewall, secure web gateway, ZTNA, and policy enforcement at branch and cloud edges — enforcing compliance controls without hairpinning traffic through a central data centre.", href: "/products/sase" },
          { eyebrow: "Compliance Reporting & Audit", title: "CloudStation Insights", body: "Centralised network analytics and telemetry for compliance reporting. CloudStation Insights generates the audit trails, flow logs, and incident records required for PCI-DSS, RBI IT Framework audits, and internal risk management.", href: "/products/cloudstation-insights" },
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
  { slug: "branch-transformation", ...branchTransformation },
  { slug: "hybrid-workforce", ...hybridWorkforce },
  {
    slug: "information-technology",
    metaTitle: "IT & Technology Networking Solutions",
    metaDescription: "Multi-site connectivity, cloud-optimised routing, and scalable hybrid workforce access for IT services, software, and technology companies.",
    sections: [
      { kind: "hero", eyebrow: "Solutions \u00b7 Information Technology", title: "Networking for IT services, software, and technology companies.", body: "Multi-site connectivity, cloud-optimised routing, and scalable hybrid workforce access \u2014 built for organisations where the network is critical infrastructure, not just plumbing.", ctas: [{ label: "Request a Demo", href: "/contact/request-demo" }, { label: "Talk to an Expert", href: "/contact/talk-to-expert" }] },
      { kind: "capabilities", eyebrow: "Industry Challenges", title: "Where standard enterprise networking falls short for IT companies.", items: [
        { title: "Multi-site office connectivity", body: "IT services companies operate development centres, delivery centres, and client-facing offices across multiple cities and countries. Consistent, high-quality connectivity between sites is a baseline requirement for collaborative development workflows." },
        { title: "Developer toolchain performance", body: "Continuous integration pipelines, source control systems, container registries, and remote development environments require low-latency, high-throughput connectivity. Network degradation has a direct and measurable impact on developer productivity." },
        { title: "Cloud-first workloads", body: "IT companies run workloads distributed across AWS, Azure, and GCP. Optimising the path from offices and delivery centres to cloud regions is essential to application and pipeline performance." }] },
      { kind: "capabilities", eyebrow: "The Lavelle Approach", title: "Four capabilities that address IT industry network requirements.", items: [
        { title: "SASE for hybrid and remote workforce access", body: "indusWall ZTNA replaces traditional VPN with identity-aware, application-level access. Developers and consultants connect to exactly the applications they need \u2014 from any location \u2014 without broad network access or per-user VPN client management." },
        { title: "SD-WAN for office and delivery centre connectivity", body: "ScaleAOn connects development centres and offices with hybrid WAN \u2014 combining MPLS, broadband, and 4G/LTE transports. Application-aware routing ensures CI/CD pipelines, source control, and collaboration tools always have the connectivity they need." },
        { title: "Optimised cloud connectivity for AWS, Azure, and GCP", body: "CloudStation Controller defines routing policies that optimise the path from every office location to cloud service regions. Direct internet breakout for cloud-destined traffic eliminates backhaul latency. Multi-cloud routing is managed centrally." },
        { title: "Network monitoring and observability", body: "CloudStation Insights provides Quality Score, Capacity Score, and API access for integration with DevOps toolchains and existing observability platforms." }] },
      { kind: "table", eyebrow: "Workforce Access", title: "ZTNA vs VPN \u2014 why it matters for IT industry workforces.", headers: ["Scenario", "With VPN", "With indusWall ZTNA"], rows: [
        ["Remote developer access to dev environment", "VPN client required, full network access granted", "App-level access only, no client required on managed devices"],
        ["Consultant accessing client delivery portal", "Separate VPN profile, IT change request required", "Role-scoped access from CloudStation identity policy"],
        ["New hire onboarding", "VPN client provisioned, credentials distributed manually", "Access follows identity \u2014 AD group membership drives access policy"],
        ["Network access on client's premises", "Split-tunnel configuration required, often unreliable", "Consistent access regardless of physical network"]] },
      { kind: "capabilities", eyebrow: "Cloud Connectivity", title: "Optimised routing to AWS, Azure, and GCP \u2014 managed centrally.", items: [
        { title: "Microsoft Azure", body: "Direct breakout for Microsoft 365 and Azure workloads. ExpressRoute integration support." },
        { title: "Amazon Web Services", body: "Optimised routing to AWS regions. Application policy aware of AWS-hosted services." },
        { title: "Google Cloud Platform", body: "Low-latency path selection for GCP-hosted workloads and Workspace services." },
        { title: "Multi-cloud", body: "Centralised routing policy across all cloud providers managed in CloudStation Controller." }] },
      { kind: "platform", eyebrow: "Relevant Products", title: "Products deployed in IT and technology environments.", links: [
        { title: "ScaleAOn SD-WAN", body: "Hybrid WAN for development centres and offices. Application-aware routing for developer toolchains and cloud workloads.", href: "/products/sd-wan" },
        { title: "indusWall SASE", body: "ZTNA for hybrid and remote workforce. Replaces VPN with scalable, identity-aware application access.", href: "/products/sase" },
        { title: "CloudStation Insights", body: "Network observability with Quality Score, Capacity Score, and API access for integration with DevOps toolchains.", href: "/products/cloudstation-insights" }] },
      { kind: "cta", title: "A network your developers, operations, and security teams can all rely on.", body: "Talk to a Lavelle Networks specialist about multi-site connectivity, workforce access, and cloud routing for your IT organisation.", ctas: [{ label: "Request a Demo", href: "/contact/request-demo" }, { label: "Talk to an Expert", href: "/contact/talk-to-expert" }] },
    ],
  },
];
