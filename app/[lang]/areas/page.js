import Link from "next/link";
import { notFound } from "next/navigation";
import { ui, hasLocale, pick } from "@/lib/i18n";
import { areas } from "@/lib/site";
import { PageHero } from "@/components/Parts";
import { PinIcon, ArrowIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata({
    lang,
    path: "/areas",
    title: pick(lang, {
      ar: "فني مكيفات في كل أحياء جدة | الحمراء، الروضة، أبحر، الصفا",
      en: "AC Technician in All Jeddah Areas | Al Hamra, Al Rawdah, Obhur",
      ur: "جدہ کے تمام علاقوں میں اے سی ٹیکنیشن | الحمراء، الروضہ، ابحر",
    }),
    description: pick(lang, {
      ar: "نخدم جميع أحياء جدة: الحمراء والروضة والصفا وأبحر والنسيم والسلامة والمروة والرحاب والنزهة والخالدية وغيرها. تصليح مكيفات وثلاجات وغسالات في منزلك.",
      en: "We serve every neighbourhood of Jeddah: Al Hamra, Al Rawdah, Al Safa, Obhur, Al Naseem, Al Salamah, Al Marwah, Al Rehab, Al Nuzha, Al Khalidiyah and more. AC, fridge and washer repair at home.",
      ur: "ہم جدہ کے تمام علاقوں میں خدمات دیتے ہیں: الحمراء، الروضہ، الصفا، ابحر، النسیم، السلامہ، المروہ، الرحاب، النزہہ، الخالدیہ اور دیگر۔ گھر پر اے سی، فریج اور واشنگ مشین کی مرمت۔",
    }),
  });
}

export default async function AreasPage({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  const sName = pick(lang, { ar: "تصليح مكيفات وصيانة أجهزة", en: "AC & appliance repair", ur: "اے سی اور آلات کی مرمت" });

  return (
    <>
      <PageHero title={t.pageAreas.title} subtitle={t.pageAreas.subtitle} />
      <section className="py-10 sm:py-16">
        <div className="container-x">
          <h2 className="mb-6 text-2xl font-extrabold">
            {pick(lang, { ar: "اختر حيّك في جدة", en: "Choose your neighbourhood in Jeddah", ur: "جدہ میں اپنا علاقہ چنیں" })}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <Link key={a.slug} href={`/${lang}/areas/${a.slug}`} className="card card-hover flex items-center gap-4 p-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ice/25 to-sky/25 text-sky">
                  <PinIcon width={24} height={24} />
                </span>
                <span className="flex-1">
                  <span className="block font-extrabold">{a[lang]}</span>
                  <span className="text-sm text-slate-500">
                    {sName} · {pick(lang, { ar: "جدة", en: "Jeddah", ur: "جدہ" })}
                  </span>
                </span>
                <ArrowIcon width={20} height={20} className="text-sky rtl:rotate-180" />
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-600">{t.areasSection.subtitle}</p>
        </div>
      </section>
    </>
  );
}
