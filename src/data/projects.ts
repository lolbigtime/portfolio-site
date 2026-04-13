import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "MeshNL",
    featured: true,
    description:
      "Multi-stage hierarchical MeSH classification trained on the full PubMed baseline. Stage 1 fine-tunes BiomedBERT for 15-branch prediction (macro recall >0.95); Stage 2 fine-tunes a BioLORD dual encoder on 3M paper-term pairs with hard negative mining for fine-grained term retrieval (Recall@50). Engineered a streaming MeSH XML parser and Colab training infrastructure with mid-epoch checkpointing.",
    url: "https://github.com/lolbigtime/MeshNL",
    technologies: ["Python", "PyTorch", "BiomedBERT", "BioLORD", "HuggingFace Transformers"],
  },
  {
    title: "PyEntrez",
    featured: true,
    description:
      "Python wrapper for NCBI's EDirect command-line tools. Provides a programmatic API for searching PubMed and other NCBI databases, fetching records, discovering cross-database links, pulling citation counts, and querying by MeSH terms. Includes batch processing with parallel workers for bulk operations.",
    url: "https://github.com/lolbigtime/PyEntrez",
    technologies: ["Python", "NCBI EDirect", "PubMed", "MeSH"],
  },
  {
    title: "SkyHub",
    description:
      "Full-stack Hypixel SkyBlock stats platform (successor to SkyStats, 15,000+ MAU): 42-endpoint FastAPI backend with PostgreSQL and background workers for leaderboard ranking and networth calculation across 40+ item upgrade types. Self-hosted on a Mac Mini via Docker Compose with Cloudflare Zero Trust tunnel, launchd auto-start, and automated 6-hour PostgreSQL backups.",
    url: "https://github.com/lolbigtime",
    technologies: ["FastAPI", "PostgreSQL", "Docker", "Cloudflare Tunnel", "SwiftUI"],
  },
  {
    title: "IllinoisBuddy",
    description:
      "UIUC course planning web app aggregating Rate My Professor ratings, GPA distributions (Wade Fagen dataset), and Course Explorer API data. Flask + Google OAuth backend with React/TypeScript drag-and-drop multi-semester planner, GPA visualization, and schedule conflict detection. Migrating to PostgreSQL + FastAPI for production.",
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
