"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { StarIcon, ArrowIcon } from "./Icons";

// One-line, swipeable reviews slider (scroll-snap). Autoplay pauses on touch/hover/focus.
export default function ReviewsSlider({ reviews, lang, rtl = false, interval = 5500, labels = {} }) {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(1);
  const n = reviews.length;
  // number of distinct slider positions (e.g. 5 cards, 3 visible -> 3 positions)
  const stops = Math.max(1, n - perView + 1);

  const cards = () => Array.from(track.current?.children ?? []);

  // which card is currently snapped at the reading-start edge
  const syncActive = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    let best = 0;
    let bestD = Infinity;
    cards().forEach((c, i) => {
      const r = c.getBoundingClientRect();
      const d = Math.abs(rtl ? r.right - box.right : r.left - box.left);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setActive(best);
  }, [rtl]);

  useEffect(() => {
    const measure = () => {
      const el = track.current;
      const c = el?.children[0];
      if (el && c) setPerView(Math.max(1, Math.round(el.clientWidth / c.getBoundingClientRect().width)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = useCallback((i) => {
    const el = track.current;
    const c = cards()[((i % stops) + stops) % stops];
    if (!el || !c) return;
    const box = el.getBoundingClientRect();
    const r = c.getBoundingClientRect();
    // scroll only the slider (never the page)
    el.scrollBy({ left: rtl ? r.right - box.right : r.left - box.left, behavior: "smooth" });
  }, [stops, rtl]);

  useEffect(() => {
    if (paused || stops < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => goTo(active >= stops - 1 ? 0 : active + 1), interval);
    return () => clearInterval(id);
  }, [paused, stops, active, goTo, interval]);

  const arrow =
    "grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink shadow-sm transition hover:border-ice hover:text-sky active:scale-90 disabled:opacity-40";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 4000)}
      role="group"
      aria-roledescription="carousel"
      aria-label={labels.label}
    >
      <div
        ref={track}
        onScroll={syncActive}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInline: "1.25rem" }}
        tabIndex={0}
      >
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${n}`}
            className="card flex w-[85%] shrink-0 snap-start flex-col p-6 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.8rem)]"
          >
            <div className="flex gap-1 text-amber-400" aria-label={`${r.rating} / 5`}>
              {Array.from({ length: r.rating }).map((_, k) => (
                <StarIcon key={k} width={18} height={18} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-slate-700">“{r.text[lang]}”</blockquote>
            <figcaption className="mt-4 text-sm font-bold">
              {r.name}
              {r.area && <span className="font-normal text-slate-500"> · {r.area[lang]}</span>}
              {r.service && <span className="mt-0.5 block text-xs font-semibold text-sky">{r.service[lang]}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {stops > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button type="button" onClick={() => goTo(active - 1)} aria-label={labels.prev} className={arrow}>
            <ArrowIcon width={18} height={18} className="rotate-180 rtl:rotate-0" />
          </button>
          <div className="flex items-center gap-2" role="tablist" aria-label={labels.label}>
            {Array.from({ length: stops }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-7 bg-sky" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => goTo(active + 1)} aria-label={labels.next} className={arrow}>
            <ArrowIcon width={18} height={18} className="rtl:rotate-180" />
          </button>
        </div>
      )}
    </div>
  );
}
