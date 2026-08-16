import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  RotateCw,
  Search,
  TriangleAlert,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { customers, type Customer } from "../../../data/lab";
import { cn } from "../../../lib/cn";

type Phase = "loading" | "ready" | "error";
type SortKey = "name" | "email" | "company" | "status";
type StatusFilter = "All" | Customer["status"];
const PAGE_SIZE = 6;

interface DataTableProps {
  errorRate?: number;
}

const statusStyles: Record<Customer["status"], string> = {
  Active:
    "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-900",
  Pending:
    "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:ring-amber-900",
  Suspended:
    "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:ring-rose-900",
};

const columns: { key: SortKey; label: string; sortable: boolean }[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "company", label: "Company", sortable: true },
  { key: "status", label: "Status", sortable: true },
];

export function DataTable({ errorRate = 0.12 }: DataTableProps) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("All");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const fetchData = useCallback(() => {
    setPhase("loading");
    setPage(1);
    window.setTimeout(() => {
      if (Math.random() < errorRate) {
        setPhase("error");
        return;
      }
      setPhase("ready");
    }, 700);
  }, [errorRate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = customers;
    if (q) {
      rows = rows.filter((customer) =>
        [customer.name, customer.email, customer.company, customer.role]
          .join(" ")
          .toLowerCase()
          .includes(q),
      );
    }
    if (status !== "All") {
      rows = rows.filter((customer) => customer.status === status);
    }
    const sorted = [...rows].sort((a, b) => {
      const av = a[sortKey].toLowerCase();
      const bv = b[sortKey].toLowerCase();
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [query, status, sortKey, sortDir]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const isEmpty = phase === "ready" && filtered.length === 0;

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((dir) => (dir === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search customers..."
            aria-label="Search customers"
            className="w-full rounded-lg border border-zinc-300 bg-white py-2 pl-9 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Filter by status"
            className="flex items-center gap-1 rounded-lg border border-zinc-300 p-1 dark:border-zinc-700"
          >
            {(["All", "Active", "Pending", "Suspended"] as StatusFilter[]).map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setStatus(option);
                    setPage(1);
                  }}
                  aria-pressed={status === option}
                  className={cn(
                    "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                    status === option
                      ? "bg-brand-600 text-white"
                      : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800",
                  )}
                >
                  {option}
                </button>
              ),
            )}
          </div>
          <button
            type="button"
            onClick={fetchData}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <RotateCw className="h-3.5 w-3.5" aria-hidden="true" />
            Refresh
          </button>
        </div>
      </div>

      {phase === "error" ? (
        <div className="flex flex-col items-start gap-4 rounded-lg border border-rose-200 bg-rose-50 p-6 dark:border-rose-900 dark:bg-rose-950/40">
          <div className="flex items-center gap-2">
            <TriangleAlert
              className="h-4 w-4 text-rose-600 dark:text-rose-400"
              aria-hidden="true"
            />
            <h4 className="text-sm font-semibold text-rose-800 dark:text-rose-300">
              Failed to load customers
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-rose-700 dark:text-rose-300/80">
            The request failed. This is a simulated error to show how a real table
            should handle a failed fetch — with a clear message and a retry action,
            never a blank screen.
          </p>
          <button
            type="button"
            onClick={fetchData}
            className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-rose-700"
          >
            <RotateCw className="h-3.5 w-3.5" aria-hidden="true" />
            Retry
          </button>
        </div>
      ) : null}

      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    aria-sort={
                      column.sortable && sortKey === column.key
                        ? sortDir === "asc"
                          ? "ascending"
                          : "descending"
                        : undefined
                    }
                    className="px-4 py-3"
                  >
                    <button
                      type="button"
                      onClick={() => column.sortable && toggleSort(column.key)}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {column.label}
                      {column.sortable ? (
                        sortKey === column.key ? (
                          sortDir === "asc" ? (
                            <ArrowUp
                              className="h-3 w-3 text-brand-600 dark:text-brand-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowDown
                              className="h-3 w-3 text-brand-600 dark:text-brand-400"
                              aria-hidden="true"
                            />
                          )
                        ) : (
                          <ArrowUpDown
                            className="h-3 w-3 text-zinc-400"
                            aria-hidden="true"
                          />
                        )
                      ) : null}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {phase === "loading" ? (
                Array.from({ length: 6 }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {Array.from({ length: 4 }).map((_, colIndex) => (
                      <td key={colIndex} className="px-4 py-3">
                        <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : isEmpty ? (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-12 text-center">
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      No customers match your filters
                    </p>
                    <p className="mt-1 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                      Adjust the search or status filter to see results.
                    </p>
                  </td>
                </tr>
              ) : (
                currentPageRows.map((customer) => (
                  <tr
                    key={customer.id}
                    className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                  >
                    <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">
                      {customer.name}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                      {customer.email}
                    </td>
                    <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                      {customer.company}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2 py-0.5 text-2xs font-medium ring-1 ring-inset",
                          statusStyles[customer.status],
                        )}
                      >
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-zinc-200 px-4 py-3 sm:flex-row dark:border-zinc-800">
          <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
            {phase === "ready"
              ? `${filtered.length} of ${customers.length} customers`
              : "…"}
          </p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1 || phase !== "ready"}
              className="rounded-md border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Previous
            </button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index + 1)}
                aria-current={page === index + 1 ? "page" : undefined}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                  page === index + 1
                    ? "bg-brand-600 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800",
                )}
              >
                {index + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={page >= pageCount || phase !== "ready"}
              className="rounded-md border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
