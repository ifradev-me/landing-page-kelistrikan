import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal child elements with subtle fade-up + stagger on scroll.
 *
 * Usage:
 *   const ref = useGsapReveal();
 *   return <section ref={ref}>... children with [data-reveal] ...</section>
 *
 * Any descendant of the returned ref with `data-reveal` attribute will be animated.
 */
export function useGsapReveal(options = {}) {
  const {
    selector = "[data-reveal]",
    y = 24,
    duration = 0.7,
    stagger = 0.1,
    start = "top 80%",
    once = true,
  } = options;

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const targets = ref.current.querySelectorAll(selector);
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start,
          once,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [selector, y, duration, stagger, start, once]);

  return ref;
}
