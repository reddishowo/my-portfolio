"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";

export default function Hero() {
  const fullText = "Hi, I'm Farriel Arrianta";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;

    // Memberikan sedikit delay (300ms) agar selaras dengan animasi FadeIn dari bawah
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 80); // 80ms adalah kecepatan ketik per karakter. Ubah jika ingin lebih cepat/lambat.
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="home" className="min-h-dvh flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-3xl flex flex-col items-center text-center z-10">
        
        {/* FOTO PROFIL (Berwarna + Efek Zoom-in sedikit saat dihover) */}
        <FadeIn delay={0.1}>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 border border-zinc-800 p-1">
            <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden relative">
              <Image 
                src="/images/me.jpg" 
                alt="Farriel Arrianta" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105" 
                priority
              />
            </div>
          </div>
        </FadeIn>
        
        {/* TEKS DENGAN ANIMASI MENGETIK */}
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 mb-4 min-h-10 md:min-h-15">
            {displayText}
            <span className="animate-pulse text-zinc-500 font-light">|</span>
          </h1>
        </FadeIn>
        
        {/* DESKRIPSI SINGKAT */}
        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl font-light leading-relaxed">
            Multidisciplinary Software Engineer. I build elegant web platforms, robust cross-platform mobile applications, and intelligent data science pipelines. Focused on clean architecture and impactful digital experiences.
          </p>
        </FadeIn>

        {/* SOSIAL MEDIA */}
        <FadeIn delay={0.5} direction="up">
          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com/reddishowo" icon={<Github size={22} />} />
            <SocialLink href="https://www.linkedin.com/in/farriel-arrianta/" icon={<Linkedin size={22} />} />
            <SocialLink href="https://instagram.com/_farriel_" icon={<Instagram size={22} />} />
          </div>
        </FadeIn>
      </div>

      {/* Efek Cahaya / Glow minimalis di background (Opsional, menambah kesan elegan) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-150 h-75 md:h-100 bg-zinc-800/20 blur-[100px] md:blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="text-zinc-500 hover:text-zinc-200 transition-transform duration-300 hover:scale-110"
  >
    {icon}
  </a>
);