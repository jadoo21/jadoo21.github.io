import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { HowIEngineer } from "../components/home/HowIEngineer";
import { ProofPoints } from "../components/home/ProofPoints";
import { SelectedWork } from "../components/home/SelectedWork";
import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { Reveal } from "../components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofPoints />
      <SelectedWork />
      <HowIEngineer />

      <section
        aria-label="React Engineering Lab"
        className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
      >
        <Container>
          <Reveal>
            <div className="card-surface flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
              <div className="max-w-2xl">
                <p className="eyebrow mb-3">Proof of Work</p>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                  React Engineering Lab
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-400">
                  A working demonstration of React and TypeScript — a data table with
                  full state handling, a validated multi-step form, an API dashboard
                  with skeletons and an auth flow. Not screenshots: these are live
                  components on this site.
                </p>
              </div>
              <Link
                to="/engineering/lab"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
                Open the Lab
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <Cta />
    </>
  );
}
