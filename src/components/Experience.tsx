import { Award, BriefcaseBusiness, GraduationCap, Microscope, Smartphone } from "lucide-react";
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
  return (
    <section id="experience" className="section-shell experience-section">
      <div className="lab-container experience-layout">
        <div className="experience-heading">
          <ScrollReveal>
            <span className="section-kicker">Build log / trajectory</span>
            <h2>
              Learning by <span className="display-serif">shipping.</span>
            </h2>
            <p>
              Education, certifications, client work, and research—each entry adds another
              working layer to the practice.
            </p>
          </ScrollReveal>

          <ScrollReveal className="experience-heading__signal" delay={0.12}>
            <span>Current signal</span>
            <strong>Full-stack interfaces with real operational context.</strong>
          </ScrollReveal>
        </div>

        <div className="timeline" aria-label="Experience timeline">
          {timeline.map((entry, index) => {
            const Icon = entry.icon;

            return (
              <ScrollReveal key={entry.title} delay={index * 0.055} distance={20}>
                <article className="timeline-entry">
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
