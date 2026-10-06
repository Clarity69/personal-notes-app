import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, emptyMessage }) {
  if (notes.length === 0) {
    return <p className="notes-list-empty">{emptyMessage}</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  emptyMessage: PropTypes.string.isRequired,
};

export default NoteList;
