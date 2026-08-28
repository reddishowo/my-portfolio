import Image from "next/image";
import { archiveProjects, featuredProjects } from "@/data/portfolio";

export function Work() {
  return (
    <section id="work" className="section shell" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <span className="section-label">01 / Selected work</span>
        <div>
          <h2 id="work-title">Products built around the work people actually do.</h2>
          <p>
            A selection of operational, mobile, and collaborative systems—shown through
            the problem, my contribution, and the resulting product.
          </p>
        </div>
      </div>

      <div className="featured-work">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="project"
            data-reveal
            data-reveal-delay={index * 70}
          >
            <a
              className="project__image"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} repository`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 68vw"
              />
              <span className="project__image-action" aria-hidden="true">
                View project ↗
              </span>
            </a>

            <div className="project__content">
              <div className="project__meta">
                <span>{project.number}</span>
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project__summary">{project.summary}</p>

              <div className="project__notes">
                <div>
                  <span>Contribution</span>
                  <p>{project.contribution}</p>
                </div>
                <div>
                  <span>Product scope</span>
                  <p>{project.detail}</p>
                </div>
              </div>

              <div className="project__footer">
                <ul aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={project.repository} target="_blank" rel="noreferrer">
                  Repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="archive" aria-labelledby="archive-title" data-reveal>
        <div className="archive__heading">
          <h3 id="archive-title">Project archive</h3>
          <span>Five more builds and experiments</span>
        </div>

        <div className="archive__list">
          {archiveProjects.map((project) => (
            <a
              key={project.title}
              className="archive-row"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
            >
              <span className="archive-row__number">{project.number}</span>
              <strong>{project.title}</strong>
              <span>{project.type}</span>
              <span>{project.stack}</span>
              <span>{project.year}</span>
              <span className="archive-row__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
