import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO ?? "sales@lavellenetworks.com";
/** Must be an address on a domain verified with the email provider. */
const FROM =
  process.env.CONTACT_FROM ??
  "Lavelle Networks <website@lavellenetworks.com>";

const LIMITS = {
  name: 120,
  email: 200,
  designation: 120,
  message: 4000,
} as const;

/** Deliberately permissive: one @, no spaces, a dot in the domain. */
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

/** Small fixed-window rate limiter (per server instance). */
const HITS = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = HITS.get(ip);
  if (!rec || now > rec.resetAt) {
    HITS.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

/** Strip control characters, collapse whitespace, clamp length. */
function clean(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  // Honeypot: real users never fill this field.
  if (clean(b.company_website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(b.name, LIMITS.name);
  const email = clean(b.email, LIMITS.email);
  const designation = clean(b.designation, LIMITS.designation);
  const message = clean(b.message, LIMITS.message);
  const topic = clean(b.topic, 60) || "Enquiry";

  if (name.length < 2 || message.length < 10) {
    return NextResponse.json(
      { error: "Please provide your name and a short message." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet.", unconfigured: true },
      { status: 503 },
    );
  }

  // Plain text only — no user input is interpolated into HTML.
  const text = [
    `New ${topic} enquiry from the Lavelle Networks website`,
    "",
    `Name:        ${name}`,
    `Email:       ${email}`,
    `Designation: ${designation || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        // Replying in the mail client goes straight back to the enquirer.
        reply_to: email,
        subject: `[${topic}] ${name}${designation ? ` - ${designation}` : ""}`,
        text,
      }),
    });

    if (!res.ok) {
      // Never leak provider internals to the client.
      console.error("contact: provider responded", res.status);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("contact: send failed", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
