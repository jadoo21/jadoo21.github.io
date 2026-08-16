export type ProjectCategory = "Professional" | "Personal";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: ProjectCategory;
  timeframe: string;
  cardDescription: string;
  technologies: string[];
  featured: boolean;
}

export interface ArchitectureNode {
  /** Stable id used to look up detail content. */
  id: string;
  title: string;
  subtitle?: string;
}

export interface ArchitectureDetail {
  title: string;
  body: string;
}

export type CaseStudyBlock =
  | {
      kind: "text";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
    }
  | {
      kind: "list";
      eyebrow?: string;
      title: string;
      description: string;
      items: string[];
    }
  | {
      kind: "two-column";
      eyebrow?: string;
      title: string;
      description?: string;
      columns: {
        heading: string;
        description: string;
        items: string[];
      }[];
    }
  | {
      kind: "architecture";
      eyebrow?: string;
      title: string;
      note: string;
      nodes: ArchitectureNode[];
      rows: string[][];
      details: Record<string, ArchitectureDetail>;
    }
  | {
      kind: "callout";
      tone: "info" | "warning";
      title: string;
      body: string;
    };

export interface CaseStudy {
  projectSlug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  disclaimer?: string;
  blocks: CaseStudyBlock[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  project: string;
  projectSlug: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  evidence: string;
}

export interface EngineeringStep {
  number: string;
  title: string;
  description: string;
}

export interface EngineeringDecision {
  slug: string;
  title: string;
  question: string;
  principle: string;
  approach: string;
  tags: string[];
}
