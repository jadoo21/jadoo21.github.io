import { Library, Table2, ListChecks, LayoutDashboard, ShieldHalf } from "lucide-react";
import { ApiDashboard } from "../components/engineering/lab/ApiDashboard";
import { AuthDemo } from "../components/engineering/lab/AuthDemo";
import { DataTable } from "../components/engineering/lab/DataTable";
import { MultiStepForm } from "../components/engineering/lab/MultiStepForm";
import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { labTopics } from "../data/engineering";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";
import { cn } from "../lib/cn";

const labSections = [
  { id: "data-table", icon: Table2, title: "Data Table", description: labTopics.table },
  {
    id: "multi-step-form",
    icon: ListChecks,
    title: "Multi-Step Form",
    description: labTopics.form,
  },
  {
    id: "api-dashboard",
    icon: LayoutDashboard,
    title: "API Dashboard",
    description: labTopics.dashboard,
  },
  {
    id: "auth",
    icon: ShieldHalf,
    title: "Authentication",
    description: labTopics.auth,
  },
];

export default function Lab() {
  usePageMeta({
    title: formatPageMeta("React Engineering Lab"),
    description:
      "Live React and TypeScript components: a data table, a validated multi-step form, a simulated API dashboard and an authentication flow.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="Proof of Work"
          title="React Engineering Lab"
          description="Live components running on this site — not screenshots. The same discipline I bring to production React: typed state, explicit loading/empty/error states, validation, accessibility and responsive layout."
        />

        <nav aria-label="Lab sections" className="mb-10 flex flex-wrap gap-2">
          {labSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-mono text-2xs text-zinc-600 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-brand-700 dark:hover:text-brand-300"
            >
              <section.icon className="h-3 w-3" aria-hidden="true" />
              {section.title}
            </a>
          ))}
        </nav>

        <div id="lab-content" className="space-y-14 pb-20 sm:space-y-20 sm:pb-24">
          <Reveal>
            <LabCard id="data-table" index="01">
              <DataTable />
            </LabCard>
          </Reveal>
          <Reveal>
            <LabCard id="multi-step-form" index="02">
              <MultiStepForm />
            </LabCard>
          </Reveal>
          <Reveal>
            <LabCard id="api-dashboard" index="03">
              <ApiDashboard />
            </LabCard>
          </Reveal>
          <Reveal>
            <LabCard id="auth" index="04">
              <AuthDemo />
            </LabCard>
          </Reveal>
        </div>
      </Container>
      <Cta />
    </>
  );
}

function LabCard({
  id,
  index,
  children,
}: {
  id: string;
  index: string;
  children: React.ReactNode;
}) {
  const section = labSections.find((sec) => sec.id === id);
  if (!section) return null;
  const Icon = section.icon;

  return (
    <article id={id} className={cn("card-surface scroll-mt-24 p-6 sm:p-8")}>
      <div className="mb-6 flex items-start gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-800">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="flex items-center gap-2 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
            <Library className="h-3 w-3" aria-hidden="true" />
            Lab {index}
          </p>
          <h2 className="mt-0.5 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            {section.title}
          </h2>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {section.description}
          </p>
        </div>
      </div>
      {children}
    </article>
  );
}
