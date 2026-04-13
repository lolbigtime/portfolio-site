import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Deep Learning Research Intern",
    company: "COOL Lab, OHSU",
    url: "https://www.ohsu.edu",
    range: "2023 — 2025",
    description:
      "Developed CNN and U-Net models for automated OCTA scan analysis to detect diabetic retinopathy biomarkers. Conducted hyperparameter tuning and dataset augmentation to improve model accuracy. First-authored a manuscript on the findings.",
    technologies: ["Python", "TensorFlow", "CNN", "U-Net", "OpenCV", "MATLAB"],
  },
  {
    title: "Bioinformatics Research Intern",
    company: "Mattis Lab, UCSF",
    url: "https://www.ucsf.edu",
    range: "2022 — 2025",
    description:
      "Built miRNA-mRNA interaction prediction pipelines for NAFLD research. Automated SNP and sequence analyses using Entrez e-Utils and custom Python scripts. Contributed to a publication on computational genomics approaches.",
    technologies: ["Python", "Bioinformatics", "Entrez e-Utils", "PostgreSQL"],
  },
];
