import Img from '../ui/Img';
import Icon from '../ui/Icon';
import Socials from '../ui/Socials';
import SectionHeading from '../ui/SectionHeading';
import styles from './ProfileSection.module.css';

/** Course curator / event speaker: yellow photo block on the left, bio on the right. */
export default function ProfileSection({ eyebrow, person, stats, socials, logos }) {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.photo}>
          <span className={styles.bg} aria-hidden="true" />
          <Img src={person.image} alt={person.name} className={styles.image} />
        </div>

        <div className={styles.info}>
          <SectionHeading eyebrow={eyebrow} title={person.name} />
          <p className={`lead ${styles.position}`}>{person.position}</p>

          {stats && (
            <ul className={styles.stats}>
              {stats.map(([icon, text]) => (
                <li key={text}>
                  <Icon name={icon} size={16} />
                  {text}
                </li>
              ))}
            </ul>
          )}

          {logos}

          <p className={styles.bio}>{person.bio}</p>
          <Socials items={socials} size={24} gap={24} className={styles.socials} />
        </div>
      </div>
    </section>
  );
}
