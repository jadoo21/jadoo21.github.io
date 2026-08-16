import { projects } from "../data/projects";
import { Container } from "../components/layout/Container";
import { PageHeader } from "../components/layout/PageHeader";
import { Cta } from "../components/layout/Cta";
import { ProjectCard } from "../components/projects/ProjectCard";
import { Reveal } from "../components/ui/Reveal";

export default function Work() {
  return (
    <>
      <Container>
        <PageHeader
          eyebrow="Work"
          title="Selected Engineering Work"
          description="A blend of enterprise systems built at Tally Group and NCR Corporation, and personal projects where I push architecture and engineering practice further."
        />

        <div className="grid gap-6 pb-20 sm:pb-24 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
      <Cta />
    </>
  );
}
