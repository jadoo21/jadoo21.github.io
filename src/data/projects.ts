import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "tally-cis",
    title: "TALLY CIS",
    shortTitle: "TALLY CIS",
    tagline: "Enterprise SaaS Platform",
    category: "Professional",
    timeframe: "Nov 2023 – Present",
    cardDescription:
      "Enterprise SaaS platform for energy retailers, where I worked across frontend and backend development, REST API integration, cloud services and microservice-based architecture.",
    technologies: [
      "React",
      "TypeScript",
      ".NET",
      "Azure",
      "Docker",
      "Microservices",
      "SQL Server",
    ],
    featured: true,
  },
  {
    slug: "fastype",
    title: "Fastype",
    shortTitle: "Fastype",
    tagline: "Production-Style SaaS Application",
    category: "Personal",
    timeframe: "Personal project",
    cardDescription:
      "A production-style SaaS application built with React, TypeScript and .NET — demonstrating frontend architecture, reusable components, authentication, REST API design and database modeling.",
    technologies: [
      "React",
      "TypeScript",
      ".NET",
      "REST APIs",
      "Entity Framework",
      "SQL Server",
    ],
    featured: false,
  },
  {
    slug: "event-driven-platform",
    title: "Event-Driven Platform",
    shortTitle: "Event-Driven Platform",
    tagline: "Distributed Systems Architecture Lab",
    category: "Personal",
    timeframe: "Personal project",
    cardDescription:
      "An order-processing platform built around microservices, RabbitMQ message brokers, Docker and SQL Server — exploring service boundaries, idempotency, retries and event-driven architecture.",
    technologies: ["React", "TypeScript", ".NET", "RabbitMQ", "Docker", "SQL Server"],
    featured: false,
  },
  {
    slug: "enterprise-retail",
    title: "Enterprise Retail Platform",
    shortTitle: "Enterprise Retail",
    tagline: "Professional Experience — Anonymized",
    category: "Professional",
    timeframe: "Mar 2021 – Nov 2023",
    cardDescription:
      "Enterprise retail software at NCR Corporation, where I contributed to APIs, UI development, reliability, automated tests and feature delivery across a C#/.NET, React and WPF stack.",
    technologies: ["C#", ".NET", "React", "WPF", "SQL Server", "Testing"],
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
