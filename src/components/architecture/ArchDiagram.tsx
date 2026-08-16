import { useCallback, useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";
import type { ArchitectureDetail, ArchitectureNode } from "../../types";
import { cn } from "../../lib/cn";
import { ArchNode } from "./ArchNode";

interface ArchDiagramProps {
  /** All nodes in the diagram. */
  nodes: ArchitectureNode[];
  /** Grid layout: rows of node ids, top to bottom. */
  rows: string[][];
  /** Detailed content keyed by node id, shown when a node is selected. */
  details: Record<string, ArchitectureDetail>;
  /** Optional caption rendered under the diagram (e.g. anonymization note). */
  note?: string;
}

interface Path {
  key: string;
  d: string;
  marker: boolean;
}

export function ArchDiagram({ nodes, rows, details, note }: ArchDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [paths, setPaths] = useState<Path[]>([]);
  const [selectedId, setSelectedId] = useState<string>(rows[0]?.[0] ?? "");

  const setNodeRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) nodeRefs.current.set(id, el);
    else nodeRefs.current.delete(id);
  }, []);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const nextPaths: Path[] = [];

      for (let r = 0; r < rows.length - 1; r++) {
        const fromIds = rows[r] ?? [];
        const toIds = rows[r + 1] ?? [];
        if (fromIds.length < 1 || toIds.length < 1) continue;

        const fromPoints = fromIds
          .map((id) => nodeRefs.current.get(id)?.getBoundingClientRect())
          .filter((rect): rect is DOMRect => Boolean(rect))
          .map((rect) => ({
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.bottom - 4 - containerRect.top,
          }));

        const toPoints = toIds
          .map((id) => nodeRefs.current.get(id)?.getBoundingClientRect())
          .filter((rect): rect is DOMRect => Boolean(rect))
          .map((rect) => ({
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + 6 - containerRect.top,
          }));

        if (fromPoints.length === 0 || toPoints.length === 0) continue;

        if (fromPoints.length === 1 && toPoints.length === 1) {
          const from = fromPoints[0]!;
          const to = toPoints[0]!;
          nextPaths.push({
            key: `v-${r}`,
            d: `M ${from.x} ${from.y} L ${to.x} ${to.y}`,
            marker: true,
          });
        } else if (fromPoints.length === 1) {
          const fx = fromPoints[0]!.x;
          const fy = fromPoints[0]!.y;
          for (const to of toPoints) {
            const midY = (fy + to.y) / 2;
            nextPaths.push({
              key: `f-${r}-${to.x}`,
              d: `M ${fx} ${fy} L ${fx} ${midY} L ${to.x} ${midY} L ${to.x} ${to.y}`,
              marker: true,
            });
          }
        } else if (toPoints.length === 1) {
          const tx = toPoints[0]!.x;
          const ty = toPoints[0]!.y;
          for (let i = 0; i < fromPoints.length; i++) {
            const from = fromPoints[i];
            if (!from) continue;
            const midY = (from.y + ty) / 2;
            nextPaths.push({
              key: `m-${r}-${i}`,
              d: `M ${from.x} ${from.y} L ${from.x} ${midY} L ${tx} ${midY} L ${tx} ${ty}`,
              marker: true,
            });
          }
        }
      }

      setPaths(nextPaths);
    };

    measure();
    window.addEventListener("resize", measure);
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [rows]);

  const selected = nodes.find((node) => node.id === selectedId);
  const selectedDetail = selectedId ? details[selectedId] : undefined;

  return (
    <div>
      <div ref={containerRef} className="relative">
        <div className="relative z-10">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col">
              <div className="flex flex-wrap items-stretch gap-2 sm:gap-3 sm:justify-center">
                {row.map((id) => {
                  const node = nodes.find((n) => n.id === id);
                  if (!node) return null;
                  return (
                    <div
                      key={id}
                      ref={(el) => setNodeRef(id, el)}
                      className={
                        row.length > 1
                          ? cn(
                              "min-w-0",
                              row.length === 2 &&
                                "flex-1 basis-[calc(50%-8px)] sm:basis-0",
                              row.length > 2 && "flex-1 basis-full sm:basis-0",
                            )
                          : "w-full max-w-[360px] mx-auto"
                      }
                    >
                      <ArchNode
                        id={node.id}
                        title={node.title}
                        subtitle={node.subtitle}
                        selected={selectedId === node.id}
                        onSelect={setSelectedId}
                      />
                    </div>
                  );
                })}
              </div>
              {rowIndex < rows.length - 1 ? (
                <div
                  key={`${rowIndex}-gap`}
                  aria-hidden="true"
                  className="h-8 sm:h-10"
                />
              ) : null}
            </div>
          ))}
        </div>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        >
          <defs>
            <marker
              id="arch-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" />
            </marker>
          </defs>
          <g className="text-zinc-400 dark:text-zinc-600">
            {paths.map((path) => (
              <path
                key={path.key}
                d={path.d}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                markerEnd={path.marker ? "url(#arch-arrow)" : undefined}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="mt-4 min-h-[110px] rounded-lg border border-brand-200 bg-brand-50/60 p-4 sm:p-5 dark:border-brand-900 dark:bg-brand-950/40">
        {selected && selectedDetail ? (
          <>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-brand-800 dark:text-brand-300">
              <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
              {selectedDetail.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {selectedDetail.body}
            </p>
          </>
        ) : (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Select a component to see how it fits into the system.
          </p>
        )}
      </div>

      {note ? (
        <p className="mt-4 font-mono text-2xs leading-snug text-zinc-500 dark:text-zinc-500">
          {note}
        </p>
      ) : null}
    </div>
  );
}
