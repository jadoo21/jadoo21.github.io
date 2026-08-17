import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CaseStudyBlocks } from "../components/projects/CaseStudyBlocks";
import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { Badge } from "../components/ui/Badge";
import { caseStudies } from "../data/caseStudies";
import { getProject, projects } from "../data/projects";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? caseStudies[slug] : undefined;
  const project = slug ? getProject(slug) : undefined;

  const caseStudyDescription =
    caseStudy?.blocks.find((block) => block.kind === "text")?.kind === "text"
      ? caseStudy.blocks.find((block) => block.kind === "text")!.paragraphs[0]
      : undefined;

  usePageMeta({
    title: caseStudy
      ? formatPageMeta(`${caseStudy.title} — ${caseStudy.subtitle}`)
      : formatPageMeta("Engineering Work"),
    description: caseStudyDescription,
  });

  if (!caseStudy || !project) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Container>
        <div className="pt-24 sm:pt-28">
          <div className="flex flex-wrap items-center gap-2 py-4 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
            <Link to="/work" className="hover:text-brand-600 dark:hover:text-brand-400">
              Work
            </Link>
            <span aria-hidden="true">/</span>
            <span>{project.title}</span>
          </div>
        </div>

        <header className="max-w-3xl py-10 sm:py-14">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">{caseStudy.subtitle}</p>
            <Badge tone="outline">
              <span className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400">
                <Briefcase className="h-3 w-3" aria-hidden="true" />
                Professional Experience
              </span>
            </Badge>
          </div>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            {caseStudy.title}
          </h1>

          {caseStudy.disclaimer ? (
            <p className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 font-mono text-2xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              {caseStudy.disclaimer}
            </p>
          ) : null}

          {project.technologies.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-2xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          <Link
            to="/work"
            className="mt-8 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All work
          </Link>
        </header>

        <div className="pb-20 sm:pb-24">
          <CaseStudyBlocks blocks={caseStudy.blocks} />

          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="card-surface group mt-16 flex items-center justify-between gap-4 p-6 transition-shadow hover:shadow-card-hover sm:p-8"
            >
              <div>
                <p className="font-mono text-2xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Next case study
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-400">
                  {next.title}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {next.tagline}
                </p>
              </div>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 dark:text-zinc-600"
                aria-hidden="true"
              />
            </Link>
          ) : null}
        </div>
      </Container>
      <Cta />
    </>
  );
}
