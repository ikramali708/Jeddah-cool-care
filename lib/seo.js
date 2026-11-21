import { site, LOCALES } from "./site";

const OG_IMAGE = "/og-image.jpg"; // 1200x630, lives in /public
const J = { ar: "جدة", en: "Jeddah", ur: "جدہ" };

// Builds <head> metadata (title, description, canonical, hreflang, social cards)
export function buildMetadata({ lang, path = "", title, description }) {
  const url = `${site.url}/${lang}${path}`;
  const image = { url: OG_IMAGE, width: 1200, height: 630, alt: site.name[lang] };
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
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => ({ ar: "ar_SA", en: "en_US", ur: "ur_PK" }[l])),
      type: "website",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

// Structured data so Google understands this is a local business serving Jeddah
export function localBusinessJsonLd(lang, areas, services, reviews = []) {
  const ld = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name[lang],
    alternateName: [site.name.ar, site.name.en, site.name.ur],
    url: `${site.url}/${lang}`,
    telephone: site.phones,
    email: site.email,
    logo: `${site.url}/icons/icon-512.png`,
    image: `${site.url}${OG_IMAGE}`,
    description: {
      ar: "تصليح مكيفات وشحن فريون وتركيب وغسيل مكيفات وتصليح ثلاجات وغسالات في جدة.",
      en: "AC repair, gas charging, installation and cleaning, plus refrigerator and washing machine repair in Jeddah.",
      ur: "جدہ میں اے سی کی مرمت، گیس چارجنگ، انسٹالیشن، صفائی، نیز فریج اور واشنگ مشین کی مرمت۔",
    }[lang],
    address: { "@type": "PostalAddress", addressLocality: "Jeddah", addressRegion: "Makkah Province", addressCountry: "SA" },
    areaServed: [
      { "@type": "City", name: J[lang], sameAs: "https://en.wikipedia.org/wiki/Jeddah" },
      ...areas.map((a) => ({ "@type": "Place", name: `${a[lang]}, ${J[lang]}` })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
    contactPoint: site.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p,
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["Arabic", "English", "Urdu"],
    })),
    sameAs: Object.values(site.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: { ar: "خدماتنا", en: "Our services", ur: "ہماری خدمات" }[lang],
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s[lang].title, description: s[lang].short, url: `${site.url}/${lang}/services/${s.slug}` },
      })),
    },
  };

  // Star ratings are only published when real reviews exist in lib/site.js
  if (reviews.length > 0) {
    ld.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: (reviews.reduce((n, r) => n + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
    };
    ld.review = reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text[lang],
    }));
  }
  return ld;
}

export function websiteJsonLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name[lang],
    url: `${site.url}/${lang}`,
    inLanguage: lang,
    publisher: { "@id": `${site.url}/#business` },
  };
}

// items: [{ name, path }]  (path is without the /lang prefix, "" = home)
export function breadcrumbJsonLd(lang, items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}/${lang}${it.path}`,
    })),
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}
