import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <Avatar
            size="lg"
            className="size-24 md:size-32 ring-4 ring-theme-avatar-bg"
          >
            <AvatarFallback className="bg-theme-avatar-bg text-theme-icon text-2xl md:text-3xl font-heading">
              JD
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-theme-text leading-tight">
          John Doe
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg md:text-xl text-theme-text-secondary max-w-2xl mx-auto">
          Full-stack developer crafting elegant web experiences with modern
          technologies.
        </p>

        {/* Tagline */}
        <p className="mt-4 text-base text-theme-text-secondary/70 max-w-xl mx-auto italic">
          Building products that live at the intersection of design and
          engineering.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-theme-accent px-6 text-sm font-medium text-white transition-all hover:bg-theme-accent/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium text-theme-text-secondary transition-all hover:bg-muted"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-theme-text-secondary/50">
          <span className="text-xs">Scroll to explore</span>
          <div className="h-8 w-px bg-theme-text-secondary/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
