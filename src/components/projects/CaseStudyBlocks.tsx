import { Check, Info, TriangleAlert } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { ArchDiagram } from "../architecture/ArchDiagram";
import type { CaseStudyBlock } from "../../types";
import { cn } from "../../lib/cn";

function BlockEyebrow(props: { title: string }) {
  return (
    <h2 className="text-balance text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
      {props.title}
    </h2>
  );
}

function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
          <Check
            className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400"
            aria-hidden="true"
          />
          <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyBlocks({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="space-y-14 sm:space-y-20">
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "text":
            return (
              <Reveal key={index}>
                <article className="max-w-prose">
                  {block.eyebrow ? (
                    <p className="eyebrow mb-3">{block.eyebrow}</p>
                  ) : null}
                  <BlockEyebrow title={block.title} />
                  <div className="mt-4 space-y-4">
                    {block.paragraphs.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            );

          case "list":
            return (
              <Reveal key={index}>
                <section className="card-surface p-6 sm:p-8">
                  {block.eyebrow ? (
                    <p className="eyebrow mb-3">{block.eyebrow}</p>
                  ) : null}
                  <BlockEyebrow title={block.title} />
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {block.description}
                  </p>
                  <CheckList
                    items={block.items}
                    className="mt-5 grid sm:grid-cols-2 sm:gap-x-8"
                  />
                </section>
              </Reveal>
            );

          case "two-column": {
            const spanClass = block.columns.length > 2 ? "md:col-span-1" : "";
            return (
              <Reveal key={index}>
                <section>
                  {block.eyebrow ? (
                    <p className="eyebrow mb-3">{block.eyebrow}</p>
                  ) : null}
                  <BlockEyebrow title={block.title} />
                  {block.description ? (
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {block.description}
                    </p>
                  ) : null}
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {block.columns.map((column) => (
                      <div
                        key={column.heading}
                        className={cn("card-surface p-6", spanClass)}
                      >
                        <h3 className="flex items-center gap-1.5 text-base font-semibold text-zinc-900 dark:text-white">
                          {column.heading}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {column.description}
                        </p>
                        <CheckList items={column.items} className="mt-4" />
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            );
          }

          case "architecture":
            return (
              <Reveal key={index}>
                <section>
                  {block.eyebrow ? (
                    <p className="eyebrow mb-3">{block.eyebrow}</p>
                  ) : null}
                  <BlockEyebrow title={block.title} />
                  <div className="card-surface mt-6 overflow-x-auto p-5 sm:p-8">
                    <div className="min-w-[560px]">
                      <ArchDiagram
                        nodes={block.nodes}
                        rows={block.rows}
                        details={block.details}
                        note={block.note}
                      />
                    </div>
                  </div>
                </section>
              </Reveal>
            );

          case "callout": {
            const isWarning = block.tone === "warning";
            return (
              <Reveal key={index}>
                <div
                  className={cn(
                    "flex items-start gap-3 rounded-lg border p-4 sm:p-5",
                    isWarning
                      ? "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40"
                      : "border-brand-200 bg-brand-50/60 dark:border-brand-900 dark:bg-brand-950/40",
                  )}
                >
                  {isWarning ? (
                    <TriangleAlert
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Info
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                      {block.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {block.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
