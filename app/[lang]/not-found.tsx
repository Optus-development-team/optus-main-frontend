import Link from "next/link";
import { lang } from "next/root-params";
import { ArrowUpRight } from "@/components/ui/icons";
import { Pixels } from "@/components/ui/Pixels";
import { defaultLocale, href, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function NotFound() {
  const current = await lang();
  const locale = isLocale(current) ? current : defaultLocale;
  const { notFound } = await getDictionary(locale);

  return (
    <section className="grain relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-blue text-paper">
      <Pixels className="absolute right-0 top-24 -z-10" size="clamp(1.4rem, 3vw, 3rem)" rows={["..y#", ".o.#", "#.oy"]} />
      <div className="shell pb-16 pt-40">
        <p className="display text-[clamp(6rem,30vw,22rem)] leading-[0.8]">{notFound.code}</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">{notFound.title}</h1>
        <p className="mt-4 max-w-md text-lg text-paper/85">{notFound.text}</p>
        <Link href={href("home", locale)} className="btn btn-paper mt-8">
          {notFound.back}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
