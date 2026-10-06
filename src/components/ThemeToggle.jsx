import { FiMoon, FiSun } from 'react-icons/fi';
import { useLocale } from '../contexts/LocaleContext';
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();

  return (
    <button
      type="button"
      className="icon-button"
      onClick={toggleTheme}
      title={t('toggleTheme')}
      aria-label={t('toggleTheme')}
    >
      {theme === 'light' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
