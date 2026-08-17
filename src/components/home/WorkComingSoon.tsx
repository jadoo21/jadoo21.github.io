import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";

export function WorkComingSoon() {
  return (
    <Section
      ariaLabel="Work"
      className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
    >
      <Container>
        <Reveal>
          <div className="card-surface flex flex-col items-start gap-4 p-8 sm:p-10">
            <p className="eyebrow mb-1">Work</p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              Selected work
            </h2>
            <p className="max-w-prose text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Selected personal projects and technical explorations will appear
              here.
            </p>
            <Link
              to="/work"
              className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              Visit the Work page
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}