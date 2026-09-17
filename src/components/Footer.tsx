import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-brand h3">
            <Icon name="heart" />
            Haven
          </div>
          <p className="body">Calm, evidence-based psychological first aid for CHRIST first-years.</p>
        </div>

        <div className="footer-col">
          <span className="label" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
            Site
          </span>
          <ul className="footer-links body">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/survey-findings">Survey Findings</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/support">Support Directory</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <span className="label" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
            Need help now?
          </span>
          <ul className="footer-links body">
            <li><Link to="/emergency">Emergency &amp; crisis lines</Link></li>
            <li><a href="tel:1800-599-0019">KIRAN — 1800-599-0019</a></li>
            <li><a href="tel:112">Emergency — 112</a></li>
          </ul>
        </div>
      </div>

      <p className="footer-note caption">
        Haven is a student wellbeing resource, not a substitute for professional diagnosis or emergency care. If
        you or someone you know is in immediate danger, call 112 or go to the nearest emergency room.
      </p>
    </footer>
  );
}
