import { Experience } from "@/types";
import TechTag from "./TechTag";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="card-item">
      <a
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card prismatic-border block p-6 group"
        aria-label={`${experience.title} at ${experience.company}`}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-32 shrink-0">
            <span className="text-xs font-medium text-graphite/60 uppercase tracking-wide">
              {experience.range}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-ink font-semibold leading-snug group-hover:text-violet transition-colors duration-200">
              {experience.title} &middot;{" "}
              <span className="inline-flex items-center gap-1">
                {experience.company}
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
              {experience.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <TechTag key={tech} label={tech} />
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
