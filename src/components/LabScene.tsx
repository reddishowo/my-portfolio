"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { Braces, Database, PanelsTopLeft, Smartphone } from "lucide-react";
import { useRef } from "react";

export function LabScene() {
  const stageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stage = stageRef.current;
      const world = stage?.querySelector<HTMLElement>(".lab-scene__world");
      const hero = stage?.closest<HTMLElement>(".hero-section");
      if (!stage || !world || !hero) return;

      gsap.set(stage, { autoAlpha: 1 });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const entrance = gsap.timeline({
        defaults: { duration: 1.05, ease: "lab-smooth" },
        delay: 0.12,
      });

      entrance
        .from(".lab-scene__shadow", { autoAlpha: 0, scale: 0.55, duration: 1.2 }, 0)
        .from(".lab-scene__plinth", { autoAlpha: 0, y: 90, rotationX: 75 }, 0)
        .from(".lab-scene__browser", { autoAlpha: 0, x: 70, y: -35, rotationY: -14, scale: 0.9 }, 0.12)
        .from(".lab-scene__code", { autoAlpha: 0, x: -90, y: 70, rotation: -14, scale: 0.86 }, 0.3)
        .from(".lab-scene__phone", { autoAlpha: 0, x: 90, y: 85, rotation: 14, scale: 0.82 }, 0.4)
        .from(".lab-scene__chip", { autoAlpha: 0, x: 55, y: -70, rotation: 16, scale: 0.72 }, 0.52)
        .from(".scene-metrics > span", { autoAlpha: 0, y: 14, stagger: 0.07, duration: 0.55 }, 0.72)
        .from(".scene-workflow > span", { autoAlpha: 0, y: 12, stagger: 0.06, duration: 0.5 }, 0.82)
        .from(".scene-phone-task", { autoAlpha: 0, x: 12, stagger: 0.06, duration: 0.45 }, 0.88)
        .from(".lab-scene__chip i", { scaleX: 0, transformOrigin: "0 50%", stagger: 0.04, duration: 0.4 }, 1);

      const metricValues = gsap.utils.toArray<HTMLElement>("[data-count]", stage);
      metricValues.forEach((metric) => {
        const finalValue = Number(metric.dataset.count ?? 0);
        const counter = { value: 0 };
        entrance.to(
          counter,
          {
            value: finalValue,
            duration: 0.8,
            ease: "power2.out",
            onUpdate: () => {
              metric.textContent = String(Math.round(counter.value)).padStart(2, "0");
            },
          },
          0.72,
        );
      });

      const statement = stage.querySelector<HTMLElement>("[data-scramble]");
      if (statement) {
        const text = statement.textContent ?? "";
        entrance.fromTo(
          statement,
          { textContent: "" },
          {
            duration: 0.9,
            scrambleText: { text, chars: "upperAndLowerCase", speed: 0.7 },
          },
          0.65,
        );
      }

      const rotateXTo = gsap.quickTo(world, "rotationX", {
        duration: 0.65,
        ease: "power3.out",
      });
      const rotateYTo = gsap.quickTo(world, "rotationY", {
        duration: 0.65,
        ease: "power3.out",
      });

      const handlePointerMove = (event: PointerEvent) => {
        const bounds = stage.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
        rotateYTo(x * 7);
        rotateXTo(y * -6);
      };

      const resetPointer = () => {
        rotateXTo(0);
        rotateYTo(0);
      };

      const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (pointerQuery.matches) {
        stage.addEventListener("pointermove", handlePointerMove);
        stage.addEventListener("pointerleave", resetPointer);
      }

      const exitTimeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      exitTimeline
        .to(".lab-scene__browser", { xPercent: 22, y: -120, rotationY: -12, scale: 0.9 }, 0)
        .to(".lab-scene__code", { x: -130, y: 75, rotation: -18, scale: 0.82 }, 0)
        .to(".lab-scene__phone", { x: 115, y: 85, rotation: 18, scale: 0.8 }, 0)
        .to(".lab-scene__chip", { x: 85, y: -125, rotation: 24, scale: 0.75 }, 0)
        .to(".lab-scene__plinth", { y: 110, rotationX: 72, autoAlpha: 0.25 }, 0)
        .to(".lab-scene__shadow", { scale: 0.68, autoAlpha: 0 }, 0)
        .to(world, { y: -32, scale: 0.88 }, 0);

      return () => {
        stage.removeEventListener("pointermove", handlePointerMove);
        stage.removeEventListener("pointerleave", resetPointer);
      };
    },
    { scope: stageRef },
  );

  return (
    <div
      ref={stageRef}
      className="lab-scene"
      role="img"
      aria-label="A layered three-dimensional software workbench representing web, mobile, and data engineering"
    >
      <div className="lab-scene__scroll">
        <div className="lab-scene__world">
          <div className="lab-scene__shadow" aria-hidden="true" />

          <div className="lab-scene__browser">
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
                    <strong data-scramble>Make complexity feel simple.</strong>
                  </div>
                  <span className="scene-live">live</span>
                </div>
                <div className="scene-metrics">
                  <span><strong data-count="3">03</strong><small>disciplines</small></span>
                  <span><strong data-count="8">08</strong><small>builds</small></span>
                  <span><strong>ID</strong><small>based</small></span>
                </div>
                <div className="scene-workflow">
                  <span><i />Plan<small>clear direction</small></span>
                  <span><i />Build<small>typed systems</small></span>
                  <span><i />Refine<small>polished motion</small></span>
                </div>
              </div>
            </div>
          </div>

          <div className="lab-scene__code">
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
          </div>

          <div className="lab-scene__phone">
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
          </div>

          <div className="lab-scene__chip">
            <Database size={15} />
            <span><small>DATA</small><strong>24</strong></span>
            <div aria-hidden="true"><i /><i /><i /><i /></div>
          </div>

          <div className="lab-scene__plinth">
            <div className="scene-plinth-edge" />
            <span><i />01 / WEB</span>
            <span><i />02 / MOBILE</span>
            <span><i />03 / DATA</span>
            <strong>FA—LAB</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
