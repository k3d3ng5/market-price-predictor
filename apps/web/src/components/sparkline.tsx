import { naira, shortDate } from "@/lib/format";

export interface SparkPoint {
  date: string;
  value: number;
}

/**
 * A deliberately plain trend line: it joins recorded observations only.
 * No interpolation, no invented points, no "projected" extension.
 */
export function Sparkline({
  points,
  label,
  height = 80,
}: {
  points: SparkPoint[];
  label: string;
  height?: number;
}) {
  if (points.length < 2) {
    return (
      <div className="flex h-20 items-center justify-center rounded-lg bg-surface-container-low px-space-sm text-center">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Needs at least two observations to draw a trend.
        </p>
      </div>
    );
  }

  const width = 320;
  const pad = 6;
  const values = points.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;

  const x = (i: number) => pad + (i * (width - pad * 2)) / (points.length - 1);
  const y = (v: number) =>
    height - pad - ((v - min) / span) * (height - pad * 2);

  const line = points.map((p, i) => `${x(i)},${y(p.value)}`).join(" ");
  const area = `M ${pad},${height - pad} L ${points
    .map((p, i) => `${x(i)},${y(p.value)}`)
    .join(" L ")} L ${width - pad},${height - pad} Z`;

  const first = points[0]!;
  const last = points[points.length - 1]!;
  const showDots = points.length <= 24;

  return (
    <figure className="flex flex-col gap-1.5">
      <svg
        role="img"
        aria-label={`${label}: ${points.length} recorded observations from ${shortDate(first.date)} to ${shortDate(last.date)}. Lowest ${naira(min)}, highest ${naira(max)}.`}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ height }}
      >
        <defs>
          <linearGradient id="tomionce-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1={pad}
          x2={width - pad}
          y1={height - pad}
          y2={height - pad}
          stroke="var(--color-outline-variant)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path d={area} fill="url(#tomionce-area)" />
        <polyline
          points={line}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {showDots
          ? points.map((p, i) => (
              <circle
                key={`${p.date}-${i}`}
                cx={x(i)}
                cy={y(p.value)}
                r="2.5"
                fill="var(--color-surface-container-lowest)"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            ))
          : null}
        <circle
          cx={x(points.length - 1)}
          cy={y(last.value)}
          r="3.5"
          fill="var(--color-primary)"
        />
      </svg>
      <figcaption className="flex items-center justify-between gap-space-sm font-label-numeric-sm text-label-numeric-sm text-on-surface-variant">
        <span>
          {shortDate(first.date)} → {shortDate(last.date)}
        </span>
        <span className="text-right">
          low {naira(min)} · high {naira(max)}
        </span>
      </figcaption>
    </figure>
  );
}
