import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "MeshNL",
    featured: true,
    description:
      "Biomedical research is bottlenecked by how hard it is to find and connect relevant literature at scale. MeshNL is a general-purpose biomedical data extraction pipeline aimed at making research more equitable by improving data availability. It maps natural language queries to MeSH — the controlled vocabulary used to index all of PubMed — through a two-stage approach: Stage 1 fine-tunes BiomedBERT across 15 top-level branches (macro recall >0.95); Stage 2 fine-tunes a BioLORD dual encoder on 3M paper-term pairs with hard negative mining for fine-grained retrieval. Trained on the full PubMed baseline with a custom streaming MeSH XML parser and mid-epoch checkpointing.",
    url: "https://github.com/lolbigtime/MeshNL",
    technologies: ["Python", "PyTorch", "BiomedBERT", "BioLORD", "HuggingFace Transformers"],
  },
  {
    title: "PyEntrez",
    featured: true,
    description:
      "NCBI's EDirect tools are powerful but painful to use programmatically — they're command-line utilities that weren't designed for scripting at scale. PyEntrez wraps them into a clean Python API, making it straightforward to search PubMed, fetch records, discover cross-database links, pull citation counts, and query by MeSH terms. Includes batch processing with parallel workers for bulk operations, so large-scale literature mining doesn't require reinventing the plumbing every time.",
    url: "https://github.com/lolbigtime/PyEntrez",
    technologies: ["Python", "NCBI EDirect", "PubMed", "MeSH"],
  },
  {
    title: "SkyHub",
    description:
      "The Hypixel API exposes raw player data but doesn't give you anything useful out of the box — no auction history, no bazaar trends, no networth across 40+ item upgrade types. SkyHub is a unified API that combines those data streams into something actually queryable. 42 endpoints backed by PostgreSQL, with background workers continuously indexing live auctions, polling bazaar prices, and recomputing leaderboard rankings. Self-hosted on a Mac Mini via Docker Compose with a Cloudflare Zero Trust tunnel. Successor to SkyStats with 15,000+ MAU.",
    url: "https://github.com/lolbigtime",
    technologies: ["FastAPI", "PostgreSQL", "Docker", "Cloudflare Tunnel", "SwiftUI"],
  },
  {
    title: "IllinoisBuddy",
    description:
      "UIUC's official course planning tools don't tell you what actually matters when picking classes — how hard the professor grades, what the GPA distribution looks like, or whether your schedule conflicts. IllinoisBuddy pulls together Rate My Professor ratings, Wade Fagen's GPA dataset, and the Course Explorer API into one place. The planner is a drag-and-drop multi-semester board built in React with conflict detection and GPA projections baked in.",
    url: "https://github.com/lolbigtime",
    technologies: ["Flask", "React", "TypeScript", "Tailwind", "SQLite", "PostgreSQL"],
  },
  {
    title: "SkyStats",
    description:
      "Hypixel SkyBlock stats tracker with 15,000+ MAU, built and maintained over three years. Rewrote the iOS client to SwiftUI and migrated the backend to MongoDB, reducing latency by 20%.",
    url: "https://github.com/lolbigtime",
    technologies: ["SwiftUI", "MongoDB", "Python"],
  },
];
