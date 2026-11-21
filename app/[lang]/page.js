import Link from "next/link";
import { notFound } from "next/navigation";
import { ui, hasLocale, pick } from "@/lib/i18n";
import { site, services, areas, reviews, waLink, telLink } from "@/lib/site";
import { Snowfall, SectionHead, ServiceCard, Faq } from "@/components/Parts";
import { PhoneIcon, WhatsAppIcon, ArrowIcon, StarIcon, PinIcon, ServiceIcon } from "@/components/Icons";

export default async function Home({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];
  const wa = waLink(t.messages.generic);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <Snowfall />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-ice">
              <PinIcon width={16} height={16} />
              {t.hero.badge}
            </span>
            <h1 className="rise-2 mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {t.hero.title}
            </h1>
            <p className="rise-3 mt-5 max-w-xl text-lg leading-relaxed text-white/75">{t.hero.subtitle}</p>

            <div className="rise-3 mt-8 flex flex-wrap gap-3">
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

          <HeroVisual lang={lang} />
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
      <section className="py-20">
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
      <section className="bg-snow py-20">
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
      <section className="py-20">
        <div className="container-x">
          <SectionHead eyebrow={t.areasSection.eyebrow} title={t.areasSection.title} subtitle={t.areasSection.subtitle} />
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span key={a.slug} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold shadow-sm">
                <PinIcon width={16} height={16} className="text-sky" />
                {a[lang]}
              </span>
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
        <section className="bg-snow py-20">
          <div className="container-x">
            <SectionHead eyebrow={t.reviewsSection.eyebrow} title={t.reviewsSection.title} />
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="card p-6">
                  <div className="flex gap-1 text-amber-400" aria-label={`${r.rating} / 5`}>
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <StarIcon key={i} width={18} height={18} />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-slate-700">“{r.text[lang]}”</blockquote>
                  <figcaption className="mt-4 text-sm font-bold">
                    {r.name}
                    {r.area && <span className="font-normal text-slate-500"> · {r.area[lang]}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20">
        <div className="container-x max-w-3xl">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <Faq items={[...services[0][lang].faqs, ...services[1][lang].faqs.slice(0, 1), ...services[3][lang].faqs.slice(0, 1)]} />
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
    </>
  );
}

/* Illustrated AC unit with soft cold-air waves (inline SVG, no image needed) */
function HeroVisual({ lang }) {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute -inset-6 rounded-full bg-ice/20 blur-3xl" />
      <div className="floaty relative">
        <svg viewBox="0 0 420 340" className="w-full drop-shadow-2xl">
          <defs>
            <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#cfe9f7" />
            </linearGradient>
            <linearGradient id="wind" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#22d3ee" stopOpacity="0.55" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="30" y="30" width="360" height="130" rx="26" fill="url(#body)" />
          <rect x="30" y="118" width="360" height="42" rx="21" fill="#a9d4ea" opacity="0.55" />
          <rect x="52" y="140" width="316" height="10" rx="5" fill="#0b2a4a" opacity="0.85" />
          <circle cx="82" cy="70" r="7" fill="#22d3ee" />
          <rect x="105" y="64" width="64" height="12" rx="6" fill="#0b2a4a" opacity="0.12" />
          <text x="338" y="76" textAnchor="end" fontSize="28" fontWeight="800" fill="#0b2a4a" fontFamily="system-ui">
            18°
          </text>
          {[95, 165, 235, 305].map((x, i) => (
            <path key={x} d={`M${x} 168 q18 50 -4 100 q-12 30 8 62`} stroke="url(#wind)" strokeWidth="14" strokeLinecap="round" fill="none" opacity={0.9 - i * 0.12} />
          ))}
        </svg>
        <div className="absolute -bottom-2 start-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
          <p className="text-xs text-white/60">{pick(lang, { ar: "نخدم", en: "Serving", ur: "خدمات" })}</p>
          <p className="font-extrabold text-white">{pick(lang, { ar: "جدة", en: "Jeddah", ur: "جدہ" })}</p>
        </div>
        <div className="absolute -top-2 end-2 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
          <ServiceIcon name="ac" width={22} height={22} className="text-ice" />
          <span className="text-sm font-bold text-white">{pick(lang, { ar: "مكيفات • ثلاجات • غسالات", en: "AC • Fridge • Washer", ur: "اے سی • فریج • واشنگ مشین" })}</span>
        </div>
      </div>
    </div>
  );
}
