"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ArrowDown, Github, Instagram, Linkedin, Terminal } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";
import AnimatedKeyboard from "./AnimatedKeyboard";
import CommandStatusDock from "./CommandStatusDock";

const heroCommand = "build:typed_interfaces --with-motion";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex <= heroCommand.length) {
          setDisplayText(heroCommand.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 42);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="home" className="relative z-10 flex min-h-dvh items-center overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 pb-16 pt-4 lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10">
          <FadeIn delay={0.1}>
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 p-1 sm:h-20 sm:w-20">
                <Image
                  src="/images/me.jpg"
                  alt="Farriel Arrianta"
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-cyan-200">Farriel Arrianta</p>
                <p className="mt-1 text-sm text-zinc-500">Software engineer / interface builder</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-2 font-mono text-xs text-zinc-400">
              <Terminal size={14} className="shrink-0 text-lime-300" />
              <span className="truncate">$ {displayText}</span>
              <span className="animate-pulse text-cyan-200">|</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-zinc-100 sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              I build fast, polished software for web, mobile, and data-driven products.
            </h1>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I build clean Next.js interfaces, Flutter apps, and data-driven products with enough motion to make the work feel responsive without getting in the way.
            </p>
          </FadeIn>

          <FadeIn delay={0.55} direction="up">
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white"
              >
                View projects <ArrowDown size={16} />
              </a>
              <div className="flex items-center gap-2">
                <SocialLink href="https://github.com/reddishowo" label="GitHub" icon={<Github size={18} />} />
                <SocialLink href="https://www.linkedin.com/in/farriel-arrianta/" label="LinkedIn" icon={<Linkedin size={18} />} />
                <SocialLink href="https://instagram.com/_farriel_" label="Instagram" icon={<Instagram size={18} />} />
              </div>
            </div>
          </FadeIn>

          <CommandStatusDock />
        </div>

        <div className="relative z-10">
          <AnimatedKeyboard />
        </div>
      </div>
    </section>
  );
}

const SocialLink = ({ href, icon, label }: { href: string; icon: ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    aria-label={label}
    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950/70 text-zinc-500 transition-colors duration-300 hover:border-zinc-600 hover:text-zinc-100"
  >
    {icon}
  </a>
);
