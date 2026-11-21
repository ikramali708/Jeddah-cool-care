"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ServiceIcon, ArrowIcon, CloseIcon } from "./Icons";

// Gallery grid + full-screen lightbox (click, arrows, keyboard, swipe, Esc to close).
export default function GalleryGrid({ items, lang, labels }) {
  const photos = items.filter((x) => !x.placeholder);
  const rtl = lang !== "en";
  const [open, setOpen] = useState(null); // index into `photos`, or null when closed
  const touch = useRef(null);
  const closeBtn = useRef(null);
  const lastFocus = useRef(null);
  const n = photos.length;

  const show = (idx) => {
    lastFocus.current = document.activeElement;
    setOpen(idx);
  };
  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus?.();
  }, []);
  const next = useCallback(() => setOpen((v) => (v == null ? v : (v + 1) % n)), [n]);
  const prev = useCallback(() => setOpen((v) => (v == null ? v : (v - 1 + n) % n)), [n]);

  const isOpen = open != null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      // arrow keys follow the reading direction
      if (e.key === "ArrowRight") (rtl ? prev : next)();
      if (e.key === "ArrowLeft") (rtl ? next : prev)();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev, rtl]);

  const onPointerDown = (e) => (touch.current = e.clientX);
  const onPointerUp = (e) => {
    if (touch.current == null) return;
    const dx = e.clientX - touch.current;
    touch.current = null;
    if (Math.abs(dx) < 50) return;
    // swiping "forward" means left in LTR, right in RTL
    (dx < 0) !== rtl ? next() : prev();
  };

  const current = open != null ? photos[open] : null;
  const sideBtn =
    "absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-ice hover:text-ink active:scale-90 focus-visible:outline-2 focus-visible:outline-ice max-sm:hidden";
  const smallBtn =
    "grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white active:scale-90";

  return (
    <>
      <div className="container-x grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it, i) => {
          if (it.placeholder) {
            return (
              <div
                key={i}
                className="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-sky/40 bg-gradient-to-br from-snow to-white p-4 text-center"
              >
                <div>
                  <ServiceIcon name={it.icon} width={34} height={34} className="mx-auto text-sky/70" />
                  <p className="mt-3 text-sm font-bold text-ink/70">{it.label}</p>
                  <p className="text-xs text-slate-400">{labels.placeholder}</p>
                </div>
              </div>
            );
          }
          const idx = photos.indexOf(it);
          return (
            <button
              key={it.src}
              type="button"
              onClick={() => show(idx)}
              aria-label={`${labels.view}: ${it.alt[lang]}`}
              className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl text-start shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              <Image
                src={it.src}
                alt={it.alt[lang]}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
              <span
                className="absolute bottom-2.5 end-2.5 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 max-sm:opacity-100"
                aria-hidden="true"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </button>
          );
        })}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt[lang]}
          onClick={close}
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white" onClick={(e) => e.stopPropagation()}>
            <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-bold tabular-nums" dir="ltr">
              {open + 1} / {n}
            </span>
            <button
              ref={closeBtn}
              type="button"
              onClick={close}
              aria-label={labels.close}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 transition hover:bg-ice hover:text-ink active:scale-90 focus-visible:outline-2 focus-visible:outline-ice"
            >
              <CloseIcon />
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1 select-none"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (touch.current = null)}
            style={{ touchAction: "pan-y" }}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt[lang]}
              fill
              sizes="100vw"
              quality={85}
              priority
              draggable={false}
              className="object-contain px-2 sm:px-16"
            />
            {n > 1 && (
              <>
                <button type="button" onClick={prev} aria-label={labels.prev} className={`${sideBtn} start-3`}>
                  <ArrowIcon className="rotate-180 rtl:rotate-0" />
                </button>
                <button type="button" onClick={next} aria-label={labels.next} className={`${sideBtn} end-3`}>
                  <ArrowIcon className="rtl:rotate-180" />
                </button>
              </>
            )}
          </div>

          <div className="px-4 pb-5 pt-3 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/85" onClick={(e) => e.stopPropagation()}>
              {current.alt[lang]}
            </p>
            {n > 1 && (
              <div className="mt-3 flex items-center justify-center gap-4 sm:hidden" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={prev} aria-label={labels.prev} className={smallBtn}>
                  <ArrowIcon className="rotate-180 rtl:rotate-0" />
                </button>
                <button type="button" onClick={next} aria-label={labels.next} className={smallBtn}>
                  <ArrowIcon className="rtl:rotate-180" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
