import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { LabScene } from "./LabScene";
import { ScrollReveal } from "./ScrollReveal";

const signals = [
  { value: "03", label: "disciplines" },
  { value: "08", label: "shipped builds" },
  { value: "IDN", label: "Malang based" },
] as const;

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="lab-container hero-grid">
        <div className="hero-copy">
          <ScrollReveal>
            <div className="hero-intro">
              <div className="hero-portrait">
                <Image
                  src="/images/me.jpg"
                  alt="Farriel Arrianta"
                  fill
                  priority
                  sizes="52px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="section-kicker">Independent software engineer</span>
                <p>Web systems · Mobile products · Data workflows</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} distance={38}>
            <h1 className="hero-title">
              I engineer <span className="display-serif">digital products</span> that make complex work feel simple.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="hero-summary">
              I turn operational ideas into precise Next.js interfaces, capable Flutter apps,
              and data-driven tools—designed to feel clear from the first interaction.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.22}>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore selected work
                <ArrowDownRight size={17} />
              </a>
              <a
                className="button-text"
                href="https://www.linkedin.com/in/farriel-arrianta/"
                target="_blank"
                rel="noreferrer"
              >
                Start a conversation
                <ArrowUpRight size={16} />
              </a>
              <nav className="hero-socials" aria-label="Social links">
                <a href="https://github.com/reddishowo" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <Github size={17} />
                </a>
                <a href="https://www.linkedin.com/in/farriel-arrianta/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  <Linkedin size={17} />
                </a>
              </nav>
            </div>
          </ScrollReveal>

          <ScrollReveal className="hero-signals" delay={0.28}>
            {signals.map((signal) => (
              <div key={signal.label}>
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <div className="hero-visual">
          <LabScene />
          <div className="hero-visual__caption" aria-hidden="true">
            <span>Interactive object / move cursor</span>
            <span>01—03</span>
          </div>
        </div>
      </div>

      <div className="lab-container hero-footnote" aria-hidden="true">
        <span>Scroll to disassemble the workbench</span>
        <i />
        <span>JKT +07:00</span>
      </div>
    </section>
  );
}
