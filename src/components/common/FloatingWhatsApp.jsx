import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsApp, buildGenericMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Floating WhatsApp button shown after user scrolls past hero.
 * Fixed bottom-right, always visible while reading content.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Chat via WhatsApp"
      onClick={() => openWhatsApp(buildGenericMessage())}
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex items-center justify-center h-14 w-14 rounded-full bg-brand-whatsapp text-white shadow-lg shadow-brand-whatsapp/40 transition-all duration-300 hover:scale-110 hover:bg-brand-whatsapp-600",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-brand-whatsapp opacity-50 animate-ping" />
    </button>
  );
}
