import Icon from './Icon';
import styles from './FilterTabs.module.css';

/** tab/number and tab/icon — outlined when active. items: [{ value, label, icon?, count? }] */
export default function FilterTabs({ items, value, onChange, label = 'Filter', className = '' }) {
  return (
    <div className={`${styles.tabs} ${className}`} role="tablist" aria-label={label}>
      {items.map((t) => (
        <button
          key={t.value}
          type="button"
          role="tab"
          aria-selected={t.value === value}
          className={`${styles.tab} ${t.value === value ? styles.active : ''}`}
          onClick={() => onChange(t.value)}
        >
          {t.icon && <Icon name={t.icon} size={16} />}
          <span>{t.label}</span>
          {t.count != null && <sup className={styles.count}>{t.count}</sup>}
        </button>
      ))}
    </div>
  );
}
