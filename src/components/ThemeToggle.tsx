"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

const SUN_PATH = "M12 5a7 7 0 1 0 0 14a7 7 0 1 0 0-14z";
const MOON_PATH = "M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6a8.5 8.5 0 1 0 11.6 11.6z";

export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const coreRef = useRef<SVGPathElement>(null);
  const raysRef = useRef<SVGPathElement>(null);
  const animatingRef = useRef(false);

  useGSAP(
    () => {
      const dark = document.documentElement.classList.contains("dark");
      if (!coreRef.current || !raysRef.current) return;
      gsap.set(coreRef.current, { morphSVG: dark ? MOON_PATH : SUN_PATH });
      gsap.set(raysRef.current, { autoAlpha: dark ? 0 : 1, scale: dark ? 0.6 : 1 });
    },
    { scope: buttonRef },
  );

  const toggleTheme = () => {
    const button = buttonRef.current;
    const core = coreRef.current;
    const rays = raysRef.current;
    const wipe = document.getElementById("theme-wipe");
    if (!button || !core || !rays || !wipe || animatingRef.current) return;

    const nextTheme = !document.documentElement.classList.contains("dark");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme ? "dark" : "light");
    };

    if (reduceMotion) {
      applyTheme();
      gsap.set(core, { morphSVG: nextTheme ? MOON_PATH : SUN_PATH });
      gsap.set(rays, { autoAlpha: nextTheme ? 0 : 1, scale: nextTheme ? 0.6 : 1 });
      return;
    }

    animatingRef.current = true;
    const bounds = button.getBoundingClientRect();
    const originX = bounds.left + bounds.width / 2;
    const originY = bounds.top + bounds.height / 2;
    const radius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY),
    );

    gsap.timeline({
      onStart: () => {
        gsap.set(wipe, {
          autoAlpha: 1,
          backgroundColor: nextTheme ? "#0d0f0e" : "#f1efe8",
          x: originX - 8,
          y: originY - 8,
          scale: 0,
        });
      },
      onComplete: () => {
        gsap.set(wipe, { autoAlpha: 0, scale: 0 });
        animatingRef.current = false;
      },
    })
      .to(wipe, { scale: radius / 7, duration: 0.58, ease: "power3.inOut" }, 0)
      .add(applyTheme, 0.38)
      .to(
        core,
        {
          morphSVG: nextTheme ? MOON_PATH : SUN_PATH,
          rotation: nextTheme ? -18 : 0,
          duration: 0.55,
          ease: "lab-smooth",
        },
        0.22,
      )
      .to(
        rays,
        {
          autoAlpha: nextTheme ? 0 : 1,
          scale: nextTheme ? 0.55 : 1,
          rotation: nextTheme ? -35 : 0,
          duration: 0.4,
          ease: "power2.out",
        },
        0.22,
      )
      .to(wipe, { autoAlpha: 0, duration: 0.34, ease: "power2.out" }, 0.62);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <svg className="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          ref={raysRef}
          className="theme-toggle__rays"
          d="M12 1v2M12 21v2M1 12h2M21 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M19.8 4.2l-1.4 1.4M5.6 18.4l-1.4 1.4"
        />
        <path ref={coreRef} className="theme-toggle__core" d={SUN_PATH} />
      </svg>
    </button>
  );
}
