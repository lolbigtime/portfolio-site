import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./Footer";

export default function RightColumn() {
  return (
    <main id="content" className="flex-1 min-w-0 lg:py-24">
      <div className="flex flex-col gap-24">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
