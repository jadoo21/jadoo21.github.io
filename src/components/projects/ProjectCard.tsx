import { ArrowRight, Briefcase, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { TagList } from "../ui/Tag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const href = `/work/${project.slug}`;
  const isPersonal = project.category === "Personal";

  return (
    <Card interactive className="group relative flex flex-col p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span
          className={
            isPersonal
              ? "inline-flex items-center gap-1 font-mono text-2xs text-zinc-500 dark:text-zinc-500"
              : "inline-flex items-center gap-1 font-mono text-2xs text-brand-600 dark:text-brand-400"
          }
        >
          {isPersonal ? (
            <FlaskConical className="h-3 w-3" aria-hidden="true" />
          ) : (
            <Briefcase className="h-3 w-3" aria-hidden="true" />
          )}
          {project.category}
        </span>
        <Badge tone={project.featured ? "brand" : "outline"}>{project.timeframe}</Badge>
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
        <Link
          to={href}
          className="group-hover:text-brand-700 dark:group-hover:text-brand-400"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-0.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {project.tagline}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.cardDescription}
      </p>

      <TagList items={project.technologies} className="mt-4" />

      <div className="mt-5 flex items-center gap-1.5 pt-1">
        <Link
          to={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          Read Case Study
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </Card>
  );
}
