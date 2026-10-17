import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identity kit (section 09): one blue, one ink, two grounds, plus the
        // interface ramp. The only palette — see design.md §2.
        lv: {
          blue: "#0078D4",
          100: "#E5F1FB",
          200: "#C2DFF6",
          300: "#8CC3EE",
          500: "#0078D4",
          600: "#0068B8",
          700: "#005493",
          ink: "#201E1D",
          paper: "#F3F2F2",
        },
      },
      fontFamily: {
        sans: ["var(--f-body)", "Archivo", "Helvetica", "sans-serif"],
        // Font slots. The root layout binds Inter / Archivo; each /mockup/N
        // page rebinds them to its own families.
        "m-display": ["var(--f-display)", "Archivo", "Helvetica", "sans-serif"],
        "m-body": ["var(--f-body)", "Archivo", "Helvetica", "sans-serif"],
        "m-mono": ["var(--f-mono)", "ui-monospace", "monospace"],
        "m-accent": ["var(--f-accent)", "Archivo", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
