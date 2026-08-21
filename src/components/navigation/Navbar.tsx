import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { siteConfig } from "../../data/site";
import { useScrolled } from "../../hooks/useScrolled";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";

const navLinks = [
  { to: "/experience", label: "Experience" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavLinkItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "rounded-md px-3 py-1.5 text-sm transition-colors",
          isActive
            ? "font-medium text-zinc-900 dark:text-white"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
        )
      }
    >
      {label}
    </NavLink>
  );
}

export function Navbar() {
  const scrolled = useScrolled(10);
  const { theme, toggleTheme } = useTheme();
  const hasGithub = siteConfig.github.length > 0;
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between"
      >
        <Link
          to="/"
          aria-label="Rishabh Roshan — Software Engineer"
          className="flex items-center gap-2 rounded-md font-semibold tracking-tight text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:text-white"
        >
          <img
            src="/images/logo.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-8"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLinkItem key={link.to} to={link.to} label={link.label} />
          ))}
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {hasGithub ? (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <Button
            href={siteConfig.resumeUrl}
            download
            size="sm"
            className="ml-2"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </Button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className="ml-1 rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[60] bg-zinc-950/60 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: reduceMotion ? 0 : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 top-0 flex h-full w-[280px] flex-col border-l border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                  <img
                    src="/images/logo.png"
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6"
                  />
                  Software Engineer
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                {[{ to: "/", label: "Home" }, ...navLinks].map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "rounded-md px-3 py-2.5 text-base",
                        isActive
                          ? "bg-brand-50 font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                          : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2.5 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <Button to="/contact">Get in Touch</Button>
                <Button
                  href={siteConfig.resumeUrl}
                  variant="secondary"
                  download
                  aria-label="Download resume"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume
                </Button>
                <div className="flex gap-2.5">
                  <Button
                    href={siteConfig.linkedin}
                    variant="secondary"
                    className="flex-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </Button>
                  {hasGithub ? (
                    <Button
                      href={siteConfig.github}
                      variant="secondary"
                      className="flex-1"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </Button>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}