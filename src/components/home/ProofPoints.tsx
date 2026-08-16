import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../../hooks/useCountUp";
import { Container } from "../layout/Container";
import { Reveal } from "../ui/Reveal";

interface ProofPoint {
  value: string;
  stat?: number;
  label: string;
  sublabel: string;
}

const proofPoints: ProofPoint[] = [
  {
    value: "5+",
    stat: 5,
    label: "Years Experience",
    sublabel: "Professional software engineering",
  },
  {
    value: "React + TypeScript",
    label: "Frontend Engineering",
    sublabel: "Enterprise web applications",
  },
  {
    value: ".NET + C#",
    label: "Backend Engineering",
    sublabel: "APIs, services, data access",
  },
  {
    value: "Azure + Docker",
    label: "Cloud & Deployment",
    sublabel: "Hosting, messaging, containers",
  },
];

export function ProofPoints() {
  return (
    <section
      aria-label="Experience highlights"
      className="border-b border-zinc-200 py-10 dark:border-zinc-800"
    >
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 md:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-800">
          {proofPoints.map((point, index) => (
            <Reveal key={point.label} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-1 bg-white p-5 sm:p-6 dark:bg-zinc-900">
                <dd className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-white">
                  {point.stat !== undefined ? (
                    <StatNumber target={point.stat} suffix="+" />
                  ) : (
                    <span>{point.value}</span>
                  )}
                </dd>
                <dt className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {point.label}
                </dt>
                <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                  {point.sublabel}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function StatNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useCountUp(target, { start: inView });

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
