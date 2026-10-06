import type { Metadata } from "next";
import { href, locales, localeTags, type Locale, type RouteKey } from "@/i18n/config";

/** `canonical` y `hreflang` de una página: cada idioma apunta a su versión y x-default al español. */
export function alternates(route: RouteKey, locale: Locale): NonNullable<Metadata["alternates"]> {
  return {
    canonical: href(route, locale),
    languages: {
      ...Object.fromEntries(locales.map((code) => [localeTags[code].hreflang, href(route, code)])),
      "x-default": href(route, "es"),
    },
  };
}
