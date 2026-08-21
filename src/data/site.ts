export const siteConfig = {
  name: "Rishabh Roshan",
  title: "Software Engineer",
  location: "Hyderabad, India",
  email: "rishabh.sanjiv@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishabh-roshan/",
  github: "https://github.com/jadoo21",
  resumeUrl: "/Rishabh-Roshan-Resume.pdf",
  photoUrl: "/images/rishabh-roshan.png",
  url: "https://rishabhroshan.dev",
  positioning: ["React", "TypeScript", ".NET", "AWS"],
  tagline: "Building systems that scale.",
  description:
    "Rishabh Roshan is a Software Engineer specializing in React, TypeScript, .NET, cloud platforms and distributed systems.",
  about:
    "I'm a full-stack software engineer who enjoys working across frontend experiences, backend services and cloud infrastructure.",
} as const;

export const navLinks = [
  { to: "/experience", label: "Experience" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

/**
 * Earliest professional experience (NCR Corporation). The career snapshot
 * derives the "X+ Years" metric from this date so it stays current without
 * hard-coding a value. The resume PDF is expected at `/public/Rishabh-Roshan-Resume.pdf`.
 */
export const careerStartDate = new Date("2021-03-01");

/** Rounded, recruiter-friendly label like "5+". */
export function yearsExperience(): string {
  const now = new Date();
  let years = now.getUTCFullYear() - careerStartDate.getUTCFullYear();
  const beforeAnniversary =
    now.getUTCMonth() < careerStartDate.getUTCMonth() ||
    (now.getUTCMonth() === careerStartDate.getUTCMonth() &&
      now.getUTCDate() < careerStartDate.getUTCDate());
  if (beforeAnniversary) years -= 1;
  return `${years}+`;
}