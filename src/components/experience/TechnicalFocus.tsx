import { technicalFocus } from "../../data/keyloop";
import { Reveal } from "../ui/Reveal";
import { TagList } from "../ui/Tag";

export function TechnicalFocus() {
  return (
    <section aria-label="Technical focus" className="mt-12">
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
        Technical Focus
      </h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technicalFocus.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.04}>
            <div className="card-surface h-full p-6">
              <h4 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                {group.title}
              </h4>
              <TagList items={group.items} className="mt-3" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}