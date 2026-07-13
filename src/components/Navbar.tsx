"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Profile", href: "#about", id: "about" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Log", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = ["home", ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.1, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-nav-wrap">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="site-nav__brand" href="#home" aria-label="Farriel Arrianta, back to home">
            <span className="site-nav__monogram">FA</span>
            <span className="site-nav__identity">
              <strong>Farriel Arrianta</strong>
              <span>Software engineer</span>
            </span>
          </a>

          <div className="site-nav__links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={activeSection === item.id ? "is-active" : undefined}
                aria-current={activeSection === item.id ? "location" : undefined}
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
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
