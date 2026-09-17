import { Link } from 'react-router-dom';
import { ResourceCard } from '../components/ResourceCard';
import { resources } from '../content/resources';

export function Resources() {
  return (
    <section className="container section">
      <span className="page-eyebrow label">Resources</span>
      <h1 className="h1 page-title">Common first-year experiences, and what actually helps</h1>
      <p className="body-lg page-lead">
        These are the seven experiences first-years told us about most — each with a short reason it happens
        and two or three concrete strategies backed by real research. None of this replaces talking to someone;
        see the <Link to="/support">Support Directory</Link> when you're ready for that.
      </p>

      <div className="card-grid">
        {resources.map((r) => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>
    </section>
  );
}
