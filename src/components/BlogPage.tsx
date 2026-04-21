"use client";

import Link from "next/link";
import { Project } from "@/types";
import { useTransitionNavigate } from "./TransitionProvider";

export default function BlogPage({ project }: { project: Project }) {
  const navigate = useTransitionNavigate();
  const blog = project.blog;

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    let { clientX, clientY } = e;
    if (!clientX && !clientY) {
      const r = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
      clientX = r.left + r.width / 2;
      clientY = r.top + r.height / 2;
    }
    navigate(clientX, clientY, "/");
  };

  return (
    <main className="min-h-screen bg-bone">
      <div className="mx-auto max-w-[680px] px-6 py-14 md:px-8 md:py-24">
        <Link
          href="/"
          onClick={handleBack}
          className="mb-14 inline-flex items-center gap-2 text-sm text-graphite hover:text-ink transition-colors"
          style={{ touchAction: "manipulation" }}
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
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="blog-title text-ink">{project.title}</h1>
            {blog?.subtitle && (
              <p className="mt-5 text-[1.15rem] leading-relaxed text-graphite">
                {blog.subtitle}
              </p>
            )}
            <div className="mt-8 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-graphite/70">
              {blog?.date && <span>{blog.date}</span>}
              {blog?.date && blog?.readTime && (
                <span aria-hidden="true">·</span>
              )}
              {blog?.readTime && <span>{blog.readTime}</span>}
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
    </main>
  );
}
