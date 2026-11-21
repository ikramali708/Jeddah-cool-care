import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ReviewsSlider from "@/components/ReviewsSlider";
import { notFound } from "next/navigation";
import { ui, hasLocale, pick } from "@/lib/i18n";
import { site, services, areas, reviews, gallery, waLink, telLink } from "@/lib/site";
import { faqJsonLd } from "@/lib/seo";
import { Snowfall, SectionHead, ServiceCard, Faq } from "@/components/Parts";
import { PhoneIcon, WhatsAppIcon, ArrowIcon, StarIcon, PinIcon, ServiceIcon } from "@/components/Icons";

export default async function Home({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  const wa = waLink(t.messages.generic);
  const bySlug = (slug) => services.find((x) => x.slug === slug)[lang];
  const homeFaqs = [
    ...bySlug("ac-repair").faqs,
    ...bySlug("ac-gas-charging").faqs.slice(0, 1),
    ...bySlug("ac-cleaning").faqs.slice(0, 1),
    ...bySlug("refrigerator-repair").faqs.slice(0, 1),
  ];

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <Snowfall />
        <div className="container-x relative grid items-center gap-10 pb-14 pt-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-ice">
              <PinIcon width={16} height={16} />
              {t.hero.badge}
            </span>
            <h1 className="rise-2 mt-5 text-[2rem] font-extrabold leading-[1.18] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {t.hero.title}
            </h1>
            <p className="rise-3 mt-5 max-w-xl text-lg leading-relaxed text-white/75">{t.hero.subtitle}</p>

            <div className="rise-3 mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                <WhatsAppIcon width={20} height={20} />
                {t.getQuote}
              </a>
              <a href={telLink} className="btn btn-ghost">
                <PhoneIcon width={18} height={18} />
                {t.call}
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/85">
              {t.hero.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-ice" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-first lg:order-none lg:-mt-10">
            <HeroVisual lang={lang} />
          </div>
        </div>
      </section>

      {/* ---------------- TRUST BAR ---------------- */}
      <section className="relative z-10 -mt-8">
        <div className="container-x">
          <div className="card grid gap-px overflow-hidden bg-line shadow-xl shadow-sky/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.map((x) => (
              <div key={x.t} className="bg-white p-5 text-center sm:text-start">
                <p className="font-extrabold text-ink">{x.t}</p>
                <p className="mt-1 text-sm text-slate-500">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow={t.servicesSection.eyebrow} title={t.servicesSection.title} subtitle={t.servicesSection.subtitle} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} lang={lang} service={s} moreLabel={t.servicesSection.more} />
            ))}
            <div className="card flex flex-col justify-center bg-gradient-to-br from-ink to-ink-2 p-6 text-white">
              <h3 className="text-lg font-extrabold">{t.cta.title}</h3>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-5 self-start">
                <WhatsAppIcon width={20} height={20} />
                {t.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="bg-snow py-14 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">{t.why.eyebrow}</span>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{t.why.title}</h2>
            <div className="mt-8 space-y-5">
              {t.why.items.map(([h, d], i) => (
                <div key={h} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink font-extrabold text-ice">{i + 1}</span>
                  <div>
                    <h3 className="font-extrabold">{h}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-10">
            <Snowfall />
            <div className="relative">
              <span className="eyebrow">{t.process.eyebrow}</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">{t.process.title}</h2>
              <ol className="mt-8 space-y-7">
                {t.process.steps.map(([h, d], i) => (
                  <li key={h} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ice to-sky text-lg font-extrabold text-ink">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-extrabold">{h}</h3>
                      <p className="mt-1 text-sm text-white/70">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- AREAS ---------------- */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow={t.areasSection.eyebrow} title={t.areasSection.title} subtitle={t.areasSection.subtitle} />
          <div className="flex flex-wrap justify-center gap-3">
            {areas.slice(0, 16).map((a) => (
              <Link key={a.slug} href={`/${lang}/areas/${a.slug}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:border-ice hover:text-sky">
                <PinIcon width={16} height={16} className="text-sky" />
                {a[lang]}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/${lang}/areas`} className="btn btn-outline">
              {t.areasSection.all}
              <ArrowIcon width={18} height={18} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- REVIEWS (only when real reviews exist) ---------------- */}
      {reviews.length > 0 && (
        <section className="bg-snow py-14 sm:py-20">
          <div className="container-x">
            <SectionHead eyebrow={t.reviewsSection.eyebrow} title={t.reviewsSection.title} />
            <ReviewsSlider
              reviews={reviews}
              lang={lang}
              rtl={lang !== "en"}
              labels={{
                label: t.reviewsSection.title,
                prev: pick(lang, { ar: "السابق", en: "Previous", ur: "پچھلا" }),
                next: pick(lang, { ar: "التالي", en: "Next", ur: "اگلا" }),
              }}
            />
          </div>
        </section>
      )}

      {/* ---------------- ABOUT (keyword-rich intro for search engines and visitors) ---------------- */}
      <section className="bg-snow py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl">
            {pick(lang, {
              ar: "صيانة مكيفات وأجهزة منزلية في جدة",
              en: "AC & home appliance service in Jeddah",
              ur: "جدہ میں اے سی اور گھریلو آلات کی سروس",
            })}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
            <p>
              {pick(lang, {
                ar: "جدة كول كير فريق متخصص في تصليح المكيفات في جدة: تصليح مكيفات، شحن فريون، غسيل وتنظيف المكيفات، وتركيب ونقل المكيفات بجميع أنواعها، سبليت وشباك وكاسيت ومركزي. كما نصلح الثلاجات والفريزرات والغسالات الأوتوماتيك في منزلك أو فيلتك أو محلك.",
                en: "Jeddah Cool Care is a team of specialists in AC repair in Jeddah: AC repair, gas charging, AC cleaning, and installation and relocation of every type of AC, including split, window, cassette and central units. We also repair refrigerators, freezers and automatic washing machines at your home, villa or shop.",
                ur: "جدہ کول کیئر جدہ میں اے سی کی مرمت کے ماہرین کی ٹیم ہے: اے سی کی مرمت، گیس چارجنگ، اے سی کی صفائی، اور ہر قسم کے اے سی، اسپلٹ، ونڈو، کیسٹ اور سینٹرل، کی انسٹالیشن اور منتقلی۔ ہم آپ کے گھر، ولا یا دکان میں فریج، فریزر اور آٹومیٹک واشنگ مشین کی مرمت بھی کرتے ہیں۔",
              })}
            </p>
            <p>
              {pick(lang, {
                ar: "نخدم جميع أحياء جدة، ومنها الحمراء والروضة والصفا وأبحر والنسيم والسلامة والمروة والرحاب. راسلنا على واتساب أو اتصل بنا، ونحرص على إرسال الفني في نفس اليوم في معظم الحالات، ونؤكد لك السعر قبل البدء بأي إصلاح.",
                en: "We serve every area of Jeddah, including Al Hamra, Al Rawdah, Al Safa, Obhur, Al Naseem, Al Salamah, Al Marwah and Al Rehab. Message us on WhatsApp or call, and in most cases we aim to send a technician the same day, with the price confirmed before any repair begins.",
                ur: "ہم جدہ کے تمام علاقوں میں خدمات دیتے ہیں، جن میں الحمراء، الروضہ، الصفا، ابحر، النسیم، السلامہ، المروہ اور الرحاب شامل ہیں۔ واٹس ایپ پر پیغام کریں یا کال کریں، زیادہ تر صورتوں میں ہم اسی دن ٹیکنیشن بھیجنے کی کوشش کرتے ہیں اور مرمت سے پہلے قیمت طے کرتے ہیں۔",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <Faq items={homeFaqs} />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="hero-bg relative overflow-hidden py-16 text-white">
        <Snowfall />
        <div className="container-x relative text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">{t.cta.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WhatsAppIcon width={20} height={20} />
              {t.whatsapp}
            </a>
            <a href={telLink} className="btn btn-call">
              <PhoneIcon width={18} height={18} />
              {t.call}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaqs)) }} />
    </>
  );
}

/* Hero photo card: crops the team photo from /public/images/hero.jpg into a glowing, framed card */
function HeroVisual({ lang }) {
  const alt = pick(lang, {
    ar: "فريق جدة كول كير مع سيارة الخدمة وأجهزة المكيفات والثلاجات في جدة",
    en: "Jeddah Cool Care technicians with their service truck, AC unit and refrigerator in Jeddah",
    ur: "جدہ کول کیئر کے ٹیکنیشن سروس ٹرک، اے سی اور فریج کے ساتھ جدہ میں",
  });
  // first slide = team photo, then every photo from the gallery list in lib/site.js
  const slides = [
    {
      src: "/images/poster-services.jpg",
      plain: true, // poster already has its own design: no dark overlay
      alt: pick(lang, {
        ar: "جدة كول كير: خدمات صيانة وتركيب المكيفات والأجهزة المنزلية في جدة",
        en: "Jeddah Cool Care: AC and home appliance repair, maintenance and installation services in Jeddah",
        ur: "جدہ کول کیئر: جدہ میں اے سی اور گھریلو آلات کی مرمت، مینٹیننس اور انسٹالیشن کی خدمات",
      }),
    },
    { src: "/images/hero.jpg", alt, position: "object-right" },
    ...gallery.map((g) => ({ src: g.src, alt: g.alt[lang] })),
  ];
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* glow + offset frame */}
      <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-ice/30 via-sky/10 to-transparent blur-2xl max-md:hidden" aria-hidden="true" />
      <div className="absolute -bottom-3 -end-3 h-full w-full rounded-[2rem] border border-ice/30" aria-hidden="true" />

      <div className="floaty relative">
        <HeroCarousel
          slides={slides}
          rtl={lang !== "en"}
          labels={{
            carousel: pick(lang, { ar: "صور أعمالنا", en: "Photos of our work", ur: "ہمارے کام کی تصاویر" }),
            prev: pick(lang, { ar: "السابق", en: "Previous", ur: "پچھلی" }),
            next: pick(lang, { ar: "التالي", en: "Next", ur: "اگلی" }),
            slide: pick(lang, { ar: "صورة", en: "Slide", ur: "تصویر" }),
          }}
        >
        <div className="absolute -bottom-4 start-4 rounded-2xl border border-white/20 bg-ink/70 px-5 py-3 shadow-xl backdrop-blur-md">
          <p className="text-xs text-white/60">{pick(lang, { ar: "نخدم", en: "Serving", ur: "خدمات" })}</p>
          <p className="font-extrabold text-white">{pick(lang, { ar: "جدة", en: "Jeddah", ur: "جدہ" })}</p>
        </div>
        <div className="absolute -top-4 end-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-ink/70 px-4 py-3 shadow-xl backdrop-blur-md">
          <ServiceIcon name="ac" width={22} height={22} className="text-ice" />
          <span className="text-sm font-bold text-white">{pick(lang, { ar: "مكيفات • ثلاجات • غسالات", en: "AC • Fridge • Washer", ur: "اے سی • فریج • واشنگ مشین" })}</span>
        </div>
        </HeroCarousel>
      </div>
    </div>
  );
}
