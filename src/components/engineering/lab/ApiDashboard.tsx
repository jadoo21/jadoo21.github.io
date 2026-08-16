import { RotateCw, TrendingDown, TrendingUp, TriangleAlert } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { dashboardStats, timeSeries } from "../../../data/lab";
import { cn } from "../../../lib/cn";

type Phase = "loading" | "ready" | "error";

interface ApiDashboardProps {
  errorRate?: number;
}

const formats: Record<string, (value: number) => string> = {
  orders: (value) => value.toLocaleString(),
  revenue: (value) => `$${value.toLocaleString()}`,
  active: (value) => value.toLocaleString(),
  latency: (value) => `${value}`,
};

export function ApiDashboard({ errorRate = 0.12 }: ApiDashboardProps) {
  const [phase, setPhase] = useState<Phase>("loading");

  const load = useCallback(() => {
    setPhase("loading");
    window.setTimeout(() => {
      if (Math.random() < errorRate) {
        setPhase("error");
        return;
      }
      setPhase("ready");
    }, 900);
  }, [errorRate]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="flex flex-col gap-5">
      {phase === "error" ? (
        <div className="flex flex-col items-start gap-4 rounded-xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-900 dark:bg-rose-950/40">
          <div className="flex items-center gap-2">
            <TriangleAlert
              className="h-4 w-4 text-rose-600 dark:text-rose-400"
              aria-hidden="true"
            />
            <h4 className="text-sm font-semibold text-rose-800 dark:text-rose-300">
              The dashboard API is unavailable
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-rose-700 dark:text-rose-300/80">
            A simulated outage to show how a dashboard should degrade — a clear error
            surface and a retry action, without disappearing into a blank page.
          </p>
          <button
            type="button"
            onClick={load}
            className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-rose-700"
          >
            <RotateCw className="h-3.5 w-3.5" aria-hidden="true" />
            Retry
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {phase === "loading"
            ? dashboardStats.map((stat) => (
                <div key={stat.id} className="card-surface p-5">
                  <div className="h-3 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                  <div className="mt-3 h-6 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                  <div className="mt-3 h-3 w-14 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>
              ))
            : dashboardStats.map((stat) => {
                const positive = stat.delta >= 0;
                const isLatency = stat.id === "latency";
                const good = isLatency ? !positive : positive;
                return (
                  <div key={stat.id} className="card-surface p-5">
                    <p className="text-2xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                      {formats[stat.id]?.(stat.value) ?? stat.value.toLocaleString()}
                    </p>
                    <p
                      className={cn(
                        "mt-2 flex items-center gap-1 font-mono text-2xs",
                        good
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-rose-600 dark:text-rose-400",
                      )}
                    >
                      {positive ? (
                        <TrendingUp className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <TrendingDown className="h-3 w-3" aria-hidden="true" />
                      )}
                      {Math.abs(stat.delta)}% vs last week
                    </p>
                  </div>
                );
              })}
        </div>
      )}

      {phase !== "error" ? (
        <div className="card-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Requests over time
              </h4>
              <p className="mt-0.5 font-mono text-2xs text-zinc-500 dark:text-zinc-500">
                Requests per minute — last 20 samples
              </p>
            </div>
            {phase === "loading" ? (
              <div className="h-3 w-16 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            ) : null}
          </div>

          {phase === "loading" ? (
            <div className="h-40 animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-800" />
          ) : (
            <Sparkline data={timeSeries} />
          )}
        </div>
      ) : null}

      <div className="flex items-center justify-between">
        <p className="font-mono text-2xs text-zinc-500 dark:text-zinc-500">
          {phase === "ready"
            ? "Simulated API · data refreshes with the button below"
            : "Simulated API· loading…"}
        </p>
        <button
          type="button"
          onClick={load}
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <RotateCw className="h-3.5 w-3.5" aria-hidden="true" />
          Re-fetch data
        </button>
      </div>
    </div>
  );
}

function Sparkline({ data }: { data: number[] }) {
  const width = 640;
  const height = 160;
  const padding = 12;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = (width - padding * 2) / (data.length - 1);

  const points = data.map((value, index) => ({
    x: padding + index * step,
    y: height - padding - ((value - min) / range) * (height - padding * 2),
  }));

  const line = points.map((point) => `${point.x},${point.y}`).join(" ");
  const first = points[0];
  const last = points[points.length - 1];
  const area =
    first && last
      ? `M ${first.x} ${height - padding} L ${points.map((p) => `${p.x} ${p.y}`).join(" L ")} L ${last.x} ${height - padding} Z`
      : "";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Line chart of requests per minute over time"
      className="h-40 w-full"
    >
      <defs>
        <linearGradient id="sparkline-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkline-fill)" className="text-brand-500" />
      <polyline
        points={line}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        className="text-brand-600 dark:text-brand-400"
      />
      {points.map((point, index) =>
        index % 3 === 0 ? (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={2.5}
            fill="currentColor"
            className="text-zinc-300 dark:text-zinc-700"
          />
        ) : null,
      )}
    </svg>
  );
}
