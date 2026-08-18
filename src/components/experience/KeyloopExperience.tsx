import { Check, MapPin } from "lucide-react";
import {
  howWeDeliver,
  keyloopRole,
  paymentProviders,
  whatIWorkOn,
} from "../../data/keyloop";
import { experience } from "../../data/experience";
import { SectionHeader } from "../layout/SectionHeader";
import { TechnicalFocus } from "./TechnicalFocus";
import { Tag } from "../ui/Tag";

export function KeyloopExperience() {
  const keyloop = experience.find((item) => item.company === "Keyloop");

  return (
    <div className="rounded-2xl border border-brand-500/40 bg-white p-6 shadow-card ring-1 ring-brand-500/20 sm:p-10 dark:border-brand-500/50 dark:bg-zinc-900 dark:ring-brand-500/20">
      <SectionHeader
        eyebrow="Keyloop · Current Role"
        title="Keyloop ePayments"
        description="Payment technology for automotive dealerships — a distributed platform for payment processing, provider integrations and dealer-facing tools."
        action={
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-2xs font-medium text-brand-700 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-300">
            {keyloopRole} · Current
          </span>
        }
      />

      {keyloop ? (
        <p className="mb-10 max-w-prose text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {keyloop.summary}
        </p>
      ) : null}

      <section aria-label="What I work on" className="mt-8">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
          What I Work On
        </h3>
        <ul className="mt-5 grid max-w-4xl gap-x-8 gap-y-5 sm:grid-cols-2">
          {whatIWorkOn.map((item) => (
            <li key={item.title} className="flex items-start gap-2.5 text-sm leading-relaxed">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-50 dark:bg-brand-950"
              >
                <Check className="h-3 w-3 text-brand-600 dark:text-brand-400" />
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">
                <span className="font-medium">{item.title}</span>
                <span className="mt-0.5 block text-zinc-600 dark:text-zinc-400">
                  {item.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 inline-flex items-center gap-1 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          Hyderabad, India
        </p>
      </section>

      <section aria-label="Payment integrations" className="mt-12">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
          Payment Integrations
        </h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Experience integrating payment-provider workflows across the ePayments
          platform, including:
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {paymentProviders.map((provider) => (
            <li key={provider}>
              <Tag className="px-2.5 py-1 text-2xs">{provider}</Tag>
            </li>
          ))}
        </ul>
      </section>

      <TechnicalFocus />

      <section aria-label="How we deliver" className="mt-12">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
          How We Deliver
        </h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Working within a SAFe Agile environment with PI Planning and
          sprint-based delivery, collaborating across engineering and product
          teams from planning through production.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {howWeDeliver.map((item) => (
            <li key={item}>
              <Tag className="px-2.5 py-1 text-2xs">{item}</Tag>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}