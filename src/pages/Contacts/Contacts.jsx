import { useState } from 'react';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import Img from '../../components/ui/Img';
import SectionHeading from '../../components/ui/SectionHeading';
import Socials from '../../components/ui/Socials';
import { Checkbox, Field } from '../../components/ui/Form';
import styles from './Contacts.module.css';

const CONTACTS = [
  { icon: 'chat', label: 'Talk to us:', value: 'hello@createx.com', href: 'mailto:hello@createx.com' },
  { icon: 'phone', label: 'Call us:', value: '(405) 555-0128', href: 'tel:4055550128' },
  { icon: 'pin', label: 'Address:', value: '2464 Royal Ln. Mesa, New Jersey 45463, USA' },
];

export default function Contacts() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send the message to your backend / form service
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <section className={styles.info}>
        <div className={`container ${styles.infoGrid}`}>
          <div>
            <SectionHeading eyebrow="Contact info" title="Get in touch" as="h1" />
            <ul className={styles.list}>
              {CONTACTS.map((c) => (
                <li key={c.label} className={styles.item}>
                  <Icon name={c.icon} size={24} className={styles.icon} />
                  <span>
                    <span className={styles.label}>{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className={styles.value}>
                        {c.value}
                      </a>
                    ) : (
                      <span className={styles.value}>{c.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className={styles.follow}>
              <p className="h4">Follow us:</p>
              <Socials size={24} gap={32} />
            </div>
          </div>

          <div className={styles.map}>
            <Img src="images/map.jpg" alt="Map showing the Createx office location" />
            <span className={styles.pin} aria-hidden="true">
              <Icon name="pin" size={22} strokeWidth={2} />
            </span>
          </div>
        </div>
      </section>

      <section className={`section ${styles.formSection}`}>
        <div className={`container ${styles.formGrid}`}>
          <div className={styles.art}>
            <Img src="illustrations/contacts.svg" alt="" />
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <SectionHeading eyebrow="Any questions?" title="Drop us a line" />
            <div className={styles.fields}>
              <Field size="large" label="First Name*" placeholder="Your first name" autoComplete="given-name" required />
              <Field size="large" label="Last Name*" placeholder="Your last name" autoComplete="family-name" required />
              <Field size="large" type="email" label="Email*" placeholder="Your working email" autoComplete="email" required />
              <Field size="large" type="tel" label="Phone" placeholder="Your phone number" autoComplete="tel" />
              <Field
                size="large"
                as="textarea"
                label="Message*"
                placeholder="Your message"
                required
                className={styles.message}
              />
            </div>
            <div className={styles.bottom}>
              <Checkbox size="medium">I agree to receive communications from Createx Online School</Checkbox>
              <Button type="submit" size="large" className={styles.submit}>
                {sent ? 'Message sent!' : 'Send message'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
