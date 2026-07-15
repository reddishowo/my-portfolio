"use client";

import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export type FeaturedProject = {
  number: string;
  title: string;
  category: string;
  period: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  technologies: readonly string[];
  github: string;
  liveUrl?: string;
  tone: "blue" | "amber" | "ink";
  motion: "crm" | "attendance" | "events";
};

type FeaturedProjectCardProps = {
  project: FeaturedProject;
  index: number;
};

function ProjectSignal({ type }: { type: FeaturedProject["motion"] }) {
  if (type === "attendance") {
    return (
      <div className="project-signal project-signal--attendance" aria-hidden="true">
        <div className="project-signal__phone project-signal__panel"><span>09:41</span><i /></div>
        <div className="project-signal__phone project-signal__phone--back project-signal__panel"><span>ACTIVITY</span><i /></div>
        <svg viewBox="0 0 280 104" role="presentation">
          <path className="project-signal__route" d="M14 82 C62 12 125 101 176 42 S246 17 267 53" />
          <circle className="project-signal__traveler" r="5" cx="0" cy="0" />
          <circle className="project-signal__node" cx="14" cy="82" r="4" />
          <circle className="project-signal__node" cx="267" cy="53" r="4" />
        </svg>
        <span className="project-signal__readout" data-signal-text>CHECK-IN / VERIFIED</span>
      </div>
    );
  }

  if (type === "events") {
    return (
      <div className="project-signal project-signal--events" aria-hidden="true">
        <svg viewBox="0 0 280 104" role="presentation">
          <path className="project-signal__route" d="M16 78 C72 20 121 18 171 55 S233 94 266 34" />
          <circle className="project-signal__traveler" r="5" cx="0" cy="0" />
        </svg>
        <div className="project-signal__ticket project-signal__panel"><span>EV—01</span><strong>ADMIT</strong></div>
        <div className="project-signal__ticket project-signal__ticket--two project-signal__panel"><span>EV—02</span><strong>BUILD</strong></div>
        <div className="project-signal__ticket project-signal__ticket--three project-signal__panel"><span>EV—03</span><strong>SHIP</strong></div>
        <span className="project-signal__readout" data-signal-text>ATTENDEES / IN SYNC</span>
      </div>
    );
  }

  return (
    <div className="project-signal project-signal--crm" aria-hidden="true">
      <svg viewBox="0 0 280 104" role="presentation">
        <path className="project-signal__route" d="M18 52 C66 8 102 92 148 52 S226 11 264 52" />
        <circle className="project-signal__traveler" r="5" cx="0" cy="0" />
        <circle className="project-signal__node" cx="18" cy="52" r="4" />
        <circle className="project-signal__node" cx="148" cy="52" r="4" />
        <circle className="project-signal__node" cx="264" cy="52" r="4" />
      </svg>
      <div className="project-signal__crm-labels">
        <span className="project-signal__panel">CUSTOMER</span>
        <span className="project-signal__panel">SERVICE</span>
        <span className="project-signal__panel">REPORT</span>
      </div>
      <span className="project-signal__readout" data-signal-text>WORKFLOW / ONLINE</span>
    </div>
  );
}

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const slot = card?.closest<HTMLElement>(".featured-project-slot");
      if (!card || !slot || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const title = card.querySelector<HTMLElement>(".featured-project__copy h3");
      const split = title
        ? SplitText.create(title, { type: "lines,words", mask: "lines", aria: "auto" })
        : null;
      const titleLines = split?.lines ?? [];
      const signalNodes = card.querySelectorAll<SVGCircleElement>(".project-signal__node");

      const entrance = gsap.timeline({
        defaults: { ease: "lab-smooth", immediateRender: false },
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      entrance
        .from(".featured-project__rail span", { autoAlpha: 0, x: -12, stagger: 0.06, duration: 0.5 }, 0)
        .from(".featured-project__copy p", { autoAlpha: 0, y: 16, duration: 0.65 }, 0.28)
        .from(".featured-project__copy li", { autoAlpha: 0, y: 10, stagger: 0.045, duration: 0.42 }, 0.4)
        .from(".featured-project__actions a", { autoAlpha: 0, y: 10, stagger: 0.06, duration: 0.45 }, 0.5)
        .from(".featured-project__visual", { clipPath: "inset(12% 10% 12% 10% round 1rem)", scale: 0.96, duration: 1 }, 0.08)
        .from(".featured-project__windowbar > *", { autoAlpha: 0, y: -8, stagger: 0.05, duration: 0.45 }, 0.48)
        .from(".project-signal__panel", { autoAlpha: 0, y: 18, rotation: -4, stagger: 0.07, duration: 0.55 }, 0.55)
        .from(".project-signal__route", { drawSVG: 0, duration: 1.1 }, 0.62)
        .from(".project-signal__readout", { autoAlpha: 0, y: 8, duration: 0.45 }, 0.8);

      if (titleLines.length > 0) {
        entrance.from(titleLines, { autoAlpha: 0, yPercent: 108, stagger: 0.065, duration: 0.85 }, 0.1);
      }

      if (signalNodes.length > 0) {
        entrance.from(
          signalNodes,
          { scale: 0, transformOrigin: "50% 50%", stagger: 0.08, duration: 0.45 },
          0.62,
        );
      }

      const route = card.querySelector<SVGPathElement>(".project-signal__route");
      const traveler = card.querySelector<SVGCircleElement>(".project-signal__traveler");
      if (route && traveler) {
        entrance.to(
          traveler,
          {
            duration: 1.35,
            ease: "power2.inOut",
            motionPath: {
              path: route,
              align: route,
              alignOrigin: [0.5, 0.5],
            },
          },
          0.7,
        );
      }

      const readout = card.querySelector<HTMLElement>("[data-signal-text]");
      if (readout) {
        const text = readout.textContent ?? "";
        entrance.fromTo(
          readout,
          { textContent: "" },
          { duration: 0.8, scrambleText: { text, chars: "01ABCDEFGHIJKLMNOPQRSTUVWXYZ", speed: 0.65 } },
          0.83,
        );
      }

      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: slot,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.85,
          invalidateOnRefresh: true,
        },
      })
        .fromTo(card, { scale: 0.94, rotationX: 6, y: 70 }, { scale: 1, rotationX: 0, y: 0, duration: 0.3 })
        .to(card, { scale: 1, rotationX: 0, y: 0, duration: 0.48 })
        .to(card, { scale: 0.975, rotationX: -1.5, y: -18, duration: 0.22 });

      const cleanups: Array<() => void> = [];
      const pointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (pointerMedia.matches) {
        const visual = card.querySelector<HTMLElement>(".featured-project__visual");
        const image = card.querySelector<HTMLElement>(".featured-project__image img");
        if (visual && image) {
          const xTo = gsap.quickTo(image, "xPercent", { duration: 0.55, ease: "power3.out" });
          const yTo = gsap.quickTo(image, "yPercent", { duration: 0.55, ease: "power3.out" });
          const handleMove = (event: PointerEvent) => {
            const bounds = visual.getBoundingClientRect();
            xTo(((event.clientX - bounds.left) / bounds.width - 0.5) * -2.5);
            yTo(((event.clientY - bounds.top) / bounds.height - 0.5) * -2.5);
          };
          const handleEnter = () => gsap.to(image, { scale: 1.035, duration: 0.65, ease: "lab-smooth" });
          const handleLeave = () => gsap.to(image, { xPercent: 0, yPercent: 0, scale: 1, duration: 0.65, ease: "lab-smooth" });
          visual.addEventListener("pointermove", handleMove);
          visual.addEventListener("pointerenter", handleEnter);
          visual.addEventListener("pointerleave", handleLeave);
          cleanups.push(() => {
            visual.removeEventListener("pointermove", handleMove);
            visual.removeEventListener("pointerenter", handleEnter);
            visual.removeEventListener("pointerleave", handleLeave);
          });
        }

        card.querySelectorAll<HTMLElement>(".featured-project__actions a").forEach((link) => {
          const xTo = gsap.quickTo(link, "x", { duration: 0.35, ease: "power3.out" });
          const yTo = gsap.quickTo(link, "y", { duration: 0.35, ease: "power3.out" });
          const handleMove = (event: PointerEvent) => {
            const bounds = link.getBoundingClientRect();
            xTo((event.clientX - bounds.left - bounds.width / 2) * 0.14);
            yTo((event.clientY - bounds.top - bounds.height / 2) * 0.18);
          };
          const reset = () => {
            xTo(0);
            yTo(0);
          };
          link.addEventListener("pointermove", handleMove);
          link.addEventListener("pointerleave", reset);
          cleanups.push(() => {
            link.removeEventListener("pointermove", handleMove);
            link.removeEventListener("pointerleave", reset);
          });
        });
      }

      return () => {
        split?.revert();
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: cardRef, dependencies: [project.motion] },
  );

  return (
    <div className="featured-project-slot" style={{ zIndex: index + 1 }}>
      <article ref={cardRef} className={`featured-project featured-project--${project.tone}`}>
        <div className="featured-project__rail">
          <span>{project.number}</span>
          <span>{project.category}</span>
          <span>{project.period}</span>
        </div>

        <div className="featured-project__body">
          <div className="featured-project__copy">
            <div>
              <span className="featured-project__eyebrow">Selected system / {project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div>
              <ul aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className="featured-project__actions">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={15} /> Repository <ArrowUpRight size={14} />
                </a>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live product <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <a
            className="featured-project__visual"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} repository`}
          >
            <div className="featured-project__windowbar" aria-hidden="true">
              <span><i /><i /><i /></span>
              <span>output / {project.number}</span>
              <ArrowUpRight size={13} />
            </div>
            <div className="featured-project__image">
              <Image
                src={project.imagePath}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
                className="object-contain"
                priority={index === 0}
              />
              <ProjectSignal type={project.motion} />
            </div>
          </a>
        </div>
      </article>
    </div>
  );
}
