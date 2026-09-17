export type Resource = {
  id: string;
  icon: 'clock' | 'home' | 'users' | 'moon' | 'wallet' | 'mask' | 'cloudSun';
  title: string;
  lead: string;
  strategies: { name: string; detail: string }[];
  citation: string;
};

// Content fundamentals per the Haven design system README: write to one
// reader ("you"), avoid diagnostic language, and back every factual claim
// with a real, checkable source.
export const resources: Resource[] = [
  {
    id: 'academic-stress',
    icon: 'clock',
    title: 'Academic stress',
    lead: 'A heavier, less structured workload than school is one of the most commonly reported first-year adjustments — feeling stretched by it is a normal response to a real change, not a sign you can’t cope.',
    strategies: [
      {
        name: 'Physiological sigh',
        detail: 'Two short inhales through your nose, then one long exhale — it calms your nervous system in under a minute, right before you need to focus.',
      },
      {
        name: 'Timeboxed studying',
        detail: 'Work in short focused blocks (around 25 minutes) with a real break between them — easier to start, easier to sustain than one long session.',
      },
      {
        name: 'Brain dump',
        detail: 'Before you plan anything, empty every task onto paper — a written list feels far more manageable than a vague weight in your head.',
      },
    ],
    citation: 'Source — American Psychological Association, Stress in America (survey series); Balban et al., Cell Reports Medicine, 2023 (placeholder; verify before publishing)',
  },
  {
    id: 'homesickness',
    icon: 'home',
    title: 'Homesickness',
    lead: 'Homesickness is a well-studied, temporary response to leaving a familiar environment — most first-years feel it in the opening weeks, and it typically eases as new routines and relationships form.',
    strategies: [
      {
        name: 'Anchor routine',
        detail: 'Keep one or two things from home — a regular call, a familiar meal — rather than trying to replace everything at once.',
      },
      {
        name: 'A third place',
        detail: 'Join one recurring campus activity in your first two weeks, so you have somewhere to be beyond your room and your classes.',
      },
      {
        name: 'Name it',
        detail: 'Telling yourself "this is homesickness, and it’s temporary" reduces its intensity more than trying to push the feeling away.',
      },
    ],
    citation: 'Source — Fisher, S., Homesickness, Cognition and Health, 1989 (placeholder; verify before publishing)',
  },
  {
    id: 'loneliness',
    icon: 'users',
    title: 'Loneliness & new friendships',
    lead: 'National student health surveys consistently find loneliness among the most commonly reported first-year concerns — a new campus asks you to rebuild your whole social world at once, and that takes time.',
    strategies: [
      {
        name: '5-4-3-2-1 grounding',
        detail: 'Before a social moment feels like too much, name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste — it steadies you enough to walk in.',
      },
      {
        name: 'One recurring plan',
        detail: 'A single standing commitment — a club, a sport, a mess table — does more for connection than several one-off events.',
      },
      {
        name: 'A better opener',
        detail: '"How’s this week going for you?" opens a real conversation better than "How are you," which usually gets a one-word answer.',
      },
    ],
    citation: 'Source — American College Health Association, National College Health Assessment (placeholder; verify before publishing)',
  },
  {
    id: 'sleep',
    icon: 'moon',
    title: 'Sleep disruption',
    lead: 'A later, less consistent sleep schedule is one of the most common first-year changes — and one of the most fixable, since sleep responds quickly to a few consistent habits.',
    strategies: [
      {
        name: 'Fixed wake time',
        detail: 'Keep one wake-up time every day, even after a late night — it anchors your body clock faster than an early bedtime alone.',
      },
      {
        name: 'Wind-down window',
        detail: 'Dim screens and bright lights 30–60 minutes before bed; light in the evening delays your body’s own sleep signal.',
      },
      {
        name: 'Worry window',
        detail: 'If your mind races at night, write tomorrow’s worries down earlier in the evening — on paper, not in bed.',
      },
    ],
    citation: 'Source — Sleep Foundation, Sleep Guidelines for College Students (placeholder; verify before publishing)',
  },
  {
    id: 'money',
    icon: 'wallet',
    title: 'Money worries',
    lead: 'Financial stress is one of the most common — and most under-discussed — sources of pressure for students, and it affects concentration and sleep just as much as academic stress does.',
    strategies: [
      {
        name: 'One-page budget',
        detail: 'List what comes in and what’s fixed — fees, transport, essentials — each month; what’s left is what you actually have to plan around.',
      },
      {
        name: 'Needs before wants',
        detail: 'Sort this month’s spending into two short lists before you spend, not after.',
      },
      {
        name: 'Ask early',
        detail: 'Campus financial aid and scholarship offices can usually do more before a deadline than after one is missed.',
      },
    ],
    citation: 'Source — American Psychological Association, Stress in America (survey series) (placeholder; verify before publishing)',
  },
  {
    id: 'self-doubt',
    icon: 'mask',
    title: 'Self-doubt & feeling like a fraud',
    lead: 'The sense of not really belonging despite being qualified to be here — first named in high-achieving students — is extremely common in a new, more competitive environment. It isn’t evidence that you don’t belong.',
    strategies: [
      {
        name: 'Evidence file',
        detail: 'Keep a running note of specific things you did well, not just grades — re-read it when self-doubt gets loud.',
      },
      {
        name: 'Reframe the thought',
        detail: 'Swap "I got lucky" for "I prepared and it worked" — the same event, described accurately instead of dismissively.',
      },
      {
        name: 'Say it out loud',
        detail: 'Naming the feeling to one trusted person usually reveals they’ve felt it too, which weakens its grip.',
      },
    ],
    citation: 'Source — Clance, P.R. & Imes, S., The Imposter Phenomenon in High Achieving Women, 1978 (placeholder; verify before publishing)',
  },
  {
    id: 'low-mood',
    icon: 'cloudSun',
    title: 'Low mood & feeling overwhelmed',
    lead: 'Feeling flat, overwhelmed or low on some days during a major life transition is a common experience, not a diagnosis — psychological first aid exists precisely to help with exactly this kind of ordinary distress.',
    strategies: [
      {
        name: 'Name the feeling',
        detail: 'Putting a feeling into words, even just "I feel overwhelmed," measurably lowers its intensity — more than trying to distract from it.',
      },
      {
        name: 'One small action',
        detail: 'A short walk, sunlight, or messaging one person does more for low mood than waiting to feel like it first.',
      },
      {
        name: 'Reach out early',
        detail: 'If low mood lasts most days for two weeks or more, that’s worth talking to a counsellor about — see the Support Directory.',
      },
    ],
    citation: 'Source — World Health Organization, Psychological First Aid: Guide for Field Workers, 2011 (placeholder; verify before publishing)',
  },
];
