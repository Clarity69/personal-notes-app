import PropTypes from 'prop-types';
import { useLocale } from '../contexts/LocaleContext';

function SubmitButton({ label, isLoading }) {
  const { t } = useLocale();

  return (
    <button type="submit" className="btn-primary" disabled={isLoading}>
      {isLoading ? t('processing') : label}
    </button>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SubmitButton;
