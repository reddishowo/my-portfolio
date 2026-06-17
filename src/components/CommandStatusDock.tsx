"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, CheckCircle2, GitBranch, Keyboard } from "lucide-react";

const statuses = [
  { label: "build", value: "passing", icon: <CheckCircle2 size={15} />, color: "text-lime-300" },
  { label: "motion", value: "active", icon: <Activity size={15} />, color: "text-cyan-200" },
  { label: "stack", value: "next.js", icon: <Keyboard size={15} />, color: "text-amber-200" },
  { label: "repo", value: "synced", icon: <GitBranch size={15} />, color: "text-violet-200" },
];

export default function CommandStatusDock() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 1, y: 10 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mt-6 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4"
    >
      {statuses.map((status, index) => (
        <motion.div
          key={status.label}
          animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
          transition={{ duration: 3.2, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-3 shadow-lg shadow-black/20 backdrop-blur-sm"
        >
          <div className={`mb-2 flex items-center gap-2 ${status.color}`}>
            {status.icon}
            <span className="font-mono text-[11px]">{status.label}</span>
          </div>
          <p className="font-mono text-sm text-zinc-300">{status.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
