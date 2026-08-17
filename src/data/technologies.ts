import type { Specialization, StackGroup } from "../types";

export interface TechEntry {
  slug: string;
  name: string;
  category: string;
  /** When true, rendered with the vendored brand SVG logo. */
  logo: boolean;
}

export const techCatalog: Record<string, TechEntry> = {
  react: { slug: "react", name: "React", category: "Frontend Engineering", logo: true },
  typescript: {
    slug: "typescript",
    name: "TypeScript",
    category: "Frontend Engineering",
    logo: true,
  },
  javascript: {
    slug: "javascript",
    name: "JavaScript",
    category: "Frontend Engineering",
    logo: true,
  },
  dotnet: { slug: "dotnet", name: ".NET", category: "Backend Engineering", logo: true },
  csharp: { slug: "csharp", name: "C#", category: "Backend Engineering", logo: true },
  aws: { slug: "aws", name: "AWS", category: "Cloud & Infrastructure", logo: true },
  azure: { slug: "azure", name: "Azure", category: "Cloud & Infrastructure", logo: true },
  docker: { slug: "docker", name: "Docker", category: "Cloud & Infrastructure", logo: true },
  kubernetes: {
    slug: "kubernetes",
    name: "Kubernetes",
    category: "Cloud & Infrastructure",
    logo: true,
  },
  rabbitmq: {
    slug: "rabbitmq",
    name: "RabbitMQ",
    category: "Messaging & Distributed Systems",
    logo: true,
  },
  dynamodb: { slug: "dynamodb", name: "DynamoDB", category: "Data", logo: true },
  sqlserver: { slug: "sqlserver", name: "SQL Server", category: "Data", logo: false },
  jest: { slug: "jest", name: "Jest", category: "Testing & Quality", logo: true },
  cypress: { slug: "cypress", name: "Cypress", category: "Testing & Quality", logo: true },
  sonarqube: { slug: "sonarqube", name: "SonarQube", category: "Testing & Quality", logo: true },
  github: { slug: "github", name: "GitHub", category: "Developer Tooling", logo: true },
  newrelic: { slug: "newrelic", name: "New Relic", category: "Production Engineering", logo: true },
};

/** Compact logo row used in the hero. No Azure — that belongs to Tally Group's experience. */
export const heroTechnologies = [
  "react",
  "typescript",
  "dotnet",
  "csharp",
  "aws",
  "docker",
  "kubernetes",
] as const;

export const stackGroups: StackGroup[] = [
  { id: "frontend", title: "Frontend", items: ["react", "typescript", "javascript"] },
  { id: "backend", title: "Backend", items: ["csharp", "dotnet"] },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    items: ["aws", "docker", "kubernetes"],
  },
  {
    id: "messaging",
    title: "Messaging",
    items: ["rabbitmq"],
  },
  { id: "data", title: "Data", items: ["dynamodb"] },
  {
    id: "testing",
    title: "Testing & Quality",
    items: ["jest", "cypress", "sonarqube"],
  },
  {
    id: "tooling",
    title: "Developer Tooling",
    items: ["github"],
  },
];

export function slugForName(name: string): string | undefined {
  const direct = techCatalog[name]?.slug;
  if (direct) return direct;
  const aliases: Record<string, string> = {
    ".NET": "dotnet",
    "C#": "csharp",
    "SQL Server": "sqlserver",
    "New Relic": "newrelic",
  };
  return aliases[name] || undefined;
}

export const specializations: Specialization[] = [
  {
    title: "Distributed Systems",
    lines: [
      "Microservices",
      "Event-driven architecture",
      "Messaging and webhooks",
      "Service integration",
    ],
    technologies: [],
  },
  {
    title: "Full-Stack Development",
    lines: ["React · TypeScript", ".NET · C#"],
    technologies: ["react", "typescript", "dotnet", "csharp"],
  },
  {
    title: "Software Architecture",
    lines: [
      "Service design",
      "API design",
      "Microservices and integration patterns",
      "Event-driven systems",
    ],
    technologies: [],
  },
  {
    title: "Production Engineering",
    lines: [
      "AWS · Docker · Kubernetes",
      "SonarQube and automated testing",
      "Observability · New Relic",
      "80%+ test coverage",
    ],
    technologies: ["aws", "docker", "kubernetes", "sonarqube", "newrelic"],
  },
];