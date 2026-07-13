"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Braces, Database, PanelsTopLeft, Smartphone } from "lucide-react";
import { useRef, type PointerEvent } from "react";

export function LabScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 24 });
  const rotateY = useTransform(smoothX, [-1, 1], [-7, 7]);
  const rotateX = useTransform(smoothY, [-1, 1], [6, -6]);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], [42, -72]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1, 0.96]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !stageRef.current) return;
    const bounds = stageRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const entrance = (delay: number, x = 0, y = 28) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, x, y, scale: 0.92 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div
      ref={stageRef}
      className="lab-scene"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      role="img"
      aria-label="A layered three-dimensional software workbench representing web, mobile, and data engineering"
    >
      <motion.div
        className="lab-scene__scroll"
        style={shouldReduceMotion ? undefined : { y: sceneY, scale: sceneScale }}
      >
        <motion.div
          className="lab-scene__world"
          style={shouldReduceMotion ? undefined : { rotateX, rotateY }}
        >
          <div className="lab-scene__shadow" aria-hidden="true" />

          <motion.div className="lab-scene__browser" {...entrance(0.18, 38, -8)}>
            <div className="scene-window-bar">
              <span className="scene-window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>farriel.dev / workspace</span>
              <PanelsTopLeft size={13} />
            </div>
            <div className="scene-browser-body">
              <div className="scene-sidebar">
                <span className="is-active" />
                <span />
                <span />
                <span />
              </div>
              <div className="scene-dashboard">
                <div className="scene-dashboard__topline">
                  <div>
                    <small>OPERATION / 01</small>
                    <strong>Make complexity feel simple.</strong>
                  </div>
                  <span className="scene-live">live</span>
                </div>
                <div className="scene-metrics">
                  <span><strong>03</strong><small>disciplines</small></span>
                  <span><strong>08</strong><small>builds</small></span>
                  <span><strong>ID</strong><small>based</small></span>
                </div>
                <div className="scene-workflow">
                  <span><i />Plan<small>clear direction</small></span>
                  <span><i />Build<small>typed systems</small></span>
                  <span><i />Refine<small>polished motion</small></span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lab-scene__code" {...entrance(0.34, -46, 42)}>
            <div className="scene-card-label">
              <Braces size={13} /> interface.tsx
            </div>
            <code>
              <span><b>const</b> product = &#123;</span>
              <span>&nbsp;&nbsp;speed: <em>&quot;fast&quot;</em>,</span>
              <span>&nbsp;&nbsp;motion: <em>&quot;considered&quot;</em>,</span>
              <span>&nbsp;&nbsp;noise: <strong>false</strong></span>
              <span>&#125;;</span>
            </code>
          </motion.div>

          <motion.div className="lab-scene__phone" {...entrance(0.42, 52, 52)}>
            <div className="scene-phone-speaker" />
            <div className="scene-phone-head">
              <span>09:41</span>
              <Smartphone size={12} />
            </div>
            <small>Today</small>
            <strong>Build queue</strong>
            <div className="scene-phone-task is-done"><i />Research<span>done</span></div>
            <div className="scene-phone-task"><i />Interface<span>active</span></div>
            <div className="scene-phone-task"><i />Ship<span>next</span></div>
            <div className="scene-phone-nav"><span /><span className="is-active" /><span /></div>
          </motion.div>

          <motion.div className="lab-scene__chip" {...entrance(0.5, 22, -30)}>
            <Database size={15} />
            <span><small>DATA</small><strong>24</strong></span>
            <div aria-hidden="true"><i /><i /><i /><i /></div>
          </motion.div>

          <motion.div className="lab-scene__plinth" {...entrance(0.08, 0, 55)}>
            <div className="scene-plinth-edge" />
            <span><i />01 / WEB</span>
            <span><i />02 / MOBILE</span>
            <span><i />03 / DATA</span>
            <strong>FA—LAB</strong>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
