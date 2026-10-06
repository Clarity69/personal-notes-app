import { Link, NavLink } from 'react-router-dom';
import LocaleToggle from './LocaleToggle';
import LogoutButton from './LogoutButton';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../contexts/AuthContext';
import { useLocale } from '../contexts/LocaleContext';

function getNavLinkClass({ isActive }) {
  return isActive ? 'navigation__link active' : 'navigation__link';
}

function Navigation() {
  const { authedUser } = useAuth();
  const { t } = useLocale();

  return (
    <header className="app-header">
      <h1 className="app-header__brand">
        <Link to="/">{t('appTitle')}</Link>
      </h1>

      <nav className="navigation" aria-label="Main">
        {authedUser && (
          <NavLink to="/archives" className={getNavLinkClass}>
            {t('navArchive')}
          </NavLink>
        )}
        <LocaleToggle />
        <ThemeToggle />
        {authedUser && <LogoutButton />}
      </nav>
    </header>
  );
}

export default Navigation;
