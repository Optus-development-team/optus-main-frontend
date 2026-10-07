import Image from "next/image";
import { ArrowUpRight, socialIcons } from "@/components/ui/icons";
import { PixelEdge } from "@/components/ui/Pixels";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

/** Quiénes somos: equipo detrás de la empresa */
export function Team({ dict, id }: { dict: Dictionary; id: string }) {
  const { team } = dict;

  return (
    <section id={id} className="relative isolate scroll-mt-20 overflow-hidden bg-paper text-ink">
      <div className="shell pb-[calc(6rem+9.4vw)] pt-24 md:pb-[calc(7rem+9.4vw)] md:pt-36">
        <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
          <p className="section-label">
            <span>[ 04 ]</span>
            {team.label}
          </p>
          <div>
            <Reveal effect="wipe">
              <h2 className="display section-title">
                {team.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-snug text-ink/80 md:text-xl">{team.lead}</p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {site.team.map((member, index) => {
            const role = team.roles[member.id as keyof typeof team.roles];
            return (
              <Reveal as="li" key={member.id} delay={index * 110} className="group relative flex flex-col">
                <div className="relative mb-5 aspect-square w-full max-w-[280px] overflow-hidden bg-bone">
                  <Image
                    src={member.image}
                    alt={`Fotografía de ${member.name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="display text-xl font-bold uppercase tracking-tight text-ink">{member.name}</h3>
                <p className="label mt-1 text-ink/60">{role}</p>
                <div className="mt-4 flex items-center gap-2">
                  {"linkedin" in member.social && member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink/75 transition-all hover:border-ink hover:bg-ink hover:text-paper"
                      aria-label={`${member.name} en LinkedIn`}
                      title="LinkedIn"
                    >
                      <socialIcons.linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {"github" in member.social && member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink/75 transition-all hover:border-ink hover:bg-ink hover:text-paper"
                      aria-label={`${member.name} en GitHub`}
                      title="GitHub"
                    >
                      <socialIcons.github className="h-4 w-4" />
                    </a>
                  )}
                  {"instagram" in member.social && member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink/75 transition-all hover:border-ink hover:bg-ink hover:text-paper"
                      aria-label={`${member.name} en Instagram`}
                      title="Instagram"
                    >
                      <socialIcons.instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
      <PixelEdge color="var(--color-ink)" />
    </section>
  );
}
