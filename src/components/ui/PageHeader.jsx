import Decor from './Decor';
import SectionHeading from './SectionHeading';
import styles from './PageHeader.module.css';

/**
 * Top of an inner page.
 * variant 'plain'  — centered eyebrow + title on white (Courses, Events, Blog)
 * variant 'banner' — 468px gradient band with decorative shapes (Course, Event)
 */
export default function PageHeader({ eyebrow, title, variant = 'plain' }) {
  if (variant === 'banner') {
    return (
      <section className={styles.banner}>
        <div className={styles.decor} aria-hidden="true">
          <Decor src="shapes/circles.svg" style={{ left: -112, top: 330, width: 284 }} opacity={0.2} />
          <Decor src="shapes/dots.svg" style={{ right: -30, top: 123, width: 187 }} opacity={0.8} />
          <Decor src="shapes/quotes.svg" style={{ left: 172, top: 128, width: 88 }} />
          <Decor src="shapes/chevrons.svg" style={{ right: 267, top: 410, width: 110 }} rotate={-45} />
        </div>
        <div className={`container ${styles.bannerInner}`}>
          <SectionHeading eyebrow={eyebrow} title={title} align="center" as="h1" />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.plain}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" as="h1" />
      </div>
    </section>
  );
}
