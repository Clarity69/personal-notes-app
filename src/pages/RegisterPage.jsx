import { useNavigate } from 'react-router-dom';
import AuthSwitch from '../components/AuthSwitch';
import RegisterInput from '../components/RegisterInput';
import { useLocale } from '../contexts/LocaleContext';
import useAsyncAction from '../hooks/useAsyncAction';
import { register } from '../utils/network-data';

function RegisterPage() {
  const { t } = useLocale();
  const navigate = useNavigate();
  const [isLoading, runAction] = useAsyncAction();

  async function onRegisterHandler(user) {
    const { error } = await runAction(register, user);
    if (!error) navigate('/login', { state: { registered: true } });
  }

  return (
    <section className="auth-page">
      <h2 className="page-heading">{t('registerHeading')}</h2>
      <p className="auth-page__lead">{t('registerLead')}</p>

      <RegisterInput register={onRegisterHandler} isLoading={isLoading} />
      <AuthSwitch question={t('haveAccount')} linkText={t('loginHere')} to="/login" />
    </section>
  );
}

export default RegisterPage;
