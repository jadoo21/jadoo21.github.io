import { cn } from "../../lib/cn";

interface TagProps {
  children: string;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-2xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
