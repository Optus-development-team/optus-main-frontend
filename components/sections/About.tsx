import { Plus } from "@/components/ui/icons";
import { PixelEdge } from "@/components/ui/Pixels";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollWords } from "@/components/ui/ScrollWords";
import type { Dictionary } from "@/i18n/dictionaries";

/** Quiénes somos: la declaración que se enciende al leerla y cómo trabajamos. */
export function About({ dict, id }: { dict: Dictionary; id: string }) {
  const { about } = dict;

  return (
    <section id={id} className="grain relative scroll-mt-20 bg-paper text-ink">
      <div className="shell pb-[calc(6rem+9.4vw)] pt-24 md:pb-[calc(7rem+9.4vw)] md:pt-36">
        <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
          <p className="section-label">
            <span>[ 03 ]</span>
            {about.label}
          </p>
          <ScrollWords text={about.statement} className="statement" />
        </div>

        <div className="mt-20 grid gap-8 md:mt-28 md:grid-cols-[12rem_1fr]">
          <p className="section-label">
            <span>[ + ]</span>
            {about.principlesTitle}
          </p>
          <ol className="principles">
            {about.principles.map((principle, index) => (
              <Reveal as="li" key={principle.title} delay={index * 70} className="principle">
                <span className="label principle-index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-text">{principle.text}</p>
                <span className="tile tile-lg principle-tile" aria-hidden="true">
                  <Plus className="h-4 w-4" />
                </span>
              </Reveal>
            ))}
          </ol>
        </div>

        <dl className="stats mt-20 md:mt-28">
          {about.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} effect="wipe" className="stat">
              <dt className="label">{stat.label}</dt>
              <dd className="display">{stat.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
      <PixelEdge color="var(--color-ink)" />
    </section>
  );
}
