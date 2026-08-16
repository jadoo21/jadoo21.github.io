import { skillCategories } from "../../data/skills";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { TagList } from "../ui/Tag";

export function SkillCategories() {
  return (
    <section aria-label="Engineering skills" className="py-10 sm:py-14">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.04} className="h-full">
            <Card className="flex h-full flex-col p-6">
              <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {category.description}
              </p>
              <TagList items={category.technologies} className="mt-4" />
              <div className="mt-5 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <p className="text-2xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400">
                  Where I&apos;ve used it
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {category.evidence}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
