import PropTypes from 'prop-types';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import { useLocale } from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

function LoginInput({ login, isLoading }) {
  const { t } = useLocale();
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();
    login({ email, password });
  }

  return (
    <form className="auth-form" onSubmit={onSubmitHandler}>
      <FormField
        id="login-email"
        label={t('email')}
        type="email"
        autoComplete="email"
        value={email}
        onChange={onEmailChange}
      />
      <FormField
        id="login-password"
        label={t('password')}
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <SubmitButton label={t('loginButton')} isLoading={isLoading} />
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoginInput;
