import { useEffect, useState } from "react";

export default function useLocalStorage(storageName: string) {
  const [todos, setTodos] = useState(() => {
    const storedData = localStorage.getItem(storageName);
    if (storedData === null) {
      localStorage.setItem(storageName, JSON.stringify([]));
      return [];
    } else return JSON.parse(storedData);
  });

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(todos));
  }, [todos, storageName]);

  return [todos, setTodos];
}
