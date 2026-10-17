/** The Signal series: shared by the pages and the /mockups index. */
import type { HeroPersona } from "./hero";

export type SignalVariant = 1 | 2 | 3 | 4 | 5;

export const SIGNAL_SERIES: {
  n: SignalVariant;
  name: string;
  idea: string;
  persona: HeroPersona;
}[] = [
  {
    n: 1,
    name: "Signal × Bloom",
    idea: "Rings tilt with the pointer, a passing underline; Bloom's overlapping platform strip, bento figures, stacking products and tabbed industries.",
    persona: "bloom",
  },
  {
    n: 2,
    name: "Signal × Solara",
    idea: "The orbit system under Solara's sky with the planet rising; two-tone statement, sky-tile bento, opening reasons, accordion, sideways decade.",
    persona: "sky",
  },
  {
    n: 3,
    name: "Signal × Atlas",
    idea: "Atlas's giant faded word and floating cards in the hero; orbit product cards, the globe straddling a dark panel, expanded-caps close.",
    persona: "atlas",
  },
  {
    n: 4,
    name: "Signal — the blend",
    idea: "The recommended mix: radar sweep, spokes and a live platform ticker; Bloom figures, Solara bento and tiles, Atlas architecture, sideways decade.",
    persona: "radar",
  },
  {
    n: 5,
    name: "Signal in motion",
    idea: "Scroll-led: the hero card insets into a framed panel as the rings turn; stacking products, focusable orbit diagram, accordion, Atlas close.",
    persona: "scroll",
  },
];
