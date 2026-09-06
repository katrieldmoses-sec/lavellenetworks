import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Fraunces, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});


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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Lavelle Networks",
    title: "Lavelle Networks — Connect. Control. Secure.",
    description:
      "India's trusted enterprise networking platform. Unified SD-WAN, SD-Branch, SASE, and AI Ops for distributed enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavelle Networks — Connect. Control. Secure.",
    description:
      "India's trusted enterprise networking platform. Unified SD-WAN, SD-Branch, SASE, and AI Ops.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1930",
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
      className={`${jakarta.variable} ${fraunces.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
