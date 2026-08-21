import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "../components/layout/Container";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { siteConfig } from "../data/site";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

interface ContactCardProps {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  download?: boolean;
  external?: boolean;
}

function ContactCard({
  href,
  icon,
  label,
  value,
  download,
  external,
}: ContactCardProps) {
  return (
    <Reveal>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="card-surface group flex h-full flex-col gap-3 p-7 transition-shadow hover:shadow-card-hover"
        download={download}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
          {icon}
        </span>
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
            {label}
          </h2>
          <p className="mt-1 font-mono text-sm break-all text-zinc-600 group-hover:text-brand-700 dark:text-zinc-400 dark:group-hover:text-brand-300">
            {value}
          </p>
        </div>
      </a>
    </Reveal>
  );
}

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
          <ContactCard
            href={`mailto:${siteConfig.email}`}
            icon={<Mail className="h-5 w-5" aria-hidden="true" />}
            label="Email"
            value={siteConfig.email}
          />
          <ContactCard
            href={siteConfig.linkedin}
            icon={<Linkedin className="h-5 w-5" aria-hidden="true" />}
            label="LinkedIn"
            value="linkedin.com/in/rishabh-roshan"
            external
          />
          <ContactCard
            href={siteConfig.github}
            icon={<Github className="h-5 w-5" aria-hidden="true" />}
            label="GitHub"
            value="github.com/jadoo21"
            external
          />
          <ContactCard
            href={siteConfig.resumeUrl}
            icon={<Download className="h-5 w-5" aria-hidden="true" />}
            label="Resume"
            value="Rishabh-Roshan-Resume.pdf"
            download
          />

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