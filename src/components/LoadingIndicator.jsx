import { useLocale } from '../contexts/LocaleContext';

function LoadingIndicator() {
  const { t } = useLocale();

  return (
    <div className="loading-indicator" role="status" aria-live="polite">
      <span className="loading-indicator__spinner" aria-hidden="true" />
      <span>{t('loading')}</span>
    </div>
  );
}

export default LoadingIndicator;
