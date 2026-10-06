import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';
import { useLocale } from '../contexts/LocaleContext';

function LogoutButton() {
  const { authedUser, logout } = useAuth();
  const { t } = useLocale();
  const navigate = useNavigate();

  function onLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <button
      type="button"
      className="icon-button"
      onClick={onLogout}
      title={t('logout')}
      aria-label={`${t('logout')} (${authedUser.name})`}
    >
      <FiLogOut aria-hidden="true" />
      <span className="icon-button__label">{authedUser.name}</span>
    </button>
  );
}

export default LogoutButton;
