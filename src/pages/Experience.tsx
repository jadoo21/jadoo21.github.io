import { CareerTimeline } from "../components/experience/CareerTimeline";
import { CompanyBlock } from "../components/experience/CompanyBlock";
import { KeyloopExperience } from "../components/experience/KeyloopExperience";
import { Container } from "../components/layout/Container";
import { Cta } from "../components/layout/Cta";
import { PageHeader } from "../components/layout/PageHeader";
import { experience } from "../data/experience";
import { yearsExperience } from "../data/site";
import { formatPageMeta, usePageMeta } from "../hooks/usePageMeta";

export default function Experience() {
  usePageMeta({
    title: formatPageMeta("Experience"),
    description:
      "Professional experience at Keyloop (ePayments), Tally Group (TALLY CIS) and NCR Corporation — React, TypeScript, .NET, AWS and distributed systems.",
  });

  const earlyRoles = experience.filter((item) => item.company !== "Keyloop");

  return (
    <>
      <Container>
        <PageHeader
          eyebrow="Career"
          title="Experience"
          description={`From enterprise retail to distributed payments — the roles, systems and engineering behind ${yearsExperience()} years across the stack.`}
        />

        <CareerTimeline />

        <div className="mt-16 pb-20 sm:pb-24">
          <KeyloopExperience />

          <div className="mt-10 space-y-6">
            {earlyRoles.map((item, index) => (
              <CompanyBlock key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>
      </Container>
      <Cta />
    </>
  );
}