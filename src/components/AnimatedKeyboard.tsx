"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Braces, Code2, Database, Keyboard, PanelsTopLeft, Smartphone } from "lucide-react";
import type { ReactNode } from "react";

type KeySpec = {
  label: string;
  sublabel?: string;
  icon?: ReactNode;
  target?: string;
  wide?: boolean;
  accent?: "cyan" | "lime" | "amber" | "rose" | "violet";
};

const rows: KeySpec[][] = [
  [
    { label: "Next.js", sublabel: "app", icon: <PanelsTopLeft size={16} />, target: "projects", accent: "cyan", wide: true },
    { label: "TS", sublabel: "typed", icon: <Code2 size={16} />, target: "about", accent: "lime" },
    { label: "CRM", sublabel: "flows", icon: <Database size={16} />, target: "projects", accent: "amber" },
    { label: "React", sublabel: "ui", icon: <Braces size={16} />, target: "projects", accent: "violet" },
  ],
  [
    { label: "Flutter", sublabel: "mobile", icon: <Smartphone size={16} />, target: "projects", accent: "cyan", wide: true },
    { label: "Python", sublabel: "ml", icon: <Code2 size={16} />, target: "about", accent: "rose" },
    { label: "Mongo", sublabel: "data", icon: <Database size={16} />, target: "projects", accent: "lime" },
  ],
  [
    { label: "Projects", sublabel: "enter", target: "projects", accent: "amber", wide: true },
    { label: "About", sublabel: "tab", target: "about", accent: "cyan" },
    { label: "Contact", sublabel: "send", target: "contact", accent: "lime", wide: true },
  ],
];

const accentClasses: Record<NonNullable<KeySpec["accent"]>, string> = {
  cyan: "group-hover:border-cyan-300/70 group-hover:text-cyan-100 group-hover:shadow-cyan-400/20",
  lime: "group-hover:border-lime-300/70 group-hover:text-lime-100 group-hover:shadow-lime-400/20",
  amber: "group-hover:border-amber-300/70 group-hover:text-amber-100 group-hover:shadow-amber-400/20",
  rose: "group-hover:border-rose-300/70 group-hover:text-rose-100 group-hover:shadow-rose-400/20",
  violet: "group-hover:border-violet-300/70 group-hover:text-violet-100 group-hover:shadow-violet-400/20",
};

function scrollToSection(target?: string) {
  if (!target) return;
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function AnimatedKeyboard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 1, y: 16, rotateX: 5 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative w-full max-w-3xl"
    >
      <div className="absolute inset-x-6 bottom-0 h-12 translate-y-8 bg-cyan-400/10 blur-2xl" />
      <div className="relative border border-zinc-700/70 bg-zinc-950/80 p-3 shadow-2xl shadow-black/60 backdrop-blur-md sm:p-4 keyboard-shell">
        <div className="mb-3 flex items-center justify-between border-b border-zinc-800 pb-3 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-2 text-zinc-300">
            <Keyboard size={14} />
            farriel.dev/input
          </span>
          <span className="font-mono">active</span>
        </div>

        <div className="space-y-2">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {row.map((key, keyIndex) => {
                return (
                  <motion.button
                    key={key.label}
                    type="button"
                    onClick={() => scrollToSection(key.target)}
                    initial={shouldReduceMotion ? false : { opacity: 1, y: 8 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.5 + rowIndex * 0.08 + keyIndex * 0.04 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { y: 2, scale: 0.98 }}
                    className={`group relative min-h-18 overflow-hidden border border-zinc-800 bg-zinc-900 px-3 py-3 text-left text-zinc-300 shadow-lg shadow-black/30 transition-colors duration-300 ${key.wide ? "col-span-2" : ""} ${accentClasses[key.accent ?? "cyan"]}`}
                    aria-label={`Jump to ${key.target ?? key.label}`}
                  >
                    <span className="absolute inset-x-2 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-60" />
                    <span className="flex items-center justify-between gap-2">
                      <motion.span
                        initial={false}
                        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.22 }}
                        className="text-sm font-semibold sm:text-base"
                      >
                        {key.label}
                      </motion.span>
                      <span className="text-zinc-500 transition-colors group-hover:text-current">
                        {key.icon ?? <ArrowDown size={15} />}
                      </span>
                    </span>
                    {key.sublabel && (
                      <motion.span
                        initial={false}
                        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.22, delay: 0.03 }}
                        className="mt-2 block font-mono text-[11px] text-zinc-500"
                      >
                        {key.sublabel}
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
