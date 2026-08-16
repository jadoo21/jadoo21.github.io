import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Building business-facing React applications and integrating them with REST-based backend services.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Component Architecture",
      "REST API Integration",
      "Responsive UI",
      "Forms",
      "State Management",
      "Testing",
    ],
    evidence:
      "Built and maintained the TALLY CIS customer interface with React and TypeScript — reusable components, API integration and responsive business workflows. This portfolio's React Engineering Lab is a working demonstration of that practice.",
  },
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Designing and building REST APIs and services with .NET and C#.",
    technologies: [
      "C#",
      ".NET",
      ".NET Core",
      "REST APIs",
      "Entity Framework",
      "LINQ",
      "SQL Server",
      "API Design",
      "Authorization",
    ],
    evidence:
      "Designed and implemented APIs on .NET, modeled data with Entity Framework and LINQ, and handled API authorization for consumer-facing systems.",
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    description:
      "Designing services that communicate asynchronously and stay decoupled.",
    technologies: [
      "Microservices",
      "RabbitMQ",
      "MassTransit",
      "Azure Service Bus",
      "Event-Driven Architecture",
      "API Contracts",
      "Messaging",
    ],
    evidence:
      "Worked on microservice-based features using MassTransit and RabbitMQ, and integrated systems through Azure Service Bus. Explored event-driven design further in the Event-Driven Platform lab.",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Deploying and operating services on Azure with containerized, automated workflows.",
    technologies: [
      "Azure Functions",
      "Azure Web Apps",
      "Azure Key Vault",
      "Azure DevOps",
      "Docker",
      "CI/CD",
      "Git",
    ],
    evidence:
      "Shipped services to Azure Web Apps, automated processes with Azure Functions, stored configuration and secrets in Key Vault, and managed delivery through Azure DevOps pipelines.",
  },
  {
    id: "practices",
    title: "Engineering Practices",
    description: "The habits that keep enterprise software maintainable and reliable.",
    technologies: [
      "SOLID",
      "OOP",
      "Design Patterns",
      "System Design",
      "Testing",
      "Code Reviews",
      "Technical Documentation",
      "Agile",
    ],
    evidence:
      "Applied SOLID principles and design patterns, wrote unit tests, participated in code reviews and pull requests, documented designs on Confluence, and delivered iteratively in Agile teams.",
  },
];
