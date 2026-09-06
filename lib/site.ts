/**
 * Canonical site URL.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this to the real domain in Vercel project settings.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — the project's stable production domain.
 *  3. VERCEL_URL — the per-deployment preview URL.
 *  4. localhost for local development.
 *
 * This keeps canonical/OG/sitemap URLs correct on preview deployments and on a
 * vercel.app domain, without hardcoding a domain that isn't live yet.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
