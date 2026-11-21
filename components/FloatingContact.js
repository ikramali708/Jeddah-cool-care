import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/site";

// Desktop: floating WhatsApp button (phones use the bottom tab bar in MobileNav).
export default function FloatingContact({ t }) {
  const wa = waLink(t.messages.generic);
  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="wa-pulse fixed bottom-6 end-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-xl transition hover:scale-110 lg:grid"
      >
        <WhatsAppIcon width={30} height={30} />
      </a>
    </>
  );
}
