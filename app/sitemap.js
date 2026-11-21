import { site, services, LOCALES } from "@/lib/site";

export default function sitemap() {
  const pages = ["", "/services", "/areas", "/gallery", "/contact", ...services.map((s) => `/services/${s.slug}`)];
  return LOCALES.flatMap((lang) =>
    pages.map((p) => ({
      url: `${site.url}/${lang}${p}`,
      changeFrequency: "monthly",
      priority: p === "" ? 1 : p.startsWith("/services/") ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${site.url}/${l}${p}`])),
      },
    }))
  );
}
