import { motion, useReducedMotion } from "framer-motion";
import { engineeringSteps } from "../../data/engineering";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionHeader } from "../layout/SectionHeader";
import { Reveal } from "../ui/Reveal";

export function HowIEngineer() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      ariaLabel="How I engineer"
      className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
    >
      <Container>
        <SectionHeader
          eyebrow="Method"
          title="How I Engineer"
          description="The way I approach software — from understanding the problem to observing it in production."
        />

        <ol className="relative space-y-0">
          {engineeringSteps.map((step, index) => (
            <li key={step.number} className="relative">
              {index < engineeringSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[21px] top-14 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"
                />
              ) : null}
              <Reveal delay={index * 0.04}>
                <motion.div
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  className="group relative flex items-start gap-5 rounded-lg py-6 pl-1 pr-2 sm:gap-7"
                >
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white font-mono text-xs font-medium text-brand-600 transition-colors group-hover:border-brand-300 group-hover:text-brand-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-brand-400 dark:group-hover:border-brand-700">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
