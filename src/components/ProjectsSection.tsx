import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-label="Projects">
      <div className="sticky-section-header">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-ink lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <p className="mb-6 text-graphite leading-relaxed font-medium">Featured</p>
          <div className="card-group flex flex-col gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-6 text-graphite leading-relaxed">
            Here&apos;s some cool projects I worked on in no particular order:
          </p>
          <div className="card-group flex flex-col gap-4">
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
