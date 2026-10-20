import Link from "next/link";
import { OptusMark } from "@/components/brand/Logo";
import { ArrowUpRight, WhatsappIcon, socialIcons } from "@/components/ui/icons";
import { Pixels } from "@/components/ui/Pixels";
import { Reveal } from "@/components/ui/Reveal";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

type Row = { label: string; value: string; url: string; external?: boolean; icon?: React.ReactNode };

function Group({ title, index, rows }: { title: string; index: number; rows: Row[] }) {
  return (
    <div className="mt-14 first:mt-0 md:mt-20">
      <p className="section-label">
        <span>[ {String(index).padStart(2, "0")} ]</span>
        {title}
      </p>
      <ul className="contact-rows mt-6">
        {rows.map((row, i) => (
          <Reveal as="li" key={`${row.label}-${row.url}`} delay={i * 60}>
            <a
              href={row.url}
              {...(row.external === false ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="contact-row"
            >
              <span className="label">{row.label}</span>
              <span className="contact-value">{row.value}</span>
              <span className="tile tile-lg" aria-hidden="true">
                {row.icon ?? <ArrowUpRight className="h-4 w-4" />}
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/** Página de enlaces estilo linktree: todo lo público de Optus en bloques de una sola columna. */
export function LinksPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { links, contact, team, awards } = dict;

  const products: Row[] = Object.values(site.products).map((p) => ({
    label: links.visit,
    value: p.name,
    url: p.url,
  }));

  const contactRows: Row[] = [
    { label: contact.email, value: site.email, url: `mailto:${site.email}`, external: false },
    {
      label: contact.whatsapp,
      value: site.whatsappDisplay,
      url: site.whatsappUrl,
      icon: <WhatsappIcon className="h-4 w-4" />,
    },
  ];

  const socialRows: Row[] = site.social.map((n) => {
    const Icon = socialIcons[n.icon];
    return { label: n.name, value: n.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), url: n.url, icon: <Icon className="h-4 w-4" /> };
  });

  const teamRows: Row[] = site.team.map((m) => ({
    label: team.roles[m.id as keyof typeof team.roles],
    value: m.name,
    url: m.social.linkedin,
    icon: <socialIcons.linkedin className="h-4 w-4" />,
  }));

  const awardRows: Row[] = (Object.keys(site.awards) as (keyof typeof site.awards)[]).map((key) => ({
    label: awards.items[key].badge,
    value: awards.items[key].title,
    url: site.awards[key],
  }));

  const legalRows: Row[] = [
    { label: dict.footer.legal, value: dict.footer.privacy, url: href("privacy", locale), external: false },
    { label: dict.footer.legal, value: dict.footer.terms, url: href("terms", locale), external: false },
  ];

  const groups = [
    { title: links.products, rows: products },
    { title: links.contact, rows: contactRows },
    { title: links.social, rows: socialRows },
    { title: links.team, rows: teamRows },
    { title: links.awards, rows: awardRows },
    { title: links.legal, rows: legalRows },
  ];

  return (
    <>
      <header className="grain relative isolate overflow-hidden bg-blue text-paper">
        <Pixels className="absolute bottom-0 right-0 -z-10" size="clamp(1rem, 2vw, 2rem)" rows={["..o", ".#o", "y#."]} />
        <div className="shell pb-14 pt-32 md:pb-20 md:pt-40">
          <OptusMark className="h-14 w-auto" />
          <h1 className="display legal-title mt-8">{links.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-snug md:text-xl">{links.lead}</p>
          <Link href={href("home", locale)} className="btn mt-8">
            {dict.legal.back}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <section className="grain relative bg-ink text-paper">
        <div className="shell py-16 md:py-24">
          {groups.map((group, i) => (
            <Group key={group.title} index={i + 1} title={group.title} rows={group.rows} />
          ))}
        </div>
      </section>
    </>
  );
}
