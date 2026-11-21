// Copy for the per-neighbourhood landing pages (/[lang]/areas/[slug]).
// `a` is the neighbourhood name in the page language.

export function areaCopy(lang, a) {
  const J = { ar: "جدة", en: "Jeddah", ur: "جدہ" }[lang];
  const t = {
    ar: {
      metaTitle: `صيانة مكيفات في ${a} ${J} | فني مكيفات`,
      metaDesc: `فني مكيفات في حي ${a} بجدة: تصليح وصيانة وغسيل المكيفات، شحن فريون، تصليح ثلاجات وغسالات. زيارة سريعة إلى منزلك والسعر قبل البدء. اتصل أو راسلنا على واتساب.`,
      h1: `فني مكيفات وأجهزة منزلية في ${a}، ${J}`,
      sub: `تصليح مكيفات وثلاجات وغسالات وشحن فريون في حي ${a}`,
      intro: `نخدم سكان حي ${a} في ${J} بصيانة وتصليح المكيفات وشحن الفريون وغسيل المكيفات وتصليح الثلاجات والغسالات في المنزل. راسلنا على واتساب بالمشكلة وموقعك في ${a}، ونحرص على إرسال الفني في نفس اليوم في معظم الحالات.`,
      servicesTitle: `خدماتنا في ${a}`,
      whyTitle: `لماذا يختارنا سكان ${a}؟`,
      why: [
        "فنيون محترفون يشخّصون العطل ويشرحون الحل قبل البدء",
        "نؤكد لك السعر قبل أي إصلاح",
        "عمل نظيف ومرتب في منزلك أو محلك",
        "ضمان على الإصلاح",
      ],
      faqTitle: `أسئلة شائعة عن خدماتنا في ${a}`,
      faqs: [
        [`هل تخدمون حي ${a}؟`, `نعم، نخدم حي ${a} وجميع أحياء ${J}. راسلنا على واتساب بموقعك ونؤكد لك الموعد.`],
        [`كم يستغرق وصول الفني إلى ${a}؟`, `نحرص على الوصول في نفس اليوم في معظم الحالات، ويعتمد ذلك على الازدحام وعدد الطلبات. نؤكد لك الوقت عند التواصل.`],
        [`ما الخدمات المتوفرة في ${a}؟`, `تصليح مكيفات، شحن فريون، غسيل وتنظيف مكيفات، تركيب ونقل مكيفات، تصليح ثلاجات وتصليح غسالات.`],
      ],
      nearby: `أحياء أخرى نخدمها في ${J}`,
      wa: `السلام عليكم، أحتاج فني في حي ${a}`,
      crumbAreas: "الأحياء",
    },
    en: {
      metaTitle: `AC Repair in ${a}, ${J} | AC Technician`,
      metaDesc: `AC technician in ${a}, ${J}: AC repair, cleaning, gas charging and installation, plus fridge and washer repair at home. Price before we start. Call or WhatsApp.`,
      h1: `AC & Home Appliance Technician in ${a}, ${J}`,
      sub: `AC, refrigerator and washing machine repair in ${a}`,
      intro: `We serve homes, villas and shops in ${a}, ${J} with AC repair, AC cleaning, gas charging, installation, and refrigerator and washing machine repair. Message us on WhatsApp with the problem and your location in ${a} — in most cases we aim to send a technician the same day.`,
      servicesTitle: `Our services in ${a}`,
      whyTitle: `Why customers in ${a} choose us`,
      why: [
        "Skilled technicians who diagnose first and explain the fix",
        "Price confirmed before any repair starts",
        "Clean, tidy work at your home or shop",
        "Warranty on repairs",
      ],
      faqTitle: `FAQ: our service in ${a}`,
      faqs: [
        [`Do you serve ${a}?`, `Yes, we serve ${a} and all neighbourhoods of ${J}. Send your location on WhatsApp and we will confirm a time.`],
        [`How fast can a technician reach ${a}?`, `We aim for same-day visits in most cases, depending on traffic and the number of requests. We confirm the time when you contact us.`],
        [`Which services are available in ${a}?`, `AC repair, AC gas charging, AC cleaning, AC installation and relocation, refrigerator repair and washing machine repair.`],
      ],
      nearby: `Other areas we serve in ${J}`,
      wa: `Hello, I need a technician in ${a}`,
      crumbAreas: "Areas",
    },
    ur: {
      metaTitle: `${a} ${J} میں اے سی کی مرمت | ٹیکنیشن`,
      metaDesc: `${J} کے علاقے ${a} میں اے سی ٹیکنیشن: اے سی کی مرمت، صفائی، گیس چارجنگ، انسٹالیشن، نیز فریج اور واشنگ مشین کی مرمت آپ کے گھر پر۔ کام سے پہلے قیمت طے۔ کال کریں یا واٹس ایپ کریں۔`,
      h1: `${J} کے علاقے ${a} میں اے سی اور گھریلو آلات کا ٹیکنیشن`,
      sub: `${a} میں اے سی، فریج اور واشنگ مشین کی مرمت`,
      intro: `ہم ${J} کے علاقے ${a} کے گھروں، ولاز اور دکانوں میں اے سی کی مرمت، اے سی کی صفائی، گیس چارجنگ، انسٹالیشن، اور فریج و واشنگ مشین کی مرمت کی خدمات دیتے ہیں۔ واٹس ایپ پر مسئلہ اور ${a} میں اپنی لوکیشن بھیجیں، زیادہ تر صورتوں میں ہم اسی دن ٹیکنیشن بھیجنے کی کوشش کرتے ہیں۔`,
      servicesTitle: `${a} میں ہماری خدمات`,
      whyTitle: `${a} کے لوگ ہمیں کیوں چنتے ہیں`,
      why: [
        "ماہر ٹیکنیشن جو پہلے تشخیص کرتے ہیں اور حل سمجھاتے ہیں",
        "مرمت شروع کرنے سے پہلے قیمت طے",
        "آپ کے گھر یا دکان میں صاف ستھرا کام",
        "مرمت پر وارنٹی",
      ],
      faqTitle: `${a} میں ہماری سروس کے بارے میں سوالات`,
      faqs: [
        [`کیا آپ ${a} میں خدمات دیتے ہیں؟`, `جی ہاں، ہم ${a} اور ${J} کے تمام علاقوں میں خدمات دیتے ہیں۔ واٹس ایپ پر لوکیشن بھیجیں، ہم وقت کی تصدیق کر دیں گے۔`],
        [`${a} میں ٹیکنیشن کتنی جلدی پہنچتا ہے؟`, `ہم زیادہ تر صورتوں میں اسی دن پہنچنے کی کوشش کرتے ہیں، جو ٹریفک اور آرڈرز کی تعداد پر منحصر ہے۔ رابطے پر ہم وقت کی تصدیق کرتے ہیں۔`],
        [`${a} میں کون سی خدمات دستیاب ہیں؟`, `اے سی کی مرمت، گیس چارجنگ، اے سی کی صفائی، انسٹالیشن اور منتقلی، فریج کی مرمت اور واشنگ مشین کی مرمت۔`],
      ],
      nearby: `${J} کے دیگر علاقے جہاں ہم خدمات دیتے ہیں`,
      wa: `السلام علیکم، مجھے ${a} میں ٹیکنیشن چاہیے`,
      crumbAreas: "علاقے",
    },
  };
  return t[lang];
}
