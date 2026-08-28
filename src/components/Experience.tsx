import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const commitHashes = ["a1f3c2", "b7e9d4", "c4a8f1", "d2c5b0"];

export function Experience() {
  return (
    <section id="experience" className="section shell" aria-labelledby="experience-title">
      <Reveal className="section-heading section-heading--lean">
        <span className="section-label">03 / experience</span>
        <h2 id="experience-title">A short log of shipped work.</h2>
      </Reveal>

      <div className="experience-list">
        {experience.map((item, index) => (
          <Reveal
            as="article"
            key={`${item.role}-${item.period}`}
            className="experience-row"
            delay={index * 65}
          >
            <span className="experience-row__hash">#{commitHashes[index]}</span>
            <time>{item.period}</time>
            <div>
              <h3>{item.role}</h3>
              <p className="experience-row__organization">{item.organization}</p>
            </div>
            <p className="experience-row__tagline">{item.tagline}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
