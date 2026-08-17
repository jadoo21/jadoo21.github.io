import { MapPin } from "lucide-react";
import { timeline } from "../../data/timeline";
import { Reveal } from "../ui/Reveal";

export function CareerTimeline() {
  return (
    <ol className="relative space-y-10 border-l border-zinc-200 pl-6 sm:space-y-14 sm:pl-8 dark:border-zinc-800">
      {timeline.map((entry, index) => (
        <li key={entry.company} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[27px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[35px]"
          >
            <span
              className={
                entry.current
                  ? "h-3.5 w-3.5 rounded-full bg-brand-600 ring-4 ring-brand-100 dark:ring-brand-950"
                  : "h-3 w-3 rounded-full bg-zinc-300 ring-4 ring-zinc-100 dark:bg-zinc-700 dark:ring-zinc-900"
              }
            />
          </span>
          <Reveal delay={index * 0.05}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-white">
                    {entry.company}
                    {entry.current ? (
                      <span className="ml-2 inline-flex rounded-full border border-brand-200 bg-brand-50 px-2 py-0.5 align-middle text-2xs font-medium text-brand-700 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-300">
                        Current
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-brand-700 dark:text-brand-400">
                    {entry.role}
                  </p>
                </div>
                <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                  {entry.period}
                </p>
              </div>
              <p className="inline-flex items-center gap-1 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {entry.location}
              </p>
              <p className="max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {entry.summary}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}