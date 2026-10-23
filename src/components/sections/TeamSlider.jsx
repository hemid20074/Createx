import { useRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import SliderControls from '../ui/SliderControls';
import TeamCard from '../cards/TeamCard';
import { team } from '../../data/people';
import styles from './TeamSlider.module.css';

/** "Meet our team" — horizontally scrolling row with prev/next arrows. */
export default function TeamSlider() {
  const trackRef = useRef(null);
  // duplicate the 4 tutors so the slider has something to scroll to
  const people = [...team, ...team.map((p) => ({ ...p, _dup: true }))];

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 30 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading eyebrow="Best tutors are all here" title="Meet our team" />
          <SliderControls onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
        </div>

        <div className={styles.track} ref={trackRef}>
          {people.map((p, i) => (
            <div className={styles.item} key={p.name + i}>
              <TeamCard person={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
