# Lavelle Networks — Website

A pixel-faithful rebuild of the Lavelle Networks marketing site in **Next.js 14
(App Router) + TypeScript + Tailwind CSS**, built for one-click deployment on
Vercel with security as a first-class concern.

## Stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS 3** with a custom design-token theme
- **next/font** — self-hosted Google Fonts (Fraunces, Plus Jakarta Sans, DM Mono)

No runtime data sources, no database, no third-party client scripts. The site is
a self-contained static-content experience with a small amount of client-side
JavaScript for scroll-reveal animations, count-up statistics, the navigation
dropdowns, and the resource filter.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Deployment (Vercel)

Push the repo and import it in Vercel — the defaults work out of the box
(Framework preset: Next.js). No environment variables are required.

## Security

Security posture is intentionally strict for a static marketing site:

- **Content-Security-Policy with per-request nonce** (`middleware.ts`).
  `script-src` uses `'self' 'nonce-…' 'strict-dynamic'` — **no `'unsafe-inline'`
  for scripts**. Next.js stamps the nonce onto its bootstrap scripts; the root
  layout reads the nonce so the route renders per-request and the nonce is
  applied. `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`,
  `form-action 'self'`, and `upgrade-insecure-requests` are all enforced.
- **Hardening headers** (`next.config.mjs`): `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`,
  a locked-down `Permissions-Policy`, `Strict-Transport-Security` (HSTS with
  preload), and Cross-Origin isolation policies (`COOP`/`CORP`).
- `poweredByHeader` disabled — no `X-Powered-By` fingerprinting.
- No `dangerouslySetInnerHTML`, no `eval`, no user input, and no external
  network calls at runtime.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, nonce read
  page.tsx          Home page — composes all sections
  globals.css       Tailwind layers + design primitives
  not-found.tsx     404
  robots.ts         robots.txt
  sitemap.ts        sitemap.xml
  icon.svg          Favicon
components/
  Header.tsx        Sticky nav with dropdowns + mobile drawer
  Footer.tsx        Site map footer
  Reveal.tsx        IntersectionObserver scroll-reveal (respects reduced motion)
  CountUp.tsx       Animated statistic counter
  SectionHeading.tsx
  icons.tsx         Inline SVG icon set (no icon dependency)
  sections/         One component per page section
middleware.ts       Per-request nonce CSP
```

## Notes

Some copy on the source design is intentional placeholder text (e.g.
`[Insert verified customer quotation…]`, award names, and certain dates). These
are preserved verbatim so the layout matches the source exactly and the real
content can be dropped in during the finishing-touches pass.
