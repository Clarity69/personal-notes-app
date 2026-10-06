import { MdGTranslate } from 'react-icons/md';
import { useLocale } from '../contexts/LocaleContext';

function LocaleToggle() {
  const { locale, toggleLocale, t } = useLocale();

  return (
    <button
      type="button"
      className="icon-button"
      onClick={toggleLocale}
      title={t('toggleLocale')}
      aria-label={t('toggleLocale')}
    >
      <MdGTranslate aria-hidden="true" />
      <span>{locale.toUpperCase()}</span>
    </button>
  );
}

export default LocaleToggle;
