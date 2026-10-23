import styles from './SectionHeading.module.css';

/** Small uppercase eyebrow (h6) + big title (h1), as used across every section. */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  as: Tag = 'h2',
  className = '',
  titleClassName = 'h1',
}) {
  return (
    <div className={`${styles.heading} ${styles[align]} ${className}`}>
      {eyebrow && <p className="h6">{eyebrow}</p>}
      <Tag className={titleClassName}>{title}</Tag>
    </div>
  );
}
