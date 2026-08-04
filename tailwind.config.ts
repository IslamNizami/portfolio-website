import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0E14",
          elevated: "#10161F",
          card: "#131A24",
        },
        border: {
          DEFAULT: "#1F2733",
          hover: "#2A3441",
        },
        ink: {
          DEFAULT: "#F5F7FA",
          secondary: "#A6B0BE",
          muted: "#6B7686",
        },
        accent: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
        },
        status: {
          healthy: "#22C55E",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1F2733 1px, transparent 1px), linear-gradient(to bottom, #1F2733 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(34,197,94,0.5)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 4px rgba(34,197,94,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
