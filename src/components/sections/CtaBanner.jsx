import { Zap, AlertTriangle } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import copy from "@/data/copy.json";

export function CtaBanner() {
  const ref = useGsapReveal({ stagger: 0.1, y: 24 });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy-700 to-brand-navy-900 px-6 py-12 md:px-12 md:py-16 lg:px-16 shadow-xl">
          {/* Decorative background icon */}
          <Zap
            className="absolute -right-6 -bottom-10 h-64 w-64 text-brand-amber/10 -rotate-12"
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-amber/20 blur-3xl" aria-hidden="true" />

          <div className="relative max-w-3xl">
            <div
              data-reveal
              className="inline-flex items-center gap-2 rounded-full bg-brand-amber/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-amber border border-brand-amber/30"
            >
              <AlertTriangle className="h-3.5 w-3.5" />
              {copy.cta.eyebrow}
            </div>

            <h2
              data-reveal
              className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white"
            >
              {copy.cta.title}{" "}
              <span className="text-brand-amber">{copy.cta.titleAccent}</span>
            </h2>

            <p data-reveal className="mt-5 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
              {copy.cta.subtitle}
            </p>

            <div data-reveal className="mt-8">
              <WhatsAppButton size="xl" variant="amber">
                {copy.cta.button}
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
