import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import copy from "@/data/copy.json";
import services from "@/data/services.json";

export function Services() {
  const ref = useGsapReveal({ stagger: 0.08, y: 30 });

  return (
    <section
      id="jasa"
      ref={ref}
      className="scroll-mt-24 py-20 md:py-28 bg-slate-50"
    >
      <div className="container">
        <SectionHeading
          eyebrow={copy.services.eyebrow}
          title={copy.services.title}
          accent={copy.services.titleAccent}
          subtitle={copy.services.subtitle}
        />

        <div className="mt-12 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
