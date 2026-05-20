import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@/lib/icons.jsx";
import copy from "@/data/copy.json";
import perks from "@/data/perks.json";

gsap.registerPlugin(ScrollTrigger);

/**
 * Floating perk badges are anchored at the 4 corners of the photo.
 * They reuse perks.json — same source of truth as the Perks section below,
 * so editing perks.json updates both places automatically.
 */
const BADGE_POSITIONS = [
  "left-[-8%] top-[10%]",
  "right-[-6%] top-[22%]",
  "left-[-4%] bottom-[18%]",
  "right-[-8%] bottom-[8%]",
];

export function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const backdrop = el.querySelector("[data-about-backdrop]");
      const photo = el.querySelector("[data-about-photo]");
      const badges = el.querySelectorAll("[data-about-badge]");
      const copyBlocks = el.querySelectorAll("[data-about-copy]");

      gsap.set(backdrop, { scale: 0.7, opacity: 0 });
      gsap.set(photo, { opacity: 0, y: 30 });
      gsap.set(badges, { opacity: 0, scale: 0.6, y: 10 });
      gsap.set(copyBlocks, { opacity: 0, x: 30 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });

      tl.to(backdrop, { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" })
        .to(photo, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .to(
          badges,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "back.out(1.6)",
          },
          "-=0.3"
        )
        .to(
          copyBlocks,
          { opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="relative scroll-mt-24 py-20 md:py-28 bg-slate-50 overflow-hidden"
    >
      <div className="container">
        <div className="grid items-center gap-16 lg:gap-20 lg:grid-cols-2">
          {/* LEFT: photo + backdrop + floating perk badges */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Backdrop: navy circle + blueprint grid pattern */}
            <div
              data-about-backdrop
              className="relative aspect-square w-full"
            >
              <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-brand-navy to-brand-navy-700 shadow-2xl" />
              {/* Blueprint grid pattern overlay */}
              <div
                className="absolute inset-[8%] rounded-full opacity-15"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,184,28,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,184,28,.4) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-amber/30 animate-[spin_60s_linear_infinite]" />

              {/* Photo (transparent PNG floats above backdrop) */}
              <img
                data-about-photo
                src="/profile-no-bg.png"
                alt="Sunami — Teknisi Listrik"
                className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating perk badges — data from perks.json */}
            {perks.slice(0, 4).map((perk, i) => (
              <div
                key={perk.title}
                data-about-badge
                className={`absolute ${BADGE_POSITIONS[i]} z-10 hidden sm:flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-xl border border-slate-200`}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-amber text-brand-navy shrink-0">
                  <Icon name={perk.icon} className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-bold text-brand-navy whitespace-nowrap">
                  {perk.title}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT: copy */}
          <div className="space-y-6">
            <span
              data-about-copy
              className="inline-flex items-center rounded-full bg-brand-amber/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-brand-amber-600"
            >
              {copy.about.eyebrow}
            </span>
            <h2
              data-about-copy
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight"
            >
              {copy.about.title}{" "}
              <span className="text-brand-amber-600">{copy.about.titleAccent}</span>
            </h2>
            {copy.about.body.map((paragraph, idx) => (
              <p
                key={idx}
                data-about-copy
                className="text-base md:text-lg text-slate-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Stats */}
            <div
              data-about-copy
              className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200"
            >
              {copy.about.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-navy">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-slate-500 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-only inline badges (since absolute ones are hidden on sm-) */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:hidden">
          {perks.slice(0, 4).map((perk) => (
            <div
              key={perk.title}
              className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm border border-slate-200"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-amber text-brand-navy shrink-0">
                <Icon name={perk.icon} className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-sm font-bold text-brand-navy">{perk.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
