import { Check, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { keyloopRole, whatIWorkOn } from "../../data/keyloop";
import { experience } from "../../data/experience";
import { SectionHeader } from "../layout/SectionHeader";
import { Contributions } from "./Contributions";
import { OwnershipGrid } from "./OwnershipGrid";
import { TechnicalFocus } from "./TechnicalFocus";

export function KeyloopExperience() {
  const keyloop = experience.find((item) => item.company === "Keyloop");

  return (
    <div className="rounded-2xl border border-zinc-200 p-6 sm:p-10 dark:border-zinc-800">
      <SectionHeader
        eyebrow="Keyloop India · Engineering Applications — Team Fortis"
        title="ePayments Platform"
        description="A distributed system of 6+ payment-processing microservices. I function as a technical owner and contributor across the platform."
        action={
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-2xs font-medium text-brand-700 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-300">
            {keyloopRole} · Current
          </span>
        }
      />

      {keyloop ? (
        <div className="mb-10 flex flex-col gap-2 border-b border-zinc-100 pb-10 dark:border-zinc-800">
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {keyloop.summary}
          </p>
          <Link
            to="/work/keyloop-epayments-platform"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            ePayments platform case study
          </Link>
        </div>
      ) : null}

      <section aria-label="What I work on" className="mt-8">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
          What I Work On
        </h3>
        <ul className="mt-5 grid max-w-4xl gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {whatIWorkOn.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-50 dark:bg-brand-950"
              >
                <Check className="h-3 w-3 text-brand-600 dark:text-brand-400" />
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 inline-flex items-center gap-1 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          Hyderabad, India
        </p>
      </section>

      <OwnershipGrid />
      <Contributions />
      <TechnicalFocus />
    </div>
  );
}