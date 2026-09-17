import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { ResourceCard } from '../components/ResourceCard';
import { resources } from '../content/resources';
import './Home.css';

const TILES = [
  {
    to: '/survey-findings',
    icon: 'compass' as const,
    title: 'Survey Findings',
    desc: 'What first-years at CHRIST actually told us, in their own words.',
  },
  {
    to: '/resources',
    icon: 'book' as const,
    title: 'Resources',
    desc: 'Seven common first-year experiences, with strategies that help.',
  },
  {
    to: '/support',
    icon: 'phone' as const,
    title: 'Support Directory',
    desc: 'Counselling services and helplines, campus and national.',
  },
  {
    to: '/about',
    icon: 'chat' as const,
    title: 'About Haven',
    desc: 'Why this site exists, and who built it.',
  },
];

export function Home() {
  const featured = resources.slice(0, 3);

  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <span className="hero-eyebrow label">Psychological First Aid</span>
          <h1 className="display">You don't have to figure out first year alone.</h1>
          <p className="body-lg">
            Starting at CHRIST comes with real adjustments — academics, distance from home, money, sleep, new
            people. Haven brings together what actually helps, grounded in real research, plus the fastest way
            to reach a real person when you need one.
          </p>
          <div className="hero-actions">
            <Button to="/support" icon="phone">
              Talk to someone now
            </Button>
            <Button variant="secondary" to="/resources">
              See all resources
            </Button>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg">
            <rect width="420" height="320" rx="24" fill="var(--surface-sunken)" />
            <rect x="210" y="-10" width="90" height="340" fill="var(--primary)" />
            <rect x="300" y="30" width="100" height="120" rx="20" fill="var(--accent)" />
            <rect x="240" y="200" width="110" height="100" rx="16" fill="var(--surface-raised)" />
            <circle cx="278" cy="248" r="10" fill="var(--urgent)" />
            <rect x="230" y="50" width="48" height="16" rx="9999" fill="var(--on-primary)" opacity="0.5" />
            <rect x="230" y="80" width="32" height="16" rx="9999" fill="var(--on-primary)" opacity="0.5" />
            <circle cx="255" cy="120" r="8" fill="var(--on-primary)" opacity="0.5" />
          </svg>
        </div>
      </section>

      <section className="container section">
        <div className="crisis-strip">
          <p className="body-lg">
            <strong>Need help now?</strong> If you or someone you know is in immediate danger, call{' '}
            <a href="tel:112" style={{ color: 'inherit', fontWeight: 600 }}>
              112
            </a>{' '}
            or reach a crisis line — it's a phone call away, any time.
          </p>
          <Button variant="secondary" to="/emergency" icon="heart">
            Emergency &amp; crisis lines
          </Button>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2 className="h2">Find your way around</h2>
        </div>
        <div className="nav-tiles">
          {TILES.map((t) => (
            <Link key={t.to} to={t.to} className="nav-tile">
              <div className="nav-tile-icon">
                <Icon name={t.icon} />
              </div>
              <h3 className="nav-tile-title h3">{t.title}</h3>
              <p className="nav-tile-desc body">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2 className="h2">A few things that help</h2>
          <Link to="/resources" className="label" style={{ textDecoration: 'none' }}>
            See all 7 →
          </Link>
        </div>
        <div className="card-grid">
          {featured.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </section>
    </>
  );
}
