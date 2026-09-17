import { Link } from 'react-router-dom';
import { HelplineCard } from '../components/HelplineCard';
import { helplines } from '../content/helplines';

export function SupportDirectory() {
  return (
    <section className="container section">
      <span className="page-eyebrow label">Support Directory</span>
      <h1 className="h1 page-title">Counselling services and helplines</h1>
      <p className="body-lg page-lead">
        Real people, reachable by phone, text or chat — on campus and nationally. If what you're feeling is an
        immediate danger to yourself or someone else, go to the{' '}
        <Link to="/emergency">Emergency &amp; Crisis page</Link> instead.
      </p>

      <div className="card-grid">
        {helplines.map((h) => (
          <HelplineCard key={h.id} helpline={h} />
        ))}
      </div>
    </section>
  );
}
