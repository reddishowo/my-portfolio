import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section shell" aria-labelledby="experience-title">
      <div className="section-heading" data-reveal>
        <span className="section-label">03 / Experience</span>
        <div>
          <h2 id="experience-title">Learning through real constraints and shipped work.</h2>
          <p>
            Client work, an internship, education, and research have each added a
            different layer to how I approach software.
          </p>
        </div>
      </div>

      <div className="experience-list">
        {experience.map((item, index) => (
          <article
            key={`${item.role}-${item.period}`}
            className="experience-row"
            data-reveal
            data-reveal-delay={index * 65}
          >
            <span className="experience-row__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <time>{item.period}</time>
            <div>
              <h3>{item.role}</h3>
              <p className="experience-row__organization">{item.organization}</p>
            </div>
            <p className="experience-row__description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
