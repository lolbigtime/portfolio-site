import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Timmy's Guide to Tarkov",
    description:
      "Companion app for Escape from Tarkov featuring interactive maps, a loot database, a custom CoreML computer vision model, OCR item recognition, and an automated YouTube data pipeline. Available on iOS.",
    url: "https://github.com/lolbigtime",
    technologies: ["Swift", "SwiftUI", "CoreML", "Computer Vision", "OCR"],
  },
  {
    title: "SkyStats",
    description:
      "Hypixel Skyblock statistics tracker with 15,000+ active users. Built backend APIs for real-time player data retrieval and leaderboard tracking.",
    url: "https://github.com/lolbigtime",
    technologies: ["Java", "RESTful APIs", "Backend Development"],
  },
  {
    title: "AniCat",
    description:
      "Anime discovery app powered by GraphQL and AI-driven recommendations. Reached 1,000+ users with personalized content suggestions and a clean browsing experience.",
    url: "https://github.com/lolbigtime",
    technologies: ["Swift", "GraphQL", "AI/ML"],
  },
  {
    title: "MTG Organizer",
    description:
      "OCR-powered Magic: The Gathering card cataloging app. Uses CoreML for real-time card recognition and automatic collection management. 1,000+ downloads.",
    url: "https://github.com/lolbigtime",
    technologies: ["Swift", "OCR", "CoreML", "Computer Vision"],
  },
  {
    title: "Zen Zone",
    description:
      "Mental health and wellness app that uses LLMs to deliver personalized mindfulness exercises, journaling prompts, and wellness recommendations.",
    url: "https://github.com/lolbigtime",
    technologies: ["Swift", "LLM Integration", "AWS", "PostgreSQL"],
  },
];
