/** The twenty homepage directions. Order = URL number. */
export type MockupMeta = {
  n: number;
  name: string;
  /** One-line structural idea. */
  idea: string;
  type: string;
  ground: "light" | "dark" | "split";
  /** Files in /inspiration this direction is built from. */
  sources: string[];
};

export const MOCKUPS: MockupMeta[] = [
  {
    n: 1,
    name: "Bloom",
    idea: "Inset hero card with the globe rising like a horizon; split intro; bento proof.",
    type: "Plus Jakarta Sans",
    ground: "light",
    sources: ["3b649a7aa6f3e72118fccc58841c6773", "c0b837fa99ad9a28118288b8186956b4"],
  },
  {
    n: 2,
    name: "Eclipse",
    idea: "Black hero over the curve of the earth; wide display type; clean white body.",
    type: "Unbounded + Inter",
    ground: "split",
    sources: ["c45e9aec3f79bc541d594c377c19c623"],
  },
  {
    n: 3,
    name: "Explorer",
    idea: "Editorial chapters on a ruled grid; the globe splits the headline.",
    type: "Inter Tight",
    ground: "dark",
    sources: ["02371d2ecc44852041f9a2d693ca53f1"],
  },
  {
    n: 4,
    name: "Summit",
    idea: "Heavy wide headline, blob-cut visual with a live route, numbered stepper.",
    type: "Syne + Manrope",
    ground: "light",
    sources: ["46f79553fba59899b6343cdce10f73b9", "866d11a4d57b8fd326b3d43c9a798856"],
  },
  {
    n: 5,
    name: "Atlas",
    idea: "Globe as centrepiece inside a framed blue page; expanded caps; notched panels.",
    type: "Archivo Expanded",
    ground: "light",
    sources: ["913598e4c67ab26e4de078a990e1c55c"],
  },
  {
    n: 6,
    name: "Solara",
    idea: "Full-bleed headline over a grain sky and earth horizon; two-tone statements.",
    type: "Instrument Sans",
    ground: "light",
    sources: ["7ef1f890a8fffffc78a6ca5f21df0acb", "30b5c2bfaed64abbb94ba462aea50aa5"],
  },
  {
    n: 7,
    name: "Console",
    idea: "Framed dark terminal; monospace system; the platform as an input bar.",
    type: "Krona One + IBM Plex Mono",
    ground: "dark",
    sources: ["a79c63059e728466df3e597c07a0994b"],
  },
  {
    n: 8,
    name: "Discover",
    idea: "Oversized serif over a grain landscape; carousels; quiet editorial white.",
    type: "Instrument Serif + Manrope",
    ground: "light",
    sources: ["eba1dd6a839be293d1b05abb9bc51c06", "75a77b1e6138ba92a88cfb6501bfc0e3"],
  },
  {
    n: 9,
    name: "Arch",
    idea: "The earth framed in an arch; hand-drawn emphasis; accordion side panel.",
    type: "Lexend",
    ground: "dark",
    sources: ["6a892e258262f56f5faf4fe63c520c83", "e7b898cfbb0166740e3e93d5d147c3f7"],
  },
  {
    n: 10,
    name: "Gen 5",
    idea: "Solid and outline type, circular cut-outs, one-at-a-time product spotlight.",
    type: "Montserrat",
    ground: "dark",
    sources: ["f2e2f34138d1fc2ecbc5f726338c1687"],
  },
  {
    n: 11,
    name: "Index",
    idea: "Condensed heavy caps, giant cropped numerals, vertical guides, poster blocks.",
    type: "Barlow Condensed + Barlow",
    ground: "dark",
    sources: ["bd47c0760714f23f983c348e781220d8", "a22094934ee2ad760ada3d089e7fa6e3"],
  },
  {
    n: 12,
    name: "Tura",
    idea: "Monochrome slides: one idea per screen, spaced caps, side index.",
    type: "Jost",
    ground: "dark",
    sources: ["ae0e063890f9134561cc3b55334231e1"],
  },
  {
    n: 13,
    name: "Thread",
    idea: "A single network line draws itself down the page, linking every section.",
    type: "Figtree",
    ground: "dark",
    sources: ["49165019107ae63cc28a1f0b2f36931b", "c6d0b554e7ba3b8c280bb1afee46db51"],
  },
  {
    n: 14,
    name: "Schematic",
    idea: "Line-art system diagram, label tags, notched cards with flat offset edges.",
    type: "Space Grotesk + Space Mono",
    ground: "light",
    sources: ["af08d02d9e300cf83baebb3b772344b0", "67d372ceb096eb0d70bb32deb0cd9a91"],
  },
  {
    n: 15,
    name: "Estate",
    idea: "Light hero meets a black band; rotating seal; tabbed reasons.",
    type: "Poppins",
    ground: "split",
    sources: ["e8e33496617fa46036ddfce033bf34bb", "908bc4d6917feb44b67831c6ddca670c"],
  },
  {
    n: 16,
    name: "Ledger",
    idea: "The company in numbers: giant figures in ruled rows, cropped-numeral cards.",
    type: "Urbanist",
    ground: "dark",
    sources: ["a990d97df599de97090c729eacb0efcc", "887463d65d9be2d171951f3637dfe36f"],
  },
  {
    n: 17,
    name: "Nexus",
    idea: "Dot-matrix earth rising under the hero; a light sheet slides over it.",
    type: "DM Sans",
    ground: "split",
    sources: ["7426184f6b8c7bec1c65c7d69e2f8723", "7d67838dffc47dfc310b6ce3927fe452"],
  },
  {
    n: 18,
    name: "Paper",
    idea: "Grain paper sheets stacked like a folio; centred two-tone type; calm.",
    type: "Albert Sans",
    ground: "light",
    sources: ["a898889744539920ab54c5a64fdaea4f", "2a39c081390dd66bb18ec557115592cf"],
  },
  {
    n: 19,
    name: "Apparatus",
    idea: "Condensed caps, gauge rings around the globe, lettered solution drawers.",
    type: "Archivo Condensed",
    ground: "dark",
    sources: ["bce44b2a09741126237676be29920e94"],
  },
  {
    n: 20,
    name: "Signal",
    idea: "Grain-blue panels, orbit lines, Gantt-style timeline, oversized sign-off.",
    type: "Inter",
    ground: "light",
    sources: [
      "66496e5f6a31f82f25869e6062088880",
      "e97af1b83334d8f6a6b98b891d30520f",
      "2b89b2907a4231a4098ce6ae38283d8c",
      "f854abc72759ba5cb53f90f501f019fa",
    ],
  },
];
