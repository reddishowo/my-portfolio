import { socialLinks } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Typewriter } from "./Typewriter";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="shell contact__inner">
        <Reveal>
          <span className="section-label">04 / contact</span>
        </Reveal>

        <div className="contact__content">
          <Reveal>
            <h2 id="contact-title">Have a useful problem?</h2>
            <div className="contact__prompt">
              <span>{'> ./contact'}</span>
              <Typewriter text="let's make it clear." speed={45} startDelay={500} />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="contact__aside">
              <p>
                {"I'm open to thoughtful freelance work, product collaborations, and software roles. Tell me what you are building and where the friction is."}
              </p>

              <div className="contact__links">
                {contactEmail ? (
                  <a className="contact__primary" href={`mailto:${contactEmail}`}>
                    {contactEmail} <span aria-hidden="true">&#8599;</span>
                  </a>
                ) : (
                  <a
                    className="contact__primary"
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start a conversation <span aria-hidden="true">&#8599;</span>
                  </a>
                )}
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <span aria-hidden="true">&#8599;</span>
                </a>
                <a href={socialLinks.github} target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <footer className="footer">
          <span>farriel@portfolio:~$</span>
          <span>software engineer // malang, id // &copy; 2026</span>
          <a href="#top">cd ~ &uarr;</a>
        </footer>
      </div>
    </section>
  );
}
