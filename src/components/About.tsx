import { ArrowUpRight, Database, PanelsTopLeft, Smartphone } from "lucide-react";
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
  return (
    <section id="about" className="section-shell capabilities-section">
      <div className="lab-container">
        <div className="capabilities-intro">
          <ScrollReveal>
            <span className="section-kicker">Profile / capabilities</span>
            <h2>
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
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <ScrollReveal key={capability.title} delay={index * 0.09}>
                <article className={`capability-card capability-card--${capability.tone}`}>
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
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="principles-strip">
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
