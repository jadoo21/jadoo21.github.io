import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { currentlyAt } from "../../data/keyloop";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";

export function CurrentlyAt() {
  return (
    <Section ariaLabel="Currently at Keyloop" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="card-surface overflow-hidden">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div className="relative overflow-hidden p-8 sm:p-10 lg:border-r lg:border-zinc-200 lg:dark:border-zinc-800">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-600/20"
                />
                <p className="eyebrow mb-4">Current Role</p>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                  {currentlyAt.title}
                </h2>
                <p className="mt-2 flex items-center gap-2 text-base font-medium text-brand-700 dark:text-brand-400">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  {currentlyAt.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {currentlyAt.paragraph}
                </p>
                <Link
                  to="/experience"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  View the experience
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="bg-zinc-50 p-8 sm:p-10 dark:bg-zinc-900/60">
                <p className="font-mono text-2xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Focus areas
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {currentlyAt.badges.map((badge) => (
                    <li key={badge}>
                      <Tag className="px-2.5 py-1 text-2xs">{badge}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}