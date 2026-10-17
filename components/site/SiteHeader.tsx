"use client";

import { useEffect, useState } from "react";
import { CHROME } from "@/lib/content/home";
import { Lockup, NavMenu, MobileNav } from "@/components/kit/Brand";

/**
 * Site header (design.md §4). Sticky; transparent at the top of the page,
 * white with blur and a hairline once the page scrolls. Dropdown panels stay
 * in the DOM (crawlable) and toggle with CSS.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-white/85 shadow-[0_1px_0_rgba(32,30,29,0.08)] backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center gap-10 px-6">
        <Lockup tone="ink" height={28} priority />
        <NavMenu
          className="gap-6"
          theme={{
            trigger: "py-2 text-[14px] font-medium text-lv-ink/70 transition-colors hover:text-lv-ink",
            triggerOpen: "text-lv-blue",
            panel: "rounded-[16px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,84,147,0.4)] ring-1 ring-lv-ink/5",
            heading: "text-[11px] font-semibold text-lv-blue",
            link: "rounded-md py-1.5 text-[14px] text-lv-ink/75 transition-colors hover:text-lv-blue",
          }}
        />
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <a href={CHROME.headerCtas.expert.href} className="text-[14px] font-medium text-lv-ink/70 transition-colors hover:text-lv-ink">
            {CHROME.headerCtas.expert.label}
          </a>
          <a
            href={CHROME.headerCtas.demo.href}
            className="rounded-[10px] bg-lv-blue px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-lv-600"
          >
            {CHROME.headerCtas.demo.label}
          </a>
        </div>
        <MobileNav className="ml-auto" ctas={[CHROME.headerCtas.expert, CHROME.headerCtas.demo]} />
      </div>
    </header>
  );
}
