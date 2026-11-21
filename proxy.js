import { NextResponse } from "next/server";

const LOCALES = ["ar", "en", "ur"];

// "/" and any path without a language prefix -> /ar/...
export function proxy(request) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  // Arabic is always the default language
  const locale = "ar";

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // skip Next internals and any file with an extension (images, sitemap.xml, robots.txt…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
