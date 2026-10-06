import PropTypes from 'prop-types';
import { useLocale } from '../contexts/LocaleContext';

const TITLE_CHAR_LIMIT = 50;

function NoteTitleInput({ value, onValueChange }) {
  const { t } = useLocale();

  function onChangeHandler(event) {
    onValueChange(event.target.value.slice(0, TITLE_CHAR_LIMIT));
  }

  return (
    <>
      <p className="add-new-page__char-limit">
        {t('charLeft')}: {TITLE_CHAR_LIMIT - value.length}
      </p>
      <input
        className="add-new-page__input__title"
        placeholder={t('titlePlaceholder')}
        aria-label={t('titlePlaceholder')}
        value={value}
        onChange={onChangeHandler}
      />
    </>
  );
}

NoteTitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default NoteTitleInput;
