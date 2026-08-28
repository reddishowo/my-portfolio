import Image from "next/image";
import { archiveProjects, featuredProjects } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="section shell" aria-labelledby="work-title">
      <Reveal className="section-heading section-heading--lean">
        <span className="section-label">01 / selected work</span>
        <h2 id="work-title">Products built around the work people actually do.</h2>
      </Reveal>

      <div className="featured-work">
        {featuredProjects.map((project, index) => (
          <Reveal
            as="article"
            key={project.title}
            className="project"
            delay={index * 70}
          >
            <a
              className="project__media"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} repository`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 60vw"
              />
              <span className="project__media-action" aria-hidden="true">
                View project &#8599;
              </span>
            </a>

            <div className="project__content">
              <div className="project__meta">
                <span>{project.number}</span>
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project__tagline">{project.tagline}</p>

              <div className="project__footer">
                <ul className="project__stack" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="project__link"
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="archive" delay={120}>
        <div className="archive__heading">
          <strong>project archive</strong>
          <span>$ ls -la ./archive &mdash; five more builds</span>
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
              <span className="archive-row__arrow" aria-hidden="true">&#8599;</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
