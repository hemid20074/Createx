import Img from '../ui/Img';
import Socials from '../ui/Socials';
import styles from './TeamCard.module.css';

/** team/idle → team/hover (dark gradient + socials appear on hover/focus). */
export default function TeamCard({ person }) {
  return (
    <article className={styles.card} tabIndex={0}>
      <div className={styles.media}>
        <Img src={person.image} alt={person.name} className={styles.image} />
        <div className={styles.overlay}>
          <Socials
            items={['facebook', 'instagram', 'linkedin']}
            size={20}
            gap={12}
            tone="white"
          />
        </div>
      </div>
      <h3 className={styles.name}>{person.name}</h3>
      <p className={styles.role}>{person.role}</p>
    </article>
  );
}
