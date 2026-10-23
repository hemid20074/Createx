import Button from '../ui/Button';
import Img from '../ui/Img';
import SectionHeading from '../ui/SectionHeading';
import styles from './Subscribe.module.css';

/** "Don't miss anything" — gradient band with the graduates illustration on both sides. */
export default function Subscribe() {
  return (
    <section className={styles.section}>
      <Img src="illustrations/graduates.svg" alt="" className={`${styles.art} ${styles.left}`} />
      <Img src="illustrations/graduates.svg" alt="" className={`${styles.art} ${styles.right}`} />

      <div className={`container ${styles.inner}`}>
        <SectionHeading
          eyebrow="Don’t miss anything"
          title="Subscribe to the Createx School announcements"
          align="center"
        />
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            required
            placeholder="Your working email"
            aria-label="Your working email"
            className={styles.input}
          />
          <Button type="submit" size="large">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
