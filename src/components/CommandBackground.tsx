"use client";

import { motion, useReducedMotion } from "framer-motion";

const lanes = [
  "const stack = ['Next.js', 'TypeScript', 'Framer Motion'];",
  "await ship(projects.filter((item) => item.impact));",
  "type Portfolio = Keyboard & CommandPalette & Dashboard;",
  "render(<CRM />) // customer flows, auth, analytics",
];

export default function CommandBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 command-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.10),transparent_34%),linear-gradient(180deg,rgba(15,15,17,0.35),#0b0d10_80%)]" />

      <div className="absolute left-0 right-0 top-20 space-y-10 opacity-35">
        {lanes.map((lane, index) => (
          <motion.div
            key={lane}
            initial={false}
            animate={shouldReduceMotion ? undefined : { x: index % 2 === 0 ? ["-18%", "8%", "-18%"] : ["6%", "-18%", "6%"] }}
            transition={{ duration: 18 + index * 4, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap font-mono text-xs text-zinc-600"
          >
            {lane}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
