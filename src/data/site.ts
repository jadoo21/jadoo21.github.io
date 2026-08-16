export const siteConfig = {
  name: "Rishabh Roshan",
  title: "Software Engineer",
  location: "Hyderabad, India",
  email: "rishabh.sanjiv@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishabh-roshan/",
  github: "",
  resumeUrl: "/Rishabh-Roshan-Resume.pdf",
  url: "https://rishabhroshan.dev",
  positioning: ["React", "TypeScript", ".NET", "Azure"],
  tagline:
    "I build production-grade enterprise applications across the frontend, backend and cloud.",
  description:
    "Full-stack software engineer with experience building SaaS applications, REST APIs, microservices and cloud-based systems using React, TypeScript, .NET and Azure.",
  about:
    "I enjoy working across the stack — from frontend experiences and API design to distributed services, databases and cloud infrastructure.",
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
