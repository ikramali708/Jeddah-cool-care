import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { telLink, waLink } from "@/lib/site";

// Mobile: sticky bottom bar (Call + WhatsApp). Desktop: floating WhatsApp button.
export default function FloatingContact({ t }) {
  const wa = waLink(t.messages.generic);
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-ink/95 p-3 backdrop-blur-xl lg:hidden">
        <a href={telLink} className="btn btn-call !py-3">
          <PhoneIcon width={18} height={18} />
          {t.call}
        </a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa !py-3">
          <WhatsAppIcon width={20} height={20} />
          {t.whatsapp}
        </a>
      </div>
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
