import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current pathname is missing a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Only redirect the strict / block or unrecognized blocks. Since the prompt states: 
  // "/ redirects to /en. external links unchanged". We just explicitly redirect the root.
  // We'll also redirect everything else cleanly if it lacks locale.
  return NextResponse.redirect(new URL(`/en${pathname === "/" ? "" : pathname}`, request.url));
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!_next|api|cv|favicon.ico).*)'],
};
