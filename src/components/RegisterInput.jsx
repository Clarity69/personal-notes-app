import { useState } from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import { useLocale } from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

const PASSWORD_MIN_LENGTH = 6;

function getPasswordErrorKey(password, confirmPassword) {
  if (password.length < PASSWORD_MIN_LENGTH) return 'passwordMinLength';
  if (password !== confirmPassword) return 'passwordMismatch';
  return '';
}

function RegisterInput({ register, isLoading }) {
  const { t } = useLocale();
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  // Simpan key terjemahan (bukan teks) agar pesan ikut berganti saat bahasa diubah.
  const [errorKey, setErrorKey] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();

    const passwordErrorKey = getPasswordErrorKey(password, confirmPassword);
    setErrorKey(passwordErrorKey);
    if (passwordErrorKey) return;

    register({ name: name.trim(), email, password });
  }

  return (
    <form className="auth-form" onSubmit={onSubmitHandler}>
      <FormField
        id="register-name"
        label={t('name')}
        autoComplete="name"
        value={name}
        onChange={onNameChange}
      />
      <FormField
        id="register-email"
        label={t('email')}
        type="email"
        autoComplete="email"
        value={email}
        onChange={onEmailChange}
      />
      <FormField
        id="register-password"
        label={t('password')}
        type="password"
        autoComplete="new-password"
        value={password}
        onChange={onPasswordChange}
      />
      <FormField
        id="register-confirm-password"
        label={t('confirmPassword')}
        type="password"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />

      {errorKey && (
        <p className="form-message form-message--error" role="alert">
          {t(errorKey)}
        </p>
      )}

      <SubmitButton label={t('registerButton')} isLoading={isLoading} />
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RegisterInput;
