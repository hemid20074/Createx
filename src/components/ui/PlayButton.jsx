import styles from './PlayButton.module.css';

/** play-btn/small → play-btn/small/hover (soft halo appears on hover). */
export default function PlayButton({ label, onClick, className = '' }) {
  return (
    <button type="button" className={`${styles.wrap} ${className}`} onClick={onClick}>
      <span className={styles.btn} aria-hidden="true">
        <svg width="14" height="16" viewBox="0 0 14 16">
          <path d="M13 6.27a2 2 0 0 1 0 3.46L3 15.5A2 2 0 0 1 0 13.77V2.23A2 2 0 0 1 3 .5z" />
        </svg>
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
