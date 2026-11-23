import type { PageContent } from "./types";

export const companyPages: PageContent[] = [
  {
    slug: "about",
    metaTitle: "Our Story",
    metaDescription:
      "Ten years ago we set out with a simple belief: the network must adapt to the user, not the other way around. The decade behind, and the decade ahead.",
    sections: [
      {
        kind: "hero",
        eyebrow: "Our Story",
        title: "The Decade Behind. The Decade Ahead.",
        body: "Ten years ago, we set out with a simple belief: the network must adapt to the user, not the other way around. That belief took us from our first customer deployments to some of India’s largest, most demanding enterprise networks.",
        ctas: [
          { label: "Meet our Leadership", href: "/company/leadership" },
          { label: "View Open Roles", href: "/company/careers" },
        ],
      },
      {
        kind: "note",
        eyebrow: "The Decade Behind",
        title: "Values. Vision. Victory.",
        body: "We’ve connected branches, stabilised last-mile realities, and sustained mission-critical operations day and night. In the process, we built products, learned from failures, scaled hard, regrouped harder, and grew wiser. Values proved to be the foundation that sustains an organisation through uncertainty and growth — like staying with an early customer to recover from a major network meltdown, even though it meant missing a bid deadline for a major opportunity in another city. Vision gave direction when the path was unclear: from the beginning, we believed enterprise networking would fundamentally change as work became distributed and cloud-first. Our values and vision eventually led to victory.",
      },
      {
        kind: "stats",
        eyebrow: "Victory",
        title: "Built on values. Proven at scale.",
        items: [
          { value: "15%", title: "Enterprise market share", body: "Meaningful double-digit share in key enterprise segments" },
          { value: "35%", title: "BFSI market share", body: "Leadership in large public-sector financial networks" },
          { value: "90 Billion+", title: "Network sessions inspected every year", body: "Hundreds of gigabits of traffic processed every day" },
        ],
      },
      {
        kind: "table",
        eyebrow: "A Decade of Building",
        title: "A decade of building networks that India runs on.",
        headers: ["Year", "Milestone"],
        rows: [
          ["2015", "The journey begins. Lavelle Networks is born in Bengaluru to simplify enterprise networking through software-defined, cloud-managed architecture."],
          ["2016", "SD-WAN enters Indian retail, with one of South Asia’s largest retailers among the region’s earliest large-scale retail deployments."],
          ["2017", "Ideaspring Capital invests; Microsoft Accelerator and Jio GenNext pick Lavelle. Our first 1,000+ location SD-WAN network goes live."],
          ["2018", "Enterprise adoption takes off across e-commerce, banking, insurance and retail, as YourNest and other investors back our journey."],
          ["2019", "One of South Asia’s first bank ATM SD-WAN networks goes live."],
          ["2020", "A leading PSU bank selects our Made-in-India platform — growing from 3,000+ branches into one of Asia’s largest SD-WAN banking networks."],
          ["2021", "Scaling through the pandemic: a major e-commerce deployment crosses 2,000 locations."],
          ["2022", "Bharti Airtel partners with and invests in Lavelle."],
          ["2023", "Approximately 15% of India’s enterprise SD-WAN market."],
          ["2024–2025", "Leadership in Indian BFSI, and beyond 20,000 enterprise locations nationwide."],
          ["2025", "Ten years. 150+ customers. 20,000+ locations."],
        ],
      },
      {
        kind: "platform",
        eyebrow: "Platform Strategy",
        title: "Three platforms. One enterprise network strategy.",
        intro:
          "We put simplicity at the centre — rethinking network control as software, not protocol choreography, and proving that cloud-native, software-defined networking could scale reliably in real-world enterprise environments.",
        links: [
          { title: "ScaleAOn SD-WAN", body: "Intelligent software-defined WAN for distributed enterprise connectivity.", href: "/products/sd-wan" },
          { title: "ScaleAOn SD-Branch", body: "One network for the branch: SD-WAN, switching and Wi-Fi, centrally managed.", href: "/products/secure-branch" },
          { title: "indusWall SASE", body: "Cloud-native security and networking convergence for the hybrid enterprise.", href: "/products/sase" },
        ],
      },
      {
        kind: "capabilities",
        eyebrow: "The Decade Ahead",
        title: "Do Great Work Anywhere.",
        items: [
          { title: "75% of India’s enterprises", body: "will upgrade their edge networks in the next 12–24 months." },
          { title: "100,000+ MSMEs", body: "need network-as-a-service." },
          { title: "500,000+ government citizen service centres", body: "are re-building their networks." },
          { title: "Millions of enterprise network links", body: "are migrating from legacy circuits like MPLS to cheaper, faster, ubiquitous internet broadband." },
        ],
      },
      {
        kind: "cta",
        title: "Keep building. Keep winning.",
        body: "We are here for everything — large enterprise, medium enterprises, government, defence — all of it. And we will build methodically, patiently and relentlessly until we get there.",
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
      "Meet the founders, leadership team, Board and advisors of Lavelle Networks.",
    sections: [
      {
        kind: "hero",
        eyebrow: "Company / Leadership",
        title: "Experienced leadership. Decade of execution.",
        body: "Lavelle Networks is led by its founders and an experienced leadership team with deep roots in enterprise networking, telecom and technology services. Built from Bangalore, the leadership has spent a decade shaping how Indian enterprises approach connectivity, security, and network operations.",
      },
      // Profiles, titles and portraits from "Lavelle_Leadership_Profiles.docx" (Nov 2026).
      {
        kind: "people",
        eyebrow: "Founders",
        title: "The founders who built Lavelle",
        intro:
          "Shyamal Kumar and Drritiman Boraah founded Lavelle Networks in 2015 and both serve on its Board, providing continuity between the Board and the operating organisation across technology, customers and execution.",
        items: [
          {
            category: "Founder",
            name: "Shyamal Kumar",
            role: "Founder & Chairman",
            bio: [
              "I am the Founder of Lavelle Networks, where I guide long‑term strategy, product direction, and value creation. Over the last two decades, I have built and scaled enterprise and service‑provider networking platforms deployed at national and global scale—across data centers, distributed enterprises, and carrier networks.",
              "My career includes leadership roles in foundational networking platforms such as the Juniper MX series, early wireless broadband systems including the Telsima WiMAX portfolio, and the industry’s first virtual services switch at Inkra Networks, designed for zero‑downtime upgrades through a modular architecture.",
              "At Lavelle Networks, I led the creation and scale‑out of the ScaleAOn SD‑WAN platform, which now powers some of India’s most complex and mission‑critical communication networks across financial services, education, e‑commerce, logistics, and large citizen‑services deployments. These environments demand reliability, operational discipline, and performance at scale—far beyond proof‑of‑concept innovation.",
              "My experience spans building world‑class technology platforms, assembling senior leadership teams across engineering, product, sales, and operations, and working closely with enterprise customers and ecosystem partners through long, high‑accountability deployment cycles. Industry recognition—including Entrepreneur of the Year 2022 and Top 25 Software CEOs in Asia (2020)—reflects this blend of technology depth and sustained execution.",
              "As Chairman, my focus is on governance, strategic clarity, and long‑range decision‑making—ensuring Lavelle Networks continues to invest ahead of the curve, operate with discipline, and build durable enterprise value over the coming decade.",
            ],
            photo: "/leadership/shyamal-kumar.jpg",
            note: "Board since 2015",
            href: "https://www.linkedin.com/in/shyamalk/",
          },
          {
            category: "Co-founder",
            name: "Drritiman Boraah",
            role: "Co-Founder & Board Member",
            bio: [
              "I am passionate about building businesses that thrive on trust, innovation, and customer success. As Co-Founder and Board Member at Lavelle Networks, I transformed a bold vision into reality—creating India’s first Software Defined Networking company and scaling it into a market leader.",
              "From zero to scale, I built Lavelle Networks’ sales and customer operations from the ground up. My approach combines strategic foresight with hands-on execution—whether it’s shaping board-level decisions, negotiating win-win deals, or resolving complex field challenges. I believe in empowering people and fostering relationships that last, making every engagement a success story.",
              "Today, Lavelle Networks powers mission-critical networks for leading enterprises across banking, insurance, e-commerce, manufacturing, and government sectors. My role spans driving revenue growth, building high-performance teams, and ensuring customer delight at every touchpoint.",
              {
                title: "Co-Founder & Chief Sales Officer, Board Member · 2015 – Present",
                list: [
                  "Spearheaded the creation of the company’s sales and customer success engine from scratch, enabling rapid market penetration and multi-million-dollar revenues.",
                  "Built and scaled pre-sales, support, and customer success organizations, ensuring seamless delivery and long-term client relationships.",
                  "Negotiated strategic contracts with Fortune 500 enterprises and government institutions, delivering outcomes that balance business growth and customer value.",
                  "Represented Lavelle Networks at industry forums, influencing SD-WAN adoption and shaping networking trends in India.",
                  "Key contributor to board-level decisions on strategy, partnerships, and growth initiatives.",
                ],
              },
              {
                title: "Previous roles",
                list: [
                  "Senior leadership roles in customer engineering and operations at Lavelle Networks.",
                  "Prior experience in global technology companies (Versa Networks, Juniper Networks, Nokia Siemens Networks, Motorola Solutions, Sasken, Lucent Technologies) with expertise in quality assurance and product testing.",
                ],
              },
              {
                title: "Skills & strengths",
                list: [
                  "Strategic Sales Leadership",
                  "Customer Success & Operations",
                  "Board-Level Decision Making",
                  "Contract Negotiation & Deal Structuring",
                  "Team Building & People Leadership",
                  "Enterprise Networking & SD-WAN Expertise",
                ],
              },
              { title: "Education", list: ["Bachelor of Engineering, Instrumentation — Dibrugarh University"] },
              "Business builder, relationship architect, and fitness enthusiast. When not driving growth, I enjoy exploring the world with my family.",
            ],
            photo: "/leadership/drritiman-boraah.jpg",
            note: "Board since 2022",
            href: "https://www.linkedin.com/in/drritiman-boraah-a861606/",
          },
        ],
      },
      {
        kind: "people",
        eyebrow: "Leadership Team",
        title: "The team behind growth, customers, and operations",
        intro:
          "Leaders across government and enterprise business, customer success and operations who shape Lavelle’s day-to-day execution.",
        items: [
          {
            category: "Government, PSU Banking & Strategic Business",
            name: "Netaji Patil",
            role: "Executive Vice President",
            bio: [
              "Telecom Business Transformation Leader with 23+ years of experience driving growth, market expansion, and digital infrastructure transformation across Telecom, SD-WAN, Enterprise Networking, Managed Services, and Government ecosystems.",
              "Proven track record of building and scaling Government, PSU Banking, Enterprise, and Strategic Partnership businesses while leading sales, product strategy, bid management, delivery, and market expansion initiatives.",
              {
                title: "Key highlights",
                list: [
                  "Managed ₹100+ Cr business portfolio across Telecom and Enterprise Networking domains",
                  "Contributed to 30,000+ SD-WAN deployments across Government, Banking, and Enterprise customers",
                  "Created SD-WAN opportunities exceeding USD 100 Million across ~50,000 locations",
                  "Achieved ~34% market share in the Government PSU Banking segment",
                  "Strategic leadership in large-scale Government and Digital Infrastructure initiatives including PSU Banking and Department of Posts opportunities",
                ],
              },
              "Core expertise includes SD-WAN, SASE, Enterprise Networking, Government Business, Public Procurement, Strategic Alliances, Telecom Partnerships, Network Transformation, Managed Services, Product GTM, and Business Growth Strategy.",
              "Passionate about helping organizations accelerate digital transformation through innovative networking, secure connectivity, ecosystem partnerships, and scalable business models.",
            ],
            photo: "/leadership/netaji-patil.jpg",
            href: "https://www.linkedin.com/in/netaji-patil-the-sales-leader/",
          },
          {
            category: "Customer Operations, Support & Network Delivery",
            name: "Nishant Verma",
            role: "Director, Customer Success",
            // The profile doc lists areas of expertise only; the summary paragraph is from the leadership note.
            bio: [
              "Nishant Verma is responsible for the operating lifecycle of Lavelle’s deployed customer base: customer success, technical support, network and project delivery, telecom coordination, and hardware supply chain and deployment operations. He joined Lavelle in a feasibility, access-strategy and partnerships role, giving him a strong grounding in telecom connectivity, last-mile feasibility and delivery execution.",
              {
                title: "Expertise",
                list: [
                  "Service Assurance",
                  "Partner Management",
                  "Channel Management",
                  "SD-WAN",
                  "Network Operations",
                  "Customer Support",
                  "Service Delivery",
                  "ISP Services",
                  "Enterprise Connectivity",
                  "Project Management",
                  "SSO",
                ],
              },
            ],
            photo: "/leadership/nishant-verma.jpg",
            href: "https://www.linkedin.com/in/nishant-verma-8bbb5a10/",
          },
          {
            category: "Operations",
            name: "Sax Krishna",
            role: "Chief Operating Officer",
            bio: [
              "Enhancing enterprise value through vision, strategy, and flawless execution. Over 28 years of experience in IT, BPO & Technology domain across North America, Europe, India & APAC with repeated success in business transformation, built on assiduous identification & capitalization of market opportunities.",
              "Ability to combine long-range strategic planning and tactical execution to create differentiated value propositions, launch new businesses and drive exponential and sustainable growth.",
              "A consummate leader, with experience in managing cross functional teams across geographies with goal congruence and collaboration to deepen relationships with customers leading to high margin repeat business.",
              "Experienced in M&A deal structuring including building of investment thesis, assessing & valuating companies & negotiating complex contract framework.",
              "Whether starting a business of Methodology Based IT services from zero to $25M or growing a BPO book of business across multiple verticals from $2M to $100M in 4 years or Transforming a book of $200M business from –ve EBITDA to double digit +ve EBITDA – the body of work includes building successful books of business by creating differentiating solutions to address real world market gaps and building leadership teams to deliver highly profitable services in the Technology space.",
              {
                title: "Skills",
                list: [
                  "Global Strategic Planning",
                  "Business Development",
                  "Sales Effectiveness Transformation",
                  "Global Service Delivery",
                  "Business Process Consulting",
                  "Team Building and Leadership Development",
                  "Outsourcing / Right Shoring",
                  "Process Innovation / Improvement",
                  "M&A Deal Structuring",
                ],
              },
            ],
            href: "https://www.linkedin.com/in/saxkrishna/",
          },
        ],
      },
      {
        kind: "people",
        eyebrow: "Board of Directors",
        title: "The Board",
        intro:
          "Alongside the founders, Shyamal Kumar (Founder & Chairman) and Drritiman Boraah (Co-Founder & Board Member), Lavelle’s Board includes nominee directors from its investors.",
        items: [
          {
            category: "Ideaspring Capital",
            name: "Naganand Doraswamy",
            role: "Nominee Director",
            bio: "Naganand is a technologist at heart, entrepreneur by choice and investor by profession. After exiting his most recent start-up, he founded Ideaspring Capital to fund and actively support product innovation start-ups. He enjoys working with entrepreneurs who have the vision and passion to build products for the global markets. Naganand is very well networked and respected in the start-up ecosystem and he actively participates in various organizations focusing on Entrepreneurship and Innovation. Naganand has co-authored a book on “IPSec” published by Prentice Hall.",
            photo: "/leadership/naganand-doraswamy.jpg",
            note: "Board since 2017",
          },
          {
            category: "YourNest Venture Capital",
            name: "Vipul Arora",
            role: "Nominee Director",
            bio: [
              "With over a decade of experience in venture capital and financial advisory, I am committed to empowering startups to achieve sustainable growth through meticulous portfolio management and strategic value creation. As a Principal at YourNest Venture Capital, I focus on aligning investments with long-term goals, leveraging my expertise in portfolio oversight, team leadership, and fostering founder enablement to build impactful businesses. I thrive in collaborative environments, bringing forward innovative solutions and a shared vision for success.",
              "At YourNest, I’ve successfully led multiple exits, ensuring efficient deal structuring and expediting liquidity events. By building and managing a high-performing investment management team, I’ve contributed to scaling portfolio companies from Seed to Series-B funding rounds. My focus on compliance, governance, and data-driven decision-making has enabled our team to deliver sustainable value for stakeholders while driving operational excellence across the portfolio.",
            ],
            photo: "/leadership/vipul-arora.jpg",
            note: "Board since 2022",
          },
          {
            category: "Bharti Airtel",
            name: "Pradipt Kapoor",
            role: "Nominee Director",
            // No description or portrait in the profile doc; this summary is from the leadership note.
            bio: "Chief Digital & Information Officer at Bharti Airtel and CEO of Xtelify. His background includes senior global product-engineering roles at A.P. Moller–Maersk and SITA.",
            note: "Board since 2023",
          },
          {
            category: "Indus Towers",
            name: "Abhishek Maheshwari",
            role: "Nominee Director",
            bio: [
              "21 years of experience in various facets of finance ranging from Business Partnering, Commercials, Strategy formulation, Business Modeling, Budgeting, Planning, Reporting, Investor relationship, Consolidation, Taxation, Merger & Acquisition, ICOFR & Compliance, Partnering with Government and strategic vendors.",
              {
                list: [
                  "Proficient in Financial Reporting, Budgeting & Forecasting, Analytical Report Writing, Financial Modeling, Performance Review & Analysis.",
                  "Exposure to designing internal controls, quality audit checks & streamlining accounting systems.",
                  "Well conversant with US GAAP, I GAAP and IFRS standards of accounting.",
                  "Exposure of IFRS transition for Bharti Airtel Limited from I GAAP.",
                ],
              },
              "Specialties: Planning and Reporting and developing business Models.",
            ],
            photo: "/leadership/abhishek-maheshwari.jpg",
            note: "Board since 2024",
          },
        ],
      },
      {
        kind: "people",
        eyebrow: "Advisors",
        title: "Strategy and growth counsel",
        intro:
          "Lavelle draws on experienced advisors for strategy, partnerships and long-term growth.",
        items: [
          {
            category: "Strategy & Growth",
            name: "Thompson P. Gnanam",
            role: "Strategy & Growth Advisor",
            bio: [
              {
                title: "Summary of experience",
                list: [
                  "Digital Business Unit — Business Strategy, BU P/L, Digital Customer Experience, Digital Process Automation, Digital Process Excellence, Data Science and Analytics, Digital Business Process Services, SS Transformation",
                  "P/L of Telecom MVNO techno-functional and commercial global operations, GIC, GBS, Digital Sales and Marketing, and Media & Entertainment end-to-end operations management for Live TV and on-demand movies",
                  "Global Sales, Marketing & Strategic Alliances for BPO, Integrated IT & BPO, Cloud-based Platform Services and Business Process as a Service business of US$25 million plus",
                  "Profit and loss accountability of a US$150 million commercial enterprise & public sector IT hardware infrastructure / solutions business",
                  "Institutional selling of software solutions and services to global / national accounts and large SMBs",
                  "Industrial automation and Coding Marking Solution business — P/L management and entire 360° responsibility for the South India region",
                  "Consumer direct and indirect channel management in the PC business",
                  "BPO / ITO: business development and transition, service delivery and operational excellence, business transformation and cost center management",
                  "Telecom customer experience management: call center operations, retail stores P/L, back-end operations, service quality assurance, customer retention and value-added sales through relationship management",
                  "Global SSC operating transformation models",
                ],
              },
              {
                title: "Key accomplishments",
                list: [
                  "Credited with the turnaround of the East business region of HP India by creating 50% revenue growth in PSG products and services sales",
                  "Increased the Enterprise and SMB customer revenue of the subscriber base of Vodafone TN by 20% and reduced churn to less than 1.5% through virtual customer relationship management service differentiation (IT + BPO integrated service through a partner)",
                  "Increased sales contribution of the Vodafone stores from 27% to 40% and achieved 30% YoY growth in revenue; store profitability at EBITA level has been >95% and at EBIT level 85%",
                  "Won the first cloud-based, pay-per-use pan-Asian IT + BPO integrated deal of US$7 million in the end-to-end HR outsourcing space for Hexaware, from a leading Singapore-based logistics company",
                ],
              },
            ],
            photo: "/leadership/thompson-p-gnanam.jpg",
            href: "https://www.linkedin.com/in/thompson-p-gnanam-b2845814/",
          },
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
        { title: "Deep Engineering Problems", body: "Work on SD-WAN, SD-Branch, SASE, and cloud networking \u2014 real distributed systems challenges at enterprise scale." },
        { title: "A Decade of Craft", body: "A seasoned team that's shipped mission-critical networking products since 2015. Learn from engineers who've done it before." },
        { title: "Ownership & Speed", body: "Small teams, high ownership. Your decisions ship to production and land in enterprise networks across India." },
        { title: "Built in India", body: "Be part of building world-class enterprise technology from India \u2014 a product that competes globally and is trusted by India's largest organisations." }] },
      { kind: "stats", eyebrow: "By the numbers", items: [
        { value: "10+", title: "Years", body: "In enterprise networking" },
        { value: "30+", title: "States & UTs", body: "Covered" },
        { value: "100%", title: "Built & supported", body: "In India" }] },
      { kind: "components", eyebrow: "Open Roles", title: "Current openings", items: [
        { title: "Senior Software Engineer \u2014 SD-WAN Data Plane", href: "/company/contact", linkLabel: "Apply", bullets: ["Engineering \u00b7 Full-time \u00b7 Bangalore", "Design and optimise the data plane for our ScaleAOn SD-WAN platform.", "Deep experience in Linux networking, DPDK, or eBPF required."] },
        { title: "Product Manager \u2014 AI Operations", href: "/company/contact", linkLabel: "Apply", bullets: ["Product \u00b7 Full-time \u00b7 Bangalore", "Own the roadmap for AI-driven network operations.", "Drive AIOps features that reduce NOC effort and improve network visibility."] },
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
      { kind: "note", eyebrow: "Company Overview", title: "Built in India. Trusted by enterprises.", body: "Founded in 2015, Lavelle Networks has grown from a Bangalore-based engineering startup to a platform company serving enterprises across India's most complex and regulated industries. Our three-pillar platform \u2014 ScaleAOn SD-WAN, ScaleAOn SD-Branch, and indusWall SASE \u2014 is designed, built, and maintained by our engineering teams in Bangalore. We do not resell third-party software. Lavelle is positioned to serve the global enterprise networking market from an India-first foundation \u2014 \"Built in India for global markets\" is not a marketing position, it is an engineering strategy." },
      { kind: "table", eyebrow: "Company Milestones", title: "A decade of platform evolution", headers: ["Year", "Milestone", "Detail"], rows: [
        ["[Insert Year \u2014 Verify]", "Company Founded", "Lavelle Networks founded in Bangalore. Development of the first SD-WAN platform begins with a founding engineering team focused on enterprise networking."],
        ["[Insert Year \u2014 Verify]", "First Enterprise Deployments", "Initial enterprise customer deployments across BFSI and retail sectors in India. Product-market fit validated in complex multi-branch environments."],
        ["[Insert Year \u2014 Verify]", "Platform Expansion", "Platform expanded for multi-cloud era with AWS, Azure, and GCP integration. Customer base grows to include manufacturing and healthcare verticals."],
        ["[Insert Year \u2014 Verify]", "SASE Platform Launch", "indusWall SASE launched, converging cloud-native security with the networking platform."]] },
      { kind: "capabilities", eyebrow: "Investment Highlights", title: "Why Lavelle Networks", items: [
        { title: "Large and Growing TAM", body: "The enterprise WAN and SASE market represents a large and rapidly growing opportunity. Indian enterprises are accelerating investment in network modernisation, cloud connectivity, and security convergence \u2014 a multi-billion dollar addressable market." },
        { title: "Established Customer Base", body: "Lavelle serves enterprise customers across BFSI, retail, manufacturing, healthcare, and government sectors in India. Multi-year deployment relationships and platform dependency provide durable revenue." },
        { title: "Proven Product Portfolio", body: "Three integrated platform pillars \u2014 ScaleAOn SD-WAN, ScaleAOn SD-Branch, and indusWall SASE \u2014 cover the full enterprise networking stack. Built, owned, and evolved by Lavelle's engineering teams." }] },
      { kind: "checklist", eyebrow: "Investor Enquiries", title: "What to include in your enquiry", items: [
        "Your organisation and role",
        "Nature of the investment enquiry",
        "Preferred format for initial discussion",
        "Any specific areas of focus \u2014 product, market, financials"] },
      { kind: "cta", title: "Contact our team", body: "For investor relations enquiries, please contact our team directly. All investor communications are handled confidentially by the Lavelle leadership team. Lavelle Networks does not publish financial data on this website. All financial information is shared under NDA with qualified investors.", ctas: [{ label: "Contact Investor Relations", href: "/company/contact" }] },
    ],
  },
];
