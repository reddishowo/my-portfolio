import Image from "next/image";
import { principles } from "@/data/portfolio";

const capabilities = [
  ["Web products", "Next.js, React, TypeScript, product interfaces"],
  ["Mobile applications", "Flutter, Dart, field and role-based workflows"],
  ["Data systems", "Python, NLP, machine learning, practical pipelines"],
] as const;

export function About() {
  return (
    <section id="about" className="section section--tinted" aria-labelledby="about-title">
      <div className="shell about-surface">
        <div className="section-heading" data-reveal>
          <span className="section-label">02 / About</span>
          <div>
            <h2 id="about-title">Engineering with a product point of view.</h2>
          </div>
        </div>

        <div className="about-grid" data-reveal data-reveal-delay="80">
          <div className="about-portrait">
            <Image
              src="/images/me.png"
              alt="Portrait of Farriel Arrianta"
              fill
              sizes="(max-width: 760px) 100vw, 36vw"
            />
          </div>

          <div className="about-copy">
            <p className="about-copy__lead">
              I work where interface craft, product thinking, and practical engineering
              meet. The goal is not simply to ship a screen—it is to understand the job
              behind it and make that job easier.
            </p>
            <p>
              My projects have taken me from employee tools and event platforms to CRM
              systems and scientific-literature research. That range has taught me to
              adapt the technology to the problem, rather than the other way around.
            </p>

            <dl className="capability-list">
              {capabilities.map(([title, detail]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <ol className="principles" aria-label="Working principles">
          {principles.map((principle, index) => (
            <li key={principle} data-reveal data-reveal-delay={index * 70}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
