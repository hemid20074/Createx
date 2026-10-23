import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const AuthModalContext = createContext(null);

export function AuthModalProvider({ children }) {
  const [mode, setMode] = useState(null); // null | 'signin' | 'signup'

  const open = useCallback((m = 'signin') => setMode(m), []);
  const close = useCallback(() => setMode(null), []);
  const value = useMemo(() => ({ mode, open, close, setMode }), [mode, open, close]);

  return <AuthModalContext.Provider value={value}>{children}</AuthModalContext.Provider>;
}

export function useAuthModal() {
  const ctx = useContext(AuthModalContext);
  if (!ctx) throw new Error('useAuthModal must be used inside <AuthModalProvider>');
  return ctx;
}
