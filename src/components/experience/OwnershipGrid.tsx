import { ownershipAreas } from "../../data/keyloop";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../layout/SectionHeader";

export function OwnershipGrid() {
  return (
    <section aria-label="Platform ownership" className="mt-16">
      <SectionHeader
        eyebrow="Ownership"
        title="Platform Ownership"
        description="Services and surfaces I own or contribute to across the ePayments platform."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ownershipAreas.map((area, index) => (
          <Reveal key={area.title} delay={index * 0.04} className="h-full">
            <Card className="flex h-full flex-col justify-center p-6">
              <h4 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                {area.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {area.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}