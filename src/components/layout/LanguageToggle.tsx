"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/dictionaries";

export function LanguageToggle({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  
  const redirectedPathName = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale; // Replace the target locale slug
    return segments.join("/");
  };

  const nextLocale = currentLocale === "en" ? "fr" : "en";
  const label = currentLocale === "en" ? "FR" : "EN";

  return (
    <Link
      href={redirectedPathName(nextLocale)}
      className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-colors text-secondary-text hover:text-primary-text hover:bg-muted-section-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent"
      aria-label="Toggle language"
    >
      {label}
    </Link>
  );
}
