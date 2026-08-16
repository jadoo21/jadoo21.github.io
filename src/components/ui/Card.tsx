import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "card-surface",
        interactive &&
          "transition-shadow duration-200 hover:shadow-card-hover hover:border-zinc-300 dark:hover:border-zinc-700",
        className,
      )}
    >
      {children}
    </div>
  );
}
