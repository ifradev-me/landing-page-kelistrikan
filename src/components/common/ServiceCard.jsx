import { ArrowRight } from "lucide-react";
import { Icon } from "@/lib/icons.jsx";
import { Button } from "@/components/ui/button";
import { openWhatsApp, buildServiceMessage } from "@/lib/whatsapp";
import { useSanity } from "@/context/SanityContext";

export function ServiceCard({ icon, title, desc, price }) {
  const { copy } = useSanity();
  const priceLabel = price && price.trim() ? price : copy.services.emptyPriceLabel;
  const isQuoteOnly = !price || !price.trim();

  return (
    <div
      data-reveal
      className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand-amber hover:shadow-xl hover:-translate-y-1"
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-brand-amber transition-colors group-hover:bg-brand-amber group-hover:text-brand-navy">
        <Icon name={icon} className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-xl font-bold text-brand-navy leading-snug">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{desc}</p>

      <div className="mt-5 border-t border-dashed border-slate-200 pt-4">
        <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
          Mulai dari
        </div>
        <div className={`mt-1 font-bold ${isQuoteOnly ? "text-base text-slate-500" : "text-xl text-brand-navy"}`}>
          {priceLabel}
        </div>
      </div>

      <Button
        variant="amber"
        size="default"
        className="mt-4 w-full"
        onClick={() => openWhatsApp(buildServiceMessage(title))}
      >
        {copy.services.orderButton}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
