import { useCallback, useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const resetValue = useCallback(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return [value, onValueChange, resetValue];
}

export default useInput;
