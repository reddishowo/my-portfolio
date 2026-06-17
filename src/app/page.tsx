import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandBackground from "@/components/CommandBackground";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#0b0d10]">
      <CommandBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
