import Icon from './Icon';
import styles from './Pagination.module.css';

export default function Pagination({ page, pages, onChange, className = '' }) {
  if (pages <= 1) return null;
  return (
    <nav className={`${styles.pagination} ${className}`} aria-label="Pagination">
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          className={`${styles.page} ${n === page ? styles.active : ''}`}
          aria-current={n === page ? 'page' : undefined}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        className={styles.next}
        onClick={() => onChange(Math.min(page + 1, pages))}
        disabled={page === pages}
        aria-label="Next page"
      >
        <Icon name="arrowRight" size={24} />
      </button>
    </nav>
  );
}
