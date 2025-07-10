// src/hooks/useStorage.js
import { useState, useEffect } from "react";

export function useStorage(key, defaultValue, useSession = false) {
  const storage = useSession ? sessionStorage : localStorage;

  const getStoredValue = () => {
    const stored = storage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const removeValue = () => {
    storage.removeItem(key);
    setValue(defaultValue);
  };

  return [value, setValue, removeValue];
}