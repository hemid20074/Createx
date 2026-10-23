import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

const pad = (n) => String(n).padStart(2, '0');

/** Live countdown. `to` — Date or timestamp; defaults to ~6 days 18 h from first render. */
export default function Countdown({ to }) {
  const [target] = useState(() => (to ? new Date(to).getTime() : Date.now() + ((6 * 24 + 18) * 60 + 24) * 60_000 + 12_000));
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const left = Math.max(0, target - now);
  const s = Math.floor(left / 1000);
  const parts = [
    [Math.floor(s / 86400), 'Days'],
    [Math.floor((s % 86400) / 3600), 'Hours'],
    [Math.floor((s % 3600) / 60), 'Mins'],
    [s % 60, 'Sec'],
  ];

  return (
    <div className={styles.countdown} role="timer" aria-live="off">
      {parts.map(([v, l]) => (
        <span key={l} className={styles.part}>
          <span className={styles.value}>{pad(v)}</span>
          <span className={styles.label}>{l}</span>
        </span>
      ))}
    </div>
  );
}
