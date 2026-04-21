"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Project } from "@/types";

interface Props {
  project: Project;
  origin: { x: number; y: number };
  onClose: () => void;
}

const CIRCLE_MS = 750;
const CONTENT_MS = 350;
const CONTENT_DELAY_MS = 300;

export default function ProjectBlog({ project, origin, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [clipOpen, setClipOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [radius, setRadius] = useState(0);
  const closingRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    const r =
      Math.hypot(
        Math.max(origin.x, window.innerWidth - origin.x),
        Math.max(origin.y, window.innerHeight - origin.y)
      ) + 80;
    setRadius(r);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setClipOpen(true);
      });
    });
    const t = window.setTimeout(
      () => setContentOpen(true),
      CONTENT_DELAY_MS
    );

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [origin.x, origin.y]);

  const handleClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setContentOpen(false);
    window.setTimeout(() => {
      setClipOpen(false);
      window.setTimeout(onClose, CIRCLE_MS);
    }, CONTENT_MS - 80);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  const clip = clipOpen
    ? `circle(${radius}px at ${origin.x}px ${origin.y}px)`
    : `circle(0px at ${origin.x}px ${origin.y}px)`;

  const blog = project.blog;

  const overlay = (
    <div
      className="fixed inset-0 z-[60] bg-bone"
      style={{
        clipPath: clip,
        WebkitClipPath: clip,
        transition: `clip-path ${CIRCLE_MS}ms cubic-bezier(0.77, 0, 0.175, 1), -webkit-clip-path ${CIRCLE_MS}ms cubic-bezier(0.77, 0, 0.175, 1)`,
      }}
      aria-modal="true"
      role="dialog"
      aria-label={`${project.title} details`}
    >
      <div className="h-full overflow-y-auto">
        <div
          className="mx-auto max-w-[680px] px-6 py-14 md:px-8 md:py-24"
          style={{
            opacity: contentOpen ? 1 : 0,
            transform: contentOpen ? "translateY(0)" : "translateY(10px)",
            transition: `opacity ${CONTENT_MS}ms ease, transform ${CONTENT_MS}ms ease`,
          }}
        >
          <button
            type="button"
            onClick={handleClose}
            className="mb-14 inline-flex items-center gap-2 text-sm text-graphite hover:text-ink transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>

          <article>
            <header className="mb-12">
              <h1 className="blog-title text-ink">{project.title}</h1>
              {blog?.subtitle && (
                <p className="mt-5 text-[1.15rem] leading-relaxed text-graphite">
                  {blog.subtitle}
                </p>
              )}
              <div className="mt-8 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-graphite/70">
                <span>{blog?.date}</span>
                <span aria-hidden="true">·</span>
                <span>{blog?.readTime}</span>
              </div>
            </header>

            {blog?.sections.map((section, i) => (
              <section key={i} className="mb-4">
                {section.heading && (
                  <h2 className="blog-heading text-ink mt-14 mb-5">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="blog-body mb-5">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <footer className="mt-20 pt-10 border-t border-mist">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-graphite hover:text-violet transition-colors"
                >
                  <span>Source on GitHub</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
            </footer>
          </article>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
