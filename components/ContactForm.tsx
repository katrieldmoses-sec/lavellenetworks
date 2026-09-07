"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string; mailtoFallback?: boolean };

const SALES_EMAIL = "sales@lavellenetworks.com";

export default function ContactForm({ topic }: { topic: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          name: data.get("name"),
          email: data.get("email"),
          designation: data.get("designation"),
          message: data.get("message"),
          company_website: data.get("company_website"), // honeypot
        }),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ kind: "sent" });
        form.reset();
        return;
      }
      setStatus({
        kind: "error",
        message: json.error ?? "Could not send your message.",
        mailtoFallback: Boolean(json.unconfigured),
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Could not reach the server. Please try again.",
        mailtoFallback: true,
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="card p-8 text-center">
        <h3 className="text-[18px] font-semibold text-navy">
          Thanks — your message is on its way.
        </h3>
        <p className="mt-2 text-[14px] leading-[22.75px] text-navy-500">
          Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 text-[14px] font-semibold text-brand-blue"
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} className="card p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="block text-[13px] font-semibold text-navy">
            Name <span className="text-brand-blue">*</span>
          </span>
          <input
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className="mt-2 w-full rounded-[6px] border border-[#e2eaf5] bg-white px-3.5 py-2.5 text-[14px] text-navy outline-none transition-colors focus:border-brand-light"
          />
        </label>

        <label className="block">
          <span className="block text-[13px] font-semibold text-navy">
            Work Email <span className="text-brand-blue">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            inputMode="email"
            className="mt-2 w-full rounded-[6px] border border-[#e2eaf5] bg-white px-3.5 py-2.5 text-[14px] text-navy outline-none transition-colors focus:border-brand-light"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="block text-[13px] font-semibold text-navy">
          Designation
        </span>
        <input
          name="designation"
          maxLength={120}
          autoComplete="organization-title"
          className="mt-2 w-full rounded-[6px] border border-[#e2eaf5] bg-white px-3.5 py-2.5 text-[14px] text-navy outline-none transition-colors focus:border-brand-light"
        />
      </label>

      <label className="mt-5 block">
        <span className="block text-[13px] font-semibold text-navy">
          Message <span className="text-brand-blue">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={6}
          maxLength={4000}
          className="mt-2 w-full resize-y rounded-[6px] border border-[#e2eaf5] bg-white px-3.5 py-2.5 text-[14px] leading-[22px] text-navy outline-none transition-colors focus:border-brand-light"
        />
      </label>

      {/* Honeypot — hidden from users, catches naive bots. */}
      <div className="hidden" aria-hidden>
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status.kind === "error" && (
        <p className="mt-5 rounded-[6px] border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
          {status.message}
          {status.mailtoFallback && (
            <>
              {" "}
              You can email us directly at{" "}
              <a
                className="font-semibold underline"
                href={`mailto:${SALES_EMAIL}`}
              >
                {SALES_EMAIL}
              </a>
              .
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn-primary-blue mt-6 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"}
        {!sending && <ArrowRight className="h-4 w-4" />}
      </button>

      <p className="mt-4 text-[12px] text-navy-500">
        Your message goes straight to our sales team at {SALES_EMAIL}.
      </p>
    </form>
  );
}
