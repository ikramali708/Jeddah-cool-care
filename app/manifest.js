import { site } from "@/lib/site";

// Web App Manifest -> makes the site installable (Add to Home Screen)
export default function manifest() {
  return {
    id: "/ar",
    name: `${site.name.ar} | ${site.name.en}`,
    short_name: site.name.ar,
    description: "تصليح مكيفات وثلاجات وغسالات في جدة — AC & appliance repair in Jeddah",
    start_url: "/ar?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "ar",
    dir: "rtl",
    background_color: "#061b33",
    theme_color: "#061b33",
    categories: ["business", "utilities"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "خدماتنا", short_name: "خدمات", url: "/ar/services" },
      { name: "اتصل بنا", short_name: "اتصل", url: "/ar/contact" },
    ],
  };
}
