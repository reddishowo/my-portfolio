"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const lanes = [
  "const stack = ['Next.js', 'TypeScript', 'Framer Motion'];",
  "createProjectCard({ repo: 'Haeryz/nextcrm-app' });",
  "const motion = useReducedMotion() ? 'calm' : 'alive';",
  "render(<CRM />) // customer flows, auth, analytics",
];

const typewriterLines = [
  "deploying portfolio interface...",
  "loading nextcrm-app metadata...",
  "animating keyboard input layer...",
  "syncing web, mobile, and data projects...",
];

function LoopingTypewriter({ lines, disabled }: { lines: string[]; disabled: boolean }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(lines[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(true);
  const visibleText = disabled ? lines[0] : lines[lineIndex].slice(0, charIndex);

  useEffect(() => {
    if (disabled) {
      return;
    }

    const current = lines[lineIndex];
    const complete = charIndex === current.length;
    const empty = charIndex === 0;
    const delay = complete && !deleting ? 1300 : empty && deleting ? 360 : deleting ? 24 : 46;

    const timeoutId = setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
        return;
      }

      if (empty && deleting) {
        setDeleting(false);
        setLineIndex((value) => (value + 1) % lines.length);
        return;
      }

      setCharIndex((value) => value + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [charIndex, deleting, disabled, lineIndex, lines]);

  return (
    <span>
      {visibleText}
      <span className="animate-pulse text-cyan-200">|</span>
    </span>
  );
}

export default function CommandBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 command-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.10),transparent_34%),linear-gradient(180deg,rgba(15,15,17,0.35),#0b0d10_80%)]" />

      <div className="absolute left-0 right-0 top-16 space-y-18 opacity-18">
        {lanes.map((lane, index) => (
          <motion.div
            key={lane}
            initial={false}
            animate={shouldReduceMotion ? undefined : { x: index % 2 === 0 ? ["-28%", "8%"] : ["6%", "-26%"] }}
            transition={{ duration: 34 + index * 5, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            className="whitespace-nowrap font-mono text-xs text-zinc-700"
          >
            {lane}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-[14%] left-4 hidden w-[24rem] max-w-[42vw] rounded-lg border border-cyan-300/10 bg-zinc-950/25 px-4 py-3 font-mono text-xs text-cyan-100/35 shadow-2xl shadow-cyan-950/10 backdrop-blur-sm md:block">
        <span className="mr-2 text-lime-300/70">$</span>
        <LoopingTypewriter lines={typewriterLines} disabled={Boolean(shouldReduceMotion)} />
      </div>
    </div>
  );
}
