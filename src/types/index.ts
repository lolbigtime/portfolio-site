export interface Experience {
  title: string;
  company: string;
  url: string;
  range: string;
  description: string;
  technologies: string[];
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface Blog {
  subtitle?: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
}

export interface Project {
  title: string;
  description: string;
  url: string;
  image?: string;
  technologies: string[];
  featured?: boolean;
  blog?: Blog;
}
