import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * btn/solid | btn/outline from the design system.
 * size: 'large' (52px) | 'regular' (44px) | 'small' (36px)
 * Renders a router <Link> when `to` is given, <a> for `href`, otherwise <button>.
 */
export default function Button({
  variant = 'solid',
  size = 'regular',
  to,
  href,
  block = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [styles.btn, styles[variant], styles[size], block && styles.block, className]
    .filter(Boolean)
    .join(' ');
  const inner = <span className={styles.label}>{children}</span>;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  );
}
