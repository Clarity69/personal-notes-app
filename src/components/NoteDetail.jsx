import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { useLocale } from '../contexts/LocaleContext';
import { showFormattedDate } from '../utils';

function NoteDetail({ title, body, createdAt }) {
  const { locale } = useLocale();

  return (
    <article className="detail-page__content">
      <h2 className="detail-page__title">{title}</h2>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt, locale)}</p>
      <div className="detail-page__body">{parser(body)}</div>
    </article>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
