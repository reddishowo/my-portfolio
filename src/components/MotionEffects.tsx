"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    if (!reduceMotion && !coarse) {
      document.body.classList.add("scanlines");
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

    return () => {
      document.body.classList.remove("scanlines");
      root.classList.remove("is-scrolled");
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
