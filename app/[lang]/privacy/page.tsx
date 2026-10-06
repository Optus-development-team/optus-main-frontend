import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal/LegalPage";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { alternates } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { legal } = await getDictionary(lang);
  return {
    title: legal.privacy.title,
    description: legal.privacy.description,
    alternates: alternates("privacy", lang),
  };
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return <LegalPage locale={lang} dict={dict} document={dict.legal.privacy} />;
}
