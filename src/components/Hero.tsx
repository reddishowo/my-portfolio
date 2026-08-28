import { socialLinks } from "@/data/portfolio";
import { Typewriter } from "./Typewriter";
import { Reveal } from "./Reveal";

const HEADLINE = "I build software for real-world operations.";

export function Hero() {
  return (
    <section id="top" className="hero shell" aria-labelledby="hero-title">
      <div className="terminal" aria-hidden="false">
        <div className="terminal__bar">
          <span className="terminal__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="terminal__title">farriel@portfolio: ~/intro</span>
        </div>

        <div className="terminal__body">
          <div className="hero__status">
            <span className="status-dot" aria-hidden="true" />
            Available for thoughtful collaborations
          </div>

          <h1 id="hero-title" className="hero__prompt">
            <span className="hero__prompt__sym">{'>'}</span>
            <Typewriter text={HEADLINE} speed={34} startDelay={450} />
          </h1>

          <Reveal delay={1800} y={24}>
            <div className="hero__lower">
              <p className="hero__intro">
                {"I'm Farriel, a software engineer based in Malang, Indonesia. I turn complex workflows into clear web products, useful mobile applications, and practical data tools."}
              </p>

              <div className="hero__actions">
                <a className="btn btn--primary" href="#work">
                  View selected work <span aria-hidden="true">&darr;</span>
                </a>
                <a className="btn" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <span aria-hidden="true">&#8599;</span>
                </a>
                <a className="btn" href={socialLinks.github} target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero__foot" aria-hidden="true">
        <span>{"web // mobile // data"}</span>
        <span>08&deg;S / 112&deg;E</span>
      </div>
    </section>
  );
}
