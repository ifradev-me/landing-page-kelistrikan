import { useState } from "react";
import { Menu, Zap, Phone } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { useNavScrollState } from "@/hooks/useNavScrollState";
import { cn } from "@/lib/utils";
import { useSanity } from "@/context/SanityContext";

const NAV_LINKS = [
  { href: "#tentang", labelKey: "tentang" },
  { href: "#jasa", labelKey: "jasa" },
  { href: "#kontak", labelKey: "kontak" },
];

export function Navbar() {
  const { site, copy } = useSanity();
  const scrolled = useNavScrollState(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brand-navy/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-amber text-brand-navy">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-extrabold text-base md:text-lg">{site.brand}</span>
              <span className="text-[10px] md:text-xs text-brand-amber font-semibold tracking-wider uppercase">
                {site.brandSuffix}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-white/90 hover:text-brand-amber transition-colors"
              >
                {copy.nav[link.labelKey]}
              </a>
            ))}
            <WhatsAppButton size="sm" className="ml-2">
              {copy.nav.ctaButton}
            </WhatsAppButton>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Buka menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <div className="flex h-full flex-col p-6 pt-16">
          <div className="mb-8 flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-amber text-brand-navy">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-lg">{site.brand}</span>
              <span className="text-xs text-brand-amber font-semibold tracking-wider uppercase">
                {site.brandSuffix}
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-semibold hover:bg-white/10 transition-colors"
              >
                {copy.nav[link.labelKey]}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <WhatsAppButton size="lg" className="w-full">
              {copy.nav.ctaButton}
            </WhatsAppButton>
          </div>
        </div>
      </Sheet>
    </>
  );
}
