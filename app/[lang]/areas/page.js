import { notFound } from "next/navigation";
import { ui, hasLocale, pick } from "@/lib/i18n";
import { areas, services, waLink } from "@/lib/site";
import { PageHero } from "@/components/Parts";
import { PinIcon, WhatsAppIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = ui[lang].pageAreas;
  return buildMetadata({ lang, path: "/areas", title: t.title, description: t.subtitle });
}

export default async function AreasPage({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  const sName = pick(lang, { ar: "تصليح مكيفات وصيانة أجهزة", en: "AC & appliance repair", ur: "اے سی اور آلات کی مرمت" });

  return (
    <>
      <PageHero title={t.pageAreas.title} subtitle={t.pageAreas.subtitle} />
      <section className="py-16">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <a
                key={a.slug}
                href={waLink(pick(lang, { ar: `السلام عليكم، أحتاج فني في حي ${a.ar}`, en: `Hello, I need a technician in ${a.en}`, ur: `السلام علیکم، مجھے ${a.ur} میں ٹیکنیشن چاہیے` }))}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex items-center gap-4 p-5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ice/25 to-sky/25 text-sky">
                  <PinIcon width={24} height={24} />
                </span>
                <span className="flex-1">
                  <span className="block font-extrabold">{a[lang]}</span>
                  <span className="text-sm text-slate-500">
                    {sName} · {pick(lang, { ar: "جدة", en: "Jeddah", ur: "جدہ" })}
                  </span>
                </span>
                <WhatsAppIcon width={22} height={22} className="text-wa" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-600">{t.areasSection.subtitle}</p>
        </div>
      </section>
    </>
  );
}
