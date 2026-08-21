import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { PageHeader } from "../components/layout/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function Work() {
  usePageMeta({
    title: formatPageMeta("Work"),
    description:
      "Selected personal projects and technical explorations by Rishabh Roshan, a full-stack software engineer.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="Work"
          title="Work"
          description="Selected personal projects and technical explorations will appear here."
        />

        <Reveal>
          <div className="card-surface mb-20 flex flex-col items-start gap-3 p-8 sm:p-12">
            <h2 className="text-balance text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
              Coming soon.
            </h2>
            <p className="max-w-prose text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m focused on shipping production software right now. Personal
              projects, technical write-ups and side explorations will be shared
              here as they take shape.
            </p>
          </div>
        </Reveal>
      </Container>
      <Cta />
    </>
  );
}