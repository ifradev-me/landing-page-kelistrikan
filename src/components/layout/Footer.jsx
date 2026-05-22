import { Zap, Phone, MapPin, Clock } from "lucide-react";
import { useSanity } from "@/context/SanityContext";

const NAV_LINKS = [
  { href: "#tentang", labelKey: "tentang" },
  { href: "#jasa", labelKey: "jasa" },
  { href: "#kontak", labelKey: "kontak" },
];

export function Footer() {
  const { site, copy } = useSanity();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-900 text-white/90">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-amber text-brand-navy">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-lg text-white">{site.brand}</span>
                <span className="text-xs text-brand-amber font-semibold tracking-wider uppercase">
                  {site.brandSuffix}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              {copy.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-amber">
              {copy.footer.quickLinksTitle}
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-brand-amber transition-colors"
                  >
                    {copy.nav[link.labelKey]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-amber">
              {copy.footer.contactTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-brand-amber shrink-0" />
                <a href={`tel:${site.phone}`} className="hover:text-brand-amber transition-colors">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-amber shrink-0" />
                <span>{site.areas.join(", ")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-brand-amber shrink-0" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/60">
          <span>
            © {year} {site.brand} {site.brandSuffix}. Hak cipta dilindungi.
          </span>
          <span>{copy.footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
