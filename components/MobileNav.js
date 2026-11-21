"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, GridIcon, ImageIcon, MailIcon, WhatsAppIcon } from "./Icons";

// App-style bottom tab bar for phones / the installed PWA. Hidden on desktop.
export default function MobileNav({ lang, t, wa }) {
  const pathname = usePathname() || `/${lang}`;
  const active = (p) => (p === "" ? pathname === `/${lang}` : pathname.startsWith(`/${lang}${p}`));

  const tab = (p, label, Icon) => {
    const on = active(p);
    return (
      <Link
        key={p}
        href={`/${lang}${p}`}
        aria-current={on ? "page" : undefined}
        className={`relative flex flex-col items-center justify-center gap-1 pt-2.5 text-[0.7rem] font-bold transition active:scale-95 ${
          on ? "text-ice" : "text-white/60"
        }`}
      >
        <span className={`absolute top-0 h-0.5 w-8 rounded-full bg-ice transition-opacity ${on ? "opacity-100" : "opacity-0"}`} />
        <Icon width={23} height={23} />
        <span className="leading-none">{label}</span>
      </Link>
    );
  };

  return (
    <nav
      aria-label="App"
      className="fixed inset-x-0 bottom-0 z-40 rounded-t-3xl border-t border-white/10 bg-ink/95 shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid h-[4.1rem] grid-cols-5">
        {tab("", t.nav.home, HomeIcon)}
        {tab("/services", t.nav.services, GridIcon)}
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.whatsapp}
          className="relative flex flex-col items-center justify-end pb-2 text-[0.7rem] font-bold text-wa"
        >
          <span className="wa-pulse absolute -top-6 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-xl ring-4 ring-ink transition active:scale-90">
            <WhatsAppIcon width={28} height={28} />
          </span>
          <span className="leading-none">{t.whatsapp}</span>
        </a>
        {tab("/gallery", t.nav.gallery, ImageIcon)}
        {tab("/contact", t.nav.contact, MailIcon)}
      </div>
    </nav>
  );
}
