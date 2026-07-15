import { About } from "@/components/About";
import { CommandBackground } from "@/components/CommandBackground";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main id="content" className="lab-page">
      <div id="theme-wipe" className="theme-wipe" aria-hidden="true" />
      <CommandBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
