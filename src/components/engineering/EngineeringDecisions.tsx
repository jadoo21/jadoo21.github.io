import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, ChevronDown, Lightbulb } from "lucide-react";
import { useState } from "react";
import { engineeringDecisions } from "../../data/engineering";
import { cn } from "../../lib/cn";
import { Tag } from "../ui/Tag";
import type { EngineeringDecision } from "../../types";

function DecisionCard({
  decision,
  defaultOpen = false,
}: {
  decision: EngineeringDecision;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduceMotion = useReducedMotion();

  return (
    <div className="card-surface overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50 sm:px-6"
      >
        <div>
          <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
            {decision.title}
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
            {decision.question}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 dark:text-zinc-500",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-4 border-t border-zinc-200 px-5 py-5 sm:px-6 dark:border-zinc-800">
              <div className="flex items-start gap-3">
                <BookOpen
                  className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-2xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                    General principle
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {decision.principle}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-2xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400">
                    My approach
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {decision.approach}
                  </p>
                </div>
              </div>
              <div>
                {decision.tags.map((tag) => (
                  <Tag key={tag} className="mr-1 mb-1">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function EngineeringDecisions() {
  return (
    <section aria-label="Engineering decisions" className="py-20 sm:py-24">
      <div className="container-page">
        <div className="mb-10 sm:mb-12">
          <p className="eyebrow mb-3">Trade-offs</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Engineering Decisions
          </h2>
          <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-400">
            The reasoning behind choices I make — what the general principle is, and how
            I apply it.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {engineeringDecisions.map((decision, decisionIndex) => (
            <DecisionCard
              key={decision.slug}
              decision={decision}
              defaultOpen={decisionIndex === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
