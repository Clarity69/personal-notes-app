import { Link } from 'react-router-dom';
import { useLocale } from '../contexts/LocaleContext';

function NotFoundPage() {
  const { t } = useLocale();

  return (
    <section className="not-found">
      <h2 className="not-found__code">404</h2>
      <p>{t('notFoundMessage')}</p>
      <Link to="/">{t('backHome')}</Link>
    </section>
  );
}

export default NotFoundPage;
