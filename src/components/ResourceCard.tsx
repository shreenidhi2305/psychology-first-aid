import { Icon } from './Icon';
import './ResourceCard.css';
import type { Resource } from '../content/resources';

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="resource-card">
      <div className="resource-card-icon">
        <Icon name={resource.icon} />
      </div>
      <h3 className="resource-card-title h3">{resource.title}</h3>
      <p className="resource-card-lead body">{resource.lead}</p>
      <ul className="resource-card-list body">
        {resource.strategies.map((s) => (
          <li key={s.name}>
            <strong>{s.name}</strong> — {s.detail}
          </li>
        ))}
      </ul>
      <span className="resource-card-cite caption">{resource.citation}</span>
    </article>
  );
}
