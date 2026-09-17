import type { LikertChart } from '../../content/surveyFindings';
import './charts.css';

const SEQ_COLORS = ['var(--chart-seq-1)', 'var(--chart-seq-2)', 'var(--chart-seq-3)', 'var(--chart-seq-4)', 'var(--chart-seq-5)'];

export function LikertBar({ chart, total }: { chart: LikertChart; total: number }) {
  return (
    <div className="likert-chart">
      <p className="likert-question label">{chart.question}</p>

      <ul className="likert-legend" role="list">
        {chart.levels.map((level, i) => (
          <li key={level} className="likert-legend-item caption">
            <span className="likert-swatch" style={{ background: SEQ_COLORS[i] }} aria-hidden="true" />
            {level}
          </li>
        ))}
      </ul>

      <ul className="likert-rows" role="list">
        {chart.rows.map((row) => {
          const label = row.counts
            .map((c, i) => `${chart.levels[i]}: ${c} (${Math.round((c / total) * 1000) / 10}%)`)
            .join(', ');
          return (
            <li className="likert-row" key={row.label}>
              <span className="likert-row-label body">{row.label}</span>
              <span className="likert-row-bar" role="img" aria-label={`${row.label} — ${label}`}>
                {row.counts.map((c, i) =>
                  c > 0 ? (
                    <span
                      key={chart.levels[i]}
                      className="likert-segment"
                      style={{ width: `${(c / total) * 100}%`, background: SEQ_COLORS[i] }}
                      title={`${chart.levels[i]}: ${c} of ${total}`}
                    />
                  ) : null,
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
