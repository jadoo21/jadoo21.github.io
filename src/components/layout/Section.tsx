import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

export function Section({ children, className, id, ariaLabel }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn("py-16 sm:py-20", className)}>
      {children}
    </section>
  );
}
