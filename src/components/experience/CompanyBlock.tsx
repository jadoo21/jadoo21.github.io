import { Briefcase, Check, MapPin } from "lucide-react";
import type { ExperienceItem } from "../../types";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";

interface CompanyBlockProps {
  item: ExperienceItem;
  index: number;
}

export function CompanyBlock({ item, index }: CompanyBlockProps) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="card-surface p-6 sm:p-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            {item.company}
          </h3>
          <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {item.location}
            </span>{" "}
            · {item.period}
          </p>
        </div>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-400">
          <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
          {item.role}
        </p>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {item.summary}
        </p>

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex items-start gap-2.5 text-sm">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400"
                aria-hidden="true"
              />
              <span className="text-zinc-700 dark:text-zinc-300">
                {responsibility}
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}