import { Icon } from './Icon';
import './HelplineCard.css';
import type { Helpline } from '../content/helplines';

export function HelplineCard({ helpline, urgent = false }: { helpline: Helpline; urgent?: boolean }) {
  return (
    <article className={`helpline-card${urgent ? ' urgent' : ''}`}>
      <h3 className="helpline-card-name h3">{helpline.name}</h3>
      <p className="helpline-card-desc body">{helpline.description}</p>
      {helpline.location ? (
        <span className="helpline-card-location caption">
          <Icon name="mapPin" />
          {helpline.location}
        </span>
      ) : null}
      {helpline.tel ? (
        <a className="helpline-card-tel label" href={`tel:${helpline.tel.replace(/[^0-9+]/g, '')}`}>
          <Icon name="phone" />
          {helpline.tel}
        </a>
      ) : null}
      {helpline.email ? (
        <a className="helpline-card-tel label" href={`mailto:${helpline.email}`}>
          <Icon name="mail" />
          {helpline.email}
        </a>
      ) : null}
      {helpline.hours ? <span className="helpline-card-meta caption">Hours — {helpline.hours}</span> : null}
      <span className="helpline-card-note caption">{helpline.reachOutNote}</span>
    </article>
  );
}
