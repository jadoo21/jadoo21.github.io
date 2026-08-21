import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, navLinks } from "../../data/site";
import { Container } from "../layout/Container";

export function Footer() {
  const hasGithub = siteConfig.github.length > 0;

  return (
    <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              {siteConfig.name}
            </p>
            <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
              {siteConfig.title}
            </p>
            <p className="mt-2 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
              React • TypeScript • .NET • Cloud
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            {hasGithub ? (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center dark:border-zinc-800">
          <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
            Built with React, TypeScript &amp; Tailwind
          </p>
        </div>
      </Container>
    </footer>
  );
}
