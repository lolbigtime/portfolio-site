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
      <div className="relative z-10 mt-8">
        <SocialIcons />
      </div>
    </header>
  );
}
