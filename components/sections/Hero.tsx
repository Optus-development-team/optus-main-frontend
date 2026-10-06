import { OptusMark } from "@/components/brand/Logo";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { ArrowDown, ArrowUpRight } from "@/components/ui/icons";
import { LocalTime } from "@/components/ui/LocalTime";
import { Pixels } from "@/components/ui/Pixels";
import type { Dictionary } from "@/i18n/dictionaries";

/** Portada: el titular a todo lo ancho sobre azul y la marca en 3D. */
export function Hero({ dict }: { dict: Dictionary }) {
  const { hero, nav } = dict;
  const [products, , , contact] = nav.items;

  return (
    <section className="hero grain relative isolate flex flex-col overflow-hidden bg-blue text-paper">
      <HeroCanvas className="absolute inset-0" />

      <Pixels
        className="absolute right-0 top-[4.75rem] max-md:hidden"
        size="clamp(1.4rem, 2.6vw, 2.6rem)"
        rows={["..y#", ".o.#", "..oy"]}
      />
      <Pixels className="absolute bottom-0 left-0" size="clamp(1rem, 1.8vw, 1.8rem)" rows={["#.", "#y", "o#"]} />

      <div className="shell flex flex-1 flex-col pb-8 pt-28 md:pb-10 md:pt-32">
        <div className="label flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="hero-enter flex items-center gap-2">
            <span className="h-2 w-2 bg-sun" aria-hidden="true" />
            {hero.eyebrow}
          </span>
          <span className="hero-enter hidden items-center gap-2 [--enter:120ms] sm:flex">
            {hero.localTime}
            <LocalTime className="bg-paper px-1.5 py-0.5 text-blue" />
          </span>
          <span className="hero-enter badge hidden [--enter:240ms] lg:inline-flex">{hero.badge}</span>
        </div>

        {/* El hueco de la marca: en 2D hasta que carga WebGL (o si no lo hay); después la
            escena coloca aquí la versión en 3D. */}
        <div className="hero-stage" data-hero-stage>
          <OptusMark className="hero-fallback" />
        </div>

        <div>
          <h1 className="display hero-title">
            {hero.title.map((line, index) => (
              <span key={line} className="hero-line">
                <span style={{ animationDelay: `${180 + index * 130}ms` }}>{line}</span>
              </span>
            ))}
          </h1>

          <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end">
            <p className="hero-enter text-lg leading-snug [--enter:520ms] md:text-xl">{hero.lead}</p>
            <div className="hero-enter flex flex-wrap items-center gap-3 [--enter:640ms] md:justify-end">
              <a href={`#${products.id}`} className="btn btn-paper">
                {hero.ctaPrimary}
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href={`#${contact.id}`} className="btn btn-outline">
                {hero.ctaSecondary}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
