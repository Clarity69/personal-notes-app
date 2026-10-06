import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { useLocale } from '../contexts/LocaleContext';
import useAsyncAction from '../hooks/useAsyncAction';
import { addNote } from '../utils/network-data';

function AddPage() {
  const navigate = useNavigate();
  const { t } = useLocale();
  const [isSubmitting, runAction] = useAsyncAction();

  async function onAddNoteHandler(note) {
    const { error } = await runAction(addNote, note);
    if (!error) navigate('/');
  }

  return (
    <section className="add-new-page">
      <h2 className="visually-hidden">{t('addNote')}</h2>
      <NoteInput addNote={onAddNoteHandler} isSubmitting={isSubmitting} />
    </section>
  );
}

export default AddPage;
