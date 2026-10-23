import Img from '../ui/Img';
import SectionHeading from '../ui/SectionHeading';
import { partnerLogos } from '../../data/people';
import styles from './Certificate.module.css';

export function PartnerLogos({ className = '' }) {
  return (
    <ul className={`${styles.logos} ${className}`}>
      {partnerLogos.map((l) => (
        <li key={l.name} className={styles.logo}>
          <Img src={l.image} alt={l.name} />
        </li>
      ))}
    </ul>
  );
}

export default function Certificate() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.info}>
          <SectionHeading eyebrow="Createx Certificate" title="Your expertise will be confirmed" />
          <p className={styles.text}>
            We are accredited by international professional organizations and institutes:
          </p>
          <PartnerLogos />
        </div>
        <div className={styles.image}>
          <Img src="images/certificate.png" alt="Createx certificate example" />
        </div>
      </div>
    </section>
  );
}
