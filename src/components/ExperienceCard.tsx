"use client";

import { useState, useRef } from "react";
import { Experience } from "@/types";
import TechTag from "./TechTag";

const COLLAPSED_HEIGHT = 72; // ~3 lines of text

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  const fullHeight = innerRef.current?.scrollHeight ?? COLLAPSED_HEIGHT;

  return (
    <div className="card-item">
      <div
        onClick={() => setExpanded(!expanded)}
        className="glass-card prismatic-border block p-6 cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-32 shrink-0">
            <span className="text-xs font-medium text-graphite/60 uppercase tracking-wide">
              {experience.range}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-ink font-semibold leading-snug">
              {experience.title} &middot; {experience.company}
            </h3>
            <div
              style={{
                height: expanded ? fullHeight : COLLAPSED_HEIGHT,
                overflow: "hidden",
                transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div ref={innerRef}>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {experience.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
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
