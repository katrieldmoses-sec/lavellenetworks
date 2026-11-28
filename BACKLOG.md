# Backlog

Open items, in rough priority order.

## Change set 1.0 (November 2026) — open items

Applied: homepage figures, AI Ops parked, indusWall feature order, customer
statements and logos, SD-Branch page, Products menu by platform, component
template pages, Our Story, Leadership, ten-year panel. Still open:

- **Component copy** for Ether, Air, Zero Trust Gateway, SSE and Pilot. The
  pages are templates (`componentTemplate` in `lib/content/products.ts`) and
  noindex (`DRAFT_ROUTES` in `lib/routes.ts`); drop a slug from
  `DRAFT_ROUTES` once its copy lands. Their hero scenes for the SASE
  components are provisional.
- **SASE component names** (Zero Trust Gateway, SSE, Pilot) are working
  names, to be finalised after studying competitors' datasheets and
  nomenclature. Renaming means the label and slug in `lib/content/nav.ts`,
  `lib/routes.ts`, `lib/content/products.ts` and the hero registry.
- **Trademark checks** for Ether, Air, the SASE component names and
  indusWall.
- **Awards and PR carousel** for Our Story (best recognitions of the last 5+
  years). The homepage Recognition section still shows placeholders.
- **Leadership photos.** Still missing: a headshot for Sax Krishna (his card
  shows a monogram) and higher-resolution photos of Nishant Verma, Thompson
  P. Gnanam, BV Jagadeesh and Shoaib Ahmed (200px sources). Profiles are
  condensed to 8–10 lines from "Lavelle_Leadership_Profiles.docx"; the two
  executive advisors come from the previous site. The Board of Directors
  section was removed at the user's request (Nov 2026); its content is in git
  history (commit c352cd2) if it is ever wanted back.
- **Blogs:** re-cast 3–5 of the best pieces from the last ten years for 2026.
- **Datasheets:** updated, downloadable datasheets for every product line.
- **Final technical review** of the product pages once the above lands.
- **AI Ops returns in January 2027:** move the page from
  `parkedProductPages` back into `productPages`, restore the route in
  `ALL_ROUTES`, and re-add it to the nav, footer and homepage.

## Content

- **Footer phone number.** Still the placeholder `+91 80 4567 8900`
  (`CHROME.footerBrand` in `lib/content/home.ts`). Needs the real switchboard
  number; update both `phone` and `phoneHref`.

## Identity kit — status

Adopted with the Signal redesign (see `design.md`): the full colour palette
(ink, paper, the Blue 100–700 ramp; `lv-700` for blue body text) and the
logo, icon and OG assets.

- **Typography (kit section 10).** Partly adopted. The kit specifies Archivo
  throughout; Signal sets everything in Inter and uses Archivo (expanded) for
  the one accent heading. Switching body and headings to Archivo is a
  font-variable change in `app/layout.tsx` if the brand owner wants strict
  kit compliance.

## Notes

- All lockups ship with the tagline baked in, but the kit's minimum-size rule
  (section 05) requires dropping it below 280px. `public/brand/logo-white.png`
  and `logo-ink.png` are exact pixel crops of the supplied artwork with the
  tagline band removed — nothing redrawn or re-typed. Worth asking the brand
  owner for proper tagline-less exports.
