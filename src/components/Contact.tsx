import { socialLinks } from "@/data/portfolio";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="shell contact__inner" data-reveal>
        <span className="section-label">04 / Contact</span>

        <div className="contact__content">
          <h2 id="contact-title">
            Have a useful problem?
            <span>Let’s make it clear.</span>
          </h2>

          <div className="contact__aside">
            <p>
              I’m open to thoughtful freelance work, product collaborations, and software
              roles. Tell me what you are building and where the friction is.
            </p>

            <div className="contact__links">
              {contactEmail ? (
                <a className="contact__primary" href={`mailto:${contactEmail}`}>
                  {contactEmail} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <a className="contact__primary" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  Start a conversation <span aria-hidden="true">↗</span>
                </a>
              )}
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="footer">
          <span>Farriel Arrianta</span>
          <span>Software engineer · Malang, Indonesia</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
