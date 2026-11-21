import Image from "next/image";
import { notFound } from "next/navigation";
import { ui, hasLocale } from "@/lib/i18n";
import { gallery, services } from "@/lib/site";
import { PageHero } from "@/components/Parts";
import { ServiceIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = ui[lang].pageGallery;
  return buildMetadata({ lang, path: "/gallery", title: t.title, description: t.subtitle });
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
      <section className="py-16">
        <div className="container-x grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) =>
            it.placeholder ? (
              <div
                key={i}
                className="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-sky/40 bg-gradient-to-br from-snow to-white p-4 text-center"
              >
                <div>
                  <ServiceIcon name={it.icon} width={34} height={34} className="mx-auto text-sky/70" />
                  <p className="mt-3 text-sm font-bold text-ink/70">{it.label}</p>
                  <p className="text-xs text-slate-400">{t.pageGallery.placeholder}</p>
                </div>
              </div>
            ) : (
              <div key={it.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={it.src}
                  alt={it.alt[lang]}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
