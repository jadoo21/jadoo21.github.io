import { useId } from "react";
import { cn } from "../../lib/cn";
import { logoBodies } from "../../data/techLogos";

interface TechMarkProps {
  slug: string;
  label: string;
  className?: string;
}

function namespaceIds(body: string, uid: string): string {
  return body
    .replace(/id="([^"]+)"/g, (_, id: string) => `id="${uid}-${id}"`)
    .replace(/url\(#([^)]+)\)/g, (_, id: string) => `url(#${uid}-${id})`);
}

export function TechMark({ slug, label, className }: TechMarkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const source = logoBodies[slug];
  if (!source) return null;

  return (
    <svg
      viewBox={source.viewBox}
      role="img"
      aria-label={`${label} logo`}
      className={cn("shrink-0", className)}
      dangerouslySetInnerHTML={{ __html: namespaceIds(source.body, uid) }}
    />
  );
}

function monogramOf(name: string): string {
  const cleaned = name.replace(/[^a-z0-9#]/gi, "");
  if (cleaned.length <= 3) return cleaned.toUpperCase();
  return cleaned.slice(0, 2).toUpperCase();
}

interface TechLogoProps {
  name: string;
  slug: string;
  hasLogo: boolean;
  className?: string;
}

export function TechLogo({ name, slug, hasLogo, className }: TechLogoProps) {
  if (hasLogo && logoBodies[slug]) {
    return (
      <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-zinc-200 dark:ring-zinc-700", className)}>
        <TechMark slug={slug} label={name} className="h-4 w-4" />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 font-mono text-[10px] font-semibold text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
        className,
      )}
    >
      {monogramOf(name)}
    </span>
  );
}