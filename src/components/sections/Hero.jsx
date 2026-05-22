import { CheckCircle2, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useSanity } from "@/context/SanityContext";

export function Hero() {
  const { copy } = useSanity();
  const ref = useGsapReveal({ stagger: 0.12, y: 32, duration: 0.8 });

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/stock-photo.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy/95 via-brand-navy/85 to-brand-navy-700/75"
        aria-hidden="true"
      />
      {/* Decorative amber glow */}
      <div
        className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-amber/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative py-24 md:py-28">
        <div className="max-w-3xl">
          <span
            data-reveal
            className="inline-flex items-center gap-2 rounded-full bg-brand-amber/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-amber border border-brand-amber/30"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-amber animate-pulse" />
            {copy.hero.eyebrow}
          </span>

          <h1
            data-reveal
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white tracking-tight"
          >
            {copy.hero.title}
            <br />
            <span className="text-brand-amber">{copy.hero.titleAccent}</span>
          </h1>

          <p
            data-reveal
            className="mt-6 text-base md:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed"
          >
            {copy.hero.subtitle}
          </p>

          <div data-reveal className="mt-8 flex flex-col sm:flex-row gap-3">
            <WhatsAppButton size="xl" variant="amber">
              {copy.hero.ctaPrimary}
            </WhatsAppButton>
            <Button asChild size="xl" variant="outline">
              <a href="#jasa">
                {copy.hero.ctaSecondary}
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <ul data-reveal className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
            {copy.hero.trustBadges.map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-amber shrink-0" />
                <span className="font-medium">{badge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
