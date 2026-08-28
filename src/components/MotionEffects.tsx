"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    root.classList.add("motion-enabled");

    revealItems.forEach((item) => {
      const delay = Number(item.dataset.revealDelay ?? 0);
      item.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    const revealObserver = reduceMotion
      ? null
      : new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -10%", threshold: 0.08 },
        );

    if (revealObserver) {
      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    let frame = 0;
    const updateScrolledState = () => {
      frame = 0;
      root.classList.toggle("is-scrolled", window.scrollY > 28);
    };
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".site-nav a"));
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);
        if (!activeEntry) return;

        navLinks.forEach((link) => {
          const active = link.hash === `#${activeEntry.target.id}`;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-42% 0px -50%", threshold: 0 },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      root.classList.remove("motion-enabled", "is-scrolled");
      revealObserver?.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
