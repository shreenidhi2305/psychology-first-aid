import type { PieDatum } from '../../content/surveyFindings';
import './charts.css';

const CAT_COLORS = [
  'var(--chart-cat-1)',
  'var(--chart-cat-2)',
  'var(--chart-cat-3)',
  'var(--chart-cat-4)',
  'var(--chart-cat-5)',
  'var(--chart-cat-6)',
  'var(--chart-cat-7)',
  'var(--chart-cat-8)',
];

const SIZE = 200;
const STROKE = 34;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

type Segment = PieDatum & { colorIndex: number; frac: number; offset: number };

export function Donut({ data, total, centerLabel }: { data: PieDatum[]; total: number; centerLabel?: string }) {
  // Keep each datum's color tied to its original position in `data`, so the arc colors and the
  // legend swatches always match up — even when a zero-count item is skipped from the arcs.
  const segments = data.reduce<Segment[]>((acc, d, colorIndex) => {
    if (d.count <= 0) return acc;
    const frac = d.count / total;
    const cumulativeFrac = acc.reduce((sum, s) => sum + s.frac, 0);
    return [...acc, { ...d, colorIndex, frac, offset: -cumulativeFrac * CIRC }];
  }, []);

  return (
    <div className="donut">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="donut-svg" role="img" aria-label={`${centerLabel ?? ''} breakdown`}>
        <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
          {segments.map((d) => {
            const dash = d.frac * CIRC;
            return (
              <circle
                key={d.label}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={R}
                fill="none"
                stroke={CAT_COLORS[d.colorIndex % CAT_COLORS.length]}
                strokeWidth={STROKE}
                strokeDasharray={`${dash} ${CIRC - dash}`}
                strokeDashoffset={d.offset}
              >
                <title>
                  {d.label}: {d.count} of {total} ({Math.round(d.frac * 1000) / 10}%)
                </title>
              </circle>
            );
          })}
        </g>
        <text x={SIZE / 2} y={SIZE / 2 - 6} textAnchor="middle" className="donut-center-n">
          {total}
        </text>
        <text x={SIZE / 2} y={SIZE / 2 + 14} textAnchor="middle" className="donut-center-label">
          responses
        </text>
      </svg>

      <ul className="donut-legend" role="list">
        {data.map((d, i) => (
          <li key={d.label} className="donut-legend-item caption">
            <span className="donut-swatch" style={{ background: CAT_COLORS[i % CAT_COLORS.length] }} aria-hidden="true" />
            <span className="donut-legend-text">{d.label}</span>
            <span className="donut-legend-pct">{Math.round((d.count / total) * 1000) / 10}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
