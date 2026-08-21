import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { PageHeader } from "../components/layout/PageHeader";
import { DetailedTimeline } from "../components/experience/DetailedTimeline";
import { yearsExperience } from "../data/site";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function Experience() {
  usePageMeta({
    title: formatPageMeta("Experience"),
    description:
      "Professional experience at Keyloop (ePayments), Tally Group (TALLY CIS) and NCR Corporation — React, TypeScript, .NET, AWS and distributed systems.",
  });

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="Career"
          title="Experience"
          description={`From enterprise retail to distributed payments — the roles, systems and engineering behind ${yearsExperience()} years across the stack.`}
        />

        <div className="pb-20 sm:pb-24">
          <DetailedTimeline />
        </div>
      </Container>
      <Cta />
    </>
  );
}