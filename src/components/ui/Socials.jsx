import { MaskIcon } from './Img';
import styles from './Socials.module.css';

const LABELS = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  youtube: 'YouTube',
  telegram: 'Telegram',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  google: 'Google',
  behance: 'Behance',
};

/**
 * Row of social icons. `tone`: 'dark' (gray → primary on hover),
 * 'light' (white, used on dark footer / photo overlays).
 */
export default function Socials({
  items = ['facebook', 'twitter', 'youtube', 'telegram', 'instagram', 'linkedin'],
  size = 24,
  gap = 20,
  tone = 'dark',
  className = '',
}) {
  return (
    <ul className={`${styles.list} ${styles[tone]} ${className}`} style={{ gap }}>
      {items.map((name) => (
        <li key={name}>
          <a href="#" className={styles.link} aria-label={LABELS[name] || name}>
            <MaskIcon src={`social/${name}.svg`} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
