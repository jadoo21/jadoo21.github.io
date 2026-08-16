import type { CaseStudy } from "../types";

export const caseStudies: Record<string, CaseStudy> = {
  "tally-cis": {
    projectSlug: "tally-cis",
    title: "TALLY CIS",
    subtitle: "Enterprise SaaS Platform",
    category: "Professional",
    disclaimer:
      "Anonymized architecture representation. This diagram describes the general shape of the system and is not an exact representation of proprietary company infrastructure.",
    blocks: [
      {
        kind: "text",
        eyebrow: "Overview",
        title: "A SaaS platform for energy retailers",
        paragraphs: [
          "TALLY CIS is a SaaS product — a web application that energy retailers use to run customer-facing operations. Customers interact with it as a modern web application while the platform handles data, business logic and integrations in cloud-hosted backend services.",
          "I work across the full stack: building the React and TypeScript customer interface, developing .NET services, integrating systems through REST APIs, and working with Azure cloud services and microservice-based architecture.",
        ],
      },
      {
        kind: "list",
        eyebrow: "My Role",
        title: "Frontend and backend, integrated end to end",
        description:
          "My work spans the whole surface of the product — from the screen the user sees to the services and cloud platform behind it.",
        items: [
          "Maintained and extended the frontend application in React and TypeScript",
          "Developed and maintained backend services in C# / .NET",
          "Integrated internal systems and services through REST APIs",
          "Worked on microservice-based features with messaging",
          "Used Azure services including Functions, Service Bus, Web Apps and Key Vault",
          "Participated in pull requests, code reviews and technical discussions",
        ],
      },
      {
        kind: "two-column",
        eyebrow: "The Stack",
        title: "Frontend and backend worked together",
        description:
          "A single feature often touched the UI, the API and the service layer — so a working mental model of the whole stack was part of the job.",
        columns: [
          {
            heading: "Frontend",
            description:
              "The customer-facing React application, built with TypeScript.",
            items: [
              "React + TypeScript application development",
              "Reusable component architecture",
              "Integration with REST-based backend APIs",
              "Business workflows and forms",
              "Responsive, accessible UI",
            ],
          },
          {
            heading: "Backend",
            description: "The .NET services behind the API.",
            items: [
              "C# and .NET / .NET Core services",
              "REST API design and development",
              "Entity Framework and LINQ for data access",
              "SQL Server databases",
              "Object-oriented design with SOLID principles",
            ],
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Cloud Platform",
        title: "Azure services in daily use",
        description:
          "Services, integration and delivery are all built around the Azure platform.",
        items: [
          "Azure Functions for serverless workloads",
          "Azure Service Bus for messaging between services",
          "Azure Web Apps for hosted services",
          "Azure Key Vault for secrets and configuration",
          "Azure DevOps for CI/CD and delivery",
          "Docker for containerized workloads",
          "Azure API Management for API exposure",
        ],
      },
      {
        kind: "architecture",
        eyebrow: "Architecture",
        title: "How the pieces fit together",
        note: "Simplified, anonymized representation — not an exact diagram of proprietary infrastructure.",
        nodes: [
          {
            id: "client",
            title: "React / TypeScript",
            subtitle: "Customer-facing web UI",
          },
          {
            id: "api",
            title: "REST APIs",
            subtitle: "API layer with authorization",
          },
          {
            id: "net",
            title: ".NET Services",
            subtitle: "C# business logic",
          },
          {
            id: "azure",
            title: "Azure Services",
            subtitle: "Functions · Service Bus · Web Apps · Key Vault",
          },
          {
            id: "ms",
            title: "Microservices",
            subtitle: "MassTransit · RabbitMQ",
          },
          {
            id: "db",
            title: "SQL Server",
            subtitle: "Persistent storage",
          },
        ],
        rows: [["client"], ["api"], ["net"], ["azure", "ms"], ["db"]],
        details: {
          client: {
            title: "React / TypeScript",
            body: "The customer-facing application built with React and TypeScript. Reusable components, API integration and responsive business workflows.",
          },
          api: {
            title: "REST APIs",
            body: "The integration boundary. The frontend and external systems talk to backends over REST, with authorization enforced at the API layer.",
          },
          net: {
            title: ".NET Services",
            body: "C# services implement core business logic, using Entity Framework and LINQ for data access.",
          },
          azure: {
            title: "Azure Services",
            body: "Cloud services around the core — Azure Functions for serverless workloads, Service Bus for messaging, Web Apps for hosting and Key Vault for secrets.",
          },
          ms: {
            title: "Microservices",
            body: "Features are implemented as microservices that communicate over messaging with MassTransit and RabbitMQ.",
          },
          db: {
            title: "SQL Server",
            body: "Relational storage accessed through Entity Framework.",
          },
        },
      },
      {
        kind: "list",
        eyebrow: "Engineering Practices",
        title: "How the work gets done",
        description:
          "The practices that keep a large enterprise codebase moving safely.",
        items: [
          "SOLID principles and design patterns in day-to-day code",
          "API contracts agreed between producers and consumers",
          "API authorization enforced across systems",
          "Code reviews and pull requests for every change",
          "Technical documentation on Confluence",
          "Unit and automated testing of critical paths",
          "Agile delivery with kickoffs and technical discussions",
        ],
      },
    ],
  },
  fastype: {
    projectSlug: "fastype",
    title: "Fastype",
    subtitle: "Production-Style SaaS Application",
    category: "Personal",
    disclaimer:
      "Personal project. Described at a design level — the engineering decisions and architecture, not a claim about features running in production.",
    blocks: [
      {
        kind: "text",
        eyebrow: "Overview",
        title: "A SaaS application designed like a production system",
        paragraphs: [
          "Fastype is a personal project where I applied the same engineering discipline as production work: a React and TypeScript frontend, a .NET REST API, and a SQL Server database modeled with Entity Framework.",
          "The point of the project is to demonstrate how a full-stack application is structured when you care about architecture — reusable components, clean API boundaries, validation, error handling and a considered data model — the way I would build software at work.",
        ],
      },
      {
        kind: "two-column",
        eyebrow: "Architecture",
        title: "A clean three-tier structure",
        description:
          "The system is split along the same lines I use in professional systems: presentation, API and data.",
        columns: [
          {
            heading: "Frontend",
            description: "React + TypeScript application.",
            items: [
              "Component architecture with reusable, typed components",
              "Typed API client shared with the backend contracts",
              "Form state and validation at the UI layer",
              "Explicit loading, empty and error states",
            ],
          },
          {
            heading: "Backend",
            description: ".NET REST API.",
            items: [
              "C# / .NET API with a clean separation of concerns",
              "Entity Framework for data access",
              "Input validation at the API boundary",
              "Structured error responses for the client",
            ],
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Authentication",
        title: "Auth that matches how real SaaS works",
        description:
          "Protected routes and session state wired end to end — the same pattern demonstrated live in the React Engineering Lab.",
        items: [
          "Login flow with mocked credentials",
          "Protected routes that redirect unauthenticated users",
          "Session state shared across the application",
          "Logout that clears state and returns to the login screen",
        ],
      },
      {
        kind: "list",
        eyebrow: "Data Model",
        title: "A database designed around the domain",
        description:
          "Relational modeling with Entity Framework and SQL Server, with relationships that mirror the API resources.",
        items: [
          "Entities mapped with Entity Framework",
          "Relational constraints and keys at the database level",
          "LINQ queries for data access",
          "Migrations for schema evolution",
        ],
      },
      {
        kind: "list",
        eyebrow: "Quality",
        title: "Validation, errors and deployment",
        description:
          "Production concerns handled deliberately rather than as afterthoughts.",
        items: [
          "Validation on both the UI and the API boundary",
          "Consistent error handling and user-facing messages",
          "Structured logging for debugging",
          "Deployment considerations captured in the project README",
        ],
      },
    ],
  },
  "event-driven-platform": {
    projectSlug: "event-driven-platform",
    title: "Event-Driven Platform",
    subtitle: "Distributed Systems Architecture Lab",
    category: "Personal",
    disclaimer:
      "Personal demonstration project. Built to explore distributed systems patterns — it is not connected to any company's production systems.",
    blocks: [
      {
        kind: "text",
        eyebrow: "Overview",
        title: "An order-processing platform built on events",
        paragraphs: [
          "This is my architecture lab for structured outbox over distributed systems. It's an order-processing platform: a React dashboard submits orders to a .NET API, which publishes events to RabbitMQ. Dedicated services consume those events, coordinate payment and fulfillment, and persist state to SQL Server.",
          "The system exists to explore the decisions that come up when a monolith splits into services — how messages flow, where state lives, how failures are handled, and how you keep a distributed system honest.",
        ],
      },
      {
        kind: "architecture",
        eyebrow: "Architecture",
        title: "From HTTP request to event-driven flow",
        note: "Each node is described in the diagram below. The full flow still runs as a browser-based simulation so it's demonstrable without a deployed stack.",
        nodes: [
          {
            id: "dashboard",
            title: "React Dashboard",
            subtitle: "Thin client, no business logic",
          },
          {
            id: "api",
            title: ".NET API",
            subtitle: "Validates, persists, publishes",
          },
          {
            id: "broker",
            title: "RabbitMQ",
            subtitle: "Message broker / event bus",
          },
          {
            id: "order",
            title: "Order Service",
            subtitle: "Consumes events · own data store",
          },
          {
            id: "payment",
            title: "Payment Service",
            subtitle: "Idempotent consumers",
          },
          {
            id: "notification",
            title: "Notification Service",
            subtitle: "Side-effect consumer",
          },
          {
            id: "db",
            title: "SQL Server",
            subtitle: "Per-service persistence",
          },
        ],
        rows: [
          ["dashboard"],
          ["api"],
          ["broker"],
          ["order", "payment"],
          ["notification"],
          ["db"],
        ],
        details: {
          dashboard: {
            title: "React Dashboard",
            body: "Client-side only: renders state fed by the API. In the browser simulation it acts as a thin client over the event flow.",
          },
          api: {
            title: ".NET API",
            body: "The entry point. Validates the request, persists the order, and publishes an OrderCreated event to the broker so the caller doesn't wait for downstream work.",
          },
          broker: {
            title: "RabbitMQ",
            body: "The message backbone. Producers publish and consumers subscribe, so services never call each other directly and stay decoupled.",
          },
          order: {
            title: "Order Service",
            body: "Consumes OrderCreated, applies order processing logic, owns its slice of the data and emits follow-up events.",
          },
          payment: {
            title: "Payment Service",
            body: "Processes payment events with idempotency — a redelivered event must not double-charge.",
          },
          notification: {
            title: "Notification Service",
            body: "A side-effect consumer: triggers notifications when order state changes. Interchangeable with any number of consumers.",
          },
          db: {
            title: "SQL Server",
            body: "Per-service persistence, each service owning its own tables so services remain independently evolvable.",
          },
        },
      },
      {
        kind: "two-column",
        eyebrow: "Design",
        title: "Service boundaries and messaging",
        description:
          "The interesting decisions in this system are about where services split and how they communicate.",
        columns: [
          {
            heading: "Service Boundaries",
            description: "Each service owns a capability.",
            items: [
              "Order, payment and notification services own distinct slices of the domain",
              "Each service owns its data — no shared database",
              "Public contracts published as message types",
              "Failure in one service doesn't take down the others",
            ],
          },
          {
            heading: "Messaging",
            description: "RabbitMQ as the event bus.",
            items: [
              "Producers publish, consumers subscribe — no direct calls",
              "Async processing: the API returns without waiting for downstream work",
              "Consumers retry transient failures",
              "Dead-lettering for messages that keep failing",
            ],
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Reliability",
        title: "Idempotency, retries and error handling",
        description:
          "Distributed systems fail in messy ways — the design accounts for that.",
        items: [
          "Idempotent consumers so redelivered messages are safe to process twice",
          "Retry policies for transient failures",
          "Explicit error handling and dead-letter flows",
          "Structured logging across all services",
          "Containerized with Docker Compose for a consistent local environment",
        ],
      },
      {
        kind: "callout",
        tone: "warning",
        title: "A learning project, not a company system",
        body: "This platform is deliberately small and explicitly a personal demonstration. It's a place to reason about distributed systems trade-offs — microservices, messaging, idempotency and retries — without pretending to be an industrial system.",
      },
    ],
  },
  "enterprise-retail": {
    projectSlug: "enterprise-retail",
    title: "Enterprise Retail Platform",
    subtitle: "Professional Experience — Anonymized",
    category: "Professional",
    disclaimer:
      "Professional experience described at a sanitized level. No proprietary source code, confidential internals or customer data are included.",
    blocks: [
      {
        kind: "text",
        eyebrow: "Overview",
        title: "Enterprise retail software at NCR Corporation",
        paragraphs: [
          "At NCR Corporation, I worked as Software Engineer I on Emerald, an enterprise retail product used in production retail environments. The work was a mix of API design, UI development, reliability engineering and testing inside a large, long-lived codebase.",
          "This case study is intentionally anonymized: the goal is to show the kind of engineering involved, not to expose a proprietary system's internals.",
        ],
      },
      {
        kind: "list",
        eyebrow: "My Contribution",
        title: "Feature delivery across a mature product",
        description:
          "Working inside an established enterprise product, the discipline was as important as the code.",
        items: [
          "Developed and maintained enterprise retail software",
          "Designed and implemented APIs",
          "Improved reliability and performance",
          "Delivered features and fixed bugs across the stack",
          "Collaborated cross-functionally with other teams",
        ],
      },
      {
        kind: "two-column",
        eyebrow: "The Stack",
        title: "A C#/.NET core with React and WPF interfaces",
        description:
          "The product mixed a modern web interface with desktop tooling running on shared .NET services.",
        columns: [
          {
            heading: "UI",
            description: "Web and desktop clients.",
            items: [
              "React for modern UI components",
              "WPF for desktop tooling",
              "UI automation for regression coverage",
              "Consistent behavior between client types",
            ],
          },
          {
            heading: "Backend",
            description: "The .NET service layer.",
            items: [
              "C# / .NET services",
              "API design and implementation",
              "SQL Server for data",
              "Unit testing of services and business logic",
            ],
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Reliability & Quality",
        title: "Software meant for production environments",
        description:
          "Retail software runs in high-stakes environments — reliability and testing were first-class concerns.",
        items: [
          "Unit testing of core logic",
          "UI automation to catch regressions",
          "Performance and reliability improvements",
          "Analytical bug fixing in a shared legacy codebase",
          "Careful, review-based change management",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Anonymized professional experience",
        body: "All details about Emerald are described generically. No proprietary code, architecture specifics, client information or internal identifiers are included — and none should be inferred from this page.",
      },
    ],
  },
};
