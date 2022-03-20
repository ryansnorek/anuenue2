import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const handleKey = (key) => {
    const storedKey = localStorage.getItem(key);
    if (!storedKey) {
      localStorage.setItem(key, initialValue);
      return initialValue;
    }
    return storedKey;
  };
  const [value, setValue] = useState(handleKey(key));

  const setStoredValue = (value) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  return [value, setStoredValue];
}
