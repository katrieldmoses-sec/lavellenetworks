"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
      <div className="rounded-[24px] bg-white p-10 text-center shadow-[0_40px_80px_-50px_rgba(0,84,147,0.6)] ring-1 ring-lv-ink/5">
        <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
          Thanks — your message is on its way.
        </h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-lv-ink/65">
          Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 text-[14px] font-medium text-lv-blue"
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} className="rounded-[24px] bg-white p-7 shadow-[0_40px_80px_-50px_rgba(0,84,147,0.6)] ring-1 ring-lv-ink/5 sm:p-10" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="block text-[13px] font-medium text-lv-ink/75">
            Name <span className="text-lv-blue">*</span>
          </span>
          <input
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className="mt-2 w-full rounded-[12px] border border-lv-ink/15 bg-white px-4 py-3 text-[15px] text-lv-ink outline-none transition-[border-color,box-shadow] focus:border-lv-blue focus:shadow-[0_0_0_3px_rgba(0,120,212,0.15)]"
          />
        </label>

        <label className="block">
          <span className="block text-[13px] font-medium text-lv-ink/75">
            Work Email <span className="text-lv-blue">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            inputMode="email"
            className="mt-2 w-full rounded-[12px] border border-lv-ink/15 bg-white px-4 py-3 text-[15px] text-lv-ink outline-none transition-[border-color,box-shadow] focus:border-lv-blue focus:shadow-[0_0_0_3px_rgba(0,120,212,0.15)]"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="block text-[13px] font-medium text-lv-ink/75">
          Designation
        </span>
        <input
          name="designation"
          maxLength={120}
          autoComplete="organization-title"
          className="mt-2 w-full rounded-[12px] border border-lv-ink/15 bg-white px-4 py-3 text-[15px] text-lv-ink outline-none transition-[border-color,box-shadow] focus:border-lv-blue focus:shadow-[0_0_0_3px_rgba(0,120,212,0.15)]"
        />
      </label>

      <label className="mt-5 block">
        <span className="block text-[13px] font-medium text-lv-ink/75">
          Message <span className="text-lv-blue">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={6}
          maxLength={4000}
          className="mt-2 w-full resize-y rounded-[12px] border border-lv-ink/15 bg-white px-4 py-3 text-[15px] text-lv-ink outline-none transition-[border-color,box-shadow] focus:border-lv-blue focus:shadow-[0_0_0_3px_rgba(0,120,212,0.15)] leading-[1.6]"
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
        <p role="alert" className="mt-5 rounded-[12px] border border-lv-ink/15 bg-lv-paper px-4 py-3 text-[13px] text-lv-ink/80">
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
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-[10px] bg-lv-blue px-6 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-lv-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"}
        {!sending && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </button>

      <p className="mt-4 text-[12px] text-lv-ink/55">
        Your message goes straight to our sales team at {SALES_EMAIL}.
      </p>
    </form>
  );
}
