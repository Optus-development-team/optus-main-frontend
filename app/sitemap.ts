import type { MetadataRoute } from "next";
import { href, locales, localeTags, type RouteKey } from "@/i18n/config";
import { site } from "@/lib/site";

const routes: { route: RouteKey; priority: number }[] = [
  { route: "home", priority: 1 },
  { route: "privacy", priority: 0.3 },
  { route: "terms", priority: 0.3 },
];

const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ route, priority }) =>
    locales.map((locale) => ({
      url: absolute(href(route, locale)),
      changeFrequency: "monthly" as const,
      priority: locale === "es" ? priority : priority * 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [localeTags[code].hreflang, absolute(href(route, code))]),
        ),
      },
    })),
  );
}
