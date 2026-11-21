import { notFound } from "next/navigation";
import { ui, hasLocale } from "@/lib/i18n";
import { site, services, displayPhone, waLink } from "@/lib/site";
import { PageHero } from "@/components/Parts";
import ContactForm from "@/components/ContactForm";
import { PhoneIcon, WhatsAppIcon, PinIcon, ClockIcon, SnapIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = ui[lang].pageContact;
  return buildMetadata({ lang, path: "/contact", title: t.title, description: t.subtitle });
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  const rows = [
    ...site.phones.flatMap((n, i) => [
      { id: `call${i}`, icon: PhoneIcon, label: t.call, value: <span dir="ltr">{displayPhone(n)}</span>, href: `tel:${n}` },
      { id: `wa${i}`, icon: WhatsAppIcon, label: t.whatsapp, value: <span dir="ltr">{displayPhone(n)}</span>, href: waLink(t.messages.generic, n), ext: true },
    ]),
    ...(site.social.snapchat ? [{ icon: SnapIcon, label: "Snapchat", value: "@jeddahcoolcare", href: site.social.snapchat, ext: true }] : []),
    { icon: ClockIcon, label: t.pageContact.hours, value: site.hours[lang] },
    { icon: PinIcon, label: t.pageContact.address, value: site.address[lang], href: site.social.googleMaps || undefined, ext: true },
  ];

  return (
    <>
      <PageHero title={t.pageContact.title} subtitle={t.pageContact.subtitle} />
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm
            lang={lang}
            t={t}
            brand={site.name[lang]}
            whatsapp={site.whatsapp}
            services={services.map((s) => s[lang].title.replace(/ in Jeddah| في جدة/, ""))}
          />

          <div className="space-y-4">
            <h2 className="text-xl font-extrabold">{t.pageContact.info}</h2>
            {rows.map(({ id, icon: Icon, label, value, href, ext }) => {
              const body = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-ice/25 to-sky/25 text-sky">
                    <Icon width={22} height={22} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
                    <span className="font-bold">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a key={id || label} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="card card-hover flex items-center gap-4 p-4">
                  {body}
                </a>
              ) : (
                <div key={id || label} className="card flex items-center gap-4 p-4">
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
