import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "../components/layout/Container";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { siteConfig } from "../data/site";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function Contact() {
  usePageMeta({
    title: formatPageMeta("Contact"),
    description:
      "Get in touch with Rishabh Roshan, a software engineer specializing in React, TypeScript, .NET and AWS.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="Contact"
          title="Let's Connect"
          description="I'm open to conversations about software engineering, full-stack development and interesting technical problems."
        />

        <div className="grid gap-5 pb-20 sm:pb-24 lg:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${siteConfig.email}`}
              className="card-surface group flex h-full flex-col gap-3 p-7 transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
                  Email
                </h2>
                <p className="mt-1 font-mono text-sm break-all text-zinc-600 group-hover:text-brand-700 dark:text-zinc-400 dark:group-hover:text-brand-300">
                  {siteConfig.email}
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="card-surface group flex h-full flex-col gap-3 p-7 transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
                  LinkedIn
                </h2>
                <p className="mt-1 font-mono text-sm break-all text-zinc-600 group-hover:text-brand-700 dark:text-zinc-400 dark:group-hover:text-brand-300">
                  linkedin.com/in/rishabh-roshan
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="card-surface group flex h-full flex-col gap-3 p-7 transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                <Github className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
                  GitHub
                </h2>
                <p className="mt-1 font-mono text-sm break-all text-zinc-600 group-hover:text-brand-700 dark:text-zinc-400 dark:group-hover:text-brand-300">
                  github.com/jadoo21
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal>
            <a
              href={siteConfig.resumeUrl}
              className="card-surface group flex h-full flex-col gap-3 p-7 transition-shadow hover:shadow-card-hover"
              download
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                <Download className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
                  Resume
                </h2>
                <p className="mt-1 font-mono text-sm text-zinc-600 group-hover:text-brand-700 dark:text-zinc-400 dark:group-hover:text-brand-300">
                  Rishabh-Roshan-Resume.pdf
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <div className="card-surface h-full p-7 sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                Quick response is the plan
              </h2>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                I reply to email within a day or two for straightforward inquiries.
                For recruiting, include the scope of the role and the stack and
                I&apos;ll answer with relevant experience. For interesting
                engineering problems, include as much context as you can.
              </p>
              <p className="mt-4 flex items-center gap-1.5 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {siteConfig.location} · open to hybrid and remote
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}