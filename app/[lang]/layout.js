import { Plus_Jakarta_Sans, Cairo, Noto_Nastaliq_Urdu } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import MobileNav from "@/components/MobileNav";
import PwaRegister from "@/components/PwaRegister";
import { hasLocale, dirOf, ui, LOCALES } from "@/lib/i18n";
import { site, telLink, waLink, areas, services } from "@/lib/site";
import { buildMetadata, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], variable: "--font-urdu", display: "swap", preload: false });

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const viewport = {
  themeColor: "#061b33",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const title = {
    ar: `صيانة وتصليح مكيفات في جدة | فني مكيفات وثلاجات وغسالات - ${site.name.ar}`,
    en: `AC Repair in Jeddah | AC, Fridge & Washer Technician - ${site.name.en}`,
    ur: `جدہ میں اے سی کی مرمت | اے سی، فریج اور واشنگ مشین ٹیکنیشن - ${site.name.ur}`,
  }[lang];
  const description = {
    ar: "فني مكيفات في جدة: تصليح وصيانة مكيفات، شحن فريون، غسيل وتركيب مكيفات، تصليح ثلاجات وغسالات. فنيون محترفون وزيارة في نفس اليوم والسعر قبل البدء. اتصل أو راسلنا على واتساب.",
    en: "AC technician in Jeddah: AC repair, gas charging, cleaning and installation, plus fridge and washing machine repair. Same-day visits, price before we start. Call or WhatsApp.",
    ur: "جدہ میں اے سی کی مرمت، گیس چارجنگ، انسٹالیشن و مینٹیننس، فریج اور واشنگ مشین کی مرمت۔ اسی دن پہنچنے والے ماہر ٹیکنیشن، کال کریں یا واٹس ایپ پر پیغام بھیجیں۔",
  }[lang];
  return {
    metadataBase: new URL(site.url),
    ...buildMetadata({ lang, title, description }),
    title: { default: title, template: `%s | ${site.name[lang]}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    icons: { icon: "/icon.svg", apple: "/icons/apple-touch-icon.png" },
    appleWebApp: { capable: true, title: site.name[lang], statusBarStyle: "black-translucent" },
    formatDetection: { telephone: false },
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
        <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">{children}</main>
        <Footer lang={lang} t={t} />
        <FloatingContact t={t} />
        <MobileNav lang={lang} t={t} wa={waLink(t.messages.generic)} />
        <PwaRegister />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(lang, areas, services)) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd(lang)) }} />
      </body>
    </html>
  );
}
