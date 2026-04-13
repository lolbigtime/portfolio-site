import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-label="Selected projects">
      <div className="sticky-section-header">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-ink lg:sr-only">
          Projects
        </h2>
      </div>
      <p className="mb-6 text-graphite leading-relaxed">
        Here&apos;s some cool projects I worked on in no particular order:
      </p>
      <div className="card-group flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
