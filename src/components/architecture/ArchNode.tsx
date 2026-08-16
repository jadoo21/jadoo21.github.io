import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

interface ArchNodeProps {
  id: string;
  title: string;
  subtitle?: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function ArchNode({ id, title, subtitle, selected, onSelect }: ArchNodeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(id)}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      className={cn(
        "group flex h-full w-full flex-col justify-center rounded-lg border px-4 py-3 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:focus-visible:outline-brand-400",
        selected
          ? "border-brand-500 bg-brand-50/70 dark:border-brand-500 dark:bg-brand-950/60"
          : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600",
      )}
    >
      <span
        className={cn(
          "text-xs font-semibold",
          selected
            ? "text-brand-700 dark:text-brand-300"
            : "text-zinc-900 dark:text-zinc-100",
        )}
      >
        {title}
      </span>
      {subtitle ? (
        <span className="mt-0.5 font-mono text-2xs leading-snug text-zinc-500 dark:text-zinc-500">
          {subtitle}
        </span>
      ) : null}
    </motion.button>
  );
}
