import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../contexts/todoContext";
import TodoForm from "../components/TodoForm";

export default function NewTodoPage() {
  const { handleSubmitNewTask } = useContext(TodoContext);

  const [currentTodo, setCurrentTodo] = useState({
    id: crypto.randomUUID(),
    completed: false,
    taskName: "",
    priorityLevel: 0,
    complexityLevel: 0,
    dueDate: null,
    dueTime: null,
    subTasks: [],
    tags: [],
  });

  return (
    <>
      <div className="jusi flex w-[398px] flex-col">
        <TodoForm
          title={"Add New Task"}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
        <Link
          to={"/"}
          className="mt-5 flex h-[60px] w-[192px] cursor-pointer items-center justify-center self-center rounded-full bg-PRIMARY text-PRIMARYBUTTON text-WH transition-all hover:scale-110"
          onClick={() => {
            handleSubmitNewTask(currentTodo);
          }}
        >
          Save Task
        </Link>
      </div>
    </>
  );
}
