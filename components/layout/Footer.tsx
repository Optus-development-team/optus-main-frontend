import Link from "next/link";
import { OptusMark, OptusWordmark } from "@/components/brand/Logo";
import { ArrowUpRight } from "@/components/ui/icons";
import { socialIcons } from "@/components/ui/icons";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

/** Pie: el nombre a todo lo ancho, los enlaces y la parte legal. */
export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = href("home", locale);
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-blue text-paper">
      <div className="shell relative pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <OptusMark className="h-12 w-auto" />
            <p className="mt-6 max-w-[22ch] text-2xl font-semibold leading-tight tracking-tight">
              {dict.footer.tagline}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {site.social.map((network) => {
                const Icon = socialIcons[network.icon];
                return (
                  <li key={network.name}>
                    <a
                      href={network.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tile tile-lg"
                      aria-label={dict.contact.socialAria.replace("{name}", network.name)}
                      title={network.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label={dict.footer.products}>
            <h2 className="label opacity-70">{dict.footer.products}</h2>
            <ul className="footer-links">
              {Object.values(site.products).map((product) => (
                <li key={product.name}>
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    {product.name}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.company}>
            <h2 className="label opacity-70">{dict.footer.company}</h2>
            <ul className="footer-links">
              {dict.nav.items.map((item) => (
                <li key={item.id}>
                  <Link href={`${home}#${item.id}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.legal}>
            <h2 className="label opacity-70">{dict.footer.legal}</h2>
            <ul className="footer-links">
              <li>
                <Link href={href("privacy", locale)}>{dict.footer.privacy}</Link>
              </li>
              <li>
                <Link href={href("terms", locale)}>{dict.footer.terms}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <OptusWordmark className="footer-wordmark" />

        <div className="label flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-paper/25 py-6">
          <p>
            © {year} {site.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
