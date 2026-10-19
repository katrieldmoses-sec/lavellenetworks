import { PageHero } from "./Sections";

/**
 * Placeholder page — pages that exist in the source but only render a
 * heading. Uses the compact Signal hero (design.md §7.2) with the page's
 * scene when it has one.
 */
export default function StubPage({ heading, scene }: { heading: string; scene?: string }) {
  return <PageHero title={heading} compact scene={scene} />;
}
