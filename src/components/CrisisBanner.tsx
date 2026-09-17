import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import './CrisisBanner.css';

// The floating "Need help now?" pill: stays visible over page content on
// every page, in addition to NavBar's crisis link. Never restyled per page.
export function CrisisBanner() {
  return (
    <Link className="crisis-banner label" to="/emergency">
      <Icon name="heart" />
      Need help now?
    </Link>
  );
}
