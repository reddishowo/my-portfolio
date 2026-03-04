import { FadeIn } from "./FadeIn";

export default function About() {
  const skills = ["TypeScript", "Next.js", "Flutter", "Dart", "Python", "Data Science", "Machine Learning", "React", "Java"];

  return (
    <section id="about" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-8">About</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <p className="text-zinc-300 leading-relaxed font-light text-lg">
              I am a software engineer based in Indonesia, currently studying at the University of Muhammadiyah Malang. I have a deep passion for building scalable web applications and exploring the intersection of design and technology.
              <br/><br/>
              My approach to development revolves around minimalism—removing the unnecessary to focus on what truly matters: performance, user experience, and elegant code architecture.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full hover:border-zinc-600 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}