import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CareerTimeline } from "../experience/CareerTimeline";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SectionHeader } from "../layout/SectionHeader";

export function HomeExperience() {
  return (
    <Section
      ariaLabel="Career experience"
      className="border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800"
    >
      <Container>
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          description="A progression from enterprise retail through enterprise SaaS to distributed payment systems."
          action={
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              Full timeline
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          }
        />

        <CareerTimeline />
      </Container>
    </Section>
  );
}
