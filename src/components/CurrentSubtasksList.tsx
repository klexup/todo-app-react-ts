import React from "react";
import SubtaskNewTodoPage from "./SubtaskNewTodoPage";

export default function CurrentSubtasksList({
  subTasks,
  currentTodo,
  setCurrentTodo,
}) {
  return (
    <>
      <div className="mb-5 flex flex-col gap-3">
        {subTasks.map((value, index) => {
          return (
            <div key={value.subtaskId}>
              <SubtaskNewTodoPage
                index={index}
                setCurrentTodo={setCurrentTodo}
                subTasks={subTasks}
                currentTodo={currentTodo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
