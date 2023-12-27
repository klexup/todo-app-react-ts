import { useContext, useState } from "react";
import ViewPageTodo from "../components/ViewPageTodo";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../contexts/todoContext";
import SubtaskChecklist from "../components/SubtaskChecklist";

export default function ViewTodoPage() {
  const { todos, handleDeleteTask } = useContext(TodoContext);
  const { todoId } = useParams();
  const navigate = useNavigate();

  const [currentTodo, setCurrentTodo] = useState(() => {
    const foundTodo = todos.find((todo) => {
      if (todo.id === todoId) {
        return todo;
      }
    });
    return foundTodo;
  });

  if (!currentTodo) {
    return (
      <>
        <div className="flex w-[398px] flex-col">
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
            <div className="text-2xl">Todo not found</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex w-[398px] flex-col">
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
          <h1 className="text-center text-H1 font-medium">Task Details</h1>
        </div>
        <ViewPageTodo value={currentTodo} />

        {currentTodo.subTasks.length > 0 ? (
          <h1 className="mt-5 text-left text-H1 font-medium">
            Checklist for subtasks
          </h1>
        ) : (
          false
        )}

        <SubtaskChecklist
          {...currentTodo}
          setCurrentTodo={setCurrentTodo}
          currentTodo={currentTodo}
        />

        <div className="mt-5 flex justify-between">
          <div
            className="flex h-[60px] w-[184px] cursor-pointer items-center justify-center rounded-full bg-blue-100 transition-all hover:bg-PRIMARY"
            onClick={() => {
              navigate(`/editTodo/${todoId}`);
            }}
          >
            Edit Task
          </div>
          <div
            className="flex h-[60px] w-[184px] cursor-pointer items-center justify-center rounded-full bg-red-100 transition-all hover:bg-STYLE"
            onClick={() => {
              if (todoId) {
                handleDeleteTask(todoId);
                navigate(`/`);
              }
            }}
          >
            Delete Task
          </div>
        </div>
      </div>
    </>
  );
}
