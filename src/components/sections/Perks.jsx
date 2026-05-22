import { SectionHeading } from "@/components/common/SectionHeading";
import { PerkCard } from "@/components/common/PerkCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useSanity } from "@/context/SanityContext";

export function Perks() {
  const { copy, perks } = useSanity();
  const ref = useGsapReveal({ stagger: 0.08, y: 24 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionHeading
          eyebrow={copy.perks.eyebrow}
          title={copy.perks.title}
          accent={copy.perks.titleAccent}
        />

        <div className="mt-12 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <PerkCard key={perk.title} {...perk} />
          ))}
        </div>
      </div>
    </section>
  );
}
