import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "MeshNL",
    description:
      "Multi-stage hierarchical MeSH classification trained on the full PubMed baseline. Stage 1 fine-tunes BiomedBERT for 15-branch prediction (macro recall >0.95); Stage 2 fine-tunes a BioLORD dual encoder on 3M paper-term pairs with hard negative mining for fine-grained term retrieval. Engineered a streaming MeSH XML parser and Colab training infrastructure with mid-epoch checkpointing.",
    url: "https://github.com/lolbigtime",
    technologies: ["Python", "PyTorch", "BiomedBERT", "BioLORD", "HuggingFace Transformers"],
  },
  {
    title: "SkyHub",
    description:
      "Full-stack Hypixel SkyBlock stats platform and successor to SkyStats, with 15,000+ MAU. Features a 42-endpoint FastAPI backend with PostgreSQL and background workers for live auction indexing, bazaar polling, leaderboard ranking, and networth calculation across 40+ item upgrade types. Self-hosted on a Mac Mini via Docker Compose with a Cloudflare Zero Trust tunnel, with a companion SwiftUI app featuring decoded NBT inventory, wardrobe pagination, pet collection, and dungeon stats.",
    url: "https://github.com/lolbigtime",
    technologies: ["FastAPI", "PostgreSQL", "Docker", "Cloudflare Tunnel", "SwiftUI"],
  },
  {
    title: "IllinoisBuddy",
    description:
      "UIUC course planning web app aggregating Rate My Professor ratings, GPA distributions from the Wade Fagen dataset, and Course Explorer API data. Flask + Google OAuth backend with a React/TypeScript drag-and-drop multi-semester planner, GPA visualization, and schedule conflict detection. Migrating to PostgreSQL + FastAPI for production.",
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
