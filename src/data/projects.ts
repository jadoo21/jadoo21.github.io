import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "keyloop-epayments-platform",
    order: "01",
    title: "Keyloop ePayments Platform",
    company: "Keyloop",
    tagline: "Distributed payment platform for automotive retail",
    timeframe: "Current",
    summary:
      "A distributed system of 6+ payment-processing microservices covering transaction orchestration, settlement processing, customer communication and payment-provider integrations.",
    technologies: ["React", "TypeScript", ".NET", "AWS", "Event-Driven", "Kubernetes"],
  },
  {
    slug: "ucp-sms-paybylink",
    order: "02",
    title: "UCP SMS PayByLink",
    company: "Keyloop",
    tagline: "New payment-link delivery channel",
    timeframe: "Keyloop",
    summary:
      "End-to-end SMS integration — phone number capture, event publishing, URL shortening, delivery webhooks and payment status synchronization — spanning 12+ stories across 5 services.",
    technologies: ["C#", ".NET", "AWS", "SNS/SQS", "Webhooks"],
  },
  {
    slug: "adapter-agnostic-settlement",
    order: "03",
    title: "Adapter-Agnostic Settlement Processing",
    company: "Keyloop",
    tagline: "Settlement decoupled from a single provider",
    timeframe: "Keyloop",
    summary:
      "Designed an adapter-agnostic settlement architecture with standardized webhook ingestion and event publishing, creating a reusable pattern for future payment providers.",
    technologies: ["C#", ".NET", "Event-Driven", "AWS"],
  },
  {
    slug: "paymentsintegrationhub-modernization",
    order: "04",
    title: "PaymentsIntegrationHub Modernization",
    company: "Keyloop",
    tagline: "From background dispatch to controller-based processing",
    timeframe: "Keyloop",
    summary:
      "Reworked event processing toward controller-based handling with centralized handler registration and runtime validation — earlier validation, more reliable processing, better testability.",
    technologies: ["C#", ".NET", "SNS/SQS", "AWS"],
  },
  {
    slug: "tally-cis",
    order: "05",
    title: "TALLY CIS",
    company: "Tally Group",
    tagline: "Enterprise SaaS for energy retailers",
    timeframe: "Nov 2023 – Jul 2025",
    summary:
      "A SaaS platform for energy retailers where I worked across frontend (React, TypeScript), backend (.NET, REST APIs), microservices, messaging and Azure cloud services.",
    technologies: ["React", "TypeScript", ".NET", "Azure", "RabbitMQ", "Docker"],
  },
  {
    slug: "enterprise-retail",
    order: "06",
    title: "Enterprise Retail Platform — NCR",
    company: "NCR Corporation",
    tagline: "Enterprise retail software",
    timeframe: "Mar 2021 – Nov 2023",
    summary:
      "API development, React UI, reliability engineering and automated testing inside a mature enterprise retail codebase on C#/.NET, React and WPF.",
    technologies: ["C#", ".NET", "React", "WPF", "SQL Server"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}