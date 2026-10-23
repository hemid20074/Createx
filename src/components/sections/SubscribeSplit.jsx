import Button from '../ui/Button';
import Img from '../ui/Img';
import { Checkbox } from '../ui/Form';
import styles from './SubscribeSplit.module.css';

/**
 * Newsletter block with an illustration on the left:
 * variant 'band' — full-width soft gradient (Blog, Single post)
 * variant 'box'  — rounded card inside the container (Event page)
 */
export default function SubscribeSplit({
  variant = 'band',
  title = 'Want to get the best articles weekly? Subscribe to our newsletter!',
  art = 'illustrations/blog-subscribe.svg',
}) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.inner}>
          <div className={styles.art}>
            <Img src={art} alt="" />
          </div>
          <form className={styles.content} onSubmit={(e) => e.preventDefault()}>
            <h2 className={variant === 'box' ? 'h2' : 'h2'}>{title}</h2>
            <div className={styles.row}>
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
            </div>
            <Checkbox size="medium">
              I agree to receive communications from Createx Online School
            </Checkbox>
          </form>
        </div>
      </div>
    </section>
  );
}
