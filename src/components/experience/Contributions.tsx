import { ArrowDown } from "lucide-react";
import { contributions } from "../../data/keyloop";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../layout/SectionHeader";

export function Contributions() {
  return (
    <section aria-label="Selected contributions" className="mt-16">
      <SectionHeader
        eyebrow="Keyloop · Selected Work"
        title="Selected Contributions"
        description="A few pieces of engineering work on the ePayments platform, told as problem → approach → impact."
      />

      <div className="space-y-5">
        {contributions.map((contribution, index) => (
          <Reveal key={contribution.id} delay={index * 0.04}>
            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-white">
                    {contribution.title}
                  </h4>
                  <ol className="mt-5 space-y-4">
                    {contribution.steps.map((step, stepIndex) => {
                      const isImpact = step.label === "Impact";
                      return (
                        <li key={step.label} className="relative flex gap-3">
                          <div className="flex flex-col items-center">
                            <span
                              className={
                                isImpact
                                  ? "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-600 font-mono text-[10px] font-semibold text-white"
                                  : "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-zinc-200 font-mono text-[10px] font-semibold text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
                              }
                            >
                              {stepIndex + 1}
                            </span>
                            {stepIndex < contribution.steps.length - 1 ? (
                              <ArrowDown
                                className="mt-1 h-3.5 w-3.5 text-zinc-300 dark:text-zinc-700"
                                aria-hidden="true"
                              />
                            ) : null}
                          </div>
                          <div className="pb-1">
                            <p
                              className={
                                isImpact
                                  ? "text-2xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400"
                                  : "text-2xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500"
                              }
                            >
                              {step.label}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                              {step.text}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}