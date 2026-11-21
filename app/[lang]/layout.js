import { Plus_Jakarta_Sans, Cairo, Noto_Nastaliq_Urdu } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { hasLocale, dirOf, ui, LOCALES } from "@/lib/i18n";
import { site, telLink, waLink, areas, services } from "@/lib/site";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], variable: "--font-urdu", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const viewport = {
  themeColor: "#061b33",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const title = {
    ar: `${site.name.ar} | تصليح مكيفات وشحن فريون وصيانة أجهزة منزلية في جدة`,
    en: `${site.name.en} | AC Repair, Gas Charging & Appliance Service in Jeddah`,
    ur: `${site.name.ur} | جدہ میں اے سی کی مرمت، گیس چارجنگ اور گھریلو آلات کی سروس`,
  }[lang];
  const description = {
    ar: "تصليح مكيفات، شحن فريون، تركيب وصيانة، تصليح ثلاجات وغسالات في جدة. فنيون محترفون وزيارة في نفس اليوم. اتصل أو راسلنا على واتساب.",
    en: "AC repair, AC gas charging, installation & maintenance, refrigerator and washing machine repair in Jeddah. Fast same-day technicians — call or WhatsApp us.",
    ur: "جدہ میں اے سی کی مرمت، گیس چارجنگ، انسٹالیشن و مینٹیننس، فریج اور واشنگ مشین کی مرمت۔ اسی دن پہنچنے والے ماہر ٹیکنیشن، کال کریں یا واٹس ایپ پر پیغام بھیجیں۔",
  }[lang];
  return {
    metadataBase: new URL(site.url),
    ...buildMetadata({ lang, title, description }),
    title: { default: title, template: `%s | ${site.name[lang]}` },
    robots: { index: true, follow: true },
    icons: { icon: "/icon.svg" },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];

  return (
    <html lang={lang} dir={dirOf(lang)} className={`${jakarta.variable} ${cairo.variable} ${nastaliq.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header lang={lang} t={t} brand={site.name[lang]} phone={telLink} wa={waLink(t.messages.generic)} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} t={t} />
        <FloatingContact t={t} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(lang, areas, services)) }}
        />
      </body>
    </html>
  );
}
