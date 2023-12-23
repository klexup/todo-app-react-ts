import { useEffect, useState } from "react";

export default function useLocalStorage(storageName) {
  const [todos, setTodos] = useState(() => {
    const array =
      localStorage.getItem(storageName) === null
        ? []
        : JSON.parse(localStorage.getItem(storageName));
    return array;
  });

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos];
}
