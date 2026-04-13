import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="research" aria-label="Research experience">
      <div className="sticky-section-header">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-ink lg:sr-only">
          Research
        </h2>
      </div>
      <div className="card-group flex flex-col gap-4">
        {experiences.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.range}`} experience={exp} />
        ))}
      </div>
      <div className="mt-8">
        <a
          href="/resume.pdf"
          className="prismatic-link inline-flex items-center gap-1 font-medium text-ink text-sm"
        >
          View Full Resume
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
            className="inline-block transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
