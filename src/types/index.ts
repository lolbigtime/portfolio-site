export interface Experience {
  title: string;
  company: string;
  url: string;
  range: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  url: string;
  image?: string;
  technologies: string[];
  featured?: boolean;
}
