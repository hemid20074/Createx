import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useAuthModal } from '../../context/AuthModalContext';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Socials from '../ui/Socials';
import { Checkbox, Field } from '../ui/Form';
import styles from './AuthModal.module.css';

const COPY = {
  signin: {
    title: 'Sign in',
    lead: 'Sign in to your account using email and password provided during registration.',
    submit: 'Sign in',
    switchText: "Don't have an account?",
    switchLink: 'Sign up',
    switchTo: 'signup',
  },
  signup: {
    title: 'Sign up',
    lead: 'Registration takes less than a minute but gives you full control over your studying.',
    submit: 'Sign up',
    switchText: 'Already have an account?',
    switchLink: 'Sign in',
    switchTo: 'signin',
  },
};

export default function AuthModal() {
  const { mode, close, setMode } = useAuthModal();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!mode) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('input')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mode, close]);

  if (!mode) return null;
  const t = COPY[mode];

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your auth API
    close();
  };

  return createPortal(
    <div className={styles.backdrop} onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
      >
        <button type="button" className={styles.close} onClick={close} aria-label="Close">
          <Icon name="cross" size={24} />
        </button>

        <div className={styles.body}>
          <h2 id="auth-title" className="h3">
            {t.title}
          </h2>
          <p className={styles.lead}>{t.lead}</p>

          <form className={styles.form} onSubmit={onSubmit} key={mode}>
            {mode === 'signup' && (
              <Field label="Full Name" placeholder="Your full name" autoComplete="name" required />
            )}
            <Field
              label="Email"
              type="email"
              placeholder="Your working email"
              autoComplete="email"
              required
            />
            <Field
              label="Password"
              type="password"
              defaultValue=""
              placeholder="••••••••••••"
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              required
            />
            {mode === 'signup' && (
              <Field
                label="Confirm Password"
                type="password"
                placeholder="••••••••••••"
                autoComplete="new-password"
                required
              />
            )}

            <div className={styles.row}>
              <Checkbox>{mode === 'signin' ? 'Keep me signed in' : 'Remember me'}</Checkbox>
              {mode === 'signin' && (
                <a href="#" className={styles.forgot}>
                  Forgot password?
                </a>
              )}
            </div>

            <Button type="submit" block size="regular">
              {t.submit}
            </Button>

            <p className={styles.switch}>
              {t.switchText}{' '}
              <button type="button" onClick={() => setMode(t.switchTo)}>
                {t.switchLink}
              </button>
            </p>
          </form>
        </div>

        <div className={styles.footer}>
          <p>Or sign in with</p>
          <Socials items={['facebook', 'google', 'twitter', 'linkedin']} size={20} gap={12} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
