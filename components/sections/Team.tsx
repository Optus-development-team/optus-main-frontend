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
      <div className="shell pb-[calc(5rem+6vw)] pt-16 sm:pt-24 md:pb-[calc(7rem+9.4vw)] md:pt-36">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[12rem_1fr]">
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
              <p className="mt-4 max-w-xl text-base leading-snug text-ink/80 sm:mt-6 sm:text-lg md:text-xl">
                {team.lead}
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 md:mt-20 lg:grid-cols-4 lg:gap-8">
          {site.team.map((member, index) => {
            const role = team.roles[member.id as keyof typeof team.roles];
            return (
              <Reveal
                as="li"
                key={member.id}
                delay={index * 90}
                className="group relative flex flex-col justify-between border border-ink/15 bg-white/40 p-3 transition-colors hover:border-ink/30 sm:border-0 sm:bg-transparent sm:p-0"
              >
                <div>
                  <div className="relative mb-3 aspect-square w-full overflow-hidden bg-bone sm:mb-5">
                    <Image
                      src={member.image}
                      alt={`Fotografía de ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                      className="object-cover grayscale-0 transition-all duration-500 sm:grayscale sm:group-hover:scale-105 sm:group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-ink sm:text-base lg:text-lg leading-snug">
                    {member.name}
                  </h3>
                  <p className="label mt-1 text-[0.68rem] text-ink/65 sm:text-xs leading-normal">
                    {role}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 sm:mt-4 sm:gap-2">
                  {"linkedin" in member.social && member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center border border-ink/20 text-ink/75 transition-all hover:border-ink hover:bg-ink hover:text-paper sm:h-9 sm:w-9"
                      aria-label={`${member.name} en LinkedIn`}
                      title="LinkedIn"
                    >
                      <socialIcons.linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  )}
                  {"github" in member.social && member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center border border-ink/20 text-ink/75 transition-all hover:border-ink hover:bg-ink hover:text-paper sm:h-9 sm:w-9"
                      aria-label={`${member.name} en GitHub`}
                      title="GitHub"
                    >
                      <socialIcons.github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  )}
                  {"instagram" in member.social && member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center border border-ink/20 text-ink/75 transition-all hover:border-ink hover:bg-ink hover:text-paper sm:h-9 sm:w-9"
                      aria-label={`${member.name} en Instagram`}
                      title="Instagram"
                    >
                      <socialIcons.instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
