import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code } from "lucide-react";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart, checkout, and payment integration using Stripe.",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts, user management, and customizable reports.",
    tech: ["React", "D3.js", "Node.js", "WebSocket", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with Kanban boards, task assignments, deadlines, and team chat.",
    tech: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content creation tool that generates blog posts, social media copy, and marketing materials.",
    tech: ["Next.js", "OpenAI API", "PostgreSQL", "Vercel AI SDK"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  index,
}: (typeof PROJECTS)[number] & { index: number }) {
  return (
    <Card
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <CardTitle className="font-heading text-lg text-theme-text">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-theme-text-secondary leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-theme-text-secondary hover:text-theme-accent transition-colors"
          >
            <Code className="size-3.5" />
            Source
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-theme-text-secondary hover:text-theme-accent transition-colors"
          >
            <ExternalLink className="size-3.5" />
            Live Demo
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl text-theme-text mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
