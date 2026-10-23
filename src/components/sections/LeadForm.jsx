import { useState } from 'react';
import Button from '../ui/Button';
import Img from '../ui/Img';
import SectionHeading from '../ui/SectionHeading';
import { Field } from '../ui/Form';
import styles from './LeadForm.module.css';

/**
 * Full name / Email / Phone form with an illustration.
 * Used for "Register for the course" (form right) and "Leave a request" (form left).
 */
export default function LeadForm({ eyebrow, title, submit, note, art, formSide = 'right' }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send the form data to your backend
    setSent(true);
  };

  return (
    <section className="section">
      <div className={`container ${styles.wrap} ${formSide === 'left' ? styles.formLeft : ''}`}>
        <div className={styles.art}>
          <Img src={art} alt="" />
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <div className={styles.fields}>
            <Field size="large" label="Full name" placeholder="Your full name" autoComplete="name" required />
            <Field
              size="large"
              type="email"
              label="Email"
              placeholder="Your working email"
              autoComplete="email"
              required
            />
            <Field
              size="large"
              type="tel"
              label="Phone"
              placeholder="Your phone number"
              autoComplete="tel"
            />
          </div>
          <Button type="submit" size="large" block>
            {sent ? 'Thank you! We’ll be in touch' : submit}
          </Button>
          {note && <p className={styles.note}>{note}</p>}
        </form>
      </div>
    </section>
  );
}
