const EXPERIENCE = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2023 — Present",
    description:
      "Leading development of the core SaaS platform. Architected microservices migration, improved performance by 40%, and mentored junior developers.",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2021 — 2023",
    description:
      "Built the MVP and scaled it to 10k+ users. Implemented real-time features, payment processing, and third-party integrations.",
  },
  {
    role: "Frontend Developer",
    company: "WebAgency Co.",
    period: "2020 — 2021",
    description:
      "Developed responsive web applications for diverse clients. Specialized in React-based SPAs and interactive data visualizations.",
  },
  {
    role: "Junior Developer",
    company: "DigitalSolutions Ltd.",
    period: "2019 — 2020",
    description:
      "Started career building and maintaining client websites. Gained foundational experience in full-stack development and DevOps.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl text-theme-text mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-theme-track-empty hidden sm:block" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="relative sm:pl-8 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 hidden sm:flex size-3 -translate-x-1/2 rounded-full bg-theme-accent ring-2 ring-theme-bg" />

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-heading text-lg text-theme-text">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-theme-text-secondary whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-theme-accent mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-theme-text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
