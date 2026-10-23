// Category → badge color (from the Figma design tokens)
export const CATEGORY_COLORS = {
  Marketing: 'var(--success)',
  Management: 'var(--info)',
  'HR & Recruting': 'var(--warning)',
  Design: 'var(--pink)',
  Development: 'var(--purple)',
};

export const COURSE_CATEGORIES = Object.keys(CATEGORY_COLORS);

// `image` — square portrait used by the horizontal card,
// `cover` — wide crop used by the vertical card on the Courses page.
export const courses = [
  {
    slug: 'google-ads-training',
    title: 'The Ultimate Google Ads Training Course',
    category: 'Marketing',
    price: 100,
    author: 'Jerome Bell',
    image: 'images/people/jerome-bell.png',
    cover: 'images/courses/google-ads-training.png',
  },
  {
    slug: 'product-management-fundamentals',
    title: 'Prduct Management Fundamentals',
    category: 'Management',
    price: 480,
    author: 'Marvin McKinney',
    image: 'images/people/marvin-mckinney.png',
    cover: 'images/courses/product-management-fundamentals.png',
  },
  {
    slug: 'hr-management-analytics',
    title: 'HR  Management and Analytics',
    category: 'HR & Recruting',
    price: 200,
    author: 'Leslie Alexander Li',
    image: 'images/people/leslie-alexander.png',
    cover: 'images/courses/hr-management-analytics.png',
  },
  {
    slug: 'brand-management-pr',
    title: 'Brand Management & PR Communications',
    category: 'Marketing',
    price: 530,
    author: 'Kristin Watson',
    image: 'images/people/kristin-watson.png',
    cover: 'images/courses/brand-management-pr.png',
  },
  {
    slug: 'graphic-design-basic',
    title: 'Graphic Design Basic',
    category: 'Design',
    price: 500,
    author: 'Guy Hawkins',
    image: 'images/people/guy-hawkins.png',
    cover: 'images/courses/graphic-design-basic.png',
  },
  {
    slug: 'business-development-management',
    title: 'Business Development Management',
    category: 'Management',
    price: 400,
    author: 'Dianne Russell',
    image: 'images/people/dianne-russell.png',
    cover: 'images/courses/business-development-management.png',
  },
  {
    slug: 'highload-software-architecture',
    title: 'Highload Software Architecture',
    category: 'Development',
    price: 600,
    author: 'Brooklyn Simmons',
    image: 'images/courses/highload-software-architecture.png',
    cover: 'images/courses/highload-software-architecture.png',
  },
  {
    slug: 'hr-selection-recruitment',
    title: 'Human Resources – Selection and Recruitment',
    category: 'HR & Recruting',
    price: 150,
    author: 'Kathryn Murphy',
    image: 'images/courses/hr-selection-recruitment.png',
    cover: 'images/courses/hr-selection-recruitment.png',
  },
  {
    slug: 'ux-human-centered-design',
    title: 'User Experience. Human-centered Design',
    category: 'Design',
    price: 240,
    author: 'Cody Fisher',
    image: 'images/courses/ux-human-centered-design.png',
    cover: 'images/courses/ux-human-centered-design.png',
  },
];

// Featured on the homepage, in the order of the design
export const featuredCourses = [
  'google-ads-training',
  'product-management-fundamentals',
  'hr-management-analytics',
  'brand-management-pr',
  'business-development-management',
  'graphic-design-basic',
].map((slug) => courses.find((c) => c.slug === slug));

export const getCourse = (slug) => courses.find((c) => c.slug === slug);

// Details shown on the single course page (same template for every course)
export const courseDetails = {
  pageTitle: 'User Experience. Principles of Human-Centered Design',
  about:
    'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
  learn: [
    'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
    'Vulputate placerat amet pulvinar lorem nisl.',
    'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
    'Etiam duis lobortis in fames ultrices commodo nibh.',
    'Fringilla in nec risus congue venenatis pretium posuere nec.',
    'Cursus eu pretium, vulputate tempus quam massa sed at.',
  ],
  facts: [
    { label: 'Dates', value: 'Sept 7 – Nov 2', text: 'Metus turpis sit lorem lacus, in elit tellus lacus.' },
    {
      label: 'Duration',
      value: '2 months – 8 lessons',
      text: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
    },
    {
      label: 'Price',
      value: '$120 per month',
      text: 'Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.',
    },
  ],
  curator: {
    name: 'Cody Fisher',
    position: 'Senior UX designer in IT Product Company',
    rating: '4.9 rate',
    courses: '4 courses',
    students: '350 students',
    image: 'images/curator-cody-fisher.png',
    bio: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.',
  },
  steps: [
    {
      title: 'Watching online video lectures',
      text: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
    },
    {
      title: 'Passing test',
      text: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.',
    },
    {
      title: 'Curator’s feedback',
      text: 'Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.',
    },
    {
      title: 'Corrections if needed',
      text: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
    },
  ],
  forWhom: [
    'Specialists with more than 1 year of active work experience',
    'Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces',
    'Professional designers who want to feel more confident in UX',
    'Specialists who would like to structure their knowledge, fill in the gaps',
  ],
  program: [
    ['Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'],
    ['Orci commodo, viverra orci mollis ut euismod.', 'Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.'],
    ['Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id. Nulla amet, sagittis potenti rhoncus sit.'],
    ['In id dolor quis nunc, urna hendrerit pharetra.', 'Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Elit lectus nec pulvinar aliquet donec enim, ornare.'],
    ['Est, ut tempus id rutrum facilisi.', 'Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis.'],
    ['Amet nec in pellentesque.', 'Commodo nunc orci vitae accumsan id. Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim.'],
    ['Massa vel arcu mauris, id vel rhoncus mattis quis.', 'Elit lectus nec pulvinar aliquet donec enim, ornare. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis.'],
    ['Neque, cursus sapien nullam id.', 'Nulla amet, sagittis potenti rhoncus sit. Lacus facilisi curabitur turpis varius mauris. Commodo nunc orci vitae accumsan id.'],
  ],
};
