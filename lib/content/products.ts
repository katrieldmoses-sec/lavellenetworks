import type { PageContent, StubPage } from "./types";

export const productPages: PageContent[] = [
  {
    slug: "sd-wan",
    metaTitle: "ScaleAOn SD-WAN — Enterprise WAN Platform",
    metaDescription:
      "Enterprise SD-WAN built for performance, resilience, and operational control across every branch, data centre, and cloud workload.",
    sections: [
      {
        kind: "hero",
        eyebrow: "ScaleAOn SD-WAN · Enterprise WAN Platform",
        title:
          "Enterprise SD-WAN built for performance, resilience, and operational control.",
        body: "Connect every branch, data centre, and cloud workload through intelligent, application-aware WAN infrastructure designed for large distributed enterprises.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Download Datasheet", href: "/resources/datasheets" },
        ],
      },
      {
        kind: "challenge",
        eyebrow: "The Challenge",
        title: "Why enterprise WAN demands a better answer",
        intro:
          "Distributed enterprises are operating WAN infrastructure that was designed before cloud-first architectures, hybrid work, and multi-link connectivity became standard requirements.",
        bullets: [
          "Managing multiple ISP links with no intelligent path selection",
          "Application performance degradation during link failures",
          "IT teams spending weeks deploying each new branch",
          "No centralised visibility across distributed WAN",
          "Excessive MPLS costs with no flexibility to adopt broadband",
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Capabilities",
        title: "What ScaleAOn SD-WAN delivers",
        items: [
          {
            title: "Intelligent Path Selection",
            body: "Application-aware routing across broadband, MPLS, 4G, and 5G simultaneously — traffic always takes the best available path based on real-time link conditions.",
          },
          {
            title: "Zero-Touch Provisioning",
            body: "Deploy new branches without sending specialised engineers on-site. Pre-configured edge devices connect automatically the moment they are powered on.",
          },
          {
            title: "Multi-Provider Resilience",
            body: "Automatic failover maintains application uptime when any individual link degrades. No manual intervention required to restore connectivity.",
          },
          {
            title: "WAN Optimisation",
            body: "Compression, deduplication, and QoS policies reduce bandwidth consumption and ensure business-critical applications always receive priority treatment.",
          },
          {
            title: "Centralised Policy Management",
            body: "Apply and enforce network policies across all sites from one console. Consistent configuration without per-device manual work.",
          },
          {
            title: "Real-Time Visibility",
            body: "Full-stack WAN telemetry with application-level performance dashboards. Know the health of every link and application across every branch at all times.",
          },
        ],
      },
      {
        kind: "how",
        eyebrow: "How It Works",
        title: "From first device to full enterprise WAN",
        steps: [
          {
            title: "Deploy ScaleAOn edge devices",
            body: "Ship pre-configured ScaleAOn appliances to each branch location. Zero-touch provisioning means no specialist engineer is needed on-site.",
          },
          {
            title: "Establish encrypted overlay",
            body: "All sites connect automatically through encrypted tunnels to the ScaleAOn controller, forming a secure, managed WAN fabric.",
          },
          {
            title: "Continuous application-aware routing",
            body: "Application traffic is continuously monitored and steered across the best available path — broadband, MPLS, 4G, or 5G — in real time.",
          },
          {
            title: "Unified operations and control",
            body: "IT operations teams get unified visibility and policy control through a single centralised dashboard, with alerts and telemetry across the entire WAN.",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Enterprise Outcomes",
        title: "What your organisation gains",
        items: [
          {
            title: "Deploy new branches in hours, not weeks",
            body: "Zero-touch provisioning eliminates on-site engineering requirements. Ship a device, power it on, and the branch is live.",
          },
          {
            title: "Maintain application performance across all links",
            body: "Intelligent path control adapts to real-time network conditions so application experience does not depend on any single link.",
          },
          {
            title: "Reduce WAN costs without sacrificing reliability",
            body: "Add broadband and 4G links alongside or in place of costly MPLS circuits and retain full resilience through multi-path failover.",
          },
        ],
      },
      {
        kind: "platform",
        eyebrow: "Platform",
        title: "Explore the full Lavelle Networks platform",
        links: [
          {
            title: "indusWall SASE",
            body: "Cloud-native network security converged with SD-WAN",
            href: "/products/sase",
          },
          {
            title: "ipDesk AI Ops",
            body: "AI-powered operations and predictive network intelligence",
            href: "/products/ai-operations",
          },
          {
            title: "SD-Branch",
            body: "Converged branch networking — LAN, WAN, and wireless",
            href: "/products/secure-branch",
          },
        ],
      },
      {
        kind: "cta",
        title: "Ready to modernise your enterprise WAN?",
        body: "Talk to a Lavelle Networks specialist and see how ScaleAOn SD-WAN fits your network requirements.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Download Datasheet", href: "/resources/datasheets" },
        ],
      },
    ],
  },
  {
    slug: "sase",
    metaTitle: "indusWall SASE — Cloud-Native Network Security",
    metaDescription:
      "Cloud-delivered networking and security for users, branches, applications, and devices. Converge SD-WAN, Zero Trust, and cloud security into one platform.",
    sections: [
      {
        kind: "hero",
        eyebrow: "indusWall SASE · Cloud-Native Network Security",
        title:
          "Cloud-delivered networking and security for users, branches, applications, and devices.",
        body: "Converge SD-WAN, Zero Trust, and cloud security into one platform that protects every user, branch, and cloud workload — without the complexity of multiple point products.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Explore Security Capabilities", href: "/products/ztna" },
        ],
      },
      {
        kind: "challenge",
        eyebrow: "The Challenge",
        title: "The perimeter is gone. Security has to move with your users.",
        intro:
          "Enterprise workforces are distributed across branches, homes, and cloud platforms. Traditional perimeter-based security cannot follow them — and trying to force it creates performance problems and policy gaps.",
        bullets: [
          "Remote and hybrid workforce accessing corporate applications over untrusted networks",
          "Security policies inconsistently applied across branches and cloud workloads",
          "Multiple point-product security vendors with no unified visibility",
          "MPLS-backhauled internet traffic creating latency and performance issues",
          "Growing threat surface from SaaS adoption and cloud migration",
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Capabilities",
        title: "What indusWall SASE delivers",
        items: [
          {
            title: "Zero Trust Network Access",
            body: "Identity-aware access policies ensure users only reach authorised applications — never the broader network. Access is evaluated continuously, not just at login.",
          },
          {
            title: "Secure Web Gateway",
            body: "Inspect and filter all web and internet traffic across every user and branch. Block malware, enforce acceptable-use policies, and gain full visibility into web activity.",
          },
          {
            title: "Cloud Access Security Broker",
            body: "Visibility and control over SaaS application usage and data movement. Prevent data exfiltration and enforce compliance policies across cloud workloads.",
          },
          {
            title: "Firewall as a Service",
            body: "Cloud-delivered firewall policies applied consistently across branches and users — without deploying physical appliances at every location.",
          },
          {
            title: "Branch-to-Cloud Security",
            body: "Secure direct internet access from branches without backhauling traffic to a central datacenter. Users get cloud performance; security teams get full inspection.",
          },
          {
            title: "Unified Policy Management",
            body: "One console for networking and security policies across all users, branches, and cloud workloads. Remove the operational overhead of managing multiple disconnected tools.",
          },
        ],
      },
      {
        kind: "how",
        eyebrow: "How It Works",
        title: "Security that travels with your users and workloads",
        steps: [
          {
            title: "Connect through the indusWall security fabric",
            body: "Users and branches establish connections through the indusWall cloud security fabric — a globally distributed set of security enforcement points.",
          },
          {
            title: "Verify identity and device posture",
            body: "Before any application access is granted, identity and device posture are verified. Zero Trust policies are evaluated in real time for every session.",
          },
          {
            title: "Inline traffic inspection",
            body: "All traffic is inspected through SWG, CASB, and FWaaS policy engines simultaneously — providing layered protection without adding latency.",
          },
          {
            title: "Unified visibility and control",
            body: "Every connection, user, and policy decision is visible in real time through a single operations console. Respond to threats and policy violations immediately.",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Enterprise Outcomes",
        title: "What your organisation gains",
        items: [
          {
            title: "Consistent security from every location",
            body: "Cloud-delivered policies apply equally to branches, remote users, and mobile devices. There is no perimeter to bypass.",
          },
          {
            title: "Eliminate performance-killing backhaul",
            body: "Direct cloud and internet access with inline security, without routing all traffic through central datacentres. Users experience lower latency and better application performance.",
          },
          {
            title: "Reduce vendor sprawl",
            body: "Replace multiple point-security products with one converged SASE platform. Fewer vendors means lower cost, less complexity, and faster incident response.",
          },
        ],
      },
      {
        kind: "platform",
        eyebrow: "Platform",
        title: "Explore the full Lavelle Networks platform",
        links: [
          {
            title: "ScaleAOn SD-WAN",
            body: "Application-aware WAN infrastructure for distributed enterprises",
            href: "/products/sd-wan",
          },
          {
            title: "ZTNA",
            body: "Zero Trust application access for every user and device",
            href: "/products/ztna",
          },
          {
            title: "ipDesk AI Ops",
            body: "AI-powered operations and predictive network intelligence",
            href: "/products/ai-operations",
          },
        ],
      },
      {
        kind: "cta",
        title: "Ready to converge your network and security?",
        body: "Talk to a Lavelle Networks specialist and see how indusWall SASE fits your security and connectivity requirements.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Explore Security Capabilities", href: "/products/ztna" },
        ],
      },
    ],
  },
  {
    slug: "ai-operations",
    metaTitle: "ipDesk AI Ops — AI-Powered Network Operations",
    metaDescription:
      "AI-powered operations for predictive, autonomous, and experience-led enterprise networks — from anomaly detection to automated resolution.",
    sections: [
      {
        kind: "hero",
        eyebrow: "ipDesk AI Ops · AI-Powered Network Operations",
        title:
          "AI-powered operations for predictive, autonomous, and experience-led enterprise networks.",
        body: "Stop reacting to network problems and start preventing them. ipDesk brings AI to every layer of enterprise network operations — from anomaly detection to automated resolution.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "View Documentation", href: "/resources/documentation" },
        ],
      },
      {
        kind: "challenge",
        eyebrow: "The Challenge",
        title:
          "Reactive operations cannot keep pace with distributed enterprise networks",
        intro:
          "As networks scale across hundreds or thousands of sites, manual monitoring and reactive incident management create unsustainable operational load — and leave users experiencing problems that IT hasn't detected yet.",
        bullets: [
          "IT teams spending most of their time reacting to network incidents rather than preventing them",
          "No correlation between network events across multiple devices and sites",
          "Application performance issues reported by users long before IT detects them",
          "Manual troubleshooting processes that take hours or days to resolve",
          "No predictive visibility into capacity constraints before they affect operations",
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Capabilities",
        title: "What ipDesk AI Ops delivers",
        items: [
          {
            title: "Predictive Anomaly Detection",
            body: "AI identifies deviations from normal behaviour before they cause user-impacting incidents — giving IT teams time to act rather than react.",
          },
          {
            title: "Automated Root-Cause Analysis",
            body: "Correlate events across devices, links, and applications to pinpoint the source of any issue automatically, without hours of manual investigation.",
          },
          {
            title: "Network Health Scoring",
            body: "Continuous scoring of every site, link, and application with trend analysis. Know at a glance what is healthy, degraded, or at risk.",
          },
          {
            title: "Capacity Forecasting",
            body: "AI models predict when bandwidth, CPU, or storage will reach critical thresholds — before they affect operations — so you can act proactively.",
          },
          {
            title: "Intelligent Alerting",
            body: "Prioritised alerts based on business impact, not raw event volume. Operators see what matters first, not everything at once.",
          },
          {
            title: "Experience Monitoring",
            body: "End-to-end visibility into application experience for every user at every location. Detect experience degradation before users raise a ticket.",
          },
        ],
      },
      {
        kind: "how",
        eyebrow: "How It Works",
        title: "From telemetry to resolution, without manual effort",
        steps: [
          {
            title: "Telemetry ingestion from every layer",
            body: "Telemetry streams from every device, link, and application across the enterprise network — a continuous, high-resolution view of the entire infrastructure.",
          },
          {
            title: "AI baseline establishment",
            body: "The ipDesk AI engine processes telemetry in real time to establish normal behaviour baselines for every site, link, device, and application.",
          },
          {
            title: "Actionable insights surfaced",
            body: "Anomalies, correlations, and predictions are surfaced as prioritised, actionable insights in the operations dashboard — not raw alerts requiring interpretation.",
          },
          {
            title: "Automated remediation",
            body: "Automated remediation workflows resolve common issues without requiring manual IT intervention, reducing mean time to resolution significantly.",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Enterprise Outcomes",
        title: "What your organisation gains",
        items: [
          {
            title: "Resolve issues before users notice them",
            body: "Predictive detection gives IT teams time to act before incidents escalate. Most issues are addressed before a user reports a problem.",
          },
          {
            title: "Reduce mean time to resolution",
            body: "Automated root-cause analysis eliminates the manual detective work that turns minor incidents into extended outages.",
          },
          {
            title: "Operate with confidence at scale",
            body: "AI-powered operations scale across thousands of sites without adding headcount. Your team stays in control as the network grows.",
          },
        ],
      },
      {
        kind: "platform",
        eyebrow: "Platform",
        title: "Explore the full Lavelle Networks platform",
        links: [
          {
            title: "ScaleAOn SD-WAN",
            body: "Application-aware WAN infrastructure for distributed enterprises",
            href: "/products/sd-wan",
          },
          {
            title: "SD-Branch",
            body: "Converged branch networking — LAN, WAN, and wireless",
            href: "/products/secure-branch",
          },
          {
            title: "Digital Experience",
            body: "End-to-end application and user experience monitoring",
            href: "/products/digital-experience",
          },
        ],
      },
      {
        kind: "cta",
        title: "Ready to move from reactive to predictive network operations?",
        body: "Talk to a Lavelle Networks specialist and see how ipDesk AI Ops fits your enterprise operations requirements.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "View Documentation", href: "/resources/documentation" },
        ],
      },
    ],
  },
  {
    slug: "ztna",
    metaTitle: "Zero Trust Network Access (ZTNA)",
    metaDescription:
      "Replace legacy VPNs with zero trust access that verifies every user and device before granting application access based on identity, context, and device posture.",
    sections: [
      {
        kind: "hero",
        eyebrow: "Product",
        title: "Zero Trust Network Access",
        body: "Replace legacy VPNs with zero trust access that verifies every user and device before granting application access based on identity, context, and device posture.",
        ctas: [
          { label: "Request ZTNA Demo", href: "/contact/request-demo" },
          { label: "Learn More", href: "/products/sase" },
        ],
      },
      {
        kind: "features",
        eyebrow: "Key Features",
        items: [
          {
            title: "Identity Verification",
            body: "Continuous authentication and authorization for every session",
          },
          {
            title: "Microsegmentation",
            body: "Application-level access control with least-privilege principles",
          },
          {
            title: "Device Posture",
            body: "Verify device health and security before granting access",
          },
          {
            title: "Session Monitoring",
            body: "Real-time visibility and control over all user sessions",
          },
          {
            title: "MFA Integration",
            body: "Multi-factor authentication for enhanced security",
          },
          {
            title: "VPN Replacement",
            body: "Modern alternative to traditional VPN infrastructure",
          },
        ],
      },
      {
        kind: "stats",
        eyebrow: "Business Outcomes",
        items: [
          {
            value: "80%",
            title: "Attack Surface Reduction",
            body: "Hide applications from discovery",
          },
          {
            value: "60%",
            title: "Faster Access",
            body: "Direct-to-app connectivity",
          },
          {
            value: "100%",
            title: "Verified Access",
            body: "Never trust, always verify",
          },
        ],
      },
      {
        kind: "cta",
        title: "Ready for Zero Trust?",
        body: "Transform your access security with identity-based zero trust",
        ctas: [
          { label: "Schedule a Demo", href: "/contact/request-demo" },
          { label: "Talk to an Expert", href: "/contact/talk-to-expert" },
        ],
      },
    ],
  },
  {
    slug: "cloudport-edge",
    metaTitle: "CloudPort Edge — ScaleAOn SD-WAN",
    metaDescription:
      "Enterprise-grade WAN edge connectivity for every branch, office, and data centre location, powering the ScaleAOn platform.",
    sections: [
      {
        kind: "hero",
        eyebrow: "CloudPort Edge \u00b7 ScaleAOn SD-WAN",
        title:
          "Enterprise-grade WAN edge connectivity for every branch, office, and data centre location.",
        body: "CloudPort Edge devices deploy at enterprise locations of any size, providing the WAN connectivity, application intelligence, and local policy enforcement that powers the ScaleAOn platform.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Download Datasheet", href: "/resources/datasheets" },
        ],
      },
      {
        kind: "flow",
        eyebrow: "Platform Role",
        title: "The branch edge of the ScaleAOn platform.",
        intro:
          "Every enterprise location runs a CloudPort Edge instance. It provides local WAN connectivity, enforces application policies, monitors link quality, and connects the branch to the broader ScaleAOn network through encrypted tunnels to the CloudPort Gateway.",
        nodes: [
          { title: "Branch / Office", sub: "Enterprise location" },
          { title: "CloudPort Edge", sub: "WAN edge device" },
          { title: "CloudPort Gateway", sub: "Aggregation hub" },
          { title: "CloudStation Controller", sub: "Orchestration layer" },
          { title: "Data Centre / Cloud", sub: "Destination" },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Key Capabilities",
        title: "What CloudPort Edge delivers at every location.",
        items: [
          { title: "Multi-transport WAN", body: "Connect across broadband, MPLS, 4G/LTE, and 5G links simultaneously from any enterprise location. No single transport dependency." },
          { title: "Application-aware routing", body: "Classify and route application traffic based on type, priority, and link quality in real time. Business-critical applications always receive the treatment they require." },
          { title: "Dynamic path selection", body: "Continuously measure link quality and automatically shift traffic to the best available path. Degraded links are avoided before users notice any impact." },
          { title: "Zero-touch deployment", body: "Pre-configure devices before shipping. Site teams plug in and the device self-provisions without specialised networking knowledge or on-site engineers." },
          { title: "Local security", body: "Apply security policies at the branch level, including firewall, access control, and segmentation capabilities \u2014 consistently enforced from central policy." },
          { title: "Real-time telemetry", body: "Stream continuous performance data to CloudStation Insights for visibility, analytics, and AI-powered operations across every edge location." },
        ],
      },
      {
        kind: "deployment",
        eyebrow: "Deployment Options",
        title: "Deploy where your enterprise needs it.",
        intro:
          "CloudPort Edge is available as a physical appliance, virtual appliance, or cloud instance. Organisations can mix deployment types across locations to match each site's infrastructure requirements.",
        items: [
          { title: "Physical appliance", body: "Rack or desktop form factors for branch offices of varying sizes. Sized for small satellite offices through large regional enterprise locations." },
          { title: "Virtual appliance", body: "Deploy as a virtual machine in virtualised branch environments or data centres. Runs on standard hypervisor infrastructure already in place." },
          { title: "Cloud instance", body: "Deploy in AWS, Azure, or GCP for cloud-native SD-WAN connectivity. Extend the ScaleAOn fabric to public cloud workloads without additional hardware." },
        ],
        note: "Contact sales for current model specifications and datasheets.",
      },
      {
        kind: "note",
        eyebrow: "Models and Licencing",
        title: "Form factors for every enterprise location.",
        body: "CloudPort Edge is available in multiple hardware and virtual form factors sized for small branches through large enterprise locations. Contact Lavelle Networks for current model specifications, datasheets, and licensing details.",
        cta: { label: "Talk to an expert", href: "/contact/talk-to-expert" },
      },
      {
        kind: "platform",
        eyebrow: "ScaleAOn Platform",
        title: "Explore the other ScaleAOn components.",
        links: [
          { title: "CloudPort Gateway", body: "The aggregation hub that connects edge locations to data centres and cloud", href: "/products/cloudport-gateway" },
          { title: "CloudStation Controller", body: "Centralised orchestration and policy management for all edge devices", href: "/products/cloudstation-controller" },
          { title: "CloudStation Insights", body: "Analytics and intelligence layer providing visibility across every edge location", href: "/products/cloudstation-insights" },
        ],
      },
      {
        kind: "cta",
        title: "Deploy ScaleAOn at your enterprise locations.",
        body: "Talk to a Lavelle Networks specialist to understand how CloudPort Edge fits your network footprint and infrastructure requirements.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Talk to an Expert", href: "/contact/talk-to-expert" },
        ],
      },
    ],
  },
  {
    slug: "cloudport-gateway",
    metaTitle: "CloudPort Gateway \u2014 ScaleAOn SD-WAN",
    metaDescription:
      "The aggregation and interconnection hub connecting edge locations, data centres, and cloud networks.",
    sections: [
      {
        kind: "hero",
        eyebrow: "CloudPort Gateway \u00b7 ScaleAOn SD-WAN",
        title:
          "The aggregation and interconnection hub connecting edge locations, data centres, and cloud networks.",
        body: "CloudPort Gateway aggregates encrypted tunnels from distributed CloudPort Edge locations, peers with data-centre routing infrastructure, and connects the ScaleAOn network to public cloud environments.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Download Datasheet", href: "/resources/datasheets" },
        ],
      },
      {
        kind: "flow",
        eyebrow: "Platform Role",
        title: "The aggregation layer of the ScaleAOn platform.",
        intro:
          "CloudPort Gateway sits between the distributed edge and the enterprise core. It aggregates encrypted tunnels from every CloudPort Edge location, provides the gateway into data-centre and cloud infrastructure, and enables intelligent traffic steering at the network's convergence point.",
        nodes: [
          { title: "CloudPort Edge locations", sub: "Encrypted tunnels" },
          { title: "CloudPort Gateway", sub: "Aggregation hub" },
          { title: "Data Centre", sub: "BGP/OSPF peering" },
          { title: "Cloud", sub: "AWS / Azure / GCP" },
          { title: "Internet", sub: "SaaS breakout" },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "Key Capabilities",
        title: "Gateway capabilities for enterprise-scale networks.",
        items: [
          { title: "VPN tunnel aggregation", body: "Terminate and aggregate encrypted WAN tunnels from all distributed CloudPort Edge locations into a unified, managed gateway fabric." },
          { title: "BGP and OSPF peering", body: "Peer with enterprise data-centre routing infrastructure using standard protocols. CloudPort Gateway integrates cleanly with existing routing architectures." },
          { title: "Link bonding", body: "Combine multiple WAN links into logical bonded connections for increased aggregate throughput and transport-level resilience without application impact." },
          { title: "High availability", body: "Active-active or active-standby gateway configurations ensure continuous operation. Failover occurs automatically without requiring manual intervention." },
          { title: "DC/DR traffic rerouting", body: "Automatically reroute traffic during data-centre failover or disaster-recovery events, maintaining enterprise application continuity during infrastructure disruptions." },
          { title: "Multi-point internet breakout", body: "Enable direct internet access from gateway locations for SaaS and cloud workloads, reducing backhaul requirements and improving cloud application performance." },
        ],
      },
      {
        kind: "challenge",
        eyebrow: "Additional Capabilities",
        title: "Built to slot into existing enterprise infrastructure.",
        bullets: [
          "NFV service chaining for virtual network function integration",
          "AWS, Azure, and GCP cloud connectivity",
          "Physical and virtual deployment on standard infrastructure",
          "Centralised management through CloudStation Controller",
        ],
      },
      {
        kind: "deployment",
        eyebrow: "Deployment Options",
        title: "Physical, virtual, or cloud \u2014 wherever your core sits.",
        items: [
          { title: "Physical gateway appliance", body: "Purpose-built hardware for data-centre rack deployment. Sized for enterprise aggregation workloads with the port density and throughput required at gateway locations." },
          { title: "Virtual gateway", body: "Deploy on standard server hardware or hypervisors. Suitable for organisations already running virtualised data-centre infrastructure." },
          { title: "Cloud gateway", body: "Native cloud deployment in AWS, Azure, or GCP. Enables SD-WAN gateway functions inside public cloud regions for cloud-centric network architectures." },
        ],
      },
      {
        kind: "note",
        eyebrow: "Models and Licencing",
        title: "Scaled for enterprise data-centre environments.",
        body: "CloudPort Gateway is available in physical and virtual configurations scaled for enterprise data-centre environments. Contact Lavelle Networks for current specifications, throughput ratings, and licensing details.",
        cta: { label: "Talk to an expert", href: "/contact/talk-to-expert" },
      },
      {
        kind: "platform",
        eyebrow: "ScaleAOn Platform",
        title: "Explore the other ScaleAOn components.",
        links: [
          { title: "CloudPort Edge", body: "The WAN edge device deployed at every enterprise location", href: "/products/cloudport-edge" },
          { title: "CloudStation Controller", body: "Centralised orchestration and policy management for the ScaleAOn network", href: "/products/cloudstation-controller" },
          { title: "CloudStation Insights", body: "Analytics and intelligence layer for end-to-end network visibility", href: "/products/cloudstation-insights" },
        ],
      },
      {
        kind: "cta",
        title: "Connect your enterprise network at scale.",
        body: "Talk to a Lavelle Networks specialist to understand how CloudPort Gateway fits your data-centre and cloud connectivity requirements.",
        ctas: [
          { label: "Request a Demo", href: "/contact/request-demo" },
          { label: "Talk to an Expert", href: "/contact/talk-to-expert" },
        ],
      },
    ],
  },
];

/** Product pages that are placeholder-only in the source design. */
export const productStubs: StubPage[] = [
  { slug: "cloud-connectivity", heading: "CloudConnectivity Page" },
  { slug: "digital-experience", heading: "DigitalExperience Page" },
  { slug: "network-analytics", heading: "NetworkAnalytics Page" },
  { slug: "secure-branch", heading: "SecureBranch Page" },
  { slug: "secure-internet", heading: "SecureInternet Page" },
];
