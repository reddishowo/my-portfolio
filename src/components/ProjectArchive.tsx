"use client";

import { Flip, gsap, useGSAP } from "@/lib/gsap";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const archiveProjects = [
  {
    number: "04",
    title: "Bio Collab",
    type: "Collaborative learning platform",
    stack: "Next.js / MongoDB",
    category: "web",
    imagePath: "/images/4.png",
    github: "https://github.com/reddishowo/bio-collab",
    motion: "bio",
  },
  {
    number: "05",
    title: "Micro Literacy",
    type: "Interactive learning media",
    stack: "Next.js / MongoDB",
    category: "web",
    imagePath: "/images/5.png",
    github: "https://github.com/reddishowo/micro-literacy",
    motion: "micro",
  },
  {
    number: "06",
    title: "Reparin Mobile",
    type: "Repair booking and live tracking",
    stack: "Flutter / Maps API",
    category: "mobile",
    imagePath: "/images/1.png",
    github: "https://github.com/hisyam99/reparin-mobile",
    motion: "repair",
  },
  {
    number: "07",
    title: "Dressmaker App",
    type: "Custom dress ordering",
    stack: "Flutter / Firebase",
    category: "mobile",
    github: "https://github.com/reddishowo/dressmaker-app",
    motion: "dress",
  },
  {
    number: "08",
    title: "Transformer Topic Modeling",
    type: "Scientific literature research",
    stack: "Python / NLP / ML",
    category: "data",
    imagePath: "/images/7.png",
    github:
      "https://github.com/reddishowo/Transformer-Based-Topic-Modeling-Pipeline-for-Scientific-Literature",
    motion: "topics",
  },
] as const;

type ArchiveMotion = (typeof archiveProjects)[number]["motion"];
type Filter = "all" | (typeof archiveProjects)[number]["category"];

const filters: readonly { value: Filter; label: string }[] = [
  { value: "all", label: "All / 05" },
  { value: "web", label: "Web / 02" },
  { value: "mobile", label: "Mobile / 02" },
  { value: "data", label: "Data / 01" },
];

function ProjectGlyph({ motion }: { motion: ArchiveMotion }) {
  if (motion === "micro") {
    return (
      <span className="archive-glyph archive-glyph--micro" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <circle data-draw cx="20" cy="20" r="11" />
          <path data-draw d="M28 28L42 42M14 20h12M20 14v12" />
        </svg>
      </span>
    );
  }

  if (motion === "repair") {
    return (
      <span className="archive-glyph archive-glyph--repair" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path data-draw className="archive-glyph__route" d="M4 37C12 5 29 45 44 12" />
          <circle className="archive-glyph__traveler" cx="0" cy="0" r="3.5" />
        </svg>
      </span>
    );
  }

  if (motion === "dress") {
    return (
      <span className="archive-glyph archive-glyph--dress" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path
            data-draw
            data-morph
            d="M18 5L12 13L17 18L10 43H38L31 18L36 13L30 5C28 9 20 9 18 5Z"
          />
          <path
            data-morph-target
            d="M17 5L9 15L15 20L6 43H42L33 20L39 15L31 5C27 12 21 12 17 5Z"
          />
        </svg>
      </span>
    );
  }

  if (motion === "topics") {
    return (
      <span className="archive-glyph archive-glyph--topics" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path data-draw d="M9 14L23 24L38 11M23 24L39 37M23 24L8 38" />
          <circle cx="9" cy="14" r="4" />
          <circle cx="38" cy="11" r="5" />
          <circle cx="39" cy="37" r="4" />
          <circle cx="8" cy="38" r="3" />
          <circle cx="23" cy="24" r="6" />
        </svg>
        <small data-glyph-text>TOPIC</small>
      </span>
    );
  }

  return (
    <span className="archive-glyph archive-glyph--bio" aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <path data-draw d="M8 9C35 12 13 35 40 39M40 9C13 12 35 35 8 39" />
        <path data-draw d="M14 13h20M15 35h19M18 19h12M18 29h12" />
      </svg>
    </span>
  );
}

export function ProjectArchive() {
  const archiveRef = useRef<HTMLDivElement>(null);
  const flipStateRef = useRef<ReturnType<typeof Flip.getState> | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const visibleProjects = archiveProjects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  const changeFilter = (nextFilter: Filter) => {
    if (nextFilter === filter || !archiveRef.current) return;
    flipStateRef.current = Flip.getState(
      archiveRef.current.querySelectorAll<HTMLElement>("[data-archive-row]"),
    );
    setFilter(nextFilter);
  };

  useGSAP(
    () => {
      const state = flipStateRef.current;
      if (!state) return;
      Flip.from(state, {
        duration: 0.72,
        ease: "lab-smooth",
        absolute: true,
        stagger: 0.045,
        onEnter: (elements) => gsap.fromTo(elements, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.48 }),
        onLeave: (elements) => gsap.to(elements, { autoAlpha: 0, y: -16, duration: 0.32 }),
      });
      flipStateRef.current = null;
    },
    { scope: archiveRef, dependencies: [filter] },
  );

  useGSAP(
    () => {
      const archive = archiveRef.current;
      if (!archive || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rows = gsap.utils.toArray<HTMLElement>("[data-archive-row]", archive);
      const cleanups: Array<() => void> = [];

      rows.forEach((row, index) => {
        gsap.from(row, {
          autoAlpha: 0,
          x: 28,
          duration: 0.72,
          delay: index * 0.045,
          ease: "lab-smooth",
          immediateRender: false,
          scrollTrigger: {
            trigger: row,
            start: "top 92%",
            once: true,
            invalidateOnRefresh: true,
          },
        });

        gsap.from(row.querySelectorAll("[data-draw]"), {
          drawSVG: 0,
          duration: 0.9,
          stagger: 0.06,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            once: true,
            invalidateOnRefresh: true,
          },
        });

        const preview = row.querySelector<HTMLElement>(".archive-row__preview");
        const morph = row.querySelector<SVGPathElement>("[data-morph]");
        const morphTarget = row.querySelector<SVGPathElement>("[data-morph-target]");
        const glyphText = row.querySelector<HTMLElement>("[data-glyph-text]");
        const route = row.querySelector<SVGPathElement>(".archive-glyph__route");
        const traveler = row.querySelector<SVGCircleElement>(".archive-glyph__traveler");
        const originalMorph = morph?.getAttribute("d") ?? "";
        const originalGlyphText = glyphText?.textContent ?? "";

        const show = () => {
          if (preview) gsap.to(preview, { autoAlpha: 1, scale: 1, rotation: -2, duration: 0.42, ease: "lab-smooth" });
          if (morph && morphTarget) gsap.to(morph, { morphSVG: morphTarget, duration: 0.6, ease: "lab-smooth" });
          if (glyphText) {
            gsap.to(glyphText, {
              duration: 0.65,
              scrambleText: { text: "CLUSTER", chars: "TOPIC01", speed: 0.6 },
            });
          }
          if (route && traveler) {
            gsap.fromTo(
              traveler,
              { x: 0, y: 0 },
              {
                duration: 1.1,
                ease: "power2.inOut",
                motionPath: { path: route, align: route, alignOrigin: [0.5, 0.5] },
              },
            );
          }
        };

        const hide = () => {
          if (preview) gsap.to(preview, { autoAlpha: 0, scale: 0.94, rotation: 3, duration: 0.28 });
          if (morph && originalMorph) gsap.to(morph, { morphSVG: originalMorph, duration: 0.5, ease: "lab-smooth" });
          if (glyphText) gsap.to(glyphText, { duration: 0.35, scrambleText: { text: originalGlyphText, chars: "TOPIC01" } });
        };

        let xTo: ((value: number) => gsap.core.Tween) | null = null;
        let yTo: ((value: number) => gsap.core.Tween) | null = null;
        if (preview) {
          xTo = gsap.quickTo(preview, "x", { duration: 0.32, ease: "power3.out" });
          yTo = gsap.quickTo(preview, "y", { duration: 0.32, ease: "power3.out" });
        }

        const move = (event: PointerEvent) => {
          if (!preview || !xTo || !yTo) return;
          const bounds = row.getBoundingClientRect();
          xTo(event.clientX - bounds.left - preview.offsetWidth * 0.55);
          yTo(event.clientY - bounds.top - preview.offsetHeight - 26);
        };

        const focus = () => {
          if (preview) {
            gsap.set(preview, { x: Math.max(40, row.clientWidth - preview.offsetWidth - 42), y: -preview.offsetHeight * 0.7 });
          }
          show();
        };

        row.addEventListener("pointerenter", show);
        row.addEventListener("pointermove", move);
        row.addEventListener("pointerleave", hide);
        row.addEventListener("focusin", focus);
        row.addEventListener("focusout", hide);
        cleanups.push(() => {
          row.removeEventListener("pointerenter", show);
          row.removeEventListener("pointermove", move);
          row.removeEventListener("pointerleave", hide);
          row.removeEventListener("focusin", focus);
          row.removeEventListener("focusout", hide);
        });
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    },
    { scope: archiveRef, dependencies: [filter], revertOnUpdate: true },
  );

  return (
    <div ref={archiveRef} className="project-archive">
      <ScrollReveal className="project-archive__intro">
        <span className="section-kicker">Project index</span>
        <h3 data-split>More experiments, products, and research.</h3>
        <a href="https://github.com/reddishowo" target="_blank" rel="noreferrer">
          Full GitHub profile <ArrowUpRight size={15} />
        </a>
        <div className="project-archive__filters" aria-label="Filter project index">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={filter === item.value ? "is-active" : undefined}
              aria-pressed={filter === item.value}
              onClick={() => changeFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="project-archive__list" aria-live="polite">
        {visibleProjects.map((project) => (
          <a
            key={project.title}
            data-archive-row
            className="archive-row"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="archive-row__number">{project.number}</span>
            <span className="archive-row__title">
              <strong>{project.title}</strong>
              <small>{project.type}</small>
            </span>
            <span className="archive-row__stack">{project.stack}</span>
            <ProjectGlyph motion={project.motion} />
            <ArrowUpRight size={17} />
            {"imagePath" in project ? (
              <span className="archive-row__preview" aria-hidden="true">
                <Image src={project.imagePath} alt="" fill sizes="260px" className="object-cover" />
              </span>
            ) : (
              <span className="archive-row__preview archive-row__preview--generated" aria-hidden="true">
                <ProjectGlyph motion={project.motion} />
                <strong>Custom fit / mobile order flow</strong>
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
