import { ArchDiagram } from "../architecture/ArchDiagram";
import type { ArchitectureDetail, ArchitectureNode } from "../../types";
import { Reveal } from "../ui/Reveal";

interface DemoDiagram {
  key: string;
  title: string;
  description: string;
  nodes: ArchitectureNode[];
  rows: string[][];
  details: Record<string, ArchitectureDetail>;
}

const fullStackNodes: ArchitectureNode[] = [
  { id: "react", title: "React", subtitle: "Rendered UI" },
  { id: "api", title: "REST API", subtitle: "HTTP boundary" },
  { id: "net", title: ".NET", subtitle: "Business logic" },
  { id: "ef", title: "Entity Framework", subtitle: "ORM" },
  { id: "sql", title: "SQL Server", subtitle: "Persistence" },
];

const fullStackDetails: Record<string, ArchitectureDetail> = {
  react: {
    title: "React",
    body: "The presentation layer — components, forms and API-driven state.",
  },
  api: {
    title: "REST API",
    body: "The integration boundary. The client never talks to the database or services directly, only to the API contract.",
  },
  net: {
    title: ".NET",
    body: "Services implement business rules and coordinate data access.",
  },
  ef: {
    title: "Entity Framework",
    body: "The ORM that maps domain objects to relational tables and executes queries as LINQ.",
  },
  sql: {
    title: "SQL Server",
    body: "Relational storage with schema, keys and constraints owned by the backend.",
  },
};

const microservicesNodes: ArchitectureNode[] = [
  { id: "gateway", title: "API Gateway", subtitle: "Single entry point" },
  { id: "svc-a", title: "Service A", subtitle: "Owns its domain and data" },
  { id: "svc-b", title: "Service B", subtitle: "Owns its domain and data" },
  { id: "svc-c", title: "Service C", subtitle: "Owns its domain and data" },
];

const microservicesDetails: Record<string, ArchitectureDetail> = {
  gateway: {
    title: "API Gateway",
    body: "Routes requests to the right service and enforces authz at the boundary. Clients see one API, not a mesh.",
  },
  "svc-a": {
    title: "Service A",
    body: "Each service owns its capability and its own database — no other service reaches into its data.",
  },
  "svc-b": {
    title: "Service B",
    body: "Scaled and deployed independently of the others; failure is contained to that service.",
  },
  "svc-c": {
    title: "Service C",
    body: "Communicates with other services through explicit contracts, not shared internals.",
  },
};

const eventDrivenNodes: ArchitectureNode[] = [
  { id: "producer", title: "Producer", subtitle: "Publishes events" },
  { id: "broker", title: "Message Broker", subtitle: "Routing & delivery" },
  { id: "consumer-a", title: "Consumer A", subtitle: "Reacts asynchronously" },
  { id: "consumer-b", title: "Consumer B", subtitle: "Reacts asynchronously" },
];

const eventDrivenDetails: Record<string, ArchitectureDetail> = {
  producer: {
    title: "Producer",
    body: "Publishes domain events without knowing who — if anyone — consumes them.",
  },
  broker: {
    title: "Message Broker",
    body: "Decouples producers from consumers, buffers load and guarantees delivery.",
  },
  "consumer-a": {
    title: "Consumer A",
    body: "Consumes events and does its own work. Adding a consumer doesn't change the producer.",
  },
  "consumer-b": {
    title: "Consumer B",
    body: "Independent consumer with its own failure and retry behaviour.",
  },
};

const demos: DemoDiagram[] = [
  {
    key: "full-stack",
    title: "Full-Stack Application",
    description:
      "A clean separation from UI to storage, with explicit boundaries at each layer.",
    nodes: fullStackNodes,
    rows: [["react"], ["api"], ["net"], ["ef"], ["sql"]],
    details: fullStackDetails,
  },
  {
    key: "microservices",
    title: "Microservices",
    description: "One entry point, many independently-owned services behind it.",
    nodes: microservicesNodes,
    rows: [["gateway"], ["svc-a", "svc-b", "svc-c"]],
    details: microservicesDetails,
  },
  {
    key: "event-driven",
    title: "Event-Driven",
    description: "Producers and consumers connected through a broker, never directly.",
    nodes: eventDrivenNodes,
    rows: [["producer"], ["broker"], ["consumer-a", "consumer-b"]],
    details: eventDrivenDetails,
  },
];

export function ArchitectureVisualizations() {
  return (
    <section aria-label="Architecture visualizations" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="mb-10 sm:mb-12">
          <p className="eyebrow mb-3">Patterns</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Architecture Visualizations
          </h2>
          <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-400">
            The patterns I work with, drawn as diagrams. Select a component to see what
            it does.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {demos.map((demo) => (
            <Reveal key={demo.key}>
              <div className="card-surface flex h-full flex-col p-5 sm:p-6">
                <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
                  {demo.title}
                </h3>
                <p className="mt-1.5 mb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {demo.description}
                </p>
                <div className="flex-1 overflow-x-auto">
                  <div className="min-w-[260px]">
                    <ArchDiagram
                      nodes={demo.nodes}
                      rows={demo.rows}
                      details={demo.details}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
