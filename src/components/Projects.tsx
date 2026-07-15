import {
  FeaturedProjectCard,
  type FeaturedProject,
} from "./FeaturedProjectCard";
import { ProjectArchive } from "./ProjectArchive";
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
    motion: "crm",
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
    motion: "attendance",
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
    motion: "events",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-shell projects-section">
      <div className="lab-container">
        <div className="projects-heading">
          <ScrollReveal>
            <span className="section-kicker">Selected work / 2024—2026</span>
            <h2 data-split>
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

        <ProjectArchive />
      </div>
    </section>
  );
}
