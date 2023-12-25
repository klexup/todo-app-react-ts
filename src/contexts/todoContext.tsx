import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function filterTodos(
  todos: Todo[],
  sortOption: SortOption,
  tagFilter: string,
  searchInput: string,
) {
  const todosCopy = todos
    .filter((value: Todo) => value.taskName.includes(searchInput))
    .filter((value: Todo) => {
      if (tagFilter === "") return value;
      return value.tags.includes(tagFilter);
    });

  switch (sortOption) {
    case "default":
      return todosCopy;
    case "ascending-priority":
      return todosCopy.sort((a, b) => {
        const valueA = a.priorityLevel;
        const valueB = b.priorityLevel;
        if (valueA < valueB) {
          return -1;
        } else if (valueA > valueB) {
          return 1;
        } else {
          return 0;
        }
      });
    case "descending-priority":
      return todosCopy.sort((a, b) => {
        const valueA = a.priorityLevel;
        const valueB = b.priorityLevel;
        if (valueA < valueB) {
          return 1;
        } else if (valueA > valueB) {
          return -1;
        } else {
          return 0;
        }
      });
    case "ascending-complexity":
      return todosCopy.sort((a, b) => {
        const valueA = a.complexityLevel;
        const valueB = b.complexityLevel;
        if (valueA < valueB) {
          return -1;
        } else if (valueA > valueB) {
          return 1;
        } else {
          return 0;
        }
      });
    case "descending-complexity":
      return todosCopy.sort((a, b) => {
        const valueA = a.complexityLevel;
        const valueB = b.complexityLevel;
        if (valueA < valueB) {
          return 1;
        } else if (valueA > valueB) {
          return -1;
        } else {
          return 0;
        }
      });
    case "ascending-date":
      return todosCopy.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
      );
    case "descending-date":
      return todosCopy.sort(
        (a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime(),
      );

    default:
      return todos;
  }
}

export default function TodoProvider({ children }: any) {
  const [todos, setTodos] = useLocalStorage("todos");
  const [searchInput, setSearchInput] = useState("");
  const [tagFilter, setTagFilter] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const allCurrentTags = [
    ...new Set(todos.flatMap((value: Todo) => value.tags)),
  ] as string[];

  const handleSubmitNewTask = (newTodo: Todo) => {
    setTodos((prev: Todo[]) => {
      return [...prev, newTodo];
    });
  };

  const handleUpdateTask = (updatedTodo: Todo) => {
    setTodos((prev: Todo[]) => {
      return prev.map((todo: Todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );
    });
  };

  const toggleCompleted = (id: string) => {
    setTodos(() => {
      return todos.map((value: Todo) => {
        if (value.id === id) {
          return { ...value, completed: !value.completed };
        }
        return value;
      });
    });
  };

  const handleDeleteTask = (id: string) => {
    setTodos(() => {
      return todos.filter((value: Todo) => value.id !== id);
    });
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          handleSubmitNewTask,
          handleUpdateTask,
          toggleCompleted,
          handleDeleteTask,
          sortOption,
          setSortOption,
          tagFilter,
          setTagFilter,
          searchInput,
          setSearchInput,
          allCurrentTags,
          filterTodos,
        }}
      >
        {children}
      </TodoContext.Provider>
      ;
    </>
  );
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  handleSubmitNewTask: () => {},
  handleUpdateTask: () => {},
  toggleCompleted: () => {},
  handleDeleteTask: () => {},
  sortOption: "default",
  setSortOption: () => {},
  tagFilter: "",
  setTagFilter: () => {},
  searchInput: "",
  setSearchInput: () => {},
  allCurrentTags: [],
  filterTodos: () => [],
});
