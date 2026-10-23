import { useEffect, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Img from '../ui/Img';
import { SliderArrow, SliderDots } from '../ui/SliderControls';
import { testimonials } from '../../data/people';
import styles from './Testimonials.module.css';

/** Testimonials (carousel) — one review per slide, arrows on the sides, dash dots below. */
export default function Testimonials({ className = '' }) {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const go = (i) => setIndex((i + count) % count);

  // autoplay, paused while the user hovers the slider
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <section className={`section ${className}`}>
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What our students say" align="center" />

        <div
          className={styles.slider}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <SliderArrow dir="prev" onClick={() => go(index - 1)} className={styles.prev} />

          <div className={styles.viewport}>
            <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((t, i) => (
                <figure className={styles.slide} key={t.name} aria-hidden={i !== index}>
                  <div className={styles.card}>
                    <svg className={styles.quote} width="28" height="20" viewBox="0 0 28 20" aria-hidden="true">
                      <path d="M0 20V10.4L4 0h6L7.2 10H12v10zm16 0V10.4L20 0h6l-2.8 10H28v10z" />
                    </svg>
                    <div className={styles.body}>
                      <blockquote className={styles.text}>{t.text}</blockquote>
                      <figcaption className={styles.author}>
                        <Img src={t.image} alt="" className={styles.avatar} />
                        <span>
                          <span className={styles.name}>{t.name}</span>
                          <span className={styles.position}>{t.position}</span>
                        </span>
                      </figcaption>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <SliderArrow dir="next" onClick={() => go(index + 1)} className={styles.next} />
        </div>

        <SliderDots count={count} active={index} onSelect={go} className={styles.dots} />
      </div>
    </section>
  );
}
