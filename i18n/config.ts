/**
 * Idiomas del sitio y sus direcciones públicas.
 *
 *   español (por defecto)   /            /privacidad       /terminos
 *   inglés                  /en          /en/privacy       /en/terms
 *
 * Por dentro todas las páginas viven en app/[lang]/…; proxy.ts traduce entre ambas.
 */
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale);

/** Cookie donde proxy.ts recuerda el idioma elegido. */
export const LOCALE_COOKIE = "lang";

/** Segmento interno (bajo app/[lang]) de cada página. */
const segments = { home: "", privacy: "/privacy", terms: "/terms" } as const;
export type RouteKey = keyof typeof segments;

/** Direcciones en español que no coinciden con el segmento interno. */
const spanishPaths: Record<string, string> = { "/privacy": "/privacidad", "/terms": "/terminos" };
const internalPaths: Record<string, string> = Object.fromEntries(
  Object.entries(spanishPaths).map(([internal, spanish]) => [spanish, internal]),
);

/** "/privacidad" → "/privacy"; "/" → "". Lo desconocido pasa tal cual. */
export const toInternalPath = (path: string): string =>
  path === "/" ? "" : (internalPaths[path] ?? path);

/** "/privacy" → "/privacidad"; "" → "/". */
export const toSpanishPath = (internal: string): string =>
  internal === "" ? "/" : (spanishPaths[internal] ?? internal);

/** Dirección pública de una página en un idioma. */
export function href(route: RouteKey, locale: Locale, hash = ""): string {
  const path = locale === "es" ? toSpanishPath(segments[route]) : `/en${segments[route]}`;
  return `${path}${hash}`;
}

/**
 * Enlace para cambiar de idioma. Lleva siempre el prefijo (/es/… o /en/…): así proxy.ts
 * guarda la elección aunque el navegador no ejecute JavaScript.
 */
export const switchHref = (route: RouteKey, to: Locale): string => `/${to}${segments[route]}`;

/** Código para Open Graph y `hreflang`. */
export const localeTags: Record<Locale, { og: string; hreflang: string; label: string }> = {
  es: { og: "es_BO", hreflang: "es", label: "Español" },
  en: { og: "en_US", hreflang: "en", label: "English" },
};
