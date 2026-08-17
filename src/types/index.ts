export interface Project {
  slug: string;
  order: string;
  title: string;
  company: string;
  tagline: string;
  timeframe: string;
  summary: string;
  technologies: string[];
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

export interface PaymentLifecycleBlock {
  title: string;
  detail: string;
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
      description?: string;
      items: string[];
    }
  | {
      kind: "two-column";
      eyebrow?: string;
      title: string;
      description?: string;
      columns: {
        heading: string;
        description?: string;
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
      kind: "lifecycle";
      eyebrow?: string;
      title: string;
      note: string;
      steps: PaymentLifecycleBlock[];
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
  disclaimer?: string;
  blocks: CaseStudyBlock[];
}

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

export interface OwnershipArea {
  title: string;
  description: string;
}

export type ImpactStepLabel = "Problem" | "What I Did" | "Technical Approach" | "Impact";

export interface Contribution {
  id: string;
  title: string;
  steps: {
    label: ImpactStepLabel;
    text: string;
  }[];
  /** Optional high-level scope note, e.g. "12+ stories across 5 services." */
  scope?: string;
}

export interface SnapshotItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface Specialization {
  title: string;
  description: string;
  technologies: string[];
}

export interface StackGroup {
  id: string;
  title: string;
  items: string[];
}