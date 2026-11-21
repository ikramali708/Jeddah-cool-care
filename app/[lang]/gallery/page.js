import { notFound } from "next/navigation";
import { ui, hasLocale, pick } from "@/lib/i18n";
import { gallery, services } from "@/lib/site";
import { PageHero } from "@/components/Parts";
import GalleryGrid from "@/components/GalleryGrid";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = ui[lang].pageGallery;
  return buildMetadata({
    lang,
    path: "/gallery",
    title: pick(lang, {
      ar: "أعمالنا | صور صيانة وتركيب مكيفات وثلاجات في جدة",
      en: "Our Work | AC, Fridge Repair & Installation Photos in Jeddah",
      ur: "ہمارا کام | جدہ میں اے سی اور فریج کی مرمت و انسٹالیشن کی تصاویر",
    }),
    description: pick(lang, {
      ar: "صور من أعمالنا في صيانة وتصليح وتركيب المكيفات والثلاجات والغسالات في جدة بأيدي فنيي جدة كول كير.",
      en: "Photos of our AC repair, installation and refrigerator service work in Jeddah by the Jeddah Cool Care team.",
      ur: "جدہ کول کیئر کی ٹیم کے ہاتھوں جدہ میں اے سی، فریج اور واشنگ مشین کی مرمت اور انسٹالیشن کے کام کی تصاویر۔",
    }),
  });
}

export default async function GalleryPage({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];

  // Real photos if the client has supplied them; tidy placeholders otherwise
  const items =
    gallery.length > 0
      ? gallery
      : services.slice(0, 5).flatMap((s) => [
          { placeholder: true, icon: s.icon, label: s[lang].title.replace(/ in Jeddah| في جدة/, "") },
          { placeholder: true, icon: s.icon, label: s[lang].title.replace(/ in Jeddah| في جدة/, "") },
        ]);

  return (
    <>
      <PageHero title={t.pageGallery.title} subtitle={t.pageGallery.subtitle} />
      <section className="py-10 sm:py-16">
        <GalleryGrid
          items={items}
          lang={lang}
          labels={{
            placeholder: t.pageGallery.placeholder,
            view: pick(lang, { ar: "عرض الصورة", en: "View photo", ur: "تصویر دیکھیں" }),
            close: pick(lang, { ar: "إغلاق", en: "Close", ur: "بند کریں" }),
            prev: pick(lang, { ar: "السابقة", en: "Previous", ur: "پچھلی" }),
            next: pick(lang, { ar: "التالية", en: "Next", ur: "اگلی" }),
          }}
        />
      </section>
    </>
  );
}
