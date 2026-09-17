import { Link } from 'react-router-dom';
import './About.css';

export function About() {
  return (
    <section className="container section">
      <span className="page-eyebrow label">About</span>
      <h1 className="h1 page-title">Why Haven exists</h1>

      <div className="about-body">
        <p className="body-lg">
          Starting university is a big transition, and first year brings a lot of it at once — academics, being
          away from home, money, sleep, new people. Most of that is normal. Haven exists so a first-year at
          CHRIST doesn't have to sort through that alone, or wonder whether what they're feeling is "normal."
        </p>

        <h2 className="h2">What's here</h2>
        <p className="body">
          The <Link to="/resources">Resources</Link> page covers seven common first-year experiences, each with
          a short explanation grounded in real research and two or three concrete strategies. The{' '}
          <Link to="/support">Support Directory</Link> lists real counselling services — on campus and
          national — for when reading isn't enough and you want to talk to someone. The{' '}
          <Link to="/emergency">Emergency page</Link> puts the most urgent numbers front and center, for
          moments that can't wait.
        </p>

        <h2 className="h2">What Haven is not</h2>
        <p className="body">
          Haven is a starting point, not a diagnosis and not a replacement for professional care. Nothing on
          this site is written by a clinician treating you personally, and none of the strategies here are a
          substitute for talking to a counsellor if things are hard for more than a couple of weeks.
        </p>

        <h2 className="h2">A note on the content</h2>
        <p className="body">
          This first version was built from a draft <Link to="/survey-findings">survey</Link> of CHRIST
          first-years and existing research on student wellbeing. It's a starting point, not a finished
          product — every citation, phone number and piece of copy should be verified against its source before
          this site is published for real use.
        </p>

        <h2 className="h2">The team</h2>
        <p className="body">
          Haven was built by a small student team, each covering a different part of the project.
        </p>
      </div>

      <div className="team-grid">
        {TEAM.map((member) => (
          <article className="team-card" key={member.name}>
            <div className="team-card-avatar" aria-hidden="true">
              {member.name
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')}
            </div>
            <h3 className="h3 team-card-name">{member.name}</h3>
            <span className="team-card-role label">{member.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

const TEAM = [
  { name: 'Rohit PR', role: 'Developed and designed the website' },
  { name: 'Shreenidhi P.L', role: 'Survey questionnaire design' },
  { name: 'Neeraj', role: 'Survey report' },
];
