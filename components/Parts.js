import Link from "next/link";
import { ServiceIcon, ArrowIcon, ChevronIcon, SnowIcon, CheckIcon } from "./Icons";

/* Decorative falling snowflakes (pure CSS, hidden from screen readers) */
export function Snowfall() {
  const flakes = [
    [6, 14, 9], [16, 20, 6], [27, 11, 12], [38, 18, 8], [49, 13, 10],
    [58, 22, 7], [69, 12, 11], [79, 17, 9], [88, 21, 6], [95, 15, 10],
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {flakes.map(([left, dur, size], i) => (
        <SnowIcon
          key={i}
          className="flake"
          width={size + 6}
          height={size + 6}
          style={{ left: `${left}%`, animationDuration: `${dur}s`, animationDelay: `${i * -2.1}s` }}
        />
      ))}
    </div>
  );
}

export function SectionHead({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mx-auto mb-12 max-w-2xl ${center ? "text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-3 text-base leading-relaxed ${light ? "text-white/70" : "text-slate-600"}`}>{subtitle}</p>}
    </div>
  );
}

export function ServiceCard({ lang, service, moreLabel }) {
  const c = service[lang];
  return (
    <Link href={`/${lang}/services/${service.slug}`} className="card card-hover group flex flex-col p-6">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-ice/25 to-sky/25 text-sky">
        <ServiceIcon name={service.icon} width={28} height={28} />
      </span>
      <h3 className="mt-5 text-lg font-extrabold leading-snug">{c.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.short}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky">
        {moreLabel}
        <ArrowIcon width={18} height={18} className="transition group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}

export function Faq({ items }) {
  return (
    <div className="space-y-3">
      {items.map(([q, a]) => (
        <details key={q} className="card group overflow-hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold">
            {q}
            <ChevronIcon className="chev shrink-0 text-sky transition" width={20} height={20} />
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function CheckList({ items, light = false }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className={`flex items-start gap-3 ${light ? "text-white/90" : "text-slate-700"}`}>
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ice/20 text-sky">
            <CheckIcon width={14} height={14} />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function PageHero({ title, subtitle, children }) {
  return (
    <section className="hero-bg relative overflow-hidden text-white">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <Snowfall />
      <div className="container-x relative py-16 sm:py-20">
        <h1 className="rise max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="rise-2 mt-4 max-w-2xl text-lg text-white/75">{subtitle}</p>}
        {children && <div className="rise-3 mt-7">{children}</div>}
      </div>
    </section>
  );
}
