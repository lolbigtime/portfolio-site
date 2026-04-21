"use client";

import Link from "next/link";
import { Project } from "@/types";
import TechTag from "./TechTag";
import { slugify } from "@/lib/slug";
import { useTransitionNavigate } from "./TransitionProvider";

export default function ProjectCard({ project }: { project: Project }) {
  const slug = slugify(project.title);
  const href = `/projects/${slug}/`;
  const navigate = useTransitionNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    navigate(e.clientX, e.clientY, href);
  };

  return (
    <div className="card-item">
      <Link
        href={href}
        onClick={handleClick}
        aria-label={`Read about ${project.title}`}
        className="glass-card prismatic-border block p-6 cursor-pointer"
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
            <h3 className="text-ink font-semibold leading-snug">
              {project.title}
            </h3>
            <p className="mt-2 pb-1 text-sm leading-relaxed text-graphite line-clamp-3">
              {project.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
              <span className="shrink-0 ml-4 inline-flex items-center gap-1 text-xs text-graphite/60">
                Read
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
