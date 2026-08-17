import { specializations } from "../../data/technologies";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionHeader } from "../layout/SectionHeader";
import { TechBadgeBySlug } from "../technology/TechBadge";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";

export function Specializations() {
  return (
    <Section ariaLabel="What I specialize in" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Focus"
          title="What I Specialize In"
          description="Four areas of engineering I work on daily — each one grounded in production systems, not just personal projects."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {specializations.map((specialization, index) => (
            <Reveal key={specialization.title} delay={index * 0.05} className="h-full">
              <Card className="flex h-full flex-col p-6 sm:p-7">
                <h3 className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg dark:text-white">
                  {specialization.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {specialization.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {specialization.technologies.map((slug) => (
                    <TechBadgeBySlug key={slug} slug={slug} className="flex" />
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}