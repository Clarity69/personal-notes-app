import useFetch from './useFetch';
import useKeyword from './useKeyword';
import { filterNotesByKeyword } from '../utils';

/**
 * Logika bersama halaman daftar catatan (aktif & arsip):
 * ambil data, baca keyword dari URL, lalu filter berdasarkan judul.
 */
function useSearchableNotes(fetchNotes) {
  const { data, loading } = useFetch(fetchNotes);
  const [keyword, changeKeyword] = useKeyword();

  const notes = filterNotesByKeyword(data ?? [], keyword);

  return { notes, loading, keyword, changeKeyword };
}

export default useSearchableNotes;
