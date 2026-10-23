import { useId, useState } from 'react';
import Icon from './Icon';
import styles from './Accordion.module.css';

/** accordion: panel-open / panel with plus–minus icons. items: [{ label, title, text }] */
export default function Accordion({ items, defaultOpen = 0, className = '' }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <h3>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <Icon name={isOpen ? 'minus' : 'plus'} size={20} className={styles.icon} />
                <span className={styles.label}>{item.label}</span>
                <span className={styles.title}>{item.title}</span>
              </button>
            </h3>
            <div id={panelId} className={styles.panel} role="region" hidden={!isOpen}>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
