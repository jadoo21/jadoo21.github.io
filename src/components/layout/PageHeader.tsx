import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("py-14 sm:py-20", className)}>
      <div className="max-w-3xl">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.6rem] dark:text-white">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            {description}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>
        ) : null}
      </div>
    </div>
  );
}
