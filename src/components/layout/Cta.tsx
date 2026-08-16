import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import { Reveal } from "../ui/Reveal";

export function Cta() {
  const hasGithub = siteConfig.github.length > 0;

  return (
    <section
      aria-label="Get in touch"
      className="border-t border-zinc-200 py-16 sm:py-20 dark:border-zinc-800"
    >
      <Container>
        <Reveal>
          <div className="card-surface flex flex-col items-start gap-8 p-8 sm:p-12">
            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                Building something interesting? Let&apos;s talk.
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-400">
                If you&apos;re working on a product that needs solid engineering across
                the stack — or you&apos;re hiring someone who thinks in systems —
                I&apos;d be glad to hear about it.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={siteConfig.linkedin}
                size="lg"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                Connect on LinkedIn
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                size="lg"
                variant="secondary"
                aria-label="Send email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Send Email
              </Button>
              {hasGithub ? (
                <Button
                  href={siteConfig.github}
                  size="lg"
                  variant="secondary"
                  aria-label="View GitHub profile"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View GitHub
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
