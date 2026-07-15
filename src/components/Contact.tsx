"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowUpRight, Github, Linkedin, Send } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const linkedInUrl = "https://www.linkedin.com/in/farriel-arrianta/";

type FormStatus = "idle" | "opening" | "opened" | "fallback";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const panel = section?.querySelector<HTMLElement>(".contact-panel");
      const orbitPath = section?.querySelector<SVGPathElement>(".contact-orbit__path");
      if (!section || !panel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(panel, {
        clipPath: "inset(10% 8% 10% 8% round 3rem)",
        scale: 0.97,
        duration: 1.15,
        ease: "lab-smooth",
        immediateRender: false,
        scrollTrigger: {
          trigger: panel,
          start: "top 86%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".contact-form", {
        autoAlpha: 0,
        x: 46,
        duration: 0.9,
        ease: "lab-smooth",
        immediateRender: false,
        scrollTrigger: {
          trigger: panel,
          start: "top 74%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".contact-form label", {
        autoAlpha: 0,
        y: 14,
        stagger: 0.075,
        duration: 0.6,
        ease: "lab-smooth",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 82%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(".contact-panel__header i", {
        boxShadow: "0 0 0 9px color-mix(in srgb, var(--accent) 0%, transparent)",
        repeat: -1,
        duration: 1.6,
        ease: "power2.out",
      });

      if (orbitPath) {
        const labels = gsap.utils.toArray<HTMLElement>(".contact-orbit > span", section);
        labels.forEach((label, index) => {
          const start = index / labels.length;
          gsap.to(label, {
            duration: 19 + index * 2,
            repeat: -1,
            ease: "none",
            motionPath: {
              path: orbitPath,
              align: orbitPath,
              alignOrigin: [0.5, 0.5],
              start,
              end: start + 1,
            },
          });
        });
      }

      const fields = gsap.utils.toArray<HTMLElement>(".contact-form label", section);
      const progress = section.querySelector<HTMLElement>(".contact-form__progress i");
      const cleanups = fields.map((field, index) => {
        const input = field.querySelector<HTMLElement>("input, textarea");
        if (!input) return () => undefined;

        const activate = () => {
          fields.forEach((item) => item.classList.toggle("is-active", item === field));
          gsap.to(progress, {
            scaleX: (index + 1) / fields.length,
            duration: 0.5,
            ease: "lab-smooth",
          });
        };

        input.addEventListener("focus", activate);
        return () => input.removeEventListener("focus", activate);
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    },
    { scope: sectionRef },
  );

  useGSAP(
    () => {
      if (status === "idle") return;
      const statusElement = sectionRef.current?.querySelector<HTMLElement>("[data-form-status]");
      if (!statusElement) return;
      const text = statusElement.textContent ?? "";
      gsap.fromTo(
        statusElement,
        { textContent: "" },
        {
          duration: 0.7,
          scrambleText: { text, chars: "01ABCDEFGHIJKLMNOPQRSTUVWXYZ", speed: 0.65 },
        },
      );
    },
    { scope: sectionRef, dependencies: [status] },
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("opening");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const sendIcon = sectionRef.current?.querySelector<SVGElement>(".contact-form button svg");
    const orbit = sectionRef.current?.querySelector<HTMLElement>(".contact-orbit");
    if (sendIcon) {
      gsap.fromTo(
        sendIcon,
        { x: 0, y: 0, rotation: 0, autoAlpha: 1 },
        { x: 34, y: -28, rotation: -28, autoAlpha: 0, duration: 0.55, ease: "power3.in" },
      );
    }
    if (orbit) {
      gsap.fromTo(
        orbit,
        { boxShadow: "0 0 0 0 color-mix(in srgb, var(--accent) 34%, transparent)" },
        { boxShadow: "0 0 0 48px color-mix(in srgb, var(--accent) 0%, transparent)", duration: 0.9 },
      );
    }

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
    <section ref={sectionRef} id="contact" className="contact-section">
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
                <h2 data-split>
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
                <span className="contact-form__progress" aria-hidden="true"><i /></span>
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
                  <p data-form-status aria-live="polite">
                    {status === "fallback"
                      ? "Email is not configured, so LinkedIn was opened instead."
                      : "Typical response channel: LinkedIn or email draft."}
                  </p>
                </div>
              </form>
            </div>

            <div className="contact-orbit" aria-hidden="true">
              <svg viewBox="0 0 540 540" role="presentation">
                <path className="contact-orbit__path" d="M270 20a250 250 0 1 1 0 500a250 250 0 1 1 0-500" />
              </svg>
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
