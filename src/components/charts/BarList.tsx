import type { BarDatum } from '../../content/surveyFindings';
import './charts.css';

export function BarList({
  data,
  total,
  color = 'var(--primary)',
}: {
  data: BarDatum[];
  total: number;
  color?: string;
}) {
  const max = Math.max(...data.map((d) => d.count));

  return (
    <ul className="bar-list" role="list">
      {data.map((d) => {
        const pct = total ? Math.round((d.count / total) * 1000) / 10 : 0;
        const widthPct = max ? (d.count / max) * 100 : 0;
        return (
          <li className="bar-list-row" key={d.label}>
            <span className="bar-list-label caption">{d.label}</span>
            <span className="bar-list-track" aria-hidden="true">
              <span className="bar-list-fill" style={{ width: `${widthPct}%`, background: color }} />
            </span>
            <span className="bar-list-value label">
              {d.count} <span className="bar-list-pct">({pct}%)</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
