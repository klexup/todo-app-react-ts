import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TodoContext } from "../contexts/todoContext";
import TodoForm from "../components/TodoForm";

export default function EditTodoPage() {
  const { todos, handleUpdateTask } = useContext(TodoContext);

  const { todoId } = useParams();

  const [currentTodo, setCurrentTodo] = useState(() => {
    const foundTodo = todos.find((todo) => todo.id === todoId);
    return foundTodo!;
  });

  return (
    <>
      <div className="jusi flex w-[398px] flex-col">
        <TodoForm
          title={"Edit Task"}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
        <Link
          to={"/"}
          className="mt-5 flex h-[60px] w-[192px] cursor-pointer items-center justify-center self-center rounded-full bg-PRIMARY text-PRIMARYBUTTON text-WH transition-all hover:scale-110"
          onClick={() => {
            if (currentTodo !== undefined) {
              handleUpdateTask(currentTodo);
            }
          }}
        >
          Save Task
        </Link>
      </div>
    </>
  );
}
