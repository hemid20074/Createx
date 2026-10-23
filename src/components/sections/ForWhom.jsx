import BulletList from '../ui/BulletList';
import SectionHeading from '../ui/SectionHeading';
import styles from './ForWhom.module.css';

export default function ForWhom({ title, items }) {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <SectionHeading eyebrow="For whom?" title={title} className={styles.heading} />
        <BulletList items={items} size="lead" className={styles.list} />
      </div>
    </section>
  );
}
