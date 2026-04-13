"use client";

import PrismaticBackground from "@/components/PrismaticBackground";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Home() {
  const [activeSection, setActiveSection] = useActiveSection();

  return (
    <>
      <PrismaticBackground />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <LeftColumn activeSection={activeSection} onNavClick={setActiveSection} />
          <RightColumn />
        </div>
      </div>
    </>
  );
}
