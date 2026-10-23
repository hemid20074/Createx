// Generic line icons (24×24 grid, stroke = currentColor).
const paths = {
  arrowRight: <path d="M4 12h16m-6-6 6 6-6 6" />,
  arrowLeft: <path d="M20 12H4m6-6-6 6 6 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  checkCircle: (
    <>
      <path d="M21 11.1V12a9 9 0 1 1-5.3-8.2" />
      <path d="M21 4 12 13l-3-3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  files: (
    <>
      <path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12z" />
      <path d="M14 2.5v5h5M9 13h6M9 17h6" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8.5 5 3.5-5 3.5z" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2.5" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3.5" />
    </>
  ),
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" />,
  like: (
    <>
      <path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z" />
      <path d="M7 10l4-7.5a2.5 2.5 0 0 1 2.5 2.5v4h5.6a2 2 0 0 1 2 2.3l-1.4 8a2 2 0 0 1-2 1.7H7" />
    </>
  ),
  layers: <path d="m12 3 9 5-9 5-9-5zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  chat: (
    <path d="M20.5 11.5a8.4 8.4 0 0 1-12.2 7.5L3.5 20.5l1.5-4.6A8.4 8.4 0 1 1 20.5 11.5z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="7.5" r="4.5" />
      <path d="M3.5 21.5c.6-4.2 4.2-7 8.5-7s7.9 2.8 8.5 7" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
  ),
  plus: <path d="M12 4v16M4 12h16" />,
  minus: <path d="M4 12h16" />,
  cross: <path d="M5 5l14 14M19 5 5 19" />,
  eye: (
    <>
      <path d="M1.5 12S5.5 4.5 12 4.5 22.5 12 22.5 12 18.5 19.5 12 19.5 1.5 12 1.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20.5 20.5-4.5-4.5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  list: <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />,
  refresh: (
    <>
      <path d="M20.5 12a8.5 8.5 0 0 1-15.3 5.1M3.5 12A8.5 8.5 0 0 1 18.8 6.9" />
      <path d="M19 2.5v4.5h-4.5M5 21.5V17h4.5" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  // larger "value" icons (About page)
  structure: (
    <>
      <rect x="7" y="2.5" width="10" height="6" rx="0.5" />
      <path d="M9 5.5h1M12 8.5v3.5M4.5 15v-3h15v3M12 12v3" />
      <rect x="2" y="15" width="5" height="5" rx="0.5" />
      <rect x="9.5" y="15" width="5" height="5" rx="0.5" />
      <rect x="17" y="15" width="5" height="5" rx="0.5" />
    </>
  ),
  chats: (
    <>
      <path d="M13 3.5a6 6 0 1 1-2.6 11.4L7 16l1-3A6 6 0 0 1 13 3.5z" />
      <path d="M7.6 9.8A5 5 0 0 0 4 18.3L3 21l3-1a5 5 0 0 0 6.6-2.4" />
      <path d="M11 9.5v.01M13 9.5v.01M15 9.5v.01M10.5 11.5c.7.8 1.5 1.2 2.5 1.2s1.8-.4 2.5-1.2" />
    </>
  ),
  target: (
    <>
      <circle cx="11" cy="13" r="8.5" />
      <circle cx="11" cy="13" r="5.5" />
      <circle cx="11" cy="13" r="2.5" />
      <path d="m11 13 9-9M17 4l3 .1-.1 3M5 20.5l-1.5 2M17 20.5l1.5 2" />
    </>
  ),
  schedule: (
    <>
      <rect x="2.5" y="4" width="19" height="17" rx="2" />
      <path d="M2.5 9h19M7 2v4M17 2v4" />
      <circle cx="7" cy="13" r="1" />
      <circle cx="12" cy="13" r="1" />
      <circle cx="17" cy="13" r="1" />
      <circle cx="7" cy="17" r="1" />
      <circle cx="12" cy="17" r="1" />
      <circle cx="17" cy="17" r="1" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c.7-4 4-6.5 8-6.5s7.3 2.5 8 6.5" />
    </>
  ),
};

export default function Icon({ name, size = 16, strokeWidth = 1.6, className, style, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ flexShrink: 0, ...style }}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
