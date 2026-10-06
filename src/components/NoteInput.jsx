import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';
import ActionBar from './ActionBar';
import ActionButton from './ActionButton';
import NoteBodyInput from './NoteBodyInput';
import NoteTitleInput from './NoteTitleInput';
import { useLocale } from '../contexts/LocaleContext';

function isBodyEmpty(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '').trim() === '';
}

function NoteInput({ addNote, isSubmitting }) {
  const { t } = useLocale();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    if (isBodyEmpty(body)) return;

    addNote({
      title: title.trim() || t('untitled'),
      body,
    });
  }

  return (
    <form className="add-new-page__input" onSubmit={onSubmitHandler}>
      <NoteTitleInput value={title} onValueChange={setTitle} />
      <NoteBodyInput onValueChange={setBody} />

      <ActionBar>
        <ActionButton
          type="submit"
          title={isSubmitting ? t('processing') : t('saveNote')}
          icon={<FiCheck />}
          disabled={isSubmitting || isBodyEmpty(body)}
        />
      </ActionBar>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default NoteInput;
