import { Link } from "react-router-dom";
import TaskInput from "./TaskInput";
import SelectPriorityLevel from "./SelectPriorityLevel";
import SelectComplexityLevel from "./SelectComplexityLevel";
import SelectDueDate from "./SelectDueDate";
import SelectTime from "./SelectTime";
import SubtaskInput from "./SubtaskInput";
import CurrentSubtasksList from "./CurrentSubtasksList";
import TagsInput from "./TagsInput";

interface TodoFormProps {
  title: string;
  currentTodo: Todo;
  setCurrentTodo: React.Dispatch<React.SetStateAction<Todo>>;
}

export default function TodoForm({
  title,
  currentTodo,
  setCurrentTodo,
}: TodoFormProps) {
  return (
    <>
      <div className="relative mb-10 flex w-full items-center justify-center">
        <Link
          to={"/"}
          className="absolute left-0 top-1/2 -translate-y-1/2 transition-all hover:scale-110"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="white" />
            <path
              d="M29 22H15"
              stroke="#25282B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 29L15 22L22 15"
              stroke="#25282B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <h1 className="text-center text-H1 font-medium">{title}</h1>
      </div>
      <TaskInput {...currentTodo} setCurrentTodo={setCurrentTodo} />
      <SelectPriorityLevel {...currentTodo} setCurrentTodo={setCurrentTodo} />
      <SelectComplexityLevel {...currentTodo} setCurrentTodo={setCurrentTodo} />
      <div className="mt-5 flex justify-between">
        <SelectDueDate {...currentTodo} setCurrentTodo={setCurrentTodo} />
        <SelectTime {...currentTodo} setCurrentTodo={setCurrentTodo} />
      </div>
      <SubtaskInput {...currentTodo} setCurrentTodo={setCurrentTodo} />
      <CurrentSubtasksList
        {...currentTodo}
        setCurrentTodo={setCurrentTodo}
        currentTodo={currentTodo}
      />
      <TagsInput {...currentTodo} setCurrentTodo={setCurrentTodo} />
    </>
  );
}
