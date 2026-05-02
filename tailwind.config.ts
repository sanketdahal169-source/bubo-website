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
        brand: {
          50:  "#fdf8f0",
          100: "#faefd9",
          200: "#f4dab3",
          300: "#ebbf7d",
          400: "#e0a04d",
          500: "#d4862a",
          600: "#b86a1f",
          700: "#99521b",
          800: "#7c421d",
          900: "#67371a",
          950: "#3b1c0c",
        },
        earth: {
          50:  "#f8f4f0",
          100: "#ede4d8",
          200: "#dcc8b0",
          300: "#c7a480",
          400: "#b28057",
          500: "#9a6840",
          600: "#855535",
          700: "#6e422c",
          800: "#5c3728",
          900: "#4e2f23",
          950: "#2a1610",
        },
        forest: {
          50:  "#f2f7f2",
          100: "#e0ede0",
          200: "#c2dac3",
          300: "#96bf99",
          400: "#649e69",
          500: "#437f49",
          600: "#336438",
          700: "#29502e",
          800: "#224027",
          900: "#1c3521",
          950: "#0e1f12",
        },
        cream:  "#fdf8f0",
        gold:   "#d4862a",
        teak:   "#7c421d",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        warm:  "0 4px 24px rgba(212, 134, 42, 0.15)",
        deep:  "0 8px 40px rgba(30, 10, 0, 0.18)",
        card:  "0 2px 16px rgba(0,0,0,0.08)",
        hover: "0 8px 32px rgba(0,0,0,0.14)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(30,10,0,0.72) 0%, rgba(100,42,10,0.45) 60%, rgba(0,0,0,0.1) 100%)",
        "section-gradient":
          "linear-gradient(180deg, #fdf8f0 0%, #faefd9 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #2a1610 0%, #3b1c0c 100%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        "fade-in": "fade-in 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
