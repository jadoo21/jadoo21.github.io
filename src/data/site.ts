export const siteConfig = {
  name: "Rishabh Roshan",
  title: "Software Engineer",
  location: "Hyderabad, India",
  email: "rishabh.sanjiv@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishabh-roshan/",
  github: "",
  resumeUrl: "/Rishabh-Roshan-Resume.pdf",
  photoUrl: "/images/rishabh-roshan.jpg",
  url: "https://rishabhroshan.dev",
  positioning: ["React", "TypeScript", ".NET", "AWS"],
  tagline: "Building systems that scale.",
  description:
    "Rishabh Roshan is a Software Engineer specializing in React, TypeScript, .NET, cloud platforms and distributed systems.",
  about:
    "I'm a full-stack software engineer who enjoys working across frontend experiences, backend services and cloud infrastructure.",
  yearsExperience: "5+",
} as const;

const missingConfig: string[] = [];
if (!siteConfig.github) {
  missingConfig.push("siteConfig.github");
}

if (missingConfig.length > 0) {
  console.info(
    `[portfolio] Placeholder config values pending: ${missingConfig.join(", ")}`,
  );
}