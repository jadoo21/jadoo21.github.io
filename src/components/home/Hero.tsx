import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { siteConfig } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const hasGithub = siteConfig.github.length > 0;

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section aria-label="Introduction" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-600/15"
      />

      <Container className="pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="max-w-3xl">
          <motion.p {...fadeIn(0)} className="eyebrow mb-5">
            {siteConfig.title} · {siteConfig.location}
          </motion.p>

          <motion.h1
            {...fadeIn(0.05)}
            className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Rishabh Roshan
          </motion.h1>

          <motion.p
            {...fadeIn(0.1)}
            className="mt-3 font-mono text-sm text-brand-700 sm:text-base dark:text-brand-400"
          >
            {siteConfig.positioning.join("  •  ")}
          </motion.p>

          <motion.p
            {...fadeIn(0.15)}
            className="mt-6 max-w-prose text-balance text-xl font-medium leading-snug text-zinc-900 sm:text-2xl dark:text-zinc-100"
          >
            I build production-grade enterprise applications across the frontend,
            backend and cloud.
          </motion.p>

          <motion.p
            {...fadeIn(0.2)}
            className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            {...fadeIn(0.25)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button to="/work" size="lg">
              Explore My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={siteConfig.resumeUrl} size="lg" variant="secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div {...fadeIn(0.3)} className="mt-8 flex items-center gap-4">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            {hasGithub ? (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            ) : null}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
