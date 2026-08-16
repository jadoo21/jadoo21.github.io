import type { EngineeringDecision, EngineeringStep } from "../types";

export const engineeringSteps: EngineeringStep[] = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Clarify business requirements, user goals and constraints before writing code. The right question saves more time than the right framework.",
  },
  {
    number: "02",
    title: "Design the Solution",
    description:
      "Sketch the architecture, API contracts and data model first. Decide service boundaries and how the pieces will integrate before implementation begins.",
  },
  {
    number: "03",
    title: "Build Across the Stack",
    description:
      "Implement from the React interface through the API, services and database — keeping frontend and backend integration continuous and testable.",
  },
  {
    number: "04",
    title: "Test & Secure",
    description:
      "Cover critical paths with automated tests, apply SOLID and design patterns, and enforce authorization and secure handling of configuration and secrets.",
  },
  {
    number: "05",
    title: "Deploy & Observe",
    description:
      "Ship through CI/CD, containerize consistently, and monitor behavior in production so issues surface early and rollouts stay controlled.",
  },
];

export const engineeringDecisions: EngineeringDecision[] = [
  {
    slug: "why-microservices",
    title: "Why microservices?",
    question: "When does splitting a system into services make sense?",
    principle:
      "Separation of concerns. Break a system along business capability boundaries so each service owns its data and behavior.",
    approach:
      "My approach: I split services where the boundaries are real — different ownership, scaling needs or failure domains — not mechanically. Each service owns its data model and publishes its contract. In TALLY CIS, microservice-based features with messaging keep systems decoupled while sharing clear APIs.",
    tags: ["Architecture", "Service Boundaries", "Decoupling"],
  },
  {
    slug: "why-messaging",
    title: "Why use messaging?",
    question: "Why communicate asynchronously instead of calling services directly?",
    principle:
      "Async communication decouples producers from consumers and smooths out load spikes.",
    approach:
      "My approach: I reach for messaging when a step doesn't need an immediate response — an order placed can trigger notifications, payments or inventory without the caller waiting. MassTransit and RabbitMQ give retries, ordering and delivery guarantees that plain HTTP calls don't.",
    tags: ["RabbitMQ", "MassTransit", "Event-Driven"],
  },
  {
    slug: "why-docker",
    title: "Why use Docker?",
    question: "Why run services in containers?",
    principle:
      "Consistency. The same image runs identically on a laptop and in production.",
    approach:
      "My approach: Containers remove the 'works on my machine' gap. Services, brokers and databases run in containers locally so development matches production, and deployment becomes building and running an image.",
    tags: ["Docker", "Deployment", "Consistency"],
  },
  {
    slug: "why-feature-flags",
    title: "Why use feature flags?",
    question: "Why ship code behind toggles?",
    principle: "Controlled rollout. Separate deploying code from releasing features.",
    approach:
      "My approach: Flags let a team merge smaller, reviewable changes and release incrementally. If something goes wrong, you disable the flag instead of reverting a deployment. Progressively rolling a feature out also limits blast radius.",
    tags: ["Release Management", "Risk Control"],
  },
  {
    slug: "why-api-contracts",
    title: "Why use API contracts?",
    question: "Why define the contract before writing the implementation?",
    principle:
      "Producer/consumer compatibility. A documented contract keeps independent teams and services from breaking one another.",
    approach:
      "My approach: I agree on the shape of the request and response up front — field names, types and semantics. That makes the frontend and backend integrable from day one, and lets each side evolve without surprising the other.",
    tags: ["API Design", "Integration", "Teamwork"],
  },
];

export const labTopics = {
  table:
    "A data table with client-side sorting, filtering, pagination, and explicit loading, empty and error states — the kinds of states every real API-backed screen needs.",
  form: "A multi-step form with per-step validation, field normalization and a progress indicator. Built with React state and no form library, so the validation logic is explicit.",
  dashboard:
    "A simulated API-driven dashboard with loading skeletons, stat cards, a sparkline chart and an error state with a retry action.",
  auth: "A mocked fetch-backed authentication flow — login, protected route, session state and logout — demonstrating how protected UI is wired to session state.",
} as const;
