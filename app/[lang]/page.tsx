import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Ticker } from "@/components/sections/Ticker";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { alternates } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? { alternates: alternates("home", lang) } : {};
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const [products, awards, about, contact] = dict.nav.items;

  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <Hero dict={dict} />
      <Ticker items={dict.ticker} />
      <Products dict={dict} id={products.id} />
      <Awards dict={dict} id={awards.id} />
      <About dict={dict} id={about.id} />
      <Contact dict={dict} id={contact.id} />
    </ViewTransition>
  );
}
