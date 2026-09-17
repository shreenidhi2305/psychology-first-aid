import { Icon } from '../components/Icon';
import { HelplineCard } from '../components/HelplineCard';
import { helplines } from '../content/helplines';
import './Emergency.css';

export function Emergency() {
  const featured = helplines.filter((h) => h.featured);
  const rest = helplines.filter((h) => !h.featured);

  return (
    <section className="container section">
      <div className="emergency-banner">
        <span className="label" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
          <Icon name="heart" />
          Need help now
        </span>
        <h1 className="h1">If you or someone else is in immediate danger</h1>
        <p className="body-lg">
          Call one of the numbers below right now. You don't need to explain yourself first, and you won't be
          judged for calling.
        </p>
      </div>

      <div className="emergency-featured">
        {featured.map((h) => (
          <HelplineCard key={h.id} helpline={h} urgent />
        ))}
      </div>

      <h2 className="h2" style={{ marginBottom: 'var(--space-4)' }}>
        More ways to reach out
      </h2>
      <div className="card-grid">
        {rest.map((h) => (
          <HelplineCard key={h.id} helpline={h} />
        ))}
      </div>
    </section>
  );
}
