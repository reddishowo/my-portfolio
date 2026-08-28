"use client";

import { Flip, gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Profile", href: "#about", id: "about" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Log", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = () => setMenuOpen(false);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) closeMenu();
    };
    const desktopQuery = window.matchMedia("(min-width: 641px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [menuOpen]);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const progress = progressRef.current;
      if (!wrap || !progress) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(progress, { scaleX: 0, transformOrigin: "0 50%" });
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: reduceMotion ? false : 0.2,
        },
      });

      if (!reduceMotion) {
        gsap.from(wrap, {
          autoAlpha: 0,
          y: -24,
          duration: 0.85,
          delay: 0.08,
          ease: "lab-smooth",
        });
      }

      const sections = ["home", ...navItems.map((item) => item.id)]
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 48%",
          end: "bottom 48%",
          onToggle: ({ isActive }) => {
            if (isActive) setActiveSection(section.id);
          },
        });
      });

      if (!reduceMotion) {
        const media = gsap.matchMedia();
        media.add("(min-width: 641px)", () => {
          let shown = true;
          ScrollTrigger.create({
            start: 96,
            end: "max",
            onUpdate: (self) => {
              const shouldShow = self.direction < 0 || self.scroll() < 112;
              if (shouldShow === shown) return;
              shown = shouldShow;
              gsap.to(wrap, {
                yPercent: shouldShow ? 0 : -145,
                duration: 0.45,
                ease: "power3.out",
                overwrite: true,
              });
            },
          });
        });
        return () => media.revert();
      }
    },
    { scope: wrapRef },
  );

  useGSAP(
    () => {
      const pill = pillRef.current;
      const wrap = wrapRef.current;
      const target = wrap?.querySelector<HTMLElement>(`[data-nav-section="${activeSection}"]`);
      if (!pill) return;

      if (!target) {
        gsap.to(pill, { autoAlpha: 0, duration: 0.2 });
        return;
      }

      gsap.set(pill, { autoAlpha: 1 });
      Flip.fit(pill, target, {
        duration: 0.48,
        ease: "lab-smooth",
        scale: false,
      });
    },
    { scope: wrapRef, dependencies: [activeSection] },
  );

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    setMenuOpen(false);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(window, {
      duration: reduceMotion ? 0 : 0.85,
      scrollTo: { y: target, offsetY: 88 },
      ease: "power3.inOut",
    });
  };

  return (
    <>
      <div ref={progressRef} className="scroll-progress" />
      <header ref={wrapRef} className="site-nav-wrap">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="site-nav__brand" href="#home" aria-label="Farriel Arrianta, back to home" onClick={handleNavigate}>
            <span className="site-nav__monogram">FA</span>
            <span className="site-nav__identity">
              <strong>Farriel Arrianta</strong>
              <span>Software engineer</span>
            </span>
          </a>

          <div id="primary-navigation" className={`site-nav__links${menuOpen ? " is-open" : ""}`}>
            <span ref={pillRef} className="site-nav__active-pill" aria-hidden="true" />
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                data-nav-section={item.id}
                className={activeSection === item.id ? "is-active" : undefined}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={handleNavigate}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="site-nav__tools">
            <span className="site-nav__status">
              <span aria-hidden="true" />
              <span>build / 26</span>
            </span>
            <button
              ref={menuButtonRef}
              type="button"
              className="site-nav__menu-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
