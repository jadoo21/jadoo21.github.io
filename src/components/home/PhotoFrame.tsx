import { useState } from "react";
import { siteConfig } from "../../data/site";

export function PhotoFrame() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="relative mx-auto w-full max-w-[340px]">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-card dark:border-zinc-800 dark:bg-zinc-900">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 text-lg font-bold text-brand-700 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-300">
              RR
            </span>
            <p className="font-mono text-2xs leading-relaxed text-zinc-500 dark:text-zinc-500">
              Portrait placeholder.
              <br />
              Add <code className="rounded bg-white px-1 py-0.5 dark:bg-zinc-800">
                public/images/rishabh-roshan.jpg
              </code>
            </p>
          </div>
        ) : (
          <img
            src={siteConfig.photoUrl}
            alt="Rishabh Roshan — Software Engineer"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <figcaption className="mt-4 text-center">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          Rishabh Roshan
        </p>
        <p className="mt-0.5 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
          Software Engineer · Hyderabad, India
        </p>
      </figcaption>
    </figure>
  );
}