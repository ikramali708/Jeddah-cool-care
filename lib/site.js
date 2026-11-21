// ============================================================
//  SITE SETTINGS  —  edit this file to update the whole website
//  (business name, phone, WhatsApp, reviews, gallery photos…)
// ============================================================

export const LOCALES = ["ar", "en", "ur"];
export const DEFAULT_LOCALE = "ar";

export const site = {
  name: { en: "Jeddah Cool Care", ar: "جدة كول كير", ur: "جدہ کول کیئر" },

  // Two numbers, both work for Call and WhatsApp. The FIRST one is used
  // for the main buttons; both are listed on the Contact page and footer.
  phones: ["+966571732049", "+966578047835"],
  phone: "+966571732049", // main Call button
  whatsapp: "966571732049", // main WhatsApp button (digits only, no "+")
  email: "info@jeddahcoolcare.com",
  address: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية", ur: "جدہ، سعودی عرب" },
  hours: { en: "Open daily · 8:00 AM – 11:00 PM", ar: "يومياً · من 8 صباحاً إلى 11 مساءً", ur: "روزانہ · صبح 8 بجے سے رات 11 بجے تک" },

  // Site URL is picked up automatically:
  //  1. NEXT_PUBLIC_SITE_URL (set this in Vercel when you connect a custom domain)
  //  2. otherwise Vercel's production domain (e.g. https://jeddah-cool-care.vercel.app)
  //  3. otherwise localhost while developing
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, ""),

  // TODO: real links (leave "" to hide)
  social: {
    snapchat: "https://www.snapchat.com/add/jeddahcoolcare",
    instagram: "",
    tiktok: "",
    googleMaps: "", // Google Business Profile / Maps link
  },
};

// Phone formatted for display e.g. "+966 50 000 0000"
export function displayPhone(num = site.phone) {
  const p = num.replace(/\D/g, "");
  if (p.startsWith("966") && p.length === 12) {
    return `+966 ${p.slice(3, 5)} ${p.slice(5, 8)} ${p.slice(8)}`;
  }
  return num;
}

export const waLink = (text = "", num = site.whatsapp) =>
  `https://wa.me/${num.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const telLink = `tel:${site.phone}`;

// ------------------------------------------------------------
//  REVIEWS  —  add real customer reviews here. The section is
//  hidden automatically while this list is empty.
//  Example:
//  { name: "Ahmed", area: { en: "Al Hamra", ar: "الحمراء" },
//    rating: 5,
//    text: { en: "Fast and professional.", ar: "سريعون ومحترفون." } },
// ------------------------------------------------------------
export const reviews = [];

// ------------------------------------------------------------
//  GALLERY  —  put photos inside /public/images and list them.
//  Example:
//  { src: "/images/ac-repair-1.jpg",
//    alt: { en: "AC repair in Al Hamra", ar: "تصليح مكيف في الحمراء" },
//    tag: "ac" }       // tag: ac | gas | fridge | washer
//  While the list is empty, tidy placeholders are shown.
// ------------------------------------------------------------
export const gallery = [
  {
    src: "/images/ac-repair-jeddah.jpg",
    alt: { en: "Jeddah Cool Care technician repairing a split AC in Jeddah", ar: "فني جدة كول كير يصلح مكيف سبليت في جدة", ur: "جدہ کول کیئر کا ٹیکنیشن جدہ میں اسپلٹ اے سی کی مرمت کرتے ہوئے" },
    tag: "ac",
  },
  {
    src: "/images/ac-installation-jeddah.jpg",
    alt: { en: "AC installation by Jeddah Cool Care team in Jeddah", ar: "تركيب مكيف سبليت بواسطة فريق جدة كول كير في جدة", ur: "جدہ کول کیئر کی ٹیم جدہ میں اے سی انسٹال کرتے ہوئے" },
    tag: "ac",
  },
  {
    src: "/images/refrigerator-repair-jeddah.jpg",
    alt: { en: "Refrigerator compressor repair at a home in Jeddah", ar: "تصليح كمبروسر ثلاجة في منزل بجدة", ur: "جدہ میں گھر پر فریج کے کمپریسر کی مرمت" },
    tag: "fridge",
  },
  {
    src: "/images/ac-outdoor-unit-delivery-jeddah.jpg",
    alt: { en: "Jeddah Cool Care team unloading an AC outdoor unit for installation", ar: "فريق جدة كول كير ينزل وحدة مكيف خارجية للتركيب", ur: "جدہ کول کیئر کی ٹیم انسٹالیشن کے لیے اے سی کا آؤٹ ڈور یونٹ اتارتے ہوئے" },
    tag: "ac",
  },
];

// ------------------------------------------------------------
//  AREAS served in Jeddah
// ------------------------------------------------------------
export const areas = [
  { slug: "al-hamra", en: "Al Hamra", ar: "الحمراء", ur: "الحمراء" },
  { slug: "al-rawdah", en: "Al Rawdah", ar: "الروضة", ur: "الروضہ" },
  { slug: "al-safa", en: "Al Safa", ar: "الصفا", ur: "الصفا" },
  { slug: "al-shati", en: "Al Shati", ar: "الشاطئ", ur: "الشاطی" },
  { slug: "obhur", en: "Obhur", ar: "أبحر", ur: "ابحر" },
  { slug: "al-naseem", en: "Al Naseem", ar: "النسيم", ur: "النسیم" },
  { slug: "al-salamah", en: "Al Salamah", ar: "السلامة", ur: "السلامہ" },
  { slug: "al-marwah", en: "Al Marwah", ar: "المروة", ur: "المروہ" },
  { slug: "al-zahraa", en: "Al Zahraa", ar: "الزهراء", ur: "الزہراء" },
  { slug: "al-aziziyah", en: "Al Aziziyah", ar: "العزيزية", ur: "العزیزیہ" },
  { slug: "al-basateen", en: "Al Basateen", ar: "البساتين", ur: "البساتین" },
  { slug: "al-faisaliyah", en: "Al Faisaliyah", ar: "الفيصلية", ur: "الفیصلیہ" },
];

// ------------------------------------------------------------
//  SERVICES
// ------------------------------------------------------------
const baseServices = [
  {
    slug: "ac-repair",
    icon: "ac",
    en: {
      title: "AC Repair in Jeddah",
      short: "AC not cooling, leaking water, making noise or not turning on? We diagnose and fix it fast.",
      intro:
        "Jeddah's heat and humidity put air conditioners under heavy pressure. Our technicians repair split, window, cassette, ducted and central AC units of all major brands — at your home, villa, shop or office.",
      issues: [
        "AC not cooling or weak cooling",
        "Water leaking from the indoor unit",
        "Strange noise or bad smell",
        "AC not turning on or turning off by itself",
        "Ice building up on the unit",
        "Remote, thermostat or board faults",
      ],
      faqs: [
        ["How fast can a technician reach me?", "We aim to reach most areas of Jeddah the same day. Message us on WhatsApp and we will confirm a time."],
        ["Do you charge for inspection?", "Please confirm the current inspection offer with us on WhatsApp — we tell you the price before starting any repair."],
        ["Which AC brands do you repair?", "All common brands including split, window, cassette and central systems."],
      ],
    },
    ar: {
      title: "تصليح مكيفات في جدة",
      short: "المكيف لا يبرد أو يسرب ماء أو يصدر صوتاً أو لا يعمل؟ نشخّص العطل ونصلحه بسرعة.",
      intro:
        "حرارة ورطوبة جدة تضع المكيفات تحت ضغط كبير. فنيونا يصلحون المكيفات سبليت وشباك وكاسيت ومخفي ومركزي لجميع الماركات المعروفة، في منزلك أو فيلتك أو محلك أو مكتبك.",
      issues: [
        "المكيف لا يبرد أو التبريد ضعيف",
        "تسريب ماء من الوحدة الداخلية",
        "صوت غريب أو رائحة كريهة",
        "المكيف لا يعمل أو ينطفئ وحده",
        "تكوّن ثلج على الوحدة",
        "أعطال الريموت أو الثرموستات أو البوردة",
      ],
      faqs: [
        ["كم يستغرق وصول الفني؟", "نحرص على الوصول لمعظم أحياء جدة في نفس اليوم. راسلنا على واتساب وسنؤكد لك الموعد."],
        ["هل الكشف مدفوع؟", "يرجى التأكد من عرض الكشف الحالي معنا على واتساب، ونخبرك بالسعر قبل بدء أي إصلاح."],
        ["ما هي ماركات المكيفات التي تصلحونها؟", "جميع الماركات الشائعة، سبليت وشباك وكاسيت ومركزي."],
      ],
    },
  },
  {
    slug: "ac-gas-charging",
    icon: "gas",
    en: {
      title: "AC Gas Charging in Jeddah",
      short: "Leak check and refrigerant (Freon) refill for every AC type — R22, R410A, R32 and more.",
      intro:
        "If your AC blows warm air, low refrigerant is one of the most common causes. We find the leak first, repair it, then refill the correct gas to the right pressure so your AC cools properly again.",
      issues: [
        "Leak detection with pressure testing",
        "Refilling R22, R410A, R32 and R134a",
        "Compressor and pressure check",
        "Pipe and valve leak repair",
        "Full cooling performance test after service",
      ],
      faqs: [
        ["How do I know my AC needs gas?", "Weak cooling, ice on the pipes and a hissing sound are common signs. Our technician measures the pressure to confirm."],
        ["Is gas refilling every year normal?", "No. A properly sealed AC should not lose gas. If it does, there is a leak — we find and fix it, not just top it up."],
      ],
    },
    ar: {
      title: "شحن فريون مكيفات في جدة",
      short: "كشف تسريب وتعبئة فريون لجميع أنواع المكيفات، R22 وR410A وR32 وغيرها.",
      intro:
        "إذا كان المكيف ينفخ هواءً دافئاً فنقص الفريون من أشهر الأسباب. نكشف مكان التسريب أولاً ونصلحه، ثم نعبّي الغاز المناسب بالضغط الصحيح ليعود المكيف للتبريد بكفاءة.",
      issues: [
        "كشف التسريب باختبار الضغط",
        "تعبئة R22 وR410A وR32 وR134a",
        "فحص الكمبروسر والضغط",
        "إصلاح تسريب المواسير والصمامات",
        "اختبار أداء التبريد بعد الصيانة",
      ],
      faqs: [
        ["كيف أعرف أن مكيفي يحتاج فريون؟", "ضعف التبريد وتكوّن الثلج على المواسير وصوت الهسهسة من العلامات الشائعة. يقيس الفني الضغط للتأكد."],
        ["هل تعبئة الفريون كل سنة أمر طبيعي؟", "لا. المكيف السليم لا يفقد الغاز. إن حدث ذلك فهناك تسريب، ونحن نكتشفه ونصلحه ولا نكتفي بالتعبئة."],
      ],
    },
  },
  {
    slug: "ac-installation",
    icon: "install",
    en: {
      title: "AC Installation & Maintenance in Jeddah",
      short: "Professional installation, relocation, deep cleaning and scheduled maintenance for all AC types.",
      intro:
        "A clean, well-installed AC cools better, uses less electricity and lasts longer. We install new units, move existing ones, and offer deep cleaning and regular maintenance visits.",
      issues: [
        "New split and window AC installation",
        "AC removal and relocation",
        "Deep cleaning of indoor and outdoor units",
        "Drain pipe cleaning",
        "Seasonal maintenance before summer",
      ],
      faqs: [
        ["How often should I clean my AC?", "In Jeddah's dusty, humid climate we recommend a service at least once or twice a year."],
        ["Can you install an AC I bought elsewhere?", "Yes. Send us the type and your location on WhatsApp and we will arrange it."],
      ],
    },
    ar: {
      title: "تركيب وصيانة مكيفات في جدة",
      short: "تركيب ونقل وتنظيف عميق وصيانة دورية لجميع أنواع المكيفات.",
      intro:
        "المكيف النظيف والمركّب بشكل صحيح يبرّد أفضل ويوفر الكهرباء ويعمّر أطول. نركّب المكيفات الجديدة وننقل القديمة ونقدم التنظيف العميق والصيانة الدورية.",
      issues: [
        "تركيب مكيف سبليت وشباك جديد",
        "فك ونقل المكيفات",
        "تنظيف عميق للوحدة الداخلية والخارجية",
        "تنظيف مواسير الصرف",
        "صيانة موسمية قبل الصيف",
      ],
      faqs: [
        ["كم مرة أنظف المكيف؟", "في أجواء جدة المغبرة والرطبة ننصح بصيانة مرة أو مرتين في السنة على الأقل."],
        ["هل تركّبون مكيفاً اشتريته من مكان آخر؟", "نعم. أرسل لنا النوع وموقعك على واتساب وسنرتب الموعد."],
      ],
    },
  },
  {
    slug: "refrigerator-repair",
    icon: "fridge",
    en: {
      title: "Refrigerator Repair in Jeddah",
      short: "Fridge or freezer not cooling, freezing too much, leaking or noisy? We repair all brands at home.",
      intro:
        "A faulty fridge puts your food at risk. We repair single-door, double-door, side-by-side and freezer units on the spot wherever possible, with genuine parts.",
      issues: [
        "Fridge or freezer not cooling",
        "Over-freezing or frost build-up",
        "Water leaking inside or under the fridge",
        "Compressor starting problems",
        "Loud noise or constant running",
        "Door seal and thermostat replacement",
      ],
      faqs: [
        ["Do you repair at my home?", "Yes. Our technician visits your home, diagnoses the fault and repairs it on site in most cases."],
        ["Do you fill refrigerator gas?", "Yes. We find the leak, fix it, and refill the correct gas."],
      ],
    },
    ar: {
      title: "تصليح ثلاجات في جدة",
      short: "الثلاجة أو الفريزر لا يبرد أو يتجمد زيادة أو يسرب أو يصدر صوتاً؟ نصلح جميع الماركات في المنزل.",
      intro:
        "عطل الثلاجة يعرّض طعامك للخطر. نصلح الثلاجات بباب واحد وبابين وسايد باي سايد والفريزرات في موقعك قدر الإمكان بقطع غيار أصلية.",
      issues: [
        "الثلاجة أو الفريزر لا يبرد",
        "تجمد زائد أو تراكم ثلج",
        "تسريب ماء داخل الثلاجة أو أسفلها",
        "مشاكل تشغيل الكمبروسر",
        "صوت عالٍ أو عمل مستمر",
        "تغيير الجوانات والثرموستات",
      ],
      faqs: [
        ["هل تصلحون في المنزل؟", "نعم. يزورك الفني ويشخّص العطل ويصلحه في موقعك في أغلب الحالات."],
        ["هل تعبّون غاز الثلاجة؟", "نعم. نكشف التسريب ونصلحه ثم نعبّي الغاز المناسب."],
      ],
    },
  },
  {
    slug: "washing-machine-repair",
    icon: "washer",
    en: {
      title: "Washing Machine Repair in Jeddah",
      short: "Front-load, top-load and automatic washers — not draining, not spinning, leaking? We fix it.",
      intro:
        "From water not draining to a drum that will not spin, we repair automatic and semi-automatic washing machines and washer-dryers of all brands, at your home.",
      issues: [
        "Not draining or not filling with water",
        "Drum not spinning",
        "Water leaking from the door or bottom",
        "Loud banging or vibration",
        "Machine not turning on or stopping mid-cycle",
        "Error codes and control board faults",
      ],
      faqs: [
        ["Do you repair front-load and top-load machines?", "Yes, both, plus washer-dryer combos."],
        ["Will you tell me the cost first?", "Yes. After diagnosis we give you the price before any repair begins."],
      ],
    },
    ar: {
      title: "تصليح غسالات في جدة",
      short: "غسالات أمامية وعلوية وأوتوماتيك، لا تصرّف أو لا تدور أو تسرب؟ نصلحها.",
      intro:
        "من عدم تصريف الماء إلى توقف الدرام عن الدوران، نصلح الغسالات الأوتوماتيك ونصف الأوتوماتيك والغسالات المجففة لجميع الماركات في منزلك.",
      issues: [
        "عدم تصريف الماء أو عدم تعبئته",
        "الدرام لا يدور",
        "تسريب ماء من الباب أو من الأسفل",
        "صوت اهتزاز وطرق عالٍ",
        "الغسالة لا تعمل أو تتوقف أثناء الغسيل",
        "أكواد الأعطال وأعطال البوردة",
      ],
      faqs: [
        ["هل تصلحون الغسالات الأمامية والعلوية؟", "نعم الاثنين، وكذلك الغسالات المجففة."],
        ["هل تخبرونني بالتكلفة أولاً؟", "نعم. بعد الفحص نعطيك السعر قبل بدء أي إصلاح."],
      ],
    },
  },
];


const urServices = {
  "ac-repair": {
    title: "جدہ میں اے سی کی مرمت",
    short: "اے سی ٹھنڈا نہیں کر رہا، پانی ٹپک رہا ہے، آواز آ رہی ہے یا چل نہیں رہا؟ ہم خرابی کی تشخیص کر کے جلدی ٹھیک کرتے ہیں۔",
    intro: "جدہ کی گرمی اور نمی اے سی پر بہت دباؤ ڈالتی ہے۔ ہمارے ٹیکنیشن اسپلٹ، ونڈو، کیسٹ، ڈکٹڈ اور سینٹرل اے سی کی تمام معروف برانڈز کی مرمت آپ کے گھر، ولا، دکان یا دفتر میں کرتے ہیں۔",
    issues: [
      "اے سی ٹھنڈا نہیں کر رہا یا کولنگ کم ہے",
      "اندرونی یونٹ سے پانی ٹپکنا",
      "عجیب آواز یا بدبو",
      "اے سی چلتا نہیں یا خود بند ہو جاتا ہے",
      "یونٹ پر برف جم جانا",
      "ریموٹ، تھرموسٹیٹ یا بورڈ کی خرابی",
    ],
    faqs: [
      ["ٹیکنیشن کتنی جلدی پہنچ جاتا ہے؟", "ہم جدہ کے زیادہ تر علاقوں میں اسی دن پہنچنے کی کوشش کرتے ہیں۔ واٹس ایپ پر پیغام کریں، ہم وقت کی تصدیق کر دیں گے۔"],
      ["کیا معائنے کی فیس ہے؟", "براہ کرم واٹس ایپ پر موجودہ معائنہ آفر کی تصدیق کر لیں۔ کسی بھی مرمت سے پہلے ہم آپ کو قیمت بتاتے ہیں۔"],
      ["آپ کون سی برانڈز کے اے سی ٹھیک کرتے ہیں؟", "تمام عام برانڈز، اسپلٹ، ونڈو، کیسٹ اور سینٹرل سسٹم۔"],
    ],
  },
  "ac-gas-charging": {
    title: "جدہ میں اے سی گیس چارجنگ",
    short: "ہر قسم کے اے سی کے لیے لیکیج چیک اور ریفریجرنٹ (فریون) بھرائی، R22، R410A، R32 اور دیگر۔",
    intro: "اگر آپ کا اے سی گرم ہوا دے رہا ہے تو گیس کی کمی سب سے عام وجوہات میں سے ہے۔ ہم پہلے لیکیج تلاش کر کے ٹھیک کرتے ہیں، پھر درست گیس صحیح پریشر کے ساتھ بھرتے ہیں تاکہ اے سی دوبارہ ٹھیک ٹھنڈا کرے۔",
    issues: [
      "پریشر ٹیسٹ کے ذریعے لیکیج کی نشاندہی",
      "R22، R410A، R32 اور R134a کی بھرائی",
      "کمپریسر اور پریشر کی جانچ",
      "پائپ اور والو کی لیکیج کی مرمت",
      "سروس کے بعد کولنگ پرفارمنس ٹیسٹ",
    ],
    faqs: [
      ["مجھے کیسے پتا چلے کہ اے سی کو گیس چاہیے؟", "کم کولنگ، پائپوں پر برف اور سیٹی جیسی آواز عام علامات ہیں۔ ہمارا ٹیکنیشن پریشر ناپ کر تصدیق کرتا ہے۔"],
      ["کیا ہر سال گیس بھروانا معمول ہے؟", "نہیں۔ ٹھیک بند اے سی کی گیس کم نہیں ہوتی۔ اگر ہو رہی ہے تو لیکیج ہے، ہم اسے تلاش کر کے ٹھیک کرتے ہیں، صرف گیس نہیں بھرتے۔"],
    ],
  },
  "ac-installation": {
    title: "جدہ میں اے سی انسٹالیشن اور مینٹیننس",
    short: "ہر قسم کے اے سی کی پیشہ ورانہ انسٹالیشن، منتقلی، ڈیپ کلیننگ اور باقاعدہ مینٹیننس۔",
    intro: "صاف اور درست طریقے سے لگا ہوا اے سی بہتر ٹھنڈا کرتا ہے، بجلی کم لیتا ہے اور زیادہ چلتا ہے۔ ہم نئے یونٹ لگاتے ہیں، پرانے منتقل کرتے ہیں اور ڈیپ کلیننگ و باقاعدہ مینٹیننس کی سہولت دیتے ہیں۔",
    issues: [
      "نئے اسپلٹ اور ونڈو اے سی کی انسٹالیشن",
      "اے سی اتارنا اور دوسری جگہ منتقل کرنا",
      "اندرونی اور بیرونی یونٹ کی ڈیپ کلیننگ",
      "ڈرین پائپ کی صفائی",
      "گرمیوں سے پہلے موسمی مینٹیننس",
    ],
    faqs: [
      ["اے سی کتنی بار صاف کروانا چاہیے؟", "جدہ کے گرد آلود اور مرطوب موسم میں ہم سال میں کم از کم ایک یا دو بار سروس کی سفارش کرتے ہیں۔"],
      ["کیا آپ کسی اور جگہ سے خریدا ہوا اے سی لگا دیتے ہیں؟", "جی ہاں۔ واٹس ایپ پر ہمیں اے سی کی قسم اور اپنی لوکیشن بھیجیں، ہم وقت طے کر لیں گے۔"],
    ],
  },
  "refrigerator-repair": {
    title: "جدہ میں فریج کی مرمت",
    short: "فریج یا فریزر ٹھنڈا نہیں کر رہا، زیادہ جم رہا ہے، پانی ٹپک رہا ہے یا شور کر رہا ہے؟ ہم تمام برانڈز گھر پر ٹھیک کرتے ہیں۔",
    intro: "خراب فریج آپ کے کھانے کو خطرے میں ڈال دیتا ہے۔ ہم سنگل ڈور، ڈبل ڈور، سائیڈ بائی سائیڈ اور فریزر کی مرمت جہاں تک ممکن ہو موقع پر اصل پرزوں کے ساتھ کرتے ہیں۔",
    issues: [
      "فریج یا فریزر ٹھنڈا نہیں کر رہا",
      "ضرورت سے زیادہ جمنا یا برف جمع ہونا",
      "فریج کے اندر یا نیچے سے پانی ٹپکنا",
      "کمپریسر اسٹارٹ ہونے کے مسائل",
      "تیز آواز یا مسلسل چلتے رہنا",
      "دروازے کی ربڑ اور تھرموسٹیٹ کی تبدیلی",
    ],
    faqs: [
      ["کیا آپ گھر پر مرمت کرتے ہیں؟", "جی ہاں۔ ہمارا ٹیکنیشن آپ کے گھر آ کر خرابی کی تشخیص کرتا ہے اور زیادہ تر صورتوں میں موقع پر ہی ٹھیک کر دیتا ہے۔"],
      ["کیا آپ فریج میں گیس بھرتے ہیں؟", "جی ہاں۔ ہم لیکیج تلاش کر کے ٹھیک کرتے ہیں اور پھر درست گیس بھرتے ہیں۔"],
    ],
  },
  "washing-machine-repair": {
    title: "جدہ میں واشنگ مشین کی مرمت",
    short: "فرنٹ لوڈ، ٹاپ لوڈ اور آٹومیٹک مشینیں، پانی نہیں نکل رہا، گھوم نہیں رہی یا لیک ہو رہی ہے؟ ہم ٹھیک کرتے ہیں۔",
    intro: "پانی نہ نکلنے سے لے کر ڈرم کے نہ گھومنے تک، ہم آٹومیٹک، سیمی آٹومیٹک اور واشر ڈرائر مشینوں کی تمام برانڈز کی مرمت آپ کے گھر پر کرتے ہیں۔",
    issues: [
      "پانی نہیں نکل رہا یا بھر نہیں رہا",
      "ڈرم نہیں گھوم رہا",
      "دروازے یا نیچے سے پانی لیک ہونا",
      "تیز کھڑکھڑاہٹ یا کمپن",
      "مشین چلتی نہیں یا دھلائی کے دوران رک جاتی ہے",
      "ایرر کوڈز اور کنٹرول بورڈ کی خرابی",
    ],
    faqs: [
      ["کیا آپ فرنٹ لوڈ اور ٹاپ لوڈ دونوں ٹھیک کرتے ہیں؟", "جی ہاں، دونوں، اور واشر ڈرائر بھی۔"],
      ["کیا آپ پہلے لاگت بتائیں گے؟", "جی ہاں۔ تشخیص کے بعد کسی بھی مرمت سے پہلے ہم آپ کو قیمت بتاتے ہیں۔"],
    ],
  },
};

export const services = baseServices.map((x) => ({ ...x, ur: urServices[x.slug] }));

export const getService = (slug) => services.find((s) => s.slug === slug);
