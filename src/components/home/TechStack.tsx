import { stackGroups, techCatalog } from "../../data/technologies";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionHeader } from "../layout/SectionHeader";
import { TechLogo } from "../technology/TechLogo";
import { Reveal } from "../ui/Reveal";

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
          description="The tools I work with across frontend, backend, cloud and quality — limited to technologies with a clean, recognizable logo."
        />
        <div className="space-y-10">
          {stackGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 0.04}>
              <div>
                <h3 className="font-mono text-2xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  {group.title}
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
                  {group.items.map((slug) => {
                    const entry = techCatalog[slug];
                    if (!entry) return null;
                    return (
                      <li key={slug}>
                        <div className="flex h-full items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900">
                          <TechLogo name={entry.name} slug={entry.slug} hasLogo={entry.logo} />
                          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            {entry.name}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}