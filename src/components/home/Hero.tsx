import { motion, useReducedMotion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { heroTechnologies } from "../../data/technologies";
import { siteConfig } from "../../data/site";
import { TechBadgeBySlug } from "../technology/TechBadge";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { PhotoFrame } from "./PhotoFrame";

export function Hero() {
  const reduceMotion = useReducedMotion();

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

      <Container className="pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-16">
          <div>
            <motion.p {...fadeIn(0)} className="eyebrow mb-5">
              Software Engineer
            </motion.p>

            <motion.h1
              {...fadeIn(0.05)}
              className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              Building systems that scale.
            </motion.h1>

            <div className="mt-8 lg:hidden">
              <motion.div {...fadeIn(0.1)}>
                <PhotoFrame />
              </motion.div>
            </div>

            <motion.p
              {...fadeIn(0.1)}
              className="mt-6 max-w-prose text-balance text-lg font-medium leading-snug text-zinc-900 sm:text-xl dark:text-zinc-100"
            >
              Full-stack software engineer specializing in React, TypeScript, .NET
              and distributed systems.
            </motion.p>

            <motion.p
              {...fadeIn(0.15)}
              className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              I build enterprise applications across the frontend, backend and cloud
              — from React interfaces and APIs to microservices, messaging and
              production infrastructure.
            </motion.p>

            <motion.p
              {...fadeIn(0.2)}
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-2xs text-zinc-500 dark:text-zinc-500"
            >
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {siteConfig.location}
            </motion.p>

            <motion.div
              {...fadeIn(0.25)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button to="/experience" size="lg">
                View Experience
              </Button>
              <Button to="/work" size="lg" variant="secondary">
                View Work
              </Button>
              <Button href={siteConfig.resumeUrl} size="lg" variant="secondary" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              {...fadeIn(0.3)}
              aria-label="Primary technologies"
              className="mt-10 flex flex-wrap gap-2"
            >
              {heroTechnologies.map((slug) => (
                <TechBadgeBySlug
                  key={slug}
                  slug={slug}
                  showCategory
                  className="flex"
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            {...fadeIn(0.15)}
            className="hidden lg:block"
            aria-hidden="false"
          >
            <PhotoFrame />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}