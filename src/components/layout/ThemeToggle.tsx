"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to avoid layout shift before hydration
    return (
      <button className="w-9 h-9 flex items-center justify-center rounded-xl transition-colors text-secondary-text hover:text-primary-text bg-transparent opacity-0">
        <Sun size={20} />
      </button>
    );
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-xl transition-colors text-secondary-text hover:text-primary-text hover:bg-muted-section-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
