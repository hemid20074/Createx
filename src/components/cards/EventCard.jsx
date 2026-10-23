import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import styles from './EventCard.module.css';

/** event/list (full-width row) and event/card (grid tile). */
export default function EventCard({ event, layout = 'list' }) {
  const to = `/events/${event.slug}`;

  if (layout === 'grid') {
    return (
      <article className={`${styles.card} ${styles.grid}`}>
        <p className={styles.gridDate}>
          <span>
            {event.day} {event.short}
          </span>
          <span className={styles.time}>{event.time}</span>
        </p>
        <div className={styles.info}>
          <h3 className={styles.gridTitle}>
            <Link to={to} className={styles.titleLink}>
              {event.title}
            </Link>
          </h3>
          <p className={styles.type}>{event.type}</p>
        </div>
        <Button to={to} variant="outline" size="regular" block className={styles.btn} tabIndex={-1}>
          View more
        </Button>
      </article>
    );
  }

  return (
    <article className={`${styles.card} ${styles.list}`}>
      <div className={styles.date}>
        <span className={styles.day}>{event.day}</span>
        <span className={styles.when}>
          <span className={styles.month}>{event.month}</span>
          <span className={styles.time}>{event.time}</span>
        </span>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>
          <Link to={to} className={styles.titleLink}>
            {event.title}
          </Link>
        </h3>
        <p className={styles.type}>{event.type}</p>
      </div>

      <Button to={to} variant="outline" size="regular" className={styles.btn} tabIndex={-1}>
        View more
      </Button>
    </article>
  );
}
