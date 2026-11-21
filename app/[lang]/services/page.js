import { notFound } from "next/navigation";
import { ui, hasLocale, pick } from "@/lib/i18n";
import { services } from "@/lib/site";
import { PageHero, ServiceCard } from "@/components/Parts";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = ui[lang].pageServices;
  return buildMetadata({
    lang,
    path: "/services",
    title: pick(lang, {
      ar: "خدمات صيانة المكيفات والثلاجات والغسالات في جدة",
      en: "AC, Fridge & Washing Machine Repair Services in Jeddah",
      ur: "جدہ میں اے سی، فریج اور واشنگ مشین کی مرمت کی خدمات",
    }),
    description: pick(lang, {
      ar: "تصليح مكيفات، شحن فريون، غسيل وتركيب مكيفات، تصليح ثلاجات وتصليح غسالات في جدة. فنيون محترفون وزيارة في نفس اليوم. اتصل أو راسلنا على واتساب.",
      en: "AC repair, gas charging, AC cleaning and installation, refrigerator repair and washing machine repair in Jeddah. Skilled technicians, same-day visits. Call or WhatsApp us.",
      ur: "جدہ میں اے سی کی مرمت، گیس چارجنگ، صفائی اور انسٹالیشن، فریج اور واشنگ مشین کی مرمت۔ ماہر ٹیکنیشن، اسی دن وزٹ۔ کال کریں یا واٹس ایپ کریں۔",
    }),
  });
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
