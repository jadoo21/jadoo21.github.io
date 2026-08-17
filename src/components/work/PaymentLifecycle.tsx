import type { PaymentLifecycleBlock } from "../../types";

interface PaymentLifecycleProps {
  steps: PaymentLifecycleBlock[];
  note?: string;
}

export function PaymentLifecycle({ steps, note }: PaymentLifecycleProps) {
  return (
    <div>
      <ol className="relative space-y-0">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.title} className="relative flex gap-5">
              {!isLast ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[15px] top-12 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"
                />
              ) : null}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-mono text-xs font-semibold text-brand-700 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-300">
                {index + 1}
              </span>
              <div className="pb-8">
                <h4 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-1 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      {note ? (
        <p className="mt-2 font-mono text-2xs leading-snug text-zinc-500 dark:text-zinc-500">
          {note}
        </p>
      ) : null}
    </div>
  );
}