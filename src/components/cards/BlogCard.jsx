import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import Img from '../ui/Img';
import { POST_TYPES } from '../../data/posts';
import styles from './BlogCard.module.css';

/** blog/podcast | blog/video | blog/article. `wide` = the 705/495px featured variant. */
export default function BlogCard({ post, wide = false }) {
  const t = POST_TYPES[post.type];
  const to = `/blog/${post.slug}`;

  return (
    <article className={`${styles.card} ${wide ? styles.wide : ''}`}>
      <Link to={to} className={styles.media} tabIndex={-1} aria-hidden="true">
        <Img src={post.image} alt="" className={styles.image} />
        <span className={styles.badge}>
          <Icon name={t.icon} size={16} />
          {t.label}
        </span>
      </Link>

      <div className={styles.content}>
        <p className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.metaItem}>
            <Icon name="calendar" size={16} />
            {post.date}
          </span>
          {post.duration && (
            <>
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.metaItem}>
                <Icon name="clock" size={16} />
                {post.duration}
              </span>
            </>
          )}
        </p>
        <h3 className={styles.title}>
          <Link to={to}>{post.title}</Link>
        </h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>

      <Link to={to} className={styles.more}>
        {t.action}
        <Icon name="arrowRight" size={24} />
      </Link>
    </article>
  );
}
