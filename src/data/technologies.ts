import type { SnapshotItem, Specialization, StackGroup } from "../types";

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
  rest: { slug: "rest", name: "REST APIs", category: "Backend Engineering", logo: false },
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
  sns: { slug: "sns", name: "SNS", category: "Messaging & Distributed Systems", logo: true },
  sqs: { slug: "sqs", name: "SQS", category: "Messaging & Distributed Systems", logo: true },
  adc: { slug: "adc", name: "ADC", category: "Messaging & Distributed Systems", logo: false },
  cloudevents: {
    slug: "cloudevents",
    name: "CloudEvents",
    category: "Messaging & Distributed Systems",
    logo: false,
  },
  dynamodb: { slug: "dynamodb", name: "DynamoDB", category: "Data", logo: true },
  sqlserver: {
    slug: "sqlserver",
    name: "SQL Server",
    category: "Data",
    logo: false,
  },
  jest: { slug: "jest", name: "Jest", category: "Testing & Quality", logo: true },
  cypress: { slug: "cypress", name: "Cypress", category: "Testing & Quality", logo: true },
  xunit: { slug: "xunit", name: "xUnit / NUnit", category: "Testing & Quality", logo: false },
  postman: { slug: "postman", name: "Postman", category: "Testing & Quality", logo: true },
  sonarqube: { slug: "sonarqube", name: "SonarQube", category: "Testing & Quality", logo: true },
  newrelic: { slug: "newrelic", name: "New Relic", category: "Observability", logo: true },
  wiz: { slug: "wiz", name: "Wiz", category: "Observability", logo: false },
};

/** Compact logo row used in the hero. */
export const heroTechnologies = [
  "react",
  "typescript",
  "dotnet",
  "csharp",
  "aws",
  "azure",
  "docker",
  "kubernetes",
  "rabbitmq",
] as const;

export const stackGroups: StackGroup[] = [
  { id: "frontend", title: "Frontend", items: ["react", "typescript", "javascript"] },
  { id: "backend", title: "Backend", items: ["csharp", "dotnet", "rest"] },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    items: ["aws", "azure", "docker", "kubernetes"],
  },
  {
    id: "messaging",
    title: "Messaging & Distributed Systems",
    items: ["rabbitmq", "sns", "sqs", "adc", "cloudevents"],
  },
  { id: "data", title: "Data", items: ["dynamodb", "sqlserver"] },
  {
    id: "testing",
    title: "Testing & Quality",
    items: ["jest", "cypress", "xunit", "postman", "sonarqube"],
  },
  { id: "observability", title: "Observability", items: ["newrelic", "wiz"] },
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

export const careerSnapshot: SnapshotItem[] = [
  {
    value: "5+",
    label: "Years",
    sublabel: "Software engineering",
  },
  {
    value: "3",
    label: "Enterprise products",
    sublabel: "Retail · SaaS · Payments",
  },
  {
    value: "Full Stack",
    label: "Delivery",
    sublabel: "Frontend → Backend → Cloud",
  },
  {
    value: "Production",
    label: "Systems",
    sublabel: "Distributed & event-driven",
  },
];

export const specializations: Specialization[] = [
  {
    title: "Full-Stack Development",
    description:
      "React, TypeScript, .NET and API-driven applications built end to end — from the interface to the services behind it.",
    technologies: ["react", "typescript", "dotnet", "csharp", "rest"],
  },
  {
    title: "Distributed Systems",
    description:
      "Microservices, events, messaging, webhooks and consistent state across independently deployed services.",
    technologies: ["rabbitmq", "sns", "sqs", "adc", "cloudevents"],
  },
  {
    title: "Payment Platforms",
    description:
      "Payment processing, settlement, payment-provider integrations and PayByLink communication.",
    technologies: ["dotnet", "csharp", "aws", "dynamodb"],
  },
  {
    title: "Production Engineering",
    description:
      "Cloud infrastructure, testing, security, observability and safe deployment of production systems.",
    technologies: ["aws", "azure", "docker", "kubernetes", "newrelic"],
  },
];