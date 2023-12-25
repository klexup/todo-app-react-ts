interface TodoContextType {
  todos: Todo[];
  handleSubmitNewTask: (newTodo: Todo) => void;
  handleUpdateTask: (updatedTodo: Todo) => void;
  toggleCompleted: (id: string) => void;
  handleDeleteTask: (id: string) => void;
  sortOption: SortOption;
  setSortOption: React.Dispatch<React.SetStateAction<SortOption>>;
  tagFilter: string;
  setTagFilter: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  allCurrentTags: any[];
  filterTodos: (
    todos: Todo[],
    sortOption: SortOption,
    tagFilter: string,
    searchInput: string,
  ) => Todo[];
}

type SortOption =
  | "default"
  | "ascending-priority"
  | "descending-priority"
  | "ascending-complexity"
  | "descending-complexity"
  | "ascending-date"
  | "descending-date";

interface Todo {
  id: string;
  taskName: string;
  priorityLevel: number;
  complexityLevel: number;
  dueDate: string;
  subTasks: SubTask[];
  tags: string[];
  completed: boolean;
}

interface SubTask {
  subtaskCompleted: boolean;
  subtaskId: string;
  subtaskName: string;
}
