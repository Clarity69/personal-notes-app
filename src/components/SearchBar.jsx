import PropTypes from 'prop-types';
import { useLocale } from '../contexts/LocaleContext';

function SearchBar({ keyword, keywordChange }) {
  const { t } = useLocale();

  return (
    <div className="search-bar">
      <label htmlFor="search-notes" className="visually-hidden">
        {t('searchLabel')}
      </label>
      <input
        id="search-notes"
        type="search"
        placeholder={t('searchPlaceholder')}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
