import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import optimypeMark from "@/assets/brands/optimype-mark.png";
import { OptimypeWordmark, OptipagosMark, OptipagosWordmark } from "@/components/brand/Logo";
import { ArrowUpRight, Check } from "@/components/ui/icons";
import { Pixels } from "@/components/ui/Pixels";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/i18n/dictionaries";
import { site, type ProductKey } from "@/lib/site";

/**
 * Cada producto conserva su propia identidad dentro del marco de Optus: Optipagos con su
 * índigo y cáscara de huevo, Optimype con el azul marino y el cian de su sitio actual.
 */
const stages: Record<ProductKey, { style: CSSProperties; logo: ReactNode }> = {
  optipagos: {
    style: { "--stage": "#f0ead6", "--stage-ink": "#00416a", "--stage-accent": "#e9b949" } as CSSProperties,
    logo: (
      <>
        <OptipagosMark className="h-[clamp(3.5rem,7vw,6rem)] w-auto" />
        <OptipagosWordmark className="h-[clamp(2.2rem,4.6vw,4rem)] w-auto" />
      </>
    ),
  },
  optimype: {
    style: { "--stage": "#002b5b", "--stage-ink": "#ffffff", "--stage-accent": "#06b6d4" } as CSSProperties,
    logo: (
      <>
        <Image src={optimypeMark} alt="" className="h-[clamp(3.5rem,7vw,6rem)] w-auto" sizes="96px" />
        <OptimypeWordmark className="h-[clamp(2.2rem,4.6vw,4rem)] w-auto" />
      </>
    ),
  },
};

/** Los dos productos de Optus, con sus tecnologías y el enlace a cada sitio. */
export function Products({ dict, id }: { dict: Dictionary; id: string }) {
  const { products } = dict;
  const keys = Object.keys(site.products) as ProductKey[];

  return (
    <section id={id} className="grain relative scroll-mt-20 bg-ink text-paper">
      <div className="shell py-24 md:py-36">
        <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
          <p className="section-label">
            <span>[ 01 ]</span>
            {products.label}
          </p>
          <div>
            <Reveal effect="wipe">
              <h2 className="display section-title">
                {products.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-snug text-paper/75 md:text-xl">{products.lead}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20">
          {keys.map((key, index) => {
            const product = site.products[key];
            const text = products.items[key];
            return (
              <Reveal key={key} effect="scale" as="article" className="product" delay={index * 60}>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-stage"
                  style={stages[key].style}
                  aria-label={`${products.visit} ${product.domain}`}
                >
                  <span className="label product-stage-label">
                    {String(index + 1).padStart(2, "0")} / {String(keys.length).padStart(2, "0")}
                  </span>
                  <span className="product-logo">{stages[key].logo}</span>
                  <span className="product-chat" aria-hidden="true">
                    <span>{text.chat[0]}</span>
                    <span>
                      <Check className="h-3.5 w-3.5" />
                      {text.chat[1]}
                    </span>
                  </span>
                  <Pixels className="product-pixels" size="clamp(0.8rem, 1.5vw, 1.4rem)" rows={["..o", ".oo", "o.."]} />
                </a>

                <div className="product-body">
                  <p className="label text-blue-bright">{text.category}</p>
                  <h3 className="product-tagline">{text.tagline}</h3>
                  <p className="mt-4 max-w-prose text-lg leading-snug text-paper/75">{text.description}</p>
                  <ul className="mt-6 grid gap-2">
                    {text.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="tile" aria-hidden="true">
                          <Check className="h-3 w-3" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <p className="label opacity-60">{products.techLabel}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {product.tech.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn btn-paper mt-9">
                    {products.visit} {product.domain}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
