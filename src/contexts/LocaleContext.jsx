import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import translations from '../utils/locales';

const LOCALE_STORAGE_KEY = 'locale';
const LocaleContext = createContext(null);

function getInitialLocale() {
  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  return savedLocale === 'en' ? 'en' : 'id';
}

function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale);

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prevLocale) => (prevLocale === 'id' ? 'en' : 'id'));
  }, []);

  const t = useCallback((key) => translations[locale][key] ?? key, [locale]);

  const value = useMemo(() => ({ locale, toggleLocale, t }), [locale, toggleLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale harus dipakai di dalam LocaleProvider');
  return context;
}

export { LocaleProvider, useLocale };
