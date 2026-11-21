"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./Icons";

// No backend needed: builds a WhatsApp message from the form and opens it.
export default function ContactForm({ lang, t, services, whatsapp, brand }) {
  const f = t.pageContact.form;
  const [data, setData] = useState({ name: "", phone: "", area: "", service: services[0], details: "" });
  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const T = {
      ar: ["السلام عليكم", "الاسم", "الجوال", "الحي", "الخدمة", "المشكلة"],
      en: ["Hello", "Name", "Phone", "Area", "Service", "Problem"],
      ur: ["السلام علیکم", "نام", "فون", "علاقہ", "خدمت", "مسئلہ"],
    }[lang];
    const lines = [
      `${T[0]} ${brand}`,
      `${T[1]}: ${data.name}`,
      `${T[2]}: ${data.phone}`,
      `${T[3]}: ${data.area}`,
      `${T[4]}: ${data.service}`,
      `${T[5]}: ${data.details}`,
    ];
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-sky focus:ring-4 focus:ring-ice/20";

  return (
    <form onSubmit={submit} className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          {f.name}
          <input required className={`${field} mt-1.5`} value={data.name} onChange={set("name")} autoComplete="name" />
        </label>
        <label className="block text-sm font-semibold">
          {f.phone}
          <input required dir="ltr" inputMode="tel" className={`${field} mt-1.5`} value={data.phone} onChange={set("phone")} autoComplete="tel" />
        </label>
        <label className="block text-sm font-semibold">
          {f.area}
          <input className={`${field} mt-1.5`} value={data.area} onChange={set("area")} />
        </label>
        <label className="block text-sm font-semibold">
          {f.service}
          <select className={`${field} mt-1.5`} value={data.service} onChange={set("service")}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm font-semibold">
        {f.details}
        <textarea required rows={4} className={`${field} mt-1.5 resize-none`} value={data.details} onChange={set("details")} />
      </label>
      <button type="submit" className="btn btn-wa w-full !py-4 text-base">
        <WhatsAppIcon width={22} height={22} />
        {f.send}
      </button>
      <p className="text-center text-xs text-slate-500">{f.note}</p>
    </form>
  );
}
