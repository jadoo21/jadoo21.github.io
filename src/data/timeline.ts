import type { TimelineEntry } from "../types";

/**
 * Career timeline.
 *
 * Dates are centralized here so they are easy to update.
 * Keyloop: Jul 2025 – Present (current)
 * Tally Group: Nov 2023 – Jul 2025
 * NCR Corporation: Mar 2021 – Nov 2023
 */
export const timeline: TimelineEntry[] = [
  {
    company: "Keyloop",
    role: "Software Engineer 2",
    location: "Hyderabad, India",
    period: "Jul 2025 – Present",
    current: true,
    summary:
      "Technical owner/contributor for Keyloop ePayments — a distributed payment platform for automotive dealerships spanning payment orchestration, settlement and communication services.",
  },
  {
    company: "Tally Group",
    role: "Developer",
    location: "Hyderabad, India",
    period: "Nov 2023 – Jul 2025",
    current: false,
    summary:
      "Worked across frontend, backend and cloud on TALLY CIS, an enterprise SaaS platform for energy retailers built with React, TypeScript, .NET and Azure.",
  },
  {
    company: "NCR Corporation",
    role: "Software Engineer I",
    location: "Hyderabad, India",
    period: "Mar 2021 – Nov 2023",
    current: false,
    summary:
      "Built and maintained features for an enterprise retail platform — API development, React UI, testing and reliability on a C#/.NET stack.",
  },
];