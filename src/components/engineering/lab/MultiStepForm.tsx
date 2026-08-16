import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../lib/cn";

type StepKey = "personal" | "address" | "details" | "confirmation";

interface StepMeta {
  key: StepKey;
  label: string;
}

const steps: StepMeta[] = [
  { key: "personal", label: "Personal" },
  { key: "address", label: "Address" },
  { key: "details", label: "Details" },
  { key: "confirmation", label: "Confirmation" },
];

interface Personal {
  fullName: string;
  email: string;
  phone: string;
}

interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface Details {
  role: string;
  company: string;
  notes: string;
}

interface FormErrors {
  personal: Partial<Record<keyof Personal, string>>;
  address: Partial<Record<keyof Address, string>>;
  details: Partial<Record<keyof Details, string>>;
  confirmation: { agree?: string };
}

const emptyPersonal: Personal = { fullName: "", email: "", phone: "" };
const emptyAddress: Address = { street: "", city: "", postalCode: "" };
const emptyDetails: Details = { role: "", company: "", notes: "" };

function validatePersonal(data: Personal): Partial<Record<keyof Personal, string>> {
  const errors: Partial<Record<keyof Personal, string>> = {};
  if (data.fullName.trim().length < 3) errors.fullName = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";
  if (data.phone && !/^\+?[0-9\s-]{7,15}$/.test(data.phone))
    errors.phone = "Enter a valid phone number.";
  return errors;
}

function validateAddress(data: Address): Partial<Record<keyof Address, string>> {
  const errors: Partial<Record<keyof Address, string>> = {};
  if (data.street.trim().length < 4) errors.street = "Enter your street address.";
  if (data.city.trim().length < 2) errors.city = "Enter your city.";
  if (!/^[0-9A-Za-z\s-]{4,10}$/.test(data.postalCode.trim()))
    errors.postalCode = "Enter a valid postal code.";
  return errors;
}

function validateDetails(data: Details): Partial<Record<keyof Details, string>> {
  const errors: Partial<Record<keyof Details, string>> = {};
  if (!data.role) errors.role = "Select a role.";
  return errors;
}

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100";

function LabeledField({
  label,
  id,
  error,
  children,
  optional = false,
}: {
  label: string;
  id: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-zinc-400">(optional)</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function MultiStepForm() {
  const [current, setCurrent] = useState(0);
  const [personal, setPersonal] = useState<Personal>(emptyPersonal);
  const [address, setAddress] = useState<Address>(emptyAddress);
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    personal: {},
    address: {},
    details: {},
    confirmation: {},
  });
  const [submitted, setSubmitted] = useState(false);

  const stepKeys: StepKey[] = ["personal", "address", "details", "confirmation"];
  const currentKey = stepKeys[current] ?? "personal";

  const validateStep = (key: StepKey): boolean => {
    let nextErrors:
      FormErrors["personal"] | FormErrors["address"] | FormErrors["details"] = {};
    if (key === "personal") nextErrors = validatePersonal(personal);
    if (key === "address") nextErrors = validateAddress(address);
    if (key === "details") nextErrors = validateDetails(details);
    setErrors((currentErrors) => ({ ...currentErrors, [key]: nextErrors }));
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (currentKey === "confirmation") {
      if (!agree) {
        setErrors((e) => ({
          ...e,
          confirmation: { agree: "You must agree to continue." },
        }));
        return;
      }
      setSubmitted(true);
      return;
    }
    if (!validateStep(currentKey)) return;
    setCurrent((step) => Math.min(step + 1, steps.length - 1));
  };

  const goBack = () => {
    setCurrent((step) => Math.max(step - 1, 0));
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-900 dark:bg-emerald-950/40">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Submission received
        </h4>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          This is a demo form, so nothing was sent anywhere. It demonstrates validation
          across steps, a review screen and a guarded submission.
        </p>
        <button
          type="button"
          onClick={() => {
            setPersonal(emptyPersonal);
            setAddress(emptyAddress);
            setDetails(emptyDetails);
            setAgree(false);
            setErrors({ personal: {}, address: {}, details: {}, confirmation: {} });
            setSubmitted(false);
            setCurrent(0);
          }}
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <ol className="flex items-center gap-1.5 sm:gap-2" aria-label="Form progress">
        {steps.map((step, index) => {
          const isDone = index < current || submitted;
          const isCurrent = index === current;
          return (
            <li
              key={step.key}
              className="flex flex-1 flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-2"
            >
              <button
                type="button"
                onClick={() => index < current && setCurrent(index)}
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-full px-1 text-2xs font-medium sm:px-2 sm:text-xs",
                  isCurrent
                    ? "text-brand-700 dark:text-brand-400"
                    : isDone
                      ? "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                      : "text-zinc-400 dark:text-zinc-600",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full border text-2xs font-semibold",
                    isCurrent
                      ? "border-brand-600 bg-brand-600 text-white"
                      : isDone
                        ? "border-brand-200 bg-brand-50 text-brand-600 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-400"
                        : "border-zinc-300 text-zinc-500 dark:border-zinc-700",
                  )}
                >
                  {isDone ? (
                    <Check className="h-3 w-3" aria-hidden="true" />
                  ) : (
                    index + 1
                  )}
                </span>
                {step.label}
              </button>
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "hidden h-px flex-1 sm:block",
                    isDone
                      ? "bg-brand-300 dark:bg-brand-800"
                      : "bg-zinc-200 dark:bg-zinc-800",
                  )}
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <div>
        {currentKey === "personal" ? (
          <div className="grid gap-4">
            <LabeledField
              label="Full name"
              id="fs-fullname"
              error={errors.personal.fullName}
            >
              <input
                id="fs-fullname"
                className={inputClass}
                value={personal.fullName}
                onChange={(event) =>
                  setPersonal((d) => ({ ...d, fullName: event.target.value }))
                }
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </LabeledField>
            <LabeledField label="Email" id="fs-email" error={errors.personal.email}>
              <input
                id="fs-email"
                type="email"
                className={inputClass}
                value={personal.email}
                onChange={(event) =>
                  setPersonal((d) => ({ ...d, email: event.target.value }))
                }
                placeholder="jane@example.com"
                autoComplete="email"
              />
            </LabeledField>
            <LabeledField
              label="Phone"
              id="fs-phone"
              error={errors.personal.phone}
              optional
            >
              <input
                id="fs-phone"
                type="tel"
                className={inputClass}
                value={personal.phone}
                onChange={(event) =>
                  setPersonal((d) => ({ ...d, phone: event.target.value }))
                }
                placeholder="+1 555 000 1234"
                autoComplete="tel"
              />
            </LabeledField>
          </div>
        ) : null}

        {currentKey === "address" ? (
          <div className="grid gap-4">
            <LabeledField label="Street" id="fs-street" error={errors.address.street}>
              <input
                id="fs-street"
                className={inputClass}
                value={address.street}
                onChange={(event) =>
                  setAddress((d) => ({ ...d, street: event.target.value }))
                }
                placeholder="12 Example Street"
                autoComplete="street-address"
              />
            </LabeledField>
            <div className="grid gap-4 sm:grid-cols-2">
              <LabeledField label="City" id="fs-city" error={errors.address.city}>
                <input
                  id="fs-city"
                  className={inputClass}
                  value={address.city}
                  onChange={(event) =>
                    setAddress((d) => ({ ...d, city: event.target.value }))
                  }
                  placeholder="Hyderabad"
                  autoComplete="address-level2"
                />
              </LabeledField>
              <LabeledField
                label="Postal code"
                id="fs-postal"
                error={errors.address.postalCode}
              >
                <input
                  id="fs-postal"
                  className={inputClass}
                  value={address.postalCode}
                  onChange={(event) =>
                    setAddress((d) => ({ ...d, postalCode: event.target.value }))
                  }
                  placeholder="500081"
                  autoComplete="postal-code"
                />
              </LabeledField>
            </div>
          </div>
        ) : null}

        {currentKey === "details" ? (
          <div className="grid gap-4">
            <LabeledField label="Role" id="fs-role" error={errors.details.role}>
              <select
                id="fs-role"
                className={inputClass}
                value={details.role}
                onChange={(event) =>
                  setDetails((d) => ({ ...d, role: event.target.value }))
                }
              >
                <option value="">Select a role…</option>
                <option value="engineer">Software Engineer</option>
                <option value="lead">Engineering Lead</option>
                <option value="pm">Product Manager</option>
                <option value="designer">Designer</option>
              </select>
            </LabeledField>
            <LabeledField label="Company" id="fs-company" optional>
              <input
                id="fs-company"
                className={inputClass}
                value={details.company}
                onChange={(event) =>
                  setDetails((d) => ({ ...d, company: event.target.value }))
                }
                placeholder="Acme Inc."
              />
            </LabeledField>
            <LabeledField label="Notes" id="fs-notes" optional>
              <textarea
                id="fs-notes"
                rows={3}
                className={inputClass}
                value={details.notes}
                onChange={(event) =>
                  setDetails((d) => ({ ...d, notes: event.target.value }))
                }
                placeholder="Anything else we should know?"
              />
            </LabeledField>
          </div>
        ) : null}

        {currentKey === "confirmation" ? (
          <div className="space-y-5">
            <dl className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              <ReviewRow label="Name" value={personal.fullName || "—"} />
              <ReviewRow label="Email" value={personal.email || "—"} />
              <ReviewRow label="Phone" value={personal.phone || "—"} />
              <ReviewRow
                label="Address"
                value={
                  `${address.street}, ${address.city} ${address.postalCode}`.trim() ||
                  "—"
                }
              />
              <ReviewRow label="Role" value={details.role || "—"} />
              <ReviewRow label="Company" value={details.company || "—"} />
            </dl>
            <label className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <input
                type="checkbox"
                checked={agree}
                onChange={(event) => setAgree(event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-zinc-300 accent-brand-600"
              />
              <span>I confirm the details above are correct before submitting.</span>
            </label>
            {errors.confirmation.agree ? (
              <p role="alert" className="text-xs text-rose-600 dark:text-rose-400">
                {errors.confirmation.agree}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between border-t border-zinc-200 pt-5 dark:border-zinc-800">
        <button
          type="button"
          onClick={goBack}
          disabled={current === 0}
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <button
          type="button"
          onClick={goNext}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          {currentKey === "confirmation" ? "Submit" : "Continue"}
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 px-4 py-2.5">
      <dt className="text-sm text-zinc-500 dark:text-zinc-400">{label}</dt>
      <dd className="text-right text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {value}
      </dd>
    </div>
  );
}
