"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, Close } from "./icons";

type NavItem = { label: string; href: string; desc?: string };
type NavGroup = { label: string; href: string; items: NavItem[] };

const NAV: NavGroup[] = [
  {
    label: "Products",
    href: "/products/sd-wan",
    items: [
      { label: "ScaleAOn SD-WAN", href: "/products/sd-wan", desc: "Enterprise WAN" },
      { label: "ScaleAOn SD-Branch", href: "/products/secure-branch", desc: "Branch infrastructure" },
      { label: "indusWall SASE", href: "/products/sase", desc: "Network security" },
      { label: "ipDesk AI Ops", href: "/products/ai-operations", desc: "Network operations" },
      { label: "ZTNA", href: "/products/ztna", desc: "Zero Trust access" },
      { label: "Network Analytics", href: "/products/network-analytics", desc: "Visibility & insight" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/bfsi",
    items: [
      { label: "BFSI", href: "/solutions/bfsi" },
      { label: "Retail", href: "/solutions/retail" },
      { label: "Manufacturing", href: "/solutions/manufacturing" },
      { label: "Government & PSU", href: "/solutions/government" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Education", href: "/solutions/education" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blogs",
    items: [
      { label: "Blogs & Insights", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Datasheets", href: "/resources/datasheets" },
      { label: "Webinars", href: "/resources/webinars" },
      { label: "Documentation", href: "/resources/documentation" },
    ],
  },
  {
    label: "Company",
    href: "/company/about",
    items: [
      { label: "About Lavelle", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "News & Media", href: "/company/news" },
      { label: "Contact Us", href: "/company/contact" },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    items: [
      { label: "Partner Programme", href: "/partners" },
      { label: "Partner With Us", href: "/contact/partner-with-us" },
      { label: "Support Portal", href: "/contact/support" },
      { label: "Request Demo", href: "/contact/request-demo" },
      { label: "Talk to Expert", href: "/contact/talk-to-expert" },
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
          {NAV.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.label)}
            >
              <a
                href={group.href}
                className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-brand-sky transition-colors hover:text-white"
                aria-expanded={openGroup === group.label}
              >
                {group.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    openGroup === group.label ? "rotate-180" : ""
                  }`}
                />
              </a>
              {openGroup === group.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-60 rounded-[6px] border border-[#1a3055] bg-[#112040] p-2 shadow-2xl shadow-black/40">
                    {group.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenGroup(null)}
                        className="block rounded-[4px] px-3 py-2 transition-colors hover:bg-white/5"
                      >
                        <span className="block text-[13px] font-medium text-white">
                          {item.label}
                        </span>
                        {item.desc && (
                          <span className="block text-[11px] text-[#4a6891]">
                            {item.desc}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
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
            {NAV.map((group) => (
              <div key={group.label} className="border-b border-[#1a3055]/40">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold text-white"
                  onClick={() =>
                    setMobileGroup((g) => (g === group.label ? null : group.label))
                  }
                  aria-expanded={mobileGroup === group.label}
                >
                  {group.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileGroup === group.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileGroup === group.label && (
                  <div className="pb-3">
                    {group.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 pl-3 text-[13px] text-brand-sky"
                      >
                        {item.label}
                      </a>
                    ))}
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
