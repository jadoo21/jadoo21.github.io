import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { slugForName } from "../../data/technologies";
import type { Project } from "../../types";
import { TechBadgeBySlug } from "../technology/TechBadge";
import { Tag } from "../ui/Tag";

interface WorkItemProps {
  project: Project;
}

export function WorkItem({ project }: WorkItemProps) {
  const href = `/work/${project.slug}`;

  return (
    <Link
      to={href}
      className="card-surface group relative flex flex-col gap-4 p-6 transition-shadow hover:border-zinc-300 hover:shadow-card-hover sm:p-8 dark:hover:border-zinc-700"
    >
      <div className="flex items-start">
        <span className="mr-6 shrink-0 py-0.5 font-mono text-xs text-zinc-400 transition-colors group-hover:text-brand-600 dark:text-zinc-600 dark:group-hover:text-brand-400">
          {project.order}
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-2xs uppercase tracking-wider text-brand-700 dark:text-brand-400">
              {project.company}
            </span>
            <Tag className="mb-0">{project.timeframe}</Tag>
          </div>

          <h3 className="mt-2 flex items-start gap-2 text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-brand-700 sm:text-xl dark:text-white dark:group-hover:text-brand-400">
            {project.title}
            <ArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-zinc-600"
              aria-hidden="true"
            />
          </h3>
          <p className="mt-0.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {project.tagline}
          </p>

          <p className="mt-3 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => {
              const slug = slugForName(tech);
              if (slug) {
                return (
                  <li key={tech}>
                    <TechBadgeBySlug slug={slug} className="flex" />
                  </li>
                );
              }
              return (
                <li key={tech}>
                  <Tag className="mb-0">{tech}</Tag>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
}