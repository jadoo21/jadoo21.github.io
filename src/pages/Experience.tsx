import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { Tag } from "../components/ui/Tag";
import { experience } from "../data/experience";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function Experience() {
  usePageMeta({
    title: formatPageMeta("Experience"),
    description:
      "Professional experience at Tally Group (TALLY CIS) and NCR Corporation (emergency retail platform) — React, TypeScript, .NET, Azure and more.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="Career"
          title="Experience"
          description="Two companies, five-plus years, and enterprise products shipped on the full stack. The timeline stays concise — the detail lives in the case studies."
        />

        <ol className="relative space-y-10 border-l border-zinc-200 pl-6 sm:space-y-14 sm:pl-8 dark:border-zinc-800">
          {experience.map((item, index) => (
            <li key={item.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[27px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[35px]"
              >
                <span
                  className={
                    item.current
                      ? "h-3.5 w-3.5 rounded-full bg-brand-600 ring-4 ring-brand-100 dark:ring-brand-950"
                      : "h-3 w-3 rounded-full bg-zinc-300 ring-4 ring-zinc-100 dark:bg-zinc-700 dark:ring-zinc-900"
                  }
                />
              </span>
              <Reveal delay={index * 0.05}>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                      {item.company}
                    </h2>
                    <span className="inline-flex items-center gap-1 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {item.location} · {item.period}
                    </span>
                  </div>
                  <p className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-400">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.role}
                  </p>
                  <p className="mt-1 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.summary}
                  </p>

                  <ul className="mt-2 grid max-w-3xl gap-2 sm:grid-cols-2">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-2.5 text-sm leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-500"
                        />
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <Tag key={tech} className="mb-0">
                        {tech}
                      </Tag>
                    ))}
                  </div>

                  <div className="mt-3">
                    <Link
                      to={`/work/${item.projectSlug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                    >
                      {item.project} case study
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
      <div className="pt-16" />
      <Cta />
    </>
  );
}
