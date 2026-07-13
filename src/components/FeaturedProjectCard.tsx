"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
};

type FeaturedProjectCardProps = {
  project: FeaturedProject;
  index: number;
};

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.28, 0.78, 1], [0.94, 1, 1, 0.975]);
  const rotateX = useTransform(scrollYProgress, [0, 0.32, 1], [6, 0, -1.5]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [70, 0, -18]);

  return (
    <div
      className="featured-project-slot"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        ref={cardRef}
        className={`featured-project featured-project--${project.tone}`}
        style={shouldReduceMotion ? undefined : { scale, rotateX, y }}
      >
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
            </div>
          </a>
        </div>
      </motion.article>
    </div>
  );
}
