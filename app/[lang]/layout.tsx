import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { BrandSprite } from "@/components/brand/Logo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { href, isLocale, localeTags, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { absoluteUrl, site } from "@/lib/site";
import "../globals.css";

// Archivo cubre títulos (ancha y pesada, como los carteles de assets/inspo) y texto; el
// logotipo no depende de ninguna fuente: «OPTUS» va trazado (components/brand).
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.title, template: `%s · ${site.name}` },
    description: dict.meta.description,
    applicationName: site.name,
    keywords: dict.meta.keywords,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    category: "technology",
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: localeTags[lang].og,
      alternateLocale: locales.filter((other) => other !== lang).map((other) => localeTags[other].og),
      title: dict.meta.title,
      description: dict.meta.description,
      url: href("home", lang),
      images: [{ url: `/og/${lang}.png`, width: 1200, height: 630, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      site: site.twitterHandle,
      creator: site.twitterHandle,
      images: [`/og/${lang}.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    formatDetection: { telephone: false, address: false, email: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c33e5",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={localeTags[lang].hreflang}
      className={`${archivo.variable} ${mono.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a href="#contenido" className="skip-link">
          {dict.nav.skip}
        </a>
        <BrandSprite />
        <Header locale={lang} homeHref={href("home", lang)} nav={dict.nav} />
        <main id="contenido">{children}</main>
        <Footer locale={lang} dict={dict} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: absoluteUrl("/icon.svg"),
            description: dict.meta.description,
            email: site.email,
            address: { "@type": "PostalAddress", addressLocality: "La Paz", addressCountry: "BO" },
            sameAs: site.social.map((network) => network.url),
            brand: Object.values(site.products).map((product) => ({
              "@type": "Brand",
              name: product.name,
              url: product.url,
            })),
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: site.email,
              telephone: `+${site.whatsappNumber}`,
              availableLanguage: ["es", "en"],
            },
          }}
        />
      </body>
    </html>
  );
}
