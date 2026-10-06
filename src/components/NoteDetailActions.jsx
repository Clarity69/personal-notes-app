import PropTypes from 'prop-types';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import ActionBar from './ActionBar';
import ActionButton from './ActionButton';
import { useLocale } from '../contexts/LocaleContext';

function NoteDetailActions({ archived, onToggleArchive, onDelete, disabled }) {
  const { t } = useLocale();

  return (
    <ActionBar>
      <ActionButton
        title={archived ? t('unarchive') : t('archive')}
        icon={archived ? <BiArchiveOut /> : <BiArchiveIn />}
        onClick={onToggleArchive}
        disabled={disabled}
      />
      <ActionButton
        title={t('delete')}
        icon={<FiTrash2 />}
        onClick={onDelete}
        disabled={disabled}
        variant="danger"
      />
    </ActionBar>
  );
}

NoteDetailActions.propTypes = {
  archived: PropTypes.bool.isRequired,
  onToggleArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default NoteDetailActions;
