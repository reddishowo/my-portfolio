import { FadeIn } from "./FadeIn";

export default function About() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart", "GetX", "Maps API"],
    },
    {
      title: "Data",
      skills: ["Python", "NLP", "Machine Learning", "MongoDB"],
    },
  ];

  const signals = [
    { label: "Primary mode", value: "Full-stack interfaces" },
    { label: "Current focus", value: "Systems that feel fast" },
    { label: "Base", value: "Indonesia" },
  ];

  return (
    <section id="about" className="relative z-10 border-t border-zinc-900 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-sm text-cyan-200">/about</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-100 sm:text-4xl">A practical builder with a motion-first interface instinct.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-500">
              Minimalism still matters here, but the new site lets the work feel tactile: keys, commands, panels, and precise movement.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="font-mono text-xs text-zinc-500">profile.readme</span>
                <span className="h-2 w-2 rounded-full bg-lime-300" />
              </div>
              <p className="text-lg leading-8 text-zinc-300">
                I am a software engineer based in Indonesia, currently studying at the University of Muhammadiyah Malang. I care about building scalable web applications, useful mobile products, and clean data workflows.
              </p>
              <p className="mt-5 text-base leading-8 text-zinc-500">
                My approach is to remove noise, keep architecture understandable, and make interfaces feel responsive through clear interaction design.
              </p>

              <div className="mt-8 grid gap-3">
                {signals.map((signal) => (
                  <div key={signal.label} className="grid grid-cols-[8rem_1fr] gap-3 border-t border-zinc-900 pt-3 text-sm">
                    <span className="font-mono text-zinc-600">{signal.label}</span>
                    <span className="text-zinc-300">{signal.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="grid gap-4 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4">
                  <h3 className="mb-4 font-mono text-xs text-zinc-500">{group.title}</h3>
                  <div className="grid gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="min-h-13 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 shadow-lg shadow-black/20 transition-colors hover:border-cyan-300/60 hover:text-cyan-100"
                      >
                        <span className="block text-sm font-semibold text-zinc-200">{skill}</span>
                        <span className="mt-1 block font-mono text-[11px] text-zinc-600">stack</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
