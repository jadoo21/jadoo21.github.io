import { useEffect } from "react";
import { siteConfig } from "../data/site";

interface PageMetaOptions {
  title: string;
  description?: string;
}

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (!description) return;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [description]);
}

export function formatPageMeta(title: string): string {
  return `${title} | ${siteConfig.name}`;
}
