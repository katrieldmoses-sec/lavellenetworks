"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, Close } from "./icons";

type NavLink = { name: string; href: string };
type NavGroup = { label: string; items: NavLink[] };
type NavEntry = {
  label: string;
  href: string;
  /** Grouped mega-menu (rendered in two columns) or a flat list. */
  groups?: NavGroup[];
  items?: NavLink[];
};

/** Mirrors the navigation data in the source design exactly. */
const NAV: NavEntry[] = [
  {
    label: "Products",
    href: "/products/sd-wan",
    groups: [
      {
        label: "Platform",
        items: [
          { name: "ScaleAOn SD-WAN", href: "/products/sd-wan" },
          { name: "ScaleAOn SD-Branch", href: "/products/secure-branch" },
          { name: "indusWall SASE", href: "/products/sase" },
          { name: "ipDesk AI Ops", href: "/products/ai-operations" },
        ],
      },
      {
        label: "SD-WAN Components",
        items: [
          { name: "CloudPort Edge", href: "/products/cloudport-edge" },
          { name: "CloudPort Gateway", href: "/products/cloudport-gateway" },
          { name: "CloudStation Controller", href: "/products/cloudstation-controller" },
          { name: "CloudStation Insights", href: "/products/cloudstation-insights" },
        ],
      },
      {
        label: "Security & Access",
        items: [
          { name: "ZTNA", href: "/products/ztna" },
          { name: "Secure Internet Access", href: "/products/secure-internet" },
        ],
      },
      {
        label: "Cloud & Intelligence",
        items: [
          { name: "Cloud Connectivity", href: "/products/cloud-connectivity" },
          { name: "Network Analytics", href: "/products/network-analytics" },
          { name: "Digital Experience", href: "/products/digital-experience" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/bfsi",
    groups: [
      {
        label: "Use Cases",
        items: [
          { name: "Hybrid WAN", href: "/use-cases/hybrid-wan" },
          { name: "Microsoft 365 Performance", href: "/use-cases/microsoft-365-performance" },
          { name: "Enterprise Network Monitoring", href: "/use-cases/enterprise-network-monitoring" },
          { name: "Multi-cloud Connectivity", href: "/use-cases/multi-cloud-connectivity" },
          { name: "Application Availability", href: "/use-cases/application-availability" },
          { name: "Branch Transformation", href: "/use-cases/branch-transformation" },
          { name: "Hybrid Workforce", href: "/use-cases/hybrid-workforce" },
        ],
      },
      {
        label: "Industries",
        items: [
          { name: "BFSI", href: "/solutions/bfsi" },
          { name: "Retail", href: "/solutions/retail" },
          { name: "Manufacturing", href: "/solutions/manufacturing" },
          { name: "Logistics & Supply Chain", href: "/solutions/logistics" },
          { name: "Information Technology", href: "/solutions/information-technology" },
          { name: "Healthcare", href: "/solutions/healthcare" },
          { name: "Education", href: "/solutions/education" },
          { name: "Government & PSU", href: "/solutions/government" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blogs",
    items: [
      { name: "Blogs & Insights", href: "/resources/blogs" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Whitepapers", href: "/resources/whitepapers" },
      { name: "Datasheets", href: "/resources/datasheets" },
      { name: "Webinars & Events", href: "/resources/webinars" },
      { name: "Documentation", href: "/resources/documentation" },
      { name: "News & Media", href: "/company/news" },
    ],
  },
  {
    label: "Company",
    href: "/company/about",
    items: [
      { name: "Our Story", href: "/company/about" },
      { name: "Leadership", href: "/company/leadership" },
      { name: "Careers", href: "/company/careers" },
      { name: "Investors", href: "/company/investors" },
      { name: "Contact", href: "/company/contact" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    items: [
      { name: "Partner Programme", href: "/partners" },
      { name: "Partner Locator", href: "/partners/locator" },
      { name: "Partner With Us", href: "/contact/partner-with-us" },
    ],
  },
];

function Logo() {
  return (
    <a
      href="/"
      className="flex shrink-0 items-center gap-2.5"
      aria-label="Lavelle Networks home"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-brand-azure font-serif text-[12px] font-bold text-white">
        L
      </span>
      <span className="leading-none">
        <span className="block font-serif text-[14px] font-semibold tracking-[-0.35px] text-white">
          Lavelle<span className="ml-1 text-brand-light">Networks</span>
        </span>
        <span className="mt-[3px] block font-mono text-[9px] uppercase tracking-[0.9px] text-[#4a6891]">
          Est. 2015 · Bangalore
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1a3055]/40 bg-navy/90 backdrop-blur-[8px]">
      <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center gap-4 px-6">
        <Logo />

        {/* Desktop nav — clustered next to the logo */}
        <nav
          className="hidden items-center gap-0.5 xl:ml-6 xl:flex"
          aria-label="Main navigation"
          onMouseLeave={() => setOpenGroup(null)}
        >
          {NAV.map((entry) => {
            const open = openGroup === entry.label;
            return (
              <div
                key={entry.label}
                className="static"
                onMouseEnter={() => setOpenGroup(entry.label)}
              >
                <a
                  href={entry.href}
                  className={`flex items-center gap-1.5 rounded-t-[6px] px-4 py-4 text-[15px] font-medium transition-colors ${
                    open ? "bg-[#152744] text-white" : "text-brand-sky hover:text-white"
                  }`}
                  aria-expanded={open}
                >
                  {entry.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </a>

                {/* Always rendered so the links exist in the server HTML and
                    remain crawlable; visibility is toggled with CSS. */}
                <div
                  className={`absolute left-0 right-0 top-full z-50 transition-opacity duration-150 ${
                    open
                      ? "visible opacity-100"
                      : "invisible opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={!open}
                >
                    <div className="container-x">
                      <div
                        className={`pointer-events-auto rounded-[10px] border border-[#1f3357] bg-[#101f3a] p-8 shadow-2xl shadow-black/50 ${
                          entry.groups ? "w-full" : "w-[320px]"
                        }`}
                      >
                        {entry.groups ? (
                          <div className="grid grid-cols-2 gap-x-16 gap-y-10">
                            {entry.groups.map((g) => (
                              <div key={g.label}>
                                <span className="block font-mono text-[12px] font-normal uppercase leading-[16px] tracking-[1.2px] text-[#4a6891]">
                                  {g.label}
                                </span>
                                <ul className="mt-5 space-y-4">
                                  {g.items.map((it) => (
                                    <li key={it.name}>
                                      <a
                                        href={it.href}
                                        onClick={() => setOpenGroup(null)}
                                        className="text-[16px] text-white/90 transition-colors hover:text-brand-light"
                                      >
                                        {it.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-4">
                            {entry.items?.map((it) => (
                              <li key={it.name}>
                                <a
                                  href={it.href}
                                  onClick={() => setOpenGroup(null)}
                                  className="text-[16px] text-white/90 transition-colors hover:text-brand-light"
                                >
                                  {it.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="ml-auto hidden items-center gap-2 xl:flex">
          <a
            href="/contact/support"
            className="px-3 py-1.5 text-[13px] text-brand-sky transition-colors hover:text-white"
          >
            Support
          </a>
          <a
            href="/contact/talk-to-expert"
            className="rounded-[4px] border border-navy-600 px-4 py-1.5 text-[13px] text-brand-sky transition-colors hover:border-brand-light hover:text-white"
          >
            Talk to Expert
          </a>
          <a
            href="/contact/request-demo"
            className="rounded-[4px] bg-brand-azure px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brand-light"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-[4px] text-white xl:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <Close className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="xl:hidden">
          <div className="max-h-[calc(100vh-56px)] overflow-y-auto border-t border-[#1a3055]/40 bg-navy px-6 pb-10 pt-4">
            {NAV.map((entry) => (
              <div key={entry.label} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-white"
                  onClick={() =>
                    setMobileGroup((g) => (g === entry.label ? null : entry.label))
                  }
                  aria-expanded={mobileGroup === entry.label}
                >
                  {entry.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileGroup === entry.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileGroup === entry.label && (
                  <div className="pb-4">
                    {entry.groups
                      ? entry.groups.map((g) => (
                          <div key={g.label} className="mb-5 last:mb-0">
                            <span className="block font-mono text-[11px] font-normal uppercase tracking-[1.2px] text-[#4a6891]">
                              {g.label}
                            </span>
                            <ul className="mt-3 space-y-3">
                              {g.items.map((it) => (
                                <li key={it.name}>
                                  <a
                                    href={it.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-[15px] text-white/90"
                                  >
                                    {it.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      : (
                          <ul className="space-y-3">
                            {entry.items?.map((it) => (
                              <li key={it.name}>
                                <a
                                  href={it.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-[15px] text-white/90"
                                >
                                  {it.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/contact/talk-to-expert"
                onClick={() => setMobileOpen(false)}
                className="rounded-[4px] border border-navy-600 px-4 py-2.5 text-center text-[13px] text-brand-sky"
              >
                Talk to Expert
              </a>
              <a
                href="/contact/request-demo"
                onClick={() => setMobileOpen(false)}
                className="rounded-[4px] bg-brand-azure px-4 py-2.5 text-center text-[13px] font-semibold text-white"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
