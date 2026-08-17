import { projects } from "../data/projects";
import { WorkItem } from "../components/projects/WorkItem";
import { Container } from "../components/layout/Container";
import { PageHeader } from "../components/layout/PageHeader";
import { Cta } from "../components/layout/Cta";
import { Reveal } from "../components/ui/Reveal";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function Work() {
  usePageMeta({
    title: formatPageMeta("Work"),
    description:
      "Selected professional engineering work — the Keyloop ePayments platform, payment contributions, TALLY CIS and enterprise retail at NCR.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="Work"
          title="Selected Work"
          description="Professional engineering work on distributed payment systems, enterprise SaaS and enterprise retail — each with a closer look at the problem, the approach and the impact."
        />

        <div className="space-y-4 pb-20 sm:pb-24">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.03}>
              <WorkItem project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
      <Cta />
    </>
  );
}