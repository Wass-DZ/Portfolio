import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC", // slate-50
        "cards-surface": "#FFFFFF",
        "primary-text": "#0F172A", // slate-900
        "secondary-text": "#475569", // slate-600
        "primary-accent": "#1D4ED8", // blue-700
        "primary-accent-hover": "#1E40AF", // blue-800
        "secondary-accent": "#CBD5E1", // slate-300
        "soft-accent-bg": "#EFF6FF", // blue-50
        border: "#E2E8F0", // slate-200
        "muted-section-bg": "#F1F5F9", // slate-100
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
