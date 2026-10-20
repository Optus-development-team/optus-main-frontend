import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { LinksPage } from "@/components/sections/LinksPage";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { alternates } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/links">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { links } = await getDictionary(lang);
  return { title: links.title, description: links.desc, alternates: alternates("links", lang) };
}

export default async function Page({ params }: PageProps<"/[lang]/links">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <LinksPage locale={lang} dict={dict} />
    </ViewTransition>
  );
}
