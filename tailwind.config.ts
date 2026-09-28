import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          black: "#080D0A",
          dark: "#0C140F",
          charcoal: "#121A15",
          card: "#0E1914",
          border: "#1A2F25",
          muted: "#8C9991",
          light: "#F5F6F4",
          cream: "#FAF8F2",
          champagne: {
            DEFAULT: "#DFCA9E",
            hover: "#EFE1C6",
            muted: "#B8A278",
            subtle: "rgba(223, 202, 158, 0.12)",
          },
          gold: {
            DEFAULT: "#DFCA9E",
            hover: "#EFE1C6",
            muted: "#B8A278",
            subtle: "rgba(223, 202, 158, 0.12)",
          },
          green: {
            DEFAULT: "#245E44",
            dark: "#0C1A14",
            surface: "#0F221B",
            accent: "#2F7856",
            glow: "#3D946B",
            border: "#1A2F25",
            subtle: "rgba(36, 94, 68, 0.15)",
          },
        },
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest: ".2em",
        ultra: ".3em",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
