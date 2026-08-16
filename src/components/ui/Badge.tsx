import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "brand" | "outline";
}

const tones = {
  default:
    "border border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  brand:
    "border border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-300",
  outline:
    "border border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
};

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium leading-5",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
