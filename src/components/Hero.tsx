"use client";

import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Database,
  Github,
  Linkedin,
  PanelsTopLeft,
  Smartphone,
} from "lucide-react";
import { useRef } from "react";
import { LabScene } from "./LabScene";

const signals = [
  { value: "03", label: "disciplines" },
  { value: "08", label: "shipped builds" },
  { value: "IDN", label: "Malang based" },
] as const;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const title = titleRef.current;
      if (!hero || !title) return;

      gsap.set(hero, { autoAlpha: 1 });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const split = SplitText.create(title, {
        type: "lines,words",
        mask: "lines",
        autoSplit: true,
        aria: "auto",
        onSplit: (self) =>
          gsap.from(self.lines, {
            autoAlpha: 0,
            yPercent: 110,
            duration: 1.05,
            stagger: 0.09,
            delay: 0.18,
            ease: "lab-smooth",
          }),
      });

      const intro = gsap.timeline({
        defaults: { ease: "lab-smooth" },
        delay: 0.05,
      });

      intro
        .from(".hero-intro", { autoAlpha: 0, y: 22, duration: 0.8 }, 0)
        .from(".hero-portrait", { scale: 0.55, rotation: -8, duration: 0.95 }, 0)
        .from(".hero-summary", { autoAlpha: 0, y: 24, duration: 0.8 }, 0.48)
        .from(".hero-actions > *", { autoAlpha: 0, y: 16, stagger: 0.065, duration: 0.65 }, 0.58)
        .from(".hero-signals > div", { autoAlpha: 0, y: 14, stagger: 0.07, duration: 0.55 }, 0.7)
        .from(".hero-mobile-lab__cell", { autoAlpha: 0, y: 16, stagger: 0.06, duration: 0.5 }, 0.78)
        .from(".hero-visual__caption > span", { autoAlpha: 0, y: 8, stagger: 0.08, duration: 0.5 }, 0.82)
        .from(".hero-footnote", { autoAlpha: 0, y: 8, duration: 0.55 }, 0.88)
        .from(".hero-footnote i", { scaleX: 0, transformOrigin: "0 50%", duration: 0.8 }, 0.9);

      gsap.to(".hero-mobile-lab__scan", {
        xPercent: 620,
        duration: 2.6,
        repeat: -1,
        ease: "none",
      });

      const signalValues = gsap.utils.toArray<HTMLElement>(".hero-signals strong", hero);
      signalValues.forEach((signal, index) => {
        const text = signal.textContent ?? "";
        intro.fromTo(
          signal,
          { textContent: "" },
          {
            duration: 0.65,
            scrambleText: { text, chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", speed: 0.65 },
          },
          0.72 + index * 0.055,
        );
      });

      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
        .to(".hero-copy", { y: -72, autoAlpha: 0.22 }, 0)
        .to(".hero-footnote", { y: -22, autoAlpha: 0 }, 0)
        .to(".hero-mobile-lab", { y: -40, autoAlpha: 0 }, 0);

      return () => split.revert();
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} id="home" className="hero-section">
      <div className="lab-container hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <div className="hero-portrait">
              <Image
                src="/images/me.jpg"
                alt="Farriel Arrianta"
                fill
                priority
                sizes="52px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="section-kicker">Independent software engineer</span>
              <p>Web systems · Mobile products · Data workflows</p>
            </div>
          </div>

          <h1 ref={titleRef} className="hero-title">
            I engineer <span className="display-serif">digital products</span> that make complex work feel simple.
          </h1>

          <p className="hero-summary">
            I turn operational ideas into precise Next.js interfaces, capable Flutter apps,
            and data-driven tools—designed to feel clear from the first interaction.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore selected work
              <ArrowDownRight size={17} />
            </a>
            <a
              className="button-text"
              href="https://www.linkedin.com/in/farriel-arrianta/"
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
            <nav className="hero-socials" aria-label="Social links">
              <a href="https://github.com/reddishowo" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github size={17} />
              </a>
              <a href="https://www.linkedin.com/in/farriel-arrianta/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={17} />
              </a>
            </nav>
          </div>

          <div className="hero-signals">
            {signals.map((signal) => (
              <div key={signal.label}>
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-mobile-lab" aria-hidden="true">
            <span className="hero-mobile-lab__scan" />
            <span className="hero-mobile-lab__cell">
              <PanelsTopLeft size={15} /> Web <i>01</i>
            </span>
            <span className="hero-mobile-lab__cell">
              <Smartphone size={15} /> Mobile <i>02</i>
            </span>
            <span className="hero-mobile-lab__cell">
              <Database size={15} /> Data <i>03</i>
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <LabScene />
          <div className="hero-visual__caption" aria-hidden="true">
            <span>Interactive object / move cursor</span>
            <span>01—03</span>
          </div>
        </div>
      </div>

      <div className="lab-container hero-footnote" aria-hidden="true">
        <span>Scroll to disassemble the workbench</span>
        <i />
        <span>JKT +07:00</span>
      </div>
    </section>
  );
}
