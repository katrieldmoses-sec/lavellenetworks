/** Content model mirroring the section patterns used across the source site. */

export type Cta = { label: string; href: string };

export type Section =
  | { kind: "hero"; eyebrow: string; title: string; body?: string; ctas?: Cta[] }
  | { kind: "challenge"; eyebrow: string; title: string; intro?: string; bullets: string[] }
  | { kind: "capabilities"; eyebrow: string; title: string; items: { title: string; body: string }[] }
  | { kind: "how"; eyebrow: string; title: string; steps: { title: string; body: string }[] }
  | { kind: "outcomes"; eyebrow: string; title: string; items: { title: string; body: string }[] }
  | { kind: "platform"; eyebrow: string; title: string; links: { title: string; body: string; href: string }[] }
  | { kind: "features"; eyebrow: string; title?: string; items: { title: string; body: string }[] }
  | { kind: "stats"; eyebrow: string; title?: string; items: { value: string; title: string; body: string }[] }
  | { kind: "flow"; eyebrow: string; title: string; intro?: string; nodes: { title: string; sub: string }[] }
  | { kind: "deployment"; eyebrow: string; title: string; intro?: string; items: { title: string; body: string }[]; note?: string }
  | { kind: "note"; eyebrow: string; title: string; body: string; cta?: Cta }
  | { kind: "components"; eyebrow: string; title: string; intro?: string; items: { title: string; bullets: string[]; href: string; linkLabel?: string }[] }
  | { kind: "table"; eyebrow: string; title: string; headers: string[]; rows: string[][] }
  | { kind: "checklist"; eyebrow: string; title?: string; items: string[] }
  | { kind: "cta"; title: string; body?: string; ctas?: Cta[] };

export type PageContent = {
  /** Route slug, e.g. "sd-wan" */
  slug: string;
  /** <title> / metadata */
  metaTitle: string;
  metaDescription: string;
  sections: Section[];
};

/** A page that exists in the source but is only a placeholder heading. */
export type StubPage = { slug: string; heading: string };
