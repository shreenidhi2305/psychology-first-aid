export type Helpline = {
  id: string;
  name: string;
  description: string;
  tel?: string;
  email?: string;
  location?: string;
  hours?: string;
  reachOutNote: string;
  featured?: boolean;
};

// Placeholder directory — publicly listed national and campus lines.
// Every number and hour here must be verified against the current published
// source before this site goes live; none of it should ship unverified.
export const helplines: Helpline[] = [
  {
    id: 'kiran',
    name: 'KIRAN Mental Health Helpline',
    description: 'Government of India, 24/7 toll-free helpline in multiple languages, for any kind of mental health distress.',
    tel: '1800-599-0019',
    hours: '24/7',
    reachOutNote: 'Call or text — free from any phone',
    featured: true,
  },
  {
    id: 'vandrevala',
    name: 'Vandrevala Foundation Helpline',
    description: 'Free, 24/7 mental health support and counselling for anyone in distress.',
    tel: '1860-2662-345',
    hours: '24/7',
    reachOutNote: 'Call or WhatsApp',
  },
  {
    id: 'icall',
    name: 'iCall Psychosocial Helpline',
    description: 'Free counselling helpline run by the Tata Institute of Social Sciences, staffed by trained counsellors.',
    tel: '9152987821',
    hours: 'Mon–Sat',
    reachOutNote: 'Call, email or chat',
  },
  {
    id: 'aasra',
    name: 'AASRA',
    description: 'Confidential, 24/7 helpline for anyone feeling suicidal or in emotional distress.',
    tel: '91-22-27546669',
    hours: '24/7',
    reachOutNote: 'Call — confidential, no need to give your name',
  },
  {
    id: 'emergency-112',
    name: 'National Emergency Number',
    description: 'India’s unified emergency number — police, fire, ambulance and immediate safety risk.',
    tel: '112',
    hours: '24/7',
    reachOutNote: 'Call for any immediate danger to life',
    featured: true,
  },
  {
    id: 'nimhans',
    name: 'NIMHANS Helpline',
    description: 'Toll-free helpline run by the National Institute of Mental Health and Neurosciences, Bengaluru, staffed by mental health professionals.',
    tel: '080-46110007',
    reachOutNote: 'Call for support and guidance from a mental health professional',
  },
  {
    id: 'christ-counselling',
    name: 'CHRIST University Counselling Cell (CCHS)',
    description: 'On-campus, confidential counselling for CHRIST students — the first call for anything that doesn’t need emergency services.',
    location: 'Centre for Counselling and Health Services (CCHS), Kengeri Campus, CHRIST University',
    email: 'cchs.kengeri@christuniversity.in',
    reachOutNote: 'Email to book a confidential appointment',
  },
];
