/** Every real route on the site — single source of truth for nav and sitemap. */
export const ALL_ROUTES: string[] = [
  "/",
  "/products/sd-wan",
  "/products/sase",
  "/products/ai-operations",
  "/products/ztna",
  "/products/cloudport-edge",
  "/products/cloudport-gateway",
  "/products/cloudstation-controller",
  "/products/cloudstation-insights",
  "/products/cloud-connectivity",
  "/products/digital-experience",
  "/products/network-analytics",
  "/products/secure-branch",
  "/products/secure-internet",
  "/solutions/bfsi",
  "/solutions/branch-transformation",
  "/solutions/hybrid-workforce",
  "/solutions/information-technology",
  "/solutions/logistics",
  "/solutions/education",
  "/solutions/government",
  "/solutions/healthcare",
  "/solutions/manufacturing",
  "/solutions/multi-cloud",
  "/solutions/retail",
  "/use-cases/application-availability",
  "/use-cases/branch-transformation",
  "/use-cases/enterprise-network-monitoring",
  "/use-cases/hybrid-wan",
  "/use-cases/hybrid-workforce",
  "/use-cases/microsoft-365-performance",
  "/use-cases/multi-cloud",
  "/use-cases/multi-cloud-connectivity",
  "/use-cases/network-monitoring",
  "/resources/blogs",
  "/resources/case-studies",
  "/resources/datasheets",
  "/resources/documentation",
  "/resources/news",
  "/resources/webinars",
  "/resources/whitepapers",
  "/company/about",
  "/company/careers",
  "/company/contact",
  "/company/investors",
  "/company/leadership",
  "/company/news",
  "/contact/partner-with-us",
  "/contact/request-demo",
  "/contact/support",
  "/contact/talk-to-expert",
  "/partners",
  "/partners/locator",
];

/**
 * Alias routes that render identical content to another URL (the source design
 * does the same). They must exist so every source URL resolves, but they are
 * canonicalised to the primary URL and kept out of the sitemap so search
 * engines don't treat them as duplicate content.
 */
export const CANONICAL_OF: Record<string, string> = {
  "/use-cases/multi-cloud": "/use-cases/multi-cloud-connectivity",
  "/use-cases/network-monitoring": "/use-cases/enterprise-network-monitoring",
  "/solutions/branch-transformation": "/use-cases/branch-transformation",
  "/solutions/hybrid-workforce": "/use-cases/hybrid-workforce",
  "/resources/news": "/company/news",
};

/** Canonical path for any route (itself, unless it is an alias). */
export function canonicalPath(path: string): string {
  return CANONICAL_OF[path] ?? path;
}

/** Routes that belong in the sitemap (aliases excluded). */
export const SITEMAP_ROUTES = ALL_ROUTES.filter((r) => !(r in CANONICAL_OF));
