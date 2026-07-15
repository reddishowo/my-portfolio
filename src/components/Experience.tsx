"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { Award, BriefcaseBusiness, GraduationCap, Microscope, Smartphone } from "lucide-react";
import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

const timeline = [
  {
    period: "Mar 2026 — Now",
    title: "Freelance Full-Stack Web Developer",
    place: "PT. MekTek Tanjung Lestari",
    description:
      "Building an ongoing CRM website for customer records, service workflows, communication, and operational dashboard needs.",
    tags: ["Next.js", "CRM", "Full-stack"],
    icon: BriefcaseBusiness,
    status: "Current",
  },
  {
    period: "Jun — Aug 2025",
    title: "Mobile App Developer Intern",
    place: "BLBC Balai Laboratorium Bea dan Cukai",
    description:
      "Created the SPPDN mobile application to support digital attendance and employee activity-management workflows.",
    tags: ["Flutter", "Internship", "Mobile"],
    icon: Smartphone,
  },
  {
    period: "2022 — Now",
    title: "Bachelor of Informatics",
    place: "Universitas Muhammadiyah Malang",
    description:
      "Studying informatics with a focus on software engineering, web platforms, mobile applications, and data-oriented systems.",
    tags: ["Informatics", "Software engineering"],
    icon: GraduationCap,
    status: "Education",
  },
  {
    period: "2024",
    title: "Data certifications",
    place: "Udemy · MySkill",
    description:
      "Completed focused study in data warehousing, dimensional modeling, ETL processes, and practical data-science fundamentals.",
    tags: ["Data warehouse", "ETL", "Data science"],
    icon: Award,
  },
  {
    period: "Research track",
    title: "Transformer topic modeling",
    place: "Scientific literature pipelines",
    description:
      "Exploring transformer-based topic-modeling workflows for comparing and understanding bodies of scientific literature.",
    tags: ["Python", "NLP", "Machine learning"],
    icon: Microscope,
    status: "Research",
  },
] as const;

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const timelineElement = section?.querySelector<HTMLElement>(".timeline");
      const signal = section?.querySelector<HTMLElement>("[data-current-signal]");
      if (!section || !timelineElement || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".timeline__progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: timelineElement,
            start: "top 78%",
            end: "bottom 48%",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        },
      );

      const entries = gsap.utils.toArray<HTMLElement>(".timeline-entry", timelineElement);
      entries.forEach((entry, index) => {
        const marker = entry.querySelector<HTMLElement>(".timeline-entry__marker i");
        const content = entry.querySelector<HTMLElement>(".timeline-entry__content");
        const iconParts = entry.querySelectorAll("svg path, svg line, svg circle, svg polyline");
        const title = entry.querySelector<HTMLElement>("h3")?.textContent ?? "Build signal";

        const reveal = gsap.timeline({
          defaults: { ease: "lab-smooth", immediateRender: false },
          scrollTrigger: {
            trigger: entry,
            start: "top 84%",
            once: true,
            invalidateOnRefresh: true,
            onEnter: () => {
              entries.forEach((item) => item.classList.toggle("is-active", item === entry));
              if (signal) {
                gsap.to(signal, {
                  duration: 0.72,
                  scrambleText: {
                    text: `${String(index + 1).padStart(2, "0")} / ${title}`,
                    chars: "01ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    speed: 0.62,
                  },
                });
              }
            },
          },
        });

        reveal
          .from(marker, { scale: 0, duration: 0.5 }, 0)
          .from(content, { autoAlpha: 0, x: 38, duration: 0.78 }, 0.05)
          .from(entry.querySelectorAll(".timeline-entry__meta > *"), { autoAlpha: 0, y: 8, stagger: 0.05, duration: 0.4 }, 0.22)
          .from(iconParts, { drawSVG: 0, duration: 0.65, stagger: 0.03 }, 0.3)
          .from(entry.querySelectorAll("li"), { autoAlpha: 0, y: 8, stagger: 0.04, duration: 0.4 }, 0.4);

        const badge = entry.querySelector<HTMLElement>(".timeline-entry__meta strong");
        if (badge) {
          reveal.fromTo(
            badge,
            { boxShadow: "0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent)" },
            {
              boxShadow: "0 0 0 14px color-mix(in srgb, var(--accent) 0%, transparent)",
              duration: 0.8,
            },
            0.48,
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="experience" className="section-shell experience-section">
      <div className="lab-container experience-layout">
        <div className="experience-heading">
          <ScrollReveal>
            <span className="section-kicker">Build log / trajectory</span>
            <h2 data-split>
              Learning by <span className="display-serif">shipping.</span>
            </h2>
            <p>
              Education, certifications, client work, and research—each entry adds another
              working layer to the practice.
            </p>
          </ScrollReveal>

          <ScrollReveal className="experience-heading__signal" delay={0.12}>
            <span>Current signal</span>
            <strong data-current-signal>Full-stack interfaces with real operational context.</strong>
          </ScrollReveal>
        </div>

        <div className="timeline" aria-label="Experience timeline">
          <span className="timeline__progress" aria-hidden="true" />
          {timeline.map((entry, index) => {
            const Icon = entry.icon;

            return (
                <article key={entry.title} className="timeline-entry">
                  <div className="timeline-entry__marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i aria-hidden="true" />
                  </div>
                  <div className="timeline-entry__content">
                    <div className="timeline-entry__meta">
                      <span>{entry.period}</span>
                      {"status" in entry ? <strong>{entry.status}</strong> : null}
                    </div>
                    <div className="timeline-entry__title">
                      <span><Icon size={18} strokeWidth={1.6} aria-hidden="true" /></span>
                      <div>
                        <h3>{entry.title}</h3>
                        <p>{entry.place}</p>
                      </div>
                    </div>
                    <p className="timeline-entry__description">{entry.description}</p>
                    <ul aria-label={`${entry.title} tags`}>
                      {entry.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
