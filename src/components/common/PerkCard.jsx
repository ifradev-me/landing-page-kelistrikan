import { Icon } from "@/lib/icons.jsx";

/**
 * Pure UI: receives { icon, title, desc } — all data from perks.json.
 */
export function PerkCard({ icon, title, desc }) {
  return (
    <div
      data-reveal
      className="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand-amber hover:shadow-lg hover:-translate-y-1"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-amber transition-colors group-hover:bg-brand-amber group-hover:text-brand-navy">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
