import { notFound } from "next/navigation";
import BlogPage from "@/components/BlogPage";
import { projects } from "@/data/projects";
import { slugify } from "@/lib/slug";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: slugify(p.title) }));
}

export default async function ProjectRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => slugify(p.title) === slug);
  if (!project) notFound();
  return <BlogPage project={project} />;
}
