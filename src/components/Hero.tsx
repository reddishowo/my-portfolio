import Image from "next/image";
import { socialLinks } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="hero shell" aria-labelledby="hero-title">
      <div className="hero__eyebrow reveal">
        <span className="availability-dot" aria-hidden="true" />
        Available for thoughtful collaborations
      </div>

      <div className="hero__title-wrap">
        <h1 id="hero-title" className="hero__title reveal reveal--delay-1">
          I design and build software for
          <span>real-world operations.</span>
        </h1>

        <div className="hero__portrait reveal reveal--delay-2">
          <Image
            src="/images/me.jpg"
            alt="Farriel Arrianta"
            fill
            priority
            sizes="(max-width: 720px) 108px, 136px"
          />
        </div>
      </div>

      <div className="hero__lower reveal reveal--delay-3">
        <p className="hero__intro">
          I’m Farriel, a software engineer based in Malang, Indonesia. I turn complex
          workflows into clear web products, useful mobile applications, and practical
          data tools.
        </p>

        <div className="hero__actions">
          <a className="text-link text-link--primary" href="#work">
            View selected work <span aria-hidden="true">↓</span>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero__foot" aria-hidden="true">
        <span>Web · Mobile · Data</span>
        <span>08°S / 112°E</span>
      </div>
    </section>
  );
}
