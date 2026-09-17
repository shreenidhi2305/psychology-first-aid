// Results from Haven's own first-year wellbeing survey (Google Forms), circulated among
// CHRIST University first-year students. n = 19 — a small convenience sample, not a
// representative one, so read these as directional signals rather than definitive
// statistics. Source — Haven first-year wellbeing survey, CHRIST University, 2026
// (placeholder; confirm exact circulation dates/method before publishing).

export const RESPONSE_COUNT = 30;

export type BarDatum = { label: string; count: number };

// "Which of the following have you found most challenging since starting university?"
export const struggles: BarDatum[] = [
  { label: 'Academic expectations', count: 10 },
  { label: 'Missing familiar surroundings/routines', count: 10 },
  { label: 'Making friends', count: 9 },
  { label: 'Being away from family', count: 7 },
  { label: 'Managing independence', count: 6 },
  { label: 'Managing daily responsibilities', count: 6 },
  { label: 'Communicating with people from different backgrounds', count: 5 },
  { label: 'Financial independence', count: 5 },
  { label: 'Managing my time', count: 5 },
  { label: 'Adjusting to hostel/PG life', count: 4 },
];

// "When you're stressed, what do you usually do?"
export const coping: BarDatum[] = [
  { label: 'Talk to a friend/classmate', count: 13 },
  { label: 'Listen to music/watch something', count: 13 },
  { label: 'Make a study plan', count: 12 },
  { label: 'Talk to family', count: 11 },
  { label: 'Continue working despite feeling stressed', count: 10 },
  { label: 'Sleep/rest', count: 8 },
  { label: 'Use social media', count: 6 },
  { label: 'Take a break', count: 4 },
  { label: 'Exercise or engage in physical activity', count: 4 },
  { label: 'Avoid thinking about the work', count: 4 },
  { label: 'Seek help from a teacher/faculty', count: 2 },
  { label: 'Seek professional/psychological help', count: 0 },
];

export type LikertRow = { label: string; counts: number[] };
export type LikertChart = { question: string; levels: string[]; rows: LikertRow[] };

export const likertCharts: LikertChart[] = [
  {
    question: 'Since starting university, to what extent have you experienced the following?',
    levels: ['Not at all', 'Slightly', 'Moderately', 'Quite a lot', 'Extremely'],
    rows: [
      { label: 'Difficulty adjusting to the academic workload', counts: [4, 3, 3, 8, 1] },
      { label: 'Worry about academic performance', counts: [2, 3, 8, 5, 1] },
      { label: 'Fear of failing or not meeting expectations', counts: [0, 5, 7, 6, 1] },
      { label: 'Missing home or family', counts: [6, 0, 2, 6, 5] },
    ],
  },
  {
    question: 'Since joining university, how often have you experienced the following?',
    levels: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
    rows: [
      { label: "Feeling that I don't belong", counts: [2, 3, 9, 4, 1] },
      { label: 'Feeling left out of social groups', counts: [0, 2, 12, 4, 1] },
      { label: 'Difficulty initiating conversations with new people', counts: [0, 4, 7, 7, 1] },
      { label: 'Feeling uncomfortable in unfamiliar social situations', counts: [0, 2, 12, 5, 0] },
    ],
  },
  {
    question: 'How much do you agree with the following statements?',
    levels: ['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree'],
    rows: [
      { label: 'I feel confident about my ability to succeed at university.', counts: [1, 0, 3, 14, 1] },
      { label: 'I often compare my abilities with those of other students.', counts: [1, 2, 0, 12, 4] },
      { label: 'I sometimes feel that other students are more capable than I am.', counts: [0, 0, 1, 13, 5] },
      { label: 'I worry that I may not be good enough academically.', counts: [0, 2, 3, 13, 1] },
    ],
  },
];

export type PieDatum = { label: string; count: number };

// "Roughly how do you spend most of your time?"
export const timeAllocation: PieDatum[] = [
  { label: 'Academics/study time', count: 6 },
  { label: 'Social life', count: 3 },
  { label: 'Managing multiple responsibilities', count: 3 },
  { label: 'Screen/social-media use', count: 2 },
  { label: 'Sleep', count: 2 },
  { label: 'Meals', count: 1 },
  { label: 'Exercise/physical activity', count: 1 },
  { label: 'Personal/free time', count: 1 },
];

// "If applicable, how often do you experience feelings of homesickness?"
export const homesickness: PieDatum[] = [
  { label: 'Sometimes', count: 5 },
  { label: 'Never', count: 3 },
  { label: 'Rarely', count: 3 },
  { label: 'Often', count: 3 },
  { label: 'I currently live with my family / not applicable', count: 3 },
  { label: 'Very often', count: 2 },
  { label: 'Prefer not to say', count: 0 },
];
