"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { href: "#work", label: "work" },
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
] as const;

export function SiteHeader() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="wordmark" href="#top" aria-label="Farriel Arrianta, home">
          <span className="wordmark__prompt">$</span>
          <span>farriel@portfolio</span>
          <span className="nav-slash">:~</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : ""}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="nav-slash">./</span>
                {item.label}
                {isActive && (
                  <motion.span
                    className="nav-underline"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
