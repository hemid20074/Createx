import { useState } from 'react';

/**
 * Decorative background shape (circles, dots, chevrons…) positioned absolutely.
 * Renders nothing if the asset hasn't been downloaded yet.
 */
export default function Decor({ src, style, className = '', rotate, opacity }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={`/assets/${src}`}
      alt=""
      aria-hidden="true"
      className={className}
      onError={() => setFailed(true)}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        userSelect: 'none',
        maxWidth: 'none',
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        opacity,
        ...style,
      }}
    />
  );
}
