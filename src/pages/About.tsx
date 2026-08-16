import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { siteConfig } from "../data/site";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

const currentlyExploring = [
  {
    title: "System Design",
    description: "Service boundaries, API contracts and how large systems decompose.",
  },
  {
    title: "Distributed Systems",
    description:
      "Messaging, idempotency, retries and failure handling — the Event-Driven Platform lab is where most of this gets tested.",
  },
  {
    title: "Cloud Architecture",
    description: "Better Azure and container-based deployment patterns.",
  },
  {
    title: "AI-Assisted Development",
    description: "How tooling changes the way software gets written and reviewed.",
  },
  {
    title: "Developer Tooling",
    description: "Faster, more reliable build and feedback loops.",
  },
];

export default function About() {
  usePageMeta({
    title: formatPageMeta("About"),
    description:
      "Software engineer focused on full-stack development — React and TypeScript on the frontend, C# and .NET on the backend, Azure in the cloud.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="About"
          title="An engineer who thinks in systems"
          description="Software Engineer with five-plus years of experience building enterprise applications — from the React UI through the API and services to the cloud platform behind them."
        />

        <div className="grid gap-5 pb-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="card-surface h-full p-7 sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                Full-stack by habit, not by title
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>{siteConfig.about}</p>
                <p>
                  At Tally Group I work on TALLY CIS, a SaaS platform for energy
                  retailers. At NCR Corporation I built features for an enterprise
                  retail product. In both, the work has been the same kind of work:
                  React and TypeScript on the frontend, C# and .NET behind the API, and
                  Azure and Docker for the deployment side.
                </p>
                <p>
                  This portfolio is itself the thing I&apos;m asking you to believe me
                  about. Every interactive piece — the architecture diagrams, the React
                  Engineering Lab, the case-study pages — runs on the same principles I
                  use at work: typed React, reusable components, explicit states,
                  responsive layout and clean code.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="card-surface flex h-full flex-col gap-5 p-7 sm:p-8">
              <div className="flex items-center gap-2">
                <Compass
                  className="h-4 w-4 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                  Currently exploring
                </h2>
              </div>
              <ul className="flex flex-1 flex-col gap-4">
                {currentlyExploring.map((topic) => (
                  <li key={topic.title}>
                    <h3 className="flex items-center gap-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      <Sparkles
                        className="h-3.5 w-3.5 text-brand-500 dark:text-brand-400"
                        aria-hidden="true"
                      />
                      {topic.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {topic.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="pb-8">
          <Reveal>
            <div className="card-surface flex flex-col items-start gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                  See the work
                </h2>
                <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  The engineering page covers the stack, the decisions and the
                  architecture — and the case studies show where it was actually
                  applied.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                >
                  Explore the work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/engineering"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
                >
                  Engineering
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
      <Cta />
    </>
  );
}
