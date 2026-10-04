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
        navy: {
          DEFAULT: "#0b1930",
          950: "#0b1930",
          900: "#0b2a4a",
          800: "#112040",
          700: "#1a3055",
          600: "#2a4570",
          500: "#4a6891",
        },
        brand: {
          DEFAULT: "#0062b1",
          blue: "#0062b1",
          azure: "#0078d4",
          light: "#3b9ef5",
          sky: "#7fafd8",
        },
        mist: {
          50: "#f0f7ff",
          100: "#eef5fb",
          200: "#e2eaf5",
          300: "#c8d8ea",
        },
        // Identity kit (section 09): one blue, one ink, two grounds, plus the
        // interface ramp. Used by the homepage mockups.
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
        accent: {
          cyan: "#0891b2",
          violet: "#7c3aed",
          gold: "#d4a017",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
        // Per-mockup slots; each /mockup/N page binds these variables.
        "m-display": ["var(--f-display)", "Archivo", "Helvetica", "sans-serif"],
        "m-body": ["var(--f-body)", "Archivo", "Helvetica", "sans-serif"],
        "m-mono": ["var(--f-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "6px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
