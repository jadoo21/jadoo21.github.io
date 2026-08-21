import { cn } from "../../lib/cn";
import { techCatalog, type TechEntry } from "../../data/technologies";
import { TechLogo } from "./TechLogo";

interface TechBadgeProps {
  entry: TechEntry;
  showCategory?: boolean;
  className?: string;
}

export function TechBadge({ entry, showCategory = false, className }: TechBadgeProps) {
  return (
    <div className={cn("group relative", className)}>
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white py-1 pl-1 pr-3 text-sm transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
        <TechLogo name={entry.name} slug={entry.slug} hasLogo={entry.logo} />
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          {entry.name}
        </span>
      </div>

      {showCategory ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-2xs font-medium text-zinc-600 opacity-0 shadow-card transition-opacity duration-150 group-hover:opacity-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
        >
          {entry.category}
        </div>
      ) : null}
    </div>
  );
}

export function TechBadgeBySlug({
  slug,
  showCategory = false,
  className,
}: {
  slug: string;
  showCategory?: boolean;
  className?: string;
}) {
  const entry = techCatalog[slug];
  if (!entry) return null;
  return <TechBadge entry={entry} showCategory={showCategory} className={className} />;
}