"use client";

interface SectionNavProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
];

export default function SectionNav({ activeSection, onNavClick }: SectionNavProps) {
  return (
    <nav aria-label="Section navigation">
      <ul className="flex flex-col gap-4">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-center gap-4"
                onClick={() => onNavClick(item.id)}
              >
                <span
                  className={`nav-line ${isActive ? "nav-line-active" : "nav-line-inactive"}`}
                />
                <span
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-ink" : "text-graphite"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
