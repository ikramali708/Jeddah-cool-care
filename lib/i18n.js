import { LOCALES, DEFAULT_LOCALE, langNames } from "./locales";

export const hasLocale = (l) => LOCALES.includes(l);
export const dirOf = (lang) => (lang === "en" ? "ltr" : "rtl");
// pick the right string for the current language: pick(lang, { ar: "..", en: "..", ur: ".." })
export const pick = (lang, o) => o[lang] ?? o.en;
export const href = (lang, path = "") => `/${lang}${path}`;
export { LOCALES, DEFAULT_LOCALE, langNames };

export const ui = {
  en: {
    nav: { home: "Home", services: "Services", areas: "Areas", gallery: "Gallery", contact: "Contact" },
    call: "Call now",
    whatsapp: "WhatsApp",
    getQuote: "Get a free quote",
    menu: "Menu",
    hero: {
      badge: "Serving all of Jeddah",
      title: "AC Repair, Gas Charging & Home Appliance Service in Jeddah",
      subtitle:
        "Fast, honest and professional technicians for air conditioners, refrigerators and washing machines. Message us on WhatsApp and we come to you.",
      points: ["Same-day visits across Jeddah", "Price confirmed before we start", "Warranty on repairs"],
    },
    trust: [
      { t: "Fast response", d: "Same-day service in most areas" },
      { t: "Clear pricing", d: "You approve the price first" },
      { t: "Skilled technicians", d: "All major AC & appliance brands" },
      { t: "Repair warranty", d: "We stand behind our work" },
    ],
    servicesSection: {
      eyebrow: "What we do",
      title: "Our services",
      subtitle: "One trusted team for your cooling and home appliance needs.",
      more: "View service",
    },
    why: {
      eyebrow: "Why choose us",
      title: "Cool homes, no stress",
      items: [
        ["Technicians who explain", "We tell you what is wrong, what it costs and your options — then repair only with your approval."],
        ["Proper diagnosis, not guesswork", "We test pressure, electrical parts and airflow before replacing anything."],
        ["Respect for your home", "Clean, tidy work and shoe covers when needed."],
        ["Reach us the easy way", "WhatsApp, call or Snapchat — whichever you prefer."],
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Fixed in three simple steps",
      steps: [
        ["Message us", "Send your problem and location on WhatsApp, or call."],
        ["We visit & diagnose", "A technician arrives, finds the cause and gives you the price."],
        ["Repaired & tested", "We fix it, test the performance and leave your place clean."],
      ],
    },
    areasSection: {
      eyebrow: "Coverage",
      title: "We serve all areas of Jeddah",
      subtitle: "Do not see your neighbourhood? Message us — we probably cover it.",
      all: "See all areas",
    },
    reviewsSection: { eyebrow: "Reviews", title: "What our customers say" },
    faq: { eyebrow: "FAQ", title: "Common questions" },
    cta: {
      title: "AC or appliance problem? Let's fix it today.",
      subtitle: "Send us a message on WhatsApp with a photo or short description and we will reply quickly.",
    },
    pageServices: { title: "Our Services", subtitle: "AC, refrigerator and washing machine repair across Jeddah." },
    pageAreas: { title: "Areas We Serve in Jeddah", subtitle: "Home appliance and AC technicians across the city." },
    pageGallery: {
      title: "Our Work",
      subtitle: "A look at recent jobs. Real before/after photos from our team.",
      placeholder: "Photo coming soon",
      tags: { all: "All", ac: "AC", gas: "Gas", fridge: "Fridge", washer: "Washer" },
    },
    pageContact: {
      title: "Contact Us",
      subtitle: "Tell us what is wrong and we will get back to you quickly.",
      form: {
        name: "Your name",
        phone: "Phone number",
        area: "Area in Jeddah",
        service: "Service needed",
        details: "Describe the problem",
        send: "Send on WhatsApp",
        note: "This opens WhatsApp with your message ready to send.",
      },
      info: "Contact details",
      hours: "Working hours",
      address: "Location",
    },
    offer: {
      title: "AC Technician in Jeddah — Reach You Fast",
      subtitle: "Free inspection offer. Message us now and a technician comes to your door.",
      badge: "Limited offer",
      bullets: ["Fast response", "Price before we start", "Repair warranty"],
    },
    problemOf: "Problems we fix",
    faqOf: "Frequently asked questions",
    otherServices: "Other services",
    footer: {
      about: "Professional AC repair, gas charging and home appliance service in Jeddah, Saudi Arabia.",
      links: "Quick links",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    notFound: { title: "Page not found", text: "The page you are looking for does not exist.", back: "Back to home" },
    messages: {
      generic: "Hello Jeddah Cool Care, I need a technician.",
    },
  },
  ar: {
    nav: { home: "الرئيسية", services: "خدماتنا", areas: "الأحياء", gallery: "أعمالنا", contact: "اتصل بنا" },
    call: "اتصل الآن",
    whatsapp: "واتساب",
    getQuote: "اطلب عرض سعر مجاني",
    menu: "القائمة",
    hero: {
      badge: "نخدم جميع أحياء جدة",
      title: "تصليح مكيفات وشحن فريون وصيانة أجهزة منزلية في جدة",
      subtitle:
        "فنيون محترفون وسريعون وصادقون لصيانة المكيفات والثلاجات والغسالات. راسلنا على واتساب ونصلك أينما كنت.",
      points: ["زيارة في نفس اليوم داخل جدة", "نؤكد السعر قبل البدء", "ضمان على الإصلاح"],
    },
    trust: [
      { t: "استجابة سريعة", d: "خدمة في نفس اليوم لمعظم الأحياء" },
      { t: "أسعار واضحة", d: "توافق على السعر قبل العمل" },
      { t: "فنيون مهرة", d: "جميع ماركات المكيفات والأجهزة" },
      { t: "ضمان الإصلاح", d: "نتحمل مسؤولية عملنا" },
    ],
    servicesSection: {
      eyebrow: "ماذا نقدم",
      title: "خدماتنا",
      subtitle: "فريق واحد موثوق لاحتياجات التبريد والأجهزة المنزلية.",
      more: "تفاصيل الخدمة",
    },
    why: {
      eyebrow: "لماذا نحن",
      title: "منزل بارد بلا عناء",
      items: [
        ["فنيون يشرحون لك", "نخبرك بالعطل والتكلفة والخيارات المتاحة، ولا نصلح إلا بموافقتك."],
        ["تشخيص دقيق لا تخمين", "نفحص الضغط والأجزاء الكهربائية وتدفق الهواء قبل استبدال أي قطعة."],
        ["نحترم منزلك", "عمل نظيف ومرتب مع أغطية للأحذية عند الحاجة."],
        ["تواصل سهل", "واتساب أو اتصال أو سناب شات، كما تفضّل."],
      ],
    },
    process: {
      eyebrow: "كيف نعمل",
      title: "إصلاح في ثلاث خطوات بسيطة",
      steps: [
        ["راسلنا", "أرسل المشكلة وموقعك على واتساب أو اتصل بنا."],
        ["نزورك ونشخّص", "يصل الفني ويحدد السبب ويعطيك السعر."],
        ["نصلح ونختبر", "نصلح العطل ونختبر الأداء ونترك المكان نظيفاً."],
      ],
    },
    areasSection: {
      eyebrow: "التغطية",
      title: "نخدم جميع أحياء جدة",
      subtitle: "لا ترى حيّك؟ راسلنا، غالباً نغطيه.",
      all: "عرض كل الأحياء",
    },
    reviewsSection: { eyebrow: "آراء العملاء", title: "ماذا يقول عملاؤنا" },
    faq: { eyebrow: "أسئلة شائعة", title: "الأسئلة المتكررة" },
    cta: {
      title: "عندك مشكلة في المكيف أو الجهاز؟ نصلحها اليوم.",
      subtitle: "أرسل لنا رسالة على واتساب مع صورة أو وصف قصير وسنرد عليك بسرعة.",
    },
    pageServices: { title: "خدماتنا", subtitle: "تصليح المكيفات والثلاجات والغسالات في جميع أنحاء جدة." },
    pageAreas: { title: "الأحياء التي نخدمها في جدة", subtitle: "فنيو مكيفات وأجهزة منزلية في أنحاء المدينة." },
    pageGallery: {
      title: "أعمالنا",
      subtitle: "نظرة على بعض أعمالنا الأخيرة، صور حقيقية قبل وبعد من فريقنا.",
      placeholder: "الصورة قريباً",
      tags: { all: "الكل", ac: "مكيفات", gas: "فريون", fridge: "ثلاجات", washer: "غسالات" },
    },
    pageContact: {
      title: "اتصل بنا",
      subtitle: "أخبرنا بالمشكلة وسنعاود التواصل معك بسرعة.",
      form: {
        name: "الاسم",
        phone: "رقم الجوال",
        area: "الحي في جدة",
        service: "الخدمة المطلوبة",
        details: "وصف المشكلة",
        send: "إرسال عبر واتساب",
        note: "سيفتح واتساب ومعه رسالتك جاهزة للإرسال.",
      },
      info: "بيانات التواصل",
      hours: "ساعات العمل",
      address: "الموقع",
    },
    offer: {
      title: "فني مكيفات في جدة — يصلك بسرعة",
      subtitle: "عرض كشف مجاني. راسلنا الآن ويصلك الفني إلى باب بيتك.",
      badge: "عرض محدود",
      bullets: ["استجابة سريعة", "السعر قبل البدء", "ضمان على الإصلاح"],
    },
    problemOf: "الأعطال التي نصلحها",
    faqOf: "الأسئلة الشائعة",
    otherServices: "خدمات أخرى",
    footer: {
      about: "صيانة مكيفات وشحن فريون وإصلاح أجهزة منزلية باحتراف في جدة، المملكة العربية السعودية.",
      links: "روابط سريعة",
      contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة.",
    },
    notFound: { title: "الصفحة غير موجودة", text: "الصفحة التي تبحث عنها غير موجودة.", back: "العودة للرئيسية" },
    messages: {
      generic: "السلام عليكم جدة كول كير، أحتاج فنياً.",
    },
  },
  ur: {
    nav: { home: "ہوم", services: "خدمات", areas: "علاقے", gallery: "ہمارا کام", contact: "رابطہ" },
    call: "ابھی کال کریں",
    whatsapp: "واٹس ایپ",
    getQuote: "مفت قیمت معلوم کریں",
    menu: "مینو",
    hero: {
      badge: "پورے جدہ میں خدمات",
      title: "جدہ میں اے سی کی مرمت، گیس چارجنگ اور گھریلو آلات کی سروس",
      subtitle:
        "اے سی، فریج اور واشنگ مشین کے لیے تیز، ایماندار اور ماہر ٹیکنیشن۔ ہمیں واٹس ایپ پر پیغام کریں، ہم آپ کے پاس پہنچ جائیں گے۔",
      points: ["جدہ بھر میں اسی دن وزٹ", "کام شروع کرنے سے پہلے قیمت طے", "مرمت پر وارنٹی"],
    },
    trust: [
      { t: "فوری رسپانس", d: "زیادہ تر علاقوں میں اسی دن سروس" },
      { t: "واضح قیمت", d: "پہلے آپ قیمت منظور کرتے ہیں" },
      { t: "ماہر ٹیکنیشن", d: "تمام بڑی اے سی اور آلات کی برانڈز" },
      { t: "مرمت کی وارنٹی", d: "ہم اپنے کام کی ذمہ داری لیتے ہیں" },
    ],
    servicesSection: {
      eyebrow: "ہم کیا کرتے ہیں",
      title: "ہماری خدمات",
      subtitle: "کولنگ اور گھریلو آلات کی ضروریات کے لیے ایک قابل اعتماد ٹیم۔",
      more: "خدمت کی تفصیل",
    },
    why: {
      eyebrow: "ہمیں کیوں چنیں",
      title: "ٹھنڈا گھر، بغیر پریشانی",
      items: [
        ["ٹیکنیشن جو سمجھاتے ہیں", "ہم بتاتے ہیں کہ خرابی کیا ہے، خرچ کتنا ہوگا اور کیا آپشنز ہیں، پھر آپ کی منظوری سے ہی مرمت کرتے ہیں۔"],
        ["اندازہ نہیں، درست تشخیص", "کوئی پرزہ بدلنے سے پہلے ہم پریشر، الیکٹریکل پرزے اور ایئر فلو چیک کرتے ہیں۔"],
        ["آپ کے گھر کا احترام", "صاف ستھرا کام اور ضرورت پر جوتوں کے کور۔"],
        ["آسان رابطہ", "واٹس ایپ، کال یا اسنیپ چیٹ، جو آپ کو پسند ہو۔"],
      ],
    },
    process: {
      eyebrow: "کام کیسے ہوتا ہے",
      title: "تین آسان مراحل میں مرمت",
      steps: [
        ["ہمیں پیغام کریں", "اپنا مسئلہ اور لوکیشن واٹس ایپ پر بھیجیں یا کال کریں۔"],
        ["ہم آ کر تشخیص کرتے ہیں", "ٹیکنیشن پہنچ کر وجہ تلاش کرتا ہے اور آپ کو قیمت بتاتا ہے۔"],
        ["مرمت اور ٹیسٹ", "ہم ٹھیک کرتے ہیں، کارکردگی ٹیسٹ کرتے ہیں اور جگہ صاف چھوڑتے ہیں۔"],
      ],
    },
    areasSection: {
      eyebrow: "کوریج",
      title: "ہم جدہ کے تمام علاقوں میں خدمات دیتے ہیں",
      subtitle: "آپ کا علاقہ نظر نہیں آ رہا؟ ہمیں پیغام کریں، غالباً ہم وہاں بھی آتے ہیں۔",
      all: "تمام علاقے دیکھیں",
    },
    reviewsSection: { eyebrow: "تاثرات", title: "ہمارے کسٹمرز کیا کہتے ہیں" },
    faq: { eyebrow: "سوالات", title: "عام سوالات" },
    cta: {
      title: "اے سی یا آلے میں مسئلہ ہے؟ آج ہی ٹھیک کرتے ہیں۔",
      subtitle: "واٹس ایپ پر تصویر یا مختصر تفصیل کے ساتھ پیغام بھیجیں، ہم جلدی جواب دیں گے۔",
    },
    pageServices: { title: "ہماری خدمات", subtitle: "پورے جدہ میں اے سی، فریج اور واشنگ مشین کی مرمت۔" },
    pageAreas: { title: "جدہ میں ہمارے خدمات کے علاقے", subtitle: "پورے شہر میں اے سی اور گھریلو آلات کے ٹیکنیشن۔" },
    pageGallery: {
      title: "ہمارا کام",
      subtitle: "حالیہ کاموں کی جھلک۔ ہماری ٹیم کی اصل پہلے اور بعد کی تصاویر۔",
      placeholder: "تصویر جلد آ رہی ہے",
      tags: { all: "سب", ac: "اے سی", gas: "گیس", fridge: "فریج", washer: "واشنگ مشین" },
    },
    pageContact: {
      title: "رابطہ کریں",
      subtitle: "ہمیں بتائیں کیا مسئلہ ہے، ہم جلدی آپ سے رابطہ کریں گے۔",
      form: {
        name: "آپ کا نام",
        phone: "فون نمبر",
        area: "جدہ میں علاقہ",
        service: "مطلوبہ خدمت",
        details: "مسئلہ بیان کریں",
        send: "واٹس ایپ پر بھیجیں",
        note: "اس سے واٹس ایپ کھل جائے گا اور آپ کا پیغام بھیجنے کے لیے تیار ہوگا۔",
      },
      info: "رابطے کی تفصیلات",
      hours: "اوقات کار",
      address: "مقام",
    },
    offer: {
      title: "جدہ میں اے سی ٹیکنیشن، آپ تک جلدی پہنچتے ہیں",
      subtitle: "مفت معائنہ آفر۔ ابھی پیغام کریں، ٹیکنیشن آپ کے دروازے پر پہنچے گا۔",
      badge: "محدود آفر",
      bullets: ["فوری رسپانس", "کام سے پہلے قیمت", "مرمت پر وارنٹی"],
    },
    problemOf: "جو مسائل ہم ٹھیک کرتے ہیں",
    faqOf: "اکثر پوچھے جانے والے سوالات",
    otherServices: "دیگر خدمات",
    footer: {
      about: "جدہ، سعودی عرب میں اے سی کی مرمت، گیس چارجنگ اور گھریلو آلات کی پیشہ ورانہ سروس۔",
      links: "فوری لنکس",
      contact: "رابطہ",
      rights: "جملہ حقوق محفوظ ہیں۔",
    },
    notFound: { title: "صفحہ نہیں ملا", text: "آپ جو صفحہ تلاش کر رہے ہیں وہ موجود نہیں۔", back: "ہوم پر واپس جائیں" },
    messages: {
      generic: "السلام علیکم جدہ کول کیئر، مجھے ایک ٹیکنیشن چاہیے۔",
    },
  },
};
