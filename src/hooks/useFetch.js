import { useEffect, useState } from 'react';

/**
 * Menjalankan fungsi GET dari network-data dan mengelola status loading.
 * @param {(param?: string) => Promise<{ error: boolean, data: any }>} fetcher
 *   Harus referensi yang stabil (fungsi hasil import sudah stabil).
 * @param {string} [param] Argumen untuk fetcher, misalnya id catatan.
 */
function useFetch(fetcher, param) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  let ignore = false;

  async function loadData() {
    setLoading(true);
    try {
      const { error, data: result } = await fetcher(param);
      if (!ignore) setData(error ? null : result);
    } catch {
      if (!ignore) setData(null);
    } finally {
      if (!ignore) setLoading(false);
    }
  }

  loadData();

  return () => {
    ignore = true;
  };
}, [fetcher, param]);

  return { data, loading };
}

export default useFetch;
