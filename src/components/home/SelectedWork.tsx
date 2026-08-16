import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionHeader } from "../layout/SectionHeader";
import { Reveal } from "../ui/Reveal";

export function SelectedWork() {
  return (
    <Section ariaLabel="Selected engineering work" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Engineering Work"
          title="Selected Engineering Work"
          description="Real work on enterprise systems, plus personal projects where I explore architecture and engineering practice."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05} className="h-full">
              <ProjectCard project={project} />
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
