import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl text-theme-text mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <Avatar className="size-36 md:size-44 ring-4 ring-theme-avatar-bg">
                <AvatarFallback className="bg-theme-avatar-bg text-theme-icon text-3xl md:text-4xl font-heading">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-theme-accent flex items-center justify-center text-white text-sm font-medium">
                5+
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed text-theme-text">
              I&apos;m a full-stack developer with a passion for building
              products that are both functional and beautiful. With over 5 years
              of experience, I specialize in React, Next.js, TypeScript, and
              Node.js — turning complex problems into clean, maintainable code.
            </p>
            <p className="text-base leading-relaxed text-theme-text-secondary">
              I believe great software starts with understanding the user. Every
              project I take on is an opportunity to create something that
              genuinely helps people — whether it&apos;s a dashboard that makes
              data accessible or an e-commerce platform that feels effortless.
            </p>
            <p className="text-base leading-relaxed text-theme-text-secondary">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, writing about development, or contributing to
              open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
