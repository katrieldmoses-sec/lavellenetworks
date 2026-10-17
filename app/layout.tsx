import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import "@/components/kit/kit.css";
import { SITE_URL } from "@/lib/site";

// Signal type system (design.md §3): Inter for everything, Archivo (width
// axis) for the single accent-caps heading. Self-hosted by next/font so the
// CSP's font-src 'self' holds. Bound to the --f-* slots the kit reads.
const inter = Inter({ subsets: ["latin"], variable: "--f-display", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--f-accent", display: "swap" });


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lavelle Networks — Connect. Control. Secure.",
    template: "%s · Lavelle Networks",
  },
  description:
    "Lavelle Networks connects, controls, and secures distributed enterprises through a unified platform for SD-WAN, SD-Branch, SASE, and AI-powered network operations.",
  keywords: [
    "SD-WAN",
    "SD-Branch",
    "SASE",
    "AI Ops",
    "Enterprise networking",
    "Zero Trust",
    "ZTNA",
    "Lavelle Networks",
  ],
  authors: [{ name: "Lavelle Networks Pvt. Ltd." }],
  creator: "Lavelle Networks Pvt. Ltd.",
  // Icon set and manifest per the brand identity kit, section 08.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/icon-180.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Lavelle Networks",
    title: "Lavelle Networks — Connect. Control. Secure.",
    description:
      "India's trusted enterprise networking platform. Unified SD-WAN, SD-Branch, SASE, and AI Ops for distributed enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lavelle Networks — Accelerate Networks for the Digital Economy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavelle Networks — Connect. Control. Secure.",
    description:
      "India's trusted enterprise networking platform. Unified SD-WAN, SD-Branch, SASE, and AI Ops.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  // Brand blue, per the identity kit's head markup and manifest (section 08).
  themeColor: "#0078D4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Reading the per-request nonce opts this route into dynamic rendering, which
  // is what lets Next.js stamp the CSP nonce onto its own bootstrap scripts.
  // Without this, statically prerendered scripts carry no nonce and the strict
  // Content-Security-Policy set in middleware.ts would block them in production.
  headers().get("x-nonce");

  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable}`}
      style={{ "--f-body": "var(--f-display)" } as React.CSSProperties}
    >
      <body>{children}</body>
    </html>
  );
}
