import Icon from './Icon';
import styles from './SliderControls.module.css';

/** slider-controls: plain "prev" arrow + "next" arrow that becomes a red circle on hover. */
export function SliderArrow({ dir = 'next', onClick, disabled, className = '' }) {
  return (
    <button
      type="button"
      className={`${styles.arrow} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'next' ? 'Next' : 'Previous'}
    >
      <Icon name={dir === 'next' ? 'arrowRight' : 'arrowLeft'} size={24} />
    </button>
  );
}

export default function SliderControls({ onPrev, onNext, prevDisabled, nextDisabled, className = '' }) {
  return (
    <div className={`${styles.controls} ${className}`}>
      <SliderArrow dir="prev" onClick={onPrev} disabled={prevDisabled} />
      <SliderArrow dir="next" onClick={onNext} disabled={nextDisabled} />
    </div>
  );
}

export function SliderDots({ count, active, onSelect, className = '' }) {
  return (
    <div className={`${styles.dots} ${className}`} role="tablist" aria-label="Slides">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`Slide ${i + 1}`}
          className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
