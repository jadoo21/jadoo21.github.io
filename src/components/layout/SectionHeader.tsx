import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p id={id} className="eyebrow mb-3">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-400">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
