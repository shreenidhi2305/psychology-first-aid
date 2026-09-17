# Haven

Psychological first aid site for CHRIST University first-years — built on the Haven design
system (tokens, Button, NavBar, CrisisBanner, ResourceCard, HelplineCard).

Pages: Home, Survey Findings (placeholder, pending real survey data), Resources (seven common
first-year experiences with citable strategies), Support Directory, Emergency, About.

## Stack

React + TypeScript + Vite + React Router (hash-based routing, so the built site works as a
static single-page artifact with no server rewrite rules).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Before this goes live

- The CHRIST University Counselling Cell entry (email `cchs.kengeri@christuniversity.in`) and the
  iCall, Vandrevala and NIMHANS numbers in [`src/content/helplines.ts`](src/content/helplines.ts)
  were supplied directly and can be treated as current.
- KIRAN, AASRA and the national emergency number in the same file still carry "placeholder;
  verify before publishing" on their hours/notes and should be checked against their current
  published source before this site goes live.
- Every citation in [`src/content/resources.ts`](src/content/resources.ts) is marked "placeholder;
  verify before publishing" and should be checked against the actual paper/source before publishing.
- The Survey Findings page (`src/content/surveyFindings.ts`) reflects the real Google Forms
  results (n = 19) from the screenshots this was built from; only the exact survey dates/method in
  its methodology note are marked as placeholders to confirm.

This matters more here than on a typical site, since it's crisis-support content.
