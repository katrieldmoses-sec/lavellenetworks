# Lavelle Networks — Design System: **Signal**

The site design, chosen from the homepage explorations (`/mockups`) as
**Signal-4 — the blend**. Signal's structure (the earth inside orbit rings,
grain-blue panels, a roadmap decade, an oversized sign-off) with the best of
Bloom (bento figures), Solara (two-tone statements, sky horizons, opening
tiles, the sideways decade) and Atlas (the globe straddling a dark panel).

This document is the source of truth for every page. The implementation lives
in `components/site/` (patterns) and `components/kit/` (primitives).

---

## 1. Principles

1. **Content is fixed; design carries it.** Copy comes only from
   `lib/content/*`. Components never invent text. Decoration may add numerals
   (`01`, `02`) or arrows, nothing else. `scripts/page-text.mjs compare` must
   pass after any design change.
2. **One blue, one ink.** Colour comes from the identity kit only. No neon, no
   glow, no hue shifts, no gradients outside the brand ramp.
3. **Depth from grain and line, never light.** Grain texture and thin rules
   create depth. There is no bloom, no outer glow, no drop-shadow halo. The one
   shadow allowed is a long, soft, blue-tinted lift under floating white
   cards.
4. **The network is the motif.** Orbit rings, travelling packets, spokes and
   the dotted earth recur everywhere. They are drawn flat, in hairlines.
5. **Calm motion.** Everything moves slowly and purposefully, and stops
   completely under `prefers-reduced-motion`.

---

## 2. Colour

Tailwind namespace `lv-*` (see `tailwind.config.ts`).

| Token | Hex | Use |
|---|---|---|
| `lv-blue` / `lv-500` | `#0078D4` | Brand blue. Primary buttons, active states, grain fields, accents |
| `lv-600` | `#0068B8` | Pressed / hover on blue |
| `lv-700` | `#005493` | Blue text at paragraph size (AA on white); deep end of grain |
| `lv-300` | `#8CC3EE` | Accents on dark grounds (kickers, labels, icons) |
| `lv-200` | `#C2DFF6` | Arcs, light accents on blue |
| `lv-100` | `#E5F1FB` | Tinted icon wells, pills |
| `lv-ink` | `#201E1D` | All text; dark panels |
| `lv-paper` | `#F3F2F2` | Alternate section ground, quiet cards |
| white | `#FFFFFF` | Page ground, cards |

**Text opacities on light grounds:** headings `lv-ink`, body `lv-ink/65`,
secondary `lv-ink/55`, the muted half of a two-tone heading `lv-ink/35`.
**On blue/ink grounds:** headings white, body `white/85` (blue) or
`white/60` (ink), labels `lv-300`.

Brand blue on white is 3.6:1. Use it for large type, icons and buttons only;
blue paragraph text is `lv-700`.

### Grain fields (`<GrainField tone>`)
Radial gradients in the ramp, overlaid with static SVG film grain (`.mk-grain`,
overlay blend, opacity 0.22–0.32).

| tone | Gradient | Use |
|---|---|---|
| `blue` | lv-300 → lv-500 → lv-700 | Hero card, featured tiles, investment panel |
| `deep` | lv-600 → lv-700 → ink | Industries panel, footer, dark tiles |
| `sky` | white → lv-100 → lv-300 | The "first figure" bento tile, soft tiles |
| `dusk` / `ink` / `paper` | — | Insight thumbnails, variety |

**Horizon panel:** the closing CTA uses a vertical sky (`lv-700 → lv-500 →
lv-300`) with the planet rising from the bottom edge.

---

## 3. Typography

| Role | Family | Weight | Size (mobile → desktop) | Tracking | Leading |
|---|---|---|---|---|---|
| Display (hero h1) | Inter | 600 | 52 → 76 → 92 px | −0.045em | 0.98 |
| Section heading (h2) | Inter | 600 | 34 → 48/50 px | −0.035em | 1.08–1.10 |
| Statement (two-tone) | Inter | 600 | 32 → 50 px | −0.035em | 1.10 |
| Card title (h3) | Inter | 600 | 19–44 px by card size | −0.01 → −0.04em | 1.0–1.3 |
| Body | Inter | 400 | 15–17 px | 0 | 1.55–1.65 |
| Small / meta | Inter | 400–500 | 12–13 px | 0 | 1.5 |
| Kicker | Inter | 500 | 13 px | 0 | — |
| Accent caps | Archivo, `wdth` 125 | 800 | 30 → 46 px | −0.01em | 1.04 |
| Figures | Inter | 600 | 46 → 112 px | −0.05/−0.06em | 1 |

- **Kicker:** a 24px hairline (`lv-blue`, or `white/60` on dark) followed by
  the label. Sentence case, never uppercase.
- **Two-tone headings:** the first words in ink, the rest at `lv-ink/35`
  (`<TwoTone>`). The words are unchanged; only the colour splits.
- **Accent caps** are used once per page at most, for the architecture panel
  title on the homepage.
- Fonts are self-hosted via `next/font` (keeps `font-src 'self'`).

---

## 4. Layout

- **Container:** `max-w-[1320px]`, `px-6`. Full-bleed panels sit in a
  `max-w-[1400px]` frame inset `px-3 sm:px-5` from the viewport, so blue and
  dark panels read as **cards on the page**, never edge to edge.
- **Section rhythm:** `py-24 lg:py-32` (light), `py-28 lg:py-36` (feature).
  Light sections alternate white and `lv-paper`.
- **Radii:** panels 24px · large cards 20–22px · small cards 14–16px ·
  buttons 10px · chips and pills full.
- **Grids:** 2-up for products, 3-up for reasons, industries and cards, 4-up
  for figures and insights; everything collapses to one column under `md`.
- **Header:** 80px, sticky. Transparent at the top of the page; white/85 with
  blur and a hairline once scrolled.

---

## 5. Components

| Component | Spec |
|---|---|
| **Button (`<Btn>`)** | 10px radius, 14px/500, `px-6 py-3.5`. Tones: `blue` (primary on light), `white` (primary on blue/ink), `ink`, `ghost-light`, `ghost-dark`. Primary buttons carry an arrow that slides 4px on hover. |
| **Chip** | Full radius, 12px/500, icon + label. White on blue, `white/15` + blur, or `ink/40` + blur. |
| **Orbit (`<Orbit>`)** | A hairline ring with chips placed evenly round it. It turns slowly (120s) while the chips stay upright. Optional **packets** (2-unit dashes that travel the ring) and **spokes** (dashed links from the globe's edge to each chip). Dense rings use `still` + `compact` and offsets checked for zero collisions. |
| **Orbit lines** | Three tilted ellipses, turning (90s). Decoration in card corners and panels at `lv-blue/20` or `white/10–15`. |
| **Globe (`<Globe>`)** | A dotted earth on canvas, Fibonacci-sampled land, flat dots. Arcs run from Bangalore to regional hubs. Use `horizon` mode for rising-planet crops. Never glows; pauses off-screen. |
| **Bento figure tiles** | One wide `sky` tile for the lead figure, then ink, blue and outlined tiles. Figures count up once in view. |
| **Feature card** | Border `lv-ink/10`, radius 20, `p-7`, orbit lines in the corner, grain icon block, a link with an arrow nudge. |
| **Panel** | A `GrainField` (blue or deep) or an ink panel, 24/30px radius, inset frame. |
| **Opening tiles** | A row of tiles where the hovered or focused one widens (flex 1 → 2.6) and darkens to ink. Body text stays in the DOM. |
| **Tabs** | 10px-radius buttons: white on dark when active, `white/10` when idle. Panels cross-fade and rise 8px. |
| **Accordion** | Hairline-ruled rows, an icon well that fills blue when open, height eased via `grid-template-rows`. |
| **Roadmap** | Bars clip-reveal left to right, staggered 90ms. Placeholder years use a dashed `lv-100` bar. |
| **Sign-off** | The footer ends with the brand line at 118px. Its words rise out of a mask as the footer arrives. |

---

## 6. Motion

| Motion | Duration / easing | Trigger |
|---|---|---|
| Reveal (fade + rise 28px) | 900ms `cubic-bezier(.2,.7,.1,1)` | In view, once |
| Word rise (headlines) | 1000ms, 30–70ms stagger | In view, once |
| Passing underline | 7.5s loop, word to word | Hero only |
| Count-up | 1800ms ease-out-expo | In view, once |
| Orbit turn | 120s linear | Always |
| Ring packets | 9–20s linear | Always |
| Radar sweep | 9s linear, 35° flat wedge at 7% white | Hero |
| Pointer tilt | Eased 7% per frame, ±9°/±7° | Hero, fine pointers only |
| Spokes / flow dashes | 1.4s linear | Always |
| Ticker | 44s linear, pauses on hover | Hero base |
| Pinned decade | Scroll-linked, 280vh pin | Homepage timeline |
| Card hover | Lift 4px, ring speed-up, arrow nudge | Hover |

Everything above stops under `prefers-reduced-motion: reduce`. Content then
renders in its final state, and the globe draws one static frame.

---

## 7. Page anatomy

### Homepage (in order)
1. **Hero:** the blue grain card. Earth inside three orbit rings (platform /
   sources / destinations) with packets, spokes and a radar sweep. Headline
   bottom-left with the passing underline. Platform ticker along the base.
2. **Figures:** two-tone statement over the bento of four figures.
3. **Platform:** product bento. Two large grain tiles with a rising planet,
   two paper tiles with orbit lines.
4. **Architecture:** dark panel with the globe straddling its top edge, accent
   caps title, four layer cards.
5. **Why Lavelle:** centred two-tone statement and six opening tiles.
6. **Industries:** deep grain panel with tabs; challenge, solution and outcome
   cards.
7. **Proof:** testimonial cards (first in ink) and the logo grid.
8. **Decade:** pinned; scrolling moves the year cards sideways.
9. **Insights:** filters and grain-thumbnail cards.
10. **Recognition + Investment:** ruled list beside a blue grain panel.
11. **Close:** horizon panel with the planet rising.
12. **Footer:** deep grain panel and the sign-off.

### Inner pages
Every inner page is a sequence of content sections (`lib/content/types.ts`),
rendered by `components/page/Sections.tsx`:

| Section kind | Signal treatment |
|---|---|
| `hero` | Blue grain card in the inset frame. Orbit rings and earth to the right (decoration only), kicker, display h1, body, CTAs |
| `challenge` | Two-tone heading; numbered cards with an alert well |
| `capabilities` / `features` | White cards on paper with icon wells and index numerals |
| `how` | Deep grain panel; numbered step cards on glass |
| `outcomes` | Bento: one blue grain tile, then outlined tiles |
| `stats` | Figure bento: sky, blue, ink |
| `platform` | Feature cards with orbit lines and links |
| `components` | Feature cards with check lists and links |
| `flow` | A white flow strip; nodes joined by moving dashes |
| `deployment` | Ink panel with glass cards; note beneath |
| `note` | Paper panel: heading left, body and action right |
| `table` | White rounded table; first column emphasised; row hover |
| `checklist` | Pill cards with check wells |
| `people` | Cards with a grain band, role in blue, note pill |
| `cta` | The horizon panel |

Placeholder pages (stubs) use a compact blue grain hero. The 404 uses the
same with the globe.

---

## 8. Accessibility

- Text contrast: AA everywhere. Blue body text uses `lv-700`; white on
  `lv-blue` is used only at 14px/500 and up.
- Interactive tiles, tabs and accordions are real `<button>`s with
  `aria-expanded` / `aria-selected`. Hover behaviour is mirrored on focus.
- Decorative canvases and SVGs are `aria-hidden`. Dropdown panels stay in the
  DOM for crawlers and toggle with CSS visibility.
- Every animation honours reduced motion.

## 9. Don't

- Don't add copy in components, and don't change, reorder or summarise
  content.
- No neon, glow, drop shadows with spread, glass gradients, or colours
  outside §2.
- Don't place the full lockup below 28px tall or rebuild the logo (identity
  kit §05, §07).
- Don't put chips where they collide; check positions on dense rings.
- Don't animate layout properties on scroll except inside the pinned decade.
