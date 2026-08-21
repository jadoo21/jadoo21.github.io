export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  project: string;
  projectSlug: string;
  whatIWorkOn?: string[];
  responsibilities: string[];
  technologies: string[];
}

export interface TimelineEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
}

export interface Specialization {
  title: string;
  lines: string[];
  technologies: string[];
}

export interface StackGroup {
  id: string;
  title: string;
  items: string[];
}