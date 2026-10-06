import { useNavigate, useParams } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';
import NoteDetail from '../components/NoteDetail';
import NoteDetailActions from '../components/NoteDetailActions';
import { useLocale } from '../contexts/LocaleContext';
import useAsyncAction from '../hooks/useAsyncAction';
import useFetch from '../hooks/useFetch';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import NotFoundPage from './NotFoundPage';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLocale();
  const { data: note, loading } = useFetch(getNote, id);
  const [isProcessing, runAction] = useAsyncAction();

  if (loading) return <LoadingIndicator />;
  if (!note) return <NotFoundPage />;

  const listPath = note.archived ? '/archives' : '/';

  async function onToggleArchive() {
    const toggleArchive = note.archived ? unarchiveNote : archiveNote;
    const { error } = await runAction(toggleArchive, id);
    if (!error) navigate(listPath);
  }

  async function onDelete() {
    if (!window.confirm(t('deleteConfirm'))) return;

    const { error } = await runAction(deleteNote, id);
    if (!error) navigate(listPath);
  }

  return (
    <section className="detail-page">
      <NoteDetail title={note.title} body={note.body} createdAt={note.createdAt} />
      <NoteDetailActions
        archived={note.archived}
        onToggleArchive={onToggleArchive}
        onDelete={onDelete}
        disabled={isProcessing}
      />
    </section>
  );
}

export default DetailPage;
