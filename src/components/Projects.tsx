import { projects } from "@/lib/projects";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <AnimatedSection
      id="projekty"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <div className="max-w-2xl">
        <span className="text-sm font-medium uppercase tracking-widest text-accent-2">
          Portfolio
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Wybrane realizacje
        </h2>
        <p className="mt-4 text-muted">
          Kilka projektów, przy których odpowiadałem za design i wdrożenie,
          od landing page&apos;y po motywy WordPress. Kliknij kartę, żeby
          zobaczyć stronę na żywo.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </AnimatedSection>
  );
}
