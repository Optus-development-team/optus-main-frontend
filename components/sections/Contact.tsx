import { ArrowUpRight, WhatsappIcon, socialIcons } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

/** Contacto: correo, WhatsApp, ubicación y redes. */
export function Contact({ dict, id }: { dict: Dictionary; id: string }) {
  const { contact } = dict;

  return (
    <section id={id} className="grain relative scroll-mt-20 bg-ink text-paper">
      <div className="shell py-24 md:py-36">
        <p className="section-label">
          <span>[ 05 ]</span>
          {contact.label}
        </p>

        <Reveal effect="wipe" className="mt-8">
          <h2 className="display contact-title">{contact.title}</h2>
        </Reveal>
        <Reveal delay={120} className="mt-8 md:ml-auto md:max-w-xl">
          <p className="text-xl leading-snug text-paper/80 md:text-2xl">{contact.lead}</p>
        </Reveal>

        <ul className="contact-rows mt-14 md:mt-20">
          <Reveal as="li">
            <a href={`mailto:${site.email}`} className="contact-row">
              <span className="label">{contact.email}</span>
              <span className="contact-value">{site.email}</span>
              <span className="tile tile-lg" aria-hidden="true">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
          <Reveal as="li" delay={70}>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-row">
              <span className="label">{contact.whatsapp}</span>
              <span className="contact-value">{site.whatsappDisplay}</span>
              <span className="tile tile-lg" aria-hidden="true">
                <WhatsappIcon className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
          <Reveal as="li" delay={140}>
            <div className="contact-row">
              <span className="label">{contact.location}</span>
              <span className="contact-value">{contact.locationValue}</span>
              <span className="label opacity-60">{contact.coordinates}</span>
            </div>
          </Reveal>
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <h3 className="label opacity-70">{contact.social}</h3>
          <ul className="flex flex-wrap gap-2">
            {site.social.map((network) => {
              const Icon = socialIcons[network.icon];
              return (
                <li key={network.name}>
                  <a
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tile tile-xl"
                    aria-label={contact.socialAria.replace("{name}", network.name)}
                    title={network.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
