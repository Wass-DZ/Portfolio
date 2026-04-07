import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "cards-surface": "var(--cards-surface)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "primary-accent": "var(--primary-accent)",
        "primary-accent-hover": "var(--primary-accent-hover)",
        "secondary-accent": "var(--secondary-accent)",
        "soft-accent-bg": "var(--soft-accent-bg)",
        border: "var(--border)",
        "muted-section-bg": "var(--muted-section-bg)",
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
