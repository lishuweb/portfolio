const SKILLS = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker / DevOps", level: 70 },
  { name: "GraphQL", level: 75 },
  { name: "Figma", level: 65 },
];

function SkillBar({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-theme-text">{name}</span>
        <span className="text-xs text-theme-text-secondary">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-theme-track-empty overflow-hidden">
        <div
          className="h-full rounded-full bg-theme-accent transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl text-theme-text mb-12">
          Skills & Expertise
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
