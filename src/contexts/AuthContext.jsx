import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getAccessToken,
  getUserLogged,
  login as loginRequest,
  putAccessToken,
} from '../utils/network-data';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

useEffect(() => {
  let ignore = false;

  async function restoreSession() {
    try {
      if (!getAccessToken()) return;

      const { error, data } = await getUserLogged();
      if (ignore) return;

      if (error) {
        putAccessToken('');
        return;
      }
      setAuthedUser(data);
    } catch {
      // Server tidak bisa dihubungi: lanjutkan sebagai tamu.
    } finally {
      if (!ignore) setInitializing(false);
    }
  }

  restoreSession();

  return () => {
    ignore = true;
  };
}, []);

  const login = useCallback(async ({ email, password }) => {
    const { error, data } = await loginRequest({ email, password });
    if (error) return { error: true };

    putAccessToken(data.accessToken);

    const { error: userError, data: user } = await getUserLogged();
    if (userError) return { error: true };

    setAuthedUser(user);
    return { error: false };
  }, []);

  const logout = useCallback(() => {
    putAccessToken('');
    setAuthedUser(null);
  }, []);

  const value = useMemo(
    () => ({ authedUser, initializing, login, logout }),
    [authedUser, initializing, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth harus dipakai di dalam AuthProvider');
  return context;
}

export { AuthProvider, useAuth };
