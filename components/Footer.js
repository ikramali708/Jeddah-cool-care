import Link from "next/link";
import Logo from "./LogoAF";
import { PhoneIcon, WhatsAppIcon, PinIcon, ClockIcon, SnapIcon, InstaIcon } from "./Icons";
import { site, displayPhone, waLink, services } from "@/lib/site";

export default function Footer({ lang, t }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pb-24 pt-16 text-white/75 lg:pb-10">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Logo size={46} id="jaf-f" />
            <span className="text-lg font-extrabold text-white">{site.name[lang]}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed">{t.footer.about}</p>
          <div className="mt-5 flex gap-3">
            {site.social.snapchat && (
              <a href={site.social.snapchat} target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-ice hover:text-ink">
                <SnapIcon width={20} height={20} />
              </a>
            )}
            {site.social.instagram && (
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-ice hover:text-ink">
                <InstaIcon width={20} height={20} />
              </a>
            )}
            <a href={waLink(t.messages.generic)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-wa hover:text-ink">
              <WhatsAppIcon width={20} height={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t.nav.services}</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${lang}/services/${s.slug}`} className="transition hover:text-ice">
                  {s[lang].title.replace(/ in Jeddah| في جدة/, "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t.footer.contact}</h3>
          <ul className="space-y-3 text-sm">
            {site.phones.map((n) => (
              <li key={n} className="flex items-center gap-2.5">
                <PhoneIcon width={18} height={18} className="text-ice" />
                <a href={`tel:${n}`} dir="ltr" className="hover:text-ice">{displayPhone(n)}</a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <PinIcon width={18} height={18} className="text-ice" />
              {site.address[lang]}
            </li>
            <li className="flex items-center gap-2.5">
              <ClockIcon width={18} height={18} className="text-ice" />
              {site.hours[lang]}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
        © {year} {site.name[lang]}. {t.footer.rights}
      </div>
    </footer>
  );
}
