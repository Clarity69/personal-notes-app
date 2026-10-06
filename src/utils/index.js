function showFormattedDate(date, locale = 'id') {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', options);
}

function filterNotesByKeyword(notes, keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();
  if (!normalizedKeyword) return notes;

  return notes.filter((note) => note.title.toLowerCase().includes(normalizedKeyword));
}

export { showFormattedDate, filterNotesByKeyword };
