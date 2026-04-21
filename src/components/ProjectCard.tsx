"use client";

import { useState } from "react";
import { Project } from "@/types";
import TechTag from "./TechTag";
import ProjectBlog from "./ProjectBlog";

export default function ProjectCard({ project }: { project: Project }) {
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  const open = (e: React.MouseEvent) => {
    setOrigin({ x: e.clientX, y: e.clientY });
  };

  const openFromKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  return (
    <>
      <div className="card-item">
        <div
          onClick={open}
          onKeyDown={openFromKey}
          role="button"
          tabIndex={0}
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
        </div>
      </div>

      {origin && (
        <ProjectBlog
          project={project}
          origin={origin}
          onClose={() => setOrigin(null)}
        />
      )}
    </>
  );
}
