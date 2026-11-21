"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./Icons";

// Fade carousel: autoplay, dots, arrows, swipe, pauses on hover/focus. Works in LTR and RTL.
export default function HeroCarousel({ slides, rtl = false, interval = 4500, labels = {}, children }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef(null);
  const n = slides.length;

  const go = useCallback((to) => setI(((to % n) + n) % n), [n]);
  const next = useCallback(() => setI((v) => (v + 1) % n), [n]);
  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n]);

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, n, next, interval, i]);

  const onPointerDown = (e) => (touch.current = e.clientX);
  const onPointerUp = (e) => {
    if (touch.current == null) return;
    const dx = e.clientX - touch.current;
    touch.current = null;
    if (Math.abs(dx) < 40) return;
    // swiping "forward" means left in LTR, right in RTL
    (dx < 0) !== rtl ? next() : prev();
  };

  const arrow =
    "absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink/60 text-white backdrop-blur-md transition hover:bg-ice hover:text-ink focus-visible:outline-2 focus-visible:outline-ice";

  return (
    <div className="relative">
    <div
      className="group relative aspect-[4/3] select-none overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl shadow-black/40 ring-1 ring-ice/30"
      role="group"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (touch.current = null)}
      style={{ touchAction: "pan-y" }}
    >
      {slides.map((s, idx) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
          role="group"
          aria-roledescription="slide"
          aria-label={`${idx + 1} / ${n}`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={idx === 0}
            sizes="(max-width: 1024px) 92vw, 45vw"
            draggable={false}
            className={`object-cover ${s.position || "object-center"} ${idx === i ? "scale-100" : "scale-105"} transition-transform duration-[6000ms] ease-out`}
          />
        </div>
      ))}

      {/* brand tint + bottom fade */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/10 transition-opacity duration-700 ${slides[i]?.plain ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_60px_rgba(34,211,238,0.12)]" aria-hidden="true" />

      {n > 1 && (
        <>
          <button type="button" onClick={prev} aria-label={labels.prev} className={`${arrow} start-3 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 max-sm:opacity-100`}>
            <ArrowIcon width={18} height={18} className="rotate-180 rtl:rotate-0" />
          </button>
          <button type="button" onClick={next} aria-label={labels.next} className={`${arrow} end-3 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 max-sm:opacity-100`}>
            <ArrowIcon width={18} height={18} className="rtl:rotate-180" />
          </button>

          <div
            className="absolute bottom-3 end-3 z-10 flex items-center gap-2 rounded-full bg-ink/55 px-3 py-2 backdrop-blur-md"
            role="tablist"
            aria-label={labels.carousel}
          >
            {slides.map((s, idx) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`${labels.slide ?? "Slide"} ${idx + 1}`}
                onClick={() => go(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === i ? "w-7 bg-ice" : "w-2 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
    {/* floating badges: hidden on "plain" slides (e.g. the poster) so they never cover its content */}
    <div className={`transition-opacity duration-500 ${slides[i]?.plain ? "pointer-events-none opacity-0" : "opacity-100"}`}>
      {children}
    </div>
    </div>
  );
}
