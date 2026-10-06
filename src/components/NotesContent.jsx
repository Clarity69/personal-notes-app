import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator';
import NoteList from './NoteList';

function NotesContent({ loading, notes, emptyMessage }) {
  if (loading) return <LoadingIndicator />;
  return <NoteList notes={notes} emptyMessage={emptyMessage} />;
}

NotesContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyMessage: PropTypes.string.isRequired,
};

export default NotesContent;
