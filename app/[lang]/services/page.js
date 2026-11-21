import { notFound } from "next/navigation";
import { ui, hasLocale } from "@/lib/i18n";
import { services } from "@/lib/site";
import { PageHero, ServiceCard } from "@/components/Parts";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = ui[lang].pageServices;
  return buildMetadata({ lang, path: "/services", title: t.title, description: t.subtitle });
}

export default async function ServicesPage({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  return (
    <>
      <PageHero title={t.pageServices.title} subtitle={t.pageServices.subtitle} />
      <section className="py-16">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} lang={lang} service={s} moreLabel={t.servicesSection.more} />
          ))}
        </div>
      </section>
    </>
  );
}
