import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import BlogCard from '../cards/BlogCard';
import { latestPosts } from '../../data/posts';
import styles from './Grid.module.css';

export default function LatestPosts() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading eyebrow="Our blog" title="Latest posts" />
          <Button to="/blog" size="large">
            Go to blog
          </Button>
        </div>
        <div className={`${styles.grid3} ${styles.mt60}`}>
          {latestPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
