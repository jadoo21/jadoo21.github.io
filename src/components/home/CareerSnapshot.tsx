import { yearsExperience } from "../../data/site";
import { Container } from "../layout/Container";
import { Reveal } from "../ui/Reveal";

const snapshot = [
  { value: "5+", label: "Years", sublabel: "Software Engineering" },
  { value: "3", label: "Companies", sublabel: "Enterprise Software" },
  { value: "Full Stack", label: "Development", sublabel: "React + .NET" },
  { value: "Cloud & Platform", label: "Engineering", sublabel: "AWS + Docker" },
];

export function CareerSnapshot() {
  const items = [{ ...snapshot[0]!, value: yearsExperience() }, ...snapshot.slice(1)];

  return (
    <section
      aria-label="Career snapshot"
      className="border-y border-zinc-200 dark:border-zinc-800"
    >
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden bg-zinc-200 md:grid-cols-4 dark:bg-zinc-800">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col justify-center gap-1 bg-white px-6 py-8 dark:bg-zinc-950">
                <dd className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-white">
                  {item.value}
                </dd>
                <dt className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.label}
                </dt>
                <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                  {item.sublabel}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
