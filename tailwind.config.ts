import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0a",
          secondary: "#111111",
          card: "#141414",
          border: "#1f1f1f",
        },
        accent: {
          DEFAULT: "#6366f1",
          muted: "#4f46e5",
          glow: "rgba(99,102,241,0.15)",
        },
        text: {
          primary: "#e5e5e5",
          secondary: "#a3a3a3",
          muted: "#525252",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        blink: "blink 1s step-end infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
