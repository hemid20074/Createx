import Icon from './Icon';
import styles from './BulletList.module.css';

/** bulleted-list with the primary check icon. size: 'base' (16px) | 'lead' (20px). */
export default function BulletList({ items, size = 'base', className = '' }) {
  return (
    <ul className={`${styles.list} ${styles[size]} ${className}`}>
      {items.map((text) => (
        <li key={text} className={styles.item}>
          <Icon name="checkCircle" size={size === 'lead' ? 20 : 16} className={styles.icon} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
