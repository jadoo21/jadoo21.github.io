import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({ title: formatPageMeta("Page Not Found") });

  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          The URL you followed isn&apos;t part of this site. The work and the
          engineering sections probably have what you&apos;re looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/">Back home</Button>
          <Button to="/work" variant="secondary">
            Explore the work
          </Button>
        </div>
      </div>
    </Container>
  );
}
