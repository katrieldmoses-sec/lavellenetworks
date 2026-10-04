"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, Close } from "./icons";
import { NAV } from "@/lib/content/nav";

function Logo() {
  return (
    <a href="/" className="flex shrink-0 items-center" aria-label="Lavelle Networks home">
      {/* All-white lockup, the identity kit's variant for ink and blue fields.
          Rendered 28px tall: the mark is then 25px, so the 14px of header
          padding above and below clears the required 1/2 X margin. Below the
          kit's 280px tagline minimum, so the tagline-less lockup is used. */}
      <Image
        src="/brand/logo-white.png"
        alt="Lavelle Networks"
        width={1750}
        height={378}
        priority
        className="h-7 w-auto"
      />
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
                className="relative"
                onMouseEnter={() => setOpenGroup(entry.label)}
              >
                <a
                  href={entry.href}
                  className={`flex items-center gap-1.5 rounded-t-[6px] px-3 py-2.5 text-[13px] font-medium transition-colors ${
                    open ? "bg-[#152744] text-white" : "text-brand-sky hover:text-white"
                  }`}
                  aria-expanded={open}
                >
                  {entry.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </a>

                {/* Anchored to this trigger. Always in the DOM so the links stay
                    crawlable; visibility is toggled with CSS. */}
                <div
                  className={`absolute left-0 top-full z-50 rounded-[6px] border border-[#1a3055] bg-[#0f2040] p-3 shadow-2xl shadow-black/50 transition-opacity duration-150 ${
                    open
                      ? "visible opacity-100"
                      : "invisible opacity-0 pointer-events-none"
                  }`}
                  style={{ width: entry.panelWidth }}
                  aria-hidden={!open}
                >
                  {entry.groups ? (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                      {entry.groups.map((g) => (
                        <div key={g.label}>
                          <span className="block px-1 font-mono text-[10px] font-normal uppercase leading-[16px] tracking-[1px] text-[#4a6891]">
                            {g.label}
                          </span>
                          <ul className="mt-2">
                            {g.items.map((it) => (
                              <li key={it.name}>
                                <a
                                  href={it.href}
                                  onClick={() => setOpenGroup(null)}
                                  className="block rounded-[4px] px-1 py-1.5 text-[13px] leading-[19.5px] text-white/90 transition-colors hover:bg-white/5 hover:text-brand-light"
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
                    <ul>
                      {entry.items?.map((it) => (
                        <li key={it.name}>
                          <a
                            href={it.href}
                            onClick={() => setOpenGroup(null)}
                            className="block rounded-[4px] px-1 py-1.5 text-[13px] leading-[19.5px] text-white/90 transition-colors hover:bg-white/5 hover:text-brand-light"
                          >
                            {it.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="ml-auto hidden items-center gap-2 xl:flex">
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
