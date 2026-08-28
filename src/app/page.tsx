import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MotionEffects } from "@/components/MotionEffects";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <SiteHeader />
      <MotionEffects />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
