import { stats } from '../../data/people';
import styles from './Stats.module.css';

/** "1200 Students graduated • 84 Completed courses • …". layout: 'row' | 'column'. */
export default function Stats({ layout = 'row', className = '' }) {
  return (
    <ul className={`${styles.stats} ${styles[layout]} ${className}`}>
      {stats.map((s) => (
        <li key={s.label} className={styles.item}>
          <span className={styles.value}>{s.value}</span>
          <span className={styles.label}>{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
