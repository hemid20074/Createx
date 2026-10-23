import { useId, useState } from 'react';
import Icon from './Icon';
import styles from './Form.module.css';

/** form/default, form/large, form/default/icon — label above a bordered input. */
export function Field({
  label,
  size = 'default',
  type = 'text',
  as = 'input',
  className = '',
  ...inputProps
}) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';
  const Tag = as;

  return (
    <div className={`${styles.field} ${styles[size]} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.control}>
        <Tag
          id={id}
          type={as === 'input' ? (isPassword && visible ? 'text' : type) : undefined}
          className={`${styles.input} ${as === 'textarea' ? styles.textarea : ''}`}
          {...inputProps}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.eye}
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            <Icon name="eye" size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

/** input/default dropdown (category, sort, per-page). */
export function Select({ label, options, value, onChange, className = '', size = 'default', inline }) {
  const id = useId();
  return (
    <div className={`${inline ? styles.inline : styles.field} ${styles[size]} ${className}`}>
      {label && (
        <label htmlFor={id} className={inline ? styles.inlineLabel : styles.label}>
          {label}
        </label>
      )}
      <div className={styles.control}>
        <select
          id={id}
          className={`${styles.input} ${styles.select}`}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        >
          {options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            );
          })}
        </select>
        <Icon name="chevronDown" size={16} className={styles.chevron} />
      </div>
    </div>
  );
}

/** input with a search icon on the right. */
export function SearchInput({ placeholder = 'Search...', value, onChange, className = '' }) {
  return (
    <div className={`${styles.control} ${styles.default} ${className}`}>
      <input
        type="search"
        className={`${styles.input} ${styles.searchInput}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-label={placeholder}
      />
      <Icon name="search" size={16} className={styles.searchIcon} />
    </div>
  );
}

/** checkbox/checked + label. */
export function Checkbox({ children, defaultChecked = true, className = '', size = 'small', ...rest }) {
  return (
    <label className={`${styles.checkbox} ${styles['check' + size]} ${className}`}>
      <input type="checkbox" defaultChecked={defaultChecked} {...rest} />
      <span className={styles.box} aria-hidden="true">
        <Icon name="check" size={12} strokeWidth={2.5} />
      </span>
      <span>{children}</span>
    </label>
  );
}
