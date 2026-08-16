import { KeyRound, LoaderCircle, Lock, LogOut, ShieldCheck, User } from "lucide-react";
import { useState } from "react";
import { mockCredentials } from "../../../data/lab";

type SessionState = "guest" | "authenticating" | "authenticated";

export function AuthDemo() {
  const [state, setState] = useState<SessionState>("guest");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setState("authenticating");
    window.setTimeout(() => {
      const emailMatches =
        email.trim().toLowerCase() === mockCredentials.email.toLowerCase();
      const passwordMatches = password === mockCredentials.password;
      if (emailMatches && passwordMatches) {
        setState("authenticated");
      } else {
        setError("Invalid credentials. Use the demo credentials shown below.");
        setState("guest");
      }
    }, 600);
  };

  const logout = () => {
    setState("guest");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="flex flex-col">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">Session</p>
          <span
            className={
              state === "authenticated"
                ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-2xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-900"
                : "inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-0.5 text-2xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
            }
          >
            <span
              aria-hidden="true"
              className={
                state === "authenticated"
                  ? "h-1.5 w-1.5 rounded-full bg-emerald-500"
                  : "h-1.5 w-1.5 rounded-full bg-zinc-400"
              }
            />
            {state === "authenticated"
              ? "Authenticated"
              : state === "authenticating"
                ? "Checking…"
                : "Guest"}
          </span>
        </div>

        {state === "authenticated" ? (
          <div className="flex flex-1 flex-col rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <h4 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">
              You&apos;re signed in
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Protected content is only rendered while the session state exists. In a
              real app this is wired to a route guard — unauthenticated users get
              redirected to the login screen, exactly like this lab does.
            </p>
            <div className="mt-4 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 font-mono text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              <p>session.user = {email}</p>
              <p>session.expires = 30 min (simulated)</p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="mt-auto inline-flex items-center gap-1.5 self-start rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Log out
            </button>
          </div>
        ) : (
          <form
            onSubmit={login}
            className="flex flex-1 flex-col gap-4 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <div>
              <label
                htmlFor="auth-email"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <div className="relative">
                <User
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
                <input
                  id="auth-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={mockCredentials.email}
                  className="w-full rounded-lg border border-zinc-300 bg-white py-2 pl-9 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="auth-password"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
                <input
                  id="auth-password"
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-zinc-300 bg-white py-2 pl-9 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
              </div>
            </div>

            {error ? (
              <p
                role="alert"
                className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={state === "authenticating"}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state === "authenticating" ? (
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <KeyRound className="h-4 w-4" aria-hidden="true" />
              )}
              {state === "authenticating" ? "Signing in…" : "Sign in"}
            </button>

            <div className="rounded-lg border border-dashed border-zinc-300 px-3 py-2.5 font-mono text-2xs leading-relaxed text-zinc-500 dark:border-zinc-700 dark:text-zinc-500">
              <p className="font-semibold text-zinc-600 dark:text-zinc-400">
                Demo credentials
              </p>
              <p>email: {mockCredentials.email}</p>
              <p>password: {mockCredentials.password}</p>
            </div>
          </form>
        )}
      </div>

      <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
          How it&apos;s wired
        </h4>
        <ol className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 font-mono text-2xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              1
            </span>
            Login form validates credentials against a mocked backend.
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 font-mono text-2xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              2
            </span>
            On success the session state flips to authenticated; on failure an error
            surfaces.
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 font-mono text-2xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              3
            </span>
            Protected content only renders while a session exists — the same guard that
            protects a route.
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 font-mono text-2xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              4
            </span>
            Logout clears session state and returns to the guest view.
          </li>
        </ol>
      </div>
    </div>
  );
}
