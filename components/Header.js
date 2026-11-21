"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import Logo from "./LogoAF";
import { LOCALES, langNames } from "@/lib/i18n";

export default function Header({ lang, t, brand, phone, wa }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${lang}`;
  const switchTo = (l) => pathname.replace(/^\/(ar|en|ur)/, `/${l}`);

  const links = [
    ["", t.nav.home],
    ["/services", t.nav.services],
    ["/areas", t.nav.areas],
    ["/gallery", t.nav.gallery],
    ["/contact", t.nav.contact],
  ];

  const isActive = (p) => {
    const full = `/${lang}${p}`;
    return p === "" ? pathname === full : pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <Link href={`/${lang}`} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo size={54} id="jaf-h" />
          <span className="flex flex-col leading-none">
            <span className="text-[1.4rem] font-extrabold tracking-wide text-white sm:text-[1.55rem]">{brand.split(" ")[0]}</span>
            <span className="mt-1.5 text-[0.8rem] font-bold uppercase tracking-[0.24em] text-ice sm:text-[0.9rem] sm:tracking-[0.28em]">{brand.split(" ").slice(1).join(" ")}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map(([p, label]) => (
            <Link
              key={p}
              href={`/${lang}${p}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive(p) ? "bg-white/10 text-ice" : "text-white/75 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-white/20 p-0.5 sm:flex" role="group" aria-label="Language">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={switchTo(l)}
                hrefLang={l}
                lang={l}
                aria-current={l === lang ? "true" : undefined}
                className={`rounded-full px-2.5 py-1 text-xs font-bold transition sm:px-3 sm:text-sm ${
                  l === lang ? "bg-ice text-ink" : "text-white/80 hover:text-white"
                }`}
              >
                {langNames[l]}
              </Link>
            ))}
          </div>
          <a href={phone} className="btn btn-call !px-4 !py-2 !text-sm max-sm:!hidden">
            <PhoneIcon width={16} height={16} />
            {t.call}
          </a>
          <a
            href={phone}
            aria-label={t.call}
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-ice to-sky text-ink shadow-lg shadow-sky/30 transition active:scale-90 sm:hidden"
          >
            <PhoneIcon width={19} height={19} />
          </a>
          <button
            type="button"
            aria-label={t.menu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition active:scale-90 lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
            <div className="mb-2 grid grid-cols-3 gap-2 sm:hidden" role="group" aria-label="Language">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={switchTo(l)}
                  hrefLang={l}
                  lang={l}
                  onClick={() => setOpen(false)}
                  aria-current={l === lang ? "true" : undefined}
                  className={`rounded-xl py-2.5 text-center text-sm font-bold ${l === lang ? "bg-ice text-ink" : "bg-white/10 text-white/85"}`}
                >
                  {langNames[l]}
                </Link>
              ))}
            </div>
            {links.map(([p, label]) => (
              <Link
                key={p}
                href={`/${lang}${p}`}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3.5 text-base font-semibold active:bg-white/10 ${
                  isActive(p) ? "bg-white/10 text-ice" : "text-white/80"
                }`}
              >
                {label}
              </Link>
            ))}
            <a href={wa} className="btn btn-wa mt-2">
              <WhatsAppIcon width={20} height={20} />
              {t.whatsapp}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
