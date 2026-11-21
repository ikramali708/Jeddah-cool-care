import Link from "next/link";
import { notFound } from "next/navigation";
import { ui, hasLocale, LOCALES, pick } from "@/lib/i18n";
import { areas, services, site, waLink, telLink } from "@/lib/site";
import { areaCopy } from "@/lib/areaContent";
import { PageHero, CheckList, Faq } from "@/components/Parts";
import { PhoneIcon, WhatsAppIcon, PinIcon, ServiceIcon, ArrowIcon } from "@/components/Icons";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => areas.map((a) => ({ lang, slug: a.slug })));
}

const find = (slug) => areas.find((a) => a.slug === slug);

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const area = find(slug);
  if (!hasLocale(lang) || !area) return {};
  const c = areaCopy(lang, area[lang]);
  return buildMetadata({ lang, path: `/areas/${slug}`, title: c.metaTitle, description: c.metaDesc });
}

export default async function AreaPage({ params }) {
  const { lang, slug } = await params;
  const area = find(slug);
  if (!hasLocale(lang) || !area) notFound();
  const t = ui[lang];
  const name = area[lang];
  const c = areaCopy(lang, name);
  const wa = waLink(c.wa);
  const city = pick(lang, { ar: "جدة", en: "Jeddah", ur: "جدہ" });

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.h1,
    serviceType: pick(lang, { ar: "صيانة مكيفات وأجهزة منزلية", en: "AC and home appliance repair", ur: "اے سی اور گھریلو آلات کی مرمت" }),
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "Place", name: `${name}, ${city}` },
    url: `${site.url}/${lang}/areas/${slug}`,
  };
  const crumbs = breadcrumbJsonLd(lang, [
    { name: t.nav.home, path: "" },
    { name: c.crumbAreas, path: "/areas" },
    { name, path: `/areas/${slug}` },
  ]);

  return (
    <>
      <PageHero title={c.h1} subtitle={c.sub}>
        <div className="flex flex-wrap gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WhatsAppIcon width={20} height={20} />
            {t.getQuote}
          </a>
          <a href={telLink} className="btn btn-ghost">
            <PhoneIcon width={18} height={18} />
            {t.call}
          </a>
        </div>
      </PageHero>

      <section className="py-10 sm:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-lg leading-relaxed text-slate-700">{c.intro}</p>

            <h2 className="mb-5 mt-10 text-2xl font-extrabold">{c.servicesTitle}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${lang}/services/${s.slug}`}
                  className="card card-hover flex items-center gap-3 p-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-ice/25 to-sky/25 text-sky">
                    <ServiceIcon name={s.icon} width={22} height={22} />
                  </span>
                  <span className="flex-1 text-sm font-bold">{s[lang].title}</span>
                  <ArrowIcon width={16} height={16} className="text-sky rtl:rotate-180" />
                </Link>
              ))}
            </div>

            <h2 className="mb-5 mt-12 text-2xl font-extrabold">{c.whyTitle}</h2>
            <CheckList items={c.why} />

            <h2 className="mb-5 mt-12 text-2xl font-extrabold">{c.faqTitle}</h2>
            <Faq items={c.faqs} />

            <h2 className="mb-5 mt-12 text-2xl font-extrabold">{c.nearby}</h2>
            <div className="flex flex-wrap gap-2.5">
              {areas
                .filter((a) => a.slug !== slug)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/${lang}/areas/${a.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold transition hover:border-ice hover:text-sky"
                  >
                    <PinIcon width={14} height={14} className="text-sky" />
                    {a[lang]}
                  </Link>
                ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white">
              <h3 className="text-xl font-extrabold">{t.cta.title}</h3>
              <p className="mt-2 text-sm text-white/70">{t.cta.subtitle}</p>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-5 w-full">
                <WhatsAppIcon width={20} height={20} />
                {t.whatsapp}
              </a>
              <a href={telLink} className="btn btn-call mt-3 w-full">
                <PhoneIcon width={18} height={18} />
                {t.call}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}
