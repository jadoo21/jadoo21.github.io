interface CodeBlockProps {
  code: string;
  label?: string;
}

export function CodeBlock({ code, label }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-zinc-800">
      {label ? (
        <figcaption className="border-b border-zinc-800 bg-zinc-900 px-4 py-2 font-mono text-2xs text-zinc-400">
          {label}
        </figcaption>
      ) : null}
      <pre className="code-block overflow-x-auto rounded-t-none border-0">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
