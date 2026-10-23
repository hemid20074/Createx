import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import Img from '../ui/Img';
import Socials from '../ui/Socials';
import { NAV_LINKS } from './Navbar';
import styles from './Footer.module.css';

const COURSE_LINKS = ['Marketing', 'Management', 'HR & Recruting', 'Design', 'Development'];

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.main}`}>
        <div className={styles.about}>
          <Link to="/" className={styles.logo} aria-label="Createx — home">
            <Img src="logo-light.svg" alt="Createx" width="130" height="22" />
          </Link>
          <p className={styles.text}>
            Createx Online School is a leader in online studying. We have lots of courses and
            programs from the main market experts. We provide relevant approaches to online
            learning, internships and employment in the largest companies in the country.
          </p>
          <Socials tone="light" size={24} gap={20} className={styles.socials} />
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3 className={styles.title}>Site map</h3>
            <ul className={styles.links}>
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>Courses</h3>
            <ul className={styles.links}>
              {COURSE_LINKS.map((c) => (
                <li key={c}>
                  <Link to={`/courses?category=${encodeURIComponent(c)}`}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>Contact us</h3>
            <ul className={styles.links}>
              <li>
                <a href="tel:4055550128" className={styles.contact}>
                  <Icon name="phone" size={16} />
                  (405) 555-0128
                </a>
              </li>
              <li>
                <a href="mailto:hello@createx.com" className={styles.contact}>
                  <Icon name="mail" size={16} />
                  hello@createx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
          <h3 className={styles.title}>Sign up to our newsletter</h3>
          <div className={styles.inputWrap}>
            <input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className={styles.input}
            />
            <button type="submit" className={styles.send} aria-label="Subscribe">
              <Icon name="arrowRight" size={16} />
            </button>
          </div>
          <p className={styles.note}>
            *Subscribe to our newsletter to receive communications and early updates from Createx
            SEO Agency.
          </p>
        </form>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>
            © All rights reserved. Made with
            <Icon name="heart" size={16} className={styles.heart} />
            by Createx Studio
          </p>
          <button type="button" className={styles.top} onClick={toTop}>
            Go to top
          </button>
        </div>
      </div>
    </footer>
  );
}
