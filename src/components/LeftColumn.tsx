"use client";

import SectionNav from "./SectionNav";
import SocialIcons from "./SocialIcons";
import AsciiDoubleHelix from "./AsciiDoubleHelix";

interface LeftColumnProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function LeftColumn({ activeSection, onNavClick }: LeftColumnProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[480px] lg:flex-col lg:justify-between lg:py-24 relative overflow-hidden">
      {/* Animated ASCII double helix background */}
      <div
        className="absolute inset-0 flex items-center justify-end pointer-events-none opacity-70"
        aria-hidden="true"
      >
        <AsciiDoubleHelix />
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Tai Wong
        </h1>
        <h2 className="mt-3 text-lg font-medium text-ink/80">
          CS + BioE @ UIUC
        </h2>
        <p className="mt-4 max-w-xs text-graphite leading-relaxed">
          Building at the intersection of AI and biology.
        </p>
        <div className="mt-16 hidden lg:block">
          <SectionNav activeSection={activeSection} onNavClick={onNavClick} />
        </div>
      </div>
      <div className="relative z-10 mt-8 flex flex-col gap-4">
        <SocialIcons />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-violet transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
          Resume
        </a>
      </div>
    </header>
  );
}
