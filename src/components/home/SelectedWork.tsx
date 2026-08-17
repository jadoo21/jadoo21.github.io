import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { WorkItem } from "../projects/WorkItem";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionHeader } from "../layout/SectionHeader";
import { Reveal } from "../ui/Reveal";

export function SelectedWork() {
  return (
    <Section
      ariaLabel="Selected engineering work"
      className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
    >
      <Container>
        <SectionHeader
          eyebrow="Work"
          title="Selected Work"
          description="Real engineering on enterprise systems — from distributed payment platforms to enterprise SaaS."
        />

        <div className="space-y-4">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.03}>
              <WorkItem project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            View all work
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}