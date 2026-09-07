# Backlog

Open items, in rough priority order.

## Content

- **Footer phone number.** Still the placeholder `+91 80 4567 8900`
  (`components/Footer.tsx`). Needs the real switchboard number; update both the
  display text and the `tel:` href.

## Identity kit — deliberately not applied

The asset overhaul (logos, favicons, manifest, OG card) is done. Two parts of
`assets/Lavelle Identity Kit.dc.html` were left alone because applying them
would change the design, which was explicitly out of scope. Both are one-session
jobs if we decide to do them.

- **Typography (kit section 10).** The kit specifies Archivo throughout —
  800 headings, 600 labels, 400 body, fallback `Archivo, Helvetica, sans-serif`.
  The site currently uses Plus Jakarta Sans (body), Fraunces (display) and
  DM Mono (labels), matched to the Figma source. Switching would re-flow every
  page and undo the measured line-break fidelity work.

- **Colour palette (kit section 09).** Brand blue `#0078D4` already matches
  `brand.azure`. Not adopted: Ink `#201E1D` for body text (site uses navy
  `#0b1930`), Paper `#F3F2F2` for page ground, and the Blue 100–700 interface
  ramp. Note the kit's own warning — brand blue on white is 3.6:1, so
  Blue 700 `#005493` is the correct token for paragraph-size blue text.

## Notes

- All lockups ship with the tagline baked in, but the kit's minimum-size rule
  (section 05) requires dropping it below 280px. `public/brand/logo-white.png`
  and `logo-ink.png` are exact pixel crops of the supplied artwork with the
  tagline band removed — nothing redrawn or re-typed. Worth asking the brand
  owner for proper tagline-less exports.
