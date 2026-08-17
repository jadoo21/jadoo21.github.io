import { stackGroups, techCatalog } from "../../data/technologies";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionHeader } from "../layout/SectionHeader";
import { TechBadgeBySlug } from "../technology/TechBadge";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../lib/cn";

export function TechStack() {
  return (
    <Section
      ariaLabel="Technology stack"
      className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
    >
      <Container>
        <SectionHeader
          eyebrow="Stack"
          title="Technology Stack"
          description="The tools I use across frontend, backend, cloud and production engineering — no invented proficiency scores, just what I work with."
        />
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 0.04}>
              <div>
                <dt className="font-mono text-2xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  {group.title}
                </dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((slug) => (
                      <li key={slug} className={cn(!techCatalog[slug]?.logo && "pt-2")}>
                        <TechBadgeBySlug slug={slug} className="flex" />
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}