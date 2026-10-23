import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BulletList from '../../components/ui/BulletList';
import Icon from '../../components/ui/Icon';
import Img from '../../components/ui/Img';
import Socials from '../../components/ui/Socials';
import { SearchInput } from '../../components/ui/Form';
import BlogCard from '../../components/cards/BlogCard';
import SubscribeSplit from '../../components/sections/SubscribeSplit';
import RelatedSlider from '../../components/sections/RelatedSlider';
import NotFound from '../NotFound/NotFound';
import { BLOG_TAGS, POST_TYPES, getPost, posts, trendingPosts } from '../../data/posts';
import styles from './Post.module.css';

function Share() {
  return (
    <div className={styles.share}>
      <span>Share:</span>
      <Socials items={['facebook', 'twitter', 'linkedin']} size={20} gap={12} />
    </div>
  );
}

function Tag({ children, active }) {
  return (
    <Link to="/blog" className={`${styles.tag} ${active ? styles.tagActive : ''}`}>
      {children}
    </Link>
  );
}

export default function Post() {
  const { slug } = useParams();
  const post = getPost(slug);
  const [search, setSearch] = useState('');
  if (!post) return <NotFound />;

  const t = POST_TYPES[post.type];
  const related = posts.filter((p) => p.slug !== post.slug).map((p) => ({ ...p, wide: false }));

  return (
    <>
      <section className={styles.page}>
        <div className={`container ${styles.layout}`}>
          <article className={styles.article}>
            <header>
              <p className={styles.metaTop}>
                <span className={styles.type}>
                  <Icon name={t.icon} size={16} />
                  {t.label}
                </span>
                <span className={styles.divider} aria-hidden="true" />
                <span>{post.category}</span>
              </p>
              <h1 className={`h1 ${styles.title}`}>{post.title}</h1>
              <div className={styles.metaRow}>
                <p className={styles.meta}>
                  <span>
                    <Icon name="calendar" size={16} />
                    {post.date}
                  </span>
                  <span>
                    <Icon name="clock" size={16} />
                    {post.duration || '4 min read'}
                  </span>
                </p>
                <Share />
              </div>
            </header>

            <div className={styles.hero}>
              <Img src="images/blog/post-hero.png" alt="" />
            </div>

            <div className={styles.body}>
              <p className={styles.leadText}>
                Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio.
                Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis
                est hendrerit ac euismod.
              </p>
              <p>
                At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis,
                vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus
                ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam
                nisl lacinia amet, odio. Mi varius viverra risus vel. Amet, morbi sed pharetra, elit eget mi
                potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit.
                Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus.
                In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi
                nunc, non.
              </p>

              <blockquote className={styles.quote}>
                <svg width="28" height="20" viewBox="0 0 28 20" aria-hidden="true">
                  <path d="M0 20V10.4L4 0h6L7.2 10H12v10zm16 0V10.4L20 0h6l-2.8 10H28v10z" />
                </svg>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus
                  lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
                  turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque,
                  ipsum.
                </p>
              </blockquote>

              <p>
                Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus
                blandit in neque amet non fringilla blandit:
              </p>
              <BulletList
                items={[
                  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                  'Vulputate placerat amet pulvinar lorem nisl.',
                  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                  'Etiam duis lobortis in fames ultrices commodo nibh.',
                ]}
                className={styles.list}
              />
              <p>
                Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare
                lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas.
                Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis
                tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla.
                Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.
              </p>
            </div>

            <footer className={styles.footer}>
              <div className={styles.tags}>
                <span>Tags:</span>
                <Tag>#learning</Tag>
                <Tag>#HR</Tag>
                <Tag>#self-development</Tag>
              </div>
              <Share />
            </footer>
          </article>

          <aside className={styles.sidebar}>
            <SearchInput placeholder="Search blog..." value={search} onChange={setSearch} />

            <div className={styles.widget}>
              <h2 className="h6">Author</h2>
              <div className={styles.author}>
                <Img src="images/avatars/kristin-watson.png" alt="" className={styles.authorImg} />
                <div>
                  <p className={styles.authorName}>Kristin Watson</p>
                  <p className={styles.authorRole}>Curator of Marketing Course</p>
                  <Socials items={['instagram', 'twitter', 'linkedin']} size={20} gap={12} className={styles.authorSocials} />
                </div>
              </div>
            </div>

            <div className={styles.widget}>
              <h2 className="h6">Trending Articles</h2>
              <ul className={styles.trending}>
                {trendingPosts.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`} className={styles.trend}>
                      <Img src={p.thumb || p.image} alt="" className={styles.trendImg} />
                      <span>
                        <span className={styles.trendDate}>
                          <Icon name="calendar" size={16} />
                          {p.date}
                        </span>
                        <span className={styles.trendTitle}>{p.title}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.widget}>
              <h2 className="h6">Tags</h2>
              <div className={styles.tagCloud}>
                {BLOG_TAGS.map((tag) => (
                  <Tag key={tag} active={tag === '#coding'}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SubscribeSplit />

      <RelatedSlider
        eyebrow="Our blog"
        title="You may also like"
        perView={3}
        items={related}
        renderItem={(p) => <BlogCard post={p} />}
        more={{ text: 'Do you want more articles, podcasts and videos?', label: 'Go to blog', to: '/blog' }}
      />
    </>
  );
}
