const ITEMS = [
  "Next.js",
  "TypeScript",
  "Flutter",
  "Python",
  "React",
  "Tailwind CSS",
  "Dart",
  "NLP",
  "Product design",
  "CRM architecture",
  "Mobile workflows",
  "Data systems",
  "Machine learning",
  "Full-stack",
] as const;

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((dup) => (
          <ul className="marquee__list" key={dup}>
            {ITEMS.map((item) => (
              <li key={`${dup}-${item}`}>
                <span className="marquee__sep">{">>"}</span>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
