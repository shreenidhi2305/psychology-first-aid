// A single, simple two-tone line-icon style (24px grid, 2px stroke, rounded caps/joins)
// per the Haven design system's Iconography guidance. No icon set ships with Haven,
// so this is the site's own small set, drawn to match.

const paths: Record<string, string> = {
  phone:
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
  heart:
    'M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4.5 4.5 8.5C19 16.65 12 21 12 21z',
  chat: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M18 6 6 18M6 6l12 12',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 8v4l3 2',
  home: 'M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8.5Z',
  users:
    'M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20M14.5 6.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 20v-1.5a3 3 0 0 0-2.4-2.94M17 6.6a3 3 0 0 1 0 5.8',
  moon: 'M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z',
  wallet:
    'M3 7.5A1.5 1.5 0 0 1 4.5 6h13A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 3 16.5v-9ZM16 12h3v3h-3a1.5 1.5 0 0 1 0-3Z',
  mask: 'M12 3c4 0 7 2.5 7 7 0 5-3.5 8-7 11-3.5-3-7-6-7-11 0-4.5 3-7 7-7ZM9 11c0 .8.5 1.5 1.5 1.5S12 11.8 12 11M12 11c0 .8.5 1.5 1.5 1.5S15 11.8 15 11',
  cloudSun:
    'M8 15a4 4 0 1 1 1-7.9M8 15h9a3 3 0 0 0 0-6h-.3M4 3v1.5M4 7.5H2.5M6.5 4.9 5.5 5.9',
  check: 'M20 6 9 17l-5-5',
  shield:
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z',
  mapPin:
    'M12 22s7-6.7 7-12a7 7 0 1 0-14 0c0 5.3 7 12 7 12ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  book: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15ZM20 18H6.5A2.5 2.5 0 0 0 4 20.5',
  compass:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15 9l-2 5-5 2 2-5 5-2Z',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  mail: 'M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11ZM4 6.5l8 6 8-6',
};

export function Icon({
  name,
  className = 'icon',
  title,
}: {
  name: keyof typeof paths;
  className?: string;
  title?: string;
}) {
  const d = paths[name];
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d={d} />
    </svg>
  );
}
