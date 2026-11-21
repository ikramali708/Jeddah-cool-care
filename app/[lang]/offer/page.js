// Landing page for Snapchat ads: one message, one goal, two buttons.
// Use this link in the ad:  https://YOUR-DOMAIN/ar/offer
import { notFound } from "next/navigation";
import { ui, hasLocale, pick } from "@/lib/i18n";
import { services, waLink, telLink } from "@/lib/site";
import { Snowfall, CheckList } from "@/components/Parts";
import { PhoneIcon, WhatsAppIcon, ServiceIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = ui[lang].offer;
  return {
    ...buildMetadata({ lang, path: "/offer", title: t.title, description: t.subtitle }),
    robots: { index: false, follow: true }, // ad page: keep it out of Google results
  };
}

export default async function OfferPage({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  const wa = waLink(pick(lang, { ar: "السلام عليكم، أريد الاستفادة من عرض الكشف المجاني", en: "Hello, I would like the free inspection offer", ur: "السلام علیکم، مجھے مفت معائنہ آفر چاہیے" }));

  return (
    <section className="hero-bg relative min-h-[calc(100vh-4rem)] overflow-hidden text-white">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <Snowfall />
      <div className="container-x relative mx-auto max-w-2xl py-14 text-center">
        <span className="rise inline-block rounded-full bg-gradient-to-r from-ice to-sky px-5 py-1.5 text-sm font-extrabold text-ink">
          {t.offer.badge}
        </span>
        <h1 className="rise-2 mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">{t.offer.title}</h1>
        <p className="rise-3 mt-4 text-lg text-white/75">{t.offer.subtitle}</p>

        <div className="rise-3 mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa !py-4 text-base">
            <WhatsAppIcon width={22} height={22} />
            {t.whatsapp}
          </a>
          <a href={telLink} className="btn btn-call !py-4 text-base">
            <PhoneIcon width={20} height={20} />
            {t.call}
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-sm text-start">
          <CheckList items={t.offer.bullets} light />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {services.slice(0, 5).map((s) => (
            <div key={s.slug} className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-start text-sm font-semibold backdrop-blur">
              <ServiceIcon name={s.icon} width={20} height={20} className="shrink-0 text-ice" />
              {s[lang].title.replace(/ in Jeddah| في جدة/, "")}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
