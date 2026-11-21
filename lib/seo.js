import { site, LOCALES } from "./site";

// Builds <head> metadata (title, description, canonical, hreflang, social cards)
export function buildMetadata({ lang, path = "", title, description }) {
  const url = `${site.url}/${lang}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, `${site.url}/${l}${path}`])),
        "x-default": `${site.url}/ar${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name[lang],
      locale: { ar: "ar_SA", en: "en_US", ur: "ur_PK" }[lang],
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

// Structured data so Google understands this is a local business
export function localBusinessJsonLd(lang, areas, services) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name[lang],
    url: `${site.url}/${lang}`,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    address: { "@type": "PostalAddress", addressLocality: "Jeddah", addressCountry: "SA" },
    areaServed: areas.map((a) => ({ "@type": "City", name: `${a[lang]}, ${{ ar: "جدة", en: "Jeddah", ur: "جدہ" }[lang]}` })),
    openingHours: "Mo-Su 08:00-23:00",
    priceRange: "$$",
    sameAs: Object.values(site.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: { ar: "خدماتنا", en: "Our services", ur: "ہماری خدمات" }[lang],
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s[lang].title, description: s[lang].short },
      })),
    },
  };
}
