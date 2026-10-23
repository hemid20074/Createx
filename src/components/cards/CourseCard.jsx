import { Link } from 'react-router-dom';
import Img from '../ui/Img';
import { CATEGORY_COLORS } from '../../data/courses';
import styles from './CourseCard.module.css';

export function Badge({ category }) {
  return (
    <span className={styles.badge} style={{ background: CATEGORY_COLORS[category] || 'var(--info)' }}>
      {category}
    </span>
  );
}

/** card/horisontal (homepage, related courses) and card/vertical (courses grid). */
export default function CourseCard({ course, layout = 'horizontal' }) {
  return (
    <Link to={`/courses/${course.slug}`} className={`${styles.card} ${styles[layout]}`}>
      <div className={styles.media}>
        <Img
          src={layout === 'vertical' ? course.cover || course.image : course.image}
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <Badge category={course.category} />
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.info}>
          <span className={styles.price}>${course.price}</span>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.author}>by {course.author}</span>
        </p>
      </div>
    </Link>
  );
}
