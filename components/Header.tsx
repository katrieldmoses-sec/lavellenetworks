"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, Close } from "./icons";

type NavItem = { label: string; href: string; desc?: string };
type NavGroup = { label: string; href: string; items: NavItem[] };

const NAV: NavGroup[] = [
  {
    label: "Products",
    href: "#platform",
    items: [
      { label: "ScaleAOn SD-WAN", href: "#platform", desc: "Enterprise WAN" },
      {
        label: "ScaleAOn SD-Branch",
        href: "#platform",
        desc: "Branch infrastructure",
      },
      { label: "indusWall SASE", href: "#platform", desc: "Network security" },
      { label: "ipDesk AI Ops", href: "#platform", desc: "Network operations" },
      { label: "ZTNA", href: "#architecture", desc: "Zero Trust access" },
      {
        label: "Network Analytics",
        href: "#architecture",
        desc: "Visibility & insight",
      },
    ],
  },
  {
    label: "Solutions",
    href: "#industries",
    items: [
      { label: "BFSI", href: "#industries" },
      { label: "Retail", href: "#industries" },
      { label: "Manufacturing", href: "#industries" },
      { label: "Government & PSU", href: "#industries" },
      { label: "Healthcare", href: "#industries" },
      { label: "Education", href: "#industries" },
    ],
  },
  {
    label: "Resources",
    href: "#insights",
    items: [
      { label: "Blogs & Insights", href: "#insights" },
      { label: "Case Studies", href: "#proven" },
      { label: "Whitepapers", href: "#insights" },
      { label: "Datasheets", href: "#insights" },
      { label: "Webinars", href: "#insights" },
      { label: "Documentation", href: "#insights" },
    ],
  },
  {
    label: "Company",
    href: "#built-in-india",
    items: [
      { label: "About Lavelle", href: "#built-in-india" },
      { label: "Leadership", href: "#investment" },
      { label: "Careers", href: "#built-in-india" },
      { label: "News & Media", href: "#recognition" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    label: "Partners",
    href: "#contact",
    items: [
      { label: "Partner Programme", href: "#contact" },
      { label: "Partner With Us", href: "#contact" },
      { label: "Support Portal", href: "#contact" },
      { label: "Request Demo", href: "#contact" },
      { label: "Talk to Expert", href: "#contact" },
    ],
  },
];

function Logo() {
  return (
    <a
      href="#top"
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
            href="#contact"
            className="px-3 py-1.5 text-[13px] text-brand-sky transition-colors hover:text-white"
          >
            Support
          </a>
          <a
            href="#contact"
            className="rounded-[4px] border border-navy-600 px-4 py-1.5 text-[13px] text-brand-sky transition-colors hover:border-brand-light hover:text-white"
          >
            Talk to Expert
          </a>
          <a
            href="#contact"
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
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-[4px] border border-navy-600 px-4 py-2.5 text-center text-[13px] text-brand-sky"
              >
                Talk to Expert
              </a>
              <a
                href="#contact"
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
