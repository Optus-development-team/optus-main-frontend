/**
 * Datos públicos de Optus y de sus marcas. Los textos traducibles viven en i18n/dictionaries.
 */
const trim = (url: string): string => url.replace(/\/+$/, "");

const whatsappNumber = "59177379190";

export const site = {
  name: "Optus",
  /** URL pública del sitio, sin barra final. */
  url: trim(process.env.NEXT_PUBLIC_SITE_URL || "https://optus.lat"),
  email: "optus.aut@gmail.com",
  whatsappNumber,
  whatsappDisplay: `+591 ${whatsappNumber.slice(3)}`,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  twitterHandle: "@OptusAut",
  social: [
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/optusaut/" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/optusteam" },
    { name: "X", icon: "x", url: "https://x.com/OptusAut" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/company/optus-aut/" },
    { name: "GitHub", icon: "github", url: "https://github.com/Optus-development-team" },
  ],
  products: {
    optipagos: {
      name: "Optipagos",
      url: "https://optipagos.optus.lat",
      domain: "optipagos.optus.lat",
      tech: [
        "WhatsApp Cloud API",
        "Passkeys · WebAuthn",
        "USDC",
        "Avalanche",
        "Stellar",
        "NestJS",
        "Next.js",
        "PostgreSQL",
      ],
    },
    optimype: {
      name: "Optimype",
      url: "https://optimype.optus.lat",
      domain: "optimype.optus.lat",
      tech: [
        "WhatsApp Cloud API",
        "Google ADK · Gemini",
        "x402",
        "Avalanche",
        "NestJS",
        "Supabase",
        "React",
      ],
    },
  },
  awards: {
    hack2build: "https://build.avax.network/hackathons/5ce3a8c2-21db-40fa-b40f-f82ecdde99db",
    cides: "https://www.cides.edu.bo/",
    incuba: "https://emprenderfuturo.org/incuba-union-2026/",
  },
} as const;

export type SocialIcon = (typeof site.social)[number]["icon"];
export type ProductKey = keyof typeof site.products;
export type AwardKey = keyof typeof site.awards;

/** URL absoluta de una ruta del sitio. */
export const absoluteUrl = (path = "/"): string =>
  `${site.url}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
