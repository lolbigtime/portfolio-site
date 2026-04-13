"use client";

import { useState } from "react";
import { Project } from "@/types";
import TechTag from "./TechTag";

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-item">
      <div
        onClick={() => setExpanded(!expanded)}
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
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 hover:text-violet transition-colors duration-200"
              >
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
                  className="inline-block transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </h3>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: expanded ? "600px" : "4.5rem" }}
            >
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`shrink-0 ml-4 text-graphite/50 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
