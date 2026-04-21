"use client";

import PrismaticBackground from "@/components/PrismaticBackground";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";
import AsciiDoubleHelix from "@/components/AsciiDoubleHelix";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Home() {
  const [activeSection, setActiveSection] = useActiveSection();

  return (
    <>
      <PrismaticBackground />
      <div className="mx-auto min-h-screen max-w-[1380px] px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:gap-10">
          <LeftColumn activeSection={activeSection} onNavClick={setActiveSection} />
          <div
            className="hidden lg:flex items-center justify-center pointer-events-none opacity-70 w-[120px] shrink-0 sticky top-0 h-screen"
            aria-hidden="true"
          >
            <AsciiDoubleHelix />
          </div>
          <RightColumn />
        </div>
      </div>
    </>
  );
}
