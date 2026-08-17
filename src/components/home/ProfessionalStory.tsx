import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Reveal } from "../ui/Reveal";

const progression = [
  "Enterprise Retail",
  "Enterprise SaaS",
  "Payment Platforms",
  "Distributed Systems",
];

export function ProfessionalStory() {
  return (
    <Section
      ariaLabel="Professional story"
      className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
    >
      <Container>
        <Reveal>
          <div className="card-surface p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-3">About</p>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                  From enterprise retail to distributed systems
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  I&apos;m a full-stack software engineer who enjoys working across
                  frontend experiences, backend services and cloud infrastructure. My
                  career has moved from enterprise retail at NCR, through enterprise
                  SaaS at Tally Group, into payment platforms and distributed systems
                  at Keyloop.
                </p>
                <Link
                  to="/about"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  Read the full story
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <ol className="flex flex-col justify-center gap-1">
                {progression.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 py-1.5 font-mono text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="font-mono text-2xs text-zinc-400">
                      0{index + 1}
                    </span>
                    {step}
                    {index < progression.length - 1 ? (
                      <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
                        ↓
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}