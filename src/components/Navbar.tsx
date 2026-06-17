"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Command } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navItems.map(item => item.name.toLowerCase());
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollY >= el.offsetTop - 200 && scrollY < el.offsetTop + el.offsetHeight - 200) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNav = (layoutId: string, initialY: number) => (
    <motion.nav 
        initial={{ y: initialY, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-full items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950/85 px-2 py-2 shadow-2xl shadow-black/40 backdrop-blur-md sm:gap-2"
      >
        <span className="mr-1 hidden items-center gap-2 border-r border-zinc-800 px-3 py-1.5 font-mono text-xs text-zinc-500 sm:inline-flex">
          <Command size={14} />
          nav
        </span>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`relative rounded-md px-3 py-1.5 font-mono text-xs transition-colors sm:text-sm ${
              activeSection === item.name.toLowerCase() ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-100"
            }`}
          >
            {activeSection === item.name.toLowerCase() && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 -z-10 rounded-md bg-cyan-200"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="sm:hidden">{item.name === "Experience" ? "xp" : item.name.toLowerCase()}</span>
            <span className="hidden sm:inline">{item.name.toLowerCase()}</span>
          </a>
        ))}
      </motion.nav>
  );

  return (
    <>
      <header className="fixed left-0 right-0 top-4 z-50 hidden justify-center px-4 sm:flex">
        {renderNav("active-pill-desktop", -12)}
      </header>
      <header className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 sm:hidden">
        {renderNav("active-pill-mobile", 12)}
      </header>
    </>
  );
}
