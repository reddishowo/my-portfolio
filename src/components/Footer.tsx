"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowUp } from "lucide-react";
import { useRef, type MouseEvent } from "react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const footer = footerRef.current;
      if (!footer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".site-footer__line", {
        scaleX: 0,
        transformOrigin: "0 50%",
        duration: 1,
        ease: "lab-smooth",
        immediateRender: false,
        scrollTrigger: {
          trigger: footer,
          start: "top 96%",
          once: true,
          invalidateOnRefresh: true,
        },
      });
      gsap.from(".site-footer__inner > *", {
        autoAlpha: 0,
        y: 12,
        stagger: 0.06,
        duration: 0.6,
        ease: "lab-smooth",
        immediateRender: false,
        scrollTrigger: {
          trigger: footer,
          start: "top 92%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      const link = footer.querySelector<HTMLElement>(".site-footer__inner > a");
      const arrow = link?.querySelector<SVGElement>("svg");
      if (!link || !arrow) return;
      const enter = () => gsap.to(arrow, { y: -4, duration: 0.28, ease: "power2.out" });
      const leave = () => gsap.to(arrow, { y: 0, duration: 0.28, ease: "power2.out" });
      link.addEventListener("pointerenter", enter);
      link.addEventListener("pointerleave", leave);
      return () => {
        link.removeEventListener("pointerenter", enter);
        link.removeEventListener("pointerleave", leave);
      };
    },
    { scope: footerRef },
  );

  const backToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(window, {
      duration: reduceMotion ? 0 : 0.9,
      scrollTo: { y: 0 },
      ease: "power3.inOut",
    });
  };

  return (
    <footer ref={footerRef} className="site-footer">
      <span className="lab-container site-footer__line" aria-hidden="true" />
      <div className="lab-container site-footer__inner">
        <div>
          <strong>Farriel Arrianta</strong>
          <span>Software engineer / Malang, Indonesia</span>
        </div>
        <p>Designed as a digital workbench · {new Date().getFullYear()}</p>
        <a href="#home" onClick={backToTop}>
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
