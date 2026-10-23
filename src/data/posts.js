// type: 'podcast' | 'video' | 'article'
export const POST_TYPES = {
  podcast: { label: 'Podcast', plural: 'Podcasts', icon: 'mic', action: 'Listen' },
  video: { label: 'Video', plural: 'Videos', icon: 'play', action: 'Watch' },
  article: { label: 'Article', plural: 'Articles', icon: 'files', action: 'Read' },
};

export const BLOG_CATEGORIES = ['All themes', 'Marketing', 'Management', 'HR & Recruting', 'Design', 'Development'];

// Blog page, in the order of the design (rows of 3, then 2 wide, then 3)
export const posts = [
  {
    slug: 'traffic-arbitrage',
    type: 'podcast',
    category: 'Marketing',
    date: 'September 4, 2020',
    duration: '36 min',
    title: 'What is traffic arbitrage and does it really make money?',
    excerpt:
      'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
    image: 'images/blog/traffic-arbitrage.png',
    thumb: 'images/blog/thumb-traffic.png',
  },
  {
    slug: 'first-programming-language',
    type: 'article',
    category: 'Development',
    date: 'September 1, 2020',
    title: 'How to choose the first programming language for a beginner',
    excerpt:
      'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
    image: 'images/blog/programming-language.png',
  },
  {
    slug: 'creative-profession',
    type: 'video',
    category: 'Design',
    date: 'August 8, 2020',
    duration: '40 min',
    title: 'Should you choose a creative profession if you are attracted to creativity?',
    excerpt:
      'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    image: 'images/blog/creative-profession.png',
  },
  {
    slug: 'hr-statistics',
    type: 'article',
    category: 'HR & Recruting',
    date: 'August 3, 2020',
    title: 'HR statistics: job search, interviews, hiring and recruiting',
    excerpt:
      'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
    image: 'images/blog/hr-statistics.png',
    wide: true,
  },
  {
    slug: 'product-feedback',
    type: 'video',
    category: 'Management',
    date: 'August 2, 2020',
    duration: '45 min',
    title: 'What to do and who to talk to if you want to get feedback on the product',
    excerpt:
      'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
    image: 'images/blog/product-feedback-wide.png',
    thumb: 'images/blog/thumb-feedback.png',
    wide: true,
  },
  {
    slug: 'color-profiles',
    type: 'podcast',
    category: 'Design',
    date: 'July 28, 2020',
    duration: '36 min',
    title: 'What are color profiles and how they work in graphic design',
    excerpt:
      'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    image: 'images/blog/color-profiles.png',
  },
  {
    slug: 'startup-team',
    type: 'video',
    category: 'Management',
    date: 'July 15, 2020',
    duration: '45 min',
    title: 'Startup: how to build a team that will live longer than a year',
    excerpt:
      'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
    image: 'images/blog/startup-team.png',
    thumb: 'images/blog/thumb-startup.png',
  },
  {
    slug: 'customers-love-business',
    type: 'article',
    category: 'Marketing',
    date: 'July 9, 2020',
    title: 'How to get customers to love your business from the start',
    excerpt:
      'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
    image: 'images/blog/customers-love.png',
  },
];

// "Latest posts" block on the homepage / About page uses its own artwork
export const latestPosts = [
  {
    ...posts[0],
    image: 'images/blog/podcast-1.png',
  },
  {
    ...posts[4],
    date: 'August 25, 2020',
    excerpt:
      'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
    image: 'images/blog/video-1.png',
    wide: false,
  },
  {
    ...posts[2],
    type: 'article',
    duration: undefined,
    image: 'images/blog/article-1.png',
  },
];

export const trendingPosts = [posts[0], posts[6], posts[4]];

export const BLOG_TAGS = ['#marketing', '#recruiting', '#coding', '#learning', '#HR', '#self-development'];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
