"use client";

import { useEffect, useRef } from "react";
import { CHROME } from "@/lib/content/home";
import { FOOTER_COLUMNS, FOOTER_LEGAL } from "@/lib/content/footer";
import { Lockup, GrainField } from "@/components/kit/Brand";

/* ----------------------------------------------------------------- footer */

/** Site footer (design.md §5): deep grain panel ending in the sign-off. */
export default function SiteFooter() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <GrainField tone="deep" grain={0.3} className="mx-auto max-w-[1400px] rounded-[24px] px-6 pt-14 text-white lg:px-14">
        <div className="relative">
          <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-0.025em]">{CHROME.footerBand.title}</h3>
              <p className="mt-2 text-[14px] text-white/70">{CHROME.footerBand.body}</p>
            </div>
            <div className="flex gap-3">
              <a href={CHROME.footerBand.expert.href} className="rounded-[10px] border border-white/30 px-5 py-3 text-[13px] font-medium hover:bg-white/10">
                {CHROME.footerBand.expert.label}
              </a>
              <a href={CHROME.footerBand.demo.href} className="rounded-[10px] bg-white px-5 py-3 text-[13px] font-medium text-lv-ink">
                {CHROME.footerBand.demo.label}
              </a>
            </div>
          </div>
          <div className="grid gap-12 py-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Lockup tone="white" height={28} />
              <p className="mt-6 max-w-xs text-[13px] leading-[1.65] text-white/65">{CHROME.footerBrand.blurb}</p>
              <ul className="mt-6 space-y-1.5 text-[13px] text-white/75">
                <li>{CHROME.footerBrand.location}</li>
                <li>
                  <a href={`mailto:${CHROME.footerBrand.email}`}>{CHROME.footerBrand.email}</a>
                </li>
                <li>
                  <a href={CHROME.footerBrand.phoneHref}>{CHROME.footerBrand.phone}</a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {FOOTER_COLUMNS.map((c) => (
                <div key={c.title}>
                  <h4 className="text-[12px] font-semibold text-lv-300">{c.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-[13px] text-white/75 hover:text-white">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-6 text-[12px] text-white/55 sm:flex-row">
            <span>
              {CHROME.copyright} · {CHROME.builtIn}
            </span>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_LEGAL.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <SignOff />
        </div>
      </GrainField>
    </footer>
  );
}

/** Oversized sign-off; letters rise in as the footer arrives. */
function SignOff() {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.on = "1";
      return;
    }
    const io = new IntersectionObserver(([e]) => e.isIntersecting && ((el.dataset.on = "1"), io.disconnect()), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const words = CHROME.footerBrand.tagline.split(" ");
  return (
    <p
      ref={ref}
      className="mk-signoff select-none whitespace-nowrap pb-2 pt-4 text-[8.6vw] font-semibold leading-[0.95] tracking-[-0.05em] text-white/90 lg:text-[118px]"
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.06em] align-bottom">
            <span className="mk-signoff-word inline-block" style={{ transitionDelay: `${i * 110}ms` }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}
