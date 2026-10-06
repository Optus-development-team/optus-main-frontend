"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OptusLogo } from "@/components/brand/Logo";
import { ArrowUpRight, Plus } from "@/components/ui/icons";
import type { Locale } from "@/i18n/config";
import { LangSwitch } from "./LangSwitch";

type NavText = {
  label: string;
  home: string;
  items: { id: string; label: string }[];
  cta: string;
  openMenu: string;
  closeMenu: string;
  language: string;
};

/** Barra superior fija, con el menú a pantalla completa en móviles. */
export function Header({ locale, homeHref, nav }: { locale: Locale; homeHref: string; nav: NavText }) {
  const [open, setOpen] = useState(false);
  const contact = nav.items[nav.items.length - 1];
  const anchor = (id: string) => `${homeHref}#${id}`;

  useEffect(() => {
    document.documentElement.toggleAttribute("data-menu-open", open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-bar">
        <Link href={homeHref} className="site-header-logo" aria-label={nav.home} onClick={() => setOpen(false)}>
          <OptusLogo className="h-[1.55rem] w-auto" title="Optus" />
        </Link>

        <nav aria-label={nav.label} className="site-nav">
          {nav.items.map((item) => (
            <Link key={item.id} href={anchor(item.id)} className="site-nav-link">
              {item.label}
              <span className="tile" aria-hidden="true">
                <Plus className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <LangSwitch locale={locale} label={nav.language} className="max-lg:hidden" />
          <Link href={anchor(contact.id)} className="btn btn-blue max-sm:hidden">
            {nav.cta}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="menu-toggle lg:hidden"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="menu" className="site-menu lg:hidden" data-open={open || undefined} inert={!open}>
        <nav aria-label={nav.label} className="site-menu-links">
          {nav.items.map((item, index) => (
            <Link key={item.id} href={anchor(item.id)} onClick={() => setOpen(false)}>
              <span className="label">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <LangSwitch locale={locale} label={nav.language} />
      </div>
    </header>
  );
}
