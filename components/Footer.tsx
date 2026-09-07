import { MapPin, Mail, Phone } from "./icons";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "ScaleAOn SD-WAN", href: "/products/sd-wan" },
      { label: "ScaleAOn SD-Branch", href: "/products/secure-branch" },
      { label: "indusWall SASE", href: "/products/sase" },
      { label: "ipDesk AI Ops", href: "/products/ai-operations" },
      { label: "ZTNA", href: "/products/ztna" },
      { label: "Network Analytics", href: "/products/network-analytics" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "BFSI", href: "/solutions/bfsi" },
      { label: "Retail", href: "/solutions/retail" },
      { label: "Manufacturing", href: "/solutions/manufacturing" },
      { label: "Government & PSU", href: "/solutions/government" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Education", href: "/solutions/education" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs & Insights", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Datasheets", href: "/resources/datasheets" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Lavelle", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  },
  {
    title: "Partners & Support",
    links: [
      { label: "Partner Programme", href: "/partners" },
      { label: "Partner With Us", href: "/contact/partner-with-us" },
      { label: "Request Demo", href: "/contact/request-demo" },
      { label: "Talk to Expert", href: "/contact/talk-to-expert" },
    ],
  },
];

const legal = [
  "Privacy Policy",
  "Terms of Use",
  "Security",
  "Cookie Preferences",
  "Sitemap",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      {/* "Ready to modernise" band sits at the top of the footer */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-10 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-[18px] font-semibold text-white">
              Ready to modernise your enterprise network?
            </h3>
            <p className="mt-1.5 text-[13px] text-brand-sky">
              Talk to our team about your SD-WAN, SASE, or AI Ops requirements.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="/contact/talk-to-expert"
              className="rounded-[4px] border border-navy-600 px-5 py-2 text-[13px] text-brand-sky transition-colors hover:border-brand-light hover:text-white"
            >
              Talk to an Expert
            </a>
            <a
              href="/contact/request-demo"
              className="rounded-[4px] bg-brand-azure px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brand-light"
            >
              Request Enterprise Demo
            </a>
          </div>
        </div>
      </div>

      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-light font-serif text-lg font-semibold text-navy">
                L
              </span>
              <span className="font-serif text-[15px] font-semibold text-white">
                Lavelle<span className="ml-1 text-brand-light">Networks</span>
              </span>
            </div>
            <p className="mt-5 font-serif text-lg text-white">
              Connect. Control. Secure. Anywhere.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              India&apos;s trusted enterprise networking platform. Connect.
              Control. Secure. — mission-critical connectivity for enterprises
              across India.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand-sky" />
                Bangalore, India · Est. 2015
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-sky" />
                <a
                  href="mailto:sales@lavellenetworks.com"
                  className="transition-colors hover:text-white"
                >
                  sales@lavellenetworks.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-sky" />
                <a
                  href="tel:+918045678900"
                  className="transition-colors hover:text-white"
                >
                  +91 80 4567 8900
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns: 2-col on mobile, 5-col from md up */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-sky">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/45">
            <span>© 2024 Lavelle Networks Pvt. Ltd. All rights reserved.</span>
            <span className="font-mono uppercase tracking-[0.16em] text-brand-sky/70">
              Built in India
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50">
            {legal.map((item) => (
              <li key={item}>
                <a href="#contact" className="transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
