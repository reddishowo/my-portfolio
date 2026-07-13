import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  FeaturedProjectCard,
  type FeaturedProject,
} from "./FeaturedProjectCard";
import { ScrollReveal } from "./ScrollReveal";

const featuredProjects: readonly FeaturedProject[] = [
  {
    number: "01",
    title: "MekTek CRM",
    category: "Full-stack operations",
    period: "2026 / ongoing",
    description:
      "A modern CRM platform for managing customers, service progress, communication, and operational dashboards—built for a real heavy-equipment service workflow.",
    imagePath: "/images/8.png",
    imageAlt: "MekTek CRM shown across laptop and dashboard interfaces",
    technologies: ["Next.js", "TypeScript", "CRM", "Dashboard"],
    github: "https://github.com/Haeryz/nextcrm-app",
    tone: "ink",
  },
  {
    number: "02",
    title: "SPPDN Mobile",
    category: "Mobile workflow",
    period: "2025 / internship",
    description:
      "A digital attendance and employee activity system created for customs and excise staff, bringing field documentation, photos, and activity history into one mobile flow.",
    imagePath: "/images/2.png",
    imageAlt: "SPPDN employee attendance mobile application screens",
    technologies: ["Flutter", "Dart", "Mobile", "Operations"],
    github: "https://github.com/reddishowo/sppdn-beacukai",
    tone: "amber",
  },
  {
    number: "03",
    title: "Evenity",
    category: "Product platform",
    period: "Web / full-stack",
    description:
      "An event-management product that brings organization, ticketing, attendee workflows, and event operations into one coherent web experience.",
    imagePath: "/images/3.png",
    imageAlt: "Evenity event management website displayed on laptop and tablet",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Product UI"],
    github: "https://github.com/reddishowo/event-management-web",
    tone: "blue",
  },
];

const archiveProjects = [
  {
    number: "04",
    title: "Bio Collab",
    type: "Collaborative learning platform",
    stack: "Next.js / MongoDB",
    imagePath: "/images/4.png",
    github: "https://github.com/reddishowo/bio-collab",
  },
  {
    number: "05",
    title: "Micro Literacy",
    type: "Interactive learning media",
    stack: "Next.js / MongoDB",
    imagePath: "/images/5.png",
    github: "https://github.com/reddishowo/micro-literacy",
  },
  {
    number: "06",
    title: "Reparin Mobile",
    type: "Repair booking and live tracking",
    stack: "Flutter / Maps API",
    imagePath: "/images/1.png",
    github: "https://github.com/hisyam99/reparin-mobile",
  },
  {
    number: "07",
    title: "Dressmaker App",
    type: "Custom dress ordering",
    stack: "Flutter / Firebase",
    github: "https://github.com/reddishowo/dressmaker-app",
  },
  {
    number: "08",
    title: "Transformer Topic Modeling",
    type: "Scientific literature research",
    stack: "Python / NLP / ML",
    imagePath: "/images/7.png",
    github:
      "https://github.com/reddishowo/Transformer-Based-Topic-Modeling-Pipeline-for-Scientific-Literature",
  },
] as const;

export function Projects() {
  return (
    <section id="projects" className="section-shell projects-section">
      <div className="lab-container">
        <div className="projects-heading">
          <ScrollReveal>
            <span className="section-kicker">Selected work / 2024—2026</span>
            <h2>
              Systems shown at <span className="display-serif">working scale.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="projects-heading__aside" delay={0.1}>
            <span>03 featured / 05 archive</span>
            <p>
              Product interfaces are the proof. Scroll through three featured builds, then
              browse the compact project index.
            </p>
          </ScrollReveal>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="project-archive">
          <ScrollReveal className="project-archive__intro">
            <span className="section-kicker">Project index</span>
            <h3>More experiments, products, and research.</h3>
            <a href="https://github.com/reddishowo" target="_blank" rel="noreferrer">
              Full GitHub profile <ArrowUpRight size={15} />
            </a>
          </ScrollReveal>

          <div className="project-archive__list">
            {archiveProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.045} distance={18}>
                <a
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
                  <ArrowUpRight size={17} />
                  {"imagePath" in project ? (
                    <span className="archive-row__preview" aria-hidden="true">
                      <Image
                        src={project.imagePath}
                        alt=""
                        fill
                        sizes="260px"
                        className="object-cover"
                      />
                    </span>
                  ) : null}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
