"""Writes app/mockup/<n>/page.tsx for each mockup that has a component.

Each route declares only its own fonts (via next/font, self-hosted, so the
font-src 'self' CSP holds) and binds them to the --f-display / --f-body /
--f-mono slots the mockup components read.
"""
import os, re

REG = open("components/mockups/registry.ts").read()
NAMES = dict((int(n), name) for n, name in re.findall(r'n: (\d+),\s*name: "([^"]+)"', REG))

# n -> list of (ImportName, options, slots)
FONTS = {
    1: [("Plus_Jakarta_Sans", "", ["display", "body"])],
    2: [("Unbounded", "", ["display"]), ("Inter", "", ["body"])],
    3: [("Inter_Tight", "", ["display", "body"])],
    4: [("Syne", "", ["display"]), ("Manrope", "", ["body"])],
    5: [("Archivo", 'axes: ["wdth"],', ["display", "body"])],
    6: [("Instrument_Sans", 'axes: ["wdth"],', ["display", "body"])],
    7: [("Krona_One", 'weight: "400",', ["display"]), ("IBM_Plex_Mono", 'weight: ["400", "500", "600"],', ["body", "mono"])],
    8: [("Instrument_Serif", 'weight: "400", style: ["normal", "italic"],', ["display"]), ("Manrope", "", ["body"])],
    9: [("Lexend", "", ["display", "body"])],
    10: [("Montserrat", "", ["display", "body"])],
    11: [("Barlow_Condensed", 'weight: ["500", "600", "700", "800", "900"],', ["display"]), ("Barlow", 'weight: ["400", "500", "600"],', ["body"])],
    12: [("Jost", "", ["display", "body"])],
    13: [("Figtree", "", ["display", "body"])],
    14: [("Space_Grotesk", "", ["display", "body"]), ("Space_Mono", 'weight: ["400", "700"],', ["mono"])],
    15: [("Poppins", 'weight: ["300", "400", "500", "600", "700"],', ["display", "body"])],
    16: [("Urbanist", "", ["display", "body"])],
    17: [("DM_Sans", "", ["display", "body"])],
    18: [("Albert_Sans", "", ["display", "body"])],
    19: [("Archivo", 'axes: ["wdth"],', ["display", "body"])],
    20: [("Inter", "", ["display", "body"])],
}

for n, fonts in FONTS.items():
    comp = f"components/mockups/m{n:02d}.tsx"
    if not os.path.exists(comp):
        continue
    imports = ", ".join(sorted({f[0] for f in fonts}))
    decls, classes, aliases = [], [], []
    for i, (fn, opts, slots) in enumerate(fonts):
        var = f"--f-{slots[0]}"
        decls.append(
            f'const f{i} = {fn}({{ subsets: ["latin"], {opts} variable: "{var}", display: "swap" }});'
        )
        classes.append(f"f{i}.variable")
        for extra in slots[1:]:
            aliases.append(f'"--f-{extra}": "var({var})"')
    style = f' style={{{{ {", ".join(aliases)} }} as React.CSSProperties}}' if aliases else ""
    src = f'''import type {{ Metadata }} from "next";
import {{ {imports} }} from "next/font/google";
import Mockup from "@/components/mockups/m{n:02d}";

{chr(10).join(decls)}

export const metadata: Metadata = {{ title: "Mockup {n:02d} · {NAMES[n]}" }};

export default function Page() {{
  return (
    <div className={{[{", ".join(classes)}].join(" ")}}{style}>
      <Mockup />
    </div>
  );
}}
'''
    os.makedirs(f"app/mockup/{n}", exist_ok=True)
    open(f"app/mockup/{n}/page.tsx", "w").write(src)
    print("wrote", n)
