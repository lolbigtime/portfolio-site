import { Project } from "@/types";
import TechTag from "./TechTag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-item">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card prismatic-border block p-6 group"
        aria-label={project.title}
      >
        <div className="flex flex-col gap-4">
          {project.image && (
            <div className="rounded-lg overflow-hidden border border-mist/50">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
          <div>
            <h3 className="text-ink font-semibold leading-snug group-hover:text-violet transition-colors duration-200">
              <span className="inline-flex items-center gap-1">
                {project.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechTag key={tech} label={tech} />
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
