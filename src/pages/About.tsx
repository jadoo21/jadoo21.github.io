import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { siteConfig, yearsExperience } from "../data/site";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

const progression = [
  { label: "Enterprise Retail", note: "NCR · C# / .NET · React" },
  { label: "Enterprise SaaS", note: "Tally Group · Azure · messaging" },
  { label: "Payment Platforms", note: "Keyloop · orchestration · settlement" },
  { label: "Distributed Systems", note: "Events · webhooks · state consistency" },
];

const topics = [
  "React and TypeScript for production interfaces",
  ".NET and C# for APIs and services",
  "Cloud platforms — AWS, with Azure at Tally",
  "Distributed systems, events and messaging",
  "Payment engineering and system design",
  "Production ownership, observability and reliability",
];

export default function About() {
  usePageMeta({
    title: formatPageMeta("About"),
    description:
      "Full-stack software engineer working across frontend experiences, backend services and cloud infrastructure — React, TypeScript, .NET and distributed systems.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="About"
          title="An engineer who thinks in systems"
          description={`Full-stack software engineer with ${yearsExperience()} years building enterprise applications — from the React UI through the API and services to the cloud platform behind them.`}
        />

        <div className="grid gap-5 pb-20 sm:pb-24 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="card-surface h-full p-7 sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                Full-stack by habit, not by title
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>{siteConfig.about}</p>
                <p>
                  My career has moved from enterprise retail, through enterprise SaaS,
                  into payment platforms and distributed systems. The work in each role
                  has been the same kind of work — React and TypeScript on the frontend,
                  C# and .NET behind the API, and cloud infrastructure for the systems
                  that tie them together.
                </p>
                <p>
                  Today, at Keyloop, I work on a distributed payment platform built
                  from microservices and events — designing payment orchestration and
                  settlement flows, building payment-provider integrations, and
                  keeping the services running reliably in production.
                </p>
                <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-500"
                      />
                      <span className="text-zinc-700 dark:text-zinc-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="card-surface flex h-full flex-col gap-5 p-7 sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                Career progression
              </h2>
              <ol className="flex flex-1 flex-col justify-center gap-5">
                {progression.map((step, index) => (
                  <li key={step.label} className="relative flex items-start gap-3">
                    {index < progression.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-[-1.25rem] left-[13px] top-[14px] w-px bg-zinc-200 dark:bg-zinc-700"
                      />
                    ) : null}
                    <span className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-mono text-2xs font-semibold text-brand-600 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-400">
                      0{index + 1}
                    </span>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {step.label}
                      </p>
                      <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                        {step.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
      <Cta />
    </>
  );
}