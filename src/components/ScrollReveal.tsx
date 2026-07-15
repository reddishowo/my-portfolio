"use client";

import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 28,
}: ScrollRevealProps) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scope = scopeRef.current;
      if (!scope) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(scope, { clearProps: "all" });
        return;
      }

      const trigger = {
        trigger: scope,
        start: "top 88%",
        once: true,
        invalidateOnRefresh: true,
      } as const;

      const entrance = gsap.from(scope, {
        autoAlpha: 0,
        y: distance,
        duration: 0.8,
        delay,
        ease: "lab-smooth",
        immediateRender: false,
        scrollTrigger: {
          ...trigger,
        },
      });

      const splitTargets = gsap.utils.toArray<HTMLElement>("[data-split]", scope);
      const splits = splitTargets.map((target) =>
        SplitText.create(target, {
          type: "lines,words",
          mask: "lines",
          autoSplit: true,
          aria: "auto",
          onSplit: (self) => {
            if (self.lines.length === 0) return;

            return gsap.from(self.lines, {
              autoAlpha: 0,
              yPercent: 105,
              duration: 0.9,
              stagger: 0.055,
              delay: delay + 0.02,
              ease: "lab-smooth",
              immediateRender: false,
              scrollTrigger: {
                ...trigger,
              },
            });
          },
        }),
      );

      return () => {
        entrance.kill();
        splits.forEach((split) => split.revert());
      };
    },
    { scope: scopeRef, dependencies: [delay, distance] },
  );

  return <div ref={scopeRef} className={className}>{children}</div>;
}
