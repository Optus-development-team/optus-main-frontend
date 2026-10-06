import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  toInternalPath,
  toSpanishPath,
  type Locale,
} from "@/i18n/config";

/**
 * Idiomas: el español se sirve sin prefijo (optus.lat/) y el inglés bajo /en.
 *
 *   /            → se muestra app/[lang] con lang=es (sin cambiar la URL)
 *   /en/…        → inglés
 *   /es/…        → guarda «español» y redirige a la URL sin prefijo
 *
 * La primera visita sin idioma guardado respeta el idioma del navegador.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const [, first, ...rest] = path.split("/");
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;

  if (first === "en") {
    const internal = toInternalPath(rest.length ? `/${rest.join("/")}` : "/");
    if (`/en${internal}` !== path) return redirect(request, `/en${internal}`, 308);
    const response = NextResponse.next();
    if (saved !== "en") remember(response, "en");
    return response;
  }

  if (first === "es") {
    const internal = toInternalPath(rest.length ? `/${rest.join("/")}` : "/");
    return remember(redirect(request, toSpanishPath(internal), 307), "es");
  }

  const internal = toInternalPath(path);
  const preferred = isLocale(saved) ? saved : fromBrowser(request.headers.get("accept-language"));
  if (preferred === "en") return redirect(request, `/en${internal}`, 307);

  const canonical = toSpanishPath(internal);
  if (canonical !== path) return redirect(request, canonical, 308);

  const url = request.nextUrl.clone();
  url.pathname = `/es${internal}`;
  return NextResponse.rewrite(url);
}

function redirect(request: NextRequest, pathname: string, status: 307 | 308) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.redirect(url, status);
}

function remember(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

/** Primer idioma admitido de la cabecera Accept-Language, por orden de preferencia. */
function fromBrowser(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return { language: tag.toLowerCase().split("-")[0], quality: quality ? Number(quality) : 1 };
    })
    .filter((entry) => !Number.isNaN(entry.quality))
    .sort((a, b) => b.quality - a.quality);
  return ranked.map((entry) => entry.language).find(isLocale) ?? defaultLocale;
}

export const config = {
  // Todo menos los internos de Next y los archivos con extensión (iconos, imágenes, robots.txt…).
  matcher: ["/((?!_next/|.*\\.[a-zA-Z0-9]+$).*)"],
};
