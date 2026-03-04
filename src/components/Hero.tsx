import { Github, Linkedin, Instagram } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-3xl flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 border border-zinc-800 p-1">
            <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden">
              <img src="/images/me.jpg" alt="Farriel Arrianta" className="w-full h-full object-cover hover:scale-110 transition-all duration-500" />
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 mb-4">
            Hi, I'm Farriel Arrianta
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          {/* Deskripsi yang sudah disesuaikan dengan Repository GitHub-mu */}
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl font-light leading-relaxed">
            Multidisciplinary Software Engineer. I build elegant web platforms, robust cross-platform mobile applications, and intelligent data science pipelines. Focused on clean architecture and impactful digital experiences.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com/reddishowo" icon={<Github size={22} />} />
            <SocialLink href="https://www.linkedin.com/in/farriel-arrianta/" icon={<Linkedin size={22} />} />
            <SocialLink href="https://instagram.com/_farriel_" icon={<Instagram size={22} />} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="text-zinc-500 hover:text-zinc-200 transition-colors duration-300"
  >
    {icon}
  </a>
);