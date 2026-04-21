import HomeView from "@/components/HomeView";
import { projects } from "@/data/projects";
import { slugify } from "@/lib/slug";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: slugify(p.title) }));
}

export default function ProjectRoute() {
  return <HomeView />;
}
