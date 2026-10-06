import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

function useKeyword() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const changeKeyword = useCallback(
    (newKeyword) => {
      setSearchParams(newKeyword ? { keyword: newKeyword } : {}, { replace: true });
    },
    [setSearchParams],
  );

  return [keyword, changeKeyword];
}

export default useKeyword;
