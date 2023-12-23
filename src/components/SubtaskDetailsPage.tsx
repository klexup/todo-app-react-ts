import { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";

export default function SubtaskDetailsPage({
  index,
  setCurrentTodo,
  subTasks,
  currentTodo,
}) {
  const { handleUpdateTask } = useContext(TodoContext);

  const handleToggleComplete = () => {
    const updatedSubTasks = subTasks.map((value, indx) => {
      if (indx === index)
        return { ...value, subtaskCompleted: !value.subtaskCompleted };
      return value;
    });
    const updatedCurrentTodo = {
      ...currentTodo,
      subTasks: updatedSubTasks,
    };
    setCurrentTodo(() => updatedCurrentTodo);
    handleUpdateTask(updatedCurrentTodo);
  };

  const isCompletedColor = subTasks[index].subtaskCompleted
    ? "bg-PRIMARY"
    : "bg-blue-100";

  return (
    <>
      <div
        className={`flex h-[60px] w-[398px] items-center justify-end rounded-full bg-WH `}
      >
        <div className="ml-4 mr-4 w-full outline-none">
          {index + 1}. {subTasks[index].subtaskName}
        </div>

        <div
          className={`mr-2 flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full ${isCompletedColor} transition-all hover:scale-110 hover:bg-PRIMARY`}
          onClick={handleToggleComplete}
        >
          {subTasks[index].subtaskCompleted ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="#25282B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
