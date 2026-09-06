"use client";

import { useState } from "react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { ArrowRight } from "../icons";

const filters = [
  "All",
  "SD-WAN",
  "SASE",
  "AI Ops",
  "Cloud",
  "Customer Transformation",
];

const resources = [
  {
    tag: "SD-WAN",
    read: "8 min",
    meta: "Article · 2024",
    title: "Why Indian Enterprises Are Moving to SD-WAN: A Decade in Review",
    body: "From early adopter hesitation to mainstream enterprise deployment — how SD-WAN reshaped distributed connectivity across India.",
  },
  {
    tag: "SASE",
    read: "12 min",
    meta: "Whitepaper · 2024",
    title: "Building a SASE Architecture for the Indian Hybrid Enterprise",
    body: "A practical guide to converging networking and security for distributed workforces and multi-cloud environments.",
  },
  {
    tag: "AI Ops",
    read: "6 min",
    meta: "Article · 2023",
    title: "The Predictive Network: How AIOps Eliminates Enterprise Downtime",
    body: "AI-powered operations enable IT teams to resolve network issues before users experience them.",
  },
  {
    tag: "Customer Transformation",
    read: "5 min",
    meta: "Case Study · 2023",
    title:
      "Connecting 800+ Branches: An Enterprise Banking Network Transformation",
    body: "How a leading private-sector bank modernised its branch network using ScaleAOn SD-WAN across India.",
  },
];

export default function Insights() {
  const [active, setActive] = useState("All");
  const shown = resources.filter((r) => active === "All" || r.tag === active);

  return (
    <section id="insights" className="bg-white py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Insights from a decade of networking"
            title="Perspectives that anticipated the evolution of enterprise networking."
          />
          <Reveal delay={160}>
            <a
              href="#insights"
              className="flex items-center gap-1.5 text-[14px] font-semibold text-brand-blue"
            >
              All resources
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
                  active === f
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-[#e2eaf5] bg-white text-navy-500 hover:border-navy/30 hover:text-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {shown.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 70}>
              <a
                href="#insights"
                className="group flex h-full flex-col card p-5 transition-colors duration-200 hover:border-brand-light/50"
              >
                <div className="flex items-center justify-between leading-[15px]">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-blue">
                    {r.tag}
                  </span>
                  <span className="text-[10px] text-navy-500">{r.read}</span>
                </div>
                <span className="mt-3 text-[10px] leading-[15px] text-navy-500">
                  {r.meta}
                </span>
                <h3 className="mt-2 font-serif text-[14px] font-semibold leading-[19.25px] text-navy">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 text-[12px] leading-[19.5px] text-navy-500">
                  {r.body}
                </p>
                <span className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold leading-[16px] text-brand-blue">
                  Read
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
