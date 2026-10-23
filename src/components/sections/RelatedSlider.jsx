import { useRef } from 'react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import SliderControls from '../ui/SliderControls';
import styles from './RelatedSlider.module.css';

/**
 * "You may also like" carousel. Scroll-snap track + prev/next arrows,
 * then a "Do you want more?" call to action.
 */
export default function RelatedSlider({ eyebrow, title, perView = 3, items, renderItem, more, className = '' }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild;
    const step = first ? first.getBoundingClientRect().width + 30 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className={styles.head}>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <SliderControls onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
        </div>

        <div className={styles.track} ref={trackRef} style={{ '--per-view': perView }}>
          {items.map((item, i) => (
            <div className={styles.item} key={i}>
              {renderItem(item)}
            </div>
          ))}
        </div>

        {more && (
          <div className={styles.more}>
            <p className="h3">{more.text}</p>
            <Button to={more.to} size="large">
              {more.label}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
