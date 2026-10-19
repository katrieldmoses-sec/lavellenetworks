# Backlog

Open items, in rough priority order.

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
