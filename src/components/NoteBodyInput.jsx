import PropTypes from 'prop-types';
import { useLocale } from '../contexts/LocaleContext';

function NoteBodyInput({ onValueChange }) {
  const { t } = useLocale();

  return (
    <div
      className="add-new-page__input__body"
      contentEditable
      role="textbox"
      aria-multiline="true"
      aria-label={t('bodyPlaceholder')}
      data-placeholder={t('bodyPlaceholder')}
      onInput={(event) => onValueChange(event.target.innerHTML)}
    />
  );
}

NoteBodyInput.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};

export default NoteBodyInput;
