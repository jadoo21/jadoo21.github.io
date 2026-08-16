import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArchitectureVisualizations } from "../components/engineering/ArchitectureVisualizations";
import { EngineeringDecisions } from "../components/engineering/EngineeringDecisions";
import { SkillCategories } from "../components/engineering/SkillCategories";
import { HowIEngineer } from "../components/home/HowIEngineer";
import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function Engineering() {
  usePageMeta({
    title: formatPageMeta("Engineering"),
    description:
      "Frontend engineering, backend engineering, distributed systems, cloud and engineering practices — with evidence from production work and personal labs.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="How I work"
          title="Engineering"
          description="What I build with, how I reason about systems, and the working demonstration that backs it up. No skill bars — just the stack, the decisions and the proof."
        />
        <SkillCategories />
      </Container>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <Container>
          <HowIEngineer />
        </Container>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <Container>
          <EngineeringDecisions />
        </Container>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <Container>
          <ArchitectureVisualizations />
        </Container>
      </div>

      <section
        aria-label="React Engineering Lab"
        className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
      >
        <Container>
          <Reveal>
            <div className="card-surface flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
              <div className="max-w-2xl">
                <p className="eyebrow mb-3">Proof of Work</p>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                  React Engineering Lab
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-400">
                  Live React components on this site: a data table with sorting,
                  filtering, pagination and full state handling; a validated multi-step
                  form; an API dashboard with skeletons and retry; and a mocked auth
                  flow with protected routes.
                </p>
              </div>
              <Link
                to="/engineering/lab"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
                Open the Lab
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <Cta />
    </>
  );
}
