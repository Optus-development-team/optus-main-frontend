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
    cides: "https://linkedin.com/company/cide-umsa-incubadora-de-empresas/",
    incuba: "https://emprenderfuturo.org/incuba-union-2026/",
    deiu: "https://www.facebook.com/profile.php?id=61589035136753",
  },
  team: [
    {
      id: "saul",
      name: "Saúl Choquehuanca",
      image: "/img/Sau_lChoquehuanca.jpeg",
      qr: "/img/in_qr_saul.png",
      social: {
        linkedin: "https://www.linkedin.com/in/saul-choquehuanca",
        github: "https://github.com/SaulChoque",
        instagram: "https://www.instagram.com/baulchop/",
      },
    },
    {
      id: "franco",
      name: "Franco Ayala",
      image: "/img/Franco_Ayala.png",
      qr: "/img/in_qr_franco.png",
      social: {
        linkedin: "https://www.linkedin.com/in/franco-ayala-a6ba0a250/",
        github: "https://github.com/Franci-343",
        instagram: "https://www.instagram.com/franco_jdk/",
      },
    },
    {
      id: "fabricio",
      name: "Fabricio Echeverría",
      image: "/img/Fabricio_Echeverria.jpeg",
      qr: "/img/in_qr_frabricio.png",
      social: {
        linkedin: "https://www.linkedin.com/in/fabricio-oliver-539248186",
        github: "https://github.com/Fabri-404",
        instagram: "https://www.instagram.com/afk.fabri/",
      },
    },
    {
      id: "erick",
      name: "Erick Poma",
      image: "/img/Erick_Poma.png",
      qr: "/img/in_qr_erick.png",
      social: {
        linkedin: "https://www.linkedin.com/in/erick-poma-9108341b8",
        github: "https://github.com/as7haro7",
        instagram: "https://www.instagram.com/as7haro7/",
      },
    },
  ],
} as const;

export type SocialIcon = (typeof site.social)[number]["icon"];
export type ProductKey = keyof typeof site.products;
export type AwardKey = keyof typeof site.awards;
export type TeamKey = (typeof site.team)[number]["id"];

/** URL absoluta de una ruta del sitio. */
export const absoluteUrl = (path = "/"): string =>
  `${site.url}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
