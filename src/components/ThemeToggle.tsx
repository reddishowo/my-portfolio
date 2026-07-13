"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme ? "dark" : "light");
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span className="theme-toggle__sun" aria-hidden="true">
        <Sun size={15} strokeWidth={1.8} />
      </span>
      <span className="theme-toggle__moon" aria-hidden="true">
        <Moon size={15} strokeWidth={1.8} />
      </span>
    </button>
  );
}
