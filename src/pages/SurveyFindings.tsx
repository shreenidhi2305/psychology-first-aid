import { Link } from 'react-router-dom';
import { BarList } from '../components/charts/BarList';
import { LikertBar } from '../components/charts/LikertBar';
import { Donut } from '../components/charts/Donut';
import {
  RESPONSE_COUNT,
  struggles,
  coping,
  likertCharts,
  timeAllocation,
  homesickness,
} from '../content/surveyFindings';
import './SurveyFindings.css';

const STATS = [
  { value: '68%', detail: "talk to a friend or classmate when they're stressed — the single most common response" },
  { value: '53%', detail: 'say academic expectations are among the hardest parts of their first year' },
  { value: '95%', detail: 'sometimes feel other students are more capable than they are — almost everyone, some of the time' },
  { value: '0 of 19', detail: 'had sought professional support yet, even though most reported real distress' },
];

export function SurveyFindings() {
  return (
    <section className="container section">
      <span className="page-eyebrow label">Survey Findings</span>
      <h1 className="h1 page-title">What CHRIST first-years actually told us</h1>
      <p className="body-lg page-lead">
        Before building the Resources on this site, we asked CHRIST first-years how their first year was actually
        going. The charts below are their real answers — not to be alarming, but so that if you're finding parts
        of this year hard, you can see exactly how many people around you would say the same thing.
      </p>

      <div className="survey-methodology body">
        <strong>About this data.</strong> These findings come from Haven's own first-year wellbeing survey
        (Google Forms), with {RESPONSE_COUNT} CHRIST first-year respondents. That's a small, self-selected sample —
        not necessarily representative of every first-year — so treat the numbers as a real snapshot of a real
        group of peers, not a precise statistic about the whole class. The patterns line up with the wider,
        peer-reviewed research cited on the <Link to="/resources">Resources</Link> page.
      </div>

      <div className="stat-grid">
        {STATS.map((s) => (
          <div className="stat-card" key={s.detail}>
            <span className="stat-value display">{s.value}</span>
            <span className="stat-detail body">{s.detail}</span>
          </div>
        ))}
      </div>

      <div className="survey-block">
        <h2 className="h2 survey-block-title">What's been hardest since starting university</h2>
        <p className="body survey-block-lead">Respondents could pick more than one option.</p>
        <BarList data={struggles} total={RESPONSE_COUNT} color="var(--primary)" />
      </div>

      <div className="survey-block">
        <h2 className="h2 survey-block-title">How people actually cope when stressed</h2>
        <p className="body survey-block-lead">
          Respondents could pick more than one option. Notice how far down the list professional help sits — that's
          exactly the gap the <Link to="/support">Support Directory</Link> is here to close.
        </p>
        <BarList data={coping} total={RESPONSE_COUNT} color="var(--accent)" />
      </div>

      <div className="survey-block">
        <h2 className="h2 survey-block-title">Academic pressure, belonging &amp; self-doubt</h2>
        <p className="body survey-block-lead">
          Three sets of statements, each answered by all {RESPONSE_COUNT} respondents on a 5-point scale.
        </p>
        <div className="likert-grid">
          {likertCharts.map((chart) => (
            <LikertBar chart={chart} total={RESPONSE_COUNT} key={chart.question} />
          ))}
        </div>
      </div>

      <div className="survey-block">
        <h2 className="h2 survey-block-title">Time, and missing home</h2>
        <div className="donut-grid">
          <div className="donut-card">
            <h3 className="h3 donut-card-title">Where the day mostly goes</h3>
            <Donut data={timeAllocation} total={RESPONSE_COUNT} centerLabel="time allocation" />
          </div>
          <div className="donut-card">
            <h3 className="h3 donut-card-title">How often homesickness shows up</h3>
            <Donut data={homesickness} total={RESPONSE_COUNT} centerLabel="homesickness frequency" />
          </div>
        </div>
      </div>

      <div className="survey-closing body-lg">
        If any of this looks familiar, that's the point — you're not the only one going through it. The{' '}
        <Link to="/resources">Resources</Link> page has practical, research-backed strategies for each of these
        experiences, and the <Link to="/support">Support Directory</Link> has real people to talk to when you want
        more than a strategy.
      </div>

      <span className="survey-source caption">
        Source — Haven first-year wellbeing survey, CHRIST University, {RESPONSE_COUNT} respondents, 2026
        (placeholder; confirm exact circulation dates and method before publishing).
      </span>
    </section>
  );
}
