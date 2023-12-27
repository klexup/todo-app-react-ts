import { useRef, useState } from "react";

interface SubtaskNewTodoPageProps {
  index: number;
  setCurrentTodo: React.Dispatch<React.SetStateAction<Todo>>;
  subTasks: SubTask[];
  currentTodo: Todo;
}

export default function SubtaskNewTodoPage({
  index,
  setCurrentTodo,
  subTasks,
  currentTodo,
}: SubtaskNewTodoPageProps) {
  const subtaskInputRef = useRef<HTMLInputElement>(null);
  const [subtaskInputFocused, setSubtaskInputFocused] = useState(false);
  const handleChange = (newValue: string) => {
    setCurrentTodo(() => {
      const updatedSubTasks = [...subTasks];
      updatedSubTasks[index] = {
        ...updatedSubTasks[index],
        subtaskName: newValue,
      };
      const updatedCurrentTodo = {
        ...currentTodo,
        subTasks: updatedSubTasks,
      };

      return updatedCurrentTodo;
    });
  };
  const handleDelete = () => {
    setCurrentTodo(() => {
      const updatedSubTasks = subTasks.slice();
      updatedSubTasks.splice(index, 1);
      const updatedCurrentTodo = {
        ...currentTodo,
        subTasks: updatedSubTasks,
      };
      return updatedCurrentTodo;
    });
  };

  return (
    <>
      <div
        className={`flex h-[60px] w-[398px] cursor-text items-center justify-end rounded-full bg-WH ${
          subtaskInputFocused ? "border-1 border-BLK" : "border-1 border-STROKE"
        }`}
        onClick={() => {
          if (subtaskInputRef.current) subtaskInputRef.current.focus();
        }}
      >
        <input
          ref={subtaskInputRef}
          type="text"
          name="search"
          id="search"
          className="ml-4 mr-4 w-full cursor-text outline-none"
          value={subTasks[index].subtaskName}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          onFocus={() => {
            setSubtaskInputFocused((prev) => !prev);
          }}
          onBlur={() => {
            setSubtaskInputFocused((prev) => !prev);
          }}
        />
        <div
          className="mr-2 flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full bg-red-100 transition-all hover:scale-110 hover:bg-red-400"
          onClick={handleDelete}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#25282B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#25282B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
