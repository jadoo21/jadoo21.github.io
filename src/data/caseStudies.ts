import { contributions } from "./keyloop";
import { getProject } from "./projects";
import type { CaseStudy, Contribution } from "../types";

function contributionStudy(slug: string, contribution: Contribution): CaseStudy {
  const project = getProject(slug);
  const step = (label: string) =>
    contribution.steps.find((s) => s.label === label)?.text ?? "";

  return {
    projectSlug: project?.slug ?? slug,
    title: project?.title ?? contribution.title,
    subtitle: project?.tagline ?? "Keyloop contribution",
    disclaimer:
      "Described at a high level from professional experience. Simplified representation — this is not an exact depiction of internal Keyloop architecture.",
    blocks: [
      {
        kind: "text",
        eyebrow: "Overview",
        title: project?.title ?? contribution.title,
        paragraphs: [
          project?.summary ?? "",
          "This case study describes the engineering problem, my approach and the outcome at a professional, non-confidential level.",
        ],
      },
      {
        kind: "text",
        eyebrow: "01 · Problem",
        title: "What needed to change",
        paragraphs: [step("Problem")],
      },
      {
        kind: "list",
        eyebrow: "02 · What I Did",
        title: "Approach and delivery",
        description: "The shape of the work end to end.",
        items: [step("What I Did")],
      },
      {
        kind: "list",
        eyebrow: "03 · Technical Approach",
        title: "How it was built",
        description: "The technical decisions behind the delivery.",
        items: [step("Technical Approach")],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Impact",
        body: step("Impact"),
      },
    ],
  };
}

export const caseStudies: Record<string, CaseStudy> = {
  "keyloop-epayments-platform": {
    projectSlug: "keyloop-epayments-platform",
    title: "Keyloop ePayments Platform",
    subtitle: "Distributed payment platform for automotive retail",
    disclaimer:
      "Simplified architecture representation. This diagram describes the general shape of the platform and is not an exact representation of proprietary Keyloop infrastructure.",
    blocks: [
      {
        kind: "text",
        eyebrow: "Overview",
        title: "Payment systems for automotive dealerships",
        paragraphs: [
          "Keyloop ePayments is a distributed payment platform used across automotive dealerships. It handles the full lifecycle of a web payment — from orchestrating a transaction through customer communication and payment-provider integration to settlement and status reconciliation.",
          "The platform is built as a set of payment-processing services covering transaction orchestration, settlement processing, SMS/email communication, payment gateway adapters, a Payment Management UI, backend-for-frontend (BFF) services and an API message relay.",
        ],
      },
      {
        kind: "list",
        eyebrow: "My Role",
        title: "Technical owner and contributor",
        description:
          "I function as a technical owner/contributor for the ePayments platform, working across its services rather than inside a single screen or endpoint.",
        items: [
          "Own and contribute to multiple payment-processing services",
          "Design payment orchestration and settlement flows",
          "Build payment gateway adapters and webhook handling",
          "Develop the Payment Management UI and its BFF layer",
          "Work across event-driven architecture and cross-service state",
          "Support production operations and security remediation",
        ],
      },
      {
        kind: "architecture",
        eyebrow: "Platform Architecture",
        title: "How the pieces fit together",
        note: "Simplified representation — not an exact diagram of KEYLOOP infrastructure.",
        nodes: [
          {
            id: "ui",
            title: "Payment Management UI",
            subtitle: "React · dealer-facing",
          },
          {
            id: "bff",
            title: "Payment Management BFF",
            subtitle: "Backend-for-frontend",
          },
          {
            id: "payment",
            title: "Payment Service",
            subtitle: "Transaction orchestration",
          },
          {
            id: "bus",
            title: "ADC / Event Bus",
            subtitle: "CloudEvents · SNS/SQS",
          },
          {
            id: "integration",
            title: "PaymentsIntegrationHub",
            subtitle: "Provider integration layer",
          },
          {
            id: "comm",
            title: "Communication Services",
            subtitle: "SMS / Email PayByLink",
          },
          {
            id: "providers",
            title: "Gateway & Webhooks",
            subtitle: "Payment providers · adapters",
          },
        ],
        rows: [
          ["ui"],
          ["bff"],
          ["payment"],
          ["bus"],
          ["integration", "comm"],
          ["providers"],
        ],
        details: {
          ui: {
            title: "Payment Management UI",
            body: "The React-based interface dealers use to manage payments. It renders the payment lifecycle and drives actions through the BFF — never touching the payment services directly.",
          },
          bff: {
            title: "Payment Management BFF",
            body: "A backend-for-frontend that shapes APIs for the UI, aggregating data from the payment services into screens the dealer team can act on.",
          },
          payment: {
            title: "Payment Service",
            body: "The core payment engine. It orchestrates a payment from request through communication, success and settlement, and owns the canonical payment state.",
          },
          bus: {
            title: "ADC / Event Bus",
            body: "An event bus (using CloudEvents over SNS/SQS) that carries payment events between services, keeping them decoupled and individually scalable.",
          },
          integration: {
            title: "PaymentsIntegrationHub",
            body: "The integration layer connecting the platform to payment providers. Standard webhook ingestion and event publishing make new providers pluggable.",
          },
          comm: {
            title: "Communication Services",
            body: "Services that send SMS and email PayByLink to customers and report delivery status back through webhooks so the payment lifecycle stays in sync.",
          },
          providers: {
            title: "Gateway & Webhooks",
            body: "Gateway adapters encode provider-specific differences. Webhooks stream provider results (paid, failed, settled) back for status synchronization.",
          },
        },
      },
      {
        kind: "lifecycle",
        eyebrow: "Payment Lifecycle",
        title: "From request to settlement",
        note: "Simplified representation of the payment lifecycle — not an exact specification of the internal system.",
        steps: [
          {
            title: "Payment Requested",
            detail:
              "A payment request enters the platform through the UI, BFF or an external system, and a payment is created.",
          },
          {
            title: "Awaiting Communication",
            detail:
              "The payment exists but communication has been dispatched and not yet delivered — an intermediate status that improves support visibility.",
          },
          {
            title: "Communication Sent",
            detail:
              "An SMS or email PayByLink is delivered to the customer, and the communication provider reports delivery back.",
          },
          {
            title: "Payment Successful",
            detail:
              "The customer completes payment, and the provider webhook synchronizes the status across services.",
          },
          {
            title: "Settlement",
            detail:
              "Settlement is processed through the payment provider and reconciled back into the platform.",
          },
        ],
      },
      {
        kind: "two-column",
        eyebrow: "Technology",
        title: "A distributed .NET and React stack on AWS",
        description:
          "The platform spans backend services, a frontend and cloud infrastructure — loosely coupled through events.",
        columns: [
          {
            heading: "Backend & Events",
            description: "Payment services and messaging.",
            items: [
              "C# / .NET services and REST APIs",
              "DynamoDB for payment state",
              "Event publishing with CloudEvents",
              "SNS / SQS async messaging",
              "Webhook ingestion and idempotency",
            ],
          },
          {
            heading: "Frontend & BFF",
            description: "The dealer-facing interface.",
            items: [
              "React and JavaScript",
              "Payment Management UI",
              "Backend-for-frontend services",
              "Jest and Cypress testing",
            ],
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Cloud, Infrastructure & Operations",
        title: "Run on AWS with Kubernetes",
        description:
          "The production platform is backed by AWS services and container workloads.",
        items: [
          "AWS Lambda, DynamoDB, SNS, SQS, S3 and ECS",
          "Kubernetes / OneCD for deployment",
          "ArgoCD awareness for GitOps-style delivery",
          "New Relic for observability",
          "Wiz and SonarQube for security and code quality",
          "GitHub Actions for CI/CD and Postman for API work",
        ],
      },
      {
        kind: "list",
        eyebrow: "Engineering Challenges",
        title: "What makes this system hard",
        description:
          "Distributed payments come with constraints not present in a single-service application.",
        items: [
          "Keeping payment state consistent across services",
          "Idempotent handling of redelivered events and webhooks",
          "Supporting multiple payment providers with different behaviors",
          "Asynchronous communication with clear visibility into status",
          "Runtime validation of event processing in production",
        ],
      },
      {
        kind: "list",
        eyebrow: "Production & Operations",
        title: "Operating the platform carefully",
        description:
          "Payments are production-critical, so operations are treated as a first-class engineering concern.",
        items: [
          "Monitoring with New Relic across services",
          "Security remediation on Lambda and container workloads",
          "Webhook authentication hardening",
          "Service decommissioning kept safe and deliberate",
          "Testing strategy combining xUnit/NUnit, Jest and Cypress",
        ],
      },
    ],
  },
  "ucp-sms-paybylink": contributionStudy(
    "ucp-sms-paybylink",
    contributions[0]!,
  ),
  "adapter-agnostic-settlement": contributionStudy(
    "adapter-agnostic-settlement",
    contributions[1]!,
  ),
  "paymentsintegrationhub-modernization": contributionStudy(
    "paymentsintegrationhub-modernization",
    contributions[2]!,
  ),
  "tally-cis": {
    projectSlug: "tally-cis",
    title: "TALLY CIS",
    subtitle: "Enterprise SaaS Platform",
    disclaimer:
      "Anonymized architecture representation. This diagram describes the general shape of the system and is not an exact representation of proprietary company infrastructure.",
    blocks: [
      {
        kind: "text",
        eyebrow: "Overview",
        title: "A SaaS platform for energy retailers",
        paragraphs: [
          "TALLY CIS is a SaaS product — a web application that energy retailers use to run customer-facing operations. Customers interact with it as a modern web application while the platform handles data, business logic and integrations in cloud-hosted backend services.",
          "I worked across the full stack: building the React and TypeScript customer interface, developing .NET services, integrating systems through REST APIs, and working with Azure cloud services and microservice-based architecture.",
        ],
      },
      {
        kind: "list",
        eyebrow: "My Role",
        title: "Frontend and backend, integrated end to end",
        description:
          "My work spanned the whole surface of the product — from the screen the user sees to the services and cloud platform behind it.",
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
            description: "The customer-facing React application, built with TypeScript.",
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
          "Unit and automated testing of critical paths",
          "Agile delivery with kickoffs and technical discussions",
        ],
      },
    ],
  },
  "enterprise-retail": {
    projectSlug: "enterprise-retail",
    title: "Enterprise Retail Platform",
    subtitle: "Professional Experience — Anonymized",
    disclaimer:
      "Professional experience described at a sanitized level. No proprietary source code, confidential internals or customer data are included.",
    blocks: [
      {
        kind: "text",
        eyebrow: "Overview",
        title: "Enterprise retail software at NCR Corporation",
        paragraphs: [
          "At NCR Corporation, I worked as Software Engineer I on an enterprise retail product used in production retail environments. The work was a mix of API design, UI development, reliability engineering and testing inside a large, long-lived codebase.",
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
        body: "All details about this role are described generically. No proprietary code, architecture specifics, client information or internal identifiers are included — and none should be inferred from this page.",
      },
    ],
  },
};