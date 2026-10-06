import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowUpRight } from "@/components/ui/icons";
import { Pixels } from "@/components/ui/Pixels";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Document = Dictionary["legal"]["privacy"];

const anchor = (index: number) => `s${index + 1}`;

/** Página legal (privacidad o términos): índice a un lado y el texto en una columna legible. */
export function LegalPage({ locale, dict, document }: { locale: Locale; dict: Dictionary; document: Document }) {
  const { legal } = dict;

  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <header className="grain relative isolate overflow-hidden bg-blue text-paper">
        <Pixels className="absolute bottom-0 right-0 -z-10" size="clamp(1rem, 2vw, 2rem)" rows={["..o", ".#o", "y#."]} />
        <div className="shell pb-14 pt-32 md:pb-20 md:pt-40">
          <p className="label flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-sun" aria-hidden="true" />
              {dict.footer.legal}
            </span>
            <span>
              {legal.updated}: {legal.updatedDate}
            </span>
          </p>
          <h1 className="display legal-title mt-6">{document.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-snug md:text-xl">{document.intro}</p>
        </div>
      </header>

      <div className="bg-paper text-ink">
        <div className="shell grid gap-12 py-16 md:grid-cols-[16rem_1fr] md:py-24">
          <nav aria-label={legal.index} className="legal-index">
            <h2 className="label opacity-60">{legal.index}</h2>
            <ol>
              {document.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#${anchor(index)}`}>
                    <span className="label">{String(index + 1).padStart(2, "0")}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
            <Link href={href("home", locale)} className="btn btn-ink mt-8">
              {legal.back}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>

          <article className="legal-body">
            {document.sections.map((section, index) => (
              <section key={section.title} id={anchor(index)}>
                <h2>
                  <span className="label">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.after?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </ViewTransition>
  );
}
