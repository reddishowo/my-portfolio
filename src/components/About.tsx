import Image from "next/image";
import { principles } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const capabilities = [
  ["web", "Next.js · React · TypeScript"],
  ["mobile", "Flutter · Dart · GetX"],
  ["data", "Python · NLP · ML"],
] as const;

export function About() {
  return (
    <section id="about" className="section section--tinted" aria-labelledby="about-title">
      <div className="shell about-surface">
        <Reveal className="section-heading section-heading--lean">
          <span className="section-label">02 / about</span>
          <h2 id="about-title">Engineering with a product point of view.</h2>
        </Reveal>

        <Reveal className="about-grid" delay={80}>
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
              I build software around the real job behind the screen.
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
        </Reveal>

        <Reveal delay={140}>
          <p className="about-principles">
            <span className="about-principles__label">{"// principles"}</span>
            {principles.join("   ·   ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
