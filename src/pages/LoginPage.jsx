import { useLocation } from 'react-router-dom';
import AuthSwitch from '../components/AuthSwitch';
import LoginInput from '../components/LoginInput';
import { useAuth } from '../contexts/AuthContext';
import { useLocale } from '../contexts/LocaleContext';
import useAsyncAction from '../hooks/useAsyncAction';

function LoginPage() {
  const { login } = useAuth();
  const { t } = useLocale();
  const location = useLocation();
  const [isLoading, runAction] = useAsyncAction();
  const justRegistered = location.state?.registered === true;

  // Jika berhasil, PublicRoute otomatis mengarahkan ke halaman catatan.
  function onLoginHandler(credentials) {
    runAction(login, credentials);
  }

  return (
    <section className="auth-page">
      <h2 className="page-heading">{t('loginHeading')}</h2>
      <p className="auth-page__lead">{t('loginLead')}</p>

      {justRegistered && (
        <p className="form-message form-message--success" role="status">
          {t('registerSuccess')}
        </p>
      )}

      <LoginInput login={onLoginHandler} isLoading={isLoading} />
      <AuthSwitch question={t('noAccount')} linkText={t('registerHere')} to="/register" />
    </section>
  );
}

export default LoginPage;
