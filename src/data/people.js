export const team = [
  {
    name: 'Dianne Russell',
    role: 'Founder and CEO',
    image: 'images/team/dianne-russell.png',
  },
  {
    name: 'Jerome Bell',
    role: 'Founder and Program Director',
    image: 'images/team/jerome-bell.png',
  },
  {
    name: 'Kristin Watson',
    role: 'Marketer, Curator of Marketing Course',
    image: 'images/team/kristin-watson.png',
  },
  {
    name: 'Marvin McKinney',
    role: 'PM, Curator of Management Course',
    image: 'images/team/marvin-mckinney.png',
  },
];

// About page — full team grid (2 rows × 4)
export const fullTeam = [
  ...team,
  {
    name: 'Leslie Alexander Li',
    role: 'Curator of HR & Recruting Course',
    image: 'images/team/leslie-alexander.png',
  },
  {
    name: 'Kathryn Murphy',
    role: 'Analyst and Marketing specialist',
    image: 'images/team/kathryn-murphy.png',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Curator of Development Course',
    image: 'images/team/brooklyn-simmons.png',
  },
  {
    name: 'Cody Fisher',
    role: 'UX Designer, Curator of Design Course',
    image: 'images/team/cody-fisher.png',
  },
];

// "Our students work here" logo wall
export const companies = [
  ['InDepth Consulting', 'indepth'],
  ['Higher Fit', 'higher-fit'],
  ['Sentinal Consulting', 'sentinal'],
  ['Happy Home', 'happy-home'],
  ['For Sale', 'for-sale'],
  ['Sunset Realty', 'sunset-realty'],
  ['Atlantis Health', 'atlantis-health'],
  ['Del Mar Strategy', 'del-mar'],
  ['Complete Health', 'complete-health'],
  ['National Health', 'national-health'],
  ['Ultimate Gym', 'ultimate-gym'],
  ['United Strategy', 'united-strategy'],
].map(([name, file]) => ({ name, image: `images/companies/${file}.png` }));

const REVIEW =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.';

export const testimonials = [
  { name: 'Eleanor Pena', position: 'Position, Course', text: REVIEW, image: 'images/avatars/eleanor-pena.png' },
  { name: 'Albert Flores', position: 'Position, Course', text: REVIEW, image: 'images/avatars/eleanor-pena.png' },
  { name: 'Cody Fisher', position: 'Position, Course', text: REVIEW, image: 'images/avatars/eleanor-pena.png' },
  { name: 'Esther Howard', position: 'Position, Course', text: REVIEW, image: 'images/avatars/eleanor-pena.png' },
  { name: 'Jenny Wilson', position: 'Position, Course', text: REVIEW, image: 'images/avatars/eleanor-pena.png' },
];

export const stats = [
  { value: '1200', label: 'Students graduated' },
  { value: '84', label: 'Completed courses' },
  { value: '16', label: 'Qualified tutors' },
  { value: '5', label: 'Years of experience' },
];

export const partnerLogos = [
  { name: 'Del Mar Strategy', image: 'images/logos/del-mar.png' },
  { name: 'Sentinal Consulting', image: 'images/logos/sentinal.png' },
  { name: 'National Health', image: 'images/logos/national-health.png' },
];
