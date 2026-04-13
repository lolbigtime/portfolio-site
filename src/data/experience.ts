import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Research Assistant",
    company: "Dream Lab, UIUC",
    url: "https://dreamlab.illinois.edu",
    range: "2025 — Present",
    description:
      "Building a multi-agent AI system using LangGraph to identify biomedical research opportunities by analyzing data from PubMed, NIH Reporter, and ClinicalTrials.gov. Architecting a Neo4j knowledge graph with MeSH-based semantic structure for research trend analysis and gap detection. Also researching code-first approaches to improve LLM trustworthiness, where agents design statistical analyses in sandboxed environments to ground claims in verifiable outputs.",
    technologies: ["Python", "LangGraph", "Neo4j", "LLMs", "Multi-Agent Systems"],
  },
  {
    title: "Deep Learning Research Intern",
    company: "COOL Lab, OHSU",
    url: "https://www.ohsu.edu",
    range: "2023 — 2025",
    description:
      "Developed CNN and U-Net models to analyze OCTA scans for dilated vessel detection as a biomarker of diabetic retinopathy. Improved segmentation through hyperparameter tuning and data augmentation, evaluating with AUC, IoU, and sensitivity metrics. Presented findings at the OHSU Research Symposium.",
    technologies: ["Python", "PyTorch", "CNN", "U-Net", "Computer Vision", "MATLAB"],
  },
  {
    title: "Research Assistant",
    company: "Mattis Lab, UCSF",
    url: "https://www.ucsf.edu",
    range: "2022 — Present",
    description:
      "Developing an NLP pipeline using PubMedBERT and local LLMs to extract structured cell differentiation protocols from ~300,000 PubMed papers, building a unified database linking source cells, growth factors, and experimental conditions for stem cell research. Also designed bioinformatics pipelines predicting miRNA-mRNA interactions related to NAFLD, contributing to a published paper on regulatory networks in metabolic disease.",
    technologies: ["Python", "PubMedBERT", "NLP", "Bioinformatics", "PostgreSQL"],
  },
];
