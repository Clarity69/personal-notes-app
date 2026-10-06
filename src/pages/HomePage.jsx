import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import ActionBar from '../components/ActionBar';
import ActionButton from '../components/ActionButton';
import NotesContent from '../components/NotesContent';
import SearchBar from '../components/SearchBar';
import { useLocale } from '../contexts/LocaleContext';
import useSearchableNotes from '../hooks/useSearchableNotes';
import { getActiveNotes } from '../utils/network-data';

function HomePage() {
  const { t } = useLocale();
  const navigate = useNavigate();
  const { notes, loading, keyword, changeKeyword } = useSearchableNotes(getActiveNotes);

  return (
    <section className="homepage">
      <h2 className="page-heading">{t('activeNotes')}</h2>
      <SearchBar keyword={keyword} keywordChange={changeKeyword} />
      <NotesContent
        loading={loading}
        notes={notes}
        emptyMessage={keyword ? t('noSearchResult') : t('emptyActive')}
      />

      <ActionBar>
        <ActionButton
          title={t('addNote')}
          icon={<FiPlus />}
          onClick={() => navigate('/notes/new')}
        />
      </ActionBar>
    </section>
  );
}

export default HomePage;
