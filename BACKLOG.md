# Backlog

Open items, in rough priority order.

## Change set 1.0 (November 2026) — open items

Applied: homepage figures, AI Ops parked, indusWall feature order, customer
statements and logos, SD-Branch page, Products menu by platform, component
template pages, Our Story, Leadership, ten-year panel. Still open:

- **Component copy** for Ether, Air, trustGate, trustCore and trustPilot. The
  pages are templates (`componentTemplate` in `lib/content/products.ts`) and
  noindex (`DRAFT_ROUTES` in `lib/routes.ts`); drop a slug from
  `DRAFT_ROUTES` once its copy lands. Their hero scenes for the SASE
  components are provisional.
- **Trademark checks** for Ether, Air, trustGate, trustCore, trustPilot and
  indusWall.
- **Awards and PR carousel** for Our Story (best recognitions of the last 5+
  years). The homepage Recognition section still shows placeholders.
- **Leadership photos and LinkedIn descriptions.** LinkedIn profiles need a
  sign-in, so the bios come from the leadership note (public-safe parts
  only). Need headshots for all ten people, Shyamal Kumar's and Drritiman
  Boraah's LinkedIn "About" text, and Shyamal's profile URL.
- **Board:** Abhishek Maheshwari is listed as a nominee director (statutory
  list as of 1 September 2026); update when the Airtel nominee change
  completes.
- **Blogs:** re-cast 3–5 of the best pieces from the last ten years for 2026.
- **Datasheets:** updated, downloadable datasheets for every product line.
- **Final technical review** of the product pages once the above lands.
- **AI Ops returns in January 2027:** move the page from
  `parkedProductPages` back into `productPages`, restore the route in
  `ALL_ROUTES`, and re-add it to the nav, footer and homepage.
- **Figures elsewhere:** the homepage "Why Lavelle" and "Investment case"
  copy, and the Investors page, still quote 25,000+ sites / 6 verticals; the
  ten-year panel says 20,000+ locations. Confirm which figure to use.

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
