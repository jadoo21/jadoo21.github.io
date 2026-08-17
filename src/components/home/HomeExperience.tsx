import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { timeline } from "../../data/timeline";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionHeader } from "../layout/SectionHeader";
import { Reveal } from "../ui/Reveal";

export function HomeExperience() {
  return (
    <Section
      ariaLabel="Career experience"
      className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
    >
      <Container>
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          description="A progression from enterprise retail through enterprise SaaS to distributed payment systems."
          action={
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              Full timeline
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          }
        />

        <ol className="space-y-6">
          {timeline.map((entry, index) => (
            <Reveal key={entry.company} delay={index * 0.05}>
              <li className="card-surface flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-7">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg dark:text-white">
                      {entry.company}
                    </h3>
                    {entry.current ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-brand-200 bg-brand-50 px-2 py-0.5 text-2xs font-medium text-brand-700 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-300">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-400">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    {entry.role}
                  </p>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {entry.summary}
                  </p>
                </div>
                <div className="shrink-0 text-sm sm:text-right">
                  <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                    {entry.period}
                  </p>
                  <p className="mt-0.5 inline-flex items-center gap-1 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {entry.location}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}