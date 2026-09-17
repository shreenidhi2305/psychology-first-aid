import { Button } from '../components/Button';

export function NotFound() {
  return (
    <section className="container section" style={{ textAlign: 'center', padding: 'var(--space-7) var(--space-4)' }}>
      <h1 className="h1 page-title">Page not found</h1>
      <p className="body-lg" style={{ color: 'var(--ink-muted)', marginBottom: 'var(--space-4)' }}>
        That page doesn't exist. If you're looking for support, it's still one tap away.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button to="/">Go home</Button>
        <Button variant="secondary" to="/support">
          Support Directory
        </Button>
      </div>
    </section>
  );
}
