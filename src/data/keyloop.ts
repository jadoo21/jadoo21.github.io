import type { Contribution, OwnershipArea } from "../types";

export const keyloopCompany = "Keyloop";
export const keyloopRole = "Software Engineer 2";

export const currentlyAt = {
  company: "Keyloop",
  title: "Currently at Keyloop",
  subtitle: "Building payment systems for automotive dealerships.",
  paragraph:
    "I work on Keyloop's ePayments platform, a distributed payment system handling transaction orchestration, settlement processing, customer communication and payment-provider integrations.",
  badges: [
    "Payment Processing",
    "Settlement",
    "SMS / Email PayByLink",
    "React",
    ".NET",
    "AWS",
    "Event-Driven Architecture",
    "Webhooks",
    "Microservices",
  ],
};

export const whatIWorkOn = [
  "Payment transaction lifecycle",
  "Settlement processing",
  "Payment gateway integrations",
  "SMS and Email PayByLink",
  "Webhook processing",
  "Payment Management UI",
  "Cross-service state synchronization",
  "Event-driven architecture",
  "Production operations",
  "Security remediation",
];

export const technicalFocus: { id: string; title: string; items: string[] }[] = [
  {
    id: "backend",
    title: "Backend",
    items: ["C#", ".NET", "REST APIs", "DynamoDB"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["JavaScript", "React", "Payment Management UI", "Cypress", "Jest"],
  },
  {
    id: "cloud",
    title: "Cloud",
    items: [
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS SNS",
      "AWS SQS",
      "AWS S3",
      "AWS ECS",
      "Kubernetes / OneCD",
      "ArgoCD",
    ],
  },
  {
    id: "events",
    title: "Event-Driven Systems",
    items: ["ADC", "CloudEvents", "SNS/SQS", "Webhooks", "Event publishing", "Idempotency"],
  },
  {
    id: "observability",
    title: "Observability & DevOps",
    items: ["New Relic", "Wiz", "SonarQube", "GitHub Actions", "Postman"],
  },
  {
    id: "testing",
    title: "Testing",
    items: ["xUnit / NUnit", "Jest", "Cypress", "Integration testing"],
  },
];

export const ownershipAreas: OwnershipArea[] = [
  {
    title: "Payment Service",
    description: "Core payment processing engine.",
  },
  {
    title: "PaymentsIntegrationHub",
    description: "Integration layer connecting payment providers.",
  },
  {
    title: "Payment Management UI",
    description: "Dealer-facing payment management interface.",
  },
  {
    title: "Payment Management BFF",
    description: "Backend-for-frontend layer supporting the UI.",
  },
  {
    title: "API Message Relay",
    description: "Asynchronous payment API communication.",
  },
  {
    title: "Payment Adapter Services",
    description: "Gateway-specific integration and webhook handling.",
  },
];

export const contributions: Contribution[] = [
  {
    id: "ucp-sms-paybylink",
    title: "UCP SMS PayByLink Integration",
    steps: [
      {
        label: "Problem",
        text: "Customers needed an additional way to receive payment links beyond email.",
      },
      {
        label: "What I Did",
        text: "Designed and delivered an end-to-end SMS integration involving phone number capture, event publishing, URL shortening, delivery webhooks and payment status synchronization.",
      },
      {
        label: "Technical Approach",
        text: "Orchestrated a new communication channel across the existing event-driven flow — capture, publish, shorten, deliver over SMS and reconcile status through webhooks. Spanned 12+ stories across 5 services.",
      },
      {
        label: "Impact",
        text: "Enabled a new customer communication channel for payment links.",
      },
    ],
    scope: "12+ stories across 5 services.",
  },
  {
    id: "adapter-agnostic-settlement",
    title: "Adapter-Agnostic Settlement Processing",
    steps: [
      {
        label: "Problem",
        text: "Settlement processing was tightly coupled to Checkout.com.",
      },
      {
        label: "What I Did",
        text: "Designed an adapter-agnostic settlement architecture with standardized webhook ingestion and event publishing.",
      },
      {
        label: "Technical Approach",
        text: "Decoupled settlement flows from the single provider by standardizing how settlement events are ingested, validated and published, so new providers plug in without rewiring the core.",
      },
      {
        label: "Impact",
        text: "Created a reusable pattern for future payment providers.",
      },
    ],
  },
  {
    id: "paymentsintegrationhub-modernization",
    title: "PaymentsIntegrationHub Modernization",
    steps: [
      {
        label: "Problem",
        text: "Background SQS/SNS dispatch made event processing difficult to validate and debug.",
      },
      {
        label: "What I Did",
        text: "Reworked the flow toward controller-based processing with centralized handler registration and runtime validation.",
      },
      {
        label: "Technical Approach",
        text: "Moved event handling from fire-and-forget dispatch to explicit controllers with centrally registered handlers and validation enforced at runtime.",
      },
      {
        label: "Impact",
        text: "Earlier validation, more reliable processing and improved testability.",
      },
    ],
  },
  {
    id: "payment-lifecycle-state-management",
    title: "Payment Lifecycle State Management",
    steps: [
      {
        label: "Problem",
        text: "There was no intermediate status showing that payment communication had been dispatched but was not yet delivered.",
      },
      {
        label: "What I Did",
        text: "Introduced an intermediate status across the relevant payment services and UI flow.",
      },
      {
        label: "Technical Approach",
        text: "Added a shared status (AwaitingCommunicationStatus) that flows from the payment services through to the Payment Management UI, so support can see when a communication has been sent but not yet confirmed.",
      },
      {
        label: "Impact",
        text: "Improved lifecycle visibility for support operations.",
      },
    ],
  },
  {
    id: "production-security-remediation",
    title: "Production Security Remediation",
    steps: [
      {
        label: "Problem",
        text: "Production cloud security issues identified on Lambda/container workloads.",
      },
      {
        label: "What I Did",
        text: "Resolved production cloud security issues and contributed to webhook authentication improvements and service decommissioning.",
      },
      {
        label: "Technical Approach",
        text: "Remediated security findings in serverless and container workloads, hardened webhook authentication and safely decommissioned legacy services.",
      },
      {
        label: "Impact",
        text: "Reduced production security risk across the platform.",
      },
    ],
  },
];