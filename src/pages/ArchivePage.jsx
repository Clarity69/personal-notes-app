import NotesContent from '../components/NotesContent';
import SearchBar from '../components/SearchBar';
import { useLocale } from '../contexts/LocaleContext';
import useSearchableNotes from '../hooks/useSearchableNotes';
import { getArchivedNotes } from '../utils/network-data';

function ArchivePage() {
  const { t } = useLocale();
  const { notes, loading, keyword, changeKeyword } = useSearchableNotes(getArchivedNotes);

  return (
    <section className="archives-page">
      <h2 className="page-heading">{t('archivedNotes')}</h2>
      <SearchBar keyword={keyword} keywordChange={changeKeyword} />
      <NotesContent
        loading={loading}
        notes={notes}
        emptyMessage={keyword ? t('noSearchResult') : t('emptyArchive')}
      />
    </section>
  );
}

export default ArchivePage;
