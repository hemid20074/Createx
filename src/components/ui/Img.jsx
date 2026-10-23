import { useEffect, useState } from 'react';
import styles from './Img.module.css';

/**
 * Image from /public/assets. Until `npm run assets` has downloaded the Figma
 * exports, it renders a neutral placeholder of the same box instead of a broken image.
 */
export default function Img({ src, alt = '', className, style, ...rest }) {
  const [failed, setFailed] = useState(false);
  const url = src.startsWith('/') || src.startsWith('http') ? src : `/assets/${src}`;

  if (failed) {
    return (
      <span
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        className={`${styles.placeholder} ${className || ''}`}
        style={style}
      />
    );
  }
  return (
    <img
      src={url}
      alt={alt}
      className={className}
      style={style}
      onError={() => setFailed(true)}
      loading="lazy"
      {...rest}
    />
  );
}

/**
 * Monochrome SVG drawn with the current text color (the SVG is used as a CSS mask),
 * so one icon file works on light and dark backgrounds and in hover states.
 */
export function MaskIcon({ src, size = 24, className, label }) {
  const path = `/assets/${src}`;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    const probe = new Image();
    probe.onload = () => alive && setLoaded(true);
    probe.src = path;
    return () => {
      alive = false;
    };
  }, [path]);

  const url = `url(${path})`;
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`${styles.mask} ${loaded ? '' : styles.maskPending} ${className || ''}`}
      style={{ width: size, height: size, WebkitMaskImage: url, maskImage: url }}
    />
  );
}
