"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

export function CommandBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const background = backgroundRef.current;
      const grid = background?.querySelector<HTMLElement>(".lab-background__grid");
      const glow = background?.querySelector<HTMLElement>(".lab-background__glow");
      const axis = background?.querySelector<HTMLElement>(".lab-background__axis");
      if (!background || !grid || !glow || !axis) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from(axis, {
        scaleY: 0,
        transformOrigin: "50% 0%",
        duration: 1.4,
        ease: "lab-smooth",
      });

      gsap.to(grid, {
        backgroundPositionY: "192px",
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: 1.2,
        },
      });

      const xTo = gsap.quickTo(glow, "x", { duration: 1.5, ease: "power3.out" });
      const yTo = gsap.quickTo(glow, "y", { duration: 1.5, ease: "power3.out" });
      const handlePointer = (event: PointerEvent) => {
        xTo((event.clientX / window.innerWidth - 0.5) * 90);
        yTo((event.clientY / window.innerHeight - 0.5) * 70);
      };

      const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (pointerQuery.matches) window.addEventListener("pointermove", handlePointer);

      return () => window.removeEventListener("pointermove", handlePointer);
    },
    { scope: backgroundRef },
  );

  return (
    <div ref={backgroundRef} className="lab-background" aria-hidden="true">
      <div className="lab-background__grid" />
      <div className="lab-background__glow" />
      <div className="lab-background__axis" />
    </div>
  );
}
