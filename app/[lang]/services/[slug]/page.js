import Link from "next/link";
import { notFound } from "next/navigation";
import { ui, hasLocale, LOCALES, pick } from "@/lib/i18n";
import { services, getService, areas, waLink, telLink, site } from "@/lib/site";
import { PageHero, CheckList, Faq, SectionHead } from "@/components/Parts";
import { PhoneIcon, WhatsAppIcon, PinIcon, ServiceIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => services.map((s) => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const s = getService(slug);
  if (!hasLocale(lang) || !s) return {};
  return buildMetadata({
    lang,
    path: `/services/${slug}`,
    title: s[lang].title,
    description: s[lang].short + " " + s[lang].intro.slice(0, 90),
  });
}

export default async function ServicePage({ params }) {
  const { lang, slug } = await params;
  const s = getService(slug);
  if (!hasLocale(lang) || !s) notFound();
  const t = ui[lang];
  const c = s[lang];
  const wa = waLink(pick(lang, { ar: `السلام عليكم، أحتاج خدمة: ${c.title}`, en: `Hello, I need: ${c.title}`, ur: `السلام علیکم، مجھے یہ خدمت چاہیے: ${c.title}` }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.title,
    description: c.intro,
    provider: { "@type": "LocalBusiness", name: site.name[lang], telephone: site.phone },
    areaServed: { "@type": "City", name: pick(lang, { ar: "جدة", en: "Jeddah", ur: "جدہ" }) },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <PageHero title={c.title} subtitle={c.short}>
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

      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-lg leading-relaxed text-slate-700">{c.intro}</p>

            <h2 className="mt-10 text-2xl font-extrabold">{t.problemOf}</h2>
            <div className="mt-5">
              <CheckList items={c.issues} />
            </div>

            <h2 className="mb-5 mt-12 text-2xl font-extrabold">{t.faqOf}</h2>
            <Faq items={c.faqs} />

            <h2 className="mb-5 mt-12 text-2xl font-extrabold">{t.areasSection.title}</h2>
            <div className="flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <span key={a.slug} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold">
                  <PinIcon width={14} height={14} className="text-sky" />
                  {a[lang]}
                </span>
              ))}
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
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

            <div className="card p-6">
              <h3 className="mb-4 font-extrabold">{t.otherServices}</h3>
              <ul className="space-y-1">
                {services
                  .filter((x) => x.slug !== slug)
                  .map((x) => (
                    <li key={x.slug}>
                      <Link href={`/${lang}/services/${x.slug}`} className="flex items-center gap-3 rounded-xl p-2.5 text-sm font-semibold transition hover:bg-snow hover:text-sky">
                        <ServiceIcon name={x.icon} width={20} height={20} className="text-sky" />
                        {x[lang].title.replace(/ in Jeddah| في جدة/, "")}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
