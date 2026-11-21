import { site, services, areas, LOCALES } from "@/lib/site";

// lastModified = build time, so search engines see a fresh date after every deploy
export default function sitemap() {
  const lastModified = new Date();
  const pages = [
    ["", 1, "weekly"],
    ["/services", 0.9, "monthly"],
    ...services.map((s) => [`/services/${s.slug}`, 0.9, "monthly"]),
    ["/areas", 0.8, "monthly"],
    ...areas.map((a) => [`/areas/${a.slug}`, 0.7, "monthly"]),
    ["/gallery", 0.6, "monthly"],
    ["/contact", 0.7, "yearly"],
  ];
  return LOCALES.flatMap((lang) =>
    pages.map(([p, priority, changeFrequency]) => ({
      url: `${site.url}/${lang}${p}`,
      lastModified,
      changeFrequency,
      priority: lang === "ar" ? priority : Math.max(priority - 0.1, 0.3),
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${site.url}/${l}${p}`])),
      },
    }))
  );
}
