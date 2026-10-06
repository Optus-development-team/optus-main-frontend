import Image, { type StaticImageData } from "next/image";
import cides from "@/assets/awards/cides-umsa.png";
import hack2build from "@/assets/awards/hack2build-payments-x402.jpg";
import incuba from "@/assets/awards/incuba-union-tecnologico-3.png";
import { Bars } from "@/components/ui/Bars";
import { ArrowUpRight } from "@/components/ui/icons";
import { PixelEdge } from "@/components/ui/Pixels";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/i18n/dictionaries";
import { site, type AwardKey } from "@/lib/site";

/** Imagen de cada reconocimiento. `cover` llena el marco; los logotipos van centrados sobre papel. */
const media: Record<AwardKey, { image: StaticImageData; fit: "cover" | "contain" }> = {
  hack2build: { image: hack2build, fit: "cover" },
  cides: { image: cides, fit: "contain" },
  incuba: { image: incuba, fit: "contain" },
};

/** Reconocimientos: premios y programas, sobre las barras de luz. */
export function Awards({ dict, id }: { dict: Dictionary; id: string }) {
  const { awards } = dict;
  const keys = Object.keys(site.awards) as AwardKey[];

  return (
    <section id={id} className="relative isolate scroll-mt-20 overflow-hidden bg-blue-deep text-paper">
      <Bars className="absolute inset-0 -z-10" />
      <div className="shell pb-[calc(6rem+9.4vw)] pt-24 md:pb-[calc(7rem+9.4vw)] md:pt-36">
        <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
          <p className="section-label">
            <span>[ 02 ]</span>
            {awards.label}
          </p>
          <div>
            <Reveal effect="wipe">
              <h2 className="display section-title">
                {awards.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-snug text-paper/85 md:text-xl">{awards.lead}</p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-3">
          {keys.map((key, index) => {
            const text = awards.items[key];
            const { image, fit } = media[key];
            return (
              <Reveal as="li" key={key} delay={index * 110} className="award">
                <div className="award-media" data-fit={fit}>
                  <Image
                    src={image}
                    alt={text.alt}
                    sizes="(min-width: 1024px) 30vw, 92vw"
                    placeholder={fit === "cover" ? "blur" : "empty"}
                  />
                  <span className="award-badge">{text.badge}</span>
                </div>
                <div className="award-body">
                  <p className="label flex items-center justify-between gap-4 text-ink/60">
                    <span>{text.org}</span>
                    <span>{text.year}</span>
                  </p>
                  <h3 className="award-title">{text.title}</h3>
                  <p className="mt-3 leading-snug text-ink/75">{text.description}</p>
                  <a href={site.awards[key]} target="_blank" rel="noopener noreferrer" className="award-link">
                    {awards.more}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
      <PixelEdge color="var(--color-paper)" />
    </section>
  );
}
