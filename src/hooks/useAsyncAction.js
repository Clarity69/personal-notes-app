import { useCallback, useState } from 'react';

/**
 * Membungkus aksi asynchronous (login, tambah, arsip, hapus, ...) dengan status proses.
 * Jika aksi berhasil, status tetap `true` karena halaman biasanya langsung berpindah,
 * sehingga tombol tidak bisa ditekan dua kali.
 */
function useAsyncAction() {
  const [isProcessing, setIsProcessing] = useState(false);

const runAction = useCallback(async (action, ...args) => {
  setIsProcessing(true);
  try {
    const result = await action(...args);
    if (result.error) setIsProcessing(false);
    return result;
  } catch {
    setIsProcessing(false);
    return { error: true };
  }
}, []);

  return [isProcessing, runAction];
}

export default useAsyncAction;
