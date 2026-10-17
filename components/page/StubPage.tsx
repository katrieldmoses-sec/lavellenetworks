import { PageHero } from "./Sections";

/**
 * Placeholder page — pages that exist in the source but only render a
 * heading. Uses the compact Signal hero (design.md §7.2).
 */
export default function StubPage({ heading }: { heading: string }) {
  return <PageHero title={heading} compact />;
}
