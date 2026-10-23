export const EVENT_TYPES = ['All themes', 'Online lecture', 'Online workshop', 'Online master-class'];

const base = [
  {
    day: '05',
    month: 'August',
    short: 'Aug',
    time: '11:00 – 14:00',
    title: 'Formation of the organizational structure of the company in the face of uncertainty.',
    type: 'Online master-class',
  },
  {
    day: '24',
    month: 'July',
    short: 'Jul',
    time: '11:00 – 12:30',
    title: 'Building a customer service department. Best Practices.',
    type: 'Online lecture',
  },
  {
    day: '16',
    month: 'July',
    short: 'Jul',
    time: '10:00 – 13:00',
    title: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
    type: 'Online workshop',
  },
  {
    day: '10',
    month: 'July',
    short: 'Jul',
    time: '12:00 – 14:00',
    title: 'Mobile app UX: how to research what users really need.',
    type: 'Online lecture',
  },
  {
    day: '03',
    month: 'July',
    short: 'Jul',
    time: '11:00 – 13:00',
    title: 'Marketing analytics: metrics every small business should track.',
    type: 'Online master-class',
  },
  {
    day: '28',
    month: 'June',
    short: 'Jun',
    time: '10:00 – 12:00',
    title: 'Recruiting in IT: how to find and keep strong developers.',
    type: 'Online workshop',
  },
  {
    day: '21',
    month: 'June',
    short: 'Jun',
    time: '15:00 – 17:00',
    title: 'Team leadership. How to give feedback that helps people grow.',
    type: 'Online lecture',
  },
  {
    day: '14',
    month: 'June',
    short: 'Jun',
    time: '11:00 – 14:00',
    title: 'Product strategy: from idea to the first paying customers.',
    type: 'Online master-class',
  },
  {
    day: '07',
    month: 'June',
    short: 'Jun',
    time: '10:00 – 13:00',
    title: 'Graphic design basics: composition, color and typography.',
    type: 'Online workshop',
  },
];

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);

export const events = base.map((e) => ({ ...e, slug: slugify(e.title) }));

export const getEvent = (slug) => events.find((e) => e.slug === slug);

// Single event page content
export const eventDetails = {
  topics: [
    ['Theme 1.', 'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'],
    ['Theme 2.', 'Orci commodo, viverra orci mollis ut euismod.', 'Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.'],
    ['Theme 3.', 'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'],
    ['Theme 4.', 'In id dolor quis nunc, urna hendrerit pharetra.', 'Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.'],
  ],
  price: { value: 'Free', text: 'Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.' },
  timeText: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
  speaker: {
    name: 'Kathryn Murphy',
    position: 'Analyst and Marketing specialist in IT company',
    image: 'images/speaker-kathryn-murphy.png',
    bio: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.',
  },
  forWhom: [
    'Specialists with more than 1 year of active work experience',
    'Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces',
    'Professional designers who want to feel more confident in UX',
  ],
};
