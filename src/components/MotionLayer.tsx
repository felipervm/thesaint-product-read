"use client";
import { useEffect } from "react";
export default function MotionLayer() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    const start = async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ctx = gsap.context(() => {
          gsap.utils
            .toArray<HTMLElement>("[data-reveal]")
            .forEach((el) =>
              gsap.from(el, {
                y: 24,
                duration: 0.85,
                ease: "power2.out",
                scrollTrigger: { trigger: el, start: "top 91%", once: true },
              }),
            );
          gsap.to("[data-hero-photo]", {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          });
          gsap.utils
            .toArray<HTMLElement>("[data-question]")
            .forEach((el) =>
              gsap.from(el, {
                y: 20,
                duration: 0.75,
                ease: "power2.out",
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              }),
            );
        });
        return () => ctx.revert();
      });
      cleanup = () => mm.revert();
    };
    const timer = window.setTimeout(() => void start(), 160);
    return () => {
      disposed = true;
      clearTimeout(timer);
      cleanup?.();
    };
  }, []);
  return null;
}


