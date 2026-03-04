"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
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

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2 sm:gap-6 shadow-2xl"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
              activeSection === item.name.toLowerCase() ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeSection === item.name.toLowerCase() && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-zinc-800 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.name}
          </a>
        ))}
      </motion.nav>
    </header>
  );
}