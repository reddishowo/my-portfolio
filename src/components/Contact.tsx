"use client";

import { ArrowUpRight, Github, Linkedin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const linkedInUrl = "https://www.linkedin.com/in/farriel-arrianta/";

type FormStatus = "idle" | "opening" | "opened" | "fallback";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("opening");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    if (!contactEmail) {
      window.open(linkedInUrl, "_blank", "noopener,noreferrer");
      setStatus("fallback");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    form.reset();
    setStatus("opened");
  };

  const buttonLabel = {
    idle: "Compose message",
    opening: "Opening channel…",
    opened: "Draft opened",
    fallback: "Continue on LinkedIn",
  }[status];

  return (
    <section id="contact" className="contact-section">
      <div className="lab-container">
        <ScrollReveal>
          <div className="contact-panel">
            <div className="contact-panel__header">
              <span>Communication port / open</span>
              <span><i aria-hidden="true" /> Available for a good problem</span>
            </div>

            <div className="contact-panel__body">
              <div className="contact-copy">
                <span className="section-kicker">Contact / next build</span>
                <h2>
                  Have a complex idea?
                  <br />
                  Let’s make it <span className="display-serif">clear.</span>
                </h2>
                <p>
                  Share the product, workflow, or interface you want to improve. A useful
                  first message includes context, constraints, and the result you need.
                </p>

                <div className="contact-links">
                  <a href={linkedInUrl} target="_blank" rel="noreferrer">
                    <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
                  </a>
                  <a href="https://github.com/reddishowo" target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__topline">
                  <span>message.compose</span>
                  <span>secure / direct</span>
                </div>
                <div className="contact-form__row">
                  <label>
                    <span>01 / Name</span>
                    <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
                  </label>
                  <label>
                    <span>02 / Email</span>
                    <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                  </label>
                </div>
                <label>
                  <span>03 / Project context</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="What are you building, and what needs to become simpler?"
                    required
                  />
                </label>
                <div className="contact-form__footer">
                  <button type="submit" disabled={status === "opening"}>
                    <Send size={15} /> {buttonLabel}
                  </button>
                  <p aria-live="polite">
                    {status === "fallback"
                      ? "Email is not configured, so LinkedIn was opened instead."
                      : "Typical response channel: LinkedIn or email draft."}
                  </p>
                </div>
              </form>
            </div>

            <div className="contact-orbit" aria-hidden="true">
              <span>WEB</span>
              <span>MOBILE</span>
              <span>DATA</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
