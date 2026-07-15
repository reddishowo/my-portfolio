"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowUpRight, Database, PanelsTopLeft, Smartphone } from "lucide-react";
import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

const capabilities = [
  {
    number: "01",
    title: "Web systems",
    description:
      "Fast, typed interfaces for operations, collaboration, and customer-facing products—built to remain understandable as they grow.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    icon: PanelsTopLeft,
    tone: "blue",
  },
  {
    number: "02",
    title: "Mobile products",
    description:
      "Cross-platform applications with real workflows: attendance, booking, location, messaging, camera, and role-based experiences.",
    stack: ["Flutter", "Dart", "GetX", "Maps API"],
    icon: Smartphone,
    tone: "accent",
  },
  {
    number: "03",
    title: "Data workflows",
    description:
      "Practical pipelines and exploratory systems that turn scientific literature and operational data into useful, legible outputs.",
    stack: ["Python", "NLP", "Machine Learning", "MongoDB"],
    icon: Database,
    tone: "ink",
  },
] as const;

const principles = [
  ["01", "Clarity before decoration"],
  ["02", "Motion with a job to do"],
  ["03", "Architecture people can follow"],
] as const;

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const cards = gsap.utils.toArray<HTMLElement>(".capability-card", section);
      const directions = [
        { x: 150, y: -60, rotationY: 8 },
        { x: 0, y: -85, rotationY: 0 },
        { x: -150, y: -60, rotationY: -8 },
      ];

      const landing = gsap.timeline({
        defaults: { ease: "lab-smooth", immediateRender: false },
        scrollTrigger: {
          trigger: ".capability-grid",
          start: "top 84%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        landing.from(
          card,
          {
            autoAlpha: 0,
            x: directions[index]?.x ?? 0,
            y: directions[index]?.y ?? 40,
            rotationY: directions[index]?.rotationY ?? 0,
            rotationX: 9,
            scale: 0.88,
            duration: 1.05,
          },
          index * 0.1,
        );

        landing.from(
          card.querySelectorAll("svg path, svg line, svg circle"),
          { drawSVG: 0, duration: 0.75, stagger: 0.035 },
          0.36 + index * 0.1,
        );

        landing.from(
          card.querySelectorAll("li"),
          { autoAlpha: 0, y: 10, duration: 0.42, stagger: 0.04 },
          0.5 + index * 0.1,
        );
      });

      gsap.to(".principles-strip__scanner", {
        xPercent: 410,
        ease: "none",
        scrollTrigger: {
          trigger: ".principles-strip",
          start: "top 88%",
          end: "bottom 45%",
          scrub: 0.8,
        },
      });

      const pointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (!pointerMedia.matches) return;

      const cleanups = cards.map((card) => {
        const rotateXTo = gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power3.out" });
        const rotateYTo = gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power3.out" });
        const yTo = gsap.quickTo(card, "y", { duration: 0.45, ease: "power3.out" });
        const light = card.querySelector<HTMLElement>(".capability-card__light");
        const lightXTo = light ? gsap.quickTo(light, "x", { duration: 0.3, ease: "power2.out" }) : null;
        const lightYTo = light ? gsap.quickTo(light, "y", { duration: 0.3, ease: "power2.out" }) : null;

        const handleMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          rotateYTo(x * 7);
          rotateXTo(y * -6);
          lightXTo?.(event.clientX - bounds.left - 90);
          lightYTo?.(event.clientY - bounds.top - 90);
        };

        const handleEnter = () => yTo(-12);
        const handleLeave = () => {
          rotateXTo(0);
          rotateYTo(0);
          yTo(0);
        };

        card.addEventListener("pointermove", handleMove);
        card.addEventListener("pointerenter", handleEnter);
        card.addEventListener("pointerleave", handleLeave);

        return () => {
          card.removeEventListener("pointermove", handleMove);
          card.removeEventListener("pointerenter", handleEnter);
          card.removeEventListener("pointerleave", handleLeave);
        };
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="about" className="section-shell capabilities-section">
      <div className="lab-container">
        <div className="capabilities-intro">
          <ScrollReveal>
            <span className="section-kicker">Profile / capabilities</span>
            <h2 data-split>
              One builder,
              <br />
              three connected <span className="display-serif">disciplines.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="capabilities-intro__copy" delay={0.1}>
            <p>
              I’m a software engineer based in Malang, Indonesia, studying Informatics at
              Universitas Muhammadiyah Malang. My work sits where product thinking,
              interface craft, and practical engineering meet.
            </p>
            <a href="#experience">
              Read the build log <ArrowUpRight size={15} />
            </a>
          </ScrollReveal>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article key={capability.title} className={`capability-card capability-card--${capability.tone}`}>
                  <span className="capability-card__light" aria-hidden="true" />
                  <span className="capability-card__orbit" aria-hidden="true" />
                  <div className="capability-card__topline">
                    <span>{capability.number} / discipline</span>
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                  <ul aria-label={`${capability.title} technologies`}>
                    {capability.stack.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
              </article>
            );
          })}
        </div>

        <ScrollReveal className="principles-strip">
          <span className="principles-strip__scanner" aria-hidden="true" />
          <span className="principles-strip__label">Operating principles</span>
          {principles.map(([number, principle]) => (
            <div key={number}>
              <span>{number}</span>
              <strong>{principle}</strong>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
